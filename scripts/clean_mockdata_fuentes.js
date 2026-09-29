const fs = require('fs');
const path = require('path');

const OFFICIAL_GOB_PE_MAP = {
  'inst-reniec': 'https://www.gob.pe/reniec',
  'inst-migraciones': 'https://www.gob.pe/migraciones',
  'inst-mtc': 'https://www.gob.pe/mtc',
  'inst-sunat': 'https://www.gob.pe/sunat',
  'inst-sunarp': 'https://www.gob.pe/sunarp',
  'inst-mtpe': 'https://www.gob.pe/mtpe',
  'inst-pj': 'https://www.pj.gob.pe',
  'inst-pnp': 'https://www.gob.pe/policianacional',
  'inst-inpe': 'https://www.gob.pe/inpe',
  'inst-muni-generica': 'https://www.gob.pe/institucion/pcm/campa%C3%B1as/1529-tupa-digital',
  'inst-sat': 'https://www.sat.gob.pe',
  'inst-essalud': 'https://www.gob.pe/essalud',
  'inst-fiscalia': 'https://www.gob.pe/mpfn',
  'inst-sis': 'https://www.gob.pe/sis',
  'inst-onp': 'https://www.gob.pe/onp',
  'inst-afp': 'https://www.sbs.gob.pe/usuarios/sistema-privado-de-pensiones',
  'inst-cancilleria': 'https://www.gob.pe/rree',
  'inst-indecopi': 'https://www.gob.pe/indecopi',
  'inst-minedu': 'https://www.gob.pe/minedu',
  'inst-oece': 'https://www.gob.pe/oece',
  'inst-banco-nacion': 'https://www.gob.pe/bancodelanacion',
  'inst-onpe': 'https://www.gob.pe/onpe',
  'inst-midis': 'https://www.gob.pe/midis',
  'inst-sucamec': 'https://www.gob.pe/sucamec',
  'inst-sutran': 'https://www.gob.pe/sutran',
  'inst-atu': 'https://www.gob.pe/atu',
  'inst-sunass': 'https://www.gob.pe/sunass',
  'inst-produce': 'https://www.gob.pe/produce',
  'inst-cofopri': 'https://www.gob.pe/cofopri',
  'inst-sunafil': 'https://www.gob.pe/sunafil',
  'inst-sbs': 'https://www.sbs.gob.pe',
  'inst-minsa': 'https://www.gob.pe/minsa',
  'inst-osiptel': 'https://www.gob.pe/osiptel',
  'inst-osinergmin': 'https://www.gob.pe/osinergmin',
  'inst-susalud': 'https://www.gob.pe/susalud',
  'pronabec': 'https://www.gob.pe/pronabec',
  'inst-conadis': 'https://www.gob.pe/conadis',
  'inst-sunedu': 'https://www.gob.pe/sunedu',
  'inst-universidades': 'https://www.sunedu.gob.pe/lista-de-universidades/',
  'inst-senasa': 'https://www.gob.pe/senasa',
  'inst-sernanp': 'https://www.gob.pe/sernanp',
  'inst-defensoria': 'https://www.gob.pe/defensoria',
  'inst-notarias': 'https://www.notarios.org.pe',
  'inst-cofide': 'https://www.cofide.com.pe',
  'inst-mivivienda': 'https://www.mivivienda.com.pe',
  'inst-luz-sur': 'https://www.luzdelsur.com.pe',
  'inst-pluz-enel': 'https://www.pluz.pe',
  'inst-sedapal': 'https://www.sedapal.com.pe'
};

const mockDataPath = path.join(__dirname, '../src/data/mockData.ts');
let content = fs.readFileSync(mockDataPath, 'utf-8');

// Parse the file sections
const catMatch = content.match(/export const CATEGORIAS: Categoria\[\] = (\[[\s\S]*?\]);\s*\nexport const INSTITUCIONES/);
const instMatch = content.match(/export const INSTITUCIONES: Institucion\[\] = (\[[\s\S]*?\]);\s*\nexport const TRAMITES/);
const trMatch = content.match(/export const TRAMITES: Tramite\[\] = (\[[\s\S]*?\]);\s*\nexport const GUIAS_MULTIENTIDAD/);
const guiasMatch = content.match(/export const GUIAS_MULTIENTIDAD: GuiaMultientidad\[\] = (\[[\s\S]*?\]);\s*$/);

if (!catMatch || !instMatch || !trMatch || !guiasMatch) {
  console.error('Failed to parse mockData.ts sections');
  process.exit(1);
}

const categorias = JSON.parse(catMatch[1]);
const instituciones = JSON.parse(instMatch[1]);
const tramites = JSON.parse(trMatch[1]);
const guias = JSON.parse(guiasMatch[1]);

// 1. Ensure all instituciones have clean official webOficial (no tramitesperu)
instituciones.forEach(inst => {
  const official = OFFICIAL_GOB_PE_MAP[inst.id] || inst.webOficial;
  if (!inst.webOficial || inst.webOficial.includes('tramitesperu.com')) {
    inst.webOficial = official;
  }
});

// 2. Clean all tramites: replace any tramitesperu.com with the official gob.pe portal
let fixedTramitesCount = 0;
tramites.forEach(t => {
  const instId = t.institucionId || t.institucion?.id;
  const officialUrl = OFFICIAL_GOB_PE_MAP[instId] || t.institucion?.webOficial || 'https://www.gob.pe';
  
  if (t.fuenteUrl && t.fuenteUrl.includes('tramitesperu.com')) {
    t.fuenteUrl = officialUrl;
    fixedTramitesCount++;
  } else if (!t.fuenteUrl || !t.fuenteUrl.startsWith('http')) {
    t.fuenteUrl = officialUrl;
    fixedTramitesCount++;
  }

  // Also clean institucion.webOficial embedded inside tramite object
  if (t.institucion) {
    if (!t.institucion.webOficial || t.institucion.webOficial.includes('tramitesperu.com')) {
      t.institucion.webOficial = OFFICIAL_GOB_PE_MAP[t.institucion.id] || officialUrl;
    }
  }

  // Also check pasos institucionUrl
  if (t.pasos && Array.isArray(t.pasos)) {
    t.pasos.forEach(p => {
      if (p.institucionUrl && p.institucionUrl.includes('tramitesperu.com')) {
        p.institucionUrl = officialUrl;
      }
    });
  }
});

console.log(`Cleaned ${fixedTramitesCount} tramites in mockData.ts!`);

// Reconstruct mockData.ts
const outputTS = `// DATASET OFICIAL MAESTRO DE TRÁMITES — COMOTRAMITO PERÚ
// Generado automáticamente con preservación estricta de trámites verificados y enlaces oficiales del Estado.

import { Categoria, Institucion, Tramite, GuiaMultientidad } from '@/types/tramite';

export const CATEGORIAS: Categoria[] = ${JSON.stringify(categorias, null, 2)};

export const INSTITUCIONES: Institucion[] = ${JSON.stringify(instituciones, null, 2)};

export const TRAMITES: Tramite[] = ${JSON.stringify(tramites, null, 2)};

export const GUIAS_MULTIENTIDAD: GuiaMultientidad[] = ${JSON.stringify(guias, null, 2)};
`;

fs.writeFileSync(mockDataPath, outputTS, 'utf-8');
console.log('mockData.ts successfully updated and saved!');

// Verify: check if tramitesperu.com appears anywhere in mockData.ts
const verifyContent = fs.readFileSync(mockDataPath, 'utf-8');
const countAfter = (verifyContent.match(/tramitesperu\.com/g) || []).length;
console.log(`Occurrences of tramitesperu.com in mockData.ts after update: ${countAfter}`);
