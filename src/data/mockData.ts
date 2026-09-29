// DATASET OFICIAL MAESTRO DE TRÁMITES — COMOTRAMITO PERÚ
// Generado automáticamente con preservación estricta de trámites verificados.

import { Categoria, Institucion, Tramite, GuiaMultientidad } from '@/types/tramite';

export const CATEGORIAS: Categoria[] = [
  {
    "id": "cat-1",
    "slug": "identidad-documentos",
    "nombre": "Identidad y Documentos",
    "descripcion": "DNI, pasaportes, partidas de nacimiento y trámites de filiación oficial.",
    "icono": "BadgeOutlined"
  },
  {
    "id": "cat-2",
    "slug": "vehicular-transporte",
    "nombre": "Vehicular y Transporte",
    "descripcion": "Brevete, récord de conductor, placas, SOAT y transferencias de vehículos.",
    "icono": "DirectionsCarOutlined"
  },
  {
    "id": "cat-3",
    "slug": "tributos-empresas",
    "nombre": "Tributos y RUC",
    "descripcion": "Inscripción RUC, Clave SOL, declaración de impuestos y constitución empresarial.",
    "icono": "AccountBalanceOutlined"
  },
  {
    "id": "cat-4",
    "slug": "empleo-certificados",
    "nombre": "Empleo y Certificados",
    "descripcion": "Certificado Único Laboral, antecedentes policiales, penales y judiciales.",
    "icono": "WorkOutlineOutlined"
  },
  {
    "id": "cat-5",
    "slug": "servicios-publicos",
    "nombre": "Servicios Públicos y Hogar",
    "descripcion": "Pago y gestión de recibos de energía eléctrica, agua potable y gas natural.",
    "icono": "BoltOutlined"
  },
  {
    "id": "cat-6",
    "slug": "municipal-vivienda",
    "nombre": "Municipal y Vivienda",
    "descripcion": "Impuesto predial, arbitrios, licencias de funcionamiento e inspecciones ITSE.",
    "icono": "ApartmentOutlined"
  },
  {
    "id": "cat-7",
    "slug": "salud-social",
    "nombre": "Salud y Afiliaciones",
    "descripcion": "Seguro Integral de Salud (SIS), ESSALUD y constancias médicas.",
    "icono": "HealthAndSafetyOutlined"
  },
  {
    "id": "cat-8",
    "slug": "educacion-becas",
    "nombre": "Educación y Becas",
    "descripcion": "Títulos universitarios, grados SUNEDU, Beca 18 y certificados de estudios.",
    "icono": "SchoolOutlined"
  },
  {
    "id": "cat-9",
    "slug": "programas-sociales-pensiones",
    "nombre": "Pensiones y Programas Sociales",
    "descripcion": "Jubilación ONP, retiros de AFP, Pensión 65 y Bono Techo Propio.",
    "icono": "ElderlyOutlined"
  },
  {
    "id": "cat-10",
    "slug": "consumidor-defensoria",
    "nombre": "Defensa del Consumidor y Derechos",
    "descripcion": "Reclamos ante INDECOPI, OSIPTEL, OSINERGMIN, SUNASS y Defensoría.",
    "icono": "GavelOutlined"
  }
];

export const INSTITUCIONES: Institucion[] = [
  {
    "id": "inst-reniec",
    "slug": "reniec",
    "nombre": "Registro Nacional de Identificación y Estado Civil",
    "sigla": "RENIEC",
    "tipo": "nacional",
    "webOficial": "https://www.reniec.gob.pe",
    "descripcion": "Entidad encargada de la identificación de todos los peruanos y registro de hechos vitales.",
    "logoIniciales": "RN"
  },
  {
    "id": "inst-migraciones",
    "slug": "migraciones",
    "nombre": "Superintendencia Nacional de Migraciones",
    "sigla": "MIGRACIONES",
    "tipo": "nacional",
    "webOficial": "https://www.gob.pe/migraciones",
    "descripcion": "Control migratorio y emisión de pasaportes electrónicos y permisos de viaje.",
    "logoIniciales": "MG"
  },
  {
    "id": "inst-mtc",
    "slug": "mtc",
    "nombre": "Ministerio de Transportes y Comunicaciones",
    "sigla": "MTC",
    "tipo": "nacional",
    "webOficial": "https://www.gob.pe/mtc",
    "descripcion": "Regulación y emisión de licencias de conducir, transporte terrestre y comunicaciones.",
    "logoIniciales": "MT"
  },
  {
    "id": "inst-sunat",
    "slug": "sunat",
    "nombre": "Superintendencia Nacional de Aduanas y de Administración Tributaria",
    "sigla": "SUNAT",
    "tipo": "nacional",
    "webOficial": "https://www.sunat.gob.pe",
    "descripcion": "Administración de tributos internos, RUC, comprobantes de pago e impuestos aduaneros.",
    "logoIniciales": "SN"
  },
  {
    "id": "inst-sunarp",
    "slug": "sunarp",
    "nombre": "Superintendencia Nacional de los Registros Públicos",
    "sigla": "SUNARP",
    "tipo": "nacional",
    "webOficial": "https://www.gob.pe/sunarp",
    "descripcion": "Inscripción y publicidad de actos jurídicos, bienes inmuebles y propiedad vehicular.",
    "logoIniciales": "SNP"
  },
  {
    "id": "inst-mtpe",
    "slug": "mtpe",
    "nombre": "Ministerio de Trabajo y Promoción del Empleo",
    "sigla": "MTPE",
    "tipo": "nacional",
    "webOficial": "https://www.gob.pe/mtpe",
    "descripcion": "Promoción del empleo formal y emisión gratuita del Certificado Único Laboral.",
    "logoIniciales": "MTP"
  },
  {
    "id": "inst-pj",
    "slug": "pj",
    "nombre": "Poder Judicial del Perú",
    "sigla": "PJ",
    "tipo": "nacional",
    "webOficial": "https://www.pj.gob.pe",
    "descripcion": "Administración de justicia y emisión del Certificado Electrónico de Antecedentes Penales.",
    "logoIniciales": "PJ"
  },
  {
    "id": "inst-pnp",
    "slug": "pnp",
    "nombre": "Policía Nacional del Perú",
    "sigla": "PNP",
    "tipo": "nacional",
    "webOficial": "https://www.policia.gob.pe",
    "descripcion": "Seguridad ciudadana, emisión de antecedentes policiales y denuncias por pérdida.",
    "logoIniciales": "PNP"
  },
  {
    "id": "inst-inpe",
    "slug": "inpe",
    "nombre": "Instituto Nacional Penitenciario",
    "sigla": "INPE",
    "tipo": "nacional",
    "webOficial": "https://www.gob.pe/inpe",
    "descripcion": "Gestión penitenciaria y emisión digital del Certificado de Antecedentes Judiciales.",
    "logoIniciales": "INP"
  },
  {
    "id": "inst-muni-generica",
    "slug": "municipalidad-distrital",
    "nombre": "Tu municipalidad",
    "sigla": "Tu municipalidad",
    "tipo": "municipal",
    "webOficial": "https://www.gob.pe/institucion/pcm/campa%C3%B1as/1529-tupa-digital",
    "descripcion": "Gobierno local distrital. Costos y plazos varían según el distrito.",
    "logoIniciales": "MU"
  },
  {
    "id": "inst-luz-sur",
    "slug": "luz-del-sur",
    "nombre": "Luz del Sur S.A.A.",
    "sigla": "Luz del Sur",
    "tipo": "privado",
    "webOficial": "https://www.luzdelsur.com.pe",
    "descripcion": "Distribuidora de energía eléctrica para la zona sur y este de Lima Metropolitana.",
    "logoIniciales": "LDS"
  },
  {
    "id": "inst-pluz-enel",
    "slug": "pluz-energia",
    "nombre": "Pluz Energía (ex-Enel Distribución Perú)",
    "sigla": "Pluz",
    "tipo": "privado",
    "webOficial": "https://www.pluz.pe",
    "descripcion": "Distribuidora de energía eléctrica para Lima Norte, Centro y Callao.",
    "logoIniciales": "PLZ"
  },
  {
    "id": "inst-sedapal",
    "slug": "sedapal",
    "nombre": "Servicio de Agua Potable y Alcantarillado de Lima",
    "sigla": "SEDAPAL",
    "tipo": "nacional",
    "webOficial": "https://www.sedapal.com.pe",
    "descripcion": "Empresa estatal proveedora de servicios de agua potable y alcantarillado en Lima y Callao.",
    "logoIniciales": "SED"
  },
  {
    "id": "inst-sis",
    "slug": "sis",
    "nombre": "Seguro Integral de Salud",
    "sigla": "SIS",
    "tipo": "nacional",
    "webOficial": "https://www.gob.pe/sis",
    "descripcion": "Organismo público ejecutor que brinda cobertura de aseguramiento en salud a nivel nacional.",
    "logoIniciales": "SIS"
  },
  {
    "id": "inst-essalud",
    "slug": "essalud",
    "nombre": "Seguro Social de Salud",
    "sigla": "EsSalud",
    "tipo": "nacional",
    "webOficial": "https://www.essalud.gob.pe",
    "descripcion": "Entidad de seguridad social que brinda atención médica y prestaciones a trabajadores formales y sus familias.",
    "logoIniciales": "ESS"
  },
  {
    "id": "inst-fiscalia",
    "slug": "fiscalia",
    "nombre": "Ministerio Público - Fiscalía de la Nación",
    "sigla": "Fiscalía",
    "tipo": "nacional",
    "webOficial": "https://www.mpfn.gob.pe",
    "descripcion": "Defensa de la legalidad, los derechos ciudadanos y persecución del delito en el Perú.",
    "logoIniciales": "MP"
  },
  {
    "id": "inst-onp",
    "slug": "onp",
    "nombre": "Oficina de Normalización Previsional",
    "sigla": "ONP",
    "tipo": "nacional",
    "webOficial": "https://www.onp.gob.pe",
    "descripcion": "Administración del Sistema Nacional de Pensiones (D.L. 19990) y pensiones públicas estatales.",
    "logoIniciales": "ONP"
  },
  {
    "id": "inst-afp",
    "slug": "afp",
    "nombre": "Asociación de AFP / Sistema Privado de Pensiones",
    "sigla": "AFP",
    "tipo": "privado",
    "webOficial": "https://www.sbs.gob.pe",
    "descripcion": "Administradoras Privadas de Fondos de Pensiones reguladas por la SBS (Integra, Prima, Profuturo, Habitat).",
    "logoIniciales": "AFP"
  },
  {
    "id": "inst-cancilleria",
    "slug": "cancilleria",
    "nombre": "Ministerio de Relaciones Exteriores",
    "sigla": "Cancillería",
    "tipo": "nacional",
    "webOficial": "https://www.cancilleria.gob.pe",
    "descripcion": "Política exterior, apostillado de documentos oficiales y asistencia consular a ciudadanos peruanos.",
    "logoIniciales": "RREE"
  },
  {
    "id": "inst-indecopi",
    "slug": "indecopi",
    "nombre": "Instituto Nacional de Defensa de la Competencia y de la Propiedad Intelectual",
    "sigla": "INDECOPI",
    "tipo": "nacional",
    "webOficial": "https://www.gob.pe/indecopi",
    "descripcion": "Defensa de los derechos del consumidor, registro de marcas comerciales y propiedad intelectual.",
    "logoIniciales": "IND"
  },
  {
    "id": "inst-sat",
    "slug": "sat",
    "nombre": "Servicio de Administración Tributaria de Lima",
    "sigla": "SAT Lima",
    "tipo": "municipal",
    "webOficial": "https://www.sat.gob.pe",
    "descripcion": "Recaudación de tributos municipales, arbitrios, impuesto vehicular y papeletas de tránsito en Lima.",
    "logoIniciales": "SAT"
  },
  {
    "id": "inst-minedu",
    "slug": "minedu",
    "nombre": "Ministerio de Educación",
    "sigla": "MINEDU",
    "tipo": "nacional",
    "webOficial": "https://www.gob.pe/minedu",
    "descripcion": "Rector del sistema educativo peruano, emisión de certificados escolares y acreditación pedagógica.",
    "logoIniciales": "MED"
  },
  {
    "id": "inst-oece",
    "slug": "oece",
    "nombre": "Organismo Especializado para las Contrataciones del Estado (ex-OSCE)",
    "sigla": "OECE",
    "tipo": "nacional",
    "webOficial": "https://www.gob.pe/oece",
    "descripcion": "Administración del Registro Nacional de Proveedores (RNP) y supervisión de compras públicas estatales.",
    "logoIniciales": "OEC"
  },
  {
    "id": "inst-banco-nacion",
    "slug": "banco-de-la-nacion",
    "nombre": "Banco de la Nación",
    "sigla": "Banco de la Nación",
    "tipo": "nacional",
    "webOficial": "https://www.bn.com.pe",
    "descripcion": "Entidad financiera del Estado que opera la plataforma Págalo.pe y cuentas Multired para ciudadanos.",
    "logoIniciales": "BN"
  },
  {
    "id": "inst-onpe",
    "slug": "onpe",
    "nombre": "Oficina Nacional de Procesos Electorales",
    "sigla": "ONPE",
    "tipo": "nacional",
    "webOficial": "https://www.onpe.gob.pe",
    "descripcion": "Organización de elecciones democráticas en el Perú y gestión de multas por omisión al sufragio.",
    "logoIniciales": "ONP"
  },
  {
    "id": "inst-midis",
    "slug": "midis",
    "nombre": "Ministerio de Desarrollo e Inclusión Social",
    "sigla": "MIDIS",
    "tipo": "nacional",
    "webOficial": "https://www.gob.pe/midis",
    "descripcion": "Coordinación de políticas sociales, padrón SISFOH y programas como Pensión 65, Juntos y Qali Warma.",
    "logoIniciales": "MID"
  },
  {
    "id": "inst-sucamec",
    "slug": "sucamec",
    "nombre": "Superintendencia Nacional de Control de Servicios de Seguridad, Armas y Explosivos",
    "sigla": "SUCAMEC",
    "tipo": "nacional",
    "webOficial": "https://www.sucamec.gob.pe",
    "descripcion": "Control, registro y emisión de licencias de posesión de armas de fuego y pirotecnia de uso civil.",
    "logoIniciales": "SUC"
  },
  {
    "id": "inst-sutran",
    "slug": "sutran",
    "nombre": "Superintendencia de Transporte Terrestre de Personas, Carga y Mercancías",
    "sigla": "SUTRAN",
    "tipo": "nacional",
    "webOficial": "https://www.sutran.gob.pe",
    "descripcion": "Supervisión del transporte terrestre interprovincial y consulta del récord de conductores.",
    "logoIniciales": "SUT"
  },
  {
    "id": "inst-atu",
    "slug": "atu",
    "nombre": "Autoridad de Transporte Urbano para Lima y Callao",
    "sigla": "ATU",
    "tipo": "regional",
    "webOficial": "https://www.atu.gob.pe",
    "descripcion": "Planificación y fiscalización del transporte urbano, emisión de TUC para taxis y transporte regular.",
    "logoIniciales": "ATU"
  },
  {
    "id": "inst-sunass",
    "slug": "sunass",
    "nombre": "Superintendencia Nacional de Servicios de Saneamiento",
    "sigla": "SUNASS",
    "tipo": "nacional",
    "webOficial": "https://www.sunass.gob.pe",
    "descripcion": "Regulación y resolución de reclamos en segunda instancia sobre servicios de agua potable y alcantarillado.",
    "logoIniciales": "SUN"
  },
  {
    "id": "inst-produce",
    "slug": "produce",
    "nombre": "Ministerio de la Producción",
    "sigla": "PRODUCE",
    "tipo": "nacional",
    "webOficial": "https://www.gob.pe/produce",
    "descripcion": "Fomento y desarrollo de las micro, pequeñas y medianas empresas y el sector pesquero peruano.",
    "logoIniciales": "PRD"
  },
  {
    "id": "inst-cofopri",
    "slug": "cofopri",
    "nombre": "Organismo de Formalización de la Propiedad Informal",
    "sigla": "COFOPRI",
    "tipo": "nacional",
    "webOficial": "https://www.cofopri.gob.pe",
    "descripcion": "Saneamiento físico-legal y titulación gratuita de posesiones informales en todo el país.",
    "logoIniciales": "COF"
  },
  {
    "id": "inst-sunafil",
    "slug": "sunafil",
    "nombre": "Superintendencia Nacional de Fiscalización Laboral",
    "sigla": "SUNAFIL",
    "tipo": "nacional",
    "webOficial": "https://www.sunafil.gob.pe",
    "descripcion": "Fiscalización del cumplimiento de los derechos laborales, seguridad ocupacional y planilla formal.",
    "logoIniciales": "SNF"
  },
  {
    "id": "inst-sbs",
    "slug": "sbs",
    "nombre": "Superintendencia de Banca, Seguros y AFP",
    "sigla": "SBS",
    "tipo": "nacional",
    "webOficial": "https://www.sbs.gob.pe",
    "descripcion": "Regulación del sistema financiero, central de riesgos de deudas bancarias y tipo de cambio contable.",
    "logoIniciales": "SBS"
  },
  {
    "id": "inst-minsa",
    "slug": "minsa",
    "nombre": "Ministerio de Salud",
    "sigla": "MINSA",
    "tipo": "nacional",
    "webOficial": "https://www.gob.pe/minsa",
    "descripcion": "Rector del sistema nacional de salud, emisión del carné de vacunación y certificados de discapacidad.",
    "logoIniciales": "MIN"
  },
  {
    "id": "inst-osiptel",
    "slug": "osiptel",
    "nombre": "Organismo Supervisor de Inversión Privada en Telecomunicaciones",
    "sigla": "OSIPTEL",
    "tipo": "nacional",
    "webOficial": "https://www.osiptel.gob.pe",
    "descripcion": "Regulación de empresas de telecomunicaciones, portabilidad numérica y registro IMEI de celulares.",
    "logoIniciales": "OSP"
  },
  {
    "id": "inst-osinergmin",
    "slug": "osinergmin",
    "nombre": "Organismo Supervisor de la Inversión en Energía y Minería",
    "sigla": "OSINERGMIN",
    "tipo": "nacional",
    "webOficial": "https://www.osinergmin.gob.pe",
    "descripcion": "Supervisión de empresas de electricidad, hidrocarburos y reclamos por cortes o cobros excesivos de luz.",
    "logoIniciales": "OSN"
  },
  {
    "id": "inst-susalud",
    "slug": "susalud",
    "nombre": "Superintendencia Nacional de Salud",
    "sigla": "SUSALUD",
    "tipo": "nacional",
    "webOficial": "https://www.susalud.gob.pe",
    "descripcion": "Protección y restitución de los derechos en salud de los usuarios frente a clínicas y aseguradoras EPS.",
    "logoIniciales": "SUS"
  },
  {
    "id": "pronabec",
    "slug": "pronabec",
    "nombre": "Programa Nacional de Becas y Crédito Educativo",
    "sigla": "PRONABEC",
    "tipo": "nacional",
    "webOficial": "https://www.pronabec.gob.pe",
    "descripcion": "Convocatoria y adjudicación de becas integrales para estudios superiores como Beca 18.",
    "logoIniciales": "PRB"
  },
  {
    "id": "inst-conadis",
    "slug": "conadis",
    "nombre": "Consejo Nacional para la Integración de la Persona con Discapacidad",
    "sigla": "CONADIS",
    "tipo": "nacional",
    "webOficial": "https://www.conadis.gob.pe",
    "descripcion": "Registro nacional y emisión del carné oficial que acredita derechos y beneficios para personas con discapacidad.",
    "logoIniciales": "CND"
  },
  {
    "id": "inst-sunedu",
    "slug": "sunedu",
    "nombre": "Superintendencia Nacional de Educación Superior Universitaria",
    "sigla": "SUNEDU",
    "tipo": "nacional",
    "webOficial": "https://www.sunedu.gob.pe",
    "descripcion": "Supervisión universitaria y administración del Registro Nacional de Grados y Títulos Oficiales.",
    "logoIniciales": "SND"
  },
  {
    "id": "inst-universidades",
    "slug": "universidades-peru",
    "nombre": "Universidades Públicas y Privadas del Perú",
    "sigla": "Universidades",
    "tipo": "nacional",
    "webOficial": "https://www.sunedu.gob.pe/lista-de-universidades/",
    "descripcion": "Instituciones de educación superior autónomas habilitadas para otorgar grados académicos de bachiller y títulos.",
    "logoIniciales": "UNI"
  },
  {
    "id": "inst-senasa",
    "slug": "senasa",
    "nombre": "Servicio Nacional de Sanidad Agraria",
    "sigla": "SENASA",
    "tipo": "nacional",
    "webOficial": "https://www.senasa.gob.pe",
    "descripcion": "Sanidad animal y vegetal, emisión de certificados sanitarios para viajes nacionales e internacionales con mascotas.",
    "logoIniciales": "SEN"
  },
  {
    "id": "inst-sernanp",
    "slug": "sernanp",
    "nombre": "Servicio Nacional de Áreas Naturales Protegidas",
    "sigla": "SERNANP",
    "tipo": "nacional",
    "webOficial": "https://www.sernanp.gob.pe",
    "descripcion": "Conservación de áreas naturales protegidas del Perú y regulación de accesos turísticos a reservas y santuarios.",
    "logoIniciales": "SER"
  },
  {
    "id": "inst-defensoria",
    "slug": "defensoria-del-pueblo",
    "nombre": "Defensoría del Pueblo",
    "sigla": "Defensoría",
    "tipo": "nacional",
    "webOficial": "https://www.defensoria.gob.pe",
    "descripcion": "Órgano constitucional autónomo que defiende los derechos fundamentales frente a abusos o demoras del Estado.",
    "logoIniciales": "DEF"
  },
  {
    "id": "inst-notarias",
    "slug": "notarias-peru",
    "nombre": "Colegio de Notarios del Perú",
    "sigla": "Notarías",
    "tipo": "privado",
    "webOficial": "https://www.notarios.org.pe",
    "descripcion": "Notarías públicas autorizadas para dar fe de actos jurídicos, minutas, poderes notariales y transferencias.",
    "logoIniciales": "NOT"
  },
  {
    "id": "inst-cofide",
    "slug": "cofide",
    "nombre": "Banco de Desarrollo del Perú (COFIDE)",
    "sigla": "COFIDE",
    "tipo": "nacional",
    "webOficial": "https://www.cofide.com.pe",
    "descripcion": "Banco de segundo piso que canaliza fondos y garantías preferenciales para la micro y pequeña empresa.",
    "logoIniciales": "COF"
  },
  {
    "id": "inst-mivivienda",
    "slug": "fondo-mivivienda",
    "nombre": "Fondo MIVIVIENDA S.A.",
    "sigla": "MIVIVIENDA",
    "tipo": "nacional",
    "webOficial": "https://www.mivivienda.com.pe",
    "descripcion": "Facilita la adquisición y construcción de viviendas sociales mediante el Bono Familiar Habitacional Techo Propio.",
    "logoIniciales": "MIV"
  }
];

export const TRAMITES: Tramite[] = [
  {
    "id": "tram-duplicado-dni",
    "slug": "duplicado-dni",
    "nombre": "Duplicado de DNI Electrónico (DNIe)",
    "nombreCorto": "Duplicado de DNI",
    "subgrupo": "IDENTIDAD",
    "descripcion": "Solicita un nuevo ejemplar de tu DNIe por pérdida, robo o deterioro. Emisión 100% digital.",
    "categoriaId": "cat-1",
    "categoria": {
      "id": "cat-1",
      "slug": "identidad-documentos",
      "nombre": "Identidad y Documentos",
      "descripcion": "DNI, pasaportes, partidas de nacimiento y trámites de filiación oficial.",
      "icono": "BadgeOutlined"
    },
    "institucionId": "inst-reniec",
    "institucion": {
      "id": "inst-reniec",
      "slug": "reniec",
      "nombre": "Registro Nacional de Identificación y Estado Civil",
      "sigla": "RENIEC",
      "tipo": "nacional",
      "webOficial": "https://www.reniec.gob.pe",
      "descripcion": "Entidad encargada de la identificación de todos los peruanos y registro de hechos vitales.",
      "logoIniciales": "RN"
    },
    "esCompuesto": false,
    "esRecurrente": false,
    "modalidadPrincipal": "online",
    "duracionMinDias": 3,
    "duracionMaxDias": 10,
    "duracionTexto": "3 a 7 días hábiles",
    "tipoResultado": "documento_fisico",
    "vigenciaResultadoDias": null,
    "vigenciaTexto": "Mantiene la fecha de caducidad del DNI original",
    "ultimaVerificacion": "2026-09-24",
    "fuenteUrl": "https://www.gob.pe/224-duplicado-de-dni",
    "frecuenciaBusqueda": 9800,
    "costoResumen": "S/ 35.00",
    "costoPrincipal": 35,
    "codigoTributo": "Código Tributo Págalo.pe: 00522",
    "baseLegal": "Texto Único de Procedimientos Administrativos (TUPA) RENIEC aprobado por R.J. N° 000045-2023/JNAC/RENIEC.",
    "tags": [
      "dni",
      "reniec",
      "identidad",
      "duplicado",
      "dnie",
      "dni electronico",
      "perdida de dni"
    ],
    "requisitos": [
      {
        "id": "req-dup-1",
        "descripcion": "Ser mayor de 18 años con DNI emitido previamente.",
        "aplicaSi": "general",
        "orden": 1
      },
      {
        "id": "req-dup-2",
        "descripcion": "Comprobante de pago de S/ 35.00 (código Págalo.pe 00522).",
        "aplicaSi": "general",
        "orden": 2
      },
      {
        "id": "req-dup-3",
        "descripcion": "Denuncia policial digital (si fue por pérdida o robo).",
        "aplicaSi": null,
        "orden": 3
      }
    ],
    "pasos": [
      {
        "id": "paso-dup-1",
        "orden": 1,
        "modalidad": "online",
        "esOpcional": false,
        "titulo": "Pagar la tasa de S/ 35.00",
        "descripcion": "Paga S/ 35.00 en Págalo.pe o agencias del Banco de la Nación con código de tributo 00522.",
        "institucionNombre": "Banco de la Nación / Págalo.pe",
        "institucionUrl": "https://www.pagalo.pe",
        "costoTipo": "fijo",
        "costoMin": 35,
        "costoMax": 35
      },
      {
        "id": "paso-dup-2",
        "orden": 2,
        "modalidad": "online",
        "esOpcional": false,
        "titulo": "Registrar la solicitud en línea",
        "descripcion": "Ingresa a RENIEC en Línea, valida tus datos de identidad y elige la agencia de entrega.",
        "institucionNombre": "RENIEC en Línea",
        "institucionUrl": "https://www.gob.pe/224-duplicado-de-dni",
        "costoTipo": "gratuito",
        "costoMin": 0,
        "costoMax": 0
      },
      {
        "id": "paso-dup-3",
        "orden": 3,
        "modalidad": "presencial",
        "esOpcional": false,
        "titulo": "Recoger el DNIe en agencia",
        "descripcion": "Verifica el estado al 100% en la web y acude a la oficina con verificación biométrica.",
        "institucionNombre": "Agencia RENIEC o Centro MAC",
        "costoTipo": "gratuito",
        "costoMin": 0,
        "costoMax": 0,
        "ubicacion": "Oficina RENIEC seleccionada"
      }
    ],
    "canalesPago": [
      {
        "id": "cp-pagalo",
        "nombre": "Págalo.pe (Tarjetas Visa/Mastercard)",
        "tipo": "online"
      },
      {
        "id": "cp-bn",
        "nombre": "Banco de la Nación (Ventanilla / Agentes)",
        "tipo": "agencia"
      },
      {
        "id": "cp-bcp",
        "nombre": "BCP App y Agentes (comisión adicional variable)",
        "tipo": "agente"
      }
    ]
  },
  {
    "id": "tram-renovacion-dni",
    "slug": "renovacion-dni",
    "nombre": "Renovación de DNI Electrónico por caducidad",
    "nombreCorto": "Renovar DNI caduco",
    "subgrupo": "IDENTIDAD",
    "descripcion": "Renueva tu DNI caduco o dentro de los 60 días previos a vencer. Entrega exclusiva en DNIe.",
    "categoriaId": "cat-1",
    "categoria": {
      "id": "cat-1",
      "slug": "identidad-documentos",
      "nombre": "Identidad y Documentos",
      "descripcion": "DNI, pasaportes, partidas de nacimiento y trámites de filiación oficial.",
      "icono": "BadgeOutlined"
    },
    "institucionId": "inst-reniec",
    "institucion": {
      "id": "inst-reniec",
      "slug": "reniec",
      "nombre": "Registro Nacional de Identificación y Estado Civil",
      "sigla": "RENIEC",
      "tipo": "nacional",
      "webOficial": "https://www.reniec.gob.pe",
      "descripcion": "Entidad encargada de la identificación de todos los peruanos y registro de hechos vitales.",
      "logoIniciales": "RN"
    },
    "esCompuesto": false,
    "esRecurrente": false,
    "modalidadPrincipal": "mixta",
    "duracionMinDias": 5,
    "duracionMaxDias": 12,
    "duracionTexto": "5 a 10 días hábiles",
    "tipoResultado": "documento_fisico",
    "vigenciaResultadoDias": 2920,
    "vigenciaTexto": "8 años de vigencia",
    "ultimaVerificacion": "2026-09-24",
    "fuenteUrl": "https://apps.reniec.gob.pe/renovacionDni/",
    "frecuenciaBusqueda": 8900,
    "costoResumen": "S/ 41.00",
    "costoPrincipal": 41,
    "codigoTributo": "Código Tributo Págalo.pe: 00521",
    "baseLegal": "Ley Orgánica del RENIEC N° 26497 y TUPA institucional vigente.",
    "tags": [
      "dni",
      "renovacion",
      "reniec",
      "caducidad",
      "dnie",
      "dni electronico"
    ],
    "requisitos": [
      {
        "id": "req-ren-1",
        "descripcion": "DNI anterior vencido o próximo a caducar.",
        "orden": 1
      },
      {
        "id": "req-ren-2",
        "descripcion": "Comprobante de pago de S/ 41.00 (código Págalo.pe 00521).",
        "orden": 2
      },
      {
        "id": "req-ren-3",
        "descripcion": "Foto tomada desde la app oficial DNI BioFacial en tu celular.",
        "orden": 3
      }
    ],
    "pasos": [
      {
        "id": "paso-ren-1",
        "orden": 1,
        "modalidad": "online",
        "esOpcional": false,
        "titulo": "Pagar la tasa de S/ 41.00",
        "descripcion": "Paga S/ 41.00 en Págalo.pe o agencias del Banco de la Nación con código de tributo 00521.",
        "institucionNombre": "Págalo.pe / Banco de la Nación",
        "institucionUrl": "https://www.pagalo.pe/",
        "costoTipo": "fijo",
        "costoMin": 41,
        "costoMax": 41
      },
      {
        "id": "paso-ren-2",
        "orden": 2,
        "modalidad": "online",
        "esOpcional": false,
        "titulo": "Validación facial en app DNI BioFacial",
        "descripcion": "Descarga la app en tu celular, valida tu identidad y toma la fotografía oficial.",
        "institucionNombre": "App DNI BioFacial",
        "costoTipo": "gratuito",
        "costoMin": 0,
        "costoMax": 0
      },
      {
        "id": "paso-ren-3",
        "orden": 3,
        "modalidad": "presencial",
        "esOpcional": false,
        "titulo": "Recoger el DNIe",
        "descripcion": "Acude a la oficina elegida una vez verificado el estado en la web de RENIEC.",
        "costoTipo": "gratuito",
        "costoMin": 0,
        "costoMax": 0,
        "ubicacion": "Oficina RENIEC seleccionada"
      }
    ],
    "canalesPago": [
      {
        "id": "cp-pagalo",
        "nombre": "Págalo.pe",
        "tipo": "online"
      },
      {
        "id": "cp-bn",
        "nombre": "Banco de la Nación",
        "tipo": "agencia"
      }
    ]
  },
  {
    "id": "tram-dni-primera-vez",
    "slug": "dni-primera-vez",
    "nombre": "Emisión de DNI Electrónico por primera vez",
    "nombreCorto": "DNI por primera vez",
    "subgrupo": "IDENTIDAD",
    "descripcion": "Inscripción y entrega de tu primer DNIe para mayores de 18 años.",
    "categoriaId": "cat-1",
    "categoria": {
      "id": "cat-1",
      "slug": "identidad-documentos",
      "nombre": "Identidad y Documentos",
      "descripcion": "DNI, pasaportes, partidas de nacimiento y trámites de filiación oficial.",
      "icono": "BadgeOutlined"
    },
    "institucionId": "inst-reniec",
    "institucion": {
      "id": "inst-reniec",
      "slug": "reniec",
      "nombre": "Registro Nacional de Identificación y Estado Civil",
      "sigla": "RENIEC",
      "tipo": "nacional",
      "webOficial": "https://www.reniec.gob.pe",
      "descripcion": "Entidad encargada de la identificación de todos los peruanos y registro de hechos vitales.",
      "logoIniciales": "RN"
    },
    "esCompuesto": false,
    "esRecurrente": false,
    "modalidadPrincipal": "mixta",
    "duracionMinDias": 8,
    "duracionMaxDias": 15,
    "duracionTexto": "8 a 15 días",
    "tipoResultado": "documento_fisico",
    "vigenciaResultadoDias": 2920,
    "vigenciaTexto": "8 años de vigencia",
    "ultimaVerificacion": "2026-09-24",
    "fuenteUrl": "https://apps.reniec.gob.pe/EmisionDnie/",
    "frecuenciaBusqueda": 9300,
    "costoResumen": "S/ 41.00",
    "costoPrincipal": 41,
    "codigoTributo": "Código Tributo Págalo.pe: 00521",
    "baseLegal": "Ley Orgánica del RENIEC N° 26497 y TUPA vigente.",
    "tags": [
      "dni",
      "primera vez",
      "reniec",
      "identidad",
      "dnie",
      "mayor de edad"
    ],
    "requisitos": [
      {
        "id": "req-dpv-1",
        "descripcion": "Tener 18 años cumplidos y copia certificada de Acta de Nacimiento.",
        "orden": 1
      },
      {
        "id": "req-dpv-2",
        "descripcion": "Recibo original de agua o luz no mayor a 6 meses.",
        "orden": 2
      },
      {
        "id": "req-dpv-3",
        "descripcion": "Comprobante de pago de S/ 41.00 (código Págalo.pe 00521).",
        "orden": 3
      }
    ],
    "pasos": [
      {
        "id": "paso-dpv-1",
        "orden": 1,
        "modalidad": "online",
        "esOpcional": false,
        "titulo": "Pagar la tasa de S/ 41.00",
        "descripcion": "Paga S/ 41.00 en Págalo.pe o Banco de la Nación con código de tributo 00521.",
        "institucionNombre": "Págalo.pe / Banco de la Nación",
        "institucionUrl": "https://www.pagalo.pe",
        "costoTipo": "fijo",
        "costoMin": 41,
        "costoMax": 41
      },
      {
        "id": "paso-dpv-2",
        "orden": 2,
        "modalidad": "online",
        "esOpcional": false,
        "titulo": "Registro virtual en el portal de Emisión DNIe",
        "descripcion": "Ingresa al aplicativo web oficial de RENIEC para el registro previo de tus datos.",
        "institucionNombre": "RENIEC en Línea",
        "institucionUrl": "https://apps.reniec.gob.pe/EmisionDnie/",
        "costoTipo": "gratuito",
        "costoMin": 0,
        "costoMax": 0
      },
      {
        "id": "paso-dpv-3",
        "orden": 3,
        "modalidad": "presencial",
        "esOpcional": false,
        "titulo": "Trámite presencial en RENIEC",
        "descripcion": "Presenta tu acta de nacimiento, recibo y voucher para registro biométrico de huellas, foto y firma.",
        "institucionNombre": "Oficina RENIEC o Centro MAC",
        "costoTipo": "gratuito",
        "costoMin": 0,
        "costoMax": 0
      },
      {
        "id": "paso-dpv-4",
        "orden": 4,
        "modalidad": "presencial",
        "esOpcional": false,
        "titulo": "Recojo del DNIe",
        "descripcion": "Verifica el estado en la web y acude a recoger tu DNIe a la agencia.",
        "institucionNombre": "Oficina RENIEC",
        "costoTipo": "gratuito",
        "costoMin": 0,
        "costoMax": 0
      }
    ],
    "canalesPago": [
      {
        "id": "cp-pagalo",
        "nombre": "Págalo.pe",
        "tipo": "online"
      },
      {
        "id": "cp-bn",
        "nombre": "Banco de la Nación",
        "tipo": "agencia"
      }
    ]
  },
  {
    "id": "tram-partida-nacimiento",
    "slug": "copia-partida-nacimiento",
    "nombre": "Copia certificada de Acta de Nacimiento",
    "nombreCorto": "Partida de nacimiento",
    "subgrupo": "ACTAS",
    "descripcion": "Obtén copia certificada digital o física de tu partida de nacimiento asentada en el Registro Nacional de Identificación.",
    "categoriaId": "cat-1",
    "categoria": {
      "id": "cat-1",
      "slug": "identidad-documentos",
      "nombre": "Identidad y Documentos",
      "descripcion": "DNI, pasaportes, partidas de nacimiento y trámites de filiación oficial.",
      "icono": "BadgeOutlined"
    },
    "institucionId": "inst-reniec",
    "institucion": {
      "id": "inst-reniec",
      "slug": "reniec",
      "nombre": "Registro Nacional de Identificación y Estado Civil",
      "sigla": "RENIEC",
      "tipo": "nacional",
      "webOficial": "https://www.reniec.gob.pe",
      "descripcion": "Entidad encargada de la identificación de todos los peruanos y registro de hechos vitales.",
      "logoIniciales": "RN"
    },
    "esCompuesto": false,
    "esRecurrente": false,
    "modalidadPrincipal": "online",
    "duracionMinDias": 1,
    "duracionMaxDias": 1,
    "duracionTexto": "Inmediata en línea",
    "tipoResultado": "documento_digital",
    "vigenciaResultadoDias": null,
    "vigenciaTexto": "Sin caducidad",
    "ultimaVerificacion": "2026-09-24",
    "fuenteUrl": "https://apps.reniec.gob.pe/actascertificadas/",
    "frecuenciaBusqueda": 9200,
    "costoResumen": "S/ 10.30 (Online) / S/ 12.00 (Presencial)",
    "costoPrincipal": 10.3,
    "codigoTributo": "Código Págalo.pe: 02141",
    "baseLegal": "TUPA del Registro Nacional de Identificación y Estado Civil (RENIEC).",
    "tags": [
      "partida de nacimiento",
      "acta",
      "nacimiento",
      "reniec",
      "copia certificada"
    ],
    "requisitos": [
      {
        "id": "req-pn-1",
        "descripcion": "Confirmar previamente en apps.reniec.gob.pe/actascertificadas que el acta figure incorporada en RENIEC.",
        "orden": 1
      },
      {
        "id": "req-pn-2",
        "descripcion": "DNI del solicitante (mayor de edad o padre/madre para menores).",
        "orden": 2
      },
      {
        "id": "req-pn-3",
        "descripcion": "Comprobante de pago de S/ 10.30 en Págalo.pe o Banco de la Nación (Código 02141).",
        "orden": 3
      }
    ],
    "pasos": [
      {
        "id": "paso-pn-1",
        "orden": 1,
        "modalidad": "online",
        "esOpcional": false,
        "titulo": "Verificar digitalización del acta en RENIEC",
        "descripcion": "Ingresa a apps.reniec.gob.pe/actascertificadas gratis. Si aparece \"Acta ubicada en Reniec\", puedes continuar.",
        "institucionNombre": "RENIEC en línea",
        "institucionUrl": "https://apps.reniec.gob.pe/actascertificadas",
        "costoTipo": "gratuito",
        "costoMin": 0,
        "costoMax": 0
      },
      {
        "id": "paso-pn-2",
        "orden": 2,
        "modalidad": "online",
        "esOpcional": false,
        "titulo": "Pagar la tasa en Págalo.pe",
        "descripcion": "Abona S/ 10.30 con el código 02141 en Págalo.pe o vía Yape/agente BN.",
        "institucionNombre": "Págalo.pe / Banco de la Nación",
        "institucionUrl": "https://www.pagalo.pe/",
        "costoTipo": "fijo",
        "costoMin": 10.3,
        "costoMax": 10.3
      },
      {
        "id": "paso-pn-3",
        "orden": 3,
        "modalidad": "online",
        "esOpcional": false,
        "titulo": "Descargar copia certificada oficial",
        "descripcion": "Valida tus datos y descarga inmediatamente el PDF oficial con firma digital y código de verificación QR.",
        "institucionNombre": "Plataforma RENIEC",
        "costoTipo": "gratuito",
        "costoMin": 0,
        "costoMax": 0
      }
    ],
    "canalesPago": [
      {
        "id": "cp-pagalo",
        "nombre": "Págalo.pe (Código 02141)",
        "tipo": "online"
      },
      {
        "id": "cp-yape",
        "nombre": "Yape / Agente BN",
        "tipo": "online"
      }
    ]
  },
  {
    "id": "tram-rectificacion-domicilio",
    "slug": "rectificacion-domicilio",
    "nombre": "Rectificación de DNI Electrónico de prenombre, apellidos y otros datos (domicilio, estado civil)",
    "nombreCorto": "Rectificación de datos del DNIe",
    "subgrupo": "IDENTIDAD",
    "descripcion": "DNI con EMISIÓN - Modifica o actualiza tus datos en el DNI electrónico: domicilio, estado civil, prenombre, apellidos, grado de instrucción o donación de órganos con emisión de nuevo ejemplar.",
    "categoriaId": "cat-1",
    "categoria": {
      "id": "cat-1",
      "slug": "identidad-documentos",
      "nombre": "Identidad y Documentos",
      "descripcion": "DNI, pasaportes, partidas de nacimiento y trámites de filiación oficial.",
      "icono": "BadgeOutlined"
    },
    "institucionId": "inst-reniec",
    "institucion": {
      "id": "inst-reniec",
      "slug": "reniec",
      "nombre": "Registro Nacional de Identificación y Estado Civil",
      "sigla": "RENIEC",
      "tipo": "nacional",
      "webOficial": "https://www.reniec.gob.pe",
      "descripcion": "Entidad encargada de la identificación de todos los peruanos y registro de hechos vitales.",
      "logoIniciales": "RN"
    },
    "esCompuesto": false,
    "esRecurrente": false,
    "modalidadPrincipal": "online",
    "duracionMinDias": 3,
    "duracionMaxDias": 7,
    "duracionTexto": "3 a 7 días hábiles",
    "tipoResultado": "documento_fisico",
    "vigenciaResultadoDias": null,
    "vigenciaTexto": "Mantiene la vigencia de tu DNIe actual",
    "ultimaVerificacion": "2026-09-24",
    "fuenteUrl": "https://www.gob.pe/238-rectificacion-de-datos-del-dni-actualizar-domicilio-en-tu-dni/",
    "frecuenciaBusqueda": 8100,
    "costoResumen": "S/ 34.00 (DNIe) / Gratis con discapacidad",
    "costoPrincipal": 35,
    "codigoTributo": "Código Tributo Págalo.pe: 00729",
    "baseLegal": "TUPA RENIEC.",
    "tags": [
      "rectificacion de datos",
      "prenombre",
      "apellidos",
      "domicilio",
      "direccion",
      "reniec",
      "rectificar domicilio",
      "dnie"
    ],
    "requisitos": [
      {
        "id": "req-rd-1",
        "descripcion": "Recibo de servicio público (luz, agua o internet) con antigüedad no mayor a 6 meses donde figure la nueva dirección.",
        "orden": 1
      },
      {
        "id": "req-rd-2",
        "descripcion": "DNI actual del solicitante.",
        "orden": 2
      },
      {
        "id": "req-rd-3",
        "descripcion": "Pago de la tasa de S/ 35.00 en Págalo.pe (Código 00729). Es gratuito para personas con discapacidad inscritas en CONADIS.",
        "orden": 3
      }
    ],
    "pasos": [
      {
        "id": "paso-rd-1",
        "orden": 1,
        "modalidad": "online",
        "esOpcional": false,
        "titulo": "Pagar la tasa en Págalo.pe (Código 00729)",
        "descripcion": "Abona S/ 35.00 con el código 00729 (Rectificación de datos con emisión de DNIe) en Págalo.pe o agencias del Banco de la Nación.",
        "institucionNombre": "Págalo.pe / Banco de la Nación",
        "institucionUrl": "https://www.pagalo.pe/",
        "costoTipo": "fijo",
        "costoMin": 35,
        "costoMax": 35
      },
      {
        "id": "paso-rd-2",
        "orden": 2,
        "modalidad": "online",
        "esOpcional": false,
        "titulo": "Registrar la nueva dirección en RENIEC en línea o DNI BioFacial",
        "descripcion": "Valida tu identidad con biometría facial, completa el formulario y adjunta la foto o PDF del recibo de servicio.",
        "institucionNombre": "RENIEC Servicios en Línea",
        "costoTipo": "gratuito",
        "costoMin": 0,
        "costoMax": 0
      },
      {
        "id": "paso-rd-3",
        "orden": 3,
        "modalidad": "presencial",
        "esOpcional": false,
        "titulo": "Recojo del DNIe actualizado",
        "descripcion": "Acude a la agencia RENIEC que seleccionaste para recoger tu nuevo DNI electrónico.",
        "institucionNombre": "Agencia RENIEC seleccionada",
        "costoTipo": "gratuito",
        "costoMin": 0,
        "costoMax": 0
      }
    ],
    "canalesPago": [
      {
        "id": "cp-pagalo",
        "nombre": "Págalo.pe (Código 00729)",
        "tipo": "online"
      },
      {
        "id": "cp-bn",
        "nombre": "Banco de la Nación",
        "tipo": "agencia"
      }
    ]
  },
  {
    "id": "tram-pasaporte-electronico",
    "slug": "pasaporte-electronico",
    "nombre": "Obtener pasaporte electrónico para mayores de edad (Pasaporte Ordinario)",
    "nombreCorto": "Pasaporte electrónico",
    "subgrupo": "VIAJES",
    "descripcion": "Documento de viaje biométrico oficial con chip de seguridad indispensable para viajar al extranjero fuera de la Comunidad Andina.",
    "categoriaId": "cat-1",
    "categoria": {
      "id": "cat-1",
      "slug": "identidad-documentos",
      "nombre": "Identidad y Documentos",
      "descripcion": "DNI, pasaportes, partidas de nacimiento y trámites de filiación oficial.",
      "icono": "BadgeOutlined"
    },
    "institucionId": "inst-migraciones",
    "institucion": {
      "id": "inst-migraciones",
      "slug": "migraciones",
      "nombre": "Superintendencia Nacional de Migraciones",
      "sigla": "MIGRACIONES",
      "tipo": "nacional",
      "webOficial": "https://www.gob.pe/migraciones",
      "descripcion": "Control migratorio y emisión de pasaportes electrónicos y permisos de viaje.",
      "logoIniciales": "MG"
    },
    "esCompuesto": false,
    "esRecurrente": false,
    "modalidadPrincipal": "mixta",
    "duracionMinDias": 1,
    "duracionMaxDias": 1,
    "duracionTexto": "Entrega el mismo día de la cita",
    "tipoResultado": "documento_fisico",
    "vigenciaResultadoDias": 3650,
    "vigenciaTexto": "10 años (adultos) / 5 años (12-17 años) / 3 años (<12 años)",
    "ultimaVerificacion": "2026-09-24",
    "fuenteUrl": "https://www.gob.pe/174-sacar-pasaporte-electronico-para-mayores-de-edad/",
    "frecuenciaBusqueda": 9400,
    "costoResumen": "S/ 120.90",
    "costoPrincipal": 120.9,
    "codigoTributo": "Código Tributo Págalo.pe: 01810",
    "baseLegal": "Decreto Supremo N° 004-2024-IN y TUPA de la Superintendencia Nacional de Migraciones.",
    "tags": [
      "pasaporte",
      "migraciones",
      "viaje",
      "visa",
      "aeropuerto",
      "pasaporte biometrico",
      "pasaporte 10 años",
      "01810"
    ],
    "variantes": [
      {
        "id": "var-pas-10",
        "nombre": "Pasaporte con vigencia de 10 años (Mayores de 18 años)",
        "costo": 120.9,
        "duracionTexto": "Mismo día de la cita",
        "codigoTributo": "Código 01810",
        "descripcion": "Formato oficial estándar con vigencia de 10 años para ciudadanos adultos."
      },
      {
        "id": "var-pas-5",
        "nombre": "Pasaporte para menores de edad (Vigencia 5 años o 3 años)",
        "costo": 120.9,
        "duracionTexto": "Mismo día de la cita",
        "codigoTributo": "Código 01810",
        "descripcion": "Tasa unificada de S/ 120.90 para menores. Vigencia 5 años (12-17) o 3 años (0-11)."
      }
    ],
    "requisitos": [
      {
        "id": "req-pas-1",
        "descripcion": "DNI vigente en buen estado y sin multas electorales pendientes.",
        "orden": 1
      },
      {
        "id": "req-pas-2",
        "descripcion": "Comprobante de pago de S/ 120.90 en Págalo.pe o Banco de la Nación (Código 01810).",
        "orden": 2
      },
      {
        "id": "req-pas-3",
        "descripcion": "Constancia de cita electrónica de Migraciones guardada o impresa en celular.",
        "orden": 3
      },
      {
        "id": "req-pas-4",
        "descripcion": "Boleto de viaje dentro de las 48h hábiles (solo para pasaporte de urgencia en casos especiales).",
        "aplicaSi": null,
        "orden": 4
      },
      {
        "id": "req-pas-5",
        "descripcion": "Acompañamiento obligatorio del padre, madre o tutor legal con DNI vigente para menores de edad.",
        "aplicaSi": "menor_edad",
        "orden": 5
      }
    ],
    "pasos": [
      {
        "id": "paso-pas-1",
        "orden": 1,
        "modalidad": "online",
        "esOpcional": false,
        "titulo": "Pagar la tasa de S/ 120.90 en Págalo.pe (Código 01810)",
        "descripcion": "Abona S/ 120.90 con el código 01810 en Págalo.pe (tarjeta débito/crédito) o agencias del Banco de la Nación indicando tu DNI. (Si hiciste un pago previo de S/ 98.60, abona el reintegro de S/ 22.30 con el mismo código).",
        "institucionNombre": "Págalo.pe / Banco de la Nación",
        "institucionUrl": "https://www.pagalo.pe/",
        "costoTipo": "fijo",
        "costoMin": 120.9,
        "costoMax": 120.9
      },
      {
        "id": "paso-pas-2",
        "orden": 2,
        "modalidad": "online",
        "esOpcional": false,
        "titulo": "Obtener tu cita en el Sistema en Línea de Migraciones",
        "descripcion": "Ingresa al portal de citas de Migraciones, selecciona tu sede de atención y registra los datos del titular. Descarga o toma captura de pantalla de la constancia de cita para tu ingreso.",
        "institucionNombre": "Migraciones Perú",
        "institucionUrl": "https://citaspasaporte.migraciones.gob.pe/",
        "costoTipo": "gratuito",
        "costoMin": 0,
        "costoMax": 0
      },
      {
        "id": "paso-pas-3",
        "orden": 3,
        "modalidad": "presencial",
        "esOpcional": false,
        "titulo": "Acudir a la cita en la sede seleccionada",
        "descripcion": "Preséntate en la sede elegida con tu DNI físico en buen estado y tu recibo de pago o constancia. El trámite es estrictamente personal: el titular debe asistir obligatoriamente para validar su identidad.",
        "institucionNombre": "Sede Migraciones o Centro MAC",
        "costoTipo": "gratuito",
        "costoMin": 0,
        "costoMax": 0,
        "ubicacion": "Sede Migraciones seleccionada"
      },
      {
        "id": "paso-pas-4",
        "orden": 4,
        "modalidad": "presencial",
        "esOpcional": false,
        "titulo": "Toma de foto y registro biométrico",
        "descripcion": "Se realiza la toma biométrica según norma internacional: sin gafas ni lentes cosméticos de color, rostro completamente despejado (sin cerquillo ni prendas en la cabeza) y sin piercings faciales.",
        "institucionNombre": "Módulo Biométrico Migraciones",
        "costoTipo": "gratuito",
        "costoMin": 0,
        "costoMax": 0
      },
      {
        "id": "paso-pas-5",
        "orden": 5,
        "modalidad": "presencial",
        "esOpcional": false,
        "titulo": "Recojo del pasaporte electrónico",
        "descripcion": "La entrega se realiza el mismo día de la cita tras validar la biometría (tienes hasta 60 días para retirarlo antes de su destrucción). En caso de no conseguir cita y viajar con urgencia, puedes pedir atención en casos especiales.",
        "institucionNombre": "Migraciones (Casos Especiales / Entrega)",
        "institucionUrl": "https://citaspasaporte.migraciones.gob.pe/citas-pasaporte-v2/pasaporte/casos-especiales",
        "costoTipo": "gratuito",
        "costoMin": 0,
        "costoMax": 0
      }
    ],
    "canalesPago": [
      {
        "id": "cp-pagalo",
        "nombre": "Págalo.pe (Código 01810 - Online 24/7)",
        "tipo": "online"
      },
      {
        "id": "cp-bn",
        "nombre": "Banco de la Nación (Código 01810)",
        "tipo": "agencia"
      }
    ]
  },
  {
    "id": "tram-brevete-a1",
    "slug": "obtencion-brevete-a1",
    "nombre": "Expedición de Licencia de Conducir Clase A-1 (Por primera vez)",
    "nombreCorto": "Brevete A-1 (Primera vez)",
    "subgrupo": "LICENCIAS",
    "descripcion": "Trámite oficial para obtener tu brevete por primera vez (expedición de licencia de conducir). Habilita para conducir vehículos particulares como autos, camionetas SUV, station wagon y furgones ligeros.",
    "categoriaId": "cat-2",
    "categoria": {
      "id": "cat-2",
      "slug": "vehicular-transporte",
      "nombre": "Vehicular y Transporte",
      "descripcion": "Brevete, récord de conductor, placas, SOAT y transferencias de vehículos.",
      "icono": "DirectionsCarOutlined"
    },
    "institucionId": "inst-mtc",
    "institucion": {
      "id": "inst-mtc",
      "slug": "mtc",
      "nombre": "Ministerio de Transportes y Comunicaciones",
      "sigla": "MTC",
      "tipo": "nacional",
      "webOficial": "https://www.gob.pe/mtc",
      "descripcion": "Regulación y emisión de licencias de conducir, transporte terrestre y comunicaciones.",
      "logoIniciales": "MT"
    },
    "esCompuesto": true,
    "esRecurrente": false,
    "modalidadPrincipal": "mixta",
    "duracionMinDias": 7,
    "duracionMaxDias": 20,
    "duracionTexto": "1 a 3 semanas (según programación de exámenes)",
    "tipoResultado": "licencia",
    "vigenciaResultadoDias": 1825,
    "vigenciaTexto": "5 años de vigencia inicial",
    "ultimaVerificacion": "2026-09-24",
    "fuenteUrl": "https://www.gob.pe/685-obtener-licencia-de-conducir-brevete-por-primera-vez-solicitar-la-licencia-en-provincias",
    "frecuenciaBusqueda": 9900,
    "costoResumen": "Varía por región (Tasas de exámenes y expedición según DRTC / MTC) + Examen médico privado",
    "costoPrincipal": 62.5,
    "codigoTributo": "Varía según región (Ver selector de departamentos)",
    "baseLegal": "Reglamento Nacional del Sistema de Emisión de Licencias de Conducir - D.S. N° 007-2016-MTC y TUPA de cada gobierno regional.",
    "tags": [
      "brevete",
      "mtc",
      "licencia de conducir",
      "primera vez",
      "expedicion brevete",
      "06061",
      "examen de manejo",
      "a1",
      "conducir",
      "huanuco",
      "cajamarca",
      "callao",
      "junin",
      "piura"
    ],
    "regionesPago": [
      {
        "id": "rp-brev-hco",
        "region": "Huánuco",
        "institucionEjecutora": "DRTC Huánuco",
        "codigoPagalo": "06061",
        "conceptos": [
          {
            "concepto": "Examen de reglas de tránsito",
            "monto": 20.8
          },
          {
            "concepto": "Examen práctico de manejo",
            "monto": 20.8
          },
          {
            "concepto": "Expedición de licencia A-1",
            "monto": 20.9
          }
        ],
        "costoTotal": 62.5,
        "sedeExamenes": "Circuito de manejo y sede DRTC Huánuco"
      },
      {
        "id": "rp-brev-lima",
        "region": "Lima Metropolitana",
        "institucionEjecutora": "MTC Lima / Touring",
        "codigoPagalo": "01602 (Electrónica) / 01601 (Física)",
        "conceptos": [
          {
            "concepto": "Derecho a examen de reglas y manejo (Touring)",
            "monto": 67.32
          },
          {
            "concepto": "Emisión electrónica MTC (Cód. 01602)",
            "monto": 6.7
          },
          {
            "concepto": "Emisión física MTC (Cód. 01601 - opcional)",
            "monto": 14.8
          }
        ],
        "costoTotal": 74.02,
        "sedeExamenes": "Touring sede Lince y Centro de Exámenes Conchán"
      },
      {
        "id": "rp-brev-caj",
        "region": "Cajamarca",
        "institucionEjecutora": "DRTC Cajamarca",
        "codigoPagalo": "07621 (Electrónica) / 07656 (Física)",
        "conceptos": [
          {
            "concepto": "Expedición Licencia Electrónica (Cód. 07621)",
            "monto": 0
          },
          {
            "concepto": "Expedición Licencia Física (Cód. 07656)",
            "monto": 0
          }
        ],
        "costoTotal": 0,
        "sedeExamenes": "Sede y circuito de evaluación DRTC Cajamarca"
      },
      {
        "id": "rp-brev-jun",
        "region": "Junín",
        "institucionEjecutora": "DRTC Junín",
        "codigoPagalo": "09468",
        "conceptos": [
          {
            "concepto": "Licencias de Conducir (Cód. 09468)",
            "monto": 0
          }
        ],
        "costoTotal": 0,
        "sedeExamenes": "Sede y circuito de evaluación DRTC Junín"
      },
      {
        "id": "rp-brev-piu",
        "region": "Piura",
        "institucionEjecutora": "DRTC Piura",
        "codigoPagalo": "09393",
        "conceptos": [
          {
            "concepto": "Licencia de Conducir (Cód. 09393)",
            "monto": 0
          }
        ],
        "costoTotal": 0,
        "sedeExamenes": "Sede y circuito de evaluación DRTC Piura"
      },
      {
        "id": "rp-brev-callao",
        "region": "Callao",
        "institucionEjecutora": "GRTC Callao",
        "codigoPagalo": "09421",
        "conceptos": [
          {
            "concepto": "Licencia de Conducir (Cód. 09421)",
            "monto": 0
          }
        ],
        "costoTotal": 0,
        "sedeExamenes": "Sede GRTC Callao (Juan Pablo II)"
      },
      {
        "id": "rp-brev-otros",
        "region": "Demás departamentos (Trámite Presencial)",
        "institucionEjecutora": "DRTC Regional correspondiente",
        "codigoPagalo": "Presencial en ventanilla Banco de la Nación / DRTC",
        "conceptos": [
          {
            "concepto": "Tasas regionales variables según TUPA de cada región",
            "monto": 0
          }
        ],
        "costoTotal": 0,
        "sedeExamenes": "Sede y circuito oficial de la DRTC de tu región"
      }
    ],
    "requisitos": [
      {
        "id": "req-brev-1",
        "descripcion": "Ser mayor de 18 años y contar con DNI o carné de extranjería vigente.",
        "orden": 1
      },
      {
        "id": "req-brev-2",
        "descripcion": "Certificado de aptitud médica psicosomática emitido por centro médico autorizado por el MTC.",
        "orden": 2
      },
      {
        "id": "req-brev-3",
        "descripcion": "Constancia de aprobación del examen de reglas de tránsito (en Touring o DRTC regional según tu provincia).",
        "orden": 3
      },
      {
        "id": "req-brev-4",
        "descripcion": "Constancia de aprobación del examen práctico de manejo en circuito oficial.",
        "orden": 4
      },
      {
        "id": "req-brev-5",
        "descripcion": "No contar con sanciones ni inhabilitaciones para conducir en el Sistema Nacional de Conductores.",
        "orden": 5
      }
    ],
    "pasos": [
      {
        "id": "paso-brev-1",
        "orden": 1,
        "modalidad": "presencial",
        "esOpcional": false,
        "titulo": "Examen médico psicosomático",
        "descripcion": "Pasa la evaluación médica (vista, oído, psicología y medicina general) en un policlínico autorizado por el MTC en tu ciudad.",
        "institucionNombre": "Centro Médico Autorizado por MTC",
        "costoTipo": "rango",
        "costoMin": 100,
        "costoMax": 300,
        "ubicacion": "Centros médicos autorizados a nivel nacional"
      },
      {
        "id": "paso-brev-2",
        "orden": 2,
        "modalidad": "presencial",
        "esOpcional": false,
        "titulo": "Inscripción y examen de reglas de tránsito",
        "descripcion": "Rinde la prueba de 40 preguntas sobre normas de tránsito y señales (en Lima a través de Touring y en provincias a través de la DRTC correspondiente).",
        "institucionNombre": "Touring y Automóvil Club del Perú / DRTC Regional",
        "institucionUrl": "https://ce.touring.pe/",
        "costoTipo": "variable",
        "costoMin": 20.8,
        "costoMax": 67.32,
        "ubicacion": "Sede Touring (Lima) o DRTC regional"
      },
      {
        "id": "paso-brev-3",
        "orden": 3,
        "modalidad": "presencial",
        "esOpcional": false,
        "titulo": "Examen práctico de manejo en circuito",
        "descripcion": "Rinde la prueba de conducción en el circuito oficial de evaluación de tu región para validar tus habilidades al volante.",
        "institucionNombre": "Touring Conchán (Lima) / Circuito oficial DRTC regional",
        "costoTipo": "variable",
        "costoMin": 0,
        "costoMax": 50,
        "ubicacion": "Centro de exámenes Conchán o circuito de tu DRTC"
      },
      {
        "id": "paso-brev-4",
        "orden": 4,
        "modalidad": "mixta",
        "esOpcional": false,
        "titulo": "Pago de tasa de expedición y entrega del brevete",
        "descripcion": "Paga la tasa de expedición en Págalo.pe (para Lima, Huánuco, Cajamarca, Junín, Piura y Callao) o presencialmente en ventanilla del Banco de la Nación / DRTC para las demás provincias. Luego tramita la emisión en el portal oficial o ventanilla.",
        "institucionNombre": "MTC Licencias / DRTC Regional",
        "institucionUrl": "https://licencias.mtc.gob.pe/",
        "costoTipo": "fijo",
        "costoMin": 6.7,
        "costoMax": 20.9
      }
    ],
    "canalesPago": [
      {
        "id": "cp-pagalo",
        "nombre": "Págalo.pe (En línea 24/7 para Lima, Huánuco, Cajamarca, Junín, Piura y Callao)",
        "tipo": "online"
      },
      {
        "id": "cp-bn",
        "nombre": "Banco de la Nación (Presencial en ventanilla para todas las provincias)",
        "tipo": "agencia"
      },
      {
        "id": "cp-medico",
        "nombre": "Centro Médico Autorizado (Evaluación médica)",
        "tipo": "agencia"
      }
    ]
  },
  {
    "id": "tram-certificado-unico-laboral",
    "slug": "certificado-unico-laboral",
    "nombre": "Certificado Único Laboral (CUL)",
    "descripcion": "Documento oficial gratuito que unifica en un solo PDF tus antecedentes policiales, penales, judiciales, identidad y trayectoria formativa/laboral.",
    "categoriaId": "cat-4",
    "categoria": {
      "id": "cat-4",
      "slug": "empleo-certificados",
      "nombre": "Empleo y Certificados",
      "descripcion": "Certificado Único Laboral, antecedentes policiales, penales y judiciales.",
      "icono": "WorkOutlineOutlined"
    },
    "institucionId": "inst-mtpe",
    "institucion": {
      "id": "inst-mtpe",
      "slug": "mtpe",
      "nombre": "Ministerio de Trabajo y Promoción del Empleo",
      "sigla": "MTPE",
      "tipo": "nacional",
      "webOficial": "https://www.gob.pe/mtpe",
      "descripcion": "Promoción del empleo formal y emisión gratuita del Certificado Único Laboral.",
      "logoIniciales": "MTP"
    },
    "esCompuesto": false,
    "esRecurrente": false,
    "modalidadPrincipal": "online",
    "duracionMinDias": 0,
    "duracionMaxDias": 0,
    "duracionTexto": "Inmediato (en el acto, 100% digital)",
    "tipoResultado": "documento_digital",
    "vigenciaResultadoDias": 90,
    "vigenciaTexto": "90 días calendario",
    "ultimaVerificacion": "2026-09-24",
    "fuenteUrl": "https://www.empleosperu.gob.pe/CertificadoUnicoLaboral/",
    "frecuenciaBusqueda": 9600,
    "costoResumen": "Totalmente Gratuito (S/ 0.00)",
    "costoPrincipal": 0,
    "baseLegal": "Decreto Legislativo N° 1498 que otorga accesibilidad al Certificado Único Laboral.",
    "tags": [
      "cul",
      "empleo",
      "trabajo",
      "curriculum",
      "mtpe",
      "antecedentes gratis",
      "empleos peru"
    ],
    "requisitos": [
      {
        "id": "req-cul-1",
        "descripcion": "DNI peruano vigente.",
        "orden": 1
      },
      {
        "id": "req-cul-2",
        "descripcion": "Tener una cuenta activa en el portal Empleos Perú del MTPE.",
        "orden": 2
      }
    ],
    "pasos": [
      {
        "id": "paso-cul-1",
        "orden": 1,
        "modalidad": "online",
        "esOpcional": false,
        "titulo": "Crear cuenta o iniciar sesión en Empleos Perú",
        "descripcion": "Ingresa al portal de Empleos Perú con tu DNI y verifica tu identidad mediante preguntas de seguridad de RENIEC.",
        "institucionNombre": "Ministerio de Trabajo (Empleos Perú)",
        "institucionUrl": "https://www.empleosperu.gob.pe/CertificadoUnicoLaboral/",
        "costoTipo": "gratuito",
        "costoMin": 0,
        "costoMax": 0
      },
      {
        "id": "paso-cul-2",
        "orden": 2,
        "modalidad": "online",
        "esOpcional": false,
        "titulo": "Generar y descargar el Certificado Único Laboral",
        "descripcion": "Haz clic en \"Generar Certificado\". El sistema compila automáticamente tus antecedentes y genera un archivo PDF con código QR verificable.",
        "costoTipo": "gratuito",
        "costoMin": 0,
        "costoMax": 0
      }
    ],
    "canalesPago": []
  },
  {
    "id": "tram-antecedentes-penales",
    "slug": "antecedentes-penales",
    "nombre": "Certificado Electrónico de Antecedentes Penales (CAP)",
    "descripcion": "Acredita si una persona registra o no sentencias condenatorias firmes en el Registro Nacional de Condenas.",
    "categoriaId": "cat-4",
    "categoria": {
      "id": "cat-4",
      "slug": "empleo-certificados",
      "nombre": "Empleo y Certificados",
      "descripcion": "Certificado Único Laboral, antecedentes policiales, penales y judiciales.",
      "icono": "WorkOutlineOutlined"
    },
    "institucionId": "inst-pj",
    "institucion": {
      "id": "inst-pj",
      "slug": "pj",
      "nombre": "Poder Judicial del Perú",
      "sigla": "PJ",
      "tipo": "nacional",
      "webOficial": "https://www.pj.gob.pe",
      "descripcion": "Administración de justicia y emisión del Certificado Electrónico de Antecedentes Penales.",
      "logoIniciales": "PJ"
    },
    "esCompuesto": false,
    "esRecurrente": false,
    "modalidadPrincipal": "online",
    "duracionMinDias": 0,
    "duracionMaxDias": 1,
    "duracionTexto": "5 a 15 minutos (100% en línea)",
    "tipoResultado": "documento_digital",
    "vigenciaResultadoDias": 90,
    "vigenciaTexto": "90 días calendario",
    "ultimaVerificacion": "2026-09-24",
    "fuenteUrl": "https://cape.pj.gob.pe/cape/",
    "frecuenciaBusqueda": 8700,
    "costoResumen": "S/ 40.40",
    "costoPrincipal": 40.4,
    "codigoTributo": "Código Págalo.pe: 03670",
    "baseLegal": "Resolución Administrativa N° 124-2016-CE-PJ del Consejo Ejecutivo del Poder Judicial.",
    "tags": [
      "antecedentes penales",
      "poder judicial",
      "condenas",
      "trabajo",
      "pj",
      "cape"
    ],
    "requisitos": [
      {
        "id": "req-pen-1",
        "descripcion": "DNI vigente del solicitante.",
        "orden": 1
      },
      {
        "id": "req-pen-2",
        "descripcion": "Pago de la tasa de S/ 40.40 en Págalo.pe o Banco de la Nación con código 03670.",
        "orden": 2
      },
      {
        "id": "req-pen-3",
        "descripcion": "Correo electrónico personal donde llegará el enlace de descarga.",
        "orden": 3
      }
    ],
    "pasos": [
      {
        "id": "paso-pen-1",
        "orden": 1,
        "modalidad": "online",
        "esOpcional": false,
        "titulo": "Pagar la tasa en Págalo.pe",
        "descripcion": "Realiza el pago de S/ 40.40 bajo el concepto \"03670 - Certificado de Antecedentes Penales\". Guarda el número de operación y referencia.",
        "institucionNombre": "Págalo.pe / Banco de la Nación",
        "institucionUrl": "https://www.pagalo.pe/",
        "costoTipo": "fijo",
        "costoMin": 40.4,
        "costoMax": 40.4
      },
      {
        "id": "paso-pen-2",
        "orden": 2,
        "modalidad": "online",
        "esOpcional": false,
        "titulo": "Tramitar el certificado en el portal CAPE del Poder Judicial",
        "descripcion": "Ingresa al portal web cape.pj.gob.pe, acepta los términos, digita tus datos del voucher y el certificado se generará de forma instantánea en PDF con código QR.",
        "institucionNombre": "Poder Judicial",
        "institucionUrl": "https://cape.pj.gob.pe/cape/",
        "costoTipo": "gratuito",
        "costoMin": 0,
        "costoMax": 0
      }
    ],
    "canalesPago": [
      {
        "id": "cp-pagalo",
        "nombre": "Págalo.pe (Código 03670)",
        "tipo": "online"
      },
      {
        "id": "cp-bn",
        "nombre": "Banco de la Nación",
        "tipo": "agencia"
      }
    ]
  },
  {
    "id": "tram-antecedentes-policiales",
    "slug": "antecedentes-policiales",
    "nombre": "Certificado de Antecedentes Policiales",
    "nombreCorto": "Antecedentes policiales",
    "subgrupo": "CERTIFICADOS",
    "descripcion": "Certifica si una persona registra o no antecedentes por delitos o faltas investigadas por la Policía Nacional del Perú, disponible en modalidad digital o presencial.",
    "categoriaId": "cat-4",
    "categoria": {
      "id": "cat-4",
      "slug": "empleo-certificados",
      "nombre": "Empleo y Certificados",
      "descripcion": "Certificado Único Laboral, antecedentes policiales, penales y judiciales.",
      "icono": "WorkOutlineOutlined"
    },
    "institucionId": "inst-pnp",
    "institucion": {
      "id": "inst-pnp",
      "slug": "pnp",
      "nombre": "Policía Nacional del Perú",
      "sigla": "PNP",
      "tipo": "nacional",
      "webOficial": "https://www.policia.gob.pe",
      "descripcion": "Seguridad ciudadana, emisión de antecedentes policiales y denuncias por pérdida.",
      "logoIniciales": "PNP"
    },
    "esCompuesto": false,
    "esRecurrente": false,
    "modalidadPrincipal": "mixta",
    "duracionMinDias": 0,
    "duracionMaxDias": 1,
    "duracionTexto": "Inmediato online / Mismo día presencial",
    "tipoResultado": "documento_digital",
    "vigenciaResultadoDias": 90,
    "vigenciaTexto": "90 días calendario",
    "ultimaVerificacion": "2026-09-24",
    "fuenteUrl": "https://www.gob.pe/89-obtener-certificado-de-antecedentes-policiales-cerap-digital",
    "frecuenciaBusqueda": 8500,
    "costoResumen": "S/ 5.40 (Virtual) / S/ 8.50 (Presencial)",
    "costoPrincipal": 5.4,
    "codigoTributo": "Código Págalo.pe: 08116",
    "baseLegal": "Decreto Legislativo N° 1267, Ley de la Policía Nacional del Perú y TUPA del MININTER.",
    "tags": [
      "antecedentes policiales",
      "pnp",
      "cerap",
      "policia",
      "trabajo"
    ],
    "variantes": [
      {
        "id": "var-pol-virtual",
        "nombre": "Certificado de Antecedentes Policiales - Virtual",
        "costo": 5.4,
        "duracionTexto": "Inmediato (descarga en PDF)",
        "codigoTributo": "Código 08116",
        "descripcion": "Trámite 100% digital a través del portal CERAP de la PNP con firma digital y código QR."
      },
      {
        "id": "var-pol-presencial",
        "nombre": "Certificado de Antecedentes Policiales - Presencial",
        "costo": 8.5,
        "duracionTexto": "Entrega el mismo día",
        "codigoTributo": "Código 08116",
        "descripcion": "Emisión física en comisarías o sedes PNP autorizadas (ej. sede Aramburú en Lima)."
      }
    ],
    "requisitos": [
      {
        "id": "req-pol-1",
        "descripcion": "DNI vigente del titular solicitante.",
        "orden": 1
      },
      {
        "id": "req-pol-2",
        "descripcion": "Comprobante de pago en Págalo.pe o Banco de la Nación con código 08116 (S/ 5.40 para Virtual o S/ 8.50 para Presencial).",
        "orden": 2
      },
      {
        "id": "req-pol-3",
        "descripcion": "Para modalidad presencial: acudir a la comisaría o sede PNP para toma de huellas dactilares.",
        "aplicaSi": null,
        "orden": 3
      }
    ],
    "pasos": [
      {
        "id": "paso-pol-1",
        "orden": 1,
        "modalidad": "online",
        "esOpcional": false,
        "titulo": "Pagar la tasa en Págalo.pe (Código 08116)",
        "descripcion": "Abona S/ 5.40 (para trámite Virtual) o S/ 8.50 (para trámite Presencial) bajo el código de tasa 08116.",
        "institucionNombre": "Págalo.pe / Banco de la Nación",
        "institucionUrl": "https://www.pagalo.pe/",
        "costoTipo": "fijo",
        "costoMin": 5.4,
        "costoMax": 8.5
      },
      {
        "id": "paso-pol-2",
        "orden": 2,
        "modalidad": "online",
        "esOpcional": false,
        "titulo": "Modalidad Virtual: Generar el CERAP Digital",
        "descripcion": "Ingresa a sistemas.policia.gob.pe/cerapdigital, valida los datos del comprobante de pago y descarga de inmediato tu certificado en PDF con código QR.",
        "institucionNombre": "Policía Nacional del Perú",
        "institucionUrl": "https://sistemas.policia.gob.pe/cerapdigital/",
        "costoTipo": "gratuito",
        "costoMin": 0,
        "costoMax": 0
      },
      {
        "id": "paso-pol-3",
        "orden": 3,
        "modalidad": "presencial",
        "esOpcional": false,
        "titulo": "Modalidad Presencial: Toma de huellas y entrega",
        "descripcion": "Si elegiste la vía presencial, acércate a la comisaría autorizada o sede central de Aramburú con tu DNI y voucher para la toma biométrica y entrega física.",
        "institucionNombre": "Sede policial autorizada",
        "costoTipo": "gratuito",
        "costoMin": 0,
        "costoMax": 0
      }
    ],
    "canalesPago": [
      {
        "id": "cp-pagalo",
        "nombre": "Págalo.pe (Código 08116)",
        "tipo": "online"
      },
      {
        "id": "cp-bn",
        "nombre": "Banco de la Nación (Agencias y Agentes)",
        "tipo": "agencia"
      }
    ]
  },
  {
    "id": "tram-inscripcion-ruc-persona",
    "slug": "inscripcion-ruc-persona",
    "nombre": "Inscripción al RUC para Personas Naturales",
    "nombreCorto": "Inscripción en el RUC",
    "subgrupo": "RUC Y TRIBUTOS",
    "descripcion": "Obtén tu número de Registro Único de Contribuyentes para emitir recibos por honorarios o iniciar actividades comerciales formales.",
    "categoriaId": "cat-3",
    "categoria": {
      "id": "cat-3",
      "slug": "tributos-empresas",
      "nombre": "Tributos y RUC",
      "descripcion": "Inscripción RUC, Clave SOL, declaración de impuestos y constitución empresarial.",
      "icono": "AccountBalanceOutlined"
    },
    "institucionId": "inst-sunat",
    "institucion": {
      "id": "inst-sunat",
      "slug": "sunat",
      "nombre": "Superintendencia Nacional de Aduanas y de Administración Tributaria",
      "sigla": "SUNAT",
      "tipo": "nacional",
      "webOficial": "https://www.sunat.gob.pe",
      "descripcion": "Administración de tributos internos, RUC, comprobantes de pago e impuestos aduaneros.",
      "logoIniciales": "SN"
    },
    "esCompuesto": false,
    "esRecurrente": false,
    "modalidadPrincipal": "online",
    "duracionMinDias": 0,
    "duracionMaxDias": 0,
    "duracionTexto": "Inmediato (5 a 10 minutos)",
    "tipoResultado": "documento_digital",
    "vigenciaResultadoDias": null,
    "vigenciaTexto": "Permanente mientras mantengas actividad",
    "ultimaVerificacion": "2026-09-24",
    "fuenteUrl": "https://www.gob.pe/284-sacar-ruc-persona-natural/",
    "frecuenciaBusqueda": 9200,
    "costoResumen": "Totalmente Gratuito (S/ 0.00)",
    "costoPrincipal": 0,
    "baseLegal": "Decreto Legislativo N° 943, Ley del Registro Único de Contribuyentes y Resoluciones de SUNAT.",
    "tags": [
      "ruc",
      "sunat",
      "recibo por honorarios",
      "impuestos",
      "cuarta categoria",
      "negocio"
    ],
    "requisitos": [
      {
        "id": "req-ruc-1",
        "descripcion": "DNI vigente del solicitante.",
        "orden": 1
      },
      {
        "id": "req-ruc-2",
        "descripcion": "Actividad económica principal (código CIIU de la actividad a desarrollar).",
        "orden": 2
      },
      {
        "id": "req-ruc-3",
        "descripcion": "Dirección de domicilio fiscal completa y correo electrónico de contacto.",
        "orden": 3
      },
      {
        "id": "req-ruc-4",
        "descripcion": "Teléfono celular para validación de código de seguridad por SMS.",
        "orden": 4
      }
    ],
    "pasos": [
      {
        "id": "paso-ruc-1",
        "orden": 1,
        "modalidad": "online",
        "esOpcional": false,
        "titulo": "Ingresar a la App Personas SUNAT o portal web",
        "descripcion": "Abre la aplicación móvil \"Personas SUNAT\" o ingresa a la plataforma web de SUNAT y selecciona \"Inscríbete en el RUC\".",
        "institucionNombre": "SUNAT Virtual",
        "institucionUrl": "https://www.sunat.gob.pe",
        "costoTipo": "gratuito",
        "costoMin": 0,
        "costoMax": 0
      },
      {
        "id": "paso-ruc-2",
        "orden": 2,
        "modalidad": "online",
        "esOpcional": false,
        "titulo": "Validar identidad biométrica",
        "descripcion": "Realiza la verificación biométrica dactilar o facial conectada con la base de RENIEC.",
        "costoTipo": "gratuito",
        "costoMin": 0,
        "costoMax": 0
      },
      {
        "id": "paso-ruc-3",
        "orden": 3,
        "modalidad": "online",
        "esOpcional": false,
        "titulo": "Generar Clave SOL y obtener Ficha RUC",
        "descripcion": "Define tu contraseña de Clave SOL y descarga tu Ficha RUC activa en formato PDF.",
        "costoTipo": "gratuito",
        "costoMin": 0,
        "costoMax": 0
      }
    ],
    "canalesPago": []
  },
  {
    "id": "tram-clave-sol",
    "slug": "clave-sol",
    "nombre": "Obtención o Recuperación de Clave SOL",
    "nombreCorto": "Obtención de Clave SOL",
    "subgrupo": "RUC Y TRIBUTOS",
    "descripcion": "Contraseña digital personal para acceder a SUNAT Operaciones en Línea, emitir facturas, boletas, recibos y pagar tributos.",
    "categoriaId": "cat-3",
    "categoria": {
      "id": "cat-3",
      "slug": "tributos-empresas",
      "nombre": "Tributos y RUC",
      "descripcion": "Inscripción RUC, Clave SOL, declaración de impuestos y constitución empresarial.",
      "icono": "AccountBalanceOutlined"
    },
    "institucionId": "inst-sunat",
    "institucion": {
      "id": "inst-sunat",
      "slug": "sunat",
      "nombre": "Superintendencia Nacional de Aduanas y de Administración Tributaria",
      "sigla": "SUNAT",
      "tipo": "nacional",
      "webOficial": "https://www.sunat.gob.pe",
      "descripcion": "Administración de tributos internos, RUC, comprobantes de pago e impuestos aduaneros.",
      "logoIniciales": "SN"
    },
    "esCompuesto": false,
    "esRecurrente": false,
    "modalidadPrincipal": "online",
    "duracionMinDias": 0,
    "duracionMaxDias": 0,
    "duracionTexto": "Inmediato (online)",
    "tipoResultado": "confirmacion",
    "vigenciaResultadoDias": null,
    "vigenciaTexto": "Indefinida",
    "ultimaVerificacion": "2026-09-24",
    "fuenteUrl": "https://www.gob.pe/331-obtener-la-clave-sol",
    "frecuenciaBusqueda": 8800,
    "costoResumen": "Totalmente Gratuito (S/ 0.00)",
    "costoPrincipal": 0,
    "baseLegal": "Resolución de Superintendencia N° 109-2000/SUNAT y modificaciones.",
    "tags": [
      "clave sol",
      "sunat",
      "operaciones en linea",
      "recibos por honorarios",
      "tributos"
    ],
    "requisitos": [
      {
        "id": "req-sol-1",
        "descripcion": "Número de DNI o RUC.",
        "orden": 1
      },
      {
        "id": "req-sol-2",
        "descripcion": "Correo electrónico y número de celular declarados ante RENIEC o SUNAT.",
        "orden": 2
      }
    ],
    "pasos": [
      {
        "id": "paso-sol-1",
        "orden": 1,
        "modalidad": "online",
        "esOpcional": false,
        "titulo": "Ingresar a SUNAT Virtual",
        "descripcion": "Selecciona \"Generación de Clave SOL\" y digita tu número de documento de identidad.",
        "institucionNombre": "SUNAT",
        "institucionUrl": "https://www.sunat.gob.pe",
        "costoTipo": "gratuito",
        "costoMin": 0,
        "costoMax": 0
      },
      {
        "id": "paso-sol-2",
        "orden": 2,
        "modalidad": "online",
        "esOpcional": false,
        "titulo": "Verificar código OTP y crear contraseña",
        "descripcion": "Ingresa el código temporal recibido por SMS o email y configura tu contraseña alfanumérica segura.",
        "costoTipo": "gratuito",
        "costoMin": 0,
        "costoMax": 0
      }
    ],
    "canalesPago": []
  },
  {
    "id": "tram-pago-luz-servicio",
    "slug": "pago-luz-servicio",
    "nombre": "Consulta y Pago de Recibo de Luz Eléctrica",
    "descripcion": "Paga tu factura mensual de energía eléctrica de forma digital y evita cortes o cargos por reconexión según tu distribuidora zonal.",
    "categoriaId": "cat-5",
    "categoria": {
      "id": "cat-5",
      "slug": "servicios-publicos",
      "nombre": "Servicios Públicos y Hogar",
      "descripcion": "Pago y gestión de recibos de energía eléctrica, agua potable y gas natural.",
      "icono": "BoltOutlined"
    },
    "institucionId": "inst-luz-sur",
    "institucion": {
      "id": "inst-luz-sur",
      "slug": "luz-del-sur",
      "nombre": "Luz del Sur S.A.A.",
      "sigla": "Luz del Sur",
      "tipo": "privado",
      "webOficial": "https://www.luzdelsur.com.pe",
      "descripcion": "Distribuidora de energía eléctrica para la zona sur y este de Lima Metropolitana.",
      "logoIniciales": "LDS"
    },
    "esCompuesto": false,
    "esRecurrente": true,
    "modalidadPrincipal": "online",
    "duracionMinDias": 0,
    "duracionMaxDias": 0,
    "duracionTexto": "Inmediato (impacto en 15 a 30 minutos)",
    "tipoResultado": "confirmacion",
    "vigenciaResultadoDias": 30,
    "vigenciaTexto": "Mensual (según ciclo de facturación)",
    "ultimaVerificacion": "2026-09-24",
    "fuenteUrl": "https://www.luzdelsur.com.pe/es/pagos-en-linea",
    "frecuenciaBusqueda": 8100,
    "costoResumen": "Variable según consumo del recibo",
    "costoPrincipal": 0,
    "baseLegal": "Ley de Concesiones Eléctricas - Decreto Ley N° 25844 y normas de OSINERGMIN.",
    "tags": [
      "luz",
      "recibo de luz",
      "luz del sur",
      "enel",
      "pluz",
      "electricidad",
      "servicios basicos"
    ],
    "cobertura": [
      {
        "id": "cob-1",
        "institucionId": "inst-luz-sur",
        "region": "Lima",
        "distrito": "Surquillo, Miraflores, San Isidro, Surco, Chorrillos, San Borja, etc."
      },
      {
        "id": "cob-2",
        "institucionId": "inst-pluz-enel",
        "region": "Lima",
        "distrito": "Lima Cercado, San Miguel, Los Olivos, San Martín de Porres, Callao, etc."
      }
    ],
    "requisitos": [
      {
        "id": "req-luz-1",
        "descripcion": "Número de suministro o código de cliente (figura en la parte superior derecha de tu recibo físico o digital).",
        "orden": 1
      },
      {
        "id": "req-luz-2",
        "descripcion": "Tarjeta de débito/crédito o cuenta bancaria habilitada para compras por internet.",
        "orden": 2
      }
    ],
    "pasos": [
      {
        "id": "paso-luz-1",
        "orden": 1,
        "modalidad": "online",
        "esOpcional": false,
        "titulo": "Identificar tu empresa distribuidora por distrito",
        "descripcion": "Verifica si tu zona corresponde a Luz del Sur (Lima Sur/Este) o Pluz Energía/Enel (Lima Norte/Centro/Callao).",
        "costoTipo": "gratuito",
        "costoMin": 0,
        "costoMax": 0
      },
      {
        "id": "paso-luz-2",
        "orden": 2,
        "modalidad": "online",
        "esOpcional": false,
        "titulo": "Consultar deuda e ingresar código de suministro",
        "descripcion": "Accede al portal web o aplicativo móvil de la empresa o a tu banca por internet.",
        "costoTipo": "gratuito",
        "costoMin": 0,
        "costoMax": 0
      },
      {
        "id": "paso-luz-3",
        "orden": 3,
        "modalidad": "online",
        "esOpcional": false,
        "titulo": "Ejecutar el pago y guardar comprobante digital",
        "descripcion": "Paga con tarjeta o billetera digital (Yape/Plin) y descarga la constancia electrónica.",
        "costoTipo": "variable",
        "costoMin": 15,
        "costoMax": 500
      }
    ],
    "canalesPago": [
      {
        "id": "cp-yape",
        "nombre": "Yape / Plin (Sección Servicios)",
        "tipo": "online"
      },
      {
        "id": "cp-bancos",
        "nombre": "Banca por Internet (BCP, BBVA, Interbank, Scotiabank)",
        "tipo": "online"
      },
      {
        "id": "cp-agentes",
        "nombre": "Agentes bancarios y Western Union / KasNet",
        "tipo": "agente"
      }
    ]
  },
  {
    "id": "tram-pago-agua-servicio",
    "slug": "pago-agua-servicio",
    "nombre": "Consulta y Pago de Recibo de Agua (SEDAPAL / EPS)",
    "descripcion": "Verifica y cancela la facturación mensual del suministro de agua potable y alcantarillado.",
    "categoriaId": "cat-5",
    "categoria": {
      "id": "cat-5",
      "slug": "servicios-publicos",
      "nombre": "Servicios Públicos y Hogar",
      "descripcion": "Pago y gestión de recibos de energía eléctrica, agua potable y gas natural.",
      "icono": "BoltOutlined"
    },
    "institucionId": "inst-sedapal",
    "institucion": {
      "id": "inst-sedapal",
      "slug": "sedapal",
      "nombre": "Servicio de Agua Potable y Alcantarillado de Lima",
      "sigla": "SEDAPAL",
      "tipo": "nacional",
      "webOficial": "https://www.sedapal.com.pe",
      "descripcion": "Empresa estatal proveedora de servicios de agua potable y alcantarillado en Lima y Callao.",
      "logoIniciales": "SED"
    },
    "esCompuesto": false,
    "esRecurrente": true,
    "modalidadPrincipal": "online",
    "duracionMinDias": 0,
    "duracionMaxDias": 0,
    "duracionTexto": "Inmediato (online)",
    "tipoResultado": "confirmacion",
    "vigenciaResultadoDias": 30,
    "vigenciaTexto": "Mensual",
    "ultimaVerificacion": "2026-09-24",
    "fuenteUrl": "https://www.gob.pe/35209-realizar-pagos-en-linea",
    "frecuenciaBusqueda": 7900,
    "costoResumen": "Variable según consumo del recibo",
    "costoPrincipal": 0,
    "baseLegal": "Decreto Legislativo N° 1280, Ley Marco de la Gestión y Prestación de los Servicios de Saneamiento y normas SUNASS.",
    "tags": [
      "agua",
      "sedapal",
      "recibo de agua",
      "sunass",
      "servicios basicos",
      "aquanet"
    ],
    "requisitos": [
      {
        "id": "req-agua-1",
        "descripcion": "Número de suministro de agua (código de 7 dígitos).",
        "orden": 1
      },
      {
        "id": "req-agua-2",
        "descripcion": "Tarjeta bancaria de débito o crédito habilitada.",
        "orden": 2
      }
    ],
    "pasos": [
      {
        "id": "paso-agua-1",
        "orden": 1,
        "modalidad": "online",
        "esOpcional": false,
        "titulo": "Consultar recibo pendiente en Aquanet Sedapal o banca móvil",
        "descripcion": "Digita tu número de suministro en la plataforma Aquanet o en la sección Servicios de tu banco.",
        "institucionNombre": "Sedapal Aquanet",
        "institucionUrl": "https://aquanet.sedapal.com.pe/",
        "costoTipo": "gratuito",
        "costoMin": 0,
        "costoMax": 0
      },
      {
        "id": "paso-agua-2",
        "orden": 2,
        "modalidad": "online",
        "esOpcional": false,
        "titulo": "Confirmar monto y efectuar el pago",
        "descripcion": "Cancela el importe y recibe la constancia de cancelación de Sedapal por correo electrónico.",
        "costoTipo": "variable",
        "costoMin": 10,
        "costoMax": 400
      }
    ],
    "canalesPago": [
      {
        "id": "cp-aquanet",
        "nombre": "Portal Aquanet Sedapal",
        "tipo": "online"
      },
      {
        "id": "cp-bancos",
        "nombre": "Banca móvil de todos los bancos",
        "tipo": "online"
      },
      {
        "id": "cp-agentes",
        "nombre": "Agentes autorizados y cajas municipales",
        "tipo": "agente"
      }
    ]
  },
  {
    "id": "tram-impuesto-predial-arbitrios",
    "slug": "impuesto-predial-arbitrios",
    "nombre": "Declaración y Pago de Impuesto Predial y Arbitrios",
    "nombreCorto": "Impuesto Predial y Arbitrios",
    "subgrupo": "TRIBUTOS Y LICENCIAS",
    "descripcion": "Tributo municipal obligatorio que grava el valor de los predios urbanos y rústicos, más los servicios de serenazgo, limpieza y parques.",
    "categoriaId": "cat-6",
    "categoria": {
      "id": "cat-6",
      "slug": "municipal-vivienda",
      "nombre": "Municipal y Vivienda",
      "descripcion": "Impuesto predial, arbitrios, licencias de funcionamiento e inspecciones ITSE.",
      "icono": "ApartmentOutlined"
    },
    "institucionId": "inst-muni-generica",
    "institucion": {
      "id": "inst-muni-generica",
      "slug": "municipalidad-distrital",
      "nombre": "Tu municipalidad",
      "sigla": "Tu municipalidad",
      "tipo": "municipal",
      "webOficial": "https://www.gob.pe/institucion/pcm/campa%C3%B1as/1529-tupa-digital",
      "descripcion": "Gobierno local distrital. Costos y plazos varían según el distrito.",
      "logoIniciales": "MU"
    },
    "esCompuesto": false,
    "esRecurrente": true,
    "modalidadPrincipal": "mixta",
    "duracionMinDias": 1,
    "duracionMaxDias": 3,
    "duracionTexto": "1 a 3 días hábiles",
    "tipoResultado": "confirmacion",
    "vigenciaResultadoDias": 365,
    "vigenciaTexto": "Anual (pagadero al contado o en 4 cuotas trimestrales)",
    "ultimaVerificacion": "2026-09-24",
    "fuenteUrl": "https://www.gob.pe/institucion/pcm/campa%C3%B1as/1529-tupa-digital",
    "frecuenciaBusqueda": 7400,
    "costoResumen": "Calculado sobre el autoavalúo (escala alícuotas 0.2% a 1.0%)",
    "costoPrincipal": 0,
    "baseLegal": "Texto Único Ordenado de la Ley de Tributación Municipal - D.S. N° 156-2004-EF.",
    "tags": [
      "predial",
      "arbitrios",
      "municipalidad",
      "casa",
      "inmueble",
      "autoavaluo",
      "sat"
    ],
    "requisitos": [
      {
        "id": "req-pred-1",
        "descripcion": "Código de contribuyente municipal asignado por tu distrito.",
        "orden": 1
      },
      {
        "id": "req-pred-2",
        "descripcion": "Declaración jurada de autoavalúo (Hoja Resumen HR y Predio Urbano PU).",
        "orden": 2
      },
      {
        "id": "req-pred-3",
        "descripcion": "DNI del propietario o representante legal con carta poder.",
        "orden": 3
      }
    ],
    "pasos": [
      {
        "id": "paso-pred-1",
        "orden": 1,
        "modalidad": "online",
        "esOpcional": false,
        "titulo": "Consultar estado de cuenta en la municipalidad de tu distrito o SAT",
        "descripcion": "Ingresa al portal de rentas de tu municipalidad distrital o al SAT de Lima con tu código de contribuyente.",
        "institucionNombre": "Municipalidad de tu distrito / SAT",
        "costoTipo": "gratuito",
        "costoMin": 0,
        "costoMax": 0
      },
      {
        "id": "paso-pred-2",
        "orden": 2,
        "modalidad": "online",
        "esOpcional": false,
        "titulo": "Elegir modalidad de pago (anual con descuento o 4 cuotas)",
        "descripcion": "Aprovecha descuentos por pronto pago o programa las cuotas con vencimiento en febrero, mayo, agosto y noviembre.",
        "costoTipo": "variable",
        "costoMin": 50,
        "costoMax": 3000
      }
    ],
    "canalesPago": [
      {
        "id": "cp-sat",
        "nombre": "Portal Web SAT / Rentas Municipal",
        "tipo": "online"
      },
      {
        "id": "cp-bancos",
        "nombre": "Banca por Internet y Ventanillas",
        "tipo": "agencia"
      }
    ]
  },
  {
    "id": "tram-licencia-funcionamiento",
    "slug": "licencia-funcionamiento",
    "nombre": "Licencia de Funcionamiento para Negocios (MYPE)",
    "nombreCorto": "Licencia de Funcionamiento",
    "subgrupo": "TRIBUTOS Y LICENCIAS",
    "descripcion": "Autorización legal otorgada por la municipalidad para que un establecimiento comercial, industrial o de servicios pueda operar formalmente.",
    "categoriaId": "cat-6",
    "categoria": {
      "id": "cat-6",
      "slug": "municipal-vivienda",
      "nombre": "Municipal y Vivienda",
      "descripcion": "Impuesto predial, arbitrios, licencias de funcionamiento e inspecciones ITSE.",
      "icono": "ApartmentOutlined"
    },
    "institucionId": "inst-muni-generica",
    "institucion": {
      "id": "inst-muni-generica",
      "slug": "municipalidad-distrital",
      "nombre": "Tu municipalidad",
      "sigla": "Tu municipalidad",
      "tipo": "municipal",
      "webOficial": "https://www.gob.pe/institucion/pcm/campa%C3%B1as/1529-tupa-digital",
      "descripcion": "Gobierno local distrital. Costos y plazos varían según el distrito.",
      "logoIniciales": "MU"
    },
    "esCompuesto": true,
    "esRecurrente": false,
    "modalidadPrincipal": "mixta",
    "duracionMinDias": 2,
    "duracionMaxDias": 10,
    "duracionTexto": "2 a 10 días hábiles (según nivel de riesgo ITSE)",
    "tipoResultado": "licencia",
    "vigenciaResultadoDias": null,
    "vigenciaTexto": "Vigencia indeterminada",
    "ultimaVerificacion": "2026-09-24",
    "fuenteUrl": "https://www.gob.pe/352-obtener-licencia-de-funcionamiento",
    "frecuenciaBusqueda": 7600,
    "costoResumen": "Variable según TUPA municipal (S/ 80.00 a S/ 250.00 aprox.)",
    "costoPrincipal": 150,
    "baseLegal": "Ley Marco de Licencia de Funcionamiento - Ley N° 28976 y D.S. N° 163-2020-PCM.",
    "tags": [
      "licencia",
      "negocio",
      "municipalidad",
      "mype",
      "local comercial",
      "itse",
      "defensa civil"
    ],
    "requisitos": [
      {
        "id": "req-lic-1",
        "descripcion": "RUC activo y habido con dirección del establecimiento.",
        "orden": 1
      },
      {
        "id": "req-lic-2",
        "descripcion": "DNI del titular o representante legal y vigencia de poder (si es persona jurídica).",
        "orden": 2
      },
      {
        "id": "req-lic-3",
        "descripcion": "Declaración jurada de cumplimiento de condiciones de seguridad en edificaciones (ITSE).",
        "orden": 3
      },
      {
        "id": "req-lic-4",
        "descripcion": "Título de propiedad o contrato de arrendamiento del local.",
        "orden": 4
      },
      {
        "id": "req-lic-5",
        "descripcion": "Compatibilidad de uso favorable según la zonificación del distrito.",
        "orden": 5
      }
    ],
    "pasos": [
      {
        "id": "paso-lic-1",
        "orden": 1,
        "modalidad": "online",
        "esOpcional": false,
        "titulo": "Verificar zonificación y compatibilidad de uso",
        "descripcion": "Revisa en la municipalidad de tu distrito que el giro de tu negocio esté permitido en la dirección de tu local.",
        "institucionNombre": "Municipalidad distrital",
        "costoTipo": "gratuito",
        "costoMin": 0,
        "costoMax": 0
      },
      {
        "id": "paso-lic-2",
        "orden": 2,
        "modalidad": "presencial",
        "esOpcional": false,
        "titulo": "Acondicionar el local con medidas de seguridad ITSE",
        "descripcion": "Instala extintor vigente, señalización fotoluminiscente de evacuación, detector de humo y pozo a tierra.",
        "costoTipo": "variable",
        "costoMin": 100,
        "costoMax": 500
      },
      {
        "id": "paso-lic-3",
        "orden": 3,
        "modalidad": "mixta",
        "esOpcional": false,
        "titulo": "Ingresar solicitud y pagar la tasa TUPA municipal",
        "descripcion": "Presenta el Formato Único de Trámite (FUT) con la declaración jurada y abona los derechos de trámite.",
        "costoTipo": "rango",
        "costoMin": 80,
        "costoMax": 250
      },
      {
        "id": "paso-lic-4",
        "orden": 4,
        "modalidad": "presencial",
        "esOpcional": false,
        "titulo": "Inspección de Defensa Civil y emisión de la licencia",
        "descripcion": "Para riesgo bajo/medio, la licencia se otorga el mismo día y la inspección ITSE es posterior dentro de los 7 días hábiles.",
        "costoTipo": "gratuito",
        "costoMin": 0,
        "costoMax": 0
      }
    ],
    "canalesPago": [
      {
        "id": "cp-muni",
        "nombre": "Caja Municipal del Distrito",
        "tipo": "agencia"
      },
      {
        "id": "cp-online",
        "nombre": "Plataforma Virtual Municipal (si cuenta con mesa digital)",
        "tipo": "online"
      }
    ]
  },
  {
    "id": "tram-duplicado-tive",
    "slug": "duplicado-tive",
    "nombre": "Duplicado de Tarjeta de Identificación Vehicular Electrónica (TIVE)",
    "descripcion": "Solicita un nuevo ejemplar digital de la TIVE ante SUNARP con código de verificación QR y firma digital.",
    "categoriaId": "cat-2",
    "categoria": {
      "id": "cat-2",
      "slug": "vehicular-transporte",
      "nombre": "Vehicular y Transporte",
      "descripcion": "Brevete, récord de conductor, placas, SOAT y transferencias de vehículos.",
      "icono": "DirectionsCarOutlined"
    },
    "institucionId": "inst-sunarp",
    "institucion": {
      "id": "inst-sunarp",
      "slug": "sunarp",
      "nombre": "Superintendencia Nacional de los Registros Públicos",
      "sigla": "SUNARP",
      "tipo": "nacional",
      "webOficial": "https://www.gob.pe/sunarp",
      "descripcion": "Inscripción y publicidad de actos jurídicos, bienes inmuebles y propiedad vehicular.",
      "logoIniciales": "SNP"
    },
    "esCompuesto": false,
    "esRecurrente": false,
    "modalidadPrincipal": "online",
    "duracionMinDias": 1,
    "duracionMaxDias": 3,
    "duracionTexto": "1 a 3 días hábiles",
    "tipoResultado": "documento_digital",
    "vigenciaResultadoDias": null,
    "vigenciaTexto": "Permanente",
    "ultimaVerificacion": "2026-09-24",
    "fuenteUrl": "https://www.sunarp.gob.pe/ServiciosLinea.asp",
    "frecuenciaBusqueda": 6800,
    "costoResumen": "S/ 40.00",
    "costoPrincipal": 40,
    "baseLegal": "Directiva que regula la Tarjeta de Identificación Vehicular Electrónica - Resolución N° 068-2020-SUNARP/SN.",
    "tags": [
      "tive",
      "sunarp",
      "tarjeta de propiedad",
      "vehiculo",
      "auto",
      "placa"
    ],
    "requisitos": [
      {
        "id": "req-tive-1",
        "descripcion": "Número de placa vehicular del auto o motocicleta.",
        "orden": 1
      },
      {
        "id": "req-tive-2",
        "descripcion": "DNI del propietario registrado en la partida registral (o validación biométrica en oficina registral).",
        "orden": 2
      },
      {
        "id": "req-tive-3",
        "descripcion": "Pago de la tasa registral de S/ 40.00 en el SPRL de SUNARP o caja registral.",
        "orden": 3
      }
    ],
    "pasos": [
      {
        "id": "paso-tive-1",
        "orden": 1,
        "modalidad": "online",
        "esOpcional": false,
        "titulo": "Ingresar al Servicio de Publicidad Registral en Línea (SPRL)",
        "descripcion": "Accede con tu usuario ciudadano al portal SPRL de SUNARP.",
        "institucionNombre": "SUNARP SPRL",
        "institucionUrl": "https://serviciosenlinea.sunarp.gob.pe/",
        "costoTipo": "gratuito",
        "costoMin": 0,
        "costoMax": 0
      },
      {
        "id": "paso-tive-2",
        "orden": 2,
        "modalidad": "online",
        "esOpcional": false,
        "titulo": "Solicitar el duplicado y pagar en línea o ventanilla",
        "descripcion": "Selecciona \"Duplicado de Tarjeta de Identificación Vehicular Electrónica\", digita la placa y paga la tasa registral de S/ 40.00.",
        "costoTipo": "fijo",
        "costoMin": 40,
        "costoMax": 40
      },
      {
        "id": "paso-tive-3",
        "orden": 3,
        "modalidad": "online",
        "esOpcional": false,
        "titulo": "Descarga del documento con código de verificación",
        "descripcion": "Recibirás un enlace y código de descarga para portar tu TIVE en tu celular o imprimirla.",
        "costoTipo": "gratuito",
        "costoMin": 0,
        "costoMax": 0
      }
    ],
    "canalesPago": [
      {
        "id": "cp-sunarp",
        "nombre": "Pasarela en línea SUNARP (Visa / Mastercard)",
        "tipo": "online"
      }
    ]
  },
  {
    "id": "tram-afiliacion-sis-gratuito",
    "slug": "afiliacion-sis-gratuito",
    "nombre": "Afiliación al Seguro Integral de Salud (SIS Gratuito / Para Todos)",
    "descripcion": "Accede a la cobertura médica pública integral para consultas, medicamentos, hospitalización e intervenciones quirúrgicas en el sistema de salud público.",
    "categoriaId": "cat-7",
    "categoria": {
      "id": "cat-7",
      "slug": "salud-social",
      "nombre": "Salud y Afiliaciones",
      "descripcion": "Seguro Integral de Salud (SIS), ESSALUD y constancias médicas.",
      "icono": "HealthAndSafetyOutlined"
    },
    "institucionId": "inst-sis",
    "institucion": {
      "id": "inst-sis",
      "slug": "sis",
      "nombre": "Seguro Integral de Salud",
      "sigla": "SIS",
      "tipo": "nacional",
      "webOficial": "https://www.gob.pe/sis",
      "descripcion": "Organismo público ejecutor que brinda cobertura de aseguramiento en salud a nivel nacional.",
      "logoIniciales": "SIS"
    },
    "esCompuesto": false,
    "esRecurrente": false,
    "modalidadPrincipal": "online",
    "duracionMinDias": 0,
    "duracionMaxDias": 1,
    "duracionTexto": "Inmediato (en línea)",
    "tipoResultado": "confirmacion",
    "vigenciaResultadoDias": null,
    "vigenciaTexto": "Continua mientras no cuentes con otro seguro de salud activo",
    "ultimaVerificacion": "2026-09-24",
    "fuenteUrl": "https://www.gob.pe/300-afiliarte-al-sis-gratuito",
    "frecuenciaBusqueda": 8300,
    "costoResumen": "Totalmente Gratuito (S/ 0.00)",
    "costoPrincipal": 0,
    "baseLegal": "Decreto de Urgencia N° 017-2019 que establece medidas para la Cobertura Universal de Salud.",
    "tags": [
      "sis",
      "salud",
      "seguro gratis",
      "minsa",
      "hospital",
      "posta medica"
    ],
    "requisitos": [
      {
        "id": "req-sis-1",
        "descripcion": "DNI o Carné de Extranjería vigente.",
        "orden": 1
      },
      {
        "id": "req-sis-2",
        "descripcion": "No contar con otro seguro de salud activo (EsSalud, seguro privado EPS, FFAA o PNP).",
        "orden": 2
      },
      {
        "id": "req-sis-3",
        "descripcion": "Clasificación socioeconómica de Pobre o Pobre Extremo en el SISFOH (para el plan SIS Gratuito focalizado; si no, aplica SIS Para Todos).",
        "aplicaSi": "general",
        "orden": 3
      }
    ],
    "pasos": [
      {
        "id": "paso-sis-1",
        "orden": 1,
        "modalidad": "online",
        "esOpcional": false,
        "titulo": "Verificar si ya cuentas con afiliación automática",
        "descripcion": "Consulta con tu DNI en el buscador de afiliados del SIS para verificar si ya estás inscrito y cuál es tu centro de salud asignado.",
        "institucionNombre": "SIS Consulta de Afiliados",
        "institucionUrl": "http://app.sis.gob.pe/SisConsultaEnLinea/Consulta/frmConsultaEnLinea.aspx",
        "costoTipo": "gratuito",
        "costoMin": 0,
        "costoMax": 0
      },
      {
        "id": "paso-sis-2",
        "orden": 2,
        "modalidad": "online",
        "esOpcional": false,
        "titulo": "Solicitar afiliación por App SIS Asegúrate o web",
        "descripcion": "Si no figuras como asegurado, descarga el App \"SIS: Asegúrate e infórmate\" o envía tu solicitud en la web oficial.",
        "costoTipo": "gratuito",
        "costoMin": 0,
        "costoMax": 0
      }
    ],
    "canalesPago": []
  },
  {
    "id": "tram-record-conductor-puntos",
    "slug": "record-conductor-puntos",
    "nombre": "Consulta de Récord de Conductor y Puntos Acumulados",
    "nombreCorto": "Récord de conductor",
    "subgrupo": "LICENCIAS",
    "descripcion": "Revisa de forma gratuita tu historial de infracciones de tránsito, multas pendientes y saldo de puntos en el Sistema de Control de Licencias del MTC.",
    "categoriaId": "cat-2",
    "categoria": {
      "id": "cat-2",
      "slug": "vehicular-transporte",
      "nombre": "Vehicular y Transporte",
      "descripcion": "Brevete, récord de conductor, placas, SOAT y transferencias de vehículos.",
      "icono": "DirectionsCarOutlined"
    },
    "institucionId": "inst-mtc",
    "institucion": {
      "id": "inst-mtc",
      "slug": "mtc",
      "nombre": "Ministerio de Transportes y Comunicaciones",
      "sigla": "MTC",
      "tipo": "nacional",
      "webOficial": "https://www.gob.pe/mtc",
      "descripcion": "Regulación y emisión de licencias de conducir, transporte terrestre y comunicaciones.",
      "logoIniciales": "MT"
    },
    "esCompuesto": false,
    "esRecurrente": false,
    "modalidadPrincipal": "online",
    "duracionMinDias": 0,
    "duracionMaxDias": 0,
    "duracionTexto": "Inmediato (consulta libre)",
    "tipoResultado": "documento_digital",
    "vigenciaResultadoDias": null,
    "vigenciaTexto": "Actualizado en tiempo real",
    "ultimaVerificacion": "2026-09-24",
    "fuenteUrl": "https://recordconductor.mtc.gob.pe/",
    "frecuenciaBusqueda": 8400,
    "costoResumen": "Totalmente Gratuito (S/ 0.00)",
    "costoPrincipal": 0,
    "baseLegal": "Reglamento Nacional de Tránsito - D.S. N° 016-2009-MTC y D.S. N° 025-2021-MTC.",
    "tags": [
      "record de conductor",
      "puntos mtc",
      "infracciones",
      "papeletas",
      "brevete",
      "sutran",
      "sat"
    ],
    "requisitos": [
      {
        "id": "req-rec-1",
        "descripcion": "Número de DNI o número de Licencia de Conducir.",
        "orden": 1
      }
    ],
    "pasos": [
      {
        "id": "paso-rec-1",
        "orden": 1,
        "modalidad": "online",
        "esOpcional": false,
        "titulo": "Ingresar al Sistema de Récord de Conductor del MTC",
        "descripcion": "Accede al portal oficial recordconductor.mtc.gob.pe, digita tu DNI y el código de seguridad captcha.",
        "institucionNombre": "MTC Récord de Conductor",
        "institucionUrl": "https://recordconductor.mtc.gob.pe/",
        "costoTipo": "gratuito",
        "costoMin": 0,
        "costoMax": 0
      },
      {
        "id": "paso-rec-2",
        "orden": 2,
        "modalidad": "online",
        "esOpcional": false,
        "titulo": "Visualizar récord e imprimir constancia oficial",
        "descripcion": "Revisa tu balance de puntos (límite de 100 puntos por acumulación) y descarga el certificado digital gratuito.",
        "costoTipo": "gratuito",
        "costoMin": 0,
        "costoMax": 0
      }
    ],
    "canalesPago": []
  },
  {
    "id": "tram-denuncia-policial-perdida",
    "slug": "denuncia-policial-perdida",
    "nombre": "Denuncia Policial Digital por Pérdida de Documentos",
    "descripcion": "Tramita la constancia oficial de denuncia ante la PNP por pérdida o extravío de DNI, pasaporte, tarjetas bancarias o placas.",
    "categoriaId": "cat-4",
    "categoria": {
      "id": "cat-4",
      "slug": "empleo-certificados",
      "nombre": "Empleo y Certificados",
      "descripcion": "Certificado Único Laboral, antecedentes policiales, penales y judiciales.",
      "icono": "WorkOutlineOutlined"
    },
    "institucionId": "inst-pnp",
    "institucion": {
      "id": "inst-pnp",
      "slug": "pnp",
      "nombre": "Policía Nacional del Perú",
      "sigla": "PNP",
      "tipo": "nacional",
      "webOficial": "https://www.policia.gob.pe",
      "descripcion": "Seguridad ciudadana, emisión de antecedentes policiales y denuncias por pérdida.",
      "logoIniciales": "PNP"
    },
    "esCompuesto": false,
    "esRecurrente": false,
    "modalidadPrincipal": "online",
    "duracionMinDias": 0,
    "duracionMaxDias": 0,
    "duracionTexto": "Inmediato (5 minutos)",
    "tipoResultado": "documento_digital",
    "vigenciaResultadoDias": null,
    "vigenciaTexto": "Permanente como constancia del hecho",
    "ultimaVerificacion": "2026-09-24",
    "fuenteUrl": "https://www.gob.pe/8920-hacer-una-denuncia-policial-digital",
    "frecuenciaBusqueda": 8200,
    "costoResumen": "Totalmente Gratuito (S/ 0.00)",
    "costoPrincipal": 0,
    "baseLegal": "Decreto Legislativo N° 1267 y Decreto Supremo N° 004-2020-IN.",
    "tags": [
      "denuncia policial",
      "perdida de dni",
      "pnp",
      "denuncia digital",
      "extravio de tarjeta"
    ],
    "requisitos": [
      {
        "id": "req-den-1",
        "descripcion": "DNI vigente del declarante.",
        "orden": 1
      },
      {
        "id": "req-den-2",
        "descripcion": "Detalle de la fecha, hora aproximada y lugar donde ocurrió la pérdida.",
        "orden": 2
      },
      {
        "id": "req-den-3",
        "descripcion": "Correo electrónico para recibir el Certificado Digital de Denuncia.",
        "orden": 3
      }
    ],
    "pasos": [
      {
        "id": "paso-den-1",
        "orden": 1,
        "modalidad": "online",
        "esOpcional": false,
        "titulo": "Ingresar a la plataforma Denuncia Policial Digital",
        "descripcion": "Entra a la web de la Policía Nacional y acepta los términos y condiciones de la declaración jurada.",
        "institucionNombre": "PNP Denuncia Digital",
        "institucionUrl": "https://sistemas.policia.gob.pe/denuncias_digitales/",
        "costoTipo": "gratuito",
        "costoMin": 0,
        "costoMax": 0
      },
      {
        "id": "paso-den-2",
        "orden": 2,
        "modalidad": "online",
        "esOpcional": false,
        "titulo": "Detallar los documentos extraviados y descargar constancia",
        "descripcion": "Selecciona los tipos de documento perdidos, escribe una breve narración de los hechos y descarga la constancia con firma digital PNP.",
        "costoTipo": "gratuito",
        "costoMin": 0,
        "costoMax": 0
      }
    ],
    "canalesPago": []
  },
  {
    "id": "tram-suspension-cuarta-categoria",
    "slug": "suspension-retenciones-cuarta",
    "nombre": "Suspensión de Retenciones de Cuarta Categoría (Formulario 1609)",
    "nombreCorto": "Suspensión 4ta Categoría",
    "subgrupo": "RUC Y TRIBUTOS",
    "descripcion": "Evita la retención del 8% en tus recibos por honorarios si proyectas que tus ingresos anuales por trabajo independiente no superarán el tope legal fijado por SUNAT.",
    "categoriaId": "cat-3",
    "categoria": {
      "id": "cat-3",
      "slug": "tributos-empresas",
      "nombre": "Tributos y RUC",
      "descripcion": "Inscripción RUC, Clave SOL, declaración de impuestos y constitución empresarial.",
      "icono": "AccountBalanceOutlined"
    },
    "institucionId": "inst-sunat",
    "institucion": {
      "id": "inst-sunat",
      "slug": "sunat",
      "nombre": "Superintendencia Nacional de Aduanas y de Administración Tributaria",
      "sigla": "SUNAT",
      "tipo": "nacional",
      "webOficial": "https://www.sunat.gob.pe",
      "descripcion": "Administración de tributos internos, RUC, comprobantes de pago e impuestos aduaneros.",
      "logoIniciales": "SN"
    },
    "esCompuesto": false,
    "esRecurrente": true,
    "modalidadPrincipal": "online",
    "duracionMinDias": 0,
    "duracionMaxDias": 0,
    "duracionTexto": "Inmediato (aprobación automática)",
    "tipoResultado": "documento_digital",
    "vigenciaResultadoDias": 365,
    "vigenciaTexto": "Hasta el 31 de diciembre del año en curso",
    "ultimaVerificacion": "2026-09-24",
    "fuenteUrl": "https://www.gob.pe/332-solicitar-suspension-de-retenciones-de-cuarta-categoria",
    "frecuenciaBusqueda": 7800,
    "costoResumen": "Totalmente Gratuito (S/ 0.00)",
    "costoPrincipal": 0,
    "baseLegal": "Resolución de Superintendencia N° 013-2007/SUNAT y RS vigente para el ejercicio fiscal 2025.",
    "tags": [
      "cuarta categoria",
      "suspension 8%",
      "recibo por honorarios",
      "formulario 1609",
      "sunat",
      "independiente"
    ],
    "requisitos": [
      {
        "id": "req-susp-1",
        "descripcion": "RUC y Clave SOL activos.",
        "orden": 1
      },
      {
        "id": "req-susp-2",
        "descripcion": "Proyección de ingresos anuales (no debe superar el tope legal fijado por SUNAT para el año, aprox. S/ 45,063 anuales).",
        "orden": 2
      }
    ],
    "pasos": [
      {
        "id": "paso-susp-1",
        "orden": 1,
        "modalidad": "online",
        "esOpcional": false,
        "titulo": "Ingresar a SUNAT Operaciones en Línea",
        "descripcion": "Inicia sesión con tu RUC, usuario y Clave SOL.",
        "institucionNombre": "SUNAT Virtual",
        "institucionUrl": "https://www.sunat.gob.pe",
        "costoTipo": "gratuito",
        "costoMin": 0,
        "costoMax": 0
      },
      {
        "id": "paso-susp-2",
        "orden": 2,
        "modalidad": "online",
        "esOpcional": false,
        "titulo": "Llenar el Formulario Virtual 1609",
        "descripcion": "Coloca la fecha en la que comenzaste a percibir ingresos en el año y el monto proyectado.",
        "costoTipo": "gratuito",
        "costoMin": 0,
        "costoMax": 0
      },
      {
        "id": "paso-susp-3",
        "orden": 3,
        "modalidad": "online",
        "esOpcional": false,
        "titulo": "Guardar la constancia de suspensión",
        "descripcion": "El sistema emite la constancia con resultado \"Autorizado\". Envíala a tus clientes para que no te apliquen la retención del 8%.",
        "costoTipo": "gratuito",
        "costoMin": 0,
        "costoMax": 0
      }
    ],
    "canalesPago": []
  },
  {
    "id": "tram-revalidacion-brevete",
    "slug": "revalidacion-licencia-conducir-a1",
    "nombre": "Revalidación de Licencia de Conducir Clase A-1 (Brevete)",
    "nombreCorto": "Revalidar Brevete A-1",
    "subgrupo": "LICENCIAS",
    "descripcion": "Renueva tu brevete particular antes o después de su vencimiento para mantener tu récord limpio y habilitación legal de conducción sin rendir examen de manejo. El costo de emisión varía según tu región.",
    "categoriaId": "cat-2",
    "categoria": {
      "id": "cat-2",
      "slug": "vehicular-transporte",
      "nombre": "Vehicular y Transporte",
      "descripcion": "Brevete, récord de conductor, placas, SOAT y transferencias de vehículos.",
      "icono": "DirectionsCarOutlined"
    },
    "institucionId": "inst-mtc",
    "institucion": {
      "id": "inst-mtc",
      "slug": "mtc",
      "nombre": "Ministerio de Transportes y Comunicaciones",
      "sigla": "MTC",
      "tipo": "nacional",
      "webOficial": "https://www.gob.pe/mtc",
      "descripcion": "Regulación y emisión de licencias de conducir, transporte terrestre y comunicaciones.",
      "logoIniciales": "MT"
    },
    "esCompuesto": false,
    "esRecurrente": true,
    "modalidadPrincipal": "mixta",
    "duracionMinDias": 1,
    "duracionMaxDias": 3,
    "duracionTexto": "1 a 3 días hábiles (tras examen médico)",
    "tipoResultado": "licencia",
    "vigenciaResultadoDias": 1825,
    "vigenciaTexto": "5 a 10 años (según récord de infracciones)",
    "ultimaVerificacion": "2026-09-24",
    "fuenteUrl": "https://www.gob.pe/338-revalidar-la-licencia-de-conducir-clase-a-categoria-i",
    "frecuenciaBusqueda": 9700,
    "costoResumen": "Varía por región + Examen Médico (S/ 150 a S/ 250)",
    "costoPrincipal": 6.7,
    "baseLegal": "D.S. N° 007-2016-MTC y modificatorias - Sistema Nacional de Emisión de Licencias.",
    "tags": [
      "revalidar brevete",
      "renovar brevete",
      "mtc",
      "licencia a1",
      "examen medico mtc",
      "drtc"
    ],
    "regionesPago": [
      {
        "id": "rp-rev-lima",
        "region": "Lima Metropolitana",
        "institucionEjecutora": "MTC Lima",
        "codigoPagalo": "01602 (Electrónica) / 01601 (Física)",
        "conceptos": [
          {
            "concepto": "Emisión electrónica (Cód. 01602)",
            "monto": 6.7
          },
          {
            "concepto": "Emisión física (Cód. 01601)",
            "monto": 14.8
          }
        ],
        "costoTotal": 6.7
      },
      {
        "id": "rp-rev-hco",
        "region": "Huánuco",
        "institucionEjecutora": "DRTC Huánuco",
        "codigoPagalo": "06078",
        "conceptos": [
          {
            "concepto": "Revalidación de licencia de conducir",
            "monto": 0
          }
        ],
        "costoTotal": 0,
        "sedeExamenes": "Sede DRTC Huánuco"
      },
      {
        "id": "rp-rev-caj",
        "region": "Cajamarca",
        "institucionEjecutora": "DRTC Cajamarca",
        "codigoPagalo": "07628 (Electrónica) / 07623 (Física)",
        "conceptos": [
          {
            "concepto": "Revalidación Licencia Electrónica (Cód. 07628)",
            "monto": 0
          },
          {
            "concepto": "Revalidación Licencia Física (Cód. 07623)",
            "monto": 0
          }
        ],
        "costoTotal": 0,
        "sedeExamenes": "Sede DRTC Cajamarca"
      },
      {
        "id": "rp-rev-jun",
        "region": "Junín",
        "institucionEjecutora": "DRTC Junín",
        "codigoPagalo": "09468",
        "conceptos": [
          {
            "concepto": "Licencias de Conducir (Cód. 09468)",
            "monto": 0
          }
        ],
        "costoTotal": 0,
        "sedeExamenes": "Sede DRTC Junín"
      },
      {
        "id": "rp-rev-piu",
        "region": "Piura",
        "institucionEjecutora": "DRTC Piura",
        "codigoPagalo": "09393",
        "conceptos": [
          {
            "concepto": "Licencia de Conducir (Cód. 09393)",
            "monto": 0
          }
        ],
        "costoTotal": 0,
        "sedeExamenes": "Sede DRTC Piura"
      },
      {
        "id": "rp-rev-callao",
        "region": "Callao",
        "institucionEjecutora": "GRTC Callao",
        "codigoPagalo": "09421",
        "conceptos": [
          {
            "concepto": "Licencia de Conducir (Cód. 09421)",
            "monto": 0
          }
        ],
        "costoTotal": 0,
        "sistemaCitas": {
          "nombre": "Citas GORE Callao",
          "nota": "Atención sujeta a programación previa del gobierno regional"
        }
      },
      {
        "id": "rp-rev-otros",
        "region": "Demás departamentos (Trámite Presencial)",
        "institucionEjecutora": "DRTC Regional correspondiente",
        "codigoPagalo": "Presencial en ventanilla Banco de la Nación / DRTC",
        "conceptos": [
          {
            "concepto": "Tasas de revalidación según TUPA regional",
            "monto": 0
          }
        ],
        "costoTotal": 0,
        "sedeExamenes": "Sede DRTC de tu gobierno regional"
      }
    ],
    "requisitos": [
      {
        "id": "req-rev-1",
        "descripcion": "DNI o Carné de Extranjería vigente.",
        "orden": 1
      },
      {
        "id": "req-rev-2",
        "descripcion": "Certificado de aptitud médica psicosomática aprobado en un centro autorizado por el MTC.",
        "orden": 2
      },
      {
        "id": "req-rev-3",
        "descripcion": "No contar con sanciones ni multas electorales o de tránsito pendientes de pago.",
        "orden": 3
      },
      {
        "id": "req-rev-4",
        "descripcion": "No estar inhabilitado ni suspendido para conducir en el Registro Nacional de Sanciones.",
        "orden": 4
      }
    ],
    "pasos": [
      {
        "id": "paso-rev-1",
        "orden": 1,
        "modalidad": "presencial",
        "esOpcional": false,
        "titulo": "Examen médico psicosomático",
        "descripcion": "Aprueba el examen médico en un centro autorizado por el MTC (costo variable entre S/ 150 y S/ 250 según centro privado). El resultado se registra en el sistema del MTC.",
        "institucionNombre": "Centro Médico Autorizado MTC",
        "costoTipo": "rango",
        "costoMin": 150,
        "costoMax": 250,
        "ubicacion": "Centros médicos autorizados a nivel nacional"
      },
      {
        "id": "paso-rev-2",
        "orden": 2,
        "modalidad": "online",
        "esOpcional": false,
        "titulo": "Pago de tasa de emisión en Págalo.pe",
        "descripcion": "Paga la tasa de revalidación con el código de tu región en Págalo.pe o Banco de la Nación (consulta el desglose en el selector de región arriba).",
        "institucionNombre": "Banco de la Nación / Págalo.pe",
        "institucionUrl": "https://www.pagalo.pe/",
        "costoTipo": "variable",
        "costoMin": 0,
        "costoMax": 0
      },
      {
        "id": "paso-rev-3",
        "orden": 3,
        "modalidad": "online",
        "esOpcional": false,
        "titulo": "Solicitud virtual o recojo presencial",
        "descripcion": "Ingresa a la casilla electrónica del MTC (licencias.mtc.gob.pe) para descargar tu brevete electrónico en PDF o programa el recojo de tu tarjeta física en un centro MAC o sede MTC.",
        "institucionNombre": "MTC / Centros MAC",
        "costoTipo": "gratuito",
        "costoMin": 0,
        "costoMax": 0
      }
    ],
    "canalesPago": [
      {
        "id": "cp-pagalo",
        "nombre": "Págalo.pe (código según tu región)",
        "tipo": "online"
      },
      {
        "id": "cp-bn",
        "nombre": "Banco de la Nación (código según tu región)",
        "tipo": "agencia"
      }
    ]
  },
  {
    "id": "tram-duplicado-brevete",
    "slug": "duplicado-licencia-conducir-a1",
    "nombre": "Duplicado de Licencia de Conducir Clase A-1 por Pérdida o Deterioro",
    "nombreCorto": "Duplicado de Brevete",
    "subgrupo": "LICENCIAS",
    "descripcion": "Obtén un nuevo ejemplar oficial de tu brevete vigente en formato digital o físico en caso de robo, pérdida o deterioro del documento. El costo varía según tu región.",
    "categoriaId": "cat-2",
    "categoria": {
      "id": "cat-2",
      "slug": "vehicular-transporte",
      "nombre": "Vehicular y Transporte",
      "descripcion": "Brevete, récord de conductor, placas, SOAT y transferencias de vehículos.",
      "icono": "DirectionsCarOutlined"
    },
    "institucionId": "inst-mtc",
    "institucion": {
      "id": "inst-mtc",
      "slug": "mtc",
      "nombre": "Ministerio de Transportes y Comunicaciones",
      "sigla": "MTC",
      "tipo": "nacional",
      "webOficial": "https://www.gob.pe/mtc",
      "descripcion": "Regulación y emisión de licencias de conducir, transporte terrestre y comunicaciones.",
      "logoIniciales": "MT"
    },
    "esCompuesto": false,
    "esRecurrente": false,
    "modalidadPrincipal": "online",
    "duracionMinDias": 0,
    "duracionMaxDias": 2,
    "duracionTexto": "Inmediato (digital) o 24-48 horas (físico)",
    "tipoResultado": "licencia",
    "vigenciaResultadoDias": 1825,
    "vigenciaTexto": "Mantiene la fecha de caducidad de la licencia original",
    "ultimaVerificacion": "2026-09-24",
    "fuenteUrl": "https://www.gob.pe/339-duplicado-de-licencia-de-conducir-clase-a",
    "frecuenciaBusqueda": 8900,
    "costoResumen": "Varía por región (desde S/ 6.70 electrónica)",
    "costoPrincipal": 6.7,
    "baseLegal": "D.S. N° 007-2016-MTC.",
    "tags": [
      "duplicado brevete",
      "perdi brevete",
      "duplicado licencia",
      "mtc",
      "robo de brevete",
      "drtc"
    ],
    "regionesPago": [
      {
        "id": "rp-dup-lima",
        "region": "Lima Metropolitana",
        "institucionEjecutora": "MTC Lima",
        "codigoPagalo": "01602 (Electrónica) / 01601 (Física)",
        "conceptos": [
          {
            "concepto": "Emisión electrónica (Cód. 01602)",
            "monto": 6.7
          },
          {
            "concepto": "Emisión física (Cód. 01601)",
            "monto": 14.8
          }
        ],
        "costoTotal": 6.7
      },
      {
        "id": "rp-dup-hco",
        "region": "Huánuco",
        "institucionEjecutora": "DRTC Huánuco",
        "codigoPagalo": "06079",
        "conceptos": [
          {
            "concepto": "Duplicado de licencia de conducir",
            "monto": 0
          }
        ],
        "costoTotal": 0,
        "sedeExamenes": "Sede DRTC Huánuco"
      },
      {
        "id": "rp-dup-caj",
        "region": "Cajamarca",
        "institucionEjecutora": "DRTC Cajamarca",
        "codigoPagalo": "07622 (Electrónica) / 07627 (Física)",
        "conceptos": [
          {
            "concepto": "Duplicado Licencia Electrónica (Cód. 07622)",
            "monto": 0
          },
          {
            "concepto": "Duplicado Licencia Física (Cód. 07627)",
            "monto": 0
          }
        ],
        "costoTotal": 0,
        "sedeExamenes": "Sede DRTC Cajamarca"
      },
      {
        "id": "rp-dup-jun",
        "region": "Junín",
        "institucionEjecutora": "DRTC Junín",
        "codigoPagalo": "09468",
        "conceptos": [
          {
            "concepto": "Licencias de Conducir (Cód. 09468)",
            "monto": 0
          }
        ],
        "costoTotal": 0,
        "sedeExamenes": "Sede DRTC Junín"
      },
      {
        "id": "rp-dup-piu",
        "region": "Piura",
        "institucionEjecutora": "DRTC Piura",
        "codigoPagalo": "09393",
        "conceptos": [
          {
            "concepto": "Licencia de Conducir (Cód. 09393)",
            "monto": 0
          }
        ],
        "costoTotal": 0,
        "sedeExamenes": "Sede DRTC Piura"
      },
      {
        "id": "rp-dup-callao",
        "region": "Callao",
        "institucionEjecutora": "GRTC Callao",
        "codigoPagalo": "09459",
        "conceptos": [
          {
            "concepto": "Duplicado de Licencia de Conducir (Cód. 09459)",
            "monto": 0
          }
        ],
        "costoTotal": 0,
        "sistemaCitas": {
          "nombre": "Citas GORE Callao",
          "nota": "Atención sujeta a programación previa del gobierno regional"
        }
      },
      {
        "id": "rp-dup-otros",
        "region": "Demás departamentos (Trámite Presencial)",
        "institucionEjecutora": "DRTC Regional correspondiente",
        "codigoPagalo": "Presencial en ventanilla Banco de la Nación / DRTC",
        "conceptos": [
          {
            "concepto": "Tasas de duplicado según TUPA regional",
            "monto": 0
          }
        ],
        "costoTotal": 0,
        "sedeExamenes": "Sede DRTC de tu gobierno regional"
      }
    ],
    "requisitos": [
      {
        "id": "req-dup-brev-1",
        "descripcion": "DNI o carné de extranjería vigente.",
        "orden": 1
      },
      {
        "id": "req-dup-brev-2",
        "descripcion": "Licencia de conducir vigente (no caducada ni suspendida).",
        "orden": 2
      },
      {
        "id": "req-dup-brev-3",
        "descripcion": "No tener multas ni sanciones pendientes en el Sistema de Conductores.",
        "orden": 3
      },
      {
        "id": "req-dup-brev-4",
        "descripcion": "Denuncia policial digital por pérdida o robo (recomendada).",
        "orden": 4
      }
    ],
    "pasos": [
      {
        "id": "paso-dup-brev-1",
        "orden": 1,
        "modalidad": "online",
        "esOpcional": false,
        "titulo": "Pagar la tasa en Págalo.pe",
        "descripcion": "Abona la tasa de duplicado con el código de tu región en Págalo.pe o Banco de la Nación (consulta el desglose en el selector de región arriba).",
        "institucionNombre": "Págalo.pe / Banco de la Nación",
        "institucionUrl": "https://www.pagalo.pe/",
        "costoTipo": "variable",
        "costoMin": 0,
        "costoMax": 0
      },
      {
        "id": "paso-dup-brev-2",
        "orden": 2,
        "modalidad": "online",
        "esOpcional": false,
        "titulo": "Registrar la solicitud en el portal del MTC",
        "descripcion": "Ingresa a licencias.mtc.gob.pe, valida tu identidad, selecciona la opción Duplicado e ingresa los datos de tu comprobante de pago.",
        "institucionNombre": "MTC",
        "costoTipo": "gratuito",
        "costoMin": 0,
        "costoMax": 0
      },
      {
        "id": "paso-dup-brev-3",
        "orden": 3,
        "modalidad": "online",
        "esOpcional": false,
        "titulo": "Descarga inmediata o entrega en ventanilla",
        "descripcion": "Si elegiste la versión electrónica, se envía a tu casilla virtual para descarga instantánea. Si elegiste física, retírala en la sede seleccionada.",
        "institucionNombre": "MTC / Centros MAC",
        "costoTipo": "gratuito",
        "costoMin": 0,
        "costoMax": 0
      }
    ],
    "canalesPago": [
      {
        "id": "cp-pagalo",
        "nombre": "Págalo.pe (código según tu región)",
        "tipo": "online"
      },
      {
        "id": "cp-bn",
        "nombre": "Banco de la Nación (código según tu región)",
        "tipo": "agencia"
      }
    ]
  },
  {
    "id": "tram-recibo-honorarios",
    "slug": "emision-recibos-honorarios-electronicos",
    "nombre": "Emisión de Recibos por Honorarios Electrónicos (RHE)",
    "nombreCorto": "Recibos por Honorarios",
    "subgrupo": "COMPROBANTES Y RUC",
    "descripcion": "Emite comprobantes de pago digitales oficiales para sustentar ingresos de cuarta categoría por servicios profesionales o técnicos independientes.",
    "categoriaId": "cat-3",
    "categoria": {
      "id": "cat-3",
      "slug": "tributos-empresas",
      "nombre": "Tributos y RUC",
      "descripcion": "Inscripción RUC, Clave SOL, declaración de impuestos y constitución empresarial.",
      "icono": "AccountBalanceOutlined"
    },
    "institucionId": "inst-sunat",
    "institucion": {
      "id": "inst-sunat",
      "slug": "sunat",
      "nombre": "Superintendencia Nacional de Aduanas y de Administración Tributaria",
      "sigla": "SUNAT",
      "tipo": "nacional",
      "webOficial": "https://www.sunat.gob.pe",
      "descripcion": "Administración de tributos internos, RUC, comprobantes de pago e impuestos aduaneros.",
      "logoIniciales": "SN"
    },
    "esCompuesto": false,
    "esRecurrente": true,
    "modalidadPrincipal": "online",
    "duracionMinDias": 0,
    "duracionMaxDias": 0,
    "duracionTexto": "Inmediato (100% digital)",
    "tipoResultado": "documento_digital",
    "vigenciaResultadoDias": null,
    "vigenciaTexto": "Válido tributariamente de forma permanente",
    "ultimaVerificacion": "2026-09-24",
    "fuenteUrl": "https://www.gob.pe/649-emitir-recibo-por-honorarios-electronico-rhe",
    "frecuenciaBusqueda": 9800,
    "costoResumen": "Totalmente Gratuito (S/ 0.00)",
    "costoPrincipal": 0,
    "baseLegal": "Resolución de Superintendencia N° 182-2008/SUNAT y normas de comprobantes de pago.",
    "tags": [
      "recibo por honorarios",
      "rhe",
      "sunat",
      "cuarta categoria",
      "clave sol",
      "facturar"
    ],
    "requisitos": [
      {
        "id": "req-rhe-1",
        "descripcion": "RUC de persona natural activo y habido con afectación a renta de 4ta categoría.",
        "orden": 1
      },
      {
        "id": "req-rhe-2",
        "descripcion": "Clave SOL activa (usuario y contraseña o acceso con DNI).",
        "orden": 2
      },
      {
        "id": "req-rhe-3",
        "descripcion": "Datos del cliente o empresa contratante (número de RUC o DNI, nombre o razón social).",
        "orden": 3
      },
      {
        "id": "req-rhe-4",
        "descripcion": "Descripción detallada del servicio prestado, moneda y monto acordado.",
        "orden": 4
      }
    ],
    "pasos": [
      {
        "id": "paso-rhe-1",
        "orden": 1,
        "modalidad": "online",
        "esOpcional": false,
        "titulo": "Ingresar a SUNAT Operaciones en Línea o App Personas",
        "descripcion": "Accede a la plataforma web de SUNAT con tu RUC, usuario y Clave SOL, o mediante la App Personas SUNAT desde tu celular.",
        "institucionNombre": "SUNAT",
        "costoTipo": "gratuito",
        "costoMin": 0,
        "costoMax": 0
      },
      {
        "id": "paso-rhe-2",
        "orden": 2,
        "modalidad": "online",
        "esOpcional": false,
        "titulo": "Completar datos del servicio y monto",
        "descripcion": "Selecciona \"Comprobantes de Pago\" > \"SEE - SOL\" > \"Emitir Recibo por Honorarios Electrónico\". Ingresa el RUC del pagador, forma de pago (al contado o al crédito) y la retención del 8% si aplica.",
        "institucionNombre": "SUNAT",
        "costoTipo": "gratuito",
        "costoMin": 0,
        "costoMax": 0
      },
      {
        "id": "paso-rhe-3",
        "orden": 3,
        "modalidad": "online",
        "esOpcional": false,
        "titulo": "Generar y enviar comprobante en PDF",
        "descripcion": "Revisa la vista previa y haz clic en \"Emitir Recibo\". Puedes descargarlo en PDF, imprimirlo o enviarlo directamente al correo del empleador.",
        "institucionNombre": "SUNAT",
        "costoTipo": "gratuito",
        "costoMin": 0,
        "costoMax": 0
      }
    ],
    "canalesPago": []
  },
  {
    "id": "tram-ficha-ruc-digital",
    "slug": "consulta-ruc-ficha-ruc-digital",
    "nombre": "Consulta RUC y Descarga de Ficha RUC Digital Certificada",
    "nombreCorto": "Ficha RUC Digital",
    "subgrupo": "COMPROBANTES Y RUC",
    "descripcion": "Verifica el estado activo y condición de habido de cualquier contribuyente o descarga tu Ficha RUC oficial en PDF con código QR para trámites bancarios, alquileres o comerciales.",
    "categoriaId": "cat-3",
    "categoria": {
      "id": "cat-3",
      "slug": "tributos-empresas",
      "nombre": "Tributos y RUC",
      "descripcion": "Inscripción RUC, Clave SOL, declaración de impuestos y constitución empresarial.",
      "icono": "AccountBalanceOutlined"
    },
    "institucionId": "inst-sunat",
    "institucion": {
      "id": "inst-sunat",
      "slug": "sunat",
      "nombre": "Superintendencia Nacional de Aduanas y de Administración Tributaria",
      "sigla": "SUNAT",
      "tipo": "nacional",
      "webOficial": "https://www.sunat.gob.pe",
      "descripcion": "Administración de tributos internos, RUC, comprobantes de pago e impuestos aduaneros.",
      "logoIniciales": "SN"
    },
    "esCompuesto": false,
    "esRecurrente": false,
    "modalidadPrincipal": "online",
    "duracionMinDias": 0,
    "duracionMaxDias": 0,
    "duracionTexto": "Inmediato (100% digital)",
    "tipoResultado": "documento_digital",
    "vigenciaResultadoDias": null,
    "vigenciaTexto": "Información en tiempo real",
    "ultimaVerificacion": "2026-09-24",
    "fuenteUrl": "https://e-consultaruc.sunat.gob.pe/",
    "frecuenciaBusqueda": 9200,
    "costoResumen": "Totalmente Gratuito (S/ 0.00)",
    "costoPrincipal": 0,
    "baseLegal": "Código Tributario y Ley del Registro Único de Contribuyentes.",
    "tags": [
      "consulta ruc",
      "ficha ruc",
      "sunat",
      "estado ruc",
      "habido ruc",
      "descargar ruc"
    ],
    "requisitos": [
      {
        "id": "req-fruc-1",
        "descripcion": "Número de RUC, DNI o razón social a consultar.",
        "orden": 1
      },
      {
        "id": "req-fruc-2",
        "descripcion": "Clave SOL (solo requerida para descargar la Ficha RUC con datos completos y código QR).",
        "orden": 2
      }
    ],
    "pasos": [
      {
        "id": "paso-fruc-1",
        "orden": 1,
        "modalidad": "online",
        "esOpcional": false,
        "titulo": "Consulta pública o acceso con Clave SOL",
        "descripcion": "Para consulta básica ingresa al portal Consulta RUC libre. Para descargar la Ficha RUC oficial con código de verificación QR, ingresa con tu Clave SOL.",
        "institucionNombre": "SUNAT",
        "costoTipo": "gratuito",
        "costoMin": 0,
        "costoMax": 0
      },
      {
        "id": "paso-fruc-2",
        "orden": 2,
        "modalidad": "online",
        "esOpcional": false,
        "titulo": "Descarga del documento en PDF",
        "descripcion": "Haz clic en \"Descargar Ficha RUC\". El archivo generado contiene tu domicilio fiscal, actividad económica (CIIU) y regímenes tributarios vigentes.",
        "institucionNombre": "SUNAT",
        "costoTipo": "gratuito",
        "costoMin": 0,
        "costoMax": 0
      }
    ],
    "canalesPago": []
  },
  {
    "id": "tram-antecedentes-judiciales",
    "slug": "certificado-antecedentes-judiciales-inpe",
    "nombre": "Certificado Electrónico de Antecedentes Judiciales (INPE)",
    "nombreCorto": "Antecedentes Judiciales",
    "subgrupo": "CERTIFICADOS",
    "descripcion": "Certificado oficial emitido por el INPE que acredita si una persona registra antecedentes por internamiento penitenciario o condenas en establecimientos carcelarios del Perú.",
    "categoriaId": "cat-4",
    "categoria": {
      "id": "cat-4",
      "slug": "empleo-certificados",
      "nombre": "Empleo y Certificados",
      "descripcion": "Certificado Único Laboral, antecedentes policiales, penales y judiciales.",
      "icono": "WorkOutlineOutlined"
    },
    "institucionId": "inst-inpe",
    "institucion": {
      "id": "inst-inpe",
      "slug": "inpe",
      "nombre": "Instituto Nacional Penitenciario",
      "sigla": "INPE",
      "tipo": "nacional",
      "webOficial": "https://www.gob.pe/inpe",
      "descripcion": "Gestión penitenciaria y emisión digital del Certificado de Antecedentes Judiciales.",
      "logoIniciales": "INP"
    },
    "esCompuesto": false,
    "esRecurrente": false,
    "modalidadPrincipal": "online",
    "duracionMinDias": 0,
    "duracionMaxDias": 1,
    "duracionTexto": "Inmediato a 24 horas",
    "tipoResultado": "documento_digital",
    "vigenciaResultadoDias": 90,
    "vigenciaTexto": "3 meses (90 días calendario)",
    "ultimaVerificacion": "2026-09-24",
    "fuenteUrl": "https://www.gob.pe/735-obtener-certificado-electronico-de-antecedentes-judiciales",
    "frecuenciaBusqueda": 8600,
    "costoResumen": "S/ 37.70 (Tasa INPE oficial 2026)",
    "costoPrincipal": 37.7,
    "baseLegal": "Código de Ejecución Penal - D.L. N° 654 y TUPA INPE.",
    "tags": [
      "antecedentes judiciales",
      "inpe",
      "carcel",
      "penal",
      "certificado judicial"
    ],
    "requisitos": [
      {
        "id": "req-jud-1",
        "descripcion": "DNI o Carné de Extranjería vigente.",
        "orden": 1
      },
      {
        "id": "req-jud-2",
        "descripcion": "Pago de la tasa de S/ 37.70 en Págalo.pe o Banco de la Nación con código 01083.",
        "orden": 2
      },
      {
        "id": "req-jud-3",
        "descripcion": "Correo electrónico y número de celular para la recepción del certificado con código de verificación.",
        "orden": 3
      }
    ],
    "pasos": [
      {
        "id": "paso-jud-1",
        "orden": 1,
        "modalidad": "online",
        "esOpcional": false,
        "titulo": "Pago de la tasa de S/ 37.70",
        "descripcion": "Ingresa a Págalo.pe o acude a una agencia del Banco de la Nación y paga con el código 01083 (Certificado Electrónico de Antecedentes Judiciales).",
        "institucionNombre": "Págalo.pe / Banco de la Nación",
        "institucionUrl": "https://www.pagalo.pe/",
        "costoTipo": "fijo",
        "costoMin": 37.7,
        "costoMax": 37.7
      },
      {
        "id": "paso-jud-2",
        "orden": 2,
        "modalidad": "online",
        "esOpcional": false,
        "titulo": "Registro de solicitud en portal del INPE",
        "descripcion": "Entra a la plataforma de Antecedentes Judiciales del INPE (gob.pe/inpe), digita tu DNI y los códigos del voucher de pago (secuencia, fecha y cajero).",
        "institucionNombre": "INPE",
        "costoTipo": "gratuito",
        "costoMin": 0,
        "costoMax": 0
      },
      {
        "id": "paso-jud-3",
        "orden": 3,
        "modalidad": "online",
        "esOpcional": false,
        "titulo": "Descarga inmediata del certificado PDF",
        "descripcion": "El sistema valida la información con RENIEC y genera de inmediato el documento en formato PDF con firma digital y código de validación QR.",
        "institucionNombre": "INPE",
        "costoTipo": "gratuito",
        "costoMin": 0,
        "costoMax": 0
      }
    ],
    "canalesPago": [
      {
        "id": "cp-pagalo",
        "nombre": "Págalo.pe (Cód. 01083)",
        "tipo": "online"
      },
      {
        "id": "cp-bn",
        "nombre": "Banco de la Nación (Cód. 01083)",
        "tipo": "agencia"
      }
    ]
  },
  {
    "id": "tram-carne-extranjeria",
    "slug": "carne-extranjeria",
    "nombre": "Carné de Extranjería (obtención)",
    "nombreCorto": "Carné de Extranjería",
    "subgrupo": "IDENTIDAD Y DOCUMENTOS",
    "descripcion": "Carné de Extranjería (obtención) emitido por Superintendencia Nacional de Migraciones. Consulta costos oficiales, pasos detallados y requisitos actualizados.",
    "categoriaId": "cat-1",
    "categoria": {
      "id": "cat-1",
      "slug": "identidad-documentos",
      "nombre": "Identidad y Documentos",
      "descripcion": "DNI, pasaportes, partidas de nacimiento y trámites de filiación oficial.",
      "icono": "BadgeOutlined"
    },
    "institucionId": "inst-migraciones",
    "institucion": {
      "id": "inst-migraciones",
      "slug": "migraciones",
      "nombre": "Superintendencia Nacional de Migraciones",
      "sigla": "MIGRACIONES",
      "tipo": "nacional",
      "webOficial": "https://www.gob.pe/migraciones",
      "descripcion": "Control migratorio y emisión de pasaportes electrónicos y permisos de viaje.",
      "logoIniciales": "MG"
    },
    "esCompuesto": false,
    "esRecurrente": false,
    "modalidadPrincipal": "presencial",
    "duracionMinDias": 1,
    "duracionMaxDias": 5,
    "duracionTexto": "1 a 5 días hábiles",
    "tipoResultado": "documento_digital",
    "vigenciaResultadoDias": null,
    "vigenciaTexto": "Vigencia indeterminada",
    "ultimaVerificacion": "2026-09-28",
    "fuenteUrl": "https://www.gob.pe/migraciones",
    "frecuenciaBusqueda": 7500,
    "costoResumen": "S/ 38.14",
    "costoPrincipal": 38.14,
    "baseLegal": "Procedimiento tramitado bajo normativa vigente de MIGRACIONES y Compendio Oficial del Estado Peruano.",
    "tags": [
      "carne extranjeria",
      "migraciones",
      "identidad y documentos",
      "tramite oficial",
      "peru",
      "2026"
    ],
    "requisitos": [
      {
        "id": "req-carne-extranjeria-1",
        "descripcion": "Documento Nacional de Identidad (DNI) vigente o carné de extranjería.",
        "aplicaSi": "general",
        "orden": 1
      },
      {
        "id": "req-carne-extranjeria-2",
        "descripcion": "Comprobante de pago de la tasa oficial (S/ 38.14).",
        "aplicaSi": "general",
        "orden": 2
      }
    ],
    "pasos": [
      {
        "id": "paso-carne-extranjeria-1",
        "orden": 1,
        "modalidad": "presencial",
        "esOpcional": false,
        "titulo": "Solicitar cita en migraciones.gob.pe",
        "descripcion": "Solicitar cita en migraciones.gob.pe",
        "institucionNombre": "MIGRACIONES",
        "institucionUrl": "https://www.gob.pe/migraciones",
        "costoTipo": "gratuito",
        "costoMin": 0,
        "costoMax": 0
      },
      {
        "id": "paso-carne-extranjeria-2",
        "orden": 2,
        "modalidad": "presencial",
        "esOpcional": false,
        "titulo": "Presentar pasaporte vigente y documentación migratoria",
        "descripcion": "Presentar pasaporte vigente y documentación migratoria",
        "institucionNombre": "MIGRACIONES",
        "institucionUrl": "https://www.gob.pe/migraciones",
        "costoTipo": "gratuito",
        "costoMin": 0,
        "costoMax": 0
      },
      {
        "id": "paso-carne-extranjeria-3",
        "orden": 3,
        "modalidad": "presencial",
        "esOpcional": false,
        "titulo": "Pagar tasa en Banco de la Nación",
        "descripcion": "Pagar tasa en Banco de la Nación",
        "institucionNombre": "MIGRACIONES",
        "institucionUrl": "https://www.gob.pe/migraciones",
        "costoTipo": "fijo",
        "costoMin": 38.14,
        "costoMax": 38.14
      },
      {
        "id": "paso-carne-extranjeria-4",
        "orden": 4,
        "modalidad": "presencial",
        "esOpcional": false,
        "titulo": "Entrega en sede Migraciones",
        "descripcion": "Entrega en sede Migraciones",
        "institucionNombre": "MIGRACIONES",
        "institucionUrl": "https://www.gob.pe/migraciones",
        "costoTipo": "gratuito",
        "costoMin": 0,
        "costoMax": 0
      }
    ],
    "canalesPago": [
      {
        "id": "cp-carne-extranjeria-1",
        "nombre": "Págalo.pe (Banco de la Nación)",
        "tipo": "online"
      },
      {
        "id": "cp-carne-extranjeria-2",
        "nombre": "Agencias y Agentes del Banco de la Nación",
        "tipo": "agencia"
      }
    ]
  },
  {
    "id": "tram-revision-tecnica-vehicular",
    "slug": "revision-tecnica-vehicular",
    "nombre": "Revisión Técnica Vehicular (RTV)",
    "nombreCorto": "Revisión Técnica Vehicular",
    "subgrupo": "VEHICULAR Y TRANSPORTE",
    "descripcion": "Revisión Técnica Vehicular (RTV) emitido por Ministerio de Transportes y Comunicaciones. Consulta costos oficiales, pasos detallados y requisitos actualizados.",
    "categoriaId": "cat-2",
    "categoria": {
      "id": "cat-2",
      "slug": "vehicular-transporte",
      "nombre": "Vehicular y Transporte",
      "descripcion": "Brevete, récord de conductor, placas, SOAT y transferencias de vehículos.",
      "icono": "DirectionsCarOutlined"
    },
    "institucionId": "inst-mtc",
    "institucion": {
      "id": "inst-mtc",
      "slug": "mtc",
      "nombre": "Ministerio de Transportes y Comunicaciones",
      "sigla": "MTC",
      "tipo": "nacional",
      "webOficial": "https://www.gob.pe/mtc",
      "descripcion": "Regulación y emisión de licencias de conducir, transporte terrestre y comunicaciones.",
      "logoIniciales": "MT"
    },
    "esCompuesto": false,
    "esRecurrente": false,
    "modalidadPrincipal": "presencial",
    "duracionMinDias": 0,
    "duracionMaxDias": 0,
    "duracionTexto": "Inmediato (en el acto)",
    "tipoResultado": "documento_digital",
    "vigenciaResultadoDias": null,
    "vigenciaTexto": "Vigencia indeterminada",
    "ultimaVerificacion": "2026-09-28",
    "fuenteUrl": "https://www.gob.pe/mtc",
    "frecuenciaBusqueda": 7500,
    "costoResumen": "S/ 70.00 a S/ 150.00 (variable)",
    "costoPrincipal": 70,
    "baseLegal": "Procedimiento tramitado bajo normativa vigente de MTC y Compendio Oficial del Estado Peruano.",
    "tags": [
      "revision tecnica vehicular",
      "mtc",
      "vehicular y transporte",
      "tramite oficial",
      "peru",
      "2026"
    ],
    "requisitos": [
      {
        "id": "req-revision-tecnica-vehicular-1",
        "descripcion": "Documento Nacional de Identidad (DNI) vigente o carné de extranjería.",
        "aplicaSi": "general",
        "orden": 1
      },
      {
        "id": "req-revision-tecnica-vehicular-2",
        "descripcion": "Comprobante de pago de la tasa oficial (S/ 70.00 a S/ 150.00 (variable)).",
        "aplicaSi": "general",
        "orden": 2
      }
    ],
    "pasos": [
      {
        "id": "paso-revision-tecnica-vehicular-1",
        "orden": 1,
        "modalidad": "presencial",
        "esOpcional": false,
        "titulo": "Programar cita en planta de revisión técnica autorizada",
        "descripcion": "Programar cita en planta de revisión técnica autorizada",
        "institucionNombre": "MTC",
        "institucionUrl": "https://www.gob.pe/mtc",
        "costoTipo": "gratuito",
        "costoMin": 0,
        "costoMax": 0
      },
      {
        "id": "paso-revision-tecnica-vehicular-2",
        "orden": 2,
        "modalidad": "presencial",
        "esOpcional": false,
        "titulo": "Presentar vehículo para inspección física",
        "descripcion": "Presentar vehículo para inspección física",
        "institucionNombre": "MTC",
        "institucionUrl": "https://www.gob.pe/mtc",
        "costoTipo": "gratuito",
        "costoMin": 0,
        "costoMax": 0
      },
      {
        "id": "paso-revision-tecnica-vehicular-3",
        "orden": 3,
        "modalidad": "presencial",
        "esOpcional": false,
        "titulo": "Pagar tasa en la planta",
        "descripcion": "Pagar tasa en la planta",
        "institucionNombre": "MTC",
        "institucionUrl": "https://www.gob.pe/mtc",
        "costoTipo": "fijo",
        "costoMin": 70,
        "costoMax": 70
      },
      {
        "id": "paso-revision-tecnica-vehicular-4",
        "orden": 4,
        "modalidad": "presencial",
        "esOpcional": false,
        "titulo": "Recibir certificado si el vehículo aprueba",
        "descripcion": "Recibir certificado si el vehículo aprueba — válido 1 o 2 años según tipo",
        "institucionNombre": "MTC",
        "institucionUrl": "https://www.gob.pe/mtc",
        "costoTipo": "gratuito",
        "costoMin": 0,
        "costoMax": 0
      }
    ],
    "canalesPago": [
      {
        "id": "cp-revision-tecnica-vehicular-1",
        "nombre": "Págalo.pe (Banco de la Nación)",
        "tipo": "online"
      },
      {
        "id": "cp-revision-tecnica-vehicular-2",
        "nombre": "Agencias y Agentes del Banco de la Nación",
        "tipo": "agencia"
      }
    ]
  },
  {
    "id": "tram-soat",
    "slug": "soat",
    "nombre": "Obtención de SOAT",
    "nombreCorto": "Obtención de SOAT",
    "subgrupo": "VEHICULAR Y TRANSPORTE",
    "descripcion": "Obtención de SOAT emitido por Ministerio de Transportes y Comunicaciones. Consulta costos oficiales, pasos detallados y requisitos actualizados.",
    "categoriaId": "cat-2",
    "categoria": {
      "id": "cat-2",
      "slug": "vehicular-transporte",
      "nombre": "Vehicular y Transporte",
      "descripcion": "Brevete, récord de conductor, placas, SOAT y transferencias de vehículos.",
      "icono": "DirectionsCarOutlined"
    },
    "institucionId": "inst-mtc",
    "institucion": {
      "id": "inst-mtc",
      "slug": "mtc",
      "nombre": "Ministerio de Transportes y Comunicaciones",
      "sigla": "MTC",
      "tipo": "nacional",
      "webOficial": "https://www.gob.pe/mtc",
      "descripcion": "Regulación y emisión de licencias de conducir, transporte terrestre y comunicaciones.",
      "logoIniciales": "MT"
    },
    "esCompuesto": false,
    "esRecurrente": false,
    "modalidadPrincipal": "online",
    "duracionMinDias": 0,
    "duracionMaxDias": 0,
    "duracionTexto": "Inmediato (en el acto)",
    "tipoResultado": "documento_digital",
    "vigenciaResultadoDias": null,
    "vigenciaTexto": "Vigencia indeterminada",
    "ultimaVerificacion": "2026-09-28",
    "fuenteUrl": "https://www.gob.pe/mtc",
    "frecuenciaBusqueda": 7500,
    "costoResumen": "Totalmente Gratuito (S/ 0.00)",
    "costoPrincipal": 0,
    "baseLegal": "Procedimiento tramitado bajo normativa vigente de MTC y Compendio Oficial del Estado Peruano.",
    "tags": [
      "soat",
      "mtc",
      "vehicular y transporte",
      "tramite oficial",
      "peru",
      "2026"
    ],
    "requisitos": [
      {
        "id": "req-soat-1",
        "descripcion": "Documento Nacional de Identidad (DNI) vigente o carné de extranjería.",
        "aplicaSi": "general",
        "orden": 1
      },
      {
        "id": "req-soat-2",
        "descripcion": "No adeudar multas administrativas asociadas.",
        "aplicaSi": "general",
        "orden": 2
      }
    ],
    "pasos": [
      {
        "id": "paso-soat-1",
        "orden": 1,
        "modalidad": "online",
        "esOpcional": false,
        "titulo": "Ingresar al portal de una aseguradora autorizada (Rímac, Pacífico, etc.) o ",
        "descripcion": "Ingresar al portal de una aseguradora autorizada (Rímac, Pacífico, etc.) o punto de venta",
        "institucionNombre": "MTC",
        "institucionUrl": "https://www.gob.pe/mtc",
        "costoTipo": "gratuito",
        "costoMin": 0,
        "costoMax": 0
      },
      {
        "id": "paso-soat-2",
        "orden": 2,
        "modalidad": "online",
        "esOpcional": false,
        "titulo": "Ingresar datos del vehículo y placa",
        "descripcion": "Ingresar datos del vehículo y placa",
        "institucionNombre": "MTC",
        "institucionUrl": "https://www.gob.pe/mtc",
        "costoTipo": "gratuito",
        "costoMin": 0,
        "costoMax": 0
      },
      {
        "id": "paso-soat-3",
        "orden": 3,
        "modalidad": "presencial",
        "esOpcional": false,
        "titulo": "Pagar en línea o en punto de venta",
        "descripcion": "Pagar en línea o en punto de venta",
        "institucionNombre": "MTC",
        "institucionUrl": "https://www.gob.pe/mtc",
        "costoTipo": "gratuito",
        "costoMin": 0,
        "costoMax": 0
      },
      {
        "id": "paso-soat-4",
        "orden": 4,
        "modalidad": "presencial",
        "esOpcional": false,
        "titulo": "Recibir SOAT digital o físico",
        "descripcion": "Recibir SOAT digital o físico — vigencia 1 año",
        "institucionNombre": "MTC",
        "institucionUrl": "https://www.gob.pe/mtc",
        "costoTipo": "gratuito",
        "costoMin": 0,
        "costoMax": 0
      }
    ],
    "canalesPago": []
  },
  {
    "id": "tram-fraccionamiento-deuda-sunat",
    "slug": "fraccionamiento-deuda-sunat",
    "nombre": "Fraccionamiento de deuda tributaria (SUNAT)",
    "nombreCorto": "Fraccionamiento de deuda tributaria",
    "subgrupo": "TRIBUTOS Y RUC",
    "descripcion": "Fraccionamiento de deuda tributaria (SUNAT) emitido por Superintendencia Nacional de Aduanas y de Administración Tributaria. Consulta costos oficiales, pasos detallados y requisitos actualizados.",
    "categoriaId": "cat-3",
    "categoria": {
      "id": "cat-3",
      "slug": "tributos-empresas",
      "nombre": "Tributos y RUC",
      "descripcion": "Inscripción RUC, Clave SOL, declaración de impuestos y constitución empresarial.",
      "icono": "AccountBalanceOutlined"
    },
    "institucionId": "inst-sunat",
    "institucion": {
      "id": "inst-sunat",
      "slug": "sunat",
      "nombre": "Superintendencia Nacional de Aduanas y de Administración Tributaria",
      "sigla": "SUNAT",
      "tipo": "nacional",
      "webOficial": "https://www.sunat.gob.pe",
      "descripcion": "Administración de tributos internos, RUC, comprobantes de pago e impuestos aduaneros.",
      "logoIniciales": "SN"
    },
    "esCompuesto": false,
    "esRecurrente": false,
    "modalidadPrincipal": "online",
    "duracionMinDias": 1,
    "duracionMaxDias": 5,
    "duracionTexto": "1 a 5 días hábiles",
    "tipoResultado": "documento_digital",
    "vigenciaResultadoDias": null,
    "vigenciaTexto": "Vigencia indeterminada",
    "ultimaVerificacion": "2026-09-28",
    "fuenteUrl": "https://www.sunat.gob.pe",
    "frecuenciaBusqueda": 7500,
    "costoResumen": "Totalmente Gratuito (S/ 0.00)",
    "costoPrincipal": 0,
    "baseLegal": "Procedimiento tramitado bajo normativa vigente de SUNAT y Compendio Oficial del Estado Peruano.",
    "tags": [
      "fraccionamiento deuda sunat",
      "sunat",
      "tributos y ruc",
      "tramite oficial",
      "peru",
      "2026"
    ],
    "requisitos": [
      {
        "id": "req-fraccionamiento-deuda-sunat-1",
        "descripcion": "Documento Nacional de Identidad (DNI) vigente o carné de extranjería.",
        "aplicaSi": "general",
        "orden": 1
      },
      {
        "id": "req-fraccionamiento-deuda-sunat-2",
        "descripcion": "No adeudar multas administrativas asociadas.",
        "aplicaSi": "general",
        "orden": 2
      }
    ],
    "pasos": [
      {
        "id": "paso-fraccionamiento-deuda-sunat-1",
        "orden": 1,
        "modalidad": "online",
        "esOpcional": false,
        "titulo": "Ingresar a SUNAT con Clave SOL",
        "descripcion": "Ingresar a SUNAT con Clave SOL",
        "institucionNombre": "SUNAT",
        "institucionUrl": "https://www.sunat.gob.pe",
        "costoTipo": "gratuito",
        "costoMin": 0,
        "costoMax": 0
      },
      {
        "id": "paso-fraccionamiento-deuda-sunat-2",
        "orden": 2,
        "modalidad": "presencial",
        "esOpcional": false,
        "titulo": "Revisar deuda tributaria en 'Mis Deudas'",
        "descripcion": "Revisar deuda tributaria en 'Mis Deudas'",
        "institucionNombre": "SUNAT",
        "institucionUrl": "https://www.sunat.gob.pe",
        "costoTipo": "gratuito",
        "costoMin": 0,
        "costoMax": 0
      },
      {
        "id": "paso-fraccionamiento-deuda-sunat-3",
        "orden": 3,
        "modalidad": "presencial",
        "esOpcional": false,
        "titulo": "Solicitar fraccionamiento indicando número de cuotas",
        "descripcion": "Solicitar fraccionamiento indicando número de cuotas",
        "institucionNombre": "SUNAT",
        "institucionUrl": "https://www.sunat.gob.pe",
        "costoTipo": "gratuito",
        "costoMin": 0,
        "costoMax": 0
      },
      {
        "id": "paso-fraccionamiento-deuda-sunat-4",
        "orden": 4,
        "modalidad": "presencial",
        "esOpcional": false,
        "titulo": "Recibir resolución de aprobación",
        "descripcion": "Recibir resolución de aprobación",
        "institucionNombre": "SUNAT",
        "institucionUrl": "https://www.sunat.gob.pe",
        "costoTipo": "gratuito",
        "costoMin": 0,
        "costoMax": 0
      }
    ],
    "canalesPago": []
  },
  {
    "id": "tram-consulta-expediente-judicial",
    "slug": "consulta-expediente-judicial",
    "nombre": "Consulta de expediente judicial (SINOE)",
    "nombreCorto": "Consulta de expediente judicial",
    "subgrupo": "EMPLEO Y CERTIFICADOS",
    "descripcion": "Consulta de expediente judicial (SINOE) emitido por Poder Judicial del Perú. Consulta costos oficiales, pasos detallados y requisitos actualizados.",
    "categoriaId": "cat-4",
    "categoria": {
      "id": "cat-4",
      "slug": "empleo-certificados",
      "nombre": "Empleo y Certificados",
      "descripcion": "Certificado Único Laboral, antecedentes policiales, penales y judiciales.",
      "icono": "WorkOutlineOutlined"
    },
    "institucionId": "inst-pj",
    "institucion": {
      "id": "inst-pj",
      "slug": "pj",
      "nombre": "Poder Judicial del Perú",
      "sigla": "PJ",
      "tipo": "nacional",
      "webOficial": "https://www.pj.gob.pe",
      "descripcion": "Administración de justicia y emisión del Certificado Electrónico de Antecedentes Penales.",
      "logoIniciales": "PJ"
    },
    "esCompuesto": false,
    "esRecurrente": false,
    "modalidadPrincipal": "online",
    "duracionMinDias": 1,
    "duracionMaxDias": 5,
    "duracionTexto": "1 a 5 días hábiles",
    "tipoResultado": "documento_digital",
    "vigenciaResultadoDias": null,
    "vigenciaTexto": "Vigencia indeterminada",
    "ultimaVerificacion": "2026-09-28",
    "fuenteUrl": "https://www.pj.gob.pe",
    "frecuenciaBusqueda": 7500,
    "costoResumen": "Totalmente Gratuito (S/ 0.00)",
    "costoPrincipal": 0,
    "baseLegal": "Procedimiento tramitado bajo normativa vigente de PJ y Compendio Oficial del Estado Peruano.",
    "tags": [
      "consulta expediente judicial",
      "pj",
      "empleo y certificados",
      "tramite oficial",
      "peru",
      "2026"
    ],
    "requisitos": [
      {
        "id": "req-consulta-expediente-judicial-1",
        "descripcion": "Documento Nacional de Identidad (DNI) vigente o carné de extranjería.",
        "aplicaSi": "general",
        "orden": 1
      },
      {
        "id": "req-consulta-expediente-judicial-2",
        "descripcion": "No adeudar multas administrativas asociadas.",
        "aplicaSi": "general",
        "orden": 2
      }
    ],
    "pasos": [
      {
        "id": "paso-consulta-expediente-judicial-1",
        "orden": 1,
        "modalidad": "online",
        "esOpcional": false,
        "titulo": "Ingresar a sinoe.pj.gob.pe",
        "descripcion": "Ingresar a sinoe.pj.gob.pe",
        "institucionNombre": "PJ",
        "institucionUrl": "https://www.pj.gob.pe",
        "costoTipo": "gratuito",
        "costoMin": 0,
        "costoMax": 0
      },
      {
        "id": "paso-consulta-expediente-judicial-2",
        "orden": 2,
        "modalidad": "online",
        "esOpcional": false,
        "titulo": "Ingresar número de expediente o datos del proceso",
        "descripcion": "Ingresar número de expediente o datos del proceso",
        "institucionNombre": "PJ",
        "institucionUrl": "https://www.pj.gob.pe",
        "costoTipo": "gratuito",
        "costoMin": 0,
        "costoMax": 0
      },
      {
        "id": "paso-consulta-expediente-judicial-3",
        "orden": 3,
        "modalidad": "presencial",
        "esOpcional": false,
        "titulo": "Consultar estado y últimas resoluciones",
        "descripcion": "Consultar estado y últimas resoluciones — sin costo",
        "institucionNombre": "PJ",
        "institucionUrl": "https://www.pj.gob.pe",
        "costoTipo": "gratuito",
        "costoMin": 0,
        "costoMax": 0
      }
    ],
    "canalesPago": []
  },
  {
    "id": "tram-certificado-domiciliario",
    "slug": "certificado-domiciliario",
    "nombre": "Certificado Domiciliario",
    "nombreCorto": "Certificado Domiciliario",
    "subgrupo": "EMPLEO Y CERTIFICADOS",
    "descripcion": "Certificado Domiciliario emitido por Policía Nacional del Perú. Consulta costos oficiales, pasos detallados y requisitos actualizados.",
    "categoriaId": "cat-4",
    "categoria": {
      "id": "cat-4",
      "slug": "empleo-certificados",
      "nombre": "Empleo y Certificados",
      "descripcion": "Certificado Único Laboral, antecedentes policiales, penales y judiciales.",
      "icono": "WorkOutlineOutlined"
    },
    "institucionId": "inst-pnp",
    "institucion": {
      "id": "inst-pnp",
      "slug": "pnp",
      "nombre": "Policía Nacional del Perú",
      "sigla": "PNP",
      "tipo": "nacional",
      "webOficial": "https://www.policia.gob.pe",
      "descripcion": "Seguridad ciudadana, emisión de antecedentes policiales y denuncias por pérdida.",
      "logoIniciales": "PNP"
    },
    "esCompuesto": false,
    "esRecurrente": false,
    "modalidadPrincipal": "presencial",
    "duracionMinDias": 1,
    "duracionMaxDias": 5,
    "duracionTexto": "1 a 5 días hábiles",
    "tipoResultado": "documento_digital",
    "vigenciaResultadoDias": null,
    "vigenciaTexto": "Vigencia indeterminada",
    "ultimaVerificacion": "2026-09-28",
    "fuenteUrl": "https://www.policia.gob.pe",
    "frecuenciaBusqueda": 7500,
    "costoResumen": "S/ 11.00",
    "costoPrincipal": 11,
    "baseLegal": "Procedimiento tramitado bajo normativa vigente de PNP y Compendio Oficial del Estado Peruano.",
    "tags": [
      "certificado domiciliario",
      "pnp",
      "empleo y certificados",
      "tramite oficial",
      "peru",
      "2026"
    ],
    "requisitos": [
      {
        "id": "req-certificado-domiciliario-1",
        "descripcion": "Documento Nacional de Identidad (DNI) vigente o carné de extranjería.",
        "aplicaSi": "general",
        "orden": 1
      },
      {
        "id": "req-certificado-domiciliario-2",
        "descripcion": "Comprobante de pago de la tasa oficial (S/ 11.00).",
        "aplicaSi": "general",
        "orden": 2
      }
    ],
    "pasos": [
      {
        "id": "paso-certificado-domiciliario-1",
        "orden": 1,
        "modalidad": "presencial",
        "esOpcional": false,
        "titulo": "Acudir a comisaría de tu sector con DNI",
        "descripcion": "Acudir a comisaría de tu sector con DNI",
        "institucionNombre": "PNP",
        "institucionUrl": "https://www.policia.gob.pe",
        "costoTipo": "gratuito",
        "costoMin": 0,
        "costoMax": 0
      },
      {
        "id": "paso-certificado-domiciliario-2",
        "orden": 2,
        "modalidad": "presencial",
        "esOpcional": false,
        "titulo": "Solicitar verificación domiciliaria",
        "descripcion": "Solicitar verificación domiciliaria",
        "institucionNombre": "PNP",
        "institucionUrl": "https://www.policia.gob.pe",
        "costoTipo": "gratuito",
        "costoMin": 0,
        "costoMax": 0
      },
      {
        "id": "paso-certificado-domiciliario-3",
        "orden": 3,
        "modalidad": "presencial",
        "esOpcional": false,
        "titulo": "El policía verifica el domicilio y emite el certificado",
        "descripcion": "El policía verifica el domicilio y emite el certificado",
        "institucionNombre": "PNP",
        "institucionUrl": "https://www.policia.gob.pe",
        "costoTipo": "gratuito",
        "costoMin": 0,
        "costoMax": 0
      },
      {
        "id": "paso-certificado-domiciliario-4",
        "orden": 4,
        "modalidad": "presencial",
        "esOpcional": false,
        "titulo": "Costo aproximado S/11",
        "descripcion": "Costo aproximado S/11 — puede variar por comisaría",
        "institucionNombre": "PNP",
        "institucionUrl": "https://www.policia.gob.pe",
        "costoTipo": "gratuito",
        "costoMin": 0,
        "costoMax": 0
      }
    ],
    "canalesPago": [
      {
        "id": "cp-certificado-domiciliario-1",
        "nombre": "Págalo.pe (Banco de la Nación)",
        "tipo": "online"
      },
      {
        "id": "cp-certificado-domiciliario-2",
        "nombre": "Agencias y Agentes del Banco de la Nación",
        "tipo": "agencia"
      }
    ]
  },
  {
    "id": "tram-verifica-tu-chamba",
    "slug": "verifica-tu-chamba",
    "nombre": "Verificación de empleo formal (Verifica tu Chamba)",
    "nombreCorto": "Verificación de empleo formal",
    "subgrupo": "EMPLEO Y CERTIFICADOS",
    "descripcion": "Verificación de empleo formal (Verifica tu Chamba) emitido por Superintendencia Nacional de Fiscalización Laboral. Consulta costos oficiales, pasos detallados y requisitos actualizados.",
    "categoriaId": "cat-4",
    "categoria": {
      "id": "cat-4",
      "slug": "empleo-certificados",
      "nombre": "Empleo y Certificados",
      "descripcion": "Certificado Único Laboral, antecedentes policiales, penales y judiciales.",
      "icono": "WorkOutlineOutlined"
    },
    "institucionId": "inst-sunafil",
    "institucion": {
      "id": "inst-sunafil",
      "slug": "sunafil",
      "nombre": "Superintendencia Nacional de Fiscalización Laboral",
      "sigla": "SUNAFIL",
      "tipo": "nacional",
      "webOficial": "https://www.sunafil.gob.pe",
      "descripcion": "Fiscalización del cumplimiento de los derechos laborales, seguridad ocupacional y planilla formal.",
      "logoIniciales": "SNF"
    },
    "esCompuesto": false,
    "esRecurrente": false,
    "modalidadPrincipal": "online",
    "duracionMinDias": 1,
    "duracionMaxDias": 5,
    "duracionTexto": "1 a 5 días hábiles",
    "tipoResultado": "documento_digital",
    "vigenciaResultadoDias": null,
    "vigenciaTexto": "Vigencia indeterminada",
    "ultimaVerificacion": "2026-09-28",
    "fuenteUrl": "https://www.sunafil.gob.pe",
    "frecuenciaBusqueda": 7500,
    "costoResumen": "Totalmente Gratuito (S/ 0.00)",
    "costoPrincipal": 0,
    "baseLegal": "Procedimiento tramitado bajo normativa vigente de SUNAFIL y Compendio Oficial del Estado Peruano.",
    "tags": [
      "verifica tu chamba",
      "sunafil",
      "empleo y certificados",
      "tramite oficial",
      "peru",
      "2026"
    ],
    "requisitos": [
      {
        "id": "req-verifica-tu-chamba-1",
        "descripcion": "Documento Nacional de Identidad (DNI) vigente o carné de extranjería.",
        "aplicaSi": "general",
        "orden": 1
      },
      {
        "id": "req-verifica-tu-chamba-2",
        "descripcion": "No adeudar multas administrativas asociadas.",
        "aplicaSi": "general",
        "orden": 2
      }
    ],
    "pasos": [
      {
        "id": "paso-verifica-tu-chamba-1",
        "orden": 1,
        "modalidad": "online",
        "esOpcional": false,
        "titulo": "Ingresar a verificatuchamba.sunafil.gob.pe",
        "descripcion": "Ingresar a verificatuchamba.sunafil.gob.pe",
        "institucionNombre": "SUNAFIL",
        "institucionUrl": "https://www.sunafil.gob.pe",
        "costoTipo": "gratuito",
        "costoMin": 0,
        "costoMax": 0
      },
      {
        "id": "paso-verifica-tu-chamba-2",
        "orden": 2,
        "modalidad": "online",
        "esOpcional": false,
        "titulo": "Ingresar DNI del trabajador",
        "descripcion": "Ingresar DNI del trabajador",
        "institucionNombre": "SUNAFIL",
        "institucionUrl": "https://www.sunafil.gob.pe",
        "costoTipo": "gratuito",
        "costoMin": 0,
        "costoMax": 0
      },
      {
        "id": "paso-verifica-tu-chamba-3",
        "orden": 3,
        "modalidad": "presencial",
        "esOpcional": false,
        "titulo": "Consultar si tiene relación laboral formal registrada",
        "descripcion": "Consultar si tiene relación laboral formal registrada — inmediato y gratuito",
        "institucionNombre": "SUNAFIL",
        "institucionUrl": "https://www.sunafil.gob.pe",
        "costoTipo": "gratuito",
        "costoMin": 0,
        "costoMax": 0
      }
    ],
    "canalesPago": []
  },
  {
    "id": "tram-denuncia-laboral-sunafil",
    "slug": "denuncia-laboral-sunafil",
    "nombre": "Denuncia laboral ante SUNAFIL",
    "nombreCorto": "Denuncia laboral ante SUNAFIL",
    "subgrupo": "EMPLEO Y CERTIFICADOS",
    "descripcion": "Denuncia laboral ante SUNAFIL emitido por Superintendencia Nacional de Fiscalización Laboral. Consulta costos oficiales, pasos detallados y requisitos actualizados.",
    "categoriaId": "cat-4",
    "categoria": {
      "id": "cat-4",
      "slug": "empleo-certificados",
      "nombre": "Empleo y Certificados",
      "descripcion": "Certificado Único Laboral, antecedentes policiales, penales y judiciales.",
      "icono": "WorkOutlineOutlined"
    },
    "institucionId": "inst-sunafil",
    "institucion": {
      "id": "inst-sunafil",
      "slug": "sunafil",
      "nombre": "Superintendencia Nacional de Fiscalización Laboral",
      "sigla": "SUNAFIL",
      "tipo": "nacional",
      "webOficial": "https://www.sunafil.gob.pe",
      "descripcion": "Fiscalización del cumplimiento de los derechos laborales, seguridad ocupacional y planilla formal.",
      "logoIniciales": "SNF"
    },
    "esCompuesto": false,
    "esRecurrente": false,
    "modalidadPrincipal": "online",
    "duracionMinDias": 1,
    "duracionMaxDias": 5,
    "duracionTexto": "1 a 5 días hábiles",
    "tipoResultado": "documento_digital",
    "vigenciaResultadoDias": null,
    "vigenciaTexto": "Vigencia indeterminada",
    "ultimaVerificacion": "2026-09-28",
    "fuenteUrl": "https://www.sunafil.gob.pe",
    "frecuenciaBusqueda": 7500,
    "costoResumen": "Totalmente Gratuito (S/ 0.00)",
    "costoPrincipal": 0,
    "baseLegal": "Procedimiento tramitado bajo normativa vigente de SUNAFIL y Compendio Oficial del Estado Peruano.",
    "tags": [
      "denuncia laboral sunafil",
      "sunafil",
      "empleo y certificados",
      "tramite oficial",
      "peru",
      "2026"
    ],
    "requisitos": [
      {
        "id": "req-denuncia-laboral-sunafil-1",
        "descripcion": "Documento Nacional de Identidad (DNI) vigente o carné de extranjería.",
        "aplicaSi": "general",
        "orden": 1
      },
      {
        "id": "req-denuncia-laboral-sunafil-2",
        "descripcion": "No adeudar multas administrativas asociadas.",
        "aplicaSi": "general",
        "orden": 2
      }
    ],
    "pasos": [
      {
        "id": "paso-denuncia-laboral-sunafil-1",
        "orden": 1,
        "modalidad": "online",
        "esOpcional": false,
        "titulo": "Ingresar a denuncias.sunafil.gob.pe o acudir a oficina SUNAFIL",
        "descripcion": "Ingresar a denuncias.sunafil.gob.pe o acudir a oficina SUNAFIL",
        "institucionNombre": "SUNAFIL",
        "institucionUrl": "https://www.sunafil.gob.pe",
        "costoTipo": "gratuito",
        "costoMin": 0,
        "costoMax": 0
      },
      {
        "id": "paso-denuncia-laboral-sunafil-2",
        "orden": 2,
        "modalidad": "presencial",
        "esOpcional": false,
        "titulo": "Completar datos del empleador y descripción de la infracción",
        "descripcion": "Completar datos del empleador y descripción de la infracción",
        "institucionNombre": "SUNAFIL",
        "institucionUrl": "https://www.sunafil.gob.pe",
        "costoTipo": "gratuito",
        "costoMin": 0,
        "costoMax": 0
      },
      {
        "id": "paso-denuncia-laboral-sunafil-3",
        "orden": 3,
        "modalidad": "presencial",
        "esOpcional": false,
        "titulo": "Adjuntar pruebas (boletas, contratos, fotos)",
        "descripcion": "Adjuntar pruebas (boletas, contratos, fotos)",
        "institucionNombre": "SUNAFIL",
        "institucionUrl": "https://www.sunafil.gob.pe",
        "costoTipo": "gratuito",
        "costoMin": 0,
        "costoMax": 0
      },
      {
        "id": "paso-denuncia-laboral-sunafil-4",
        "orden": 4,
        "modalidad": "presencial",
        "esOpcional": false,
        "titulo": "Recibir número de expediente para seguimiento",
        "descripcion": "Recibir número de expediente para seguimiento",
        "institucionNombre": "SUNAFIL",
        "institucionUrl": "https://www.sunafil.gob.pe",
        "costoTipo": "gratuito",
        "costoMin": 0,
        "costoMax": 0
      }
    ],
    "canalesPago": []
  },
  {
    "id": "tram-remype",
    "slug": "remype",
    "nombre": "Inscripción en REMYPE (Registro MYPE)",
    "nombreCorto": "Inscripción en REMYPE",
    "subgrupo": "EMPLEO Y CERTIFICADOS",
    "descripcion": "Inscripción en REMYPE (Registro MYPE) emitido por Ministerio de Trabajo y Promoción del Empleo. Consulta costos oficiales, pasos detallados y requisitos actualizados.",
    "categoriaId": "cat-4",
    "categoria": {
      "id": "cat-4",
      "slug": "empleo-certificados",
      "nombre": "Empleo y Certificados",
      "descripcion": "Certificado Único Laboral, antecedentes policiales, penales y judiciales.",
      "icono": "WorkOutlineOutlined"
    },
    "institucionId": "inst-mtpe",
    "institucion": {
      "id": "inst-mtpe",
      "slug": "mtpe",
      "nombre": "Ministerio de Trabajo y Promoción del Empleo",
      "sigla": "MTPE",
      "tipo": "nacional",
      "webOficial": "https://www.gob.pe/mtpe",
      "descripcion": "Promoción del empleo formal y emisión gratuita del Certificado Único Laboral.",
      "logoIniciales": "MTP"
    },
    "esCompuesto": false,
    "esRecurrente": false,
    "modalidadPrincipal": "online",
    "duracionMinDias": 1,
    "duracionMaxDias": 5,
    "duracionTexto": "1 a 5 días hábiles",
    "tipoResultado": "documento_digital",
    "vigenciaResultadoDias": null,
    "vigenciaTexto": "Vigencia indeterminada",
    "ultimaVerificacion": "2026-09-28",
    "fuenteUrl": "https://www.gob.pe/mtpe",
    "frecuenciaBusqueda": 7500,
    "costoResumen": "Totalmente Gratuito (S/ 0.00)",
    "costoPrincipal": 0,
    "baseLegal": "Procedimiento tramitado bajo normativa vigente de MTPE y Compendio Oficial del Estado Peruano.",
    "tags": [
      "remype",
      "mtpe",
      "empleo y certificados",
      "tramite oficial",
      "peru",
      "2026"
    ],
    "requisitos": [
      {
        "id": "req-remype-1",
        "descripcion": "Documento Nacional de Identidad (DNI) vigente o carné de extranjería.",
        "aplicaSi": "general",
        "orden": 1
      },
      {
        "id": "req-remype-2",
        "descripcion": "No adeudar multas administrativas asociadas.",
        "aplicaSi": "general",
        "orden": 2
      }
    ],
    "pasos": [
      {
        "id": "paso-remype-1",
        "orden": 1,
        "modalidad": "online",
        "esOpcional": false,
        "titulo": "Ingresar a empleo.pe con RUC y Clave SOL",
        "descripcion": "Ingresar a empleo.pe con RUC y Clave SOL",
        "institucionNombre": "MTPE",
        "institucionUrl": "https://www.gob.pe/mtpe",
        "costoTipo": "gratuito",
        "costoMin": 0,
        "costoMax": 0
      },
      {
        "id": "paso-remype-2",
        "orden": 2,
        "modalidad": "presencial",
        "esOpcional": false,
        "titulo": "Seleccionar inscripción en REMYPE",
        "descripcion": "Seleccionar inscripción en REMYPE",
        "institucionNombre": "MTPE",
        "institucionUrl": "https://www.gob.pe/mtpe",
        "costoTipo": "gratuito",
        "costoMin": 0,
        "costoMax": 0
      },
      {
        "id": "paso-remype-3",
        "orden": 3,
        "modalidad": "presencial",
        "esOpcional": false,
        "titulo": "Completar datos de la empresa y número de trabajadores",
        "descripcion": "Completar datos de la empresa y número de trabajadores",
        "institucionNombre": "MTPE",
        "institucionUrl": "https://www.gob.pe/mtpe",
        "costoTipo": "gratuito",
        "costoMin": 0,
        "costoMax": 0
      },
      {
        "id": "paso-remype-4",
        "orden": 4,
        "modalidad": "presencial",
        "esOpcional": false,
        "titulo": "Obtener constancia de inscripción",
        "descripcion": "Obtener constancia de inscripción — inmediato",
        "institucionNombre": "MTPE",
        "institucionUrl": "https://www.gob.pe/mtpe",
        "costoTipo": "gratuito",
        "costoMin": 0,
        "costoMax": 0
      }
    ],
    "canalesPago": []
  },
  {
    "id": "tram-afiliacion-sis-independiente",
    "slug": "afiliacion-sis-independiente",
    "nombre": "Afiliación al SIS Independiente (con aporte)",
    "nombreCorto": "Afiliación al SIS Independiente",
    "subgrupo": "SALUD Y AFILIACIONES",
    "descripcion": "Afiliación al SIS Independiente (con aporte) emitido por Seguro Integral de Salud. Consulta costos oficiales, pasos detallados y requisitos actualizados.",
    "categoriaId": "cat-7",
    "categoria": {
      "id": "cat-7",
      "slug": "salud-social",
      "nombre": "Salud y Afiliaciones",
      "descripcion": "Seguro Integral de Salud (SIS), ESSALUD y constancias médicas.",
      "icono": "HealthAndSafetyOutlined"
    },
    "institucionId": "inst-sis",
    "institucion": {
      "id": "inst-sis",
      "slug": "sis",
      "nombre": "Seguro Integral de Salud",
      "sigla": "SIS",
      "tipo": "nacional",
      "webOficial": "https://www.gob.pe/sis",
      "descripcion": "Organismo público ejecutor que brinda cobertura de aseguramiento en salud a nivel nacional.",
      "logoIniciales": "SIS"
    },
    "esCompuesto": false,
    "esRecurrente": false,
    "modalidadPrincipal": "online",
    "duracionMinDias": 1,
    "duracionMaxDias": 5,
    "duracionTexto": "1 a 5 días hábiles",
    "tipoResultado": "documento_digital",
    "vigenciaResultadoDias": null,
    "vigenciaTexto": "Vigencia indeterminada",
    "ultimaVerificacion": "2026-09-28",
    "fuenteUrl": "https://www.gob.pe/sis",
    "frecuenciaBusqueda": 7500,
    "costoResumen": "S/ 44.00",
    "costoPrincipal": 44,
    "baseLegal": "Procedimiento tramitado bajo normativa vigente de SIS y Compendio Oficial del Estado Peruano.",
    "tags": [
      "afiliacion sis independiente",
      "sis",
      "salud y afiliaciones",
      "tramite oficial",
      "peru",
      "2026"
    ],
    "requisitos": [
      {
        "id": "req-afiliacion-sis-independiente-1",
        "descripcion": "Documento Nacional de Identidad (DNI) vigente o carné de extranjería.",
        "aplicaSi": "general",
        "orden": 1
      },
      {
        "id": "req-afiliacion-sis-independiente-2",
        "descripcion": "Comprobante de pago de la tasa oficial (S/ 44.00).",
        "aplicaSi": "general",
        "orden": 2
      }
    ],
    "pasos": [
      {
        "id": "paso-afiliacion-sis-independiente-1",
        "orden": 1,
        "modalidad": "online",
        "esOpcional": false,
        "titulo": "Ingresar a sis.gob.pe",
        "descripcion": "Ingresar a sis.gob.pe",
        "institucionNombre": "SIS",
        "institucionUrl": "https://www.gob.pe/sis",
        "costoTipo": "gratuito",
        "costoMin": 0,
        "costoMax": 0
      },
      {
        "id": "paso-afiliacion-sis-independiente-2",
        "orden": 2,
        "modalidad": "presencial",
        "esOpcional": false,
        "titulo": "Seleccionar SIS Independiente",
        "descripcion": "Seleccionar SIS Independiente",
        "institucionNombre": "SIS",
        "institucionUrl": "https://www.gob.pe/sis",
        "costoTipo": "gratuito",
        "costoMin": 0,
        "costoMax": 0
      },
      {
        "id": "paso-afiliacion-sis-independiente-3",
        "orden": 3,
        "modalidad": "presencial",
        "esOpcional": false,
        "titulo": "Pagar cuota mensual S/44 (S/528 anuales)",
        "descripcion": "Pagar cuota mensual S/44 (S/528 anuales)",
        "institucionNombre": "SIS",
        "institucionUrl": "https://www.gob.pe/sis",
        "costoTipo": "fijo",
        "costoMin": 44,
        "costoMax": 44
      },
      {
        "id": "paso-afiliacion-sis-independiente-4",
        "orden": 4,
        "modalidad": "presencial",
        "esOpcional": false,
        "titulo": "Afiliación activa al completar el pago",
        "descripcion": "Afiliación activa al completar el pago",
        "institucionNombre": "SIS",
        "institucionUrl": "https://www.gob.pe/sis",
        "costoTipo": "fijo",
        "costoMin": 44,
        "costoMax": 44
      }
    ],
    "canalesPago": [
      {
        "id": "cp-afiliacion-sis-independiente-1",
        "nombre": "Págalo.pe (Banco de la Nación)",
        "tipo": "online"
      },
      {
        "id": "cp-afiliacion-sis-independiente-2",
        "nombre": "Agencias y Agentes del Banco de la Nación",
        "tipo": "agencia"
      }
    ]
  },
  {
    "id": "tram-cita-medica-essalud",
    "slug": "cita-medica-essalud",
    "nombre": "Cita médica EsSalud (online)",
    "nombreCorto": "Cita médica EsSalud",
    "subgrupo": "SALUD Y AFILIACIONES",
    "descripcion": "Cita médica EsSalud (online) emitido por Seguro Social de Salud. Consulta costos oficiales, pasos detallados y requisitos actualizados.",
    "categoriaId": "cat-7",
    "categoria": {
      "id": "cat-7",
      "slug": "salud-social",
      "nombre": "Salud y Afiliaciones",
      "descripcion": "Seguro Integral de Salud (SIS), ESSALUD y constancias médicas.",
      "icono": "HealthAndSafetyOutlined"
    },
    "institucionId": "inst-essalud",
    "institucion": {
      "id": "inst-essalud",
      "slug": "essalud",
      "nombre": "Seguro Social de Salud",
      "sigla": "EsSalud",
      "tipo": "nacional",
      "webOficial": "https://www.essalud.gob.pe",
      "descripcion": "Entidad de seguridad social que brinda atención médica y prestaciones a trabajadores formales y sus familias.",
      "logoIniciales": "ESS"
    },
    "esCompuesto": false,
    "esRecurrente": false,
    "modalidadPrincipal": "online",
    "duracionMinDias": 1,
    "duracionMaxDias": 5,
    "duracionTexto": "1 a 5 días hábiles",
    "tipoResultado": "documento_digital",
    "vigenciaResultadoDias": null,
    "vigenciaTexto": "Vigencia indeterminada",
    "ultimaVerificacion": "2026-09-28",
    "fuenteUrl": "https://www.essalud.gob.pe",
    "frecuenciaBusqueda": 7500,
    "costoResumen": "Totalmente Gratuito (S/ 0.00)",
    "costoPrincipal": 0,
    "baseLegal": "Procedimiento tramitado bajo normativa vigente de EsSalud y Compendio Oficial del Estado Peruano.",
    "tags": [
      "cita medica essalud",
      "essalud",
      "salud y afiliaciones",
      "tramite oficial",
      "peru",
      "2026"
    ],
    "requisitos": [
      {
        "id": "req-cita-medica-essalud-1",
        "descripcion": "Documento Nacional de Identidad (DNI) vigente o carné de extranjería.",
        "aplicaSi": "general",
        "orden": 1
      },
      {
        "id": "req-cita-medica-essalud-2",
        "descripcion": "No adeudar multas administrativas asociadas.",
        "aplicaSi": "general",
        "orden": 2
      }
    ],
    "pasos": [
      {
        "id": "paso-cita-medica-essalud-1",
        "orden": 1,
        "modalidad": "online",
        "esOpcional": false,
        "titulo": "Ingresar a essalud.gob.pe o app EsSalud",
        "descripcion": "Ingresar a essalud.gob.pe o app EsSalud",
        "institucionNombre": "EsSalud",
        "institucionUrl": "https://www.essalud.gob.pe",
        "costoTipo": "gratuito",
        "costoMin": 0,
        "costoMax": 0
      },
      {
        "id": "paso-cita-medica-essalud-2",
        "orden": 2,
        "modalidad": "presencial",
        "esOpcional": false,
        "titulo": "Verificar vigencia de derechohabiencia",
        "descripcion": "Verificar vigencia de derechohabiencia",
        "institucionNombre": "EsSalud",
        "institucionUrl": "https://www.essalud.gob.pe",
        "costoTipo": "gratuito",
        "costoMin": 0,
        "costoMax": 0
      },
      {
        "id": "paso-cita-medica-essalud-3",
        "orden": 3,
        "modalidad": "presencial",
        "esOpcional": false,
        "titulo": "Seleccionar especialidad y centro asistencial",
        "descripcion": "Seleccionar especialidad y centro asistencial",
        "institucionNombre": "EsSalud",
        "institucionUrl": "https://www.essalud.gob.pe",
        "costoTipo": "gratuito",
        "costoMin": 0,
        "costoMax": 0
      },
      {
        "id": "paso-cita-medica-essalud-4",
        "orden": 4,
        "modalidad": "presencial",
        "esOpcional": false,
        "titulo": "Agendar cita disponible",
        "descripcion": "Agendar cita disponible — gratuita para asegurados",
        "institucionNombre": "EsSalud",
        "institucionUrl": "https://www.essalud.gob.pe",
        "costoTipo": "gratuito",
        "costoMin": 0,
        "costoMax": 0
      }
    ],
    "canalesPago": []
  },
  {
    "id": "tram-carnet-vacunacion",
    "slug": "carnet-vacunacion",
    "nombre": "Carné de vacunación digital",
    "nombreCorto": "Carné de vacunación digital",
    "subgrupo": "SALUD Y AFILIACIONES",
    "descripcion": "Carné de vacunación digital emitido por Ministerio de Salud. Consulta costos oficiales, pasos detallados y requisitos actualizados.",
    "categoriaId": "cat-7",
    "categoria": {
      "id": "cat-7",
      "slug": "salud-social",
      "nombre": "Salud y Afiliaciones",
      "descripcion": "Seguro Integral de Salud (SIS), ESSALUD y constancias médicas.",
      "icono": "HealthAndSafetyOutlined"
    },
    "institucionId": "inst-minsa",
    "institucion": {
      "id": "inst-minsa",
      "slug": "minsa",
      "nombre": "Ministerio de Salud",
      "sigla": "MINSA",
      "tipo": "nacional",
      "webOficial": "https://www.gob.pe/minsa",
      "descripcion": "Rector del sistema nacional de salud, emisión del carné de vacunación y certificados de discapacidad.",
      "logoIniciales": "MIN"
    },
    "esCompuesto": false,
    "esRecurrente": false,
    "modalidadPrincipal": "online",
    "duracionMinDias": 1,
    "duracionMaxDias": 5,
    "duracionTexto": "1 a 5 días hábiles",
    "tipoResultado": "documento_digital",
    "vigenciaResultadoDias": null,
    "vigenciaTexto": "Vigencia indeterminada",
    "ultimaVerificacion": "2026-09-28",
    "fuenteUrl": "https://www.gob.pe/minsa",
    "frecuenciaBusqueda": 7500,
    "costoResumen": "Totalmente Gratuito (S/ 0.00)",
    "costoPrincipal": 0,
    "baseLegal": "Procedimiento tramitado bajo normativa vigente de MINSA y Compendio Oficial del Estado Peruano.",
    "tags": [
      "carnet vacunacion",
      "minsa",
      "salud y afiliaciones",
      "tramite oficial",
      "peru",
      "2026"
    ],
    "requisitos": [
      {
        "id": "req-carnet-vacunacion-1",
        "descripcion": "Documento Nacional de Identidad (DNI) vigente o carné de extranjería.",
        "aplicaSi": "general",
        "orden": 1
      },
      {
        "id": "req-carnet-vacunacion-2",
        "descripcion": "No adeudar multas administrativas asociadas.",
        "aplicaSi": "general",
        "orden": 2
      }
    ],
    "pasos": [
      {
        "id": "paso-carnet-vacunacion-1",
        "orden": 1,
        "modalidad": "online",
        "esOpcional": false,
        "titulo": "Ingresar a vacunados.minsa.gob.pe",
        "descripcion": "Ingresar a vacunados.minsa.gob.pe",
        "institucionNombre": "MINSA",
        "institucionUrl": "https://www.gob.pe/minsa",
        "costoTipo": "gratuito",
        "costoMin": 0,
        "costoMax": 0
      },
      {
        "id": "paso-carnet-vacunacion-2",
        "orden": 2,
        "modalidad": "online",
        "esOpcional": false,
        "titulo": "Ingresar DNI",
        "descripcion": "Ingresar DNI",
        "institucionNombre": "MINSA",
        "institucionUrl": "https://www.gob.pe/minsa",
        "costoTipo": "gratuito",
        "costoMin": 0,
        "costoMax": 0
      },
      {
        "id": "paso-carnet-vacunacion-3",
        "orden": 3,
        "modalidad": "presencial",
        "esOpcional": false,
        "titulo": "Descargar carné de vacunación en PDF",
        "descripcion": "Descargar carné de vacunación en PDF — inmediato y gratuito",
        "institucionNombre": "MINSA",
        "institucionUrl": "https://www.gob.pe/minsa",
        "costoTipo": "gratuito",
        "costoMin": 0,
        "costoMax": 0
      }
    ],
    "canalesPago": []
  },
  {
    "id": "tram-certificado-discapacidad",
    "slug": "certificado-discapacidad",
    "nombre": "Certificado de Discapacidad",
    "nombreCorto": "Certificado de Discapacidad",
    "subgrupo": "SALUD Y AFILIACIONES",
    "descripcion": "Certificado de Discapacidad emitido por Ministerio de Salud. Consulta costos oficiales, pasos detallados y requisitos actualizados.",
    "categoriaId": "cat-7",
    "categoria": {
      "id": "cat-7",
      "slug": "salud-social",
      "nombre": "Salud y Afiliaciones",
      "descripcion": "Seguro Integral de Salud (SIS), ESSALUD y constancias médicas.",
      "icono": "HealthAndSafetyOutlined"
    },
    "institucionId": "inst-minsa",
    "institucion": {
      "id": "inst-minsa",
      "slug": "minsa",
      "nombre": "Ministerio de Salud",
      "sigla": "MINSA",
      "tipo": "nacional",
      "webOficial": "https://www.gob.pe/minsa",
      "descripcion": "Rector del sistema nacional de salud, emisión del carné de vacunación y certificados de discapacidad.",
      "logoIniciales": "MIN"
    },
    "esCompuesto": false,
    "esRecurrente": false,
    "modalidadPrincipal": "presencial",
    "duracionMinDias": 1,
    "duracionMaxDias": 5,
    "duracionTexto": "1 a 5 días hábiles",
    "tipoResultado": "documento_digital",
    "vigenciaResultadoDias": null,
    "vigenciaTexto": "Vigencia indeterminada",
    "ultimaVerificacion": "2026-09-28",
    "fuenteUrl": "https://www.gob.pe/minsa",
    "frecuenciaBusqueda": 7500,
    "costoResumen": "Totalmente Gratuito (S/ 0.00)",
    "costoPrincipal": 0,
    "baseLegal": "Procedimiento tramitado bajo normativa vigente de MINSA y Compendio Oficial del Estado Peruano.",
    "tags": [
      "certificado discapacidad",
      "minsa",
      "salud y afiliaciones",
      "tramite oficial",
      "peru",
      "2026"
    ],
    "requisitos": [
      {
        "id": "req-certificado-discapacidad-1",
        "descripcion": "Documento Nacional de Identidad (DNI) vigente o carné de extranjería.",
        "aplicaSi": "general",
        "orden": 1
      },
      {
        "id": "req-certificado-discapacidad-2",
        "descripcion": "No adeudar multas administrativas asociadas.",
        "aplicaSi": "general",
        "orden": 2
      }
    ],
    "pasos": [
      {
        "id": "paso-certificado-discapacidad-1",
        "orden": 1,
        "modalidad": "presencial",
        "esOpcional": false,
        "titulo": "Acudir a establecimiento de salud MINSA con historia clínica",
        "descripcion": "Acudir a establecimiento de salud MINSA con historia clínica",
        "institucionNombre": "MINSA",
        "institucionUrl": "https://www.gob.pe/minsa",
        "costoTipo": "gratuito",
        "costoMin": 0,
        "costoMax": 0
      },
      {
        "id": "paso-certificado-discapacidad-2",
        "orden": 2,
        "modalidad": "presencial",
        "esOpcional": false,
        "titulo": "Evaluación por equipo multidisciplinario",
        "descripcion": "Evaluación por equipo multidisciplinario",
        "institucionNombre": "MINSA",
        "institucionUrl": "https://www.gob.pe/minsa",
        "costoTipo": "gratuito",
        "costoMin": 0,
        "costoMax": 0
      },
      {
        "id": "paso-certificado-discapacidad-3",
        "orden": 3,
        "modalidad": "presencial",
        "esOpcional": false,
        "titulo": "Obtener certificado de discapacidad",
        "descripcion": "Obtener certificado de discapacidad — requisito para carné CONADIS",
        "institucionNombre": "MINSA",
        "institucionUrl": "https://www.gob.pe/minsa",
        "costoTipo": "gratuito",
        "costoMin": 0,
        "costoMax": 0
      }
    ],
    "canalesPago": []
  },
  {
    "id": "tram-carne-conadis",
    "slug": "carne-conadis",
    "nombre": "Carné de Discapacidad CONADIS",
    "nombreCorto": "Carné de Discapacidad CONADIS",
    "subgrupo": "SALUD Y AFILIACIONES",
    "descripcion": "Carné de Discapacidad CONADIS emitido por Consejo Nacional para la Integración de la Persona con Discapacidad. Consulta costos oficiales, pasos detallados y requisitos actualizados.",
    "categoriaId": "cat-7",
    "categoria": {
      "id": "cat-7",
      "slug": "salud-social",
      "nombre": "Salud y Afiliaciones",
      "descripcion": "Seguro Integral de Salud (SIS), ESSALUD y constancias médicas.",
      "icono": "HealthAndSafetyOutlined"
    },
    "institucionId": "inst-conadis",
    "institucion": {
      "id": "inst-conadis",
      "slug": "conadis",
      "nombre": "Consejo Nacional para la Integración de la Persona con Discapacidad",
      "sigla": "CONADIS",
      "tipo": "nacional",
      "webOficial": "https://www.conadis.gob.pe",
      "descripcion": "Registro nacional y emisión del carné oficial que acredita derechos y beneficios para personas con discapacidad.",
      "logoIniciales": "CND"
    },
    "esCompuesto": false,
    "esRecurrente": false,
    "modalidadPrincipal": "online",
    "duracionMinDias": 1,
    "duracionMaxDias": 5,
    "duracionTexto": "1 a 5 días hábiles",
    "tipoResultado": "documento_digital",
    "vigenciaResultadoDias": null,
    "vigenciaTexto": "Vigencia indeterminada",
    "ultimaVerificacion": "2026-09-28",
    "fuenteUrl": "https://www.conadis.gob.pe",
    "frecuenciaBusqueda": 7500,
    "costoResumen": "Totalmente Gratuito (S/ 0.00)",
    "costoPrincipal": 0,
    "baseLegal": "Procedimiento tramitado bajo normativa vigente de CONADIS y Compendio Oficial del Estado Peruano.",
    "tags": [
      "carne conadis",
      "conadis",
      "salud y afiliaciones",
      "tramite oficial",
      "peru",
      "2026"
    ],
    "requisitos": [
      {
        "id": "req-carne-conadis-1",
        "descripcion": "Documento Nacional de Identidad (DNI) vigente o carné de extranjería.",
        "aplicaSi": "general",
        "orden": 1
      },
      {
        "id": "req-carne-conadis-2",
        "descripcion": "No adeudar multas administrativas asociadas.",
        "aplicaSi": "general",
        "orden": 2
      }
    ],
    "pasos": [
      {
        "id": "paso-carne-conadis-1",
        "orden": 1,
        "modalidad": "presencial",
        "esOpcional": false,
        "titulo": "Obtener primero el Certificado de Discapacidad (MINSA)",
        "descripcion": "Obtener primero el Certificado de Discapacidad (MINSA)",
        "institucionNombre": "CONADIS",
        "institucionUrl": "https://www.conadis.gob.pe",
        "costoTipo": "gratuito",
        "costoMin": 0,
        "costoMax": 0
      },
      {
        "id": "paso-carne-conadis-2",
        "orden": 2,
        "modalidad": "online",
        "esOpcional": false,
        "titulo": "Ingresar a conadis.gob.pe o acudir a oficina CONADIS",
        "descripcion": "Ingresar a conadis.gob.pe o acudir a oficina CONADIS",
        "institucionNombre": "CONADIS",
        "institucionUrl": "https://www.conadis.gob.pe",
        "costoTipo": "gratuito",
        "costoMin": 0,
        "costoMax": 0
      },
      {
        "id": "paso-carne-conadis-3",
        "orden": 3,
        "modalidad": "presencial",
        "esOpcional": false,
        "titulo": "Presentar certificado de discapacidad y DNI",
        "descripcion": "Presentar certificado de discapacidad y DNI",
        "institucionNombre": "CONADIS",
        "institucionUrl": "https://www.conadis.gob.pe",
        "costoTipo": "gratuito",
        "costoMin": 0,
        "costoMax": 0
      },
      {
        "id": "paso-carne-conadis-4",
        "orden": 4,
        "modalidad": "presencial",
        "esOpcional": false,
        "titulo": "Recibir carné CONADIS",
        "descripcion": "Recibir carné CONADIS — habilita descuentos en transporte y servicios",
        "institucionNombre": "CONADIS",
        "institucionUrl": "https://www.conadis.gob.pe",
        "costoTipo": "gratuito",
        "costoMin": 0,
        "costoMax": 0
      }
    ],
    "canalesPago": []
  },
  {
    "id": "tram-matrimonio-civil",
    "slug": "matrimonio-civil",
    "nombre": "Matrimonio Civil en Municipalidad",
    "nombreCorto": "Matrimonio Civil en Municipalidad",
    "subgrupo": "MUNICIPAL Y VIVIENDA",
    "descripcion": "Matrimonio Civil en Municipalidad emitido por Tu municipalidad. Consulta costos oficiales, pasos detallados y requisitos actualizados.",
    "categoriaId": "cat-6",
    "categoria": {
      "id": "cat-6",
      "slug": "municipal-vivienda",
      "nombre": "Municipal y Vivienda",
      "descripcion": "Impuesto predial, arbitrios, licencias de funcionamiento e inspecciones ITSE.",
      "icono": "ApartmentOutlined"
    },
    "institucionId": "inst-muni-generica",
    "institucion": {
      "id": "inst-muni-generica",
      "slug": "municipalidad-distrital",
      "nombre": "Tu municipalidad",
      "sigla": "Tu municipalidad",
      "tipo": "municipal",
      "webOficial": "https://www.gob.pe/institucion/pcm/campa%C3%B1as/1529-tupa-digital",
      "descripcion": "Gobierno local distrital. Costos y plazos varían según el distrito.",
      "logoIniciales": "MU"
    },
    "esCompuesto": true,
    "esRecurrente": false,
    "modalidadPrincipal": "presencial",
    "duracionMinDias": 1,
    "duracionMaxDias": 5,
    "duracionTexto": "1 a 5 días hábiles",
    "tipoResultado": "documento_digital",
    "vigenciaResultadoDias": null,
    "vigenciaTexto": "Vigencia indeterminada",
    "ultimaVerificacion": "2026-09-28",
    "fuenteUrl": "https://www.gob.pe/institucion/pcm/campa%C3%B1as/1529-tupa-digital",
    "frecuenciaBusqueda": 7500,
    "costoResumen": "Totalmente Gratuito (S/ 0.00)",
    "costoPrincipal": 0,
    "baseLegal": "Procedimiento tramitado bajo normativa vigente de Tu municipalidad y Compendio Oficial del Estado Peruano.",
    "tags": [
      "matrimonio civil",
      "tu municipalidad",
      "municipal y vivienda",
      "tramite oficial",
      "peru",
      "2026"
    ],
    "requisitos": [
      {
        "id": "req-matrimonio-civil-1",
        "descripcion": "Documento Nacional de Identidad (DNI) vigente o carné de extranjería.",
        "aplicaSi": "general",
        "orden": 1
      },
      {
        "id": "req-matrimonio-civil-2",
        "descripcion": "No adeudar multas administrativas asociadas.",
        "aplicaSi": "general",
        "orden": 2
      }
    ],
    "pasos": [
      {
        "id": "paso-matrimonio-civil-1",
        "orden": 1,
        "modalidad": "presencial",
        "esOpcional": false,
        "titulo": "Tramitar partidas de nacimiento actualizadas (RENIEC)",
        "descripcion": "Tramitar partidas de nacimiento actualizadas (RENIEC)",
        "institucionNombre": "Tu municipalidad",
        "institucionUrl": "https://www.gob.pe/institucion/pcm/campa%C3%B1as/1529-tupa-digital",
        "costoTipo": "gratuito",
        "costoMin": 0,
        "costoMax": 0
      },
      {
        "id": "paso-matrimonio-civil-2",
        "orden": 2,
        "modalidad": "presencial",
        "esOpcional": false,
        "titulo": "Obtener certificado médico prenupcial en establecimiento de salud",
        "descripcion": "Obtener certificado médico prenupcial en establecimiento de salud",
        "institucionNombre": "Tu municipalidad",
        "institucionUrl": "https://www.gob.pe/institucion/pcm/campa%C3%B1as/1529-tupa-digital",
        "costoTipo": "gratuito",
        "costoMin": 0,
        "costoMax": 0
      },
      {
        "id": "paso-matrimonio-civil-3",
        "orden": 3,
        "modalidad": "presencial",
        "esOpcional": false,
        "titulo": "Presentar solicitud de matrimonio en la municipalidad con documentos de amb",
        "descripcion": "Presentar solicitud de matrimonio en la municipalidad con documentos de ambos contrayentes",
        "institucionNombre": "Tu municipalidad",
        "institucionUrl": "https://www.gob.pe/institucion/pcm/campa%C3%B1as/1529-tupa-digital",
        "costoTipo": "gratuito",
        "costoMin": 0,
        "costoMax": 0
      },
      {
        "id": "paso-matrimonio-civil-4",
        "orden": 4,
        "modalidad": "presencial",
        "esOpcional": false,
        "titulo": "Publicación de edictos matrimoniales (espera legal obligatoria de días)",
        "descripcion": "Publicación de edictos matrimoniales (espera legal obligatoria de días)",
        "institucionNombre": "Tu municipalidad",
        "institucionUrl": "https://www.gob.pe/institucion/pcm/campa%C3%B1as/1529-tupa-digital",
        "costoTipo": "gratuito",
        "costoMin": 0,
        "costoMax": 0
      },
      {
        "id": "paso-matrimonio-civil-5",
        "orden": 5,
        "modalidad": "presencial",
        "esOpcional": false,
        "titulo": "Realizar ceremonia ante el alcalde o regidor delegado",
        "descripcion": "Realizar ceremonia ante el alcalde o regidor delegado",
        "institucionNombre": "Tu municipalidad",
        "institucionUrl": "https://www.gob.pe/institucion/pcm/campa%C3%B1as/1529-tupa-digital",
        "costoTipo": "gratuito",
        "costoMin": 0,
        "costoMax": 0
      },
      {
        "id": "paso-matrimonio-civil-6",
        "orden": 6,
        "modalidad": "presencial",
        "esOpcional": false,
        "titulo": "2 testigos requeridos",
        "descripcion": "2 testigos requeridos",
        "institucionNombre": "Tu municipalidad",
        "institucionUrl": "https://www.gob.pe/institucion/pcm/campa%C3%B1as/1529-tupa-digital",
        "costoTipo": "gratuito",
        "costoMin": 0,
        "costoMax": 0
      }
    ],
    "canalesPago": []
  },
  {
    "id": "tram-transferencia-vehicular",
    "slug": "transferencia-vehicular",
    "nombre": "Transferencia vehicular (compraventa)",
    "nombreCorto": "Transferencia vehicular",
    "subgrupo": "VEHICULAR Y TRANSPORTE",
    "descripcion": "Transferencia vehicular (compraventa) emitido por Superintendencia Nacional de los Registros Públicos. Consulta costos oficiales, pasos detallados y requisitos actualizados.",
    "categoriaId": "cat-2",
    "categoria": {
      "id": "cat-2",
      "slug": "vehicular-transporte",
      "nombre": "Vehicular y Transporte",
      "descripcion": "Brevete, récord de conductor, placas, SOAT y transferencias de vehículos.",
      "icono": "DirectionsCarOutlined"
    },
    "institucionId": "inst-sunarp",
    "institucion": {
      "id": "inst-sunarp",
      "slug": "sunarp",
      "nombre": "Superintendencia Nacional de los Registros Públicos",
      "sigla": "SUNARP",
      "tipo": "nacional",
      "webOficial": "https://www.gob.pe/sunarp",
      "descripcion": "Inscripción y publicidad de actos jurídicos, bienes inmuebles y propiedad vehicular.",
      "logoIniciales": "SNP"
    },
    "esCompuesto": true,
    "esRecurrente": false,
    "modalidadPrincipal": "presencial",
    "duracionMinDias": 1,
    "duracionMaxDias": 5,
    "duracionTexto": "1 a 5 días hábiles",
    "tipoResultado": "documento_digital",
    "vigenciaResultadoDias": null,
    "vigenciaTexto": "Vigencia indeterminada",
    "ultimaVerificacion": "2026-09-28",
    "fuenteUrl": "https://www.gob.pe/sunarp",
    "frecuenciaBusqueda": 7500,
    "costoResumen": "S/ 200.00 a S/ 500.00 aprox.",
    "costoPrincipal": 200,
    "baseLegal": "Procedimiento tramitado bajo normativa vigente de SUNARP y Compendio Oficial del Estado Peruano.",
    "tags": [
      "transferencia vehicular",
      "sunarp",
      "vehicular y transporte",
      "tramite oficial",
      "peru",
      "2026"
    ],
    "requisitos": [
      {
        "id": "req-transferencia-vehicular-1",
        "descripcion": "Documento Nacional de Identidad (DNI) vigente o carné de extranjería.",
        "aplicaSi": "general",
        "orden": 1
      },
      {
        "id": "req-transferencia-vehicular-2",
        "descripcion": "Comprobante de pago de la tasa oficial (S/ 200.00 a S/ 500.00 aprox.).",
        "aplicaSi": "general",
        "orden": 2
      }
    ],
    "pasos": [
      {
        "id": "paso-transferencia-vehicular-1",
        "orden": 1,
        "modalidad": "presencial",
        "esOpcional": false,
        "titulo": "Verificar situación registral del vehículo en SUNARP (busqueda.sunarp.gob.p",
        "descripcion": "Verificar situación registral del vehículo en SUNARP (busqueda.sunarp.gob.pe)",
        "institucionNombre": "SUNARP",
        "institucionUrl": "https://www.gob.pe/sunarp",
        "costoTipo": "gratuito",
        "costoMin": 0,
        "costoMax": 0
      },
      {
        "id": "paso-transferencia-vehicular-2",
        "orden": 2,
        "modalidad": "presencial",
        "esOpcional": false,
        "titulo": "Solicitar certificado registral de propiedad",
        "descripcion": "Solicitar certificado registral de propiedad",
        "institucionNombre": "SUNARP",
        "institucionUrl": "https://www.gob.pe/sunarp",
        "costoTipo": "gratuito",
        "costoMin": 0,
        "costoMax": 0
      },
      {
        "id": "paso-transferencia-vehicular-3",
        "orden": 3,
        "modalidad": "presencial",
        "esOpcional": false,
        "titulo": "Firmar minuta y escritura pública en notaría (costo varía por notario)",
        "descripcion": "Firmar minuta y escritura pública en notaría (costo varía por notario)",
        "institucionNombre": "SUNARP",
        "institucionUrl": "https://www.gob.pe/sunarp",
        "costoTipo": "gratuito",
        "costoMin": 0,
        "costoMax": 0
      },
      {
        "id": "paso-transferencia-vehicular-4",
        "orden": 4,
        "modalidad": "presencial",
        "esOpcional": false,
        "titulo": "Presentar parte notarial en SUNARP para inscripción",
        "descripcion": "Presentar parte notarial en SUNARP para inscripción",
        "institucionNombre": "SUNARP",
        "institucionUrl": "https://www.gob.pe/sunarp",
        "costoTipo": "gratuito",
        "costoMin": 0,
        "costoMax": 0
      },
      {
        "id": "paso-transferencia-vehicular-5",
        "orden": 5,
        "modalidad": "presencial",
        "esOpcional": false,
        "titulo": "Recibir nueva TIVE con propietario actualizado",
        "descripcion": "Recibir nueva TIVE con propietario actualizado",
        "institucionNombre": "SUNARP",
        "institucionUrl": "https://www.gob.pe/sunarp",
        "costoTipo": "gratuito",
        "costoMin": 0,
        "costoMax": 0
      }
    ],
    "canalesPago": [
      {
        "id": "cp-transferencia-vehicular-1",
        "nombre": "Págalo.pe (Banco de la Nación)",
        "tipo": "online"
      },
      {
        "id": "cp-transferencia-vehicular-2",
        "nombre": "Agencias y Agentes del Banco de la Nación",
        "tipo": "agencia"
      }
    ]
  },
  {
    "id": "tram-copia-literal-sunarp",
    "slug": "copia-literal-sunarp",
    "nombre": "Copia Literal de Partida Registral (SUNARP)",
    "nombreCorto": "Copia Literal de Partida Registral",
    "subgrupo": "IDENTIDAD Y DOCUMENTOS",
    "descripcion": "Copia Literal de Partida Registral (SUNARP) emitido por Superintendencia Nacional de los Registros Públicos. Consulta costos oficiales, pasos detallados y requisitos actualizados.",
    "categoriaId": "cat-1",
    "categoria": {
      "id": "cat-1",
      "slug": "identidad-documentos",
      "nombre": "Identidad y Documentos",
      "descripcion": "DNI, pasaportes, partidas de nacimiento y trámites de filiación oficial.",
      "icono": "BadgeOutlined"
    },
    "institucionId": "inst-sunarp",
    "institucion": {
      "id": "inst-sunarp",
      "slug": "sunarp",
      "nombre": "Superintendencia Nacional de los Registros Públicos",
      "sigla": "SUNARP",
      "tipo": "nacional",
      "webOficial": "https://www.gob.pe/sunarp",
      "descripcion": "Inscripción y publicidad de actos jurídicos, bienes inmuebles y propiedad vehicular.",
      "logoIniciales": "SNP"
    },
    "esCompuesto": false,
    "esRecurrente": false,
    "modalidadPrincipal": "online",
    "duracionMinDias": 0,
    "duracionMaxDias": 1,
    "duracionTexto": "1 a 5 días hábiles",
    "tipoResultado": "documento_digital",
    "vigenciaResultadoDias": null,
    "vigenciaTexto": "Vigencia indeterminada",
    "ultimaVerificacion": "2026-09-28",
    "fuenteUrl": "https://www.gob.pe/sunarp",
    "frecuenciaBusqueda": 7500,
    "costoResumen": "S/ 12.00",
    "costoPrincipal": 12,
    "baseLegal": "Procedimiento tramitado bajo normativa vigente de SUNARP y Compendio Oficial del Estado Peruano.",
    "tags": [
      "copia literal sunarp",
      "sunarp",
      "identidad y documentos",
      "tramite oficial",
      "peru",
      "2026"
    ],
    "requisitos": [
      {
        "id": "req-copia-literal-sunarp-1",
        "descripcion": "Documento Nacional de Identidad (DNI) vigente o carné de extranjería.",
        "aplicaSi": "general",
        "orden": 1
      },
      {
        "id": "req-copia-literal-sunarp-2",
        "descripcion": "Comprobante de pago de la tasa oficial (S/ 12.00).",
        "aplicaSi": "general",
        "orden": 2
      }
    ],
    "pasos": [
      {
        "id": "paso-copia-literal-sunarp-1",
        "orden": 1,
        "modalidad": "online",
        "esOpcional": false,
        "titulo": "Ingresar a spvirtual.sunarp.gob.pe",
        "descripcion": "Ingresar a spvirtual.sunarp.gob.pe",
        "institucionNombre": "SUNARP",
        "institucionUrl": "https://www.gob.pe/sunarp",
        "costoTipo": "gratuito",
        "costoMin": 0,
        "costoMax": 0
      },
      {
        "id": "paso-copia-literal-sunarp-2",
        "orden": 2,
        "modalidad": "presencial",
        "esOpcional": false,
        "titulo": "Buscar partida por dirección o datos del inmueble/vehículo/empresa",
        "descripcion": "Buscar partida por dirección o datos del inmueble/vehículo/empresa",
        "institucionNombre": "SUNARP",
        "institucionUrl": "https://www.gob.pe/sunarp",
        "costoTipo": "gratuito",
        "costoMin": 0,
        "costoMax": 0
      },
      {
        "id": "paso-copia-literal-sunarp-3",
        "orden": 3,
        "modalidad": "presencial",
        "esOpcional": false,
        "titulo": "Pagar S/12 por página de copia literal",
        "descripcion": "Pagar S/12 por página de copia literal",
        "institucionNombre": "SUNARP",
        "institucionUrl": "https://www.gob.pe/sunarp",
        "costoTipo": "fijo",
        "costoMin": 12,
        "costoMax": 12
      },
      {
        "id": "paso-copia-literal-sunarp-4",
        "orden": 4,
        "modalidad": "presencial",
        "esOpcional": false,
        "titulo": "Descargar en PDF",
        "descripcion": "Descargar en PDF",
        "institucionNombre": "SUNARP",
        "institucionUrl": "https://www.gob.pe/sunarp",
        "costoTipo": "gratuito",
        "costoMin": 0,
        "costoMax": 0
      }
    ],
    "canalesPago": [
      {
        "id": "cp-copia-literal-sunarp-1",
        "nombre": "Págalo.pe (Banco de la Nación)",
        "tipo": "online"
      },
      {
        "id": "cp-copia-literal-sunarp-2",
        "nombre": "Agencias y Agentes del Banco de la Nación",
        "tipo": "agencia"
      }
    ]
  },
  {
    "id": "tram-constitucion-empresa",
    "slug": "constitucion-empresa",
    "nombre": "Constitución de empresa MYPE (SAC/EIRL)",
    "nombreCorto": "Constitución de empresa MYPE",
    "subgrupo": "TRIBUTOS Y RUC",
    "descripcion": "Constitución de empresa MYPE (SAC/EIRL) emitido por Superintendencia Nacional de los Registros Públicos. Consulta costos oficiales, pasos detallados y requisitos actualizados.",
    "categoriaId": "cat-3",
    "categoria": {
      "id": "cat-3",
      "slug": "tributos-empresas",
      "nombre": "Tributos y RUC",
      "descripcion": "Inscripción RUC, Clave SOL, declaración de impuestos y constitución empresarial.",
      "icono": "AccountBalanceOutlined"
    },
    "institucionId": "inst-sunarp",
    "institucion": {
      "id": "inst-sunarp",
      "slug": "sunarp",
      "nombre": "Superintendencia Nacional de los Registros Públicos",
      "sigla": "SUNARP",
      "tipo": "nacional",
      "webOficial": "https://www.gob.pe/sunarp",
      "descripcion": "Inscripción y publicidad de actos jurídicos, bienes inmuebles y propiedad vehicular.",
      "logoIniciales": "SNP"
    },
    "esCompuesto": true,
    "esRecurrente": false,
    "modalidadPrincipal": "presencial",
    "duracionMinDias": 1,
    "duracionMaxDias": 5,
    "duracionTexto": "1 a 5 días hábiles",
    "tipoResultado": "documento_digital",
    "vigenciaResultadoDias": null,
    "vigenciaTexto": "Vigencia indeterminada",
    "ultimaVerificacion": "2026-09-28",
    "fuenteUrl": "https://www.gob.pe/sunarp",
    "frecuenciaBusqueda": 7500,
    "costoResumen": "S/ 300.00 a S/ 700.00 aprox.",
    "costoPrincipal": 300,
    "baseLegal": "Procedimiento tramitado bajo normativa vigente de SUNARP y Compendio Oficial del Estado Peruano.",
    "tags": [
      "constitucion empresa",
      "sunarp",
      "tributos y ruc",
      "tramite oficial",
      "peru",
      "2026"
    ],
    "requisitos": [
      {
        "id": "req-constitucion-empresa-1",
        "descripcion": "Documento Nacional de Identidad (DNI) vigente o carné de extranjería.",
        "aplicaSi": "general",
        "orden": 1
      },
      {
        "id": "req-constitucion-empresa-2",
        "descripcion": "Comprobante de pago de la tasa oficial (S/ 300.00 a S/ 700.00 aprox.).",
        "aplicaSi": "general",
        "orden": 2
      }
    ],
    "pasos": [
      {
        "id": "paso-constitucion-empresa-1",
        "orden": 1,
        "modalidad": "presencial",
        "esOpcional": false,
        "titulo": "Reservar nombre en SUNARP (sunarp.gob.pe)",
        "descripcion": "Reservar nombre en SUNARP (sunarp.gob.pe) — S/18",
        "institucionNombre": "SUNARP",
        "institucionUrl": "https://www.gob.pe/sunarp",
        "costoTipo": "gratuito",
        "costoMin": 0,
        "costoMax": 0
      },
      {
        "id": "paso-constitucion-empresa-2",
        "orden": 2,
        "modalidad": "presencial",
        "esOpcional": false,
        "titulo": "Elaborar minuta de constitución con abogado o mediante Módulo SID-SUNARP",
        "descripcion": "Elaborar minuta de constitución con abogado o mediante Módulo SID-SUNARP",
        "institucionNombre": "SUNARP",
        "institucionUrl": "https://www.gob.pe/sunarp",
        "costoTipo": "gratuito",
        "costoMin": 0,
        "costoMax": 0
      },
      {
        "id": "paso-constitucion-empresa-3",
        "orden": 3,
        "modalidad": "presencial",
        "esOpcional": false,
        "titulo": "Elevar minuta a escritura pública en notaría (costo varía)",
        "descripcion": "Elevar minuta a escritura pública en notaría (costo varía)",
        "institucionNombre": "SUNARP",
        "institucionUrl": "https://www.gob.pe/sunarp",
        "costoTipo": "gratuito",
        "costoMin": 0,
        "costoMax": 0
      },
      {
        "id": "paso-constitucion-empresa-4",
        "orden": 4,
        "modalidad": "presencial",
        "esOpcional": false,
        "titulo": "Inscribir en SUNARP (costo aproximado S/90)",
        "descripcion": "Inscribir en SUNARP (costo aproximado S/90)",
        "institucionNombre": "SUNARP",
        "institucionUrl": "https://www.gob.pe/sunarp",
        "costoTipo": "gratuito",
        "costoMin": 0,
        "costoMax": 0
      },
      {
        "id": "paso-constitucion-empresa-5",
        "orden": 5,
        "modalidad": "presencial",
        "esOpcional": false,
        "titulo": "Obtener RUC en SUNAT (gratuito)",
        "descripcion": "Obtener RUC en SUNAT (gratuito)",
        "institucionNombre": "SUNARP",
        "institucionUrl": "https://www.gob.pe/sunarp",
        "costoTipo": "gratuito",
        "costoMin": 0,
        "costoMax": 0
      },
      {
        "id": "paso-constitucion-empresa-6",
        "orden": 6,
        "modalidad": "presencial",
        "esOpcional": false,
        "titulo": "Obtener Clave SOL y activar régimen tributario",
        "descripcion": "Obtener Clave SOL y activar régimen tributario",
        "institucionNombre": "SUNARP",
        "institucionUrl": "https://www.gob.pe/sunarp",
        "costoTipo": "gratuito",
        "costoMin": 0,
        "costoMax": 0
      },
      {
        "id": "paso-constitucion-empresa-7",
        "orden": 7,
        "modalidad": "presencial",
        "esOpcional": false,
        "titulo": "Inscribir en REMYPE si califica como MYPE",
        "descripcion": "Inscribir en REMYPE si califica como MYPE",
        "institucionNombre": "SUNARP",
        "institucionUrl": "https://www.gob.pe/sunarp",
        "costoTipo": "gratuito",
        "costoMin": 0,
        "costoMax": 0
      }
    ],
    "canalesPago": [
      {
        "id": "cp-constitucion-empresa-1",
        "nombre": "Págalo.pe (Banco de la Nación)",
        "tipo": "online"
      },
      {
        "id": "cp-constitucion-empresa-2",
        "nombre": "Agencias y Agentes del Banco de la Nación",
        "tipo": "agencia"
      }
    ]
  },
  {
    "id": "tram-poder-notarial",
    "slug": "poder-notarial",
    "nombre": "Poder Notarial",
    "nombreCorto": "Poder Notarial",
    "subgrupo": "EMPLEO Y CERTIFICADOS",
    "descripcion": "Poder Notarial emitido por Colegio de Notarios del Perú. Consulta costos oficiales, pasos detallados y requisitos actualizados.",
    "categoriaId": "cat-4",
    "categoria": {
      "id": "cat-4",
      "slug": "empleo-certificados",
      "nombre": "Empleo y Certificados",
      "descripcion": "Certificado Único Laboral, antecedentes policiales, penales y judiciales.",
      "icono": "WorkOutlineOutlined"
    },
    "institucionId": "inst-notarias",
    "institucion": {
      "id": "inst-notarias",
      "slug": "notarias-peru",
      "nombre": "Colegio de Notarios del Perú",
      "sigla": "Notarías",
      "tipo": "privado",
      "webOficial": "https://www.notarios.org.pe",
      "descripcion": "Notarías públicas autorizadas para dar fe de actos jurídicos, minutas, poderes notariales y transferencias.",
      "logoIniciales": "NOT"
    },
    "esCompuesto": false,
    "esRecurrente": false,
    "modalidadPrincipal": "presencial",
    "duracionMinDias": 1,
    "duracionMaxDias": 5,
    "duracionTexto": "1 a 5 días hábiles",
    "tipoResultado": "documento_digital",
    "vigenciaResultadoDias": null,
    "vigenciaTexto": "Vigencia indeterminada",
    "ultimaVerificacion": "2026-09-28",
    "fuenteUrl": "https://www.notarios.org.pe",
    "frecuenciaBusqueda": 7500,
    "costoResumen": "S/ 80.00 a S/ 300.00 (variable)",
    "costoPrincipal": 80,
    "baseLegal": "Procedimiento tramitado bajo normativa vigente de Notarías y Compendio Oficial del Estado Peruano.",
    "tags": [
      "poder notarial",
      "notarías",
      "empleo y certificados",
      "tramite oficial",
      "peru",
      "2026"
    ],
    "requisitos": [
      {
        "id": "req-poder-notarial-1",
        "descripcion": "Documento Nacional de Identidad (DNI) vigente o carné de extranjería.",
        "aplicaSi": "general",
        "orden": 1
      },
      {
        "id": "req-poder-notarial-2",
        "descripcion": "Comprobante de pago de la tasa oficial (S/ 80.00 a S/ 300.00 (variable)).",
        "aplicaSi": "general",
        "orden": 2
      }
    ],
    "pasos": [
      {
        "id": "paso-poder-notarial-1",
        "orden": 1,
        "modalidad": "presencial",
        "esOpcional": false,
        "titulo": "Acudir a notaría con DNI vigente",
        "descripcion": "Acudir a notaría con DNI vigente",
        "institucionNombre": "Notarías",
        "institucionUrl": "https://www.notarios.org.pe",
        "costoTipo": "gratuito",
        "costoMin": 0,
        "costoMax": 0
      },
      {
        "id": "paso-poder-notarial-2",
        "orden": 2,
        "modalidad": "presencial",
        "esOpcional": false,
        "titulo": "Indicar al notario el acto que se autoriza (representación, venta, etc.)",
        "descripcion": "Indicar al notario el acto que se autoriza (representación, venta, etc.)",
        "institucionNombre": "Notarías",
        "institucionUrl": "https://www.notarios.org.pe",
        "costoTipo": "gratuito",
        "costoMin": 0,
        "costoMax": 0
      },
      {
        "id": "paso-poder-notarial-3",
        "orden": 3,
        "modalidad": "presencial",
        "esOpcional": false,
        "titulo": "Firmar escritura pública de poder",
        "descripcion": "Firmar escritura pública de poder",
        "institucionNombre": "Notarías",
        "institucionUrl": "https://www.notarios.org.pe",
        "costoTipo": "gratuito",
        "costoMin": 0,
        "costoMax": 0
      },
      {
        "id": "paso-poder-notarial-4",
        "orden": 4,
        "modalidad": "presencial",
        "esOpcional": false,
        "titulo": "Retirar testimonio (copia certificada)",
        "descripcion": "Retirar testimonio (copia certificada) — tarifa varía por notaría y tipo de poder",
        "institucionNombre": "Notarías",
        "institucionUrl": "https://www.notarios.org.pe",
        "costoTipo": "gratuito",
        "costoMin": 0,
        "costoMax": 0
      }
    ],
    "canalesPago": [
      {
        "id": "cp-poder-notarial-1",
        "nombre": "Págalo.pe (Banco de la Nación)",
        "tipo": "online"
      },
      {
        "id": "cp-poder-notarial-2",
        "nombre": "Agencias y Agentes del Banco de la Nación",
        "tipo": "agencia"
      }
    ]
  },
  {
    "id": "tram-escritura-publica",
    "slug": "escritura-publica",
    "nombre": "Escritura Pública (general)",
    "nombreCorto": "Escritura Pública",
    "subgrupo": "EMPLEO Y CERTIFICADOS",
    "descripcion": "Escritura Pública (general) emitido por Colegio de Notarios del Perú. Consulta costos oficiales, pasos detallados y requisitos actualizados.",
    "categoriaId": "cat-4",
    "categoria": {
      "id": "cat-4",
      "slug": "empleo-certificados",
      "nombre": "Empleo y Certificados",
      "descripcion": "Certificado Único Laboral, antecedentes policiales, penales y judiciales.",
      "icono": "WorkOutlineOutlined"
    },
    "institucionId": "inst-notarias",
    "institucion": {
      "id": "inst-notarias",
      "slug": "notarias-peru",
      "nombre": "Colegio de Notarios del Perú",
      "sigla": "Notarías",
      "tipo": "privado",
      "webOficial": "https://www.notarios.org.pe",
      "descripcion": "Notarías públicas autorizadas para dar fe de actos jurídicos, minutas, poderes notariales y transferencias.",
      "logoIniciales": "NOT"
    },
    "esCompuesto": false,
    "esRecurrente": false,
    "modalidadPrincipal": "presencial",
    "duracionMinDias": 1,
    "duracionMaxDias": 5,
    "duracionTexto": "1 a 5 días hábiles",
    "tipoResultado": "documento_digital",
    "vigenciaResultadoDias": null,
    "vigenciaTexto": "Vigencia indeterminada",
    "ultimaVerificacion": "2026-09-28",
    "fuenteUrl": "https://www.notarios.org.pe",
    "frecuenciaBusqueda": 7500,
    "costoResumen": "S/ 150.00 a S/ 800.00 (variable)",
    "costoPrincipal": 150,
    "baseLegal": "Procedimiento tramitado bajo normativa vigente de Notarías y Compendio Oficial del Estado Peruano.",
    "tags": [
      "escritura publica",
      "notarías",
      "empleo y certificados",
      "tramite oficial",
      "peru",
      "2026"
    ],
    "requisitos": [
      {
        "id": "req-escritura-publica-1",
        "descripcion": "Documento Nacional de Identidad (DNI) vigente o carné de extranjería.",
        "aplicaSi": "general",
        "orden": 1
      },
      {
        "id": "req-escritura-publica-2",
        "descripcion": "Comprobante de pago de la tasa oficial (S/ 150.00 a S/ 800.00 (variable)).",
        "aplicaSi": "general",
        "orden": 2
      }
    ],
    "pasos": [
      {
        "id": "paso-escritura-publica-1",
        "orden": 1,
        "modalidad": "presencial",
        "esOpcional": false,
        "titulo": "Preparar minuta o borrador del acto jurídico",
        "descripcion": "Preparar minuta o borrador del acto jurídico",
        "institucionNombre": "Notarías",
        "institucionUrl": "https://www.notarios.org.pe",
        "costoTipo": "gratuito",
        "costoMin": 0,
        "costoMax": 0
      },
      {
        "id": "paso-escritura-publica-2",
        "orden": 2,
        "modalidad": "presencial",
        "esOpcional": false,
        "titulo": "Presentar en notaría con documentos de identidad de todas las partes",
        "descripcion": "Presentar en notaría con documentos de identidad de todas las partes",
        "institucionNombre": "Notarías",
        "institucionUrl": "https://www.notarios.org.pe",
        "costoTipo": "gratuito",
        "costoMin": 0,
        "costoMax": 0
      },
      {
        "id": "paso-escritura-publica-3",
        "orden": 3,
        "modalidad": "presencial",
        "esOpcional": false,
        "titulo": "Notario revisa, redacta y lee la escritura a las partes",
        "descripcion": "Notario revisa, redacta y lee la escritura a las partes",
        "institucionNombre": "Notarías",
        "institucionUrl": "https://www.notarios.org.pe",
        "costoTipo": "gratuito",
        "costoMin": 0,
        "costoMax": 0
      },
      {
        "id": "paso-escritura-publica-4",
        "orden": 4,
        "modalidad": "presencial",
        "esOpcional": false,
        "titulo": "Firma por todas las partes y el notario",
        "descripcion": "Firma por todas las partes y el notario",
        "institucionNombre": "Notarías",
        "institucionUrl": "https://www.notarios.org.pe",
        "costoTipo": "gratuito",
        "costoMin": 0,
        "costoMax": 0
      },
      {
        "id": "paso-escritura-publica-5",
        "orden": 5,
        "modalidad": "presencial",
        "esOpcional": false,
        "titulo": "Inscripción registral en SUNARP si aplica (predio, empresa, vehículo)",
        "descripcion": "Inscripción registral en SUNARP si aplica (predio, empresa, vehículo)",
        "institucionNombre": "Notarías",
        "institucionUrl": "https://www.notarios.org.pe",
        "costoTipo": "gratuito",
        "costoMin": 0,
        "costoMax": 0
      }
    ],
    "canalesPago": [
      {
        "id": "cp-escritura-publica-1",
        "nombre": "Págalo.pe (Banco de la Nación)",
        "tipo": "online"
      },
      {
        "id": "cp-escritura-publica-2",
        "nombre": "Agencias y Agentes del Banco de la Nación",
        "tipo": "agencia"
      }
    ]
  },
  {
    "id": "tram-apostilla-cancilleria",
    "slug": "apostilla-cancilleria",
    "nombre": "Apostilla de documentos (Cancillería)",
    "nombreCorto": "Apostilla de documentos",
    "subgrupo": "IDENTIDAD Y DOCUMENTOS",
    "descripcion": "Apostilla de documentos (Cancillería) emitido por Ministerio de Relaciones Exteriores. Consulta costos oficiales, pasos detallados y requisitos actualizados.",
    "categoriaId": "cat-1",
    "categoria": {
      "id": "cat-1",
      "slug": "identidad-documentos",
      "nombre": "Identidad y Documentos",
      "descripcion": "DNI, pasaportes, partidas de nacimiento y trámites de filiación oficial.",
      "icono": "BadgeOutlined"
    },
    "institucionId": "inst-cancilleria",
    "institucion": {
      "id": "inst-cancilleria",
      "slug": "cancilleria",
      "nombre": "Ministerio de Relaciones Exteriores",
      "sigla": "Cancillería",
      "tipo": "nacional",
      "webOficial": "https://www.cancilleria.gob.pe",
      "descripcion": "Política exterior, apostillado de documentos oficiales y asistencia consular a ciudadanos peruanos.",
      "logoIniciales": "RREE"
    },
    "esCompuesto": false,
    "esRecurrente": false,
    "modalidadPrincipal": "online",
    "duracionMinDias": 1,
    "duracionMaxDias": 5,
    "duracionTexto": "1 a 5 días hábiles",
    "tipoResultado": "documento_digital",
    "vigenciaResultadoDias": null,
    "vigenciaTexto": "Vigencia indeterminada",
    "ultimaVerificacion": "2026-09-28",
    "fuenteUrl": "https://www.cancilleria.gob.pe",
    "frecuenciaBusqueda": 7500,
    "costoResumen": "S/ 33.00",
    "costoPrincipal": 33,
    "baseLegal": "Procedimiento tramitado bajo normativa vigente de Cancillería y Compendio Oficial del Estado Peruano.",
    "tags": [
      "apostilla cancilleria",
      "cancillería",
      "identidad y documentos",
      "tramite oficial",
      "peru",
      "2026"
    ],
    "requisitos": [
      {
        "id": "req-apostilla-cancilleria-1",
        "descripcion": "Documento Nacional de Identidad (DNI) vigente o carné de extranjería.",
        "aplicaSi": "general",
        "orden": 1
      },
      {
        "id": "req-apostilla-cancilleria-2",
        "descripcion": "Comprobante de pago de la tasa oficial (S/ 33.00).",
        "aplicaSi": "general",
        "orden": 2
      }
    ],
    "pasos": [
      {
        "id": "paso-apostilla-cancilleria-1",
        "orden": 1,
        "modalidad": "presencial",
        "esOpcional": false,
        "titulo": "Legalizar primero el documento en el Colegio Profesional o institución emis",
        "descripcion": "Legalizar primero el documento en el Colegio Profesional o institución emisora si corresponde",
        "institucionNombre": "Cancillería",
        "institucionUrl": "https://www.cancilleria.gob.pe",
        "costoTipo": "gratuito",
        "costoMin": 0,
        "costoMax": 0
      },
      {
        "id": "paso-apostilla-cancilleria-2",
        "orden": 2,
        "modalidad": "online",
        "esOpcional": false,
        "titulo": "Ingresar a apostilla.rree.gob.pe o acudir a sede Cancillería",
        "descripcion": "Ingresar a apostilla.rree.gob.pe o acudir a sede Cancillería",
        "institucionNombre": "Cancillería",
        "institucionUrl": "https://www.cancilleria.gob.pe",
        "costoTipo": "gratuito",
        "costoMin": 0,
        "costoMax": 0
      },
      {
        "id": "paso-apostilla-cancilleria-3",
        "orden": 3,
        "modalidad": "presencial",
        "esOpcional": false,
        "titulo": "Presentar documento original y pagar S/33 por apostilla",
        "descripcion": "Presentar documento original y pagar S/33 por apostilla",
        "institucionNombre": "Cancillería",
        "institucionUrl": "https://www.cancilleria.gob.pe",
        "costoTipo": "fijo",
        "costoMin": 33,
        "costoMax": 33
      },
      {
        "id": "paso-apostilla-cancilleria-4",
        "orden": 4,
        "modalidad": "online",
        "esOpcional": false,
        "titulo": "Recibir documento con apostilla en el mismo día (online: envío digital)",
        "descripcion": "Recibir documento con apostilla en el mismo día (online: envío digital)",
        "institucionNombre": "Cancillería",
        "institucionUrl": "https://www.cancilleria.gob.pe",
        "costoTipo": "gratuito",
        "costoMin": 0,
        "costoMax": 0
      }
    ],
    "canalesPago": [
      {
        "id": "cp-apostilla-cancilleria-1",
        "nombre": "Págalo.pe (Banco de la Nación)",
        "tipo": "online"
      },
      {
        "id": "cp-apostilla-cancilleria-2",
        "nombre": "Agencias y Agentes del Banco de la Nación",
        "tipo": "agencia"
      }
    ]
  },
  {
    "id": "tram-salvoconducto",
    "slug": "salvoconducto",
    "nombre": "Salvoconducto (Cancillería)",
    "nombreCorto": "Salvoconducto",
    "subgrupo": "IDENTIDAD Y DOCUMENTOS",
    "descripcion": "Salvoconducto (Cancillería) emitido por Ministerio de Relaciones Exteriores. Consulta costos oficiales, pasos detallados y requisitos actualizados.",
    "categoriaId": "cat-1",
    "categoria": {
      "id": "cat-1",
      "slug": "identidad-documentos",
      "nombre": "Identidad y Documentos",
      "descripcion": "DNI, pasaportes, partidas de nacimiento y trámites de filiación oficial.",
      "icono": "BadgeOutlined"
    },
    "institucionId": "inst-cancilleria",
    "institucion": {
      "id": "inst-cancilleria",
      "slug": "cancilleria",
      "nombre": "Ministerio de Relaciones Exteriores",
      "sigla": "Cancillería",
      "tipo": "nacional",
      "webOficial": "https://www.cancilleria.gob.pe",
      "descripcion": "Política exterior, apostillado de documentos oficiales y asistencia consular a ciudadanos peruanos.",
      "logoIniciales": "RREE"
    },
    "esCompuesto": false,
    "esRecurrente": false,
    "modalidadPrincipal": "presencial",
    "duracionMinDias": 1,
    "duracionMaxDias": 5,
    "duracionTexto": "1 a 5 días hábiles",
    "tipoResultado": "documento_digital",
    "vigenciaResultadoDias": null,
    "vigenciaTexto": "Vigencia indeterminada",
    "ultimaVerificacion": "2026-09-28",
    "fuenteUrl": "https://www.cancilleria.gob.pe",
    "frecuenciaBusqueda": 7500,
    "costoResumen": "S/ 33.00",
    "costoPrincipal": 33,
    "baseLegal": "Procedimiento tramitado bajo normativa vigente de Cancillería y Compendio Oficial del Estado Peruano.",
    "tags": [
      "salvoconducto",
      "cancillería",
      "identidad y documentos",
      "tramite oficial",
      "peru",
      "2026"
    ],
    "requisitos": [
      {
        "id": "req-salvoconducto-1",
        "descripcion": "Documento Nacional de Identidad (DNI) vigente o carné de extranjería.",
        "aplicaSi": "general",
        "orden": 1
      },
      {
        "id": "req-salvoconducto-2",
        "descripcion": "Comprobante de pago de la tasa oficial (S/ 33.00).",
        "aplicaSi": "general",
        "orden": 2
      }
    ],
    "pasos": [
      {
        "id": "paso-salvoconducto-1",
        "orden": 1,
        "modalidad": "presencial",
        "esOpcional": false,
        "titulo": "Acudir a sede Cancillería con pasaporte vencido o dañado y DNI",
        "descripcion": "Acudir a sede Cancillería con pasaporte vencido o dañado y DNI",
        "institucionNombre": "Cancillería",
        "institucionUrl": "https://www.cancilleria.gob.pe",
        "costoTipo": "gratuito",
        "costoMin": 0,
        "costoMax": 0
      },
      {
        "id": "paso-salvoconducto-2",
        "orden": 2,
        "modalidad": "presencial",
        "esOpcional": false,
        "titulo": "Presentar ticket de vuelo o justificación de viaje urgente",
        "descripcion": "Presentar ticket de vuelo o justificación de viaje urgente",
        "institucionNombre": "Cancillería",
        "institucionUrl": "https://www.cancilleria.gob.pe",
        "costoTipo": "gratuito",
        "costoMin": 0,
        "costoMax": 0
      },
      {
        "id": "paso-salvoconducto-3",
        "orden": 3,
        "modalidad": "presencial",
        "esOpcional": false,
        "titulo": "Pagar S/33",
        "descripcion": "Pagar S/33",
        "institucionNombre": "Cancillería",
        "institucionUrl": "https://www.cancilleria.gob.pe",
        "costoTipo": "fijo",
        "costoMin": 33,
        "costoMax": 33
      },
      {
        "id": "paso-salvoconducto-4",
        "orden": 4,
        "modalidad": "presencial",
        "esOpcional": false,
        "titulo": "Obtener salvoconducto para viaje de emergencia",
        "descripcion": "Obtener salvoconducto para viaje de emergencia — válido por 30 días",
        "institucionNombre": "Cancillería",
        "institucionUrl": "https://www.cancilleria.gob.pe",
        "costoTipo": "gratuito",
        "costoMin": 0,
        "costoMax": 0
      }
    ],
    "canalesPago": [
      {
        "id": "cp-salvoconducto-1",
        "nombre": "Págalo.pe (Banco de la Nación)",
        "tipo": "online"
      },
      {
        "id": "cp-salvoconducto-2",
        "nombre": "Agencias y Agentes del Banco de la Nación",
        "tipo": "agencia"
      }
    ]
  },
  {
    "id": "tram-registro-marca-indecopi",
    "slug": "registro-marca-indecopi",
    "nombre": "Registro de Marca (INDECOPI)",
    "nombreCorto": "Registro de Marca",
    "subgrupo": "TRIBUTOS Y RUC",
    "descripcion": "Registro de Marca (INDECOPI) emitido por Instituto Nacional de Defensa de la Competencia y de la Propiedad Intelectual. Consulta costos oficiales, pasos detallados y requisitos actualizados.",
    "categoriaId": "cat-3",
    "categoria": {
      "id": "cat-3",
      "slug": "tributos-empresas",
      "nombre": "Tributos y RUC",
      "descripcion": "Inscripción RUC, Clave SOL, declaración de impuestos y constitución empresarial.",
      "icono": "AccountBalanceOutlined"
    },
    "institucionId": "inst-indecopi",
    "institucion": {
      "id": "inst-indecopi",
      "slug": "indecopi",
      "nombre": "Instituto Nacional de Defensa de la Competencia y de la Propiedad Intelectual",
      "sigla": "INDECOPI",
      "tipo": "nacional",
      "webOficial": "https://www.gob.pe/indecopi",
      "descripcion": "Defensa de los derechos del consumidor, registro de marcas comerciales y propiedad intelectual.",
      "logoIniciales": "IND"
    },
    "esCompuesto": false,
    "esRecurrente": false,
    "modalidadPrincipal": "online",
    "duracionMinDias": 120,
    "duracionMaxDias": 180,
    "duracionTexto": "120 a 180 días hábiles",
    "tipoResultado": "documento_digital",
    "vigenciaResultadoDias": null,
    "vigenciaTexto": "Vigencia indeterminada",
    "ultimaVerificacion": "2026-09-28",
    "fuenteUrl": "https://www.gob.pe/indecopi",
    "frecuenciaBusqueda": 7500,
    "costoResumen": "S/ 534.99",
    "costoPrincipal": 534.99,
    "baseLegal": "Procedimiento tramitado bajo normativa vigente de INDECOPI y Compendio Oficial del Estado Peruano.",
    "tags": [
      "registro marca indecopi",
      "indecopi",
      "tributos y ruc",
      "tramite oficial",
      "peru",
      "2026"
    ],
    "requisitos": [
      {
        "id": "req-registro-marca-indecopi-1",
        "descripcion": "Documento Nacional de Identidad (DNI) vigente o carné de extranjería.",
        "aplicaSi": "general",
        "orden": 1
      },
      {
        "id": "req-registro-marca-indecopi-2",
        "descripcion": "Comprobante de pago de la tasa oficial (S/ 534.99).",
        "aplicaSi": "general",
        "orden": 2
      }
    ],
    "pasos": [
      {
        "id": "paso-registro-marca-indecopi-1",
        "orden": 1,
        "modalidad": "presencial",
        "esOpcional": false,
        "titulo": "Buscar disponibilidad de marca en gaceta.indecopi.gob.pe",
        "descripcion": "Buscar disponibilidad de marca en gaceta.indecopi.gob.pe",
        "institucionNombre": "INDECOPI",
        "institucionUrl": "https://www.gob.pe/indecopi",
        "costoTipo": "gratuito",
        "costoMin": 0,
        "costoMax": 0
      },
      {
        "id": "paso-registro-marca-indecopi-2",
        "orden": 2,
        "modalidad": "presencial",
        "esOpcional": false,
        "titulo": "Completar solicitud en indecopi.gob.pe con logo, descripción y clase de pro",
        "descripcion": "Completar solicitud en indecopi.gob.pe con logo, descripción y clase de productos/servicios",
        "institucionNombre": "INDECOPI",
        "institucionUrl": "https://www.gob.pe/indecopi",
        "costoTipo": "gratuito",
        "costoMin": 0,
        "costoMax": 0
      },
      {
        "id": "paso-registro-marca-indecopi-3",
        "orden": 3,
        "modalidad": "presencial",
        "esOpcional": false,
        "titulo": "Pagar S/534.99 por una clase (Clasificación de Niza)",
        "descripcion": "Pagar S/534.99 por una clase (Clasificación de Niza)",
        "institucionNombre": "INDECOPI",
        "institucionUrl": "https://www.gob.pe/indecopi",
        "costoTipo": "fijo",
        "costoMin": 534.99,
        "costoMax": 534.99
      },
      {
        "id": "paso-registro-marca-indecopi-4",
        "orden": 4,
        "modalidad": "presencial",
        "esOpcional": false,
        "titulo": "INDECOPI evalúa en 120–180 días",
        "descripcion": "INDECOPI evalúa en 120–180 días — puede haber oposición de terceros",
        "institucionNombre": "INDECOPI",
        "institucionUrl": "https://www.gob.pe/indecopi",
        "costoTipo": "gratuito",
        "costoMin": 0,
        "costoMax": 0
      },
      {
        "id": "paso-registro-marca-indecopi-5",
        "orden": 5,
        "modalidad": "presencial",
        "esOpcional": false,
        "titulo": "Recibir certificado de registro",
        "descripcion": "Recibir certificado de registro — válido 10 años renovables",
        "institucionNombre": "INDECOPI",
        "institucionUrl": "https://www.gob.pe/indecopi",
        "costoTipo": "gratuito",
        "costoMin": 0,
        "costoMax": 0
      }
    ],
    "canalesPago": [
      {
        "id": "cp-registro-marca-indecopi-1",
        "nombre": "Págalo.pe (Banco de la Nación)",
        "tipo": "online"
      },
      {
        "id": "cp-registro-marca-indecopi-2",
        "nombre": "Agencias y Agentes del Banco de la Nación",
        "tipo": "agencia"
      }
    ]
  },
  {
    "id": "tram-reclamo-consumidor-indecopi",
    "slug": "reclamo-consumidor-indecopi",
    "nombre": "Reclamo ante INDECOPI (consumidor)",
    "nombreCorto": "Reclamo ante INDECOPI",
    "subgrupo": "DEFENSA DEL CONSUMIDOR Y DERECHOS",
    "descripcion": "Reclamo ante INDECOPI (consumidor) emitido por Instituto Nacional de Defensa de la Competencia y de la Propiedad Intelectual. Consulta costos oficiales, pasos detallados y requisitos actualizados.",
    "categoriaId": "cat-10",
    "categoria": {
      "id": "cat-10",
      "slug": "consumidor-defensoria",
      "nombre": "Defensa del Consumidor y Derechos",
      "descripcion": "Reclamos ante INDECOPI, OSIPTEL, OSINERGMIN, SUNASS y Defensoría.",
      "icono": "GavelOutlined"
    },
    "institucionId": "inst-indecopi",
    "institucion": {
      "id": "inst-indecopi",
      "slug": "indecopi",
      "nombre": "Instituto Nacional de Defensa de la Competencia y de la Propiedad Intelectual",
      "sigla": "INDECOPI",
      "tipo": "nacional",
      "webOficial": "https://www.gob.pe/indecopi",
      "descripcion": "Defensa de los derechos del consumidor, registro de marcas comerciales y propiedad intelectual.",
      "logoIniciales": "IND"
    },
    "esCompuesto": false,
    "esRecurrente": false,
    "modalidadPrincipal": "online",
    "duracionMinDias": 1,
    "duracionMaxDias": 5,
    "duracionTexto": "1 a 5 días hábiles",
    "tipoResultado": "documento_digital",
    "vigenciaResultadoDias": null,
    "vigenciaTexto": "Vigencia indeterminada",
    "ultimaVerificacion": "2026-09-28",
    "fuenteUrl": "https://www.gob.pe/indecopi",
    "frecuenciaBusqueda": 7500,
    "costoResumen": "Totalmente Gratuito (S/ 0.00)",
    "costoPrincipal": 0,
    "baseLegal": "Procedimiento tramitado bajo normativa vigente de INDECOPI y Compendio Oficial del Estado Peruano.",
    "tags": [
      "reclamo consumidor indecopi",
      "indecopi",
      "defensa del consumidor y derechos",
      "tramite oficial",
      "peru",
      "2026"
    ],
    "requisitos": [
      {
        "id": "req-reclamo-consumidor-indecopi-1",
        "descripcion": "Documento Nacional de Identidad (DNI) vigente o carné de extranjería.",
        "aplicaSi": "general",
        "orden": 1
      },
      {
        "id": "req-reclamo-consumidor-indecopi-2",
        "descripcion": "No adeudar multas administrativas asociadas.",
        "aplicaSi": "general",
        "orden": 2
      }
    ],
    "pasos": [
      {
        "id": "paso-reclamo-consumidor-indecopi-1",
        "orden": 1,
        "modalidad": "online",
        "esOpcional": false,
        "titulo": "Ingresar a reclamos.indecopi.gob.pe",
        "descripcion": "Ingresar a reclamos.indecopi.gob.pe",
        "institucionNombre": "INDECOPI",
        "institucionUrl": "https://www.gob.pe/indecopi",
        "costoTipo": "gratuito",
        "costoMin": 0,
        "costoMax": 0
      },
      {
        "id": "paso-reclamo-consumidor-indecopi-2",
        "orden": 2,
        "modalidad": "presencial",
        "esOpcional": false,
        "titulo": "Completar datos del proveedor y descripción del reclamo",
        "descripcion": "Completar datos del proveedor y descripción del reclamo",
        "institucionNombre": "INDECOPI",
        "institucionUrl": "https://www.gob.pe/indecopi",
        "costoTipo": "gratuito",
        "costoMin": 0,
        "costoMax": 0
      },
      {
        "id": "paso-reclamo-consumidor-indecopi-3",
        "orden": 3,
        "modalidad": "presencial",
        "esOpcional": false,
        "titulo": "Adjuntar pruebas (factura, contrato, foto)",
        "descripcion": "Adjuntar pruebas (factura, contrato, foto)",
        "institucionNombre": "INDECOPI",
        "institucionUrl": "https://www.gob.pe/indecopi",
        "costoTipo": "gratuito",
        "costoMin": 0,
        "costoMax": 0
      },
      {
        "id": "paso-reclamo-consumidor-indecopi-4",
        "orden": 4,
        "modalidad": "presencial",
        "esOpcional": false,
        "titulo": "INDECOPI notifica al proveedor en 3 días",
        "descripcion": "INDECOPI notifica al proveedor en 3 días — plazo de respuesta 15 días hábiles",
        "institucionNombre": "INDECOPI",
        "institucionUrl": "https://www.gob.pe/indecopi",
        "costoTipo": "gratuito",
        "costoMin": 0,
        "costoMax": 0
      }
    ],
    "canalesPago": []
  },
  {
    "id": "tram-jubilacion-onp",
    "slug": "jubilacion-onp",
    "nombre": "Jubilación ONP (Sistema Nacional de Pensiones)",
    "nombreCorto": "Jubilación ONP",
    "subgrupo": "PENSIONES Y PROGRAMAS SOCIALES",
    "descripcion": "Jubilación ONP (Sistema Nacional de Pensiones) emitido por Oficina de Normalización Previsional. Consulta costos oficiales, pasos detallados y requisitos actualizados.",
    "categoriaId": "cat-9",
    "categoria": {
      "id": "cat-9",
      "slug": "programas-sociales-pensiones",
      "nombre": "Pensiones y Programas Sociales",
      "descripcion": "Jubilación ONP, retiros de AFP, Pensión 65 y Bono Techo Propio.",
      "icono": "ElderlyOutlined"
    },
    "institucionId": "inst-onp",
    "institucion": {
      "id": "inst-onp",
      "slug": "onp",
      "nombre": "Oficina de Normalización Previsional",
      "sigla": "ONP",
      "tipo": "nacional",
      "webOficial": "https://www.onp.gob.pe",
      "descripcion": "Administración del Sistema Nacional de Pensiones (D.L. 19990) y pensiones públicas estatales.",
      "logoIniciales": "ONP"
    },
    "esCompuesto": false,
    "esRecurrente": false,
    "modalidadPrincipal": "online",
    "duracionMinDias": 1,
    "duracionMaxDias": 5,
    "duracionTexto": "1 a 5 días hábiles",
    "tipoResultado": "documento_digital",
    "vigenciaResultadoDias": null,
    "vigenciaTexto": "Vigencia indeterminada",
    "ultimaVerificacion": "2026-09-28",
    "fuenteUrl": "https://www.onp.gob.pe",
    "frecuenciaBusqueda": 7500,
    "costoResumen": "Totalmente Gratuito (S/ 0.00)",
    "costoPrincipal": 0,
    "baseLegal": "Procedimiento tramitado bajo normativa vigente de ONP y Compendio Oficial del Estado Peruano.",
    "tags": [
      "jubilacion onp",
      "onp",
      "pensiones y programas sociales",
      "tramite oficial",
      "peru",
      "2026"
    ],
    "requisitos": [
      {
        "id": "req-jubilacion-onp-1",
        "descripcion": "Documento Nacional de Identidad (DNI) vigente o carné de extranjería.",
        "aplicaSi": "general",
        "orden": 1
      },
      {
        "id": "req-jubilacion-onp-2",
        "descripcion": "No adeudar multas administrativas asociadas.",
        "aplicaSi": "general",
        "orden": 2
      }
    ],
    "pasos": [
      {
        "id": "paso-jubilacion-onp-1",
        "orden": 1,
        "modalidad": "presencial",
        "esOpcional": false,
        "titulo": "Verificar años de aportes en extranet.onp.gob.pe (mínimo 20 años para pensi",
        "descripcion": "Verificar años de aportes en extranet.onp.gob.pe (mínimo 20 años para pensión mínima)",
        "institucionNombre": "ONP",
        "institucionUrl": "https://www.onp.gob.pe",
        "costoTipo": "gratuito",
        "costoMin": 0,
        "costoMax": 0
      },
      {
        "id": "paso-jubilacion-onp-2",
        "orden": 2,
        "modalidad": "presencial",
        "esOpcional": false,
        "titulo": "Completar solicitud de pensión con partida de nacimiento, DNI y boletas de ",
        "descripcion": "Completar solicitud de pensión con partida de nacimiento, DNI y boletas de pago histórico",
        "institucionNombre": "ONP",
        "institucionUrl": "https://www.onp.gob.pe",
        "costoTipo": "gratuito",
        "costoMin": 0,
        "costoMax": 0
      },
      {
        "id": "paso-jubilacion-onp-3",
        "orden": 3,
        "modalidad": "online",
        "esOpcional": false,
        "titulo": "Presentar en sede ONP o ingresar online",
        "descripcion": "Presentar en sede ONP o ingresar online",
        "institucionNombre": "ONP",
        "institucionUrl": "https://www.onp.gob.pe",
        "costoTipo": "gratuito",
        "costoMin": 0,
        "costoMax": 0
      },
      {
        "id": "paso-jubilacion-onp-4",
        "orden": 4,
        "modalidad": "presencial",
        "esOpcional": false,
        "titulo": "ONP evalúa en 30–60 días",
        "descripcion": "ONP evalúa en 30–60 días",
        "institucionNombre": "ONP",
        "institucionUrl": "https://www.onp.gob.pe",
        "costoTipo": "gratuito",
        "costoMin": 0,
        "costoMax": 0
      },
      {
        "id": "paso-jubilacion-onp-5",
        "orden": 5,
        "modalidad": "presencial",
        "esOpcional": false,
        "titulo": "Recibir resolución de pensión",
        "descripcion": "Recibir resolución de pensión — monto mínimo S/1,000 desde 2026",
        "institucionNombre": "ONP",
        "institucionUrl": "https://www.onp.gob.pe",
        "costoTipo": "gratuito",
        "costoMin": 0,
        "costoMax": 0
      }
    ],
    "canalesPago": []
  },
  {
    "id": "tram-retiro-95-5-afp",
    "slug": "retiro-95-5-afp",
    "nombre": "Retiro de fondos AFP 95.5% (jubilación)",
    "nombreCorto": "Retiro de fondos AFP 95.5%",
    "subgrupo": "PENSIONES Y PROGRAMAS SOCIALES",
    "descripcion": "Retiro de fondos AFP 95.5% (jubilación) emitido por Oficina de Normalización Previsional. Consulta costos oficiales, pasos detallados y requisitos actualizados.",
    "categoriaId": "cat-9",
    "categoria": {
      "id": "cat-9",
      "slug": "programas-sociales-pensiones",
      "nombre": "Pensiones y Programas Sociales",
      "descripcion": "Jubilación ONP, retiros de AFP, Pensión 65 y Bono Techo Propio.",
      "icono": "ElderlyOutlined"
    },
    "institucionId": "inst-onp",
    "institucion": {
      "id": "inst-onp",
      "slug": "onp",
      "nombre": "Oficina de Normalización Previsional",
      "sigla": "ONP",
      "tipo": "nacional",
      "webOficial": "https://www.onp.gob.pe",
      "descripcion": "Administración del Sistema Nacional de Pensiones (D.L. 19990) y pensiones públicas estatales.",
      "logoIniciales": "ONP"
    },
    "esCompuesto": false,
    "esRecurrente": false,
    "modalidadPrincipal": "online",
    "duracionMinDias": 1,
    "duracionMaxDias": 5,
    "duracionTexto": "1 a 5 días hábiles",
    "tipoResultado": "documento_digital",
    "vigenciaResultadoDias": null,
    "vigenciaTexto": "Vigencia indeterminada",
    "ultimaVerificacion": "2026-09-28",
    "fuenteUrl": "https://www.onp.gob.pe",
    "frecuenciaBusqueda": 7500,
    "costoResumen": "Totalmente Gratuito (S/ 0.00)",
    "costoPrincipal": 0,
    "baseLegal": "Procedimiento tramitado bajo normativa vigente de ONP y Compendio Oficial del Estado Peruano.",
    "tags": [
      "retiro 95 5 afp",
      "onp",
      "pensiones y programas sociales",
      "tramite oficial",
      "peru",
      "2026"
    ],
    "requisitos": [
      {
        "id": "req-retiro-95-5-afp-1",
        "descripcion": "Documento Nacional de Identidad (DNI) vigente o carné de extranjería.",
        "aplicaSi": "general",
        "orden": 1
      },
      {
        "id": "req-retiro-95-5-afp-2",
        "descripcion": "No adeudar multas administrativas asociadas.",
        "aplicaSi": "general",
        "orden": 2
      }
    ],
    "pasos": [
      {
        "id": "paso-retiro-95-5-afp-1",
        "orden": 1,
        "modalidad": "presencial",
        "esOpcional": false,
        "titulo": "Verificar edad de jubilación (65 años) y fondo acumulado en AFP",
        "descripcion": "Verificar edad de jubilación (65 años) y fondo acumulado en AFP",
        "institucionNombre": "ONP",
        "institucionUrl": "https://www.onp.gob.pe",
        "costoTipo": "gratuito",
        "costoMin": 0,
        "costoMax": 0
      },
      {
        "id": "paso-retiro-95-5-afp-2",
        "orden": 2,
        "modalidad": "presencial",
        "esOpcional": false,
        "titulo": "Solicitar en la AFP (Integra, Prima, Profuturo, Habitat) opción de retiro",
        "descripcion": "Solicitar en la AFP (Integra, Prima, Profuturo, Habitat) opción de retiro",
        "institucionNombre": "ONP",
        "institucionUrl": "https://www.onp.gob.pe",
        "costoTipo": "gratuito",
        "costoMin": 0,
        "costoMax": 0
      },
      {
        "id": "paso-retiro-95-5-afp-3",
        "orden": 3,
        "modalidad": "presencial",
        "esOpcional": false,
        "titulo": "Elegir modalidad: 95.5% en efectivo o pensión vitalicia",
        "descripcion": "Elegir modalidad: 95.5% en efectivo o pensión vitalicia",
        "institucionNombre": "ONP",
        "institucionUrl": "https://www.onp.gob.pe",
        "costoTipo": "gratuito",
        "costoMin": 0,
        "costoMax": 0
      },
      {
        "id": "paso-retiro-95-5-afp-4",
        "orden": 4,
        "modalidad": "presencial",
        "esOpcional": false,
        "titulo": "AFP procesa en 30 días",
        "descripcion": "AFP procesa en 30 días — puede hacerse por app o en sede",
        "institucionNombre": "ONP",
        "institucionUrl": "https://www.onp.gob.pe",
        "costoTipo": "gratuito",
        "costoMin": 0,
        "costoMax": 0
      }
    ],
    "canalesPago": []
  },
  {
    "id": "tram-bono-familiar-habitacional",
    "slug": "bono-familiar-habitacional",
    "nombre": "Bono Familiar Habitacional (Techo Propio)",
    "nombreCorto": "Bono Familiar Habitacional",
    "subgrupo": "PENSIONES Y PROGRAMAS SOCIALES",
    "descripcion": "Bono Familiar Habitacional (Techo Propio) emitido por Fondo MIVIVIENDA S.A.. Consulta costos oficiales, pasos detallados y requisitos actualizados.",
    "categoriaId": "cat-9",
    "categoria": {
      "id": "cat-9",
      "slug": "programas-sociales-pensiones",
      "nombre": "Pensiones y Programas Sociales",
      "descripcion": "Jubilación ONP, retiros de AFP, Pensión 65 y Bono Techo Propio.",
      "icono": "ElderlyOutlined"
    },
    "institucionId": "inst-mivivienda",
    "institucion": {
      "id": "inst-mivivienda",
      "slug": "fondo-mivivienda",
      "nombre": "Fondo MIVIVIENDA S.A.",
      "sigla": "MIVIVIENDA",
      "tipo": "nacional",
      "webOficial": "https://www.mivivienda.com.pe",
      "descripcion": "Facilita la adquisición y construcción de viviendas sociales mediante el Bono Familiar Habitacional Techo Propio.",
      "logoIniciales": "MIV"
    },
    "esCompuesto": false,
    "esRecurrente": false,
    "modalidadPrincipal": "presencial",
    "duracionMinDias": 1,
    "duracionMaxDias": 5,
    "duracionTexto": "1 a 5 días hábiles",
    "tipoResultado": "documento_digital",
    "vigenciaResultadoDias": null,
    "vigenciaTexto": "Vigencia indeterminada",
    "ultimaVerificacion": "2026-09-28",
    "fuenteUrl": "https://www.mivivienda.com.pe",
    "frecuenciaBusqueda": 7500,
    "costoResumen": "Totalmente Gratuito (S/ 0.00)",
    "costoPrincipal": 0,
    "baseLegal": "Procedimiento tramitado bajo normativa vigente de MIVIVIENDA y Compendio Oficial del Estado Peruano.",
    "tags": [
      "bono familiar habitacional",
      "mivivienda",
      "pensiones y programas sociales",
      "tramite oficial",
      "peru",
      "2026"
    ],
    "requisitos": [
      {
        "id": "req-bono-familiar-habitacional-1",
        "descripcion": "Documento Nacional de Identidad (DNI) vigente o carné de extranjería.",
        "aplicaSi": "general",
        "orden": 1
      },
      {
        "id": "req-bono-familiar-habitacional-2",
        "descripcion": "No adeudar multas administrativas asociadas.",
        "aplicaSi": "general",
        "orden": 2
      }
    ],
    "pasos": [
      {
        "id": "paso-bono-familiar-habitacional-1",
        "orden": 1,
        "modalidad": "presencial",
        "esOpcional": false,
        "titulo": "Verificar elegibilidad: ingresos familiares no superen 2.5 UIT mensual (S/1",
        "descripcion": "Verificar elegibilidad: ingresos familiares no superen 2.5 UIT mensual (S/13,750 en 2026)",
        "institucionNombre": "MIVIVIENDA",
        "institucionUrl": "https://www.mivivienda.com.pe",
        "costoTipo": "gratuito",
        "costoMin": 0,
        "costoMax": 0
      },
      {
        "id": "paso-bono-familiar-habitacional-2",
        "orden": 2,
        "modalidad": "presencial",
        "esOpcional": false,
        "titulo": "Postular a través de entidad técnica habilitada (ETH) en mivivienda.com.pe",
        "descripcion": "Postular a través de entidad técnica habilitada (ETH) en mivivienda.com.pe",
        "institucionNombre": "MIVIVIENDA",
        "institucionUrl": "https://www.mivivienda.com.pe",
        "costoTipo": "gratuito",
        "costoMin": 0,
        "costoMax": 0
      },
      {
        "id": "paso-bono-familiar-habitacional-3",
        "orden": 3,
        "modalidad": "presencial",
        "esOpcional": false,
        "titulo": "Seleccionar modalidad: Adquisición de Vivienda Nueva, Construcción en Sitio",
        "descripcion": "Seleccionar modalidad: Adquisición de Vivienda Nueva, Construcción en Sitio Propio o Mejoramiento",
        "institucionNombre": "MIVIVIENDA",
        "institucionUrl": "https://www.mivivienda.com.pe",
        "costoTipo": "gratuito",
        "costoMin": 0,
        "costoMax": 0
      },
      {
        "id": "paso-bono-familiar-habitacional-4",
        "orden": 4,
        "modalidad": "presencial",
        "esOpcional": false,
        "titulo": "Recibir bonificación directa al proveedor",
        "descripcion": "Recibir bonificación directa al proveedor — no se devuelve",
        "institucionNombre": "MIVIVIENDA",
        "institucionUrl": "https://www.mivivienda.com.pe",
        "costoTipo": "gratuito",
        "costoMin": 0,
        "costoMax": 0
      }
    ],
    "canalesPago": []
  },
  {
    "id": "tram-pension-65",
    "slug": "pension-65",
    "nombre": "Afiliación a Pensión 65",
    "nombreCorto": "Afiliación a Pensión 65",
    "subgrupo": "PENSIONES Y PROGRAMAS SOCIALES",
    "descripcion": "Afiliación a Pensión 65 emitido por Ministerio de Desarrollo e Inclusión Social. Consulta costos oficiales, pasos detallados y requisitos actualizados.",
    "categoriaId": "cat-9",
    "categoria": {
      "id": "cat-9",
      "slug": "programas-sociales-pensiones",
      "nombre": "Pensiones y Programas Sociales",
      "descripcion": "Jubilación ONP, retiros de AFP, Pensión 65 y Bono Techo Propio.",
      "icono": "ElderlyOutlined"
    },
    "institucionId": "inst-midis",
    "institucion": {
      "id": "inst-midis",
      "slug": "midis",
      "nombre": "Ministerio de Desarrollo e Inclusión Social",
      "sigla": "MIDIS",
      "tipo": "nacional",
      "webOficial": "https://www.gob.pe/midis",
      "descripcion": "Coordinación de políticas sociales, padrón SISFOH y programas como Pensión 65, Juntos y Qali Warma.",
      "logoIniciales": "MID"
    },
    "esCompuesto": false,
    "esRecurrente": false,
    "modalidadPrincipal": "presencial",
    "duracionMinDias": 1,
    "duracionMaxDias": 5,
    "duracionTexto": "1 a 5 días hábiles",
    "tipoResultado": "documento_digital",
    "vigenciaResultadoDias": null,
    "vigenciaTexto": "Vigencia indeterminada",
    "ultimaVerificacion": "2026-09-28",
    "fuenteUrl": "https://www.gob.pe/midis",
    "frecuenciaBusqueda": 7500,
    "costoResumen": "Totalmente Gratuito (S/ 0.00)",
    "costoPrincipal": 0,
    "baseLegal": "Procedimiento tramitado bajo normativa vigente de MIDIS y Compendio Oficial del Estado Peruano.",
    "tags": [
      "pension 65",
      "midis",
      "pensiones y programas sociales",
      "tramite oficial",
      "peru",
      "2026"
    ],
    "requisitos": [
      {
        "id": "req-pension-65-1",
        "descripcion": "Documento Nacional de Identidad (DNI) vigente o carné de extranjería.",
        "aplicaSi": "general",
        "orden": 1
      },
      {
        "id": "req-pension-65-2",
        "descripcion": "No adeudar multas administrativas asociadas.",
        "aplicaSi": "general",
        "orden": 2
      }
    ],
    "pasos": [
      {
        "id": "paso-pension-65-1",
        "orden": 1,
        "modalidad": "presencial",
        "esOpcional": false,
        "titulo": "Verificar elegibilidad: 65+ años, en situación de pobreza extrema, sin pens",
        "descripcion": "Verificar elegibilidad: 65+ años, en situación de pobreza extrema, sin pensión de ONP o AFP",
        "institucionNombre": "MIDIS",
        "institucionUrl": "https://www.gob.pe/midis",
        "costoTipo": "gratuito",
        "costoMin": 0,
        "costoMax": 0
      },
      {
        "id": "paso-pension-65-2",
        "orden": 2,
        "modalidad": "presencial",
        "esOpcional": false,
        "titulo": "Clasificación previa como pobre extremo por MIDIS (Padrón SISFOH)",
        "descripcion": "Clasificación previa como pobre extremo por MIDIS (Padrón SISFOH)",
        "institucionNombre": "MIDIS",
        "institucionUrl": "https://www.gob.pe/midis",
        "costoTipo": "gratuito",
        "costoMin": 0,
        "costoMax": 0
      },
      {
        "id": "paso-pension-65-3",
        "orden": 3,
        "modalidad": "presencial",
        "esOpcional": false,
        "titulo": "Acudir a Unidad Local de Empadronamiento (ULE) de tu municipalidad",
        "descripcion": "Acudir a Unidad Local de Empadronamiento (ULE) de tu municipalidad",
        "institucionNombre": "MIDIS",
        "institucionUrl": "https://www.gob.pe/midis",
        "costoTipo": "gratuito",
        "costoMin": 0,
        "costoMax": 0
      },
      {
        "id": "paso-pension-65-4",
        "orden": 4,
        "modalidad": "presencial",
        "esOpcional": false,
        "titulo": "Recibir S/250 bimensuales directamente",
        "descripcion": "Recibir S/250 bimensuales directamente",
        "institucionNombre": "MIDIS",
        "institucionUrl": "https://www.gob.pe/midis",
        "costoTipo": "gratuito",
        "costoMin": 0,
        "costoMax": 0
      }
    ],
    "canalesPago": []
  },
  {
    "id": "tram-beca-18",
    "slug": "beca-18",
    "nombre": "Beca 18 (PRONABEC)",
    "nombreCorto": "Beca 18",
    "subgrupo": "EDUCACIÓN Y BECAS",
    "descripcion": "Beca 18 (PRONABEC) emitido por Programa Nacional de Becas y Crédito Educativo. Consulta costos oficiales, pasos detallados y requisitos actualizados.",
    "categoriaId": "cat-8",
    "categoria": {
      "id": "cat-8",
      "slug": "educacion-becas",
      "nombre": "Educación y Becas",
      "descripcion": "Títulos universitarios, grados SUNEDU, Beca 18 y certificados de estudios.",
      "icono": "SchoolOutlined"
    },
    "institucionId": "pronabec",
    "institucion": {
      "id": "pronabec",
      "slug": "pronabec",
      "nombre": "Programa Nacional de Becas y Crédito Educativo",
      "sigla": "PRONABEC",
      "tipo": "nacional",
      "webOficial": "https://www.pronabec.gob.pe",
      "descripcion": "Convocatoria y adjudicación de becas integrales para estudios superiores como Beca 18.",
      "logoIniciales": "PRB"
    },
    "esCompuesto": false,
    "esRecurrente": false,
    "modalidadPrincipal": "online",
    "duracionMinDias": 1,
    "duracionMaxDias": 5,
    "duracionTexto": "1 a 5 días hábiles",
    "tipoResultado": "documento_digital",
    "vigenciaResultadoDias": null,
    "vigenciaTexto": "Vigencia indeterminada",
    "ultimaVerificacion": "2026-09-28",
    "fuenteUrl": "https://www.pronabec.gob.pe",
    "frecuenciaBusqueda": 7500,
    "costoResumen": "Totalmente Gratuito (S/ 0.00)",
    "costoPrincipal": 0,
    "baseLegal": "Procedimiento tramitado bajo normativa vigente de PRONABEC y Compendio Oficial del Estado Peruano.",
    "tags": [
      "beca 18",
      "pronabec",
      "educación y becas",
      "tramite oficial",
      "peru",
      "2026"
    ],
    "requisitos": [
      {
        "id": "req-beca-18-1",
        "descripcion": "Documento Nacional de Identidad (DNI) vigente o carné de extranjería.",
        "aplicaSi": "general",
        "orden": 1
      },
      {
        "id": "req-beca-18-2",
        "descripcion": "No adeudar multas administrativas asociadas.",
        "aplicaSi": "general",
        "orden": 2
      }
    ],
    "pasos": [
      {
        "id": "paso-beca-18-1",
        "orden": 1,
        "modalidad": "presencial",
        "esOpcional": false,
        "titulo": "Verificar convocatoria activa en pronabec.gob.pe",
        "descripcion": "Verificar convocatoria activa en pronabec.gob.pe",
        "institucionNombre": "PRONABEC",
        "institucionUrl": "https://www.pronabec.gob.pe",
        "costoTipo": "gratuito",
        "costoMin": 0,
        "costoMax": 0
      },
      {
        "id": "paso-beca-18-2",
        "orden": 2,
        "modalidad": "online",
        "esOpcional": false,
        "titulo": "Registrarse en el portal y completar expediente digital",
        "descripcion": "Registrarse en el portal y completar expediente digital",
        "institucionNombre": "PRONABEC",
        "institucionUrl": "https://www.pronabec.gob.pe",
        "costoTipo": "gratuito",
        "costoMin": 0,
        "costoMax": 0
      },
      {
        "id": "paso-beca-18-3",
        "orden": 3,
        "modalidad": "presencial",
        "esOpcional": false,
        "titulo": "Adjuntar certificados de estudios, DNI, ficha SISFOH y documentación académ",
        "descripcion": "Adjuntar certificados de estudios, DNI, ficha SISFOH y documentación académica",
        "institucionNombre": "PRONABEC",
        "institucionUrl": "https://www.pronabec.gob.pe",
        "costoTipo": "gratuito",
        "costoMin": 0,
        "costoMax": 0
      },
      {
        "id": "paso-beca-18-4",
        "orden": 4,
        "modalidad": "presencial",
        "esOpcional": false,
        "titulo": "Pasar por evaluación de selección",
        "descripcion": "Pasar por evaluación de selección — méritos académicos y situación socioeconómica",
        "institucionNombre": "PRONABEC",
        "institucionUrl": "https://www.pronabec.gob.pe",
        "costoTipo": "gratuito",
        "costoMin": 0,
        "costoMax": 0
      },
      {
        "id": "paso-beca-18-5",
        "orden": 5,
        "modalidad": "presencial",
        "esOpcional": false,
        "titulo": "Recibir resolución de adjudicación y proceso de matrícula en universidad se",
        "descripcion": "Recibir resolución de adjudicación y proceso de matrícula en universidad seleccionada",
        "institucionNombre": "PRONABEC",
        "institucionUrl": "https://www.pronabec.gob.pe",
        "costoTipo": "gratuito",
        "costoMin": 0,
        "costoMax": 0
      }
    ],
    "canalesPago": []
  },
  {
    "id": "tram-certificado-estudios-minedu",
    "slug": "certificado-estudios-minedu",
    "nombre": "Certificado de Estudios (colegio)",
    "nombreCorto": "Certificado de Estudios",
    "subgrupo": "EDUCACIÓN Y BECAS",
    "descripcion": "Certificado de Estudios (colegio) emitido por Ministerio de Educación. Consulta costos oficiales, pasos detallados y requisitos actualizados.",
    "categoriaId": "cat-8",
    "categoria": {
      "id": "cat-8",
      "slug": "educacion-becas",
      "nombre": "Educación y Becas",
      "descripcion": "Títulos universitarios, grados SUNEDU, Beca 18 y certificados de estudios.",
      "icono": "SchoolOutlined"
    },
    "institucionId": "inst-minedu",
    "institucion": {
      "id": "inst-minedu",
      "slug": "minedu",
      "nombre": "Ministerio de Educación",
      "sigla": "MINEDU",
      "tipo": "nacional",
      "webOficial": "https://www.gob.pe/minedu",
      "descripcion": "Rector del sistema educativo peruano, emisión de certificados escolares y acreditación pedagógica.",
      "logoIniciales": "MED"
    },
    "esCompuesto": false,
    "esRecurrente": false,
    "modalidadPrincipal": "presencial",
    "duracionMinDias": 1,
    "duracionMaxDias": 5,
    "duracionTexto": "1 a 5 días hábiles",
    "tipoResultado": "documento_digital",
    "vigenciaResultadoDias": null,
    "vigenciaTexto": "Vigencia indeterminada",
    "ultimaVerificacion": "2026-09-28",
    "fuenteUrl": "https://www.gob.pe/minedu",
    "frecuenciaBusqueda": 7500,
    "costoResumen": "Totalmente Gratuito (S/ 0.00)",
    "costoPrincipal": 0,
    "baseLegal": "Procedimiento tramitado bajo normativa vigente de MINEDU y Compendio Oficial del Estado Peruano.",
    "tags": [
      "certificado estudios minedu",
      "minedu",
      "educación y becas",
      "tramite oficial",
      "peru",
      "2026"
    ],
    "requisitos": [
      {
        "id": "req-certificado-estudios-minedu-1",
        "descripcion": "Documento Nacional de Identidad (DNI) vigente o carné de extranjería.",
        "aplicaSi": "general",
        "orden": 1
      },
      {
        "id": "req-certificado-estudios-minedu-2",
        "descripcion": "No adeudar multas administrativas asociadas.",
        "aplicaSi": "general",
        "orden": 2
      }
    ],
    "pasos": [
      {
        "id": "paso-certificado-estudios-minedu-1",
        "orden": 1,
        "modalidad": "presencial",
        "esOpcional": false,
        "titulo": "Acudir a la institución educativa donde estudió",
        "descripcion": "Acudir a la institución educativa donde estudió",
        "institucionNombre": "MINEDU",
        "institucionUrl": "https://www.gob.pe/minedu",
        "costoTipo": "gratuito",
        "costoMin": 0,
        "costoMax": 0
      },
      {
        "id": "paso-certificado-estudios-minedu-2",
        "orden": 2,
        "modalidad": "presencial",
        "esOpcional": false,
        "titulo": "Solicitar certificado de estudios al área de secretaría",
        "descripcion": "Solicitar certificado de estudios al área de secretaría",
        "institucionNombre": "MINEDU",
        "institucionUrl": "https://www.gob.pe/minedu",
        "costoTipo": "gratuito",
        "costoMin": 0,
        "costoMax": 0
      },
      {
        "id": "paso-certificado-estudios-minedu-3",
        "orden": 3,
        "modalidad": "presencial",
        "esOpcional": false,
        "titulo": "Presentar DNI y comprobante de haber estudiado ahí",
        "descripcion": "Presentar DNI y comprobante de haber estudiado ahí",
        "institucionNombre": "MINEDU",
        "institucionUrl": "https://www.gob.pe/minedu",
        "costoTipo": "gratuito",
        "costoMin": 0,
        "costoMax": 0
      },
      {
        "id": "paso-certificado-estudios-minedu-4",
        "orden": 4,
        "modalidad": "presencial",
        "esOpcional": false,
        "titulo": "Retirar certificado en 1–5 días hábiles",
        "descripcion": "Retirar certificado en 1–5 días hábiles — gratuito en instituciones públicas",
        "institucionNombre": "MINEDU",
        "institucionUrl": "https://www.gob.pe/minedu",
        "costoTipo": "gratuito",
        "costoMin": 0,
        "costoMax": 0
      }
    ],
    "canalesPago": []
  },
  {
    "id": "tram-consulta-grados-titulos",
    "slug": "consulta-grados-titulos",
    "nombre": "Consulta de Grados y Títulos (SUNEDU)",
    "nombreCorto": "Consulta de Grados y Títulos",
    "subgrupo": "EDUCACIÓN Y BECAS",
    "descripcion": "Consulta de Grados y Títulos (SUNEDU) emitido por Superintendencia Nacional de Educación Superior Universitaria. Consulta costos oficiales, pasos detallados y requisitos actualizados.",
    "categoriaId": "cat-8",
    "categoria": {
      "id": "cat-8",
      "slug": "educacion-becas",
      "nombre": "Educación y Becas",
      "descripcion": "Títulos universitarios, grados SUNEDU, Beca 18 y certificados de estudios.",
      "icono": "SchoolOutlined"
    },
    "institucionId": "inst-sunedu",
    "institucion": {
      "id": "inst-sunedu",
      "slug": "sunedu",
      "nombre": "Superintendencia Nacional de Educación Superior Universitaria",
      "sigla": "SUNEDU",
      "tipo": "nacional",
      "webOficial": "https://www.sunedu.gob.pe",
      "descripcion": "Supervisión universitaria y administración del Registro Nacional de Grados y Títulos Oficiales.",
      "logoIniciales": "SND"
    },
    "esCompuesto": false,
    "esRecurrente": false,
    "modalidadPrincipal": "online",
    "duracionMinDias": 1,
    "duracionMaxDias": 5,
    "duracionTexto": "1 a 5 días hábiles",
    "tipoResultado": "documento_digital",
    "vigenciaResultadoDias": null,
    "vigenciaTexto": "Vigencia indeterminada",
    "ultimaVerificacion": "2026-09-28",
    "fuenteUrl": "https://www.sunedu.gob.pe",
    "frecuenciaBusqueda": 7500,
    "costoResumen": "Totalmente Gratuito (S/ 0.00)",
    "costoPrincipal": 0,
    "baseLegal": "Procedimiento tramitado bajo normativa vigente de SUNEDU y Compendio Oficial del Estado Peruano.",
    "tags": [
      "consulta grados titulos",
      "sunedu",
      "educación y becas",
      "tramite oficial",
      "peru",
      "2026"
    ],
    "requisitos": [
      {
        "id": "req-consulta-grados-titulos-1",
        "descripcion": "Documento Nacional de Identidad (DNI) vigente o carné de extranjería.",
        "aplicaSi": "general",
        "orden": 1
      },
      {
        "id": "req-consulta-grados-titulos-2",
        "descripcion": "No adeudar multas administrativas asociadas.",
        "aplicaSi": "general",
        "orden": 2
      }
    ],
    "pasos": [
      {
        "id": "paso-consulta-grados-titulos-1",
        "orden": 1,
        "modalidad": "online",
        "esOpcional": false,
        "titulo": "Ingresar a enlinea.sunedu.gob.pe/consulta-titulo",
        "descripcion": "Ingresar a enlinea.sunedu.gob.pe/consulta-titulo",
        "institucionNombre": "SUNEDU",
        "institucionUrl": "https://www.sunedu.gob.pe",
        "costoTipo": "gratuito",
        "costoMin": 0,
        "costoMax": 0
      },
      {
        "id": "paso-consulta-grados-titulos-2",
        "orden": 2,
        "modalidad": "presencial",
        "esOpcional": false,
        "titulo": "Buscar por DNI o nombre completo",
        "descripcion": "Buscar por DNI o nombre completo",
        "institucionNombre": "SUNEDU",
        "institucionUrl": "https://www.sunedu.gob.pe",
        "costoTipo": "gratuito",
        "costoMin": 0,
        "costoMax": 0
      },
      {
        "id": "paso-consulta-grados-titulos-3",
        "orden": 3,
        "modalidad": "presencial",
        "esOpcional": false,
        "titulo": "Verificar si el grado o título está registrado oficialmente",
        "descripcion": "Verificar si el grado o título está registrado oficialmente — inmediato y gratuito",
        "institucionNombre": "SUNEDU",
        "institucionUrl": "https://www.sunedu.gob.pe",
        "costoTipo": "gratuito",
        "costoMin": 0,
        "costoMax": 0
      }
    ],
    "canalesPago": []
  },
  {
    "id": "tram-portabilidad-numerica",
    "slug": "portabilidad-numerica",
    "nombre": "Portabilidad numérica (cambio de operador)",
    "nombreCorto": "Portabilidad numérica",
    "subgrupo": "DEFENSA DEL CONSUMIDOR Y DERECHOS",
    "descripcion": "Portabilidad numérica (cambio de operador) emitido por Organismo Supervisor de Inversión Privada en Telecomunicaciones. Consulta costos oficiales, pasos detallados y requisitos actualizados.",
    "categoriaId": "cat-10",
    "categoria": {
      "id": "cat-10",
      "slug": "consumidor-defensoria",
      "nombre": "Defensa del Consumidor y Derechos",
      "descripcion": "Reclamos ante INDECOPI, OSIPTEL, OSINERGMIN, SUNASS y Defensoría.",
      "icono": "GavelOutlined"
    },
    "institucionId": "inst-osiptel",
    "institucion": {
      "id": "inst-osiptel",
      "slug": "osiptel",
      "nombre": "Organismo Supervisor de Inversión Privada en Telecomunicaciones",
      "sigla": "OSIPTEL",
      "tipo": "nacional",
      "webOficial": "https://www.osiptel.gob.pe",
      "descripcion": "Regulación de empresas de telecomunicaciones, portabilidad numérica y registro IMEI de celulares.",
      "logoIniciales": "OSP"
    },
    "esCompuesto": false,
    "esRecurrente": false,
    "modalidadPrincipal": "online",
    "duracionMinDias": 1,
    "duracionMaxDias": 5,
    "duracionTexto": "1 a 5 días hábiles",
    "tipoResultado": "documento_digital",
    "vigenciaResultadoDias": null,
    "vigenciaTexto": "Vigencia indeterminada",
    "ultimaVerificacion": "2026-09-28",
    "fuenteUrl": "https://www.osiptel.gob.pe",
    "frecuenciaBusqueda": 7500,
    "costoResumen": "Totalmente Gratuito (S/ 0.00)",
    "costoPrincipal": 0,
    "baseLegal": "Procedimiento tramitado bajo normativa vigente de OSIPTEL y Compendio Oficial del Estado Peruano.",
    "tags": [
      "portabilidad numerica",
      "osiptel",
      "defensa del consumidor y derechos",
      "tramite oficial",
      "peru",
      "2026"
    ],
    "requisitos": [
      {
        "id": "req-portabilidad-numerica-1",
        "descripcion": "Documento Nacional de Identidad (DNI) vigente o carné de extranjería.",
        "aplicaSi": "general",
        "orden": 1
      },
      {
        "id": "req-portabilidad-numerica-2",
        "descripcion": "No adeudar multas administrativas asociadas.",
        "aplicaSi": "general",
        "orden": 2
      }
    ],
    "pasos": [
      {
        "id": "paso-portabilidad-numerica-1",
        "orden": 1,
        "modalidad": "presencial",
        "esOpcional": false,
        "titulo": "Acudir a tienda del nuevo operador o iniciar en su web/app",
        "descripcion": "Acudir a tienda del nuevo operador o iniciar en su web/app",
        "institucionNombre": "OSIPTEL",
        "institucionUrl": "https://www.osiptel.gob.pe",
        "costoTipo": "gratuito",
        "costoMin": 0,
        "costoMax": 0
      },
      {
        "id": "paso-portabilidad-numerica-2",
        "orden": 2,
        "modalidad": "presencial",
        "esOpcional": false,
        "titulo": "Presentar DNI y dar el número que deseas portar",
        "descripcion": "Presentar DNI y dar el número que deseas portar",
        "institucionNombre": "OSIPTEL",
        "institucionUrl": "https://www.osiptel.gob.pe",
        "costoTipo": "gratuito",
        "costoMin": 0,
        "costoMax": 0
      },
      {
        "id": "paso-portabilidad-numerica-3",
        "orden": 3,
        "modalidad": "presencial",
        "esOpcional": false,
        "titulo": "El proceso tarda máximo 24 horas",
        "descripcion": "El proceso tarda máximo 24 horas — línea migra sin cambiar número",
        "institucionNombre": "OSIPTEL",
        "institucionUrl": "https://www.osiptel.gob.pe",
        "costoTipo": "gratuito",
        "costoMin": 0,
        "costoMax": 0
      },
      {
        "id": "paso-portabilidad-numerica-4",
        "orden": 4,
        "modalidad": "presencial",
        "esOpcional": false,
        "titulo": "El operador anterior no puede cobrar penalidad",
        "descripcion": "El operador anterior no puede cobrar penalidad",
        "institucionNombre": "OSIPTEL",
        "institucionUrl": "https://www.osiptel.gob.pe",
        "costoTipo": "gratuito",
        "costoMin": 0,
        "costoMax": 0
      }
    ],
    "canalesPago": []
  },
  {
    "id": "tram-consulta-imei",
    "slug": "consulta-imei",
    "nombre": "Consulta IMEI (verificar si celular robado)",
    "nombreCorto": "Consulta IMEI",
    "subgrupo": "DEFENSA DEL CONSUMIDOR Y DERECHOS",
    "descripcion": "Consulta IMEI (verificar si celular robado) emitido por Organismo Supervisor de Inversión Privada en Telecomunicaciones. Consulta costos oficiales, pasos detallados y requisitos actualizados.",
    "categoriaId": "cat-10",
    "categoria": {
      "id": "cat-10",
      "slug": "consumidor-defensoria",
      "nombre": "Defensa del Consumidor y Derechos",
      "descripcion": "Reclamos ante INDECOPI, OSIPTEL, OSINERGMIN, SUNASS y Defensoría.",
      "icono": "GavelOutlined"
    },
    "institucionId": "inst-osiptel",
    "institucion": {
      "id": "inst-osiptel",
      "slug": "osiptel",
      "nombre": "Organismo Supervisor de Inversión Privada en Telecomunicaciones",
      "sigla": "OSIPTEL",
      "tipo": "nacional",
      "webOficial": "https://www.osiptel.gob.pe",
      "descripcion": "Regulación de empresas de telecomunicaciones, portabilidad numérica y registro IMEI de celulares.",
      "logoIniciales": "OSP"
    },
    "esCompuesto": false,
    "esRecurrente": false,
    "modalidadPrincipal": "online",
    "duracionMinDias": 1,
    "duracionMaxDias": 5,
    "duracionTexto": "1 a 5 días hábiles",
    "tipoResultado": "documento_digital",
    "vigenciaResultadoDias": null,
    "vigenciaTexto": "Vigencia indeterminada",
    "ultimaVerificacion": "2026-09-28",
    "fuenteUrl": "https://www.osiptel.gob.pe",
    "frecuenciaBusqueda": 7500,
    "costoResumen": "Totalmente Gratuito (S/ 0.00)",
    "costoPrincipal": 0,
    "baseLegal": "Procedimiento tramitado bajo normativa vigente de OSIPTEL y Compendio Oficial del Estado Peruano.",
    "tags": [
      "consulta imei",
      "osiptel",
      "defensa del consumidor y derechos",
      "tramite oficial",
      "peru",
      "2026"
    ],
    "requisitos": [
      {
        "id": "req-consulta-imei-1",
        "descripcion": "Documento Nacional de Identidad (DNI) vigente o carné de extranjería.",
        "aplicaSi": "general",
        "orden": 1
      },
      {
        "id": "req-consulta-imei-2",
        "descripcion": "No adeudar multas administrativas asociadas.",
        "aplicaSi": "general",
        "orden": 2
      }
    ],
    "pasos": [
      {
        "id": "paso-consulta-imei-1",
        "orden": 1,
        "modalidad": "presencial",
        "esOpcional": false,
        "titulo": "Marcar *#06# en el celular para obtener el IMEI",
        "descripcion": "Marcar *#06# en el celular para obtener el IMEI",
        "institucionNombre": "OSIPTEL",
        "institucionUrl": "https://www.osiptel.gob.pe",
        "costoTipo": "gratuito",
        "costoMin": 0,
        "costoMax": 0
      },
      {
        "id": "paso-consulta-imei-2",
        "orden": 2,
        "modalidad": "online",
        "esOpcional": false,
        "titulo": "Ingresar a osiptel.gob.pe/imei o app Reclama",
        "descripcion": "Ingresar a osiptel.gob.pe/imei o app Reclama",
        "institucionNombre": "OSIPTEL",
        "institucionUrl": "https://www.osiptel.gob.pe",
        "costoTipo": "gratuito",
        "costoMin": 0,
        "costoMax": 0
      },
      {
        "id": "paso-consulta-imei-3",
        "orden": 3,
        "modalidad": "online",
        "esOpcional": false,
        "titulo": "Ingresar número IMEI y verificar si el equipo está bloqueado por robo",
        "descripcion": "Ingresar número IMEI y verificar si el equipo está bloqueado por robo",
        "institucionNombre": "OSIPTEL",
        "institucionUrl": "https://www.osiptel.gob.pe",
        "costoTipo": "gratuito",
        "costoMin": 0,
        "costoMax": 0
      }
    ],
    "canalesPago": []
  },
  {
    "id": "tram-reclamo-luz-osinergmin",
    "slug": "reclamo-luz-osinergmin",
    "nombre": "Reclamo por servicio eléctrico (OSINERGMIN)",
    "nombreCorto": "Reclamo por servicio eléctrico",
    "subgrupo": "DEFENSA DEL CONSUMIDOR Y DERECHOS",
    "descripcion": "Reclamo por servicio eléctrico (OSINERGMIN) emitido por Organismo Supervisor de la Inversión en Energía y Minería. Consulta costos oficiales, pasos detallados y requisitos actualizados.",
    "categoriaId": "cat-10",
    "categoria": {
      "id": "cat-10",
      "slug": "consumidor-defensoria",
      "nombre": "Defensa del Consumidor y Derechos",
      "descripcion": "Reclamos ante INDECOPI, OSIPTEL, OSINERGMIN, SUNASS y Defensoría.",
      "icono": "GavelOutlined"
    },
    "institucionId": "inst-osinergmin",
    "institucion": {
      "id": "inst-osinergmin",
      "slug": "osinergmin",
      "nombre": "Organismo Supervisor de la Inversión en Energía y Minería",
      "sigla": "OSINERGMIN",
      "tipo": "nacional",
      "webOficial": "https://www.osinergmin.gob.pe",
      "descripcion": "Supervisión de empresas de electricidad, hidrocarburos y reclamos por cortes o cobros excesivos de luz.",
      "logoIniciales": "OSN"
    },
    "esCompuesto": false,
    "esRecurrente": false,
    "modalidadPrincipal": "online",
    "duracionMinDias": 1,
    "duracionMaxDias": 5,
    "duracionTexto": "1 a 5 días hábiles",
    "tipoResultado": "documento_digital",
    "vigenciaResultadoDias": null,
    "vigenciaTexto": "Vigencia indeterminada",
    "ultimaVerificacion": "2026-09-28",
    "fuenteUrl": "https://www.osinergmin.gob.pe",
    "frecuenciaBusqueda": 7500,
    "costoResumen": "Totalmente Gratuito (S/ 0.00)",
    "costoPrincipal": 0,
    "baseLegal": "Procedimiento tramitado bajo normativa vigente de OSINERGMIN y Compendio Oficial del Estado Peruano.",
    "tags": [
      "reclamo luz osinergmin",
      "osinergmin",
      "defensa del consumidor y derechos",
      "tramite oficial",
      "peru",
      "2026"
    ],
    "requisitos": [
      {
        "id": "req-reclamo-luz-osinergmin-1",
        "descripcion": "Documento Nacional de Identidad (DNI) vigente o carné de extranjería.",
        "aplicaSi": "general",
        "orden": 1
      },
      {
        "id": "req-reclamo-luz-osinergmin-2",
        "descripcion": "No adeudar multas administrativas asociadas.",
        "aplicaSi": "general",
        "orden": 2
      }
    ],
    "pasos": [
      {
        "id": "paso-reclamo-luz-osinergmin-1",
        "orden": 1,
        "modalidad": "presencial",
        "esOpcional": false,
        "titulo": "Reclamar primero ante la empresa eléctrica (Enel, Luz del Sur, etc.)",
        "descripcion": "Reclamar primero ante la empresa eléctrica (Enel, Luz del Sur, etc.) — obligatorio como paso previo",
        "institucionNombre": "OSINERGMIN",
        "institucionUrl": "https://www.osinergmin.gob.pe",
        "costoTipo": "gratuito",
        "costoMin": 0,
        "costoMax": 0
      },
      {
        "id": "paso-reclamo-luz-osinergmin-2",
        "orden": 2,
        "modalidad": "online",
        "esOpcional": false,
        "titulo": "Si la empresa no responde en 30 días, ingresar reclamo en osinergmin.gob.pe",
        "descripcion": "Si la empresa no responde en 30 días, ingresar reclamo en osinergmin.gob.pe",
        "institucionNombre": "OSINERGMIN",
        "institucionUrl": "https://www.osinergmin.gob.pe",
        "costoTipo": "gratuito",
        "costoMin": 0,
        "costoMax": 0
      },
      {
        "id": "paso-reclamo-luz-osinergmin-3",
        "orden": 3,
        "modalidad": "presencial",
        "esOpcional": false,
        "titulo": "Adjuntar respuesta de la empresa o constancia de presentación",
        "descripcion": "Adjuntar respuesta de la empresa o constancia de presentación",
        "institucionNombre": "OSINERGMIN",
        "institucionUrl": "https://www.osinergmin.gob.pe",
        "costoTipo": "gratuito",
        "costoMin": 0,
        "costoMax": 0
      },
      {
        "id": "paso-reclamo-luz-osinergmin-4",
        "orden": 4,
        "modalidad": "presencial",
        "esOpcional": false,
        "titulo": "OSINERGMIN resuelve en 30 días adicionales",
        "descripcion": "OSINERGMIN resuelve en 30 días adicionales",
        "institucionNombre": "OSINERGMIN",
        "institucionUrl": "https://www.osinergmin.gob.pe",
        "costoTipo": "gratuito",
        "costoMin": 0,
        "costoMax": 0
      }
    ],
    "canalesPago": []
  },
  {
    "id": "tram-reporte-deudas-sbs",
    "slug": "reporte-deudas-sbs",
    "nombre": "Reporte de deudas (Central de Riesgos SBS)",
    "nombreCorto": "Reporte de deudas",
    "subgrupo": "IDENTIDAD Y DOCUMENTOS",
    "descripcion": "Reporte de deudas (Central de Riesgos SBS) emitido por Superintendencia de Banca, Seguros y AFP. Consulta costos oficiales, pasos detallados y requisitos actualizados.",
    "categoriaId": "cat-1",
    "categoria": {
      "id": "cat-1",
      "slug": "identidad-documentos",
      "nombre": "Identidad y Documentos",
      "descripcion": "DNI, pasaportes, partidas de nacimiento y trámites de filiación oficial.",
      "icono": "BadgeOutlined"
    },
    "institucionId": "inst-sbs",
    "institucion": {
      "id": "inst-sbs",
      "slug": "sbs",
      "nombre": "Superintendencia de Banca, Seguros y AFP",
      "sigla": "SBS",
      "tipo": "nacional",
      "webOficial": "https://www.sbs.gob.pe",
      "descripcion": "Regulación del sistema financiero, central de riesgos de deudas bancarias y tipo de cambio contable.",
      "logoIniciales": "SBS"
    },
    "esCompuesto": false,
    "esRecurrente": false,
    "modalidadPrincipal": "online",
    "duracionMinDias": 1,
    "duracionMaxDias": 5,
    "duracionTexto": "1 a 5 días hábiles",
    "tipoResultado": "documento_digital",
    "vigenciaResultadoDias": null,
    "vigenciaTexto": "Vigencia indeterminada",
    "ultimaVerificacion": "2026-09-28",
    "fuenteUrl": "https://www.sbs.gob.pe",
    "frecuenciaBusqueda": 7500,
    "costoResumen": "Totalmente Gratuito (S/ 0.00)",
    "costoPrincipal": 0,
    "baseLegal": "Procedimiento tramitado bajo normativa vigente de SBS y Compendio Oficial del Estado Peruano.",
    "tags": [
      "reporte deudas sbs",
      "sbs",
      "identidad y documentos",
      "tramite oficial",
      "peru",
      "2026"
    ],
    "requisitos": [
      {
        "id": "req-reporte-deudas-sbs-1",
        "descripcion": "Documento Nacional de Identidad (DNI) vigente o carné de extranjería.",
        "aplicaSi": "general",
        "orden": 1
      },
      {
        "id": "req-reporte-deudas-sbs-2",
        "descripcion": "No adeudar multas administrativas asociadas.",
        "aplicaSi": "general",
        "orden": 2
      }
    ],
    "pasos": [
      {
        "id": "paso-reporte-deudas-sbs-1",
        "orden": 1,
        "modalidad": "online",
        "esOpcional": false,
        "titulo": "Ingresar a sbs.gob.pe sección 'Consulta tu historial'",
        "descripcion": "Ingresar a sbs.gob.pe sección 'Consulta tu historial'",
        "institucionNombre": "SBS",
        "institucionUrl": "https://www.sbs.gob.pe",
        "costoTipo": "gratuito",
        "costoMin": 0,
        "costoMax": 0
      },
      {
        "id": "paso-reporte-deudas-sbs-2",
        "orden": 2,
        "modalidad": "online",
        "esOpcional": false,
        "titulo": "Ingresar DNI y completar validación",
        "descripcion": "Ingresar DNI y completar validación",
        "institucionNombre": "SBS",
        "institucionUrl": "https://www.sbs.gob.pe",
        "costoTipo": "gratuito",
        "costoMin": 0,
        "costoMax": 0
      },
      {
        "id": "paso-reporte-deudas-sbs-3",
        "orden": 3,
        "modalidad": "presencial",
        "esOpcional": false,
        "titulo": "Descargar reporte de deudas en el sistema financiero",
        "descripcion": "Descargar reporte de deudas en el sistema financiero — gratuito e inmediato",
        "institucionNombre": "SBS",
        "institucionUrl": "https://www.sbs.gob.pe",
        "costoTipo": "gratuito",
        "costoMin": 0,
        "costoMax": 0
      }
    ],
    "canalesPago": []
  },
  {
    "id": "tram-tipo-cambio-sbs",
    "slug": "tipo-cambio-sbs",
    "nombre": "Consulta de tipo de cambio oficial (SBS)",
    "nombreCorto": "Consulta de tipo de cambio oficial",
    "subgrupo": "IDENTIDAD Y DOCUMENTOS",
    "descripcion": "Consulta de tipo de cambio oficial (SBS) emitido por Superintendencia de Banca, Seguros y AFP. Consulta costos oficiales, pasos detallados y requisitos actualizados.",
    "categoriaId": "cat-1",
    "categoria": {
      "id": "cat-1",
      "slug": "identidad-documentos",
      "nombre": "Identidad y Documentos",
      "descripcion": "DNI, pasaportes, partidas de nacimiento y trámites de filiación oficial.",
      "icono": "BadgeOutlined"
    },
    "institucionId": "inst-sbs",
    "institucion": {
      "id": "inst-sbs",
      "slug": "sbs",
      "nombre": "Superintendencia de Banca, Seguros y AFP",
      "sigla": "SBS",
      "tipo": "nacional",
      "webOficial": "https://www.sbs.gob.pe",
      "descripcion": "Regulación del sistema financiero, central de riesgos de deudas bancarias y tipo de cambio contable.",
      "logoIniciales": "SBS"
    },
    "esCompuesto": false,
    "esRecurrente": false,
    "modalidadPrincipal": "online",
    "duracionMinDias": 1,
    "duracionMaxDias": 5,
    "duracionTexto": "1 a 5 días hábiles",
    "tipoResultado": "documento_digital",
    "vigenciaResultadoDias": null,
    "vigenciaTexto": "Vigencia indeterminada",
    "ultimaVerificacion": "2026-09-28",
    "fuenteUrl": "https://www.sbs.gob.pe",
    "frecuenciaBusqueda": 7500,
    "costoResumen": "Totalmente Gratuito (S/ 0.00)",
    "costoPrincipal": 0,
    "baseLegal": "Procedimiento tramitado bajo normativa vigente de SBS y Compendio Oficial del Estado Peruano.",
    "tags": [
      "tipo cambio sbs",
      "sbs",
      "identidad y documentos",
      "tramite oficial",
      "peru",
      "2026"
    ],
    "requisitos": [
      {
        "id": "req-tipo-cambio-sbs-1",
        "descripcion": "Documento Nacional de Identidad (DNI) vigente o carné de extranjería.",
        "aplicaSi": "general",
        "orden": 1
      },
      {
        "id": "req-tipo-cambio-sbs-2",
        "descripcion": "No adeudar multas administrativas asociadas.",
        "aplicaSi": "general",
        "orden": 2
      }
    ],
    "pasos": [
      {
        "id": "paso-tipo-cambio-sbs-1",
        "orden": 1,
        "modalidad": "online",
        "esOpcional": false,
        "titulo": "Ingresar a sbs.gob.pe/tipodecambio",
        "descripcion": "Ingresar a sbs.gob.pe/tipodecambio",
        "institucionNombre": "SBS",
        "institucionUrl": "https://www.sbs.gob.pe",
        "costoTipo": "gratuito",
        "costoMin": 0,
        "costoMax": 0
      },
      {
        "id": "paso-tipo-cambio-sbs-2",
        "orden": 2,
        "modalidad": "presencial",
        "esOpcional": false,
        "titulo": "Consultar el tipo de cambio contable oficial del día (actualización diaria)",
        "descripcion": "Consultar el tipo de cambio contable oficial del día (actualización diaria)",
        "institucionNombre": "SBS",
        "institucionUrl": "https://www.sbs.gob.pe",
        "costoTipo": "gratuito",
        "costoMin": 0,
        "costoMax": 0
      }
    ],
    "canalesPago": []
  },
  {
    "id": "tram-lugar-votacion",
    "slug": "lugar-votacion",
    "nombre": "Consulta de lugar de votación (ONPE)",
    "nombreCorto": "Consulta de lugar de votación",
    "subgrupo": "IDENTIDAD Y DOCUMENTOS",
    "descripcion": "Consulta de lugar de votación (ONPE) emitido por Oficina Nacional de Procesos Electorales. Consulta costos oficiales, pasos detallados y requisitos actualizados.",
    "categoriaId": "cat-1",
    "categoria": {
      "id": "cat-1",
      "slug": "identidad-documentos",
      "nombre": "Identidad y Documentos",
      "descripcion": "DNI, pasaportes, partidas de nacimiento y trámites de filiación oficial.",
      "icono": "BadgeOutlined"
    },
    "institucionId": "inst-onpe",
    "institucion": {
      "id": "inst-onpe",
      "slug": "onpe",
      "nombre": "Oficina Nacional de Procesos Electorales",
      "sigla": "ONPE",
      "tipo": "nacional",
      "webOficial": "https://www.onpe.gob.pe",
      "descripcion": "Organización de elecciones democráticas en el Perú y gestión de multas por omisión al sufragio.",
      "logoIniciales": "ONP"
    },
    "esCompuesto": false,
    "esRecurrente": false,
    "modalidadPrincipal": "online",
    "duracionMinDias": 1,
    "duracionMaxDias": 5,
    "duracionTexto": "1 a 5 días hábiles",
    "tipoResultado": "documento_digital",
    "vigenciaResultadoDias": null,
    "vigenciaTexto": "Vigencia indeterminada",
    "ultimaVerificacion": "2026-09-28",
    "fuenteUrl": "https://www.onpe.gob.pe",
    "frecuenciaBusqueda": 7500,
    "costoResumen": "Totalmente Gratuito (S/ 0.00)",
    "costoPrincipal": 0,
    "baseLegal": "Procedimiento tramitado bajo normativa vigente de ONPE y Compendio Oficial del Estado Peruano.",
    "tags": [
      "lugar votacion",
      "onpe",
      "identidad y documentos",
      "tramite oficial",
      "peru",
      "2026"
    ],
    "requisitos": [
      {
        "id": "req-lugar-votacion-1",
        "descripcion": "Documento Nacional de Identidad (DNI) vigente o carné de extranjería.",
        "aplicaSi": "general",
        "orden": 1
      },
      {
        "id": "req-lugar-votacion-2",
        "descripcion": "No adeudar multas administrativas asociadas.",
        "aplicaSi": "general",
        "orden": 2
      }
    ],
    "pasos": [
      {
        "id": "paso-lugar-votacion-1",
        "orden": 1,
        "modalidad": "online",
        "esOpcional": false,
        "titulo": "Ingresar a onpe.gob.pe o consultar por DNI en su portal",
        "descripcion": "Ingresar a onpe.gob.pe o consultar por DNI en su portal",
        "institucionNombre": "ONPE",
        "institucionUrl": "https://www.onpe.gob.pe",
        "costoTipo": "gratuito",
        "costoMin": 0,
        "costoMax": 0
      },
      {
        "id": "paso-lugar-votacion-2",
        "orden": 2,
        "modalidad": "online",
        "esOpcional": false,
        "titulo": "Ingresar número de DNI",
        "descripcion": "Ingresar número de DNI",
        "institucionNombre": "ONPE",
        "institucionUrl": "https://www.onpe.gob.pe",
        "costoTipo": "gratuito",
        "costoMin": 0,
        "costoMax": 0
      },
      {
        "id": "paso-lugar-votacion-3",
        "orden": 3,
        "modalidad": "presencial",
        "esOpcional": false,
        "titulo": "Ver local, mesa y hora de votación",
        "descripcion": "Ver local, mesa y hora de votación — actualizado por proceso electoral",
        "institucionNombre": "ONPE",
        "institucionUrl": "https://www.onpe.gob.pe",
        "costoTipo": "gratuito",
        "costoMin": 0,
        "costoMax": 0
      }
    ],
    "canalesPago": []
  },
  {
    "id": "tram-multa-electoral",
    "slug": "multa-electoral",
    "nombre": "Pago de multa electoral (omisión al voto)",
    "nombreCorto": "Pago de multa electoral",
    "subgrupo": "IDENTIDAD Y DOCUMENTOS",
    "descripcion": "Pago de multa electoral (omisión al voto) emitido por Oficina Nacional de Procesos Electorales. Consulta costos oficiales, pasos detallados y requisitos actualizados.",
    "categoriaId": "cat-1",
    "categoria": {
      "id": "cat-1",
      "slug": "identidad-documentos",
      "nombre": "Identidad y Documentos",
      "descripcion": "DNI, pasaportes, partidas de nacimiento y trámites de filiación oficial.",
      "icono": "BadgeOutlined"
    },
    "institucionId": "inst-onpe",
    "institucion": {
      "id": "inst-onpe",
      "slug": "onpe",
      "nombre": "Oficina Nacional de Procesos Electorales",
      "sigla": "ONPE",
      "tipo": "nacional",
      "webOficial": "https://www.onpe.gob.pe",
      "descripcion": "Organización de elecciones democráticas en el Perú y gestión de multas por omisión al sufragio.",
      "logoIniciales": "ONP"
    },
    "esCompuesto": false,
    "esRecurrente": false,
    "modalidadPrincipal": "online",
    "duracionMinDias": 1,
    "duracionMaxDias": 5,
    "duracionTexto": "1 a 5 días hábiles",
    "tipoResultado": "documento_digital",
    "vigenciaResultadoDias": null,
    "vigenciaTexto": "Vigencia indeterminada",
    "ultimaVerificacion": "2026-09-28",
    "fuenteUrl": "https://www.onpe.gob.pe",
    "frecuenciaBusqueda": 7500,
    "costoResumen": "S/ 55.00 a S/ 110.00 (variable)",
    "costoPrincipal": 55,
    "baseLegal": "Procedimiento tramitado bajo normativa vigente de ONPE y Compendio Oficial del Estado Peruano.",
    "tags": [
      "multa electoral",
      "onpe",
      "identidad y documentos",
      "tramite oficial",
      "peru",
      "2026"
    ],
    "requisitos": [
      {
        "id": "req-multa-electoral-1",
        "descripcion": "Documento Nacional de Identidad (DNI) vigente o carné de extranjería.",
        "aplicaSi": "general",
        "orden": 1
      },
      {
        "id": "req-multa-electoral-2",
        "descripcion": "Comprobante de pago de la tasa oficial (S/ 55.00 a S/ 110.00 (variable)).",
        "aplicaSi": "general",
        "orden": 2
      }
    ],
    "pasos": [
      {
        "id": "paso-multa-electoral-1",
        "orden": 1,
        "modalidad": "online",
        "esOpcional": false,
        "titulo": "Ingresar a onpe.gob.pe",
        "descripcion": "Ingresar a onpe.gob.pe",
        "institucionNombre": "ONPE",
        "institucionUrl": "https://www.onpe.gob.pe",
        "costoTipo": "gratuito",
        "costoMin": 0,
        "costoMax": 0
      },
      {
        "id": "paso-multa-electoral-2",
        "orden": 2,
        "modalidad": "presencial",
        "esOpcional": false,
        "titulo": "Consultar si tienes multa pendiente con tu DNI",
        "descripcion": "Consultar si tienes multa pendiente con tu DNI",
        "institucionNombre": "ONPE",
        "institucionUrl": "https://www.onpe.gob.pe",
        "costoTipo": "gratuito",
        "costoMin": 0,
        "costoMax": 0
      },
      {
        "id": "paso-multa-electoral-3",
        "orden": 3,
        "modalidad": "presencial",
        "esOpcional": false,
        "titulo": "Pagar en línea",
        "descripcion": "Pagar en línea — S/55 en distrito pobre o S/110 en distrito no pobre",
        "institucionNombre": "ONPE",
        "institucionUrl": "https://www.onpe.gob.pe",
        "costoTipo": "fijo",
        "costoMin": 55,
        "costoMax": 55
      },
      {
        "id": "paso-multa-electoral-4",
        "orden": 4,
        "modalidad": "presencial",
        "esOpcional": false,
        "titulo": "Obtener constancia de pago",
        "descripcion": "Obtener constancia de pago",
        "institucionNombre": "ONPE",
        "institucionUrl": "https://www.onpe.gob.pe",
        "costoTipo": "fijo",
        "costoMin": 55,
        "costoMax": 55
      }
    ],
    "canalesPago": [
      {
        "id": "cp-multa-electoral-1",
        "nombre": "Págalo.pe (Banco de la Nación)",
        "tipo": "online"
      },
      {
        "id": "cp-multa-electoral-2",
        "nombre": "Agencias y Agentes del Banco de la Nación",
        "tipo": "agencia"
      }
    ]
  },
  {
    "id": "tram-certificado-mascotas-senasa",
    "slug": "certificado-mascotas-senasa",
    "nombre": "Certificado Sanitario para Mascotas (SENASA)",
    "nombreCorto": "Certificado Sanitario para Mascotas",
    "subgrupo": "SALUD Y AFILIACIONES",
    "descripcion": "Certificado Sanitario para Mascotas (SENASA) emitido por Servicio Nacional de Sanidad Agraria. Consulta costos oficiales, pasos detallados y requisitos actualizados.",
    "categoriaId": "cat-7",
    "categoria": {
      "id": "cat-7",
      "slug": "salud-social",
      "nombre": "Salud y Afiliaciones",
      "descripcion": "Seguro Integral de Salud (SIS), ESSALUD y constancias médicas.",
      "icono": "HealthAndSafetyOutlined"
    },
    "institucionId": "inst-senasa",
    "institucion": {
      "id": "inst-senasa",
      "slug": "senasa",
      "nombre": "Servicio Nacional de Sanidad Agraria",
      "sigla": "SENASA",
      "tipo": "nacional",
      "webOficial": "https://www.senasa.gob.pe",
      "descripcion": "Sanidad animal y vegetal, emisión de certificados sanitarios para viajes nacionales e internacionales con mascotas.",
      "logoIniciales": "SEN"
    },
    "esCompuesto": false,
    "esRecurrente": false,
    "modalidadPrincipal": "presencial",
    "duracionMinDias": 1,
    "duracionMaxDias": 5,
    "duracionTexto": "1 a 5 días hábiles",
    "tipoResultado": "documento_digital",
    "vigenciaResultadoDias": null,
    "vigenciaTexto": "Vigencia indeterminada",
    "ultimaVerificacion": "2026-09-28",
    "fuenteUrl": "https://www.senasa.gob.pe",
    "frecuenciaBusqueda": 7500,
    "costoResumen": "S/ 40.00",
    "costoPrincipal": 40,
    "baseLegal": "Procedimiento tramitado bajo normativa vigente de SENASA y Compendio Oficial del Estado Peruano.",
    "tags": [
      "certificado mascotas senasa",
      "senasa",
      "salud y afiliaciones",
      "tramite oficial",
      "peru",
      "2026"
    ],
    "requisitos": [
      {
        "id": "req-certificado-mascotas-senasa-1",
        "descripcion": "Documento Nacional de Identidad (DNI) vigente o carné de extranjería.",
        "aplicaSi": "general",
        "orden": 1
      },
      {
        "id": "req-certificado-mascotas-senasa-2",
        "descripcion": "Comprobante de pago de la tasa oficial (S/ 40.00).",
        "aplicaSi": "general",
        "orden": 2
      }
    ],
    "pasos": [
      {
        "id": "paso-certificado-mascotas-senasa-1",
        "orden": 1,
        "modalidad": "presencial",
        "esOpcional": false,
        "titulo": "Llevar mascota a veterinario acreditado por SENASA para revisión",
        "descripcion": "Llevar mascota a veterinario acreditado por SENASA para revisión",
        "institucionNombre": "SENASA",
        "institucionUrl": "https://www.senasa.gob.pe",
        "costoTipo": "gratuito",
        "costoMin": 0,
        "costoMax": 0
      },
      {
        "id": "paso-certificado-mascotas-senasa-2",
        "orden": 2,
        "modalidad": "presencial",
        "esOpcional": false,
        "titulo": "Verificar que vacunas estén al día (rabia obligatoria)",
        "descripcion": "Verificar que vacunas estén al día (rabia obligatoria)",
        "institucionNombre": "SENASA",
        "institucionUrl": "https://www.senasa.gob.pe",
        "costoTipo": "gratuito",
        "costoMin": 0,
        "costoMax": 0
      },
      {
        "id": "paso-certificado-mascotas-senasa-3",
        "orden": 3,
        "modalidad": "presencial",
        "esOpcional": false,
        "titulo": "Solicitar certificado sanitario en senasa.gob.pe o sede SENASA",
        "descripcion": "Solicitar certificado sanitario en senasa.gob.pe o sede SENASA",
        "institucionNombre": "SENASA",
        "institucionUrl": "https://www.senasa.gob.pe",
        "costoTipo": "gratuito",
        "costoMin": 0,
        "costoMax": 0
      },
      {
        "id": "paso-certificado-mascotas-senasa-4",
        "orden": 4,
        "modalidad": "presencial",
        "esOpcional": false,
        "titulo": "Presentar al momento de viajar con mascota",
        "descripcion": "Presentar al momento de viajar con mascota — requerido en viajes nacionales e internacionales",
        "institucionNombre": "SENASA",
        "institucionUrl": "https://www.senasa.gob.pe",
        "costoTipo": "gratuito",
        "costoMin": 0,
        "costoMax": 0
      }
    ],
    "canalesPago": [
      {
        "id": "cp-certificado-mascotas-senasa-1",
        "nombre": "Págalo.pe (Banco de la Nación)",
        "tipo": "online"
      },
      {
        "id": "cp-certificado-mascotas-senasa-2",
        "nombre": "Agencias y Agentes del Banco de la Nación",
        "tipo": "agencia"
      }
    ]
  },
  {
    "id": "tram-entrada-machu-picchu",
    "slug": "entrada-machu-picchu",
    "nombre": "Entrada a Machu Picchu (SERNANP/Cusco)",
    "nombreCorto": "Entrada a Machu Picchu",
    "subgrupo": "IDENTIDAD Y DOCUMENTOS",
    "descripcion": "Entrada a Machu Picchu (SERNANP/Cusco) emitido por Servicio Nacional de Áreas Naturales Protegidas. Consulta costos oficiales, pasos detallados y requisitos actualizados.",
    "categoriaId": "cat-1",
    "categoria": {
      "id": "cat-1",
      "slug": "identidad-documentos",
      "nombre": "Identidad y Documentos",
      "descripcion": "DNI, pasaportes, partidas de nacimiento y trámites de filiación oficial.",
      "icono": "BadgeOutlined"
    },
    "institucionId": "inst-sernanp",
    "institucion": {
      "id": "inst-sernanp",
      "slug": "sernanp",
      "nombre": "Servicio Nacional de Áreas Naturales Protegidas",
      "sigla": "SERNANP",
      "tipo": "nacional",
      "webOficial": "https://www.sernanp.gob.pe",
      "descripcion": "Conservación de áreas naturales protegidas del Perú y regulación de accesos turísticos a reservas y santuarios.",
      "logoIniciales": "SER"
    },
    "esCompuesto": false,
    "esRecurrente": false,
    "modalidadPrincipal": "online",
    "duracionMinDias": 0,
    "duracionMaxDias": 0,
    "duracionTexto": "Inmediato (en el acto)",
    "tipoResultado": "documento_digital",
    "vigenciaResultadoDias": null,
    "vigenciaTexto": "Vigencia indeterminada",
    "ultimaVerificacion": "2026-09-28",
    "fuenteUrl": "https://www.sernanp.gob.pe",
    "frecuenciaBusqueda": 7500,
    "costoResumen": "Nacional adulto: S/ 64.00 / Extranjero adulto: S/ 152.00 / Camino Inca: S/ 200.00",
    "costoPrincipal": 64,
    "baseLegal": "Procedimiento tramitado bajo normativa vigente de SERNANP y Compendio Oficial del Estado Peruano.",
    "tags": [
      "entrada machu picchu",
      "sernanp",
      "identidad y documentos",
      "tramite oficial",
      "peru",
      "2026"
    ],
    "requisitos": [
      {
        "id": "req-entrada-machu-picchu-1",
        "descripcion": "Documento Nacional de Identidad (DNI) vigente o carné de extranjería.",
        "aplicaSi": "general",
        "orden": 1
      },
      {
        "id": "req-entrada-machu-picchu-2",
        "descripcion": "Comprobante de pago de la tasa oficial (Nacional adulto: S/ 64.00 / Extranjero adulto: S/ 152.00 / Camino Inca: S/ 200.00).",
        "aplicaSi": "general",
        "orden": 2
      }
    ],
    "pasos": [
      {
        "id": "paso-entrada-machu-picchu-1",
        "orden": 1,
        "modalidad": "presencial",
        "esOpcional": false,
        "titulo": "Comprar entrada ANTICIPADA en ticketmachupicchu.gob.pe (disponibilidad limi",
        "descripcion": "Comprar entrada ANTICIPADA en ticketmachupicchu.gob.pe (disponibilidad limitada diaria)",
        "institucionNombre": "SERNANP",
        "institucionUrl": "https://www.sernanp.gob.pe",
        "costoTipo": "gratuito",
        "costoMin": 0,
        "costoMax": 0
      },
      {
        "id": "paso-entrada-machu-picchu-2",
        "orden": 2,
        "modalidad": "presencial",
        "esOpcional": false,
        "titulo": "Seleccionar fecha, tipo de circuito y horario de ingreso",
        "descripcion": "Seleccionar fecha, tipo de circuito y horario de ingreso",
        "institucionNombre": "SERNANP",
        "institucionUrl": "https://www.sernanp.gob.pe",
        "costoTipo": "gratuito",
        "costoMin": 0,
        "costoMax": 0
      },
      {
        "id": "paso-entrada-machu-picchu-3",
        "orden": 3,
        "modalidad": "presencial",
        "esOpcional": false,
        "titulo": "Pagar con tarjeta",
        "descripcion": "Pagar con tarjeta — no se venden entradas en la puerta",
        "institucionNombre": "SERNANP",
        "institucionUrl": "https://www.sernanp.gob.pe",
        "costoTipo": "fijo",
        "costoMin": 64,
        "costoMax": 64
      },
      {
        "id": "paso-entrada-machu-picchu-4",
        "orden": 4,
        "modalidad": "presencial",
        "esOpcional": false,
        "titulo": "Presentar ticket digital en la entrada",
        "descripcion": "Presentar ticket digital en la entrada",
        "institucionNombre": "SERNANP",
        "institucionUrl": "https://www.sernanp.gob.pe",
        "costoTipo": "gratuito",
        "costoMin": 0,
        "costoMax": 0
      }
    ],
    "canalesPago": [
      {
        "id": "cp-entrada-machu-picchu-1",
        "nombre": "Págalo.pe (Banco de la Nación)",
        "tipo": "online"
      },
      {
        "id": "cp-entrada-machu-picchu-2",
        "nombre": "Agencias y Agentes del Banco de la Nación",
        "tipo": "agencia"
      }
    ]
  },
  {
    "id": "tram-apertura-cuenta-banco-nacion",
    "slug": "apertura-cuenta-banco-nacion",
    "nombre": "Apertura de cuenta Multired (Banco de la Nación)",
    "nombreCorto": "Apertura de cuenta Multired",
    "subgrupo": "IDENTIDAD Y DOCUMENTOS",
    "descripcion": "Apertura de cuenta Multired (Banco de la Nación) emitido por Banco de la Nación. Consulta costos oficiales, pasos detallados y requisitos actualizados.",
    "categoriaId": "cat-1",
    "categoria": {
      "id": "cat-1",
      "slug": "identidad-documentos",
      "nombre": "Identidad y Documentos",
      "descripcion": "DNI, pasaportes, partidas de nacimiento y trámites de filiación oficial.",
      "icono": "BadgeOutlined"
    },
    "institucionId": "inst-banco-nacion",
    "institucion": {
      "id": "inst-banco-nacion",
      "slug": "banco-de-la-nacion",
      "nombre": "Banco de la Nación",
      "sigla": "Banco de la Nación",
      "tipo": "nacional",
      "webOficial": "https://www.bn.com.pe",
      "descripcion": "Entidad financiera del Estado que opera la plataforma Págalo.pe y cuentas Multired para ciudadanos.",
      "logoIniciales": "BN"
    },
    "esCompuesto": false,
    "esRecurrente": false,
    "modalidadPrincipal": "presencial",
    "duracionMinDias": 1,
    "duracionMaxDias": 5,
    "duracionTexto": "1 a 5 días hábiles",
    "tipoResultado": "documento_digital",
    "vigenciaResultadoDias": null,
    "vigenciaTexto": "Vigencia indeterminada",
    "ultimaVerificacion": "2026-09-28",
    "fuenteUrl": "https://www.bn.com.pe",
    "frecuenciaBusqueda": 7500,
    "costoResumen": "Totalmente Gratuito (S/ 0.00)",
    "costoPrincipal": 0,
    "baseLegal": "Procedimiento tramitado bajo normativa vigente de Banco de la Nación y Compendio Oficial del Estado Peruano.",
    "tags": [
      "apertura cuenta banco nacion",
      "banco de la nación",
      "identidad y documentos",
      "tramite oficial",
      "peru",
      "2026"
    ],
    "requisitos": [
      {
        "id": "req-apertura-cuenta-banco-nacion-1",
        "descripcion": "Documento Nacional de Identidad (DNI) vigente o carné de extranjería.",
        "aplicaSi": "general",
        "orden": 1
      },
      {
        "id": "req-apertura-cuenta-banco-nacion-2",
        "descripcion": "No adeudar multas administrativas asociadas.",
        "aplicaSi": "general",
        "orden": 2
      }
    ],
    "pasos": [
      {
        "id": "paso-apertura-cuenta-banco-nacion-1",
        "orden": 1,
        "modalidad": "presencial",
        "esOpcional": false,
        "titulo": "Acudir a agencia del Banco de la Nación con DNI original",
        "descripcion": "Acudir a agencia del Banco de la Nación con DNI original",
        "institucionNombre": "Banco de la Nación",
        "institucionUrl": "https://www.bn.com.pe",
        "costoTipo": "gratuito",
        "costoMin": 0,
        "costoMax": 0
      },
      {
        "id": "paso-apertura-cuenta-banco-nacion-2",
        "orden": 2,
        "modalidad": "presencial",
        "esOpcional": false,
        "titulo": "Solicitar apertura de cuenta de ahorros Multired",
        "descripcion": "Solicitar apertura de cuenta de ahorros Multired",
        "institucionNombre": "Banco de la Nación",
        "institucionUrl": "https://www.bn.com.pe",
        "costoTipo": "gratuito",
        "costoMin": 0,
        "costoMax": 0
      },
      {
        "id": "paso-apertura-cuenta-banco-nacion-3",
        "orden": 3,
        "modalidad": "presencial",
        "esOpcional": false,
        "titulo": "Depositar monto mínimo inicial si aplica",
        "descripcion": "Depositar monto mínimo inicial si aplica",
        "institucionNombre": "Banco de la Nación",
        "institucionUrl": "https://www.bn.com.pe",
        "costoTipo": "gratuito",
        "costoMin": 0,
        "costoMax": 0
      },
      {
        "id": "paso-apertura-cuenta-banco-nacion-4",
        "orden": 4,
        "modalidad": "presencial",
        "esOpcional": false,
        "titulo": "Recibir tarjeta Multired en el acto",
        "descripcion": "Recibir tarjeta Multired en el acto",
        "institucionNombre": "Banco de la Nación",
        "institucionUrl": "https://www.bn.com.pe",
        "costoTipo": "gratuito",
        "costoMin": 0,
        "costoMax": 0
      }
    ],
    "canalesPago": []
  },
  {
    "id": "tram-pago-pagalo-pe",
    "slug": "pago-pagalo-pe",
    "nombre": "Pago de tasas estatales en Págalo.pe",
    "nombreCorto": "Pago de tasas estatales en Págalo.pe",
    "subgrupo": "IDENTIDAD Y DOCUMENTOS",
    "descripcion": "Pago de tasas estatales en Págalo.pe emitido por Banco de la Nación. Consulta costos oficiales, pasos detallados y requisitos actualizados.",
    "categoriaId": "cat-1",
    "categoria": {
      "id": "cat-1",
      "slug": "identidad-documentos",
      "nombre": "Identidad y Documentos",
      "descripcion": "DNI, pasaportes, partidas de nacimiento y trámites de filiación oficial.",
      "icono": "BadgeOutlined"
    },
    "institucionId": "inst-banco-nacion",
    "institucion": {
      "id": "inst-banco-nacion",
      "slug": "banco-de-la-nacion",
      "nombre": "Banco de la Nación",
      "sigla": "Banco de la Nación",
      "tipo": "nacional",
      "webOficial": "https://www.bn.com.pe",
      "descripcion": "Entidad financiera del Estado que opera la plataforma Págalo.pe y cuentas Multired para ciudadanos.",
      "logoIniciales": "BN"
    },
    "esCompuesto": false,
    "esRecurrente": false,
    "modalidadPrincipal": "online",
    "duracionMinDias": 1,
    "duracionMaxDias": 5,
    "duracionTexto": "1 a 5 días hábiles",
    "tipoResultado": "documento_digital",
    "vigenciaResultadoDias": null,
    "vigenciaTexto": "Vigencia indeterminada",
    "ultimaVerificacion": "2026-09-28",
    "fuenteUrl": "https://www.bn.com.pe",
    "frecuenciaBusqueda": 7500,
    "costoResumen": "Totalmente Gratuito (S/ 0.00)",
    "costoPrincipal": 0,
    "baseLegal": "Procedimiento tramitado bajo normativa vigente de Banco de la Nación y Compendio Oficial del Estado Peruano.",
    "tags": [
      "pago pagalo pe",
      "banco de la nación",
      "identidad y documentos",
      "tramite oficial",
      "peru",
      "2026"
    ],
    "requisitos": [
      {
        "id": "req-pago-pagalo-pe-1",
        "descripcion": "Documento Nacional de Identidad (DNI) vigente o carné de extranjería.",
        "aplicaSi": "general",
        "orden": 1
      },
      {
        "id": "req-pago-pagalo-pe-2",
        "descripcion": "No adeudar multas administrativas asociadas.",
        "aplicaSi": "general",
        "orden": 2
      }
    ],
    "pasos": [
      {
        "id": "paso-pago-pagalo-pe-1",
        "orden": 1,
        "modalidad": "online",
        "esOpcional": false,
        "titulo": "Ingresar a pagalo.pe",
        "descripcion": "Ingresar a pagalo.pe",
        "institucionNombre": "Banco de la Nación",
        "institucionUrl": "https://www.bn.com.pe",
        "costoTipo": "gratuito",
        "costoMin": 0,
        "costoMax": 0
      },
      {
        "id": "paso-pago-pagalo-pe-2",
        "orden": 2,
        "modalidad": "presencial",
        "esOpcional": false,
        "titulo": "Seleccionar entidad (RENIEC, MTC, PJ, etc.)",
        "descripcion": "Seleccionar entidad (RENIEC, MTC, PJ, etc.)",
        "institucionNombre": "Banco de la Nación",
        "institucionUrl": "https://www.bn.com.pe",
        "costoTipo": "gratuito",
        "costoMin": 0,
        "costoMax": 0
      },
      {
        "id": "paso-pago-pagalo-pe-3",
        "orden": 3,
        "modalidad": "online",
        "esOpcional": false,
        "titulo": "Ingresar código de tasa del trámite específico",
        "descripcion": "Ingresar código de tasa del trámite específico",
        "institucionNombre": "Banco de la Nación",
        "institucionUrl": "https://www.bn.com.pe",
        "costoTipo": "gratuito",
        "costoMin": 0,
        "costoMax": 0
      },
      {
        "id": "paso-pago-pagalo-pe-4",
        "orden": 4,
        "modalidad": "presencial",
        "esOpcional": false,
        "titulo": "Pagar con tarjeta o Yape",
        "descripcion": "Pagar con tarjeta o Yape — recibo digital inmediato",
        "institucionNombre": "Banco de la Nación",
        "institucionUrl": "https://www.bn.com.pe",
        "costoTipo": "gratuito",
        "costoMin": 0,
        "costoMax": 0
      },
      {
        "id": "paso-pago-pagalo-pe-5",
        "orden": 5,
        "modalidad": "presencial",
        "esOpcional": false,
        "titulo": "Usar número de operación al presentar la solicitud del trámite",
        "descripcion": "Usar número de operación al presentar la solicitud del trámite",
        "institucionNombre": "Banco de la Nación",
        "institucionUrl": "https://www.bn.com.pe",
        "costoTipo": "gratuito",
        "costoMin": 0,
        "costoMax": 0
      }
    ],
    "canalesPago": []
  },
  {
    "id": "tram-inscripcion-rnp-oece",
    "slug": "inscripcion-rnp-oece",
    "nombre": "Inscripción en el RNP (proveedor del Estado)",
    "nombreCorto": "Inscripción en el RNP",
    "subgrupo": "TRIBUTOS Y RUC",
    "descripcion": "Inscripción en el RNP (proveedor del Estado) emitido por Organismo Especializado para las Contrataciones del Estado (ex-OSCE). Consulta costos oficiales, pasos detallados y requisitos actualizados.",
    "categoriaId": "cat-3",
    "categoria": {
      "id": "cat-3",
      "slug": "tributos-empresas",
      "nombre": "Tributos y RUC",
      "descripcion": "Inscripción RUC, Clave SOL, declaración de impuestos y constitución empresarial.",
      "icono": "AccountBalanceOutlined"
    },
    "institucionId": "inst-oece",
    "institucion": {
      "id": "inst-oece",
      "slug": "oece",
      "nombre": "Organismo Especializado para las Contrataciones del Estado (ex-OSCE)",
      "sigla": "OECE",
      "tipo": "nacional",
      "webOficial": "https://www.gob.pe/oece",
      "descripcion": "Administración del Registro Nacional de Proveedores (RNP) y supervisión de compras públicas estatales.",
      "logoIniciales": "OEC"
    },
    "esCompuesto": false,
    "esRecurrente": false,
    "modalidadPrincipal": "online",
    "duracionMinDias": 1,
    "duracionMaxDias": 5,
    "duracionTexto": "1 a 5 días hábiles",
    "tipoResultado": "documento_digital",
    "vigenciaResultadoDias": null,
    "vigenciaTexto": "Vigencia indeterminada",
    "ultimaVerificacion": "2026-09-28",
    "fuenteUrl": "https://www.gob.pe/oece",
    "frecuenciaBusqueda": 7500,
    "costoResumen": "S/ 100.00 a S/ 300.00 (variable)",
    "costoPrincipal": 100,
    "baseLegal": "Procedimiento tramitado bajo normativa vigente de OECE y Compendio Oficial del Estado Peruano.",
    "tags": [
      "inscripcion rnp oece",
      "oece",
      "tributos y ruc",
      "tramite oficial",
      "peru",
      "2026"
    ],
    "requisitos": [
      {
        "id": "req-inscripcion-rnp-oece-1",
        "descripcion": "Documento Nacional de Identidad (DNI) vigente o carné de extranjería.",
        "aplicaSi": "general",
        "orden": 1
      },
      {
        "id": "req-inscripcion-rnp-oece-2",
        "descripcion": "Comprobante de pago de la tasa oficial (S/ 100.00 a S/ 300.00 (variable)).",
        "aplicaSi": "general",
        "orden": 2
      }
    ],
    "pasos": [
      {
        "id": "paso-inscripcion-rnp-oece-1",
        "orden": 1,
        "modalidad": "online",
        "esOpcional": false,
        "titulo": "Ingresar a rnp.oece.gob.pe",
        "descripcion": "Ingresar a rnp.oece.gob.pe",
        "institucionNombre": "OECE",
        "institucionUrl": "https://www.gob.pe/oece",
        "costoTipo": "gratuito",
        "costoMin": 0,
        "costoMax": 0
      },
      {
        "id": "paso-inscripcion-rnp-oece-2",
        "orden": 2,
        "modalidad": "presencial",
        "esOpcional": false,
        "titulo": "Registrar empresa con RUC, datos legales y representante legal",
        "descripcion": "Registrar empresa con RUC, datos legales y representante legal",
        "institucionNombre": "OECE",
        "institucionUrl": "https://www.gob.pe/oece",
        "costoTipo": "gratuito",
        "costoMin": 0,
        "costoMax": 0
      },
      {
        "id": "paso-inscripcion-rnp-oece-3",
        "orden": 3,
        "modalidad": "presencial",
        "esOpcional": false,
        "titulo": "Pagar tasa de inscripción según tipo de proveedor",
        "descripcion": "Pagar tasa de inscripción según tipo de proveedor",
        "institucionNombre": "OECE",
        "institucionUrl": "https://www.gob.pe/oece",
        "costoTipo": "fijo",
        "costoMin": 100,
        "costoMax": 100
      },
      {
        "id": "paso-inscripcion-rnp-oece-4",
        "orden": 4,
        "modalidad": "presencial",
        "esOpcional": false,
        "titulo": "Pasar evaluación",
        "descripcion": "Pasar evaluación — OECE valida antecedentes y capacidad",
        "institucionNombre": "OECE",
        "institucionUrl": "https://www.gob.pe/oece",
        "costoTipo": "gratuito",
        "costoMin": 0,
        "costoMax": 0
      },
      {
        "id": "paso-inscripcion-rnp-oece-5",
        "orden": 5,
        "modalidad": "presencial",
        "esOpcional": false,
        "titulo": "Obtener certificado RNP",
        "descripcion": "Obtener certificado RNP — requerido para contratar con el Estado",
        "institucionNombre": "OECE",
        "institucionUrl": "https://www.gob.pe/oece",
        "costoTipo": "gratuito",
        "costoMin": 0,
        "costoMax": 0
      }
    ],
    "canalesPago": [
      {
        "id": "cp-inscripcion-rnp-oece-1",
        "nombre": "Págalo.pe (Banco de la Nación)",
        "tipo": "online"
      },
      {
        "id": "cp-inscripcion-rnp-oece-2",
        "nombre": "Agencias y Agentes del Banco de la Nación",
        "tipo": "agencia"
      }
    ]
  },
  {
    "id": "tram-titulo-propiedad-cofopri",
    "slug": "titulo-propiedad-cofopri",
    "nombre": "Título de propiedad informal (COFOPRI)",
    "nombreCorto": "Título de propiedad informal",
    "subgrupo": "MUNICIPAL Y VIVIENDA",
    "descripcion": "Título de propiedad informal (COFOPRI) emitido por Organismo de Formalización de la Propiedad Informal. Consulta costos oficiales, pasos detallados y requisitos actualizados.",
    "categoriaId": "cat-6",
    "categoria": {
      "id": "cat-6",
      "slug": "municipal-vivienda",
      "nombre": "Municipal y Vivienda",
      "descripcion": "Impuesto predial, arbitrios, licencias de funcionamiento e inspecciones ITSE.",
      "icono": "ApartmentOutlined"
    },
    "institucionId": "inst-cofopri",
    "institucion": {
      "id": "inst-cofopri",
      "slug": "cofopri",
      "nombre": "Organismo de Formalización de la Propiedad Informal",
      "sigla": "COFOPRI",
      "tipo": "nacional",
      "webOficial": "https://www.cofopri.gob.pe",
      "descripcion": "Saneamiento físico-legal y titulación gratuita de posesiones informales en todo el país.",
      "logoIniciales": "COF"
    },
    "esCompuesto": false,
    "esRecurrente": false,
    "modalidadPrincipal": "presencial",
    "duracionMinDias": 1,
    "duracionMaxDias": 5,
    "duracionTexto": "1 a 5 días hábiles",
    "tipoResultado": "documento_digital",
    "vigenciaResultadoDias": null,
    "vigenciaTexto": "Vigencia indeterminada",
    "ultimaVerificacion": "2026-09-28",
    "fuenteUrl": "https://www.cofopri.gob.pe",
    "frecuenciaBusqueda": 7500,
    "costoResumen": "Totalmente Gratuito (S/ 0.00)",
    "costoPrincipal": 0,
    "baseLegal": "Procedimiento tramitado bajo normativa vigente de COFOPRI y Compendio Oficial del Estado Peruano.",
    "tags": [
      "titulo propiedad cofopri",
      "cofopri",
      "municipal y vivienda",
      "tramite oficial",
      "peru",
      "2026"
    ],
    "requisitos": [
      {
        "id": "req-titulo-propiedad-cofopri-1",
        "descripcion": "Documento Nacional de Identidad (DNI) vigente o carné de extranjería.",
        "aplicaSi": "general",
        "orden": 1
      },
      {
        "id": "req-titulo-propiedad-cofopri-2",
        "descripcion": "No adeudar multas administrativas asociadas.",
        "aplicaSi": "general",
        "orden": 2
      }
    ],
    "pasos": [
      {
        "id": "paso-titulo-propiedad-cofopri-1",
        "orden": 1,
        "modalidad": "presencial",
        "esOpcional": false,
        "titulo": "Verificar si tu predio está en zona de intervención COFOPRI (cofopri.gob.pe",
        "descripcion": "Verificar si tu predio está en zona de intervención COFOPRI (cofopri.gob.pe/siga)",
        "institucionNombre": "COFOPRI",
        "institucionUrl": "https://www.cofopri.gob.pe",
        "costoTipo": "gratuito",
        "costoMin": 0,
        "costoMax": 0
      },
      {
        "id": "paso-titulo-propiedad-cofopri-2",
        "orden": 2,
        "modalidad": "presencial",
        "esOpcional": false,
        "titulo": "Acudir a oficina COFOPRI con documentos de posesión (antiguos recibos, test",
        "descripcion": "Acudir a oficina COFOPRI con documentos de posesión (antiguos recibos, testigos, fotografías)",
        "institucionNombre": "COFOPRI",
        "institucionUrl": "https://www.cofopri.gob.pe",
        "costoTipo": "gratuito",
        "costoMin": 0,
        "costoMax": 0
      },
      {
        "id": "paso-titulo-propiedad-cofopri-3",
        "orden": 3,
        "modalidad": "presencial",
        "esOpcional": false,
        "titulo": "COFOPRI realiza levantamiento catastral",
        "descripcion": "COFOPRI realiza levantamiento catastral",
        "institucionNombre": "COFOPRI",
        "institucionUrl": "https://www.cofopri.gob.pe",
        "costoTipo": "gratuito",
        "costoMin": 0,
        "costoMax": 0
      },
      {
        "id": "paso-titulo-propiedad-cofopri-4",
        "orden": 4,
        "modalidad": "presencial",
        "esOpcional": false,
        "titulo": "Inscripción en SUNARP del título de propiedad",
        "descripcion": "Inscripción en SUNARP del título de propiedad — gratuito bajo la Ley 28391",
        "institucionNombre": "COFOPRI",
        "institucionUrl": "https://www.cofopri.gob.pe",
        "costoTipo": "gratuito",
        "costoMin": 0,
        "costoMax": 0
      }
    ],
    "canalesPago": []
  },
  {
    "id": "tram-licencia-arma-sucamec",
    "slug": "licencia-arma-sucamec",
    "nombre": "Licencia de posesión de arma de fuego (SUCAMEC)",
    "nombreCorto": "Licencia de posesión de arma de fuego",
    "subgrupo": "IDENTIDAD Y DOCUMENTOS",
    "descripcion": "Licencia de posesión de arma de fuego (SUCAMEC) emitido por Superintendencia Nacional de Control de Servicios de Seguridad, Armas y Explosivos. Consulta costos oficiales, pasos detallados y requisitos actualizados.",
    "categoriaId": "cat-1",
    "categoria": {
      "id": "cat-1",
      "slug": "identidad-documentos",
      "nombre": "Identidad y Documentos",
      "descripcion": "DNI, pasaportes, partidas de nacimiento y trámites de filiación oficial.",
      "icono": "BadgeOutlined"
    },
    "institucionId": "inst-sucamec",
    "institucion": {
      "id": "inst-sucamec",
      "slug": "sucamec",
      "nombre": "Superintendencia Nacional de Control de Servicios de Seguridad, Armas y Explosivos",
      "sigla": "SUCAMEC",
      "tipo": "nacional",
      "webOficial": "https://www.sucamec.gob.pe",
      "descripcion": "Control, registro y emisión de licencias de posesión de armas de fuego y pirotecnia de uso civil.",
      "logoIniciales": "SUC"
    },
    "esCompuesto": false,
    "esRecurrente": false,
    "modalidadPrincipal": "presencial",
    "duracionMinDias": 1,
    "duracionMaxDias": 5,
    "duracionTexto": "1 a 5 días hábiles",
    "tipoResultado": "documento_digital",
    "vigenciaResultadoDias": null,
    "vigenciaTexto": "Vigencia indeterminada",
    "ultimaVerificacion": "2026-09-28",
    "fuenteUrl": "https://www.sucamec.gob.pe",
    "frecuenciaBusqueda": 7500,
    "costoResumen": "S/ 167.00",
    "costoPrincipal": 167,
    "baseLegal": "Procedimiento tramitado bajo normativa vigente de SUCAMEC y Compendio Oficial del Estado Peruano.",
    "tags": [
      "licencia arma sucamec",
      "sucamec",
      "identidad y documentos",
      "tramite oficial",
      "peru",
      "2026"
    ],
    "requisitos": [
      {
        "id": "req-licencia-arma-sucamec-1",
        "descripcion": "Documento Nacional de Identidad (DNI) vigente o carné de extranjería.",
        "aplicaSi": "general",
        "orden": 1
      },
      {
        "id": "req-licencia-arma-sucamec-2",
        "descripcion": "Comprobante de pago de la tasa oficial (S/ 167.00).",
        "aplicaSi": "general",
        "orden": 2
      }
    ],
    "pasos": [
      {
        "id": "paso-licencia-arma-sucamec-1",
        "orden": 1,
        "modalidad": "presencial",
        "esOpcional": false,
        "titulo": "Tramitar certificado de antecedentes penales y policiales",
        "descripcion": "Tramitar certificado de antecedentes penales y policiales",
        "institucionNombre": "SUCAMEC",
        "institucionUrl": "https://www.sucamec.gob.pe",
        "costoTipo": "gratuito",
        "costoMin": 0,
        "costoMax": 0
      },
      {
        "id": "paso-licencia-arma-sucamec-2",
        "orden": 2,
        "modalidad": "presencial",
        "esOpcional": false,
        "titulo": "Obtener evaluación psicológica y médica en clínica autorizada por SUCAMEC",
        "descripcion": "Obtener evaluación psicológica y médica en clínica autorizada por SUCAMEC",
        "institucionNombre": "SUCAMEC",
        "institucionUrl": "https://www.sucamec.gob.pe",
        "costoTipo": "gratuito",
        "costoMin": 0,
        "costoMax": 0
      },
      {
        "id": "paso-licencia-arma-sucamec-3",
        "orden": 3,
        "modalidad": "presencial",
        "esOpcional": false,
        "titulo": "Tomar curso de seguridad en armas en escuela autorizada",
        "descripcion": "Tomar curso de seguridad en armas en escuela autorizada",
        "institucionNombre": "SUCAMEC",
        "institucionUrl": "https://www.sucamec.gob.pe",
        "costoTipo": "gratuito",
        "costoMin": 0,
        "costoMax": 0
      },
      {
        "id": "paso-licencia-arma-sucamec-4",
        "orden": 4,
        "modalidad": "presencial",
        "esOpcional": false,
        "titulo": "Presentar expediente completo en sede SUCAMEC con DNI",
        "descripcion": "Presentar expediente completo en sede SUCAMEC con DNI",
        "institucionNombre": "SUCAMEC",
        "institucionUrl": "https://www.sucamec.gob.pe",
        "costoTipo": "gratuito",
        "costoMin": 0,
        "costoMax": 0
      },
      {
        "id": "paso-licencia-arma-sucamec-5",
        "orden": 5,
        "modalidad": "presencial",
        "esOpcional": false,
        "titulo": "Pagar S/167 y obtener licencia",
        "descripcion": "Pagar S/167 y obtener licencia — válida 3 años",
        "institucionNombre": "SUCAMEC",
        "institucionUrl": "https://www.sucamec.gob.pe",
        "costoTipo": "fijo",
        "costoMin": 167,
        "costoMax": 167
      }
    ],
    "canalesPago": [
      {
        "id": "cp-licencia-arma-sucamec-1",
        "nombre": "Págalo.pe (Banco de la Nación)",
        "tipo": "online"
      },
      {
        "id": "cp-licencia-arma-sucamec-2",
        "nombre": "Agencias y Agentes del Banco de la Nación",
        "tipo": "agencia"
      }
    ]
  },
  {
    "id": "tram-reclamo-eps-susalud",
    "slug": "reclamo-eps-susalud",
    "nombre": "Reclamo contra EPS o clínica (SUSALUD)",
    "nombreCorto": "Reclamo contra EPS o clínica",
    "subgrupo": "DEFENSA DEL CONSUMIDOR Y DERECHOS",
    "descripcion": "Reclamo contra EPS o clínica (SUSALUD) emitido por Superintendencia Nacional de Salud. Consulta costos oficiales, pasos detallados y requisitos actualizados.",
    "categoriaId": "cat-10",
    "categoria": {
      "id": "cat-10",
      "slug": "consumidor-defensoria",
      "nombre": "Defensa del Consumidor y Derechos",
      "descripcion": "Reclamos ante INDECOPI, OSIPTEL, OSINERGMIN, SUNASS y Defensoría.",
      "icono": "GavelOutlined"
    },
    "institucionId": "inst-susalud",
    "institucion": {
      "id": "inst-susalud",
      "slug": "susalud",
      "nombre": "Superintendencia Nacional de Salud",
      "sigla": "SUSALUD",
      "tipo": "nacional",
      "webOficial": "https://www.susalud.gob.pe",
      "descripcion": "Protección y restitución de los derechos en salud de los usuarios frente a clínicas y aseguradoras EPS.",
      "logoIniciales": "SUS"
    },
    "esCompuesto": false,
    "esRecurrente": false,
    "modalidadPrincipal": "online",
    "duracionMinDias": 1,
    "duracionMaxDias": 5,
    "duracionTexto": "1 a 5 días hábiles",
    "tipoResultado": "documento_digital",
    "vigenciaResultadoDias": null,
    "vigenciaTexto": "Vigencia indeterminada",
    "ultimaVerificacion": "2026-09-28",
    "fuenteUrl": "https://www.susalud.gob.pe",
    "frecuenciaBusqueda": 7500,
    "costoResumen": "Totalmente Gratuito (S/ 0.00)",
    "costoPrincipal": 0,
    "baseLegal": "Procedimiento tramitado bajo normativa vigente de SUSALUD y Compendio Oficial del Estado Peruano.",
    "tags": [
      "reclamo eps susalud",
      "susalud",
      "defensa del consumidor y derechos",
      "tramite oficial",
      "peru",
      "2026"
    ],
    "requisitos": [
      {
        "id": "req-reclamo-eps-susalud-1",
        "descripcion": "Documento Nacional de Identidad (DNI) vigente o carné de extranjería.",
        "aplicaSi": "general",
        "orden": 1
      },
      {
        "id": "req-reclamo-eps-susalud-2",
        "descripcion": "No adeudar multas administrativas asociadas.",
        "aplicaSi": "general",
        "orden": 2
      }
    ],
    "pasos": [
      {
        "id": "paso-reclamo-eps-susalud-1",
        "orden": 1,
        "modalidad": "presencial",
        "esOpcional": false,
        "titulo": "Reclamar primero ante tu EPS o clínica (obligatorio como paso previo)",
        "descripcion": "Reclamar primero ante tu EPS o clínica (obligatorio como paso previo)",
        "institucionNombre": "SUSALUD",
        "institucionUrl": "https://www.susalud.gob.pe",
        "costoTipo": "gratuito",
        "costoMin": 0,
        "costoMax": 0
      },
      {
        "id": "paso-reclamo-eps-susalud-2",
        "orden": 2,
        "modalidad": "online",
        "esOpcional": false,
        "titulo": "Si no responden en 30 días, ingresar a susalud.gob.pe/reclamo",
        "descripcion": "Si no responden en 30 días, ingresar a susalud.gob.pe/reclamo",
        "institucionNombre": "SUSALUD",
        "institucionUrl": "https://www.susalud.gob.pe",
        "costoTipo": "gratuito",
        "costoMin": 0,
        "costoMax": 0
      },
      {
        "id": "paso-reclamo-eps-susalud-3",
        "orden": 3,
        "modalidad": "presencial",
        "esOpcional": false,
        "titulo": "Adjuntar respuesta de la EPS o constancia de presentación",
        "descripcion": "Adjuntar respuesta de la EPS o constancia de presentación",
        "institucionNombre": "SUSALUD",
        "institucionUrl": "https://www.susalud.gob.pe",
        "costoTipo": "gratuito",
        "costoMin": 0,
        "costoMax": 0
      },
      {
        "id": "paso-reclamo-eps-susalud-4",
        "orden": 4,
        "modalidad": "presencial",
        "esOpcional": false,
        "titulo": "Describir la negativa de cobertura o mala atención",
        "descripcion": "Describir la negativa de cobertura o mala atención",
        "institucionNombre": "SUSALUD",
        "institucionUrl": "https://www.susalud.gob.pe",
        "costoTipo": "gratuito",
        "costoMin": 0,
        "costoMax": 0
      },
      {
        "id": "paso-reclamo-eps-susalud-5",
        "orden": 5,
        "modalidad": "presencial",
        "esOpcional": false,
        "titulo": "SUSALUD resuelve en 30 días adicionales",
        "descripcion": "SUSALUD resuelve en 30 días adicionales",
        "institucionNombre": "SUSALUD",
        "institucionUrl": "https://www.susalud.gob.pe",
        "costoTipo": "gratuito",
        "costoMin": 0,
        "costoMax": 0
      }
    ],
    "canalesPago": []
  },
  {
    "id": "tram-impuesto-vehicular-sat",
    "slug": "impuesto-vehicular-sat",
    "nombre": "Impuesto Vehicular (SAT Lima)",
    "nombreCorto": "Impuesto Vehicular",
    "subgrupo": "MUNICIPAL Y VIVIENDA",
    "descripcion": "Impuesto Vehicular (SAT Lima) emitido por Servicio de Administración Tributaria de Lima. Consulta costos oficiales, pasos detallados y requisitos actualizados.",
    "categoriaId": "cat-6",
    "categoria": {
      "id": "cat-6",
      "slug": "municipal-vivienda",
      "nombre": "Municipal y Vivienda",
      "descripcion": "Impuesto predial, arbitrios, licencias de funcionamiento e inspecciones ITSE.",
      "icono": "ApartmentOutlined"
    },
    "institucionId": "inst-sat",
    "institucion": {
      "id": "inst-sat",
      "slug": "sat",
      "nombre": "Servicio de Administración Tributaria de Lima",
      "sigla": "SAT Lima",
      "tipo": "municipal",
      "webOficial": "https://www.sat.gob.pe",
      "descripcion": "Recaudación de tributos municipales, arbitrios, impuesto vehicular y papeletas de tránsito en Lima.",
      "logoIniciales": "SAT"
    },
    "esCompuesto": false,
    "esRecurrente": true,
    "modalidadPrincipal": "online",
    "duracionMinDias": 1,
    "duracionMaxDias": 5,
    "duracionTexto": "1 a 5 días hábiles",
    "tipoResultado": "documento_digital",
    "vigenciaResultadoDias": null,
    "vigenciaTexto": "Vigencia indeterminada",
    "ultimaVerificacion": "2026-09-28",
    "fuenteUrl": "https://www.sat.gob.pe",
    "frecuenciaBusqueda": 7500,
    "costoResumen": "Totalmente Gratuito (S/ 0.00)",
    "costoPrincipal": 0,
    "baseLegal": "Procedimiento tramitado bajo normativa vigente de SAT Lima y Compendio Oficial del Estado Peruano.",
    "tags": [
      "impuesto vehicular sat",
      "sat lima",
      "municipal y vivienda",
      "tramite oficial",
      "peru",
      "2026"
    ],
    "requisitos": [
      {
        "id": "req-impuesto-vehicular-sat-1",
        "descripcion": "Documento Nacional de Identidad (DNI) vigente o carné de extranjería.",
        "aplicaSi": "general",
        "orden": 1
      },
      {
        "id": "req-impuesto-vehicular-sat-2",
        "descripcion": "No adeudar multas administrativas asociadas.",
        "aplicaSi": "general",
        "orden": 2
      }
    ],
    "pasos": [
      {
        "id": "paso-impuesto-vehicular-sat-1",
        "orden": 1,
        "modalidad": "online",
        "esOpcional": false,
        "titulo": "Ingresar a sat.gob.pe o app SAT Lima",
        "descripcion": "Ingresar a sat.gob.pe o app SAT Lima",
        "institucionNombre": "SAT Lima",
        "institucionUrl": "https://www.sat.gob.pe",
        "costoTipo": "gratuito",
        "costoMin": 0,
        "costoMax": 0
      },
      {
        "id": "paso-impuesto-vehicular-sat-2",
        "orden": 2,
        "modalidad": "presencial",
        "esOpcional": false,
        "titulo": "Buscar vehículo por placa",
        "descripcion": "Buscar vehículo por placa",
        "institucionNombre": "SAT Lima",
        "institucionUrl": "https://www.sat.gob.pe",
        "costoTipo": "gratuito",
        "costoMin": 0,
        "costoMax": 0
      },
      {
        "id": "paso-impuesto-vehicular-sat-3",
        "orden": 3,
        "modalidad": "presencial",
        "esOpcional": false,
        "titulo": "Verificar deuda de impuesto vehicular anual (3% del valor del vehículo)",
        "descripcion": "Verificar deuda de impuesto vehicular anual (3% del valor del vehículo)",
        "institucionNombre": "SAT Lima",
        "institucionUrl": "https://www.sat.gob.pe",
        "costoTipo": "gratuito",
        "costoMin": 0,
        "costoMax": 0
      },
      {
        "id": "paso-impuesto-vehicular-sat-4",
        "orden": 4,
        "modalidad": "presencial",
        "esOpcional": false,
        "titulo": "Pagar en línea, agencia bancaria o sede SAT",
        "descripcion": "Pagar en línea, agencia bancaria o sede SAT — puede haber descuento por pronto pago",
        "institucionNombre": "SAT Lima",
        "institucionUrl": "https://www.sat.gob.pe",
        "costoTipo": "gratuito",
        "costoMin": 0,
        "costoMax": 0
      }
    ],
    "canalesPago": []
  },
  {
    "id": "tram-papeleta-transito-sat",
    "slug": "papeleta-transito-sat",
    "nombre": "Consulta y pago de papeletas de tránsito (SAT Lima)",
    "nombreCorto": "Consulta y pago de papeletas de tránsito",
    "subgrupo": "MUNICIPAL Y VIVIENDA",
    "descripcion": "Consulta y pago de papeletas de tránsito (SAT Lima) emitido por Servicio de Administración Tributaria de Lima. Consulta costos oficiales, pasos detallados y requisitos actualizados.",
    "categoriaId": "cat-6",
    "categoria": {
      "id": "cat-6",
      "slug": "municipal-vivienda",
      "nombre": "Municipal y Vivienda",
      "descripcion": "Impuesto predial, arbitrios, licencias de funcionamiento e inspecciones ITSE.",
      "icono": "ApartmentOutlined"
    },
    "institucionId": "inst-sat",
    "institucion": {
      "id": "inst-sat",
      "slug": "sat",
      "nombre": "Servicio de Administración Tributaria de Lima",
      "sigla": "SAT Lima",
      "tipo": "municipal",
      "webOficial": "https://www.sat.gob.pe",
      "descripcion": "Recaudación de tributos municipales, arbitrios, impuesto vehicular y papeletas de tránsito en Lima.",
      "logoIniciales": "SAT"
    },
    "esCompuesto": false,
    "esRecurrente": false,
    "modalidadPrincipal": "online",
    "duracionMinDias": 1,
    "duracionMaxDias": 5,
    "duracionTexto": "1 a 5 días hábiles",
    "tipoResultado": "documento_digital",
    "vigenciaResultadoDias": null,
    "vigenciaTexto": "Vigencia indeterminada",
    "ultimaVerificacion": "2026-09-28",
    "fuenteUrl": "https://www.sat.gob.pe",
    "frecuenciaBusqueda": 7500,
    "costoResumen": "Totalmente Gratuito (S/ 0.00)",
    "costoPrincipal": 0,
    "baseLegal": "Procedimiento tramitado bajo normativa vigente de SAT Lima y Compendio Oficial del Estado Peruano.",
    "tags": [
      "papeleta transito sat",
      "sat lima",
      "municipal y vivienda",
      "tramite oficial",
      "peru",
      "2026"
    ],
    "requisitos": [
      {
        "id": "req-papeleta-transito-sat-1",
        "descripcion": "Documento Nacional de Identidad (DNI) vigente o carné de extranjería.",
        "aplicaSi": "general",
        "orden": 1
      },
      {
        "id": "req-papeleta-transito-sat-2",
        "descripcion": "No adeudar multas administrativas asociadas.",
        "aplicaSi": "general",
        "orden": 2
      }
    ],
    "pasos": [
      {
        "id": "paso-papeleta-transito-sat-1",
        "orden": 1,
        "modalidad": "online",
        "esOpcional": false,
        "titulo": "Ingresar a sat.gob.pe",
        "descripcion": "Ingresar a sat.gob.pe",
        "institucionNombre": "SAT Lima",
        "institucionUrl": "https://www.sat.gob.pe",
        "costoTipo": "gratuito",
        "costoMin": 0,
        "costoMax": 0
      },
      {
        "id": "paso-papeleta-transito-sat-2",
        "orden": 2,
        "modalidad": "presencial",
        "esOpcional": false,
        "titulo": "Buscar infracciones por placa o DNI",
        "descripcion": "Buscar infracciones por placa o DNI",
        "institucionNombre": "SAT Lima",
        "institucionUrl": "https://www.sat.gob.pe",
        "costoTipo": "gratuito",
        "costoMin": 0,
        "costoMax": 0
      },
      {
        "id": "paso-papeleta-transito-sat-3",
        "orden": 3,
        "modalidad": "presencial",
        "esOpcional": false,
        "titulo": "Ver detalle de cada papeleta (monto, fecha, infracción)",
        "descripcion": "Ver detalle de cada papeleta (monto, fecha, infracción)",
        "institucionNombre": "SAT Lima",
        "institucionUrl": "https://www.sat.gob.pe",
        "costoTipo": "gratuito",
        "costoMin": 0,
        "costoMax": 0
      },
      {
        "id": "paso-papeleta-transito-sat-4",
        "orden": 4,
        "modalidad": "presencial",
        "esOpcional": false,
        "titulo": "Pagar en línea con tarjeta o Yape",
        "descripcion": "Pagar en línea con tarjeta o Yape — puede aplicar descuento por pronto pago",
        "institucionNombre": "SAT Lima",
        "institucionUrl": "https://www.sat.gob.pe",
        "costoTipo": "gratuito",
        "costoMin": 0,
        "costoMax": 0
      }
    ],
    "canalesPago": []
  },
  {
    "id": "tram-denuncia-fiscalia",
    "slug": "denuncia-fiscalia",
    "nombre": "Denuncia ante la Fiscalía (online)",
    "nombreCorto": "Denuncia ante la Fiscalía",
    "subgrupo": "EMPLEO Y CERTIFICADOS",
    "descripcion": "Denuncia ante la Fiscalía (online) emitido por Ministerio Público - Fiscalía de la Nación. Consulta costos oficiales, pasos detallados y requisitos actualizados.",
    "categoriaId": "cat-4",
    "categoria": {
      "id": "cat-4",
      "slug": "empleo-certificados",
      "nombre": "Empleo y Certificados",
      "descripcion": "Certificado Único Laboral, antecedentes policiales, penales y judiciales.",
      "icono": "WorkOutlineOutlined"
    },
    "institucionId": "inst-fiscalia",
    "institucion": {
      "id": "inst-fiscalia",
      "slug": "fiscalia",
      "nombre": "Ministerio Público - Fiscalía de la Nación",
      "sigla": "Fiscalía",
      "tipo": "nacional",
      "webOficial": "https://www.mpfn.gob.pe",
      "descripcion": "Defensa de la legalidad, los derechos ciudadanos y persecución del delito en el Perú.",
      "logoIniciales": "MP"
    },
    "esCompuesto": false,
    "esRecurrente": false,
    "modalidadPrincipal": "online",
    "duracionMinDias": 1,
    "duracionMaxDias": 5,
    "duracionTexto": "1 a 5 días hábiles",
    "tipoResultado": "documento_digital",
    "vigenciaResultadoDias": null,
    "vigenciaTexto": "Vigencia indeterminada",
    "ultimaVerificacion": "2026-09-28",
    "fuenteUrl": "https://www.mpfn.gob.pe",
    "frecuenciaBusqueda": 7500,
    "costoResumen": "Totalmente Gratuito (S/ 0.00)",
    "costoPrincipal": 0,
    "baseLegal": "Procedimiento tramitado bajo normativa vigente de Fiscalía y Compendio Oficial del Estado Peruano.",
    "tags": [
      "denuncia fiscalia",
      "fiscalía",
      "empleo y certificados",
      "tramite oficial",
      "peru",
      "2026"
    ],
    "requisitos": [
      {
        "id": "req-denuncia-fiscalia-1",
        "descripcion": "Documento Nacional de Identidad (DNI) vigente o carné de extranjería.",
        "aplicaSi": "general",
        "orden": 1
      },
      {
        "id": "req-denuncia-fiscalia-2",
        "descripcion": "No adeudar multas administrativas asociadas.",
        "aplicaSi": "general",
        "orden": 2
      }
    ],
    "pasos": [
      {
        "id": "paso-denuncia-fiscalia-1",
        "orden": 1,
        "modalidad": "online",
        "esOpcional": false,
        "titulo": "Ingresar a mpfn.gob.pe sección denuncias en línea o acudir a fiscalía de tu",
        "descripcion": "Ingresar a mpfn.gob.pe sección denuncias en línea o acudir a fiscalía de turno",
        "institucionNombre": "Fiscalía",
        "institucionUrl": "https://www.mpfn.gob.pe",
        "costoTipo": "gratuito",
        "costoMin": 0,
        "costoMax": 0
      },
      {
        "id": "paso-denuncia-fiscalia-2",
        "orden": 2,
        "modalidad": "presencial",
        "esOpcional": false,
        "titulo": "Seleccionar tipo de delito (robo, estafa, violencia familiar, etc.)",
        "descripcion": "Seleccionar tipo de delito (robo, estafa, violencia familiar, etc.)",
        "institucionNombre": "Fiscalía",
        "institucionUrl": "https://www.mpfn.gob.pe",
        "costoTipo": "gratuito",
        "costoMin": 0,
        "costoMax": 0
      },
      {
        "id": "paso-denuncia-fiscalia-3",
        "orden": 3,
        "modalidad": "presencial",
        "esOpcional": false,
        "titulo": "Describir los hechos y adjuntar pruebas",
        "descripcion": "Describir los hechos y adjuntar pruebas",
        "institucionNombre": "Fiscalía",
        "institucionUrl": "https://www.mpfn.gob.pe",
        "costoTipo": "gratuito",
        "costoMin": 0,
        "costoMax": 0
      },
      {
        "id": "paso-denuncia-fiscalia-4",
        "orden": 4,
        "modalidad": "presencial",
        "esOpcional": false,
        "titulo": "Recibir número de carpeta fiscal para seguimiento",
        "descripcion": "Recibir número de carpeta fiscal para seguimiento",
        "institucionNombre": "Fiscalía",
        "institucionUrl": "https://www.mpfn.gob.pe",
        "costoTipo": "gratuito",
        "costoMin": 0,
        "costoMax": 0
      }
    ],
    "canalesPago": []
  },
  {
    "id": "tram-autorizacion-taxi-atu",
    "slug": "autorizacion-taxi-atu",
    "nombre": "Autorización para taxi (Tarjeta Única de Circulación ATU)",
    "nombreCorto": "Autorización para taxi",
    "subgrupo": "VEHICULAR Y TRANSPORTE",
    "descripcion": "Autorización para taxi (Tarjeta Única de Circulación ATU) emitido por Autoridad de Transporte Urbano para Lima y Callao. Consulta costos oficiales, pasos detallados y requisitos actualizados.",
    "categoriaId": "cat-2",
    "categoria": {
      "id": "cat-2",
      "slug": "vehicular-transporte",
      "nombre": "Vehicular y Transporte",
      "descripcion": "Brevete, récord de conductor, placas, SOAT y transferencias de vehículos.",
      "icono": "DirectionsCarOutlined"
    },
    "institucionId": "inst-atu",
    "institucion": {
      "id": "inst-atu",
      "slug": "atu",
      "nombre": "Autoridad de Transporte Urbano para Lima y Callao",
      "sigla": "ATU",
      "tipo": "regional",
      "webOficial": "https://www.atu.gob.pe",
      "descripcion": "Planificación y fiscalización del transporte urbano, emisión de TUC para taxis y transporte regular.",
      "logoIniciales": "ATU"
    },
    "esCompuesto": false,
    "esRecurrente": false,
    "modalidadPrincipal": "presencial",
    "duracionMinDias": 1,
    "duracionMaxDias": 5,
    "duracionTexto": "1 a 5 días hábiles",
    "tipoResultado": "documento_digital",
    "vigenciaResultadoDias": null,
    "vigenciaTexto": "Vigencia indeterminada",
    "ultimaVerificacion": "2026-09-28",
    "fuenteUrl": "https://www.atu.gob.pe",
    "frecuenciaBusqueda": 7500,
    "costoResumen": "S/ 200.00 a S/ 400.00 (variable)",
    "costoPrincipal": 200,
    "baseLegal": "Procedimiento tramitado bajo normativa vigente de ATU y Compendio Oficial del Estado Peruano.",
    "tags": [
      "autorizacion taxi atu",
      "atu",
      "vehicular y transporte",
      "tramite oficial",
      "peru",
      "2026"
    ],
    "requisitos": [
      {
        "id": "req-autorizacion-taxi-atu-1",
        "descripcion": "Documento Nacional de Identidad (DNI) vigente o carné de extranjería.",
        "aplicaSi": "general",
        "orden": 1
      },
      {
        "id": "req-autorizacion-taxi-atu-2",
        "descripcion": "Comprobante de pago de la tasa oficial (S/ 200.00 a S/ 400.00 (variable)).",
        "aplicaSi": "general",
        "orden": 2
      }
    ],
    "pasos": [
      {
        "id": "paso-autorizacion-taxi-atu-1",
        "orden": 1,
        "modalidad": "presencial",
        "esOpcional": false,
        "titulo": "Inscribir vehículo en empresa prestadora habilitada por ATU o solicitar TUC",
        "descripcion": "Inscribir vehículo en empresa prestadora habilitada por ATU o solicitar TUC individual",
        "institucionNombre": "ATU",
        "institucionUrl": "https://www.atu.gob.pe",
        "costoTipo": "gratuito",
        "costoMin": 0,
        "costoMax": 0
      },
      {
        "id": "paso-autorizacion-taxi-atu-2",
        "orden": 2,
        "modalidad": "presencial",
        "esOpcional": false,
        "titulo": "Pasar inspección técnica vehicular",
        "descripcion": "Pasar inspección técnica vehicular",
        "institucionNombre": "ATU",
        "institucionUrl": "https://www.atu.gob.pe",
        "costoTipo": "gratuito",
        "costoMin": 0,
        "costoMax": 0
      },
      {
        "id": "paso-autorizacion-taxi-atu-3",
        "orden": 3,
        "modalidad": "presencial",
        "esOpcional": false,
        "titulo": "Obtener PVS (Papeleta de Verificación de Seguridad)",
        "descripcion": "Obtener PVS (Papeleta de Verificación de Seguridad)",
        "institucionNombre": "ATU",
        "institucionUrl": "https://www.atu.gob.pe",
        "costoTipo": "gratuito",
        "costoMin": 0,
        "costoMax": 0
      },
      {
        "id": "paso-autorizacion-taxi-atu-4",
        "orden": 4,
        "modalidad": "presencial",
        "esOpcional": false,
        "titulo": "Presentar expediente en sede ATU con documentos del vehículo y conductor",
        "descripcion": "Presentar expediente en sede ATU con documentos del vehículo y conductor",
        "institucionNombre": "ATU",
        "institucionUrl": "https://www.atu.gob.pe",
        "costoTipo": "gratuito",
        "costoMin": 0,
        "costoMax": 0
      },
      {
        "id": "paso-autorizacion-taxi-atu-5",
        "orden": 5,
        "modalidad": "presencial",
        "esOpcional": false,
        "titulo": "Recibir TUC",
        "descripcion": "Recibir TUC — válida 2 años",
        "institucionNombre": "ATU",
        "institucionUrl": "https://www.atu.gob.pe",
        "costoTipo": "gratuito",
        "costoMin": 0,
        "costoMax": 0
      }
    ],
    "canalesPago": [
      {
        "id": "cp-autorizacion-taxi-atu-1",
        "nombre": "Págalo.pe (Banco de la Nación)",
        "tipo": "online"
      },
      {
        "id": "cp-autorizacion-taxi-atu-2",
        "nombre": "Agencias y Agentes del Banco de la Nación",
        "tipo": "agencia"
      }
    ]
  },
  {
    "id": "tram-reclamo-agua-sunass",
    "slug": "reclamo-agua-sunass",
    "nombre": "Reclamo por servicio de agua (SUNASS)",
    "nombreCorto": "Reclamo por servicio de agua",
    "subgrupo": "DEFENSA DEL CONSUMIDOR Y DERECHOS",
    "descripcion": "Reclamo por servicio de agua (SUNASS) emitido por Superintendencia Nacional de Servicios de Saneamiento. Consulta costos oficiales, pasos detallados y requisitos actualizados.",
    "categoriaId": "cat-10",
    "categoria": {
      "id": "cat-10",
      "slug": "consumidor-defensoria",
      "nombre": "Defensa del Consumidor y Derechos",
      "descripcion": "Reclamos ante INDECOPI, OSIPTEL, OSINERGMIN, SUNASS y Defensoría.",
      "icono": "GavelOutlined"
    },
    "institucionId": "inst-sunass",
    "institucion": {
      "id": "inst-sunass",
      "slug": "sunass",
      "nombre": "Superintendencia Nacional de Servicios de Saneamiento",
      "sigla": "SUNASS",
      "tipo": "nacional",
      "webOficial": "https://www.sunass.gob.pe",
      "descripcion": "Regulación y resolución de reclamos en segunda instancia sobre servicios de agua potable y alcantarillado.",
      "logoIniciales": "SUN"
    },
    "esCompuesto": false,
    "esRecurrente": false,
    "modalidadPrincipal": "online",
    "duracionMinDias": 1,
    "duracionMaxDias": 5,
    "duracionTexto": "1 a 5 días hábiles",
    "tipoResultado": "documento_digital",
    "vigenciaResultadoDias": null,
    "vigenciaTexto": "Vigencia indeterminada",
    "ultimaVerificacion": "2026-09-28",
    "fuenteUrl": "https://www.sunass.gob.pe",
    "frecuenciaBusqueda": 7500,
    "costoResumen": "Totalmente Gratuito (S/ 0.00)",
    "costoPrincipal": 0,
    "baseLegal": "Procedimiento tramitado bajo normativa vigente de SUNASS y Compendio Oficial del Estado Peruano.",
    "tags": [
      "reclamo agua sunass",
      "sunass",
      "defensa del consumidor y derechos",
      "tramite oficial",
      "peru",
      "2026"
    ],
    "requisitos": [
      {
        "id": "req-reclamo-agua-sunass-1",
        "descripcion": "Documento Nacional de Identidad (DNI) vigente o carné de extranjería.",
        "aplicaSi": "general",
        "orden": 1
      },
      {
        "id": "req-reclamo-agua-sunass-2",
        "descripcion": "No adeudar multas administrativas asociadas.",
        "aplicaSi": "general",
        "orden": 2
      }
    ],
    "pasos": [
      {
        "id": "paso-reclamo-agua-sunass-1",
        "orden": 1,
        "modalidad": "presencial",
        "esOpcional": false,
        "titulo": "Reclamar primero ante SEDAPAL o tu EPS local (obligatorio)",
        "descripcion": "Reclamar primero ante SEDAPAL o tu EPS local (obligatorio)",
        "institucionNombre": "SUNASS",
        "institucionUrl": "https://www.sunass.gob.pe",
        "costoTipo": "gratuito",
        "costoMin": 0,
        "costoMax": 0
      },
      {
        "id": "paso-reclamo-agua-sunass-2",
        "orden": 2,
        "modalidad": "online",
        "esOpcional": false,
        "titulo": "Si no responden en 30 días, ingresar reclamo en sunass.gob.pe",
        "descripcion": "Si no responden en 30 días, ingresar reclamo en sunass.gob.pe",
        "institucionNombre": "SUNASS",
        "institucionUrl": "https://www.sunass.gob.pe",
        "costoTipo": "gratuito",
        "costoMin": 0,
        "costoMax": 0
      },
      {
        "id": "paso-reclamo-agua-sunass-3",
        "orden": 3,
        "modalidad": "presencial",
        "esOpcional": false,
        "titulo": "Adjuntar respuesta o comprobante de presentación ante la EPS",
        "descripcion": "Adjuntar respuesta o comprobante de presentación ante la EPS",
        "institucionNombre": "SUNASS",
        "institucionUrl": "https://www.sunass.gob.pe",
        "costoTipo": "gratuito",
        "costoMin": 0,
        "costoMax": 0
      },
      {
        "id": "paso-reclamo-agua-sunass-4",
        "orden": 4,
        "modalidad": "presencial",
        "esOpcional": false,
        "titulo": "SUNASS resuelve en 30 días adicionales",
        "descripcion": "SUNASS resuelve en 30 días adicionales",
        "institucionNombre": "SUNASS",
        "institucionUrl": "https://www.sunass.gob.pe",
        "costoTipo": "gratuito",
        "costoMin": 0,
        "costoMax": 0
      }
    ],
    "canalesPago": []
  },
  {
    "id": "tram-queja-defensoria",
    "slug": "queja-defensoria",
    "nombre": "Queja ciudadana ante la Defensoría del Pueblo",
    "nombreCorto": "Queja ciudadana ante la Defensoría del Pueblo",
    "subgrupo": "DEFENSA DEL CONSUMIDOR Y DERECHOS",
    "descripcion": "Queja ciudadana ante la Defensoría del Pueblo emitido por Defensoría del Pueblo. Consulta costos oficiales, pasos detallados y requisitos actualizados.",
    "categoriaId": "cat-10",
    "categoria": {
      "id": "cat-10",
      "slug": "consumidor-defensoria",
      "nombre": "Defensa del Consumidor y Derechos",
      "descripcion": "Reclamos ante INDECOPI, OSIPTEL, OSINERGMIN, SUNASS y Defensoría.",
      "icono": "GavelOutlined"
    },
    "institucionId": "inst-defensoria",
    "institucion": {
      "id": "inst-defensoria",
      "slug": "defensoria-del-pueblo",
      "nombre": "Defensoría del Pueblo",
      "sigla": "Defensoría",
      "tipo": "nacional",
      "webOficial": "https://www.defensoria.gob.pe",
      "descripcion": "Órgano constitucional autónomo que defiende los derechos fundamentales frente a abusos o demoras del Estado.",
      "logoIniciales": "DEF"
    },
    "esCompuesto": false,
    "esRecurrente": false,
    "modalidadPrincipal": "online",
    "duracionMinDias": 1,
    "duracionMaxDias": 5,
    "duracionTexto": "1 a 5 días hábiles",
    "tipoResultado": "documento_digital",
    "vigenciaResultadoDias": null,
    "vigenciaTexto": "Vigencia indeterminada",
    "ultimaVerificacion": "2026-09-28",
    "fuenteUrl": "https://www.defensoria.gob.pe",
    "frecuenciaBusqueda": 7500,
    "costoResumen": "Totalmente Gratuito (S/ 0.00)",
    "costoPrincipal": 0,
    "baseLegal": "Procedimiento tramitado bajo normativa vigente de Defensoría y Compendio Oficial del Estado Peruano.",
    "tags": [
      "queja defensoria",
      "defensoría",
      "defensa del consumidor y derechos",
      "tramite oficial",
      "peru",
      "2026"
    ],
    "requisitos": [
      {
        "id": "req-queja-defensoria-1",
        "descripcion": "Documento Nacional de Identidad (DNI) vigente o carné de extranjería.",
        "aplicaSi": "general",
        "orden": 1
      },
      {
        "id": "req-queja-defensoria-2",
        "descripcion": "No adeudar multas administrativas asociadas.",
        "aplicaSi": "general",
        "orden": 2
      }
    ],
    "pasos": [
      {
        "id": "paso-queja-defensoria-1",
        "orden": 1,
        "modalidad": "online",
        "esOpcional": false,
        "titulo": "Llamar a la línea gratuita 0800-15170 o ingresar a defensoria.gob.pe",
        "descripcion": "Llamar a la línea gratuita 0800-15170 o ingresar a defensoria.gob.pe",
        "institucionNombre": "Defensoría",
        "institucionUrl": "https://www.defensoria.gob.pe",
        "costoTipo": "gratuito",
        "costoMin": 0,
        "costoMax": 0
      },
      {
        "id": "paso-queja-defensoria-2",
        "orden": 2,
        "modalidad": "presencial",
        "esOpcional": false,
        "titulo": "Describir el agravio cometido por una entidad del Estado",
        "descripcion": "Describir el agravio cometido por una entidad del Estado",
        "institucionNombre": "Defensoría",
        "institucionUrl": "https://www.defensoria.gob.pe",
        "costoTipo": "gratuito",
        "costoMin": 0,
        "costoMax": 0
      },
      {
        "id": "paso-queja-defensoria-3",
        "orden": 3,
        "modalidad": "presencial",
        "esOpcional": false,
        "titulo": "Adjuntar documentos de respaldo",
        "descripcion": "Adjuntar documentos de respaldo",
        "institucionNombre": "Defensoría",
        "institucionUrl": "https://www.defensoria.gob.pe",
        "costoTipo": "gratuito",
        "costoMin": 0,
        "costoMax": 0
      },
      {
        "id": "paso-queja-defensoria-4",
        "orden": 4,
        "modalidad": "presencial",
        "esOpcional": false,
        "titulo": "La Defensoría interviene como mediadora",
        "descripcion": "La Defensoría interviene como mediadora — no impone sanciones pero sus recomendaciones tienen peso institucional",
        "institucionNombre": "Defensoría",
        "institucionUrl": "https://www.defensoria.gob.pe",
        "costoTipo": "gratuito",
        "costoMin": 0,
        "costoMax": 0
      }
    ],
    "canalesPago": []
  },
  {
    "id": "tram-fondo-crecer-cofide",
    "slug": "fondo-crecer-cofide",
    "nombre": "Fondo Crecer (COFIDE) — crédito MYPE",
    "nombreCorto": "Fondo Crecer",
    "subgrupo": "TRIBUTOS Y RUC",
    "descripcion": "Fondo Crecer (COFIDE) — crédito MYPE emitido por Banco de Desarrollo del Perú (COFIDE). Consulta costos oficiales, pasos detallados y requisitos actualizados.",
    "categoriaId": "cat-3",
    "categoria": {
      "id": "cat-3",
      "slug": "tributos-empresas",
      "nombre": "Tributos y RUC",
      "descripcion": "Inscripción RUC, Clave SOL, declaración de impuestos y constitución empresarial.",
      "icono": "AccountBalanceOutlined"
    },
    "institucionId": "inst-cofide",
    "institucion": {
      "id": "inst-cofide",
      "slug": "cofide",
      "nombre": "Banco de Desarrollo del Perú (COFIDE)",
      "sigla": "COFIDE",
      "tipo": "nacional",
      "webOficial": "https://www.cofide.com.pe",
      "descripcion": "Banco de segundo piso que canaliza fondos y garantías preferenciales para la micro y pequeña empresa.",
      "logoIniciales": "COF"
    },
    "esCompuesto": false,
    "esRecurrente": false,
    "modalidadPrincipal": "online",
    "duracionMinDias": 1,
    "duracionMaxDias": 5,
    "duracionTexto": "1 a 5 días hábiles",
    "tipoResultado": "documento_digital",
    "vigenciaResultadoDias": null,
    "vigenciaTexto": "Vigencia indeterminada",
    "ultimaVerificacion": "2026-09-28",
    "fuenteUrl": "https://www.cofide.com.pe",
    "frecuenciaBusqueda": 7500,
    "costoResumen": "Totalmente Gratuito (S/ 0.00)",
    "costoPrincipal": 0,
    "baseLegal": "Procedimiento tramitado bajo normativa vigente de COFIDE y Compendio Oficial del Estado Peruano.",
    "tags": [
      "fondo crecer cofide",
      "cofide",
      "tributos y ruc",
      "tramite oficial",
      "peru",
      "2026"
    ],
    "requisitos": [
      {
        "id": "req-fondo-crecer-cofide-1",
        "descripcion": "Documento Nacional de Identidad (DNI) vigente o carné de extranjería.",
        "aplicaSi": "general",
        "orden": 1
      },
      {
        "id": "req-fondo-crecer-cofide-2",
        "descripcion": "No adeudar multas administrativas asociadas.",
        "aplicaSi": "general",
        "orden": 2
      }
    ],
    "pasos": [
      {
        "id": "paso-fondo-crecer-cofide-1",
        "orden": 1,
        "modalidad": "presencial",
        "esOpcional": false,
        "titulo": "Verificar elegibilidad en cofide.com.pe (empresa MYPE con RUC activo)",
        "descripcion": "Verificar elegibilidad en cofide.com.pe (empresa MYPE con RUC activo)",
        "institucionNombre": "COFIDE",
        "institucionUrl": "https://www.cofide.com.pe",
        "costoTipo": "gratuito",
        "costoMin": 0,
        "costoMax": 0
      },
      {
        "id": "paso-fondo-crecer-cofide-2",
        "orden": 2,
        "modalidad": "presencial",
        "esOpcional": false,
        "titulo": "Presentar solicitud a través de institución financiera intermediaria (IFI) ",
        "descripcion": "Presentar solicitud a través de institución financiera intermediaria (IFI) habilitada",
        "institucionNombre": "COFIDE",
        "institucionUrl": "https://www.cofide.com.pe",
        "costoTipo": "gratuito",
        "costoMin": 0,
        "costoMax": 0
      },
      {
        "id": "paso-fondo-crecer-cofide-3",
        "orden": 3,
        "modalidad": "presencial",
        "esOpcional": false,
        "titulo": "IFI evalúa y aprueba el crédito usando los fondos de COFIDE",
        "descripcion": "IFI evalúa y aprueba el crédito usando los fondos de COFIDE",
        "institucionNombre": "COFIDE",
        "institucionUrl": "https://www.cofide.com.pe",
        "costoTipo": "gratuito",
        "costoMin": 0,
        "costoMax": 0
      },
      {
        "id": "paso-fondo-crecer-cofide-4",
        "orden": 4,
        "modalidad": "presencial",
        "esOpcional": false,
        "titulo": "Recibir desembolso del crédito con tasa preferencial",
        "descripcion": "Recibir desembolso del crédito con tasa preferencial",
        "institucionNombre": "COFIDE",
        "institucionUrl": "https://www.cofide.com.pe",
        "costoTipo": "gratuito",
        "costoMin": 0,
        "costoMax": 0
      }
    ],
    "canalesPago": []
  },
  {
    "id": "tram-bachiller-automatico",
    "slug": "bachiller-automatico",
    "nombre": "Bachiller Automático (Ley 30220)",
    "nombreCorto": "Bachiller Automático",
    "subgrupo": "EDUCACIÓN Y BECAS",
    "descripcion": "Bachiller Automático (Ley 30220) emitido por Universidades Públicas y Privadas del Perú. Consulta costos oficiales, pasos detallados y requisitos actualizados.",
    "categoriaId": "cat-8",
    "categoria": {
      "id": "cat-8",
      "slug": "educacion-becas",
      "nombre": "Educación y Becas",
      "descripcion": "Títulos universitarios, grados SUNEDU, Beca 18 y certificados de estudios.",
      "icono": "SchoolOutlined"
    },
    "institucionId": "inst-universidades",
    "institucion": {
      "id": "inst-universidades",
      "slug": "universidades-peru",
      "nombre": "Universidades Públicas y Privadas del Perú",
      "sigla": "Universidades",
      "tipo": "nacional",
      "webOficial": "https://www.sunedu.gob.pe/lista-de-universidades/",
      "descripcion": "Instituciones de educación superior autónomas habilitadas para otorgar grados académicos de bachiller y títulos.",
      "logoIniciales": "UNI"
    },
    "esCompuesto": false,
    "esRecurrente": false,
    "modalidadPrincipal": "presencial",
    "duracionMinDias": 1,
    "duracionMaxDias": 5,
    "duracionTexto": "1 a 5 días hábiles",
    "tipoResultado": "documento_digital",
    "vigenciaResultadoDias": null,
    "vigenciaTexto": "Vigencia indeterminada",
    "ultimaVerificacion": "2026-09-28",
    "fuenteUrl": "https://www.sunedu.gob.pe/lista-de-universidades/",
    "frecuenciaBusqueda": 7500,
    "costoResumen": "S/ 0.00 a S/ 200.00 (variable)",
    "costoPrincipal": 0,
    "baseLegal": "Procedimiento tramitado bajo normativa vigente de Universidades y Compendio Oficial del Estado Peruano.",
    "tags": [
      "bachiller automatico",
      "universidades",
      "educación y becas",
      "tramite oficial",
      "peru",
      "2026"
    ],
    "requisitos": [
      {
        "id": "req-bachiller-automatico-1",
        "descripcion": "Documento Nacional de Identidad (DNI) vigente o carné de extranjería.",
        "aplicaSi": "general",
        "orden": 1
      },
      {
        "id": "req-bachiller-automatico-2",
        "descripcion": "No adeudar multas administrativas asociadas.",
        "aplicaSi": "general",
        "orden": 2
      }
    ],
    "pasos": [
      {
        "id": "paso-bachiller-automatico-1",
        "orden": 1,
        "modalidad": "presencial",
        "esOpcional": false,
        "titulo": "Completar todos los créditos de la carrera",
        "descripcion": "Completar todos los créditos de la carrera",
        "institucionNombre": "Universidades",
        "institucionUrl": "https://www.sunedu.gob.pe/lista-de-universidades/",
        "costoTipo": "gratuito",
        "costoMin": 0,
        "costoMax": 0
      },
      {
        "id": "paso-bachiller-automatico-2",
        "orden": 2,
        "modalidad": "presencial",
        "esOpcional": false,
        "titulo": "Solicitar bachiller automático en la secretaría de la facultad",
        "descripcion": "Solicitar bachiller automático en la secretaría de la facultad — no requiere tesis ni trabajo de investigación",
        "institucionNombre": "Universidades",
        "institucionUrl": "https://www.sunedu.gob.pe/lista-de-universidades/",
        "costoTipo": "gratuito",
        "costoMin": 0,
        "costoMax": 0
      },
      {
        "id": "paso-bachiller-automatico-3",
        "orden": 3,
        "modalidad": "presencial",
        "esOpcional": false,
        "titulo": "Presentar certificados de estudios completos y constancia de no adeudar",
        "descripcion": "Presentar certificados de estudios completos y constancia de no adeudar",
        "institucionNombre": "Universidades",
        "institucionUrl": "https://www.sunedu.gob.pe/lista-de-universidades/",
        "costoTipo": "gratuito",
        "costoMin": 0,
        "costoMax": 0
      },
      {
        "id": "paso-bachiller-automatico-4",
        "orden": 4,
        "modalidad": "presencial",
        "esOpcional": false,
        "titulo": "Universidad tramita el grado ante SUNEDU",
        "descripcion": "Universidad tramita el grado ante SUNEDU — plazo 30–90 días según institución",
        "institucionNombre": "Universidades",
        "institucionUrl": "https://www.sunedu.gob.pe/lista-de-universidades/",
        "costoTipo": "gratuito",
        "costoMin": 0,
        "costoMax": 0
      }
    ],
    "canalesPago": []
  }
];

export const GUIAS_MULTIENTIDAD: GuiaMultientidad[] = [
  {
    "id": "guia-auto-usado",
    "slug": "comprar-auto-usado",
    "nombre": "Guía paso a paso: Comprar un auto usado en el Perú",
    "descripcion": "Secuencia completa y segura de trámites para verificar legalmente el vehículo, evitar estafas y formalizar la transferencia registral notarial.",
    "ultimaVerificacion": "2026-09-24",
    "duracionEstimada": "3 a 7 días hábiles",
    "costoEstimado": "S/ 250.00 a S/ 550.00 (gastos notariales + registrales)",
    "icono": "DirectionsCarFilledOutlined",
    "items": [
      {
        "orden": 1,
        "tramiteSlug": "record-conductor-puntos",
        "tramiteNombre": "Consulta vehicular y récord de papeletas (SAT / SUTRAN)",
        "institucionNombre": "SAT / SUTRAN",
        "nota": "Verifica que el auto no tenga órdenes de captura por papeletas impagas o embargos tributarios."
      },
      {
        "orden": 2,
        "tramiteSlug": "duplicado-tive",
        "tramiteNombre": "Certificado Registral Vehicular (Gravamen SUNARP)",
        "institucionNombre": "SUNARP",
        "nota": "Confirma que el vendedor sea el legítimo titular en la partida registral y que el auto no tenga prendas ni embargos."
      },
      {
        "orden": 3,
        "tramiteSlug": "antecedentes-policiales",
        "tramiteNombre": "Peritaje e inspección física vehicular (DIROVE PNP)",
        "institucionNombre": "Policía Nacional del Perú (DIROVE)",
        "nota": "Inspección técnica para verificar autenticidad de número de motor y chasis (evita comprar autos con piezas robadas o regrabadas).",
        "esOpcional": true
      },
      {
        "orden": 4,
        "tramiteSlug": "duplicado-dni",
        "tramiteNombre": "Acta Notarial de Transferencia Vehicular",
        "institucionNombre": "Notaría Pública",
        "nota": "Comprador y vendedor firman el acta notarial con validación biométrica de RENIEC y pago del medio bancarizado."
      },
      {
        "orden": 5,
        "tramiteSlug": "duplicado-tive",
        "tramiteNombre": "Emisión de la nueva TIVE a nombre del comprador",
        "institucionNombre": "SUNARP",
        "nota": "Una vez inscrita la transferencia en el Registro de Propiedad Vehicular, descargas la nueva tarjeta a tu nombre."
      }
    ]
  },
  {
    "id": "guia-crear-empresa",
    "slug": "crear-empresa-mype",
    "nombre": "Guía paso a paso: Constituir y formalizar una empresa MYPE en Perú",
    "descripcion": "Ruta legal integral desde la reserva registral de la razón social, minuta notarial, obtención de RUC hasta la licencia municipal de funcionamiento.",
    "ultimaVerificacion": "2026-09-24",
    "duracionEstimada": "7 a 15 días hábiles",
    "costoEstimado": "S/ 300.00 a S/ 800.00 (según capital y notaría)",
    "icono": "BusinessCenterOutlined",
    "items": [
      {
        "orden": 1,
        "tramiteSlug": "inscripcion-ruc-persona",
        "tramiteNombre": "Búsqueda y Reserva de Nombre de la Empresa",
        "institucionNombre": "SUNARP",
        "nota": "Reserva por 30 días la denominación o razón social de tu empresa (S/ 24.00 en SUNARP en línea)."
      },
      {
        "orden": 2,
        "tramiteSlug": "duplicado-dni",
        "tramiteNombre": "Elaboración del Acto Constitutivo (Minuta) y Escritura Pública Notarial",
        "institucionNombre": "Notaría Pública / Programa Tu Empresa (PRODUCE)",
        "nota": "Redacción de estatutos y elevación a escritura pública firmada ante notario con depósito de capital o inventario de bienes."
      },
      {
        "orden": 3,
        "tramiteSlug": "clave-sol",
        "tramiteNombre": "Inscripción en el RUC de Persona Jurídica (RUC 20) y Clave SOL",
        "institucionNombre": "SUNAT",
        "nota": "SUNARP remite el parte a SUNAT; se activa el RUC 20 y se elige el régimen tributario (MYPE Tributario o Especial)."
      },
      {
        "orden": 4,
        "tramiteSlug": "licencia-funcionamiento",
        "tramiteNombre": "Obtención de Licencia de Funcionamiento e ITSE",
        "institucionNombre": "Municipalidad de tu distrito",
        "nota": "Tramita la autorización comercial en el distrito donde operará el local de la empresa."
      }
    ]
  },
  {
    "id": "guia-matrimonio-civil",
    "slug": "matrimonio-civil",
    "nombre": "Guía paso a paso: Trámite de Matrimonio Civil en tu Municipalidad",
    "descripcion": "Requisitos, certificados médicos prenupciales, edicto matrimonial y ceremonia civil en el distrito de residencia.",
    "ultimaVerificacion": "2026-09-24",
    "duracionEstimada": "15 a 30 días calendario",
    "costoEstimado": "S/ 120.00 a S/ 450.00 (según TUPA municipal y horario)",
    "icono": "FavoriteBorderOutlined",
    "items": [
      {
        "orden": 1,
        "tramiteSlug": "copia-partida-nacimiento",
        "tramiteNombre": "Copias certificadas de Partidas de Nacimiento",
        "institucionNombre": "RENIEC",
        "nota": "Ambos contrayentes deben solicitar su copia certificada de partida de nacimiento emitida con antigüedad no mayor a 3 meses."
      },
      {
        "orden": 2,
        "tramiteSlug": "afiliacion-sis-gratuito",
        "tramiteNombre": "Exámenes médicos prenupciales y constancia de consejería",
        "institucionNombre": "Centro de Salud MINSA / Policlínico Municipal",
        "nota": "Evaluación médica serológica (VDRL/VIH) y radiografía de tórax con vigencia no mayor a 30 días."
      },
      {
        "orden": 3,
        "tramiteSlug": "impuesto-predial-arbitrios",
        "tramiteNombre": "Apertura de Pliego Matrimonial y Publicación de Edicto",
        "institucionNombre": "Municipalidad de tu distrito",
        "nota": "Presentación del expediente con 2 testigos, pago del derecho de ceremonia y publicación del edicto durante 8 días."
      },
      {
        "orden": 4,
        "tramiteSlug": "duplicado-dni",
        "tramiteNombre": "Celebración del Matrimonio Civil y Entrega de Acta",
        "institucionNombre": "Municipalidad de tu distrito / Registro Civil",
        "nota": "Ceremonia ante el Alcalde o funcionario delegado y posterior inscripción del acta matrimonial en RENIEC."
      }
    ]
  }
];
