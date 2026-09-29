const https = require('https');
const fs = require('fs');
const path = require('path');

const ENTITIES = [
  'afp-onp', 'atu', 'banco-nacion', 'bonos', 'cancilleria', 'cofide', 'cofopri',
  'conadis', 'defensoria', 'documentos', 'essalud', 'fiscalia', 'indecopi', 'inpe',
  'midis', 'migraciones', 'minedu', 'minsa', 'mivivienda', 'mtc', 'mtpe',
  'municipalidades', 'notarias', 'oece', 'onpe', 'osinergmin', 'osiptel', 'pj',
  'pnp', 'produce', 'pronabec', 'reniec', 'sat', 'sbs', 'senasa', 'sernanp',
  'sis', 'sucamec', 'sunafil', 'sunarp', 'sunass', 'sunat', 'sunedu', 'susalud',
  'sutran', 'universidades', 'visas'
];

function fetchUrl(url) {
  return new Promise((resolve, reject) => {
    https.get(url, { headers: { 'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)' } }, (res) => {
      if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
        return fetchUrl(res.headers.location).then(resolve).catch(reject);
      }
      if (res.statusCode !== 200) {
        return reject(new Error(`HTTP ${res.statusCode} for ${url}`));
      }
      let html = '';
      res.on('data', chunk => html += chunk);
      res.on('end', () => resolve(html));
    }).on('error', reject);
  });
}

function cleanText(t) {
  if (!t) return '';
  return t
    .replace(/<[^>]+>/g, ' ')
    .replace(/&nbsp;/g, ' ')
    .replace(/&amp;/g, '&')
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/\s+/g, ' ')
    .trim();
}

function parseEntityPage(entity, html) {
  const tramites = [];
  
  // Method 1: Look for card elements containing links to /entity/procedure-slug/ or procedure-slug/
  // Match <a href="..." ...> ... </a>
  const regex = /<a[^>]+href=["']([^"']+)["'][^>]*>([\s\S]*?)<\/a>/gi;
  let match;

  const seenSlugs = new Set();

  while ((match = regex.exec(html)) !== null) {
    const rawHref = match[1];
    const innerHtml = match[2];

    // Check if this looks like a procedure link
    let slug = '';
    if (rawHref.startsWith(`https://tramitesperu.com/${entity}/`)) {
      const parts = rawHref.replace(`https://tramitesperu.com/${entity}/`, '').replace(/\/$/, '').split('/');
      if (parts.length === 1 && parts[0] && !parts[0].startsWith('#')) slug = parts[0];
    } else if (rawHref.startsWith(`/${entity}/`)) {
      const parts = rawHref.replace(`/${entity}/`, '').replace(/\/$/, '').split('/');
      if (parts.length === 1 && parts[0] && !parts[0].startsWith('#')) slug = parts[0];
    } else if (!rawHref.startsWith('/') && !rawHref.startsWith('http') && !rawHref.startsWith('#') && !rawHref.startsWith('..')) {
      const parts = rawHref.replace(/\/$/, '').split('/');
      if (parts.length === 1 && parts[0]) slug = parts[0];
    }

    if (!slug || seenSlugs.has(slug)) continue;

    // Filter out navigation/hub links
    if (['calculadoras', 'comparadores', 'guias', 'populares', 'entidades', 'preguntas'].includes(slug)) continue;

    // Extract title, description, badge info from innerHtml
    const rawLines = innerHtml
      .split(/[\r\n]+/)
      .map(l => cleanText(l))
      .filter(l => l.length > 0 && !['Ver requisitos', 'Ver guía', 'Ver guía completa', 'Ver trámite', 'Más información'].includes(l));

    if (rawLines.length === 0) continue;

    let modalidad = 'online';
    let costoTipo = 'gratuito';
    let costo = 0;
    let titulo = '';
    let descripcion = '';

    // First line might be modality like "Virtual", "Presencial", "Virtual · Gratis", "Presencial · Con costo"
    let startIdx = 0;
    const firstLine = rawLines[0].toLowerCase();
    if (firstLine.includes('virtual') && firstLine.includes('presencial')) {
      modalidad = 'mixta';
      startIdx = 1;
    } else if (firstLine.includes('virtual') || firstLine.includes('en línea') || firstLine.includes('digital')) {
      modalidad = 'online';
      startIdx = 1;
    } else if (firstLine.includes('presencial')) {
      modalidad = 'presencial';
      startIdx = 1;
    }

    if (firstLine.includes('gratis') || firstLine.includes('gratuito')) {
      costoTipo = 'gratuito';
      costo = 0;
    }

    // Title is usually the next line
    if (startIdx < rawLines.length) {
      titulo = rawLines[startIdx];
      startIdx++;
    } else {
      titulo = slug.replace(/-/g, ' ');
    }

    // Description
    if (startIdx < rawLines.length) {
      descripcion = rawLines[startIdx];
      startIdx++;
    }

    // Parse additional metadata from remaining lines
    const remainingText = rawLines.slice(startIdx).join(' ');
    const fullBlockText = rawLines.join(' ');

    if (/gratis|gratuito/i.test(fullBlockText)) {
      costoTipo = 'gratuito';
      costo = 0;
    } else {
      const costMatch = fullBlockText.match(/S\/\s*([0-9]+(?:\.[0-9]{2})?)/);
      if (costMatch) {
        costoTipo = 'fijo';
        costo = parseFloat(costMatch[1]);
      } else if (/costo|pago|tasa/i.test(fullBlockText)) {
        costoTipo = 'fijo';
      }
    }

    seenSlugs.add(slug);
    tramites.push({
      id: `${entity}_${slug}`,
      slug: slug,
      entidad: entity,
      nombre: titulo,
      descripcion: descripcion || `Trámite oficial de ${titulo} gestionado por ${entity.toUpperCase()}.`,
      url: `https://tramitesperu.com/${entity}/${slug}/`,
      modalidad: modalidad,
      costo_tipo: costoTipo,
      costo: costo,
      meta_raw: remainingText
    });
  }

  return tramites;
}

async function run() {
  console.log(`Starting scrape of ${ENTITIES.length} entities...`);
  const allTramites = [];
  const entitySummary = {};

  for (let i = 0; i < ENTITIES.length; i++) {
    const ent = ENTITIES[i];
    const url = `https://tramitesperu.com/${ent}/`;
    try {
      console.log(`[${i+1}/${ENTITIES.length}] Fetching ${ent}...`);
      const html = await fetchUrl(url);
      const items = parseEntityPage(ent, html);
      console.log(`  -> Found ${items.length} tramites for ${ent}`);
      entitySummary[ent] = items.length;
      allTramites.push(...items);
    } catch (e) {
      console.error(`  -> ERROR fetching ${ent}:`, e.message);
      entitySummary[ent] = 0;
    }
    // Small delay to be polite
    await new Promise(r => setTimeout(r, 150));
  }

  console.log(`\nDONE! Total tramites extracted: ${allTramites.length}`);
  console.log('Summary by entity:');
  console.log(JSON.stringify(entitySummary, null, 2));

  fs.writeFileSync('commits/all_extracted_tramites.json', JSON.stringify(allTramites, null, 2), 'utf-8');
  console.log('Saved to commits/all_extracted_tramites.json');
}

run();
