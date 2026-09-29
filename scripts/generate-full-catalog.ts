import * as fs from 'fs';
import * as path from 'path';
import {
  TRAMITES as CURRENT_TRAMITES,
  INSTITUCIONES as CURRENT_INSTITUCIONES,
  CATEGORIAS as CURRENT_CATEGORIAS,
  GUIAS_MULTIENTIDAD as CURRENT_GUIAS,
} from '../src/data/mockData';
import { Tramite, Institucion, Categoria, Paso, Requisito, CanalPago } from '../src/types/tramite';

const rawCatalogPath = path.join(__dirname, '../commits/raw_catalog_source.json');
const rawData = JSON.parse(fs.readFileSync(rawCatalogPath, 'utf8'));

// 1. Mapeo de equivalencias para no duplicar los 26 trámites ya existentes
const EQUIVALENT_SLUGS: Record<string, string> = {
  'duplicado-dni': 'duplicado-dni',
  'renovacion-dni': 'renovacion-dni',
  'primer-dni-mayor-edad': 'dni-primera-vez',
  'partida-nacimiento-copia': 'copia-partida-nacimiento',
  'rectificacion-dni': 'rectificacion-domicilio',
  'pasaporte-electronico': 'pasaporte-electronico',
  'obtencion-brevete-a1': 'obtencion-brevete-a1',
  'revalidacion-brevete-a1': 'revalidacion-licencia-conducir-a1',
  'duplicado-brevete': 'duplicado-licencia-conducir-a1',
  'record-conductor': 'record-conductor-puntos',
  'inscripcion-ruc-persona': 'inscripcion-ruc-persona',
  'clave-sol': 'clave-sol',
  'recibos-honorarios-electronicos': 'emision-recibos-honorarios-electronicos',
  'ficha-ruc-digital': 'consulta-ruc-ficha-ruc-digital',
  'suspension-retenciones-cuarta': 'suspension-retenciones-cuarta',
  'antecedentes-penales': 'antecedentes-penales',
  'antecedentes-policiales': 'antecedentes-policiales',
  'denuncia-policial-perdida': 'denuncia-policial-perdida',
  'antecedentes-judiciales-inpe': 'certificado-antecedentes-judiciales-inpe',
  'certificado-unico-laboral': 'certificado-unico-laboral',
  'afiliacion-sis-gratuito': 'afiliacion-sis-gratuito',
  'licencia-funcionamiento': 'licencia-funcionamiento',
  'impuesto-predial': 'impuesto-predial-arbitrios',
  'duplicado-tive': 'duplicado-tive',
  'pago-luz-enel': 'pago-luz-servicio',
  'pago-agua-sedapal': 'pago-agua-servicio',
};

// 2. Extender Categorías
const EXTENDED_CATEGORIAS: Categoria[] = [
  ...CURRENT_CATEGORIAS,
  {
    id: 'cat-8',
    slug: 'educacion-becas',
    nombre: 'Educación y Becas',
    descripcion: 'Títulos universitarios, grados SUNEDU, Beca 18 y certificados de estudios.',
    icono: 'SchoolOutlined',
  },
  {
    id: 'cat-9',
    slug: 'programas-sociales-pensiones',
    nombre: 'Pensiones y Programas Sociales',
    descripcion: 'Jubilación ONP, retiros de AFP, Pensión 65 y Bono Techo Propio.',
    icono: 'ElderlyOutlined',
  },
  {
    id: 'cat-10',
    slug: 'consumidor-defensoria',
    nombre: 'Defensa del Consumidor y Derechos',
    descripcion: 'Reclamos ante INDECOPI, OSIPTEL, OSINERGMIN, SUNASS y Defensoría.',
    icono: 'GavelOutlined',
  },
];

// 3. Extender Instituciones
const NEW_INSTITUCIONES_DEFS: Institucion[] = [
  { id: 'inst-essalud', slug: 'essalud', nombre: 'Seguro Social de Salud', sigla: 'EsSalud', tipo: 'nacional', webOficial: 'https://www.essalud.gob.pe', descripcion: 'Entidad de seguridad social que brinda atención médica y prestaciones a trabajadores formales y sus familias.', logoIniciales: 'ESS' },
  { id: 'inst-fiscalia', slug: 'fiscalia', nombre: 'Ministerio Público - Fiscalía de la Nación', sigla: 'Fiscalía', tipo: 'nacional', webOficial: 'https://www.mpfn.gob.pe', descripcion: 'Defensa de la legalidad, los derechos ciudadanos y persecución del delito en el Perú.', logoIniciales: 'MP' },
  { id: 'inst-onp', slug: 'onp', nombre: 'Oficina de Normalización Previsional', sigla: 'ONP', tipo: 'nacional', webOficial: 'https://www.onp.gob.pe', descripcion: 'Administración del Sistema Nacional de Pensiones (D.L. 19990) y pensiones públicas estatales.', logoIniciales: 'ONP' },
  { id: 'inst-afp', slug: 'afp', nombre: 'Asociación de AFP / Sistema Privado de Pensiones', sigla: 'AFP', tipo: 'privado', webOficial: 'https://www.sbs.gob.pe', descripcion: 'Administradoras Privadas de Fondos de Pensiones reguladas por la SBS (Integra, Prima, Profuturo, Habitat).', logoIniciales: 'AFP' },
  { id: 'inst-cancilleria', slug: 'cancilleria', nombre: 'Ministerio de Relaciones Exteriores', sigla: 'Cancillería', tipo: 'nacional', webOficial: 'https://www.cancilleria.gob.pe', descripcion: 'Política exterior, apostillado de documentos oficiales y asistencia consular a ciudadanos peruanos.', logoIniciales: 'RREE' },
  { id: 'inst-indecopi', slug: 'indecopi', nombre: 'Instituto Nacional de Defensa de la Competencia y de la Propiedad Intelectual', sigla: 'INDECOPI', tipo: 'nacional', webOficial: 'https://www.gob.pe/indecopi', descripcion: 'Defensa de los derechos del consumidor, registro de marcas comerciales y propiedad intelectual.', logoIniciales: 'IND' },
  { id: 'inst-sat', slug: 'sat', nombre: 'Servicio de Administración Tributaria de Lima', sigla: 'SAT Lima', tipo: 'municipal', webOficial: 'https://www.sat.gob.pe', descripcion: 'Recaudación de tributos municipales, arbitrios, impuesto vehicular y papeletas de tránsito en Lima.', logoIniciales: 'SAT' },
  { id: 'inst-minedu', slug: 'minedu', nombre: 'Ministerio de Educación', sigla: 'MINEDU', tipo: 'nacional', webOficial: 'https://www.gob.pe/minedu', descripcion: 'Rector del sistema educativo peruano, emisión de certificados escolares y acreditación pedagógica.', logoIniciales: 'MED' },
  { id: 'inst-oece', slug: 'oece', nombre: 'Organismo Especializado para las Contrataciones del Estado (ex-OSCE)', sigla: 'OECE', tipo: 'nacional', webOficial: 'https://www.gob.pe/oece', descripcion: 'Administración del Registro Nacional de Proveedores (RNP) y supervisión de compras públicas estatales.', logoIniciales: 'OEC' },
  { id: 'inst-banco-nacion', slug: 'banco-de-la-nacion', nombre: 'Banco de la Nación', sigla: 'Banco de la Nación', tipo: 'nacional', webOficial: 'https://www.bn.com.pe', descripcion: 'Entidad financiera del Estado que opera la plataforma Págalo.pe y cuentas Multired para ciudadanos.', logoIniciales: 'BN' },
  { id: 'inst-onpe', slug: 'onpe', nombre: 'Oficina Nacional de Procesos Electorales', sigla: 'ONPE', tipo: 'nacional', webOficial: 'https://www.onpe.gob.pe', descripcion: 'Organización de elecciones democráticas en el Perú y gestión de multas por omisión al sufragio.', logoIniciales: 'ONP' },
  { id: 'inst-midis', slug: 'midis', nombre: 'Ministerio de Desarrollo e Inclusión Social', sigla: 'MIDIS', tipo: 'nacional', webOficial: 'https://www.gob.pe/midis', descripcion: 'Coordinación de políticas sociales, padrón SISFOH y programas como Pensión 65, Juntos y Qali Warma.', logoIniciales: 'MID' },
  { id: 'inst-sucamec', slug: 'sucamec', nombre: 'Superintendencia Nacional de Control de Servicios de Seguridad, Armas y Explosivos', sigla: 'SUCAMEC', tipo: 'nacional', webOficial: 'https://www.sucamec.gob.pe', descripcion: 'Control, registro y emisión de licencias de posesión de armas de fuego y pirotecnia de uso civil.', logoIniciales: 'SUC' },
  { id: 'inst-sutran', slug: 'sutran', nombre: 'Superintendencia de Transporte Terrestre de Personas, Carga y Mercancías', sigla: 'SUTRAN', tipo: 'nacional', webOficial: 'https://www.sutran.gob.pe', descripcion: 'Supervisión del transporte terrestre interprovincial y consulta del récord de conductores.', logoIniciales: 'SUT' },
  { id: 'inst-atu', slug: 'atu', nombre: 'Autoridad de Transporte Urbano para Lima y Callao', sigla: 'ATU', tipo: 'regional', webOficial: 'https://www.atu.gob.pe', descripcion: 'Planificación y fiscalización del transporte urbano, emisión de TUC para taxis y transporte regular.', logoIniciales: 'ATU' },
  { id: 'inst-sunass', slug: 'sunass', nombre: 'Superintendencia Nacional de Servicios de Saneamiento', sigla: 'SUNASS', tipo: 'nacional', webOficial: 'https://www.sunass.gob.pe', descripcion: 'Regulación y resolución de reclamos en segunda instancia sobre servicios de agua potable y alcantarillado.', logoIniciales: 'SUN' },
  { id: 'inst-produce', slug: 'produce', nombre: 'Ministerio de la Producción', sigla: 'PRODUCE', tipo: 'nacional', webOficial: 'https://www.gob.pe/produce', descripcion: 'Fomento y desarrollo de las micro, pequeñas y medianas empresas y el sector pesquero peruano.', logoIniciales: 'PRD' },
  { id: 'inst-cofopri', slug: 'cofopri', nombre: 'Organismo de Formalización de la Propiedad Informal', sigla: 'COFOPRI', tipo: 'nacional', webOficial: 'https://www.cofopri.gob.pe', descripcion: 'Saneamiento físico-legal y titulación gratuita de posesiones informales en todo el país.', logoIniciales: 'COF' },
  { id: 'inst-sunafil', slug: 'sunafil', nombre: 'Superintendencia Nacional de Fiscalización Laboral', sigla: 'SUNAFIL', tipo: 'nacional', webOficial: 'https://www.sunafil.gob.pe', descripcion: 'Fiscalización del cumplimiento de los derechos laborales, seguridad ocupacional y planilla formal.', logoIniciales: 'SNF' },
  { id: 'inst-sbs', slug: 'sbs', nombre: 'Superintendencia de Banca, Seguros y AFP', sigla: 'SBS', tipo: 'nacional', webOficial: 'https://www.sbs.gob.pe', descripcion: 'Regulación del sistema financiero, central de riesgos de deudas bancarias y tipo de cambio contable.', logoIniciales: 'SBS' },
  { id: 'inst-minsa', slug: 'minsa', nombre: 'Ministerio de Salud', sigla: 'MINSA', tipo: 'nacional', webOficial: 'https://www.gob.pe/minsa', descripcion: 'Rector del sistema nacional de salud, emisión del carné de vacunación y certificados de discapacidad.', logoIniciales: 'MIN' },
  { id: 'inst-osiptel', slug: 'osiptel', nombre: 'Organismo Supervisor de Inversión Privada en Telecomunicaciones', sigla: 'OSIPTEL', tipo: 'nacional', webOficial: 'https://www.osiptel.gob.pe', descripcion: 'Regulación de empresas de telecomunicaciones, portabilidad numérica y registro IMEI de celulares.', logoIniciales: 'OSP' },
  { id: 'inst-osinergmin', slug: 'osinergmin', nombre: 'Organismo Supervisor de la Inversión en Energía y Minería', sigla: 'OSINERGMIN', tipo: 'nacional', webOficial: 'https://www.osinergmin.gob.pe', descripcion: 'Supervisión de empresas de electricidad, hidrocarburos y reclamos por cortes o cobros excesivos de luz.', logoIniciales: 'OSN' },
  { id: 'inst-susalud', slug: 'susalud', nombre: 'Superintendencia Nacional de Salud', sigla: 'SUSALUD', tipo: 'nacional', webOficial: 'https://www.susalud.gob.pe', descripcion: 'Protección y restitución de los derechos en salud de los usuarios frente a clínicas y aseguradoras EPS.', logoIniciales: 'SUS' },
  { id: 'pronabec', slug: 'pronabec', nombre: 'Programa Nacional de Becas y Crédito Educativo', sigla: 'PRONABEC', tipo: 'nacional', webOficial: 'https://www.pronabec.gob.pe', descripcion: 'Convocatoria y adjudicación de becas integrales para estudios superiores como Beca 18.', logoIniciales: 'PRB' },
  { id: 'inst-conadis', slug: 'conadis', nombre: 'Consejo Nacional para la Integración de la Persona con Discapacidad', sigla: 'CONADIS', tipo: 'nacional', webOficial: 'https://www.conadis.gob.pe', descripcion: 'Registro nacional y emisión del carné oficial que acredita derechos y beneficios para personas con discapacidad.', logoIniciales: 'CND' },
  { id: 'inst-sunedu', slug: 'sunedu', nombre: 'Superintendencia Nacional de Educación Superior Universitaria', sigla: 'SUNEDU', tipo: 'nacional', webOficial: 'https://www.sunedu.gob.pe', descripcion: 'Supervisión universitaria y administración del Registro Nacional de Grados y Títulos Oficiales.', logoIniciales: 'SND' },
  { id: 'inst-universidades', slug: 'universidades-peru', nombre: 'Universidades Públicas y Privadas del Perú', sigla: 'Universidades', tipo: 'nacional', webOficial: 'https://www.sunedu.gob.pe/lista-de-universidades/', descripcion: 'Instituciones de educación superior autónomas habilitadas para otorgar grados académicos de bachiller y títulos.', logoIniciales: 'UNI' },
  { id: 'inst-senasa', slug: 'senasa', nombre: 'Servicio Nacional de Sanidad Agraria', sigla: 'SENASA', tipo: 'nacional', webOficial: 'https://www.senasa.gob.pe', descripcion: 'Sanidad animal y vegetal, emisión de certificados sanitarios para viajes nacionales e internacionales con mascotas.', logoIniciales: 'SEN' },
  { id: 'inst-sernanp', slug: 'sernanp', nombre: 'Servicio Nacional de Áreas Naturales Protegidas', sigla: 'SERNANP', tipo: 'nacional', webOficial: 'https://www.sernanp.gob.pe', descripcion: 'Conservación de áreas naturales protegidas del Perú y regulación de accesos turísticos a reservas y santuarios.', logoIniciales: 'SER' },
  { id: 'inst-defensoria', slug: 'defensoria-del-pueblo', nombre: 'Defensoría del Pueblo', sigla: 'Defensoría', tipo: 'nacional', webOficial: 'https://www.defensoria.gob.pe', descripcion: 'Órgano constitucional autónomo que defiende los derechos fundamentales frente a abusos o demoras del Estado.', logoIniciales: 'DEF' },
  { id: 'inst-notarias', slug: 'notarias-peru', nombre: 'Colegio de Notarios del Perú', sigla: 'Notarías', tipo: 'privado', webOficial: 'https://www.notarios.org.pe', descripcion: 'Notarías públicas autorizadas para dar fe de actos jurídicos, minutas, poderes notariales y transferencias.', logoIniciales: 'NOT' },
  { id: 'inst-cofide', slug: 'cofide', nombre: 'Banco de Desarrollo del Perú (COFIDE)', sigla: 'COFIDE', tipo: 'nacional', webOficial: 'https://www.cofide.com.pe', descripcion: 'Banco de segundo piso que canaliza fondos y garantías preferenciales para la micro y pequeña empresa.', logoIniciales: 'COF' },
  { id: 'inst-mivivienda', slug: 'fondo-mivivienda', nombre: 'Fondo MIVIVIENDA S.A.', sigla: 'MIVIVIENDA', tipo: 'nacional', webOficial: 'https://www.mivivienda.com.pe', descripcion: 'Facilita la adquisición y construcción de viviendas sociales mediante el Bono Familiar Habitacional Techo Propio.', logoIniciales: 'MIV' },
];

const EXTENDED_INSTITUCIONES: Institucion[] = [...CURRENT_INSTITUCIONES];
for (const n of NEW_INSTITUCIONES_DEFS) {
  if (!EXTENDED_INSTITUCIONES.some((i) => i.id === n.id || i.slug === n.slug)) {
    EXTENDED_INSTITUCIONES.push(n);
  }
}

// 4. Mapeo de Categoría de cada trámite nuevo
function resolveCategoria(catName: string, rawId: string): Categoria {
  if (rawId.includes('beca') || rawId.includes('estudios') || rawId.includes('grados') || rawId.includes('bachiller')) {
    return EXTENDED_CATEGORIAS.find((c) => c.slug === 'educacion-becas')!;
  }
  if (rawId.includes('onp') || rawId.includes('afp') || rawId.includes('pension-65') || rawId.includes('mivivienda') || rawId.includes('bono')) {
    return EXTENDED_CATEGORIAS.find((c) => c.slug === 'programas-sociales-pensiones')!;
  }
  if (rawId.includes('reclamo') || rawId.includes('queja') || rawId.includes('imei') || rawId.includes('portabilidad')) {
    return EXTENDED_CATEGORIAS.find((c) => c.slug === 'consumidor-defensoria')!;
  }
  switch (catName) {
    case 'identidad':
    case 'actas':
      return EXTENDED_CATEGORIAS.find((c) => c.slug === 'identidad-documentos')!;
    case 'vehicular':
      return EXTENDED_CATEGORIAS.find((c) => c.slug === 'vehicular-transporte')!;
    case 'tributario':
    case 'empresa':
    case 'propiedad_intelectual':
      return EXTENDED_CATEGORIAS.find((c) => c.slug === 'tributos-empresas')!;
    case 'legal':
    case 'laboral':
    case 'notarial':
      return EXTENDED_CATEGORIAS.find((c) => c.slug === 'empleo-certificados')!;
    case 'servicios_publicos':
      return EXTENDED_CATEGORIAS.find((c) => c.slug === 'servicios-publicos')!;
    case 'municipal':
    case 'propiedad':
    case 'vivienda':
      return EXTENDED_CATEGORIAS.find((c) => c.slug === 'municipal-vivienda')!;
    case 'salud':
    case 'sanidad':
      return EXTENDED_CATEGORIAS.find((c) => c.slug === 'salud-social')!;
    default:
      return EXTENDED_CATEGORIAS[0];
  }
}

function resolveInstitucion(rawInstId: string): Institucion {
  const mapping: Record<string, string> = {
    reniec: 'inst-reniec',
    migraciones: 'inst-migraciones',
    mtc: 'inst-mtc',
    sunat: 'inst-sunat',
    sunarp: 'inst-sunarp',
    mtpe: 'inst-mtpe',
    pj: 'inst-pj',
    pnp: 'inst-pnp',
    inpe: 'inst-inpe',
    municipalidades: 'inst-muni-generica',
    sat: 'inst-sat',
    essalud: 'inst-essalud',
    fiscalia: 'inst-fiscalia',
    sis: 'inst-sis',
    afp_onp: 'inst-onp',
    cancilleria: 'inst-cancilleria',
    indecopi: 'inst-indecopi',
    minedu: 'inst-minedu',
    oece: 'inst-oece',
    banco_nacion: 'inst-banco-nacion',
    onpe_jne: 'inst-onpe',
    midis: 'inst-midis',
    sucamec: 'inst-sucamec',
    sutran: 'inst-sutran',
    atu: 'inst-atu',
    sunass: 'inst-sunass',
    produce: 'inst-produce',
    cofopri: 'inst-cofopri',
    sunafil: 'inst-sunafil',
    sbs: 'inst-sbs',
    minsa: 'inst-minsa',
    osiptel: 'inst-osiptel',
    osinergmin: 'inst-osinergmin',
    susalud: 'inst-susalud',
    pronabec: 'pronabec',
    conadis: 'inst-conadis',
    sunedu: 'inst-sunedu',
    universidades: 'inst-universidades',
    senasa: 'inst-senasa',
    sernanp: 'inst-sernanp',
    defensoria: 'inst-defensoria',
    notarias: 'inst-notarias',
    cofide: 'inst-cofide',
    mivivienda: 'inst-mivivienda',
  };
  const targetId = mapping[rawInstId] || 'inst-reniec';
  const found = EXTENDED_INSTITUCIONES.find((i) => i.id === targetId);
  return found || EXTENDED_INSTITUCIONES[0];
}

// 5. Procesar Trámites Nuevos
const existingSlugsList = new Set(CURRENT_TRAMITES.map((t) => t.slug));
for (const mapped of Object.values(EQUIVALENT_SLUGS)) {
  existingSlugsList.add(mapped);
}

const NEW_TRAMITES: Tramite[] = [];

for (const raw of rawData.tramites) {
  // Si ya existe o es equivalente a uno de los 26, saltar para no modificarlo
  if (EQUIVALENT_SLUGS[raw.id] || existingSlugsList.has(raw.id)) {
    continue;
  }

  const inst = resolveInstitucion(raw.institucion_id);
  const cat = resolveCategoria(raw.categoria, raw.id);

  let costoPrincipal = 0;
  let costoResumen = 'Totalmente Gratuito (S/ 0.00)';

  if (raw.costo_tipo === 'fijo' && raw.costo !== undefined) {
    costoPrincipal = Number(raw.costo);
    costoResumen = `S/ ${costoPrincipal.toFixed(2)}`;
  } else if (raw.costo_tipo === 'variable' && raw.costo_min !== undefined) {
    costoPrincipal = Number(raw.costo_min);
    costoResumen = raw.costo_max ? `S/ ${raw.costo_min.toFixed(2)} a S/ ${raw.costo_max.toFixed(2)} (variable)` : `Desde S/ ${raw.costo_min.toFixed(2)} (variable)`;
  } else if (raw.costo_tipo === 'rango' && raw.costo_min !== undefined) {
    costoPrincipal = Number(raw.costo_min);
    costoResumen = `S/ ${raw.costo_min.toFixed(2)} a S/ ${raw.costo_max.toFixed(2)} aprox.`;
  } else if (raw.costo_tipo === 'variante' && raw.variantes && raw.variantes.length > 0) {
    costoPrincipal = Number(raw.variantes[0].costo);
    costoResumen = raw.variantes.map((v: any) => `${v.nombre}: S/ ${Number(v.costo).toFixed(2)}`).join(' / ');
  } else if (raw.costo_online !== undefined) {
    costoPrincipal = Number(raw.costo_online);
    costoResumen = `S/ ${costoPrincipal.toFixed(2)} (Online)`;
  } else if (raw.costo_tipo === 'no_aplica') {
    costoResumen = 'Variable según consumo del recibo';
  }

  const modalidadPrincipal = raw.modalidad?.includes('online') ? 'online' : (raw.modalidad?.includes('mixta') ? 'mixta' : 'presencial');
  const durMin = raw.duracion_min_dias ?? 1;
  const durMax = raw.duracion_max_dias ?? 5;
  let durTexto = '1 a 5 días hábiles';
  if (durMin === 0 && durMax === 0) {
    durTexto = 'Inmediato (en el acto)';
  } else if (durMin === durMax && durMin > 0) {
    durTexto = `${durMin} días hábiles`;
  } else if (durMin > 0 && durMax > 0) {
    durTexto = `${durMin} a ${durMax} días hábiles`;
  }

  const pasos: Paso[] = (raw.pasos || []).map((desc: string, idx: number) => {
    const orden = idx + 1;
    const isPayStep = desc.toLowerCase().includes('pagar') || desc.toLowerCase().includes('pago');
    const isOnline = desc.toLowerCase().includes('online') || desc.toLowerCase().includes('portal') || desc.toLowerCase().includes('ingresar');
    return {
      id: `paso-${raw.id}-${orden}`,
      orden,
      modalidad: isOnline ? 'online' : 'presencial',
      esOpcional: false,
      titulo: desc.split('—')[0].trim().slice(0, 75),
      descripcion: desc,
      institucionNombre: inst.sigla || inst.nombre,
      institucionUrl: inst.webOficial,
      costoTipo: isPayStep && costoPrincipal > 0 ? 'fijo' : 'gratuito',
      costoMin: isPayStep && costoPrincipal > 0 ? costoPrincipal : 0,
      costoMax: isPayStep && costoPrincipal > 0 ? costoPrincipal : 0,
    };
  });

  const requisitos: Requisito[] = [
    {
      id: `req-${raw.id}-1`,
      descripcion: 'Documento Nacional de Identidad (DNI) vigente o carné de extranjería.',
      aplicaSi: 'general',
      orden: 1,
    },
    {
      id: `req-${raw.id}-2`,
      descripcion: costoPrincipal > 0 ? `Comprobante de pago de la tasa oficial (${costoResumen}).` : 'No adeudar multas administrativas asociadas.',
      aplicaSi: 'general',
      orden: 2,
    },
  ];

  if (raw.requisitos_condicionales) {
    raw.requisitos_condicionales.forEach((rc: any, idx: number) => {
      requisitos.push({
        id: `req-${raw.id}-cond-${idx + 1}`,
        descripcion: rc.descripcion,
        aplicaSi: rc.aplica_si,
        orden: requisitos.length + 1,
      });
    });
  }

  const canalesPago: CanalPago[] = [];
  if (costoPrincipal > 0) {
    canalesPago.push({ id: `cp-${raw.id}-1`, nombre: 'Págalo.pe (Banco de la Nación)', tipo: 'online' });
    canalesPago.push({ id: `cp-${raw.id}-2`, nombre: 'Agencias y Agentes del Banco de la Nación', tipo: 'agencia' });
  }

  const tags = [
    raw.id.replace(/-/g, ' '),
    (inst.sigla || inst.nombre).toLowerCase(),
    cat.nombre.toLowerCase(),
    'tramite oficial',
    'peru',
    '2026',
  ];

  const tramiteObj: Tramite = {
    id: `tram-${raw.id}`,
    slug: raw.id,
    nombre: raw.nombre,
    nombreCorto: raw.nombre.split('(')[0].trim(),
    subgrupo: cat.nombre.toUpperCase(),
    descripcion: `${raw.nombre} emitido por ${inst.nombre}. Consulta costos oficiales, pasos detallados y requisitos actualizados.`,
    categoriaId: cat.id,
    categoria: cat,
    institucionId: inst.id,
    institucion: inst,
    esCompuesto: raw.es_compuesto ?? false,
    esRecurrente: raw.es_recurrente ?? false,
    modalidadPrincipal,
    duracionMinDias: durMin,
    duracionMaxDias: durMax,
    duracionTexto: durTexto,
    tipoResultado: raw.tipo_resultado ?? 'documento_digital',
    vigenciaResultadoDias: raw.vigencia_resultado_dias ?? null,
    vigenciaTexto: raw.vigencia_resultado_dias ? `Vigencia oficial de ${raw.vigencia_resultado_dias} días calendario` : 'Vigencia indeterminada',
    ultimaVerificacion: '2026-09-28',
    fuenteUrl: raw.fuente?.includes('http') ? raw.fuente.split(' ')[0] : inst.webOficial,
    frecuenciaBusqueda: 7500,
    costoResumen,
    costoPrincipal,
    codigoTributo: raw.codigo_tasa ? `Código de Tasa Oficial: ${raw.codigo_tasa}` : undefined,
    baseLegal: `Procedimiento tramitado bajo normativa vigente de ${inst.sigla} y Compendio Oficial del Estado Peruano.`,
    tags,
    requisitos,
    pasos,
    canalesPago,
  };

  NEW_TRAMITES.push(tramiteObj);
  existingSlugsList.add(raw.id);
}

console.log(`Trámites existentes preservados: ${CURRENT_TRAMITES.length}`);
console.log(`Trámites nuevos generados: ${NEW_TRAMITES.length}`);
console.log(`TOTAL TRÁMITES CONSOLIDADOS: ${CURRENT_TRAMITES.length + NEW_TRAMITES.length}`);

// 6. Generar el nuevo mockData.ts
const ALL_CONSOLIDATED_TRAMITES = [...CURRENT_TRAMITES, ...NEW_TRAMITES];

const outputTS = `// DATASET OFICIAL MAESTRO DE TRÁMITES — COMOTRAMITO PERÚ
// Generado automáticamente con preservación estricta de trámites verificados.

import { Categoria, Institucion, Tramite, GuiaMultientidad } from '@/types/tramite';

export const CATEGORIAS: Categoria[] = ${JSON.stringify(EXTENDED_CATEGORIAS, null, 2)};

export const INSTITUCIONES: Institucion[] = ${JSON.stringify(EXTENDED_INSTITUCIONES, null, 2)};

export const TRAMITES: Tramite[] = ${JSON.stringify(ALL_CONSOLIDATED_TRAMITES, null, 2)};

export const GUIAS_MULTIENTIDAD: GuiaMultientidad[] = ${JSON.stringify(CURRENT_GUIAS, null, 2)};
`;

fs.writeFileSync(path.join(__dirname, '../src/data/mockData.ts'), outputTS, 'utf8');
console.log('mockData.ts actualizado con éxito.');
