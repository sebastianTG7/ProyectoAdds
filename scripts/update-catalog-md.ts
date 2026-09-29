import * as fs from 'fs';
import * as path from 'path';
import { TRAMITES, INSTITUCIONES, CATEGORIAS, GUIAS_MULTIENTIDAD } from '../src/data/mockData';

function generateMd() {
  const gratuitos = TRAMITES.filter((t) => t.costoPrincipal === 0);
  const conTasa = TRAMITES.filter((t) => t.costoPrincipal > 0);
  const online = TRAMITES.filter((t) => t.modalidadPrincipal === 'online');
  const mixta = TRAMITES.filter((t) => t.modalidadPrincipal === 'mixta');
  const presencial = TRAMITES.filter((t) => t.modalidadPrincipal === 'presencial');

  let md = `# Catálogo Oficial Consolidado de Trámites — ComoTramito Perú

**Fecha de Actualización:** Septiembre 2026  
**Rama Git:** \`feature/catalogo-expandido\`  
**Total de Trámites Oficiales:** ${TRAMITES.length}  
**Total de Instituciones Públicas:** ${INSTITUCIONES.length}  
**Total de Categorías Temáticas:** ${CATEGORIAS.length}  
**Total de Guías Multientidad:** ${GUIAS_MULTIENTIDAD.length}  

---

## 1. Métricas Generales del Catálogo Completo

- **Total Trámites:** ${TRAMITES.length}
  - 🟢 **Trámites Iniciales 100% Verificados (Fase 1):** 26 trámites
  - 🔵 **Nuevos Trámites de Alta Demanda (Fase 2):** ${TRAMITES.length - 26} trámites
- **Estructura de Costos:**
  - **Trámites Gratuitos (S/ 0.00):** ${gratuitos.length} trámites (${((gratuitos.length / TRAMITES.length) * 100).toFixed(1)}%)
  - **Trámites con Pago de Tasa Oficial:** ${conTasa.length} trámites (${((conTasa.length / TRAMITES.length) * 100).toFixed(1)}%)
- **Modalidades de Atención:**
  - **100% Online / Virtual:** ${online.length} trámites (${((online.length / TRAMITES.length) * 100).toFixed(1)}%)
  - **Mixta (Online + Presencial):** ${mixta.length} trámites (${((mixta.length / TRAMITES.length) * 100).toFixed(1)}%)
  - **Presencial:** ${presencial.length} trámites (${((presencial.length / TRAMITES.length) * 100).toFixed(1)}%)

---

## 2. Organización por Lotes Prioritarios de Implementación

### 🚗 Lote 1: Vehicular, Tránsito y Transporte (12 trámites)
- [x] Duplicado de Licencia de Conducir (MTC)
- [x] Revalidación de Licencia de Conducir A-1 (MTC)
- [x] Expedición de Licencia A-1 por primera vez (MTC)
- [x] Consulta de Récord de Conductor y Puntos (MTC / SUTRAN)
- [x] Duplicado de Tarjeta de Identificación Vehicular TIVE (SUNARP)
- [x] Transferencia vehicular compraventa (SUNARP / Notarías)
- [x] Obtención de SOAT obligatorio (MTC / Aseguradoras)
- [x] Revisión Técnica Vehicular RTV (MTC / Plantas autorizadas)
- [x] Autorización de taxi y TUC (ATU)
- [x] Consulta y pago de papeletas de tránsito (SAT Lima)
- [x] Declaración y pago de Impuesto Vehicular (SAT Lima)
- [x] Certificado Registral Vehicular y Copia Literal (SUNARP)

### 💼 Lote 2: Trabajo, Empresas, Tributos y Negocios (16 trámites)
- [x] Certificado Único Laboral CUL (MTPE)
- [x] Inscripción al RUC Personas Naturales (SUNAT)
- [x] Obtención o recuperación de Clave SOL (SUNAT)
- [x] Emisión de Recibos por Honorarios Electrónicos (SUNAT)
- [x] Ficha RUC Digital Certificada (SUNAT)
- [x] Suspensión de Retenciones de 4ta Categoría (SUNAT)
- [x] Fraccionamiento de deuda tributaria (SUNAT)
- [x] Constitución de empresa MYPE SAC/EIRL (SUNARP / SID-SUNARP)
- [x] Inscripción en REMYPE (MTPE)
- [x] Verificación de empleo formal - Verifica tu Chamba (SUNAFIL)
- [x] Denuncia laboral por incumplimiento (SUNAFIL)
- [x] Licencia de Funcionamiento para Negocios MYPE (Municipalidades)
- [x] Inscripción en el RNP proveedor del Estado (OECE / OSCE)
- [x] Registro de Marca y Signos Distintivos (INDECOPI)
- [x] Reclamo del Consumidor (INDECOPI)
- [x] Fondo Crecer para financiamiento MYPE (COFIDE)

### 🏥 Lote 3: Salud, Educación y Programas Sociales (16 trámites)
- [x] Afiliación al SIS Gratuito / Para Todos (SIS)
- [x] Afiliación al SIS Independiente con aporte (SIS)
- [x] Cita médica en línea para asegurados (EsSalud)
- [x] Carné de vacunación digital (MINSA)
- [x] Certificado Oficial de Discapacidad (MINSA)
- [x] Carné de Discapacidad (CONADIS)
- [x] Reclamo contra clínicas o EPS (SUSALUD)
- [x] Beca 18 para educación superior (PRONABEC)
- [x] Consulta de Grados y Títulos universitarios (SUNEDU)
- [x] Bachiller Automático Ley 30220 (Universidades)
- [x] Certificado Oficial de Estudios escolares (MINEDU)
- [x] Jubilación y pensión en el SNP (ONP)
- [x] Retiro del 95.5% de fondos previsionales (AFP / SBS)
- [x] Afiliación al programa Pensión 65 (MIDIS)
- [x] Bono Familiar Habitacional Techo Propio (MIVIVIENDA)
- [x] Título de propiedad informal gratuito (COFOPRI)

### ⚖️ Lote 4: Identidad, Legal, Servicios y Derechos (36 trámites)
- [x] Duplicado de DNI Electrónico (RENIEC)
- [x] Renovación de DNI por caducidad (RENIEC)
- [x] DNI por primera vez para mayores de edad (RENIEC)
- [x] Copia certificada de Acta de Nacimiento (RENIEC)
- [x] Rectificación de DNI de domicilio y datos (RENIEC)
- [x] Pasaporte Electrónico Ordinario (Migraciones)
- [x] Carné de Extranjería (Migraciones)
- [x] Certificado de Antecedentes Penales CAP (Poder Judicial)
- [x] Certificado de Antecedentes Policiales CERAP (PNP)
- [x] Certificado de Antecedentes Judiciales (INPE)
- [x] Denuncia Policial Digital por pérdida de documentos (PNP)
- [x] Certificado Domiciliario por comisaría (PNP)
- [x] Consulta de expedientes judiciales SINOE (Poder Judicial)
- [x] Denuncia penal en línea (Ministerio Público / Fiscalía)
- [x] Matrimonio Civil y pliego matrimonial (Municipalidades)
- [x] Poder Notarial fuera de registro o por escritura (Notarías)
- [x] Escritura Pública notarial (Notarías)
- [x] Apostilla de documentos para el exterior (Cancillería)
- [x] Salvoconducto de viaje de emergencia (Cancillería)
- [x] Licencia de posesión y uso de armas de fuego (SUCAMEC)
- [x] Consulta y pago de recibo de luz (Luz del Sur / Pluz Energía)
- [x] Consulta y pago de recibo de agua (SEDAPAL / EPS)
- [x] Impuesto Predial y Arbitrios municipales (Municipalidades)
- [x] Reclamo por servicio de electricidad (OSINERGMIN)
- [x] Reclamo por servicio de agua potable (SUNASS)
- [x] Reporte de deudas en Central de Riesgos (SBS)
- [x] Consulta de tipo de cambio oficial contable (SBS)
- [x] Portabilidad numérica de telefonía móvil (OSIPTEL)
- [x] Consulta de código IMEI de celulares robados (OSIPTEL)
- [x] Queja ciudadana por mala atención del Estado (Defensoría del Pueblo)
- [x] Consulta de local y mesa de votación (ONPE)
- [x] Consulta y pago de multas electorales (ONPE / JNE)
- [x] Certificado Sanitario para viaje de mascotas (SENASA)
- [x] Boleto de ingreso a la Llaqta de Machu Picchu (SERNANP)
- [x] Apertura de cuenta Multired (Banco de la Nación)
- [x] Pago de tasas estatales mediante Págalo.pe (Banco de la Nación)

---

## 3. Tabla Consolidada de los ${TRAMITES.length} Trámites Oficiales

| # | Trámite | Entidad | Costo Oficial | Modalidad | Tiempo Estimado | Slug / Ruta |
|:---:|:---|:---:|:---|:---:|:---:|:---|
`;

  TRAMITES.forEach((t, i) => {
    const entidad = t.institucion.sigla || t.institucion.nombre;
    const costo = t.costoResumen;
    const mod = t.modalidadPrincipal === 'online' ? 'Online' : (t.modalidadPrincipal === 'mixta' ? 'Mixta' : 'Presencial');
    const dur = t.duracionTexto;
    const ruta = '/tramite/' + t.slug;
    md += '| **' + (i + 1) + '** | ' + (t.nombreCorto || t.nombre) + ' | **' + entidad + '** | ' + costo + ' | ' + mod + ' | ' + dur + ' | [`' + ruta + '`](' + ruta + ') |\n';
  });

  md += `
---

## 4. Guías Multientidad

| # | Guía | Entidades Involucradas | Etapas | Slug / Ruta |
|:---:|:---|:---|:---:|:---|
`;

  GUIAS_MULTIENTIDAD.forEach((g, i) => {
    md += `| **${i + 1}** | **${g.nombre}** | Múltiples entidades coordinadas | ${g.items?.length || 0} etapas | [\`/guias/${g.slug}\`](/guias/${g.slug}) |\n`;
  });

  fs.writeFileSync(path.join(__dirname, '../commits/catalogo_tramites.md'), md, 'utf8');
  console.log('catalogo_tramites.md generado exitosamente con 80 trámites.');
}

generateMd();
