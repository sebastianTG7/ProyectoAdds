const fs = require('fs');
const path = require('path');

const rawCatalogPath = path.join(__dirname, '../commits/raw_catalog_source.json');
const rawCatalog = JSON.parse(fs.readFileSync(rawCatalogPath, 'utf-8'));

const ENTITY_NAMES = {
  'reniec': 'el Registro Nacional de Identificación y Estado Civil (RENIEC)',
  'migraciones': 'la Superintendencia Nacional de Migraciones',
  'mtc': 'el Ministerio de Transportes y Comunicaciones (MTC)',
  'sunat': 'la Superintendencia Nacional de Aduanas y de Administración Tributaria (SUNAT)',
  'sunarp': 'la Superintendencia Nacional de los Registros Públicos (SUNARP)',
  'mtpe': 'el Ministerio de Trabajo y Promoción del Empleo (MTPE)',
  'pj': 'el Poder Judicial del Perú',
  'pnp': 'la Policía Nacional del Perú (PNP)',
  'inpe': 'el Instituto Nacional Penitenciario (INPE)',
  'municipalidades': 'las municipalidades distritales y provinciales',
  'sat': 'el Servicio de Administración Tributaria de Lima (SAT)',
  'essalud': 'el Seguro Social de Salud (EsSalud)',
  'fiscalia': 'el Ministerio Público - Fiscalía de la Nación',
  'sis': 'el Seguro Integral de Salud (SIS)',
  'afp_onp': 'la Oficina de Normalización Previsional (ONP) y las AFPs',
  'onp': 'la Oficina de Normalización Previsional (ONP)',
  'afp': 'el Sistema Privado de Pensiones (SBS / AFPs)',
  'cancilleria': 'el Ministerio de Relaciones Exteriores (Cancillería)',
  'indecopi': 'el Instituto Nacional de Defensa de la Competencia y de la Protección de la Propiedad Intelectual (INDECOPI)',
  'minedu': 'el Ministerio de Educación (MINEDU)',
  'oece': 'el Organismo Especializado para las Contrataciones del Estado (OECE)',
  'banco_nacion': 'el Banco de la Nación',
  'onpe_jne': 'la Oficina Nacional de Procesos Electorales (ONPE)',
  'onpe': 'la Oficina Nacional de Procesos Electorales (ONPE)',
  'midis': 'el Ministerio de Desarrollo e Inclusión Social (MIDIS)',
  'sucamec': 'la Superintendencia Nacional de Control de Servicios de Seguridad, Armas y Explosivos (SUCAMEC)',
  'sutran': 'la Superintendencia de Transporte Terrestre de Personas, Carga y Mercancías (SUTRAN)',
  'atu': 'la Autoridad de Transporte Urbano para Lima y Callao (ATU)',
  'sunass': 'la Superintendencia Nacional de Servicios de Saneamiento (SUNASS)',
  'produce': 'el Ministerio de la Producción (PRODUCE)',
  'cofopri': 'el Organismo de Formalización de la Propiedad Informal (COFOPRI)',
  'sunafil': 'la Superintendencia Nacional de Fiscalización Laboral (SUNAFIL)',
  'sbs': 'la Superintendencia de Banca, Seguros y AFP (SBS)',
  'minsa': 'el Ministerio de Salud (MINSA)',
  'osiptel': 'el Organismo Supervisor de Inversión Privada en Telecomunicaciones (OSIPTEL)',
  'osinergmin': 'el Organismo Supervisor de la Inversión en Energía y Minería (OSINERGMIN)',
  'susalud': 'la Superintendencia Nacional de Salud (SUSALUD)',
  'pronabec': 'el Programa Nacional de Becas y Crédito Educativo (PRONABEC)',
  'conadis': 'el Consejo Nacional para la Integración de la Persona con Discapacidad (CONADIS)',
  'sunedu': 'la Superintendencia Nacional de Educación Superior Universitaria (SUNEDU)',
  'universidades': 'las universidades licenciadas del Perú',
  'senasa': 'el Servicio Nacional de Sanidad Agraria (SENASA)',
  'sernanp': 'el Servicio Nacional de Áreas Naturales Protegidas por el Estado (SERNANP)',
  'defensoria': 'la Defensoría del Pueblo',
  'notarias': 'los colegios de notarios del Perú',
  'cofide': 'la Corporación Financiera de Desarrollo (COFIDE)',
  'mivivienda': 'el Fondo MIVIVIENDA',
  'luz_sur': 'Luz del Sur',
  'pluz': 'Pluz Energía Perú',
  'sedapal': 'SEDAPAL'
};

function generateParaphrasedDescription(tramite) {
  const nombre = tramite.nombre.trim();
  const lowerName = nombre.toLowerCase();
  const instId = tramite.institucion_id || 'reniec';
  const entidadTexto = ENTITY_NAMES[instId] || 'la entidad estatal competente';
  const isOnline = tramite.modalidad && tramite.modalidad.includes('online');
  const isPresencial = tramite.modalidad && tramite.modalidad.includes('presencial');
  const canal = isOnline && isPresencial ? 'disponible en canales virtuales y presenciales' : (isOnline ? 'gestionable 100% por internet' : 'atendido en sedes y ventanillas presenciales');
  const costoTexto = tramite.costo_tipo === 'gratuito' || tramite.costo === 0 ? 'trámite gratuito' : `sujeto a tasa oficial`;

  // Tailored contextual templates based on procedure type
  if (lowerName.includes('duplicado')) {
    return `Procedimiento oficial ante ${entidadTexto} para solicitar la reposición y nueva emisión de ${nombre}, ${canal} en caso de pérdida, sustracción o deterioro, con vigencia y validez legal oficial (${costoTexto}).`;
  }
  if (lowerName.includes('renovación') || lowerName.includes('renovacion') || lowerName.includes('revalidación') || lowerName.includes('revalidacion')) {
    return `Gestión regular ante ${entidadTexto} para extender la vigencia de ${nombre}, permitiendo al ciudadano actualizar sus datos y mantener habilitado el documento ante las autoridades (${canal}, ${costoTexto}).`;
  }
  if (lowerName.includes('primera vez') || lowerName.includes('inscripción') || lowerName.includes('inscripcion') || lowerName.includes('obtención') || lowerName.includes('obtencion')) {
    return `Trámite formal ante ${entidadTexto} para el registro, evaluación y expedición inicial de ${nombre}, dirigido a ciudadanos o contribuyentes habilitados (${canal}, ${costoTexto}).`;
  }
  if (lowerName.includes('certificado') || lowerName.includes('constancia') || lowerName.includes('acta') || lowerName.includes('partida')) {
    return `Emisión de documento oficial probatorio por ${entidadTexto} para acreditar la autenticidad y estado de ${nombre}, requerido para diligencias laborales, legales o personales (${canal}, ${costoTexto}).`;
  }
  if (lowerName.includes('denuncia') || lowerName.includes('alerta') || lowerName.includes('reclamo') || lowerName.includes('queja')) {
    return `Canal formal y protegido ante ${entidadTexto} para interponer ${nombre}, permitiendo registrar hechos irregulares o exigir el cumplimiento normativo con número de seguimiento (${canal}, ${costoTexto}).`;
  }
  if (lowerName.includes('pago') || lowerName.includes('impuesto') || lowerName.includes('arbitrios') || lowerName.includes('tasa') || lowerName.includes('deuda')) {
    return `Cumplimiento de obligación tributaria o administrativa ante ${entidadTexto} correspondiente a ${nombre}, con canales autorizados de recaudación y emisión inmediata de comprobante (${canal}).`;
  }
  if (lowerName.includes('jubilación') || lowerName.includes('jubilacion') || lowerName.includes('pensión') || lowerName.includes('pension') || lowerName.includes('retiro') || lowerName.includes('bono') || lowerName.includes('subsidio')) {
    return `Procedimiento previsional y de seguridad social ante ${entidadTexto} para el reconocimiento, cálculo y cobro de ${nombre} conforme al marco normativo vigente (${canal}, ${costoTexto}).`;
  }
  if (lowerName.includes('consulta') || lowerName.includes('verificar') || lowerName.includes('cronograma') || lowerName.includes('estado')) {
    return `Servicio informativo digital ante ${entidadTexto} que permite consultar en tiempo real y sin costo ${nombre}, ingresando documento de identidad o número de registro oficial.`;
  }
  if (lowerName.includes('licencia') || lowerName.includes('permiso') || lowerName.includes('autorización') || lowerName.includes('autorizacion')) {
    return `Evaluación técnica y expedición de autorización legal ante ${entidadTexto} para habilitar ${nombre}, cumpliendo los estándares de seguridad y normativa del sector (${canal}, ${costoTexto}).`;
  }

  // General professional fallback
  return `Guía y procedimiento oficial ante ${entidadTexto} para gestionar ${nombre}. Comprende los requisitos legales, etapas del proceso y canales de atención habilitados (${canal}, ${costoTexto}).`;
}

let count = 0;
rawCatalog.tramites.forEach(tramite => {
  // Preserve verified 26 if they already have high-detail custom descriptions
  if (tramite.verificado === true && tramite.descripcion && tramite.descripcion.length > 50) {
    return;
  }
  tramite.descripcion = generateParaphrasedDescription(tramite);
  count++;
});

console.log(`Successfully generated unique, paraphrased descriptions for ${count} tramites!`);

fs.writeFileSync(rawCatalogPath, JSON.stringify(rawCatalog, null, 2), 'utf-8');
console.log('Saved updated raw_catalog_source.json');
