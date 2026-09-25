/**
 * Script de Auditoría y Control de Calidad de Trámites
 * Ejecutar con: npx tsx scripts/audit-tramites.ts (o npm run audit)
 */

import { TRAMITES } from '../src/data/mockData';

interface AuditItem {
  slug: string;
  nombre: string;
  institucion: string;
  costo: string;
  codigoTributo: string;
  ultimaVerificacion: string;
  diasDesdeVerificacion: number;
  estado: 'VIGENTE' | 'POR_REVISAR' | 'DESACTUALIZADO';
  fuenteUrl: string;
}

function runAudit() {
  const hoy = new Date();
  const report: AuditItem[] = [];

  for (const t of TRAMITES) {
    const fechaVerif = new Date(t.ultimaVerificacion || '2020-01-01');
    const diffMs = hoy.getTime() - fechaVerif.getTime();
    const dias = Math.max(0, Math.floor(diffMs / (1000 * 60 * 60 * 24)));

    let estado: 'VIGENTE' | 'POR_REVISAR' | 'DESACTUALIZADO' = 'VIGENTE';
    if (dias > 90) {
      estado = 'DESACTUALIZADO';
    } else if (dias > 60) {
      estado = 'POR_REVISAR';
    }

    report.push({
      slug: t.slug,
      nombre: t.nombreCorto || t.nombre,
      institucion: t.institucion.sigla || t.institucion.nombre,
      costo: t.costoResumen || (t.costoPrincipal ? `S/ ${t.costoPrincipal}` : 'Gratis'),
      codigoTributo: t.codigoTributo || 'N/A',
      ultimaVerificacion: t.ultimaVerificacion || 'Sin fecha',
      diasDesdeVerificacion: dias,
      estado,
      fuenteUrl: t.fuenteUrl,
    });
  }

  // Ordenar por días de antigüedad descendente (los más antiguos primero)
  report.sort((a, b) => b.diasDesdeVerificacion - a.diasDesdeVerificacion);

  console.log('\n================================================================================');
  console.log('       📊 PANEL DE AUDITORÍA Y CONTROL DE CALIDAD DE TRÁMITES — 2026');
  console.log('================================================================================\n');

  console.log(
    '#'.padEnd(4) +
    'TRÁMITE'.padEnd(30) +
    'ENTIDAD'.padEnd(14) +
    'COSTO'.padEnd(20) +
    'PÁGALO.PE'.padEnd(16) +
    'VERIFICADO'.padEnd(14) +
    'ESTADO'
  );
  console.log('-'.repeat(105));

  let vigentes = 0;
  let porRevisar = 0;
  let desactualizados = 0;

  report.forEach((item, index) => {
    if (item.estado === 'VIGENTE') vigentes++;
    else if (item.estado === 'POR_REVISAR') porRevisar++;
    else desactualizados++;

    const badge =
      item.estado === 'VIGENTE'
        ? '🟢 VIGENTE'
        : item.estado === 'POR_REVISAR'
        ? '🟡 REVISAR'
        : '🔴 ALERTA';

    const num = (index + 1).toString().padEnd(4);
    const nombre = item.nombre.slice(0, 28).padEnd(30);
    const inst = item.institucion.slice(0, 12).padEnd(14);
    const costo = item.costo.slice(0, 18).padEnd(20);
    const pagalo = item.codigoTributo.replace('Código Págalo.pe: ', '').replace('Código ', '').slice(0, 14).padEnd(16);
    const fecha = item.ultimaVerificacion.padEnd(14);

    console.log(`${num}${nombre}${inst}${costo}${pagalo}${fecha}${badge}`);
  });

  console.log('-'.repeat(105));
  console.log('\n📈 RESUMEN DEL CATÁLOGO:');
  console.log(`   Total de trámites registrados:  ${report.length}`);
  console.log(`   🟢 Verificados y al día:        ${vigentes} (${Math.round((vigentes / report.length) * 100)}%)`);
  console.log(`   🟡 Próximos a revisión (>60d):   ${porRevisar}`);
  console.log(`   🔴 Desactualizados (>90d):       ${desactualizados}`);
  console.log('================================================================================\n');
}

runAudit();
