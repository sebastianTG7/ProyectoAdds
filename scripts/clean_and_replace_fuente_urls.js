const fs = require('fs');
const path = require('path');

const rawCatalogPath = path.join(__dirname, '../commits/raw_catalog_source.json');
const rawCatalog = JSON.parse(fs.readFileSync(rawCatalogPath, 'utf-8'));

const OFFICIAL_GOB_PE_MAP = {
  'reniec': 'https://www.gob.pe/reniec',
  'migraciones': 'https://www.gob.pe/migraciones',
  'mtc': 'https://www.gob.pe/mtc',
  'sunat': 'https://www.gob.pe/sunat',
  'sunarp': 'https://www.gob.pe/sunarp',
  'mtpe': 'https://www.gob.pe/mtpe',
  'pj': 'https://www.pj.gob.pe',
  'pnp': 'https://www.gob.pe/policianacional',
  'inpe': 'https://www.gob.pe/inpe',
  'municipalidades': 'https://www.gob.pe/institucion/pcm/campa%C3%B1as/1529-tupa-digital',
  'sat': 'https://www.sat.gob.pe',
  'essalud': 'https://www.gob.pe/essalud',
  'fiscalia': 'https://www.gob.pe/mpfn',
  'sis': 'https://www.gob.pe/sis',
  'afp_onp': 'https://www.gob.pe/onp',
  'onp': 'https://www.gob.pe/onp',
  'afp': 'https://www.sbs.gob.pe/usuarios/sistema-privado-de-pensiones',
  'cancilleria': 'https://www.gob.pe/rree',
  'indecopi': 'https://www.gob.pe/indecopi',
  'minedu': 'https://www.gob.pe/minedu',
  'oece': 'https://www.gob.pe/oece',
  'banco_nacion': 'https://www.gob.pe/bancodelanacion',
  'onpe_jne': 'https://www.gob.pe/onpe',
  'onpe': 'https://www.gob.pe/onpe',
  'midis': 'https://www.gob.pe/midis',
  'sucamec': 'https://www.gob.pe/sucamec',
  'sutran': 'https://www.gob.pe/sutran',
  'atu': 'https://www.gob.pe/atu',
  'sunass': 'https://www.gob.pe/sunass',
  'produce': 'https://www.gob.pe/produce',
  'cofopri': 'https://www.gob.pe/cofopri',
  'sunafil': 'https://www.gob.pe/sunafil',
  'sbs': 'https://www.sbs.gob.pe',
  'minsa': 'https://www.gob.pe/minsa',
  'osiptel': 'https://www.gob.pe/osiptel',
  'osinergmin': 'https://www.gob.pe/osinergmin',
  'susalud': 'https://www.gob.pe/susalud',
  'pronabec': 'https://www.gob.pe/pronabec',
  'conadis': 'https://www.gob.pe/conadis',
  'sunedu': 'https://www.gob.pe/sunedu',
  'universidades': 'https://www.sunedu.gob.pe/lista-de-universidades/',
  'senasa': 'https://www.gob.pe/senasa',
  'sernanp': 'https://www.gob.pe/sernanp',
  'defensoria': 'https://www.gob.pe/defensoria',
  'notarias': 'https://www.notarios.org.pe',
  'cofide': 'https://www.cofide.com.pe',
  'mivivienda': 'https://www.mivivienda.com.pe',
  'luz_sur': 'https://www.luzdelsur.com.pe',
  'pluz': 'https://www.pluz.pe',
  'sedapal': 'https://www.sedapal.com.pe'
};

// 1. Clean instituciones: delete tramitesperu_url and ensure official url
rawCatalog.instituciones.forEach(inst => {
  delete inst.tramitesperu_url;
  const official = OFFICIAL_GOB_PE_MAP[inst.id] || inst.url || 'https://www.gob.pe';
  inst.url = official;
});

// 2. Clean tramites: replace tramitesperu.com with official gob.pe
let replacedCount = 0;
let preservedOfficialCount = 0;

rawCatalog.tramites.forEach(tramite => {
  const currentFuente = tramite.fuente || '';
  if (currentFuente.includes('tramitesperu.com') || !currentFuente.startsWith('http')) {
    const instId = tramite.institucion_id;
    const officialUrl = OFFICIAL_GOB_PE_MAP[instId] || 'https://www.gob.pe';
    tramite.fuente = officialUrl;
    replacedCount++;
  } else {
    preservedOfficialCount++;
  }
});

console.log(`Replaced ${replacedCount} tramitesperu.com URLs with official gob.pe/institutional portals.`);
console.log(`Preserved ${preservedOfficialCount} already-specific official government URLs.`);

fs.writeFileSync(rawCatalogPath, JSON.stringify(rawCatalog, null, 2), 'utf-8');
console.log('Successfully cleaned raw_catalog_source.json!');
