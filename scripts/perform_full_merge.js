const fs = require('fs');
const path = require('path');

const rawCatalogPath = path.join(__dirname, '../commits/raw_catalog_source.json');
const extractedPath = path.join(__dirname, '../commits/all_extracted_tramites.json');

const rawCatalog = JSON.parse(fs.readFileSync(rawCatalogPath, 'utf-8'));
const extracted = JSON.parse(fs.readFileSync(extractedPath, 'utf-8'));

// Entity ID mapping to raw_catalog_source format
const ENTITY_MAP = {
  'afp-onp': 'afp_onp',
  'atu': 'atu',
  'banco-nacion': 'banco_nacion',
  'bonos': 'midis',
  'cancilleria': 'cancilleria',
  'cofide': 'cofide',
  'cofopri': 'cofopri',
  'conadis': 'conadis',
  'defensoria': 'defensoria',
  'documentos': 'notarias',
  'essalud': 'essalud',
  'fiscalia': 'fiscalia',
  'indecopi': 'indecopi',
  'inpe': 'inpe',
  'midis': 'midis',
  'migraciones': 'migraciones',
  'minedu': 'minedu',
  'minsa': 'minsa',
  'mivivienda': 'mivivienda',
  'mtc': 'mtc',
  'mtpe': 'mtpe',
  'municipalidades': 'municipalidades',
  'notarias': 'notarias',
  'oece': 'oece',
  'onpe': 'onpe_jne',
  'osinergmin': 'osinergmin',
  'osiptel': 'osiptel',
  'pj': 'pj',
  'pnp': 'pnp',
  'produce': 'produce',
  'pronabec': 'pronabec',
  'reniec': 'reniec',
  'sat': 'sat',
  'sbs': 'sbs',
  'senasa': 'senasa',
  'sernanp': 'sernanp',
  'sis': 'sis',
  'sucamec': 'sucamec',
  'sunafil': 'sunafil',
  'sunarp': 'sunarp',
  'sunass': 'sunass',
  'sunat': 'sunat',
  'sunedu': 'sunedu',
  'susalud': 'susalud',
  'sutran': 'sutran',
  'universidades': 'universidades',
  'visas': 'cancilleria'
};

// Category mapping
const CATEGORY_MAP = {
  'afp-onp': 'seguridad_social',
  'atu': 'vehicular',
  'banco-nacion': 'tributario',
  'bonos': 'social',
  'cancilleria': 'identidad',
  'cofide': 'empresa',
  'cofopri': 'propiedad',
  'conadis': 'social',
  'defensoria': 'legal',
  'documentos': 'notarial',
  'essalud': 'salud',
  'fiscalia': 'legal',
  'indecopi': 'propiedad_intelectual',
  'inpe': 'legal',
  'midis': 'social',
  'migraciones': 'identidad',
  'minedu': 'educacion',
  'minsa': 'salud',
  'mivivienda': 'vivienda',
  'mtc': 'vehicular',
  'mtpe': 'laboral',
  'municipalidades': 'municipal',
  'notarias': 'notarial',
  'oece': 'empresa',
  'onpe': 'electoral',
  'osinergmin': 'servicios_publicos',
  'osiptel': 'servicios_publicos',
  'pj': 'legal',
  'pnp': 'legal',
  'produce': 'empresa',
  'pronabec': 'educacion',
  'reniec': 'identidad',
  'sat': 'municipal',
  'sbs': 'financiero',
  'senasa': 'sanidad',
  'sernanp': 'turismo',
  'sis': 'salud',
  'sucamec': 'seguridad',
  'sunafil': 'laboral',
  'sunarp': 'propiedad',
  'sunass': 'servicios_publicos',
  'sunat': 'tributario',
  'sunedu': 'educacion',
  'susalud': 'salud',
  'sutran': 'vehicular',
  'universidades': 'educacion',
  'visas': 'identidad'
};

const existingIds = new Set(rawCatalog.tramites.map(t => t.id.toLowerCase()));
const existingNames = new Set(rawCatalog.tramites.map(t => t.nombre.toLowerCase().trim()));

const newItems = [];

for (const item of extracted) {
  const directId = item.slug.toLowerCase();
  const prefixedId = `${item.entidad}-${item.slug}`.toLowerCase();
  const itemName = item.nombre.toLowerCase().trim();

  // Check if exists
  if (existingIds.has(directId) || existingIds.has(prefixedId) || existingNames.has(itemName)) {
    continue;
  }

  const finalId = directId.includes(item.entidad) ? directId : prefixedId;
  const instId = ENTITY_MAP[item.entidad] || item.entidad;
  const categoria = CATEGORY_MAP[item.entidad] || 'general';

  const isOnline = item.modalidad === 'online';
  const isMixta = item.modalidad === 'mixta';
  const modalidadArray = isMixta ? ['online', 'presencial'] : (isOnline ? ['online'] : ['presencial']);

  const durMin = isOnline ? 0 : 1;
  const durMax = isOnline ? 3 : 7;

  // Build standard procedural steps
  const pasos = [];
  pasos.push(`Verificar requisitos y condiciones en el portal oficial o ventanilla de ${instId.toUpperCase()}`);
  if (item.costo_tipo === 'fijo' && item.costo > 0) {
    pasos.push(`Pagar la tasa oficial correspondiente (S/ ${item.costo.toFixed(2)}) a través de Págalo.pe o Banco de la Nación`);
  }
  if (isOnline) {
    pasos.push(`Ingresar a la plataforma digital o mesa de partes virtual de ${instId.toUpperCase()} con credenciales o DNI`);
    pasos.push(`Completar el formulario en línea y adjuntar los documentos solicitados`);
    pasos.push(`Obtener constancia de trámite digital y realizar el seguimiento en línea`);
  } else {
    pasos.push(`Acudir a la oficina o sede autorizada de ${instId.toUpperCase()} con la documentación física`);
    pasos.push(`Presentar el expediente en ventanilla y recibir el ticket o número de expediente`);
    pasos.push(`Recoger la constancia o resolución final en el plazo fijado`);
  }

  const tramiteObj = {
    id: finalId,
    nombre: item.nombre,
    institucion_id: instId,
    categoria: categoria,
    costo_tipo: item.costo_tipo,
    costo: item.costo,
    modalidad: modalidadArray,
    duracion_min_dias: durMin,
    duracion_max_dias: durMax,
    pasos: pasos,
    fuente: item.url,
    verificado: false
  };

  existingIds.add(finalId);
  existingNames.add(itemName);
  newItems.push(tramiteObj);
}

console.log(`Original tramites: ${rawCatalog.tramites.length}`);
console.log(`New tramites to append: ${newItems.length}`);
console.log(`Total consolidated: ${rawCatalog.tramites.length + newItems.length}`);

rawCatalog.tramites.push(...newItems);
rawCatalog.meta.tramites_en_este_archivo = rawCatalog.tramites.length;
rawCatalog.meta.total_tramites_referencia = rawCatalog.tramites.length;
rawCatalog.meta.actualizado = new Date().toISOString().split('T')[0];

fs.writeFileSync(rawCatalogPath, JSON.stringify(rawCatalog, null, 2), 'utf-8');
console.log(`Successfully updated ${rawCatalogPath}!`);
