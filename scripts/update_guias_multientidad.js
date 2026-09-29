const fs = require('fs');
const path = require('path');

const GUIAS_COMPLETAS = [
  {
    id: "guia-auto-usado",
    slug: "comprar-auto-usado",
    nombre: "Guía paso a paso: Comprar un auto usado en el Perú",
    descripcion: "Secuencia completa y segura de trámites para verificar legalmente el vehículo, evitar estafas y formalizar la transferencia registral notarial.",
    ultimaVerificacion: "2026-09-28",
    duracionEstimada: "3 a 7 días hábiles",
    costoEstimado: "S/ 250.00 a S/ 550.00 (gastos notariales + registrales)",
    icono: "DirectionsCarFilledOutlined",
    items: [
      {
        orden: 1,
        tramiteSlug: "record-conductor-puntos",
        tramiteNombre: "Consulta vehicular y récord de papeletas (SAT / SUTRAN)",
        institucionNombre: "SAT / SUTRAN",
        nota: "Verifica que el auto no tenga órdenes de captura por papeletas impagas o embargos tributarios."
      },
      {
        orden: 2,
        tramiteSlug: "duplicado-tive",
        tramiteNombre: "Certificado Registral Vehicular (Gravamen SUNARP)",
        institucionNombre: "SUNARP",
        nota: "Confirma que el vendedor sea el legítimo titular en la partida registral y que el auto no tenga prendas ni embargos."
      },
      {
        orden: 3,
        tramiteSlug: "antecedentes-policiales",
        tramiteNombre: "Peritaje e inspección física vehicular (DIROVE PNP)",
        institucionNombre: "Policía Nacional del Perú (DIROVE)",
        nota: "Inspección técnica para verificar autenticidad de número de motor y chasis (evita comprar autos con piezas robadas o regrabadas).",
        esOpcional: true
      },
      {
        orden: 4,
        tramiteSlug: "duplicado-dni",
        tramiteNombre: "Acta Notarial de Transferencia Vehicular",
        institucionNombre: "Notaría Pública",
        nota: "Comprador y vendedor firman el acta notarial con validación biométrica de RENIEC y pago del medio bancarizado."
      },
      {
        orden: 5,
        tramiteSlug: "duplicado-tive",
        tramiteNombre: "Emisión de la nueva TIVE a nombre del comprador",
        institucionNombre: "SUNARP",
        nota: "Una vez inscrita la transferencia en el Registro de Propiedad Vehicular, descargas la nueva tarjeta a tu nombre."
      }
    ]
  },
  {
    id: "guia-crear-empresa",
    slug: "crear-empresa-mype",
    nombre: "Guía paso a paso: Constituir y formalizar una empresa MYPE en Perú",
    descripcion: "Ruta cronológica para constituir tu empresa (SAC o EIRL), obtener personería jurídica, RUC comercial y licencia municipal.",
    ultimaVerificacion: "2026-09-28",
    duracionEstimada: "5 a 12 días hábiles",
    costoEstimado: "S/ 350.00 a S/ 850.00 (según capital social y costos municipales)",
    icono: "BusinessCenterOutlined",
    items: [
      {
        orden: 1,
        tramiteSlug: "sunarp-reserva-nombre-empresa",
        tramiteNombre: "Búsqueda y reserva de preferencia registral de nombre",
        institucionNombre: "SUNARP",
        nota: "Garantiza que ninguna otra sociedad utilice la misma razón social ni denominación abreviada durante el proceso de constitución."
      },
      {
        orden: 2,
        tramiteSlug: "sid-sunarp",
        tramiteNombre: "Elaboración de minuta y Escritura Pública de Constitución",
        institucionNombre: "Notaría Pública / SID-SUNARP",
        nota: "Redacción del pacto social y estatuto con aporte de capital o bienes dinerarios ante notario público certificado."
      },
      {
        orden: 3,
        tramiteSlug: "inscripcion-ruc-persona",
        tramiteNombre: "Inscripción en el RUC y asignación de Clave SOL",
        institucionNombre: "SUNAT",
        nota: "Activación del RUC 20 para personas jurídicas, elección del régimen tributario (MYPE Tributario o Régimen Especial)."
      },
      {
        orden: 4,
        tramiteSlug: "clave-sol",
        tramiteNombre: "Habilitación de comprobantes de pago electrónicos y libros",
        institucionNombre: "SUNAT",
        nota: "Configuración del Buzón SOL y autorización para emitir facturas y boletas electrónicas desde el primer día."
      },
      {
        orden: 5,
        tramiteSlug: "licencia-funcionamiento",
        tramiteNombre: "Licencia Municipal de Funcionamiento e Inspección ITSE",
        institucionNombre: "Municipalidad Distrital",
        nota: "Obtención de la autorización de apertura del establecimiento comercial según nivel de riesgo de Defensa Civil."
      }
    ]
  },
  {
    id: "guia-matrimonio-civil",
    slug: "matrimonio-civil",
    nombre: "Guía paso a paso: Trámite de Matrimonio Civil en tu Municipalidad",
    descripcion: "Requisitos, apertura de expediente matrimonial, publicación de edictos y formalización legal ante la municipalidad distrital.",
    ultimaVerificacion: "2026-09-28",
    duracionEstimada: "15 a 30 días calendario",
    costoEstimado: "S/ 120.00 a S/ 450.00 (tasa municipal según distrito y horario)",
    icono: "FavoriteBorderOutlined",
    items: [
      {
        orden: 1,
        tramiteSlug: "copia-partida-nacimiento",
        tramiteNombre: "Obtención de copias certificadas de actas de nacimiento",
        institucionNombre: "RENIEC",
        nota: "Ambos contrayentes deben presentar copias de nacimiento actualizadas con antigüedad no mayor a 3 meses."
      },
      {
        orden: 2,
        tramiteSlug: "afiliacion-sis-gratuito",
        tramiteNombre: "Examen médico prenupcial y constancia de consejería",
        institucionNombre: "Centro de Salud / MINSA",
        nota: "Evaluación serológica y médica requerida por ley para descartar enfermedades infectocontagiosas."
      },
      {
        orden: 3,
        tramiteSlug: "duplicado-dni",
        tramiteNombre: "Apertura del expediente matrimonial y edicto público",
        institucionNombre: "Municipalidad Distrital",
        nota: "Presentación de testigos y publicación del edicto en el periódico mural o diario local por el plazo de ley."
      },
      {
        orden: 4,
        tramiteSlug: "rectificacion-domicilio",
        tramiteNombre: "Actualización de estado civil en el DNI",
        institucionNombre: "RENIEC",
        nota: "Tras la celebración del matrimonio, ambos cónyuges deben actualizar su estado civil a 'Casado/a' en su DNIe."
      }
    ]
  },
  {
    id: "guia-comprar-casa",
    slug: "comprar-casa",
    nombre: "Guía paso a paso: Comprar una casa o departamento en el Perú",
    descripcion: "Procedimiento legal integral para adquirir un inmueble: estudio de títulos registrales, minuta notarial, pago de alcabala e inscripción final en SUNARP.",
    ultimaVerificacion: "2026-09-28",
    duracionEstimada: "10 a 25 días hábiles",
    costoEstimado: "3% Alcabala (sobre tramo gravado) + honorarios notariales y registrales",
    icono: "HomeWorkOutlined",
    items: [
      {
        orden: 1,
        tramiteSlug: "duplicado-dni",
        tramiteNombre: "Estudio de títulos y Certificado Registral Inmobiliario (CRI)",
        institucionNombre: "SUNARP",
        nota: "Verifica los últimos 30 años de propiedad del inmueble, cargas, gravámenes o hipotecas activas."
      },
      {
        orden: 2,
        tramiteSlug: "impuesto-predial-arbitrios",
        tramiteNombre: "Constancia de no adeudo del Impuesto Predial y Arbitrios",
        institucionNombre: "Municipalidad Distrital / SAT",
        nota: "Comprueba que el propietario vendedor esté al día con todos los tributos municipales del año en curso."
      },
      {
        orden: 3,
        tramiteSlug: "duplicado-dni",
        tramiteNombre: "Minuta de compraventa y Escritura Pública Notarial",
        institucionNombre: "Notaría Pública",
        nota: "Firma de escritura con bancarización obligatoria y verificación biométrica de identidad por RENIEC."
      },
      {
        orden: 4,
        tramiteSlug: "clave-sol",
        tramiteNombre: "Liquidación y pago del Impuesto de Alcabala",
        institucionNombre: "SAT / Municipalidad",
        nota: "El comprador debe cancelar el impuesto de alcabala dentro del mes calendario siguiente a la compraventa."
      },
      {
        orden: 5,
        tramiteSlug: "duplicado-dni",
        tramiteNombre: "Inscripción del nuevo propietario en el Registro de Predios",
        institucionNombre: "SUNARP",
        nota: "El parte notarial ingresa al registro público para inscribir formalmente tu derecho de propiedad oponible a terceros."
      }
    ]
  },
  {
    id: "guia-fallecimiento-familiar",
    slug: "fallecimiento-familiar",
    nombre: "Guía paso a paso: Trámites tras el fallecimiento de un familiar",
    descripcion: "Orientación legal y administrativa sobre certificado de defunción, acta oficial en RENIEC, sucesión intestada de bienes y cobro de beneficios sociales.",
    ultimaVerificacion: "2026-09-28",
    duracionEstimada: "15 a 45 días calendario",
    costoEstimado: "S/ 150.00 a S/ 600.00 (según trámite notarial de sucesión intestada)",
    icono: "FamilyRestroomOutlined",
    items: [
      {
        orden: 1,
        tramiteSlug: "minsa-certificado-defuncion",
        tramiteNombre: "Emisión del Certificado Médico de Defunción (SINADEF)",
        institucionNombre: "MINSA / Establecimiento de Salud",
        nota: "Documento médico oficial e indispensable emitido gratuitamente por el médico tratante o legista."
      },
      {
        orden: 2,
        tramiteSlug: "reniec-inscripcion-defuncion",
        tramiteNombre: "Inscripción de defunción y cancelación de DNI",
        institucionNombre: "RENIEC",
        nota: "Registro oficial del hecho vital y anulación del número de DNI para evitar usurpaciones o fraudes electorales."
      },
      {
        orden: 3,
        tramiteSlug: "reniec-acta-defuncion",
        tramiteNombre: "Emisión de copias certificadas del Acta de Defunción",
        institucionNombre: "RENIEC",
        nota: "Requeridas por aseguradoras, bancos y juzgados para cobro de seguros de vida, ahorros y sepelio."
      },
      {
        orden: 4,
        tramiteSlug: "duplicado-dni",
        tramiteNombre: "Trámite de Sucesión Intestada (Declaratoria de Herederos)",
        institucionNombre: "Notaría Pública / SUNARP",
        nota: "Si el causante no dejó testamento, la notaría declara legalmente a cónyuge e hijos como herederos forzosos."
      },
      {
        orden: 5,
        tramiteSlug: "afiliacion-sis-gratuito",
        tramiteNombre: "Cobro de subsidio por sepelio y pensión de sobrevivencia",
        institucionNombre: "EsSalud / ONP / AFP",
        nota: "Gestión de la cobertura funeraria oficial y pensiones de viudez u orfandad según régimen previsional."
      }
    ]
  },
  {
    id: "guia-sacar-brevete",
    slug: "sacar-brevete",
    nombre: "Guía paso a paso: Obtención de Brevete A-1 por primera vez",
    descripcion: "Todos los requisitos y exámenes obligatorios (médico, reglas y circuito de manejo) para obtener la Licencia de Conducir Clase A-1 en Perú.",
    ultimaVerificacion: "2026-09-28",
    duracionEstimada: "5 a 10 días hábiles",
    costoEstimado: "S/ 250.00 a S/ 450.00 (médico + derecho examen Touring + tasa MTC)",
    icono: "DirectionsCarFilledOutlined",
    items: [
      {
        orden: 1,
        tramiteSlug: "mtc-examen-medico-brevete",
        tramiteNombre: "Examen médico psicosomático en centro de salud autorizado",
        institucionNombre: "Centro Médico Autorizado MTC",
        nota: "Evaluación visual, auditiva, psicológica y clínica con registro biométrico con huella dactilar directa al sistema del MTC."
      },
      {
        orden: 2,
        tramiteSlug: "obtencion-brevete-a1",
        tramiteNombre: "Examen de conocimientos y reglas de tránsito",
        institucionNombre: "Touring y Automóvil Club / MTC",
        nota: "Evaluación computarizada de 40 preguntas sobre el Reglamento Nacional de Tránsito (mínimo 35 para aprobar)."
      },
      {
        orden: 3,
        tramiteSlug: "obtencion-brevete-a1",
        tramiteNombre: "Examen práctico de manejo en circuito oficial",
        institucionNombre: "Touring y Automóvil Club / MTC",
        nota: "Prueba de estacionamiento en paralelo, diagonal y maniobras de control vehicular en el circuito oficial."
      },
      {
        orden: 4,
        tramiteSlug: "record-conductor-puntos",
        tramiteNombre: "Emisión de Licencia de Conducir (Electrónica o Física)",
        institucionNombre: "MTC",
        nota: "Pago de la tasa oficial (S/ 6.70 electrónica o S/ 14.70 física) y emisión con código QR de verificación nacional."
      }
    ]
  },
  {
    id: "guia-nacimiento-hijo",
    slug: "nacimiento-hijo",
    nombre: "Guía paso a paso: Trámites por nacimiento de un hijo en Perú",
    descripcion: "Ruta desde la clínica o posta hasta la obtención del acta de nacimiento, el primer DNI del bebé y su seguro de salud.",
    ultimaVerificacion: "2026-09-28",
    duracionEstimada: "3 a 7 días hábiles",
    costoEstimado: "Totalmente Gratuito (DNI recién nacido y afiliación a seguro son gratuitos)",
    icono: "ChildCareOutlined",
    items: [
      {
        orden: 1,
        tramiteSlug: "afiliacion-sis-gratuito",
        tramiteNombre: "Certificado de Nacido Vivo (CNV) emitido por obstetra o médico",
        institucionNombre: "MINSA / EsSalud / Clínica",
        nota: "Documento oficial con huella pelmatoscópica (pie) del bebé y datos de la madre al momento del parto."
      },
      {
        orden: 2,
        tramiteSlug: "inscripcion-nacimiento",
        tramiteNombre: "Inscripción del nacimiento y emisión del acta de nacimiento",
        institucionNombre: "RENIEC / OREC Municipal",
        nota: "Ambos padres acuden a registrar la filiación del menor. Se entrega de inmediato la primera copia certificada gratuita."
      },
      {
        orden: 3,
        tramiteSlug: "dni-primera-vez",
        tramiteNombre: "Emisión del primer DNI para menor de edad (DNI amarillo o DNIe)",
        institucionNombre: "RENIEC",
        nota: "Con foto y huella de los progenitores. Tramitable en agencias o por campaña de gratuidad para recién nacidos."
      },
      {
        orden: 4,
        tramiteSlug: "afiliacion-sis-gratuito",
        tramiteNombre: "Afiliación del bebé al seguro de salud (EsSalud o SIS)",
        institucionNombre: "EsSalud / SIS",
        nota: "Inscripción como derechohabiente para control de vacunas, tamizaje neonatal y control de crecimiento (CRED)."
      }
    ]
  },
  {
    id: "guia-primer-empleo",
    slug: "primer-empleo",
    nombre: "Guía paso a paso: Trámites para iniciar tu primer empleo formal",
    descripcion: "Documentación oficial indispensable que te solicitarán las áreas de recursos humanos en Perú para contratarte en planilla o locación.",
    ultimaVerificacion: "2026-09-28",
    duracionEstimada: "1 a 2 días hábiles",
    costoEstimado: "Totalmente Gratuito (S/ 0.00)",
    icono: "WorkOutlineOutlined",
    items: [
      {
        orden: 1,
        tramiteSlug: "certificado-unico-laboral",
        tramiteNombre: "Certificado Único Laboral (CUL - Empleos Perú)",
        institucionNombre: "MTPE",
        nota: "Un solo documento digital oficial que reúne antecedentes policiales, penales, judiciales, trayectoria laboral y estudios."
      },
      {
        orden: 2,
        tramiteSlug: "inscripcion-ruc-persona",
        tramiteNombre: "Inscripción en el RUC y Clave SOL digital",
        institucionNombre: "SUNAT",
        nota: "Si trabajas bajo locación de servicios (RxH), necesitas emitir recibos por honorarios electrónicos de 4ta categoría."
      },
      {
        orden: 3,
        tramiteSlug: "emision-recibos-honorarios-electronicos",
        tramiteNombre: "Suspensión de retenciones de cuarta categoría (Formulario 1609)",
        institucionNombre: "SUNAT",
        nota: "Si tus ingresos mensuales proyectados no superan el tope tributario, evita el descuento del 8% en tus recibos."
      },
      {
        orden: 4,
        tramiteSlug: "antecedentes-policiales",
        tramiteNombre: "Apertura de Cuenta Sueldo y elección previsional (ONP / AFP)",
        institucionNombre: "Banco / SBS",
        nota: "Carta del empleador para apertura de cuenta sin costo de mantenimiento y elección voluntaria de fondo de pensión."
      }
    ]
  },
  {
    id: "guia-divorcio",
    slug: "divorcio",
    nombre: "Guía paso a paso: Divorcio rápido (Notarial o Municipal) en Perú",
    descripcion: "Procedimiento de la Ley N° 29227 para disolver el vínculo matrimonial de mutuo acuerdo ante Notaría o Municipalidad distrital.",
    ultimaVerificacion: "2026-09-28",
    duracionEstimada: "2 a 3 meses",
    costoEstimado: "S/ 180.00 a S/ 800.00 (según tasa municipal o notarial elegida)",
    icono: "GavelOutlined",
    items: [
      {
        orden: 1,
        tramiteSlug: "copia-partida-nacimiento",
        tramiteNombre: "Verificación de condiciones y acta de matrimonio certificada",
        institucionNombre: "RENIEC",
        nota: "Exige mínimo 2 años de matrimonio civil, no tener hijos menores o tener régimen de alimentos y custodia judicial o conciliado."
      },
      {
        orden: 2,
        tramiteSlug: "duplicado-dni",
        tramiteNombre: "Solicitud de Separación Convencional y Audiencia Única",
        institucionNombre: "Notaría Pública / Municipalidad",
        nota: "Ratificación presencial de ambos cónyuges de su voluntad inequívoca de poner fin al vínculo matrimonial."
      },
      {
        orden: 3,
        tramiteSlug: "duplicado-dni",
        tramiteNombre: "Solicitud de Disolución Definitiva del Vínculo Matrimonial",
        institucionNombre: "Notaría Pública / Municipalidad",
        nota: "Tras transcurrir dos meses desde la separación convencional, cualquiera de los cónyuges solicita la resolución final de divorcio."
      },
      {
        orden: 4,
        tramiteSlug: "rectificacion-domicilio",
        tramiteNombre: "Inscripción en SUNARP y actualización del estado civil en RENIEC",
        institucionNombre: "RENIEC / SUNARP",
        nota: "Inscripción registral del divorcio y actualización del DNI con la nueva condición de soltero/a (divorciado/a)."
      }
    ]
  },
  {
    id: "guia-viajar-extranjero",
    slug: "viajar-extranjero",
    nombre: "Guía paso a paso: Trámites para viajar fuera del Perú",
    descripcion: "Requisitos migratorios, pasaporte biométrico, permisos de salida de menores de edad y vacunas internacionales exigidas.",
    ultimaVerificacion: "2026-09-28",
    duracionEstimada: "2 a 15 días hábiles",
    costoEstimado: "S/ 120.90 (tasa pasaporte Migraciones) + permisos notariales si aplican",
    icono: "FlightTakeoffOutlined",
    items: [
      {
        orden: 1,
        tramiteSlug: "duplicado-dni",
        tramiteNombre: "Verificación de vigencia y domicilio del DNI",
        institucionNombre: "RENIEC",
        nota: "Para viajar por la CAN y Mercosur basta el DNI vigente sin multas electorales pendientes."
      },
      {
        orden: 2,
        tramiteSlug: "pasaporte-electronico",
        tramiteNombre: "Emisión o renovación del Pasaporte Electrónico ordinario",
        institucionNombre: "Superintendencia Nacional de Migraciones",
        nota: "Pago de la tasa oficial de S/ 120.90 (código 01810 Págalo.pe), cita digital o atención por urgencia de vuelo (48h antes)."
      },
      {
        orden: 3,
        tramiteSlug: "carne-extranjeria",
        tramiteNombre: "Autorización Notarial de Viaje para menores de edad",
        institucionNombre: "Notaría Pública",
        nota: "Obligatoria por ley si el menor viaja solo o con uno solo de sus progenitores fuera del territorio peruano."
      },
      {
        orden: 4,
        tramiteSlug: "pasaporte-electronico",
        tramiteNombre: "Control migratorio fronterizo y registro biométrico de salida",
        institucionNombre: "Migraciones / Aeropuerto Jorge Chávez",
        nota: "Pase por e-gates o ventanillas de control migratorio con pasaporte electrónico habilitado y tarjeta de embarque."
      }
    ]
  }
];

// 1. Update mockData.ts
const mockDataPath = path.join(__dirname, '../src/data/mockData.ts');
let content = fs.readFileSync(mockDataPath, 'utf8');

const guiasIdx = content.indexOf('export const GUIAS_MULTIENTIDAD: GuiaMultientidad[] =');
if (guiasIdx !== -1) {
  const prefix = content.substring(0, guiasIdx);
  const updatedContent = `${prefix}export const GUIAS_MULTIENTIDAD: GuiaMultientidad[] = ${JSON.stringify(GUIAS_COMPLETAS, null, 2)};\n`;
  fs.writeFileSync(mockDataPath, updatedContent, 'utf8');
  console.log(`Updated GUIAS_MULTIENTIDAD in mockData.ts with ${GUIAS_COMPLETAS.length} guides!`);
} else {
  console.error('Could not find GUIAS_MULTIENTIDAD in mockData.ts');
}

// 2. Update raw_catalog_source.json
const rawCatalogPath = path.join(__dirname, '../commits/raw_catalog_source.json');
if (fs.existsSync(rawCatalogPath)) {
  const rawCatalog = JSON.parse(fs.readFileSync(rawCatalogPath, 'utf8'));
  rawCatalog.guias_multientidad = GUIAS_COMPLETAS;
  fs.writeFileSync(rawCatalogPath, JSON.stringify(rawCatalog, null, 2), 'utf8');
  console.log(`Updated guias_multientidad in raw_catalog_source.json!`);
}
