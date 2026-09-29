import { PrismaClient } from '@prisma/client';
import { CATEGORIAS, INSTITUCIONES, TRAMITES, GUIAS_MULTIENTIDAD } from '../src/data/mockData';

const prisma = new PrismaClient();

async function main() {
  console.log('Iniciando carga de datos iniciales en PostgreSQL...');

  // 1. Limpieza previa
  await prisma.guiaTramite.deleteMany();
  await prisma.guiaMultientidad.deleteMany();
  await prisma.tramiteCanal.deleteMany();
  await prisma.canalPago.deleteMany();
  await prisma.coberturaZona.deleteMany();
  await prisma.requisito.deleteMany();
  await prisma.paso.deleteMany();
  await prisma.tramite.deleteMany();
  await prisma.institucion.deleteMany();
  await prisma.categoria.deleteMany();

  // 2. Insertar Categorias
  for (const cat of CATEGORIAS) {
    await prisma.categoria.create({
      data: {
        id: cat.id,
        slug: cat.slug,
        nombre: cat.nombre,
        descripcion: cat.descripcion,
        icono: cat.icono,
      },
    });
  }

  // 3. Insertar Instituciones
  for (const inst of INSTITUCIONES) {
    await prisma.institucion.create({
      data: {
        id: inst.id,
        slug: inst.slug,
        nombre: inst.nombre,
        sigla: inst.sigla,
        tipo: inst.tipo as any,
        webOficial: inst.webOficial,
        descripcion: inst.descripcion,
      },
    });
  }

  // Helper sanitizers for Postgres enums
  const sanitizeTipoResultado = (tipo: string): any => {
    if (tipo === 'servicio_digital') return 'documento_digital';
    if (tipo === 'consulta_informativa') return 'confirmacion';
    const valids = ['documento_digital', 'documento_fisico', 'licencia', 'objeto_fisico', 'confirmacion'];
    return valids.includes(tipo) ? tipo : 'documento_digital';
  };

  const sanitizeCostoTipo = (costoTipo?: string): any => {
    const valids = ['fijo', 'variable', 'gratuito', 'rango'];
    return (costoTipo && valids.includes(costoTipo)) ? costoTipo : 'gratuito';
  };

  // 4. Insertar Trámites con Pasos y Requisitos (en lotes concurrentes para agilidad)
  console.log(`Insertando ${TRAMITES.length} trámites en Neon PostgreSQL...`);
  const CHUNK_SIZE = 15;
  for (let i = 0; i < TRAMITES.length; i += CHUNK_SIZE) {
    const chunk = TRAMITES.slice(i, i + CHUNK_SIZE);
    await Promise.all(
      chunk.map((t) =>
        prisma.tramite.create({
          data: {
            id: t.id,
            slug: t.slug,
            nombre: t.nombre,
            descripcion: t.descripcion,
            categoriaId: t.categoriaId,
            institucionId: t.institucionId,
            esCompuesto: t.esCompuesto,
            esRecurrente: t.esRecurrente,
            duracionMinDias: t.duracionMinDias,
            duracionMaxDias: t.duracionMaxDias,
            duracionTexto: t.duracionTexto,
            tipoResultado: sanitizeTipoResultado(t.tipoResultado),
            vigenciaResultadoDias: t.vigenciaResultadoDias,
            ultimaVerificacion: new Date(t.ultimaVerificacion),
            fuenteUrl: t.fuenteUrl,
            frecuenciaBusqueda: t.frecuenciaBusqueda,
            costoResumen: t.costoResumen,
            baseLegal: t.baseLegal,
            pasos: {
              create: (t.pasos || []).map((p) => ({
                id: p.id,
                orden: p.orden,
                modalidad: p.modalidad === 'online' || p.modalidad === 'presencial' ? p.modalidad : null,
                variante: p.variante,
                esOpcional: p.esOpcional,
                titulo: p.titulo,
                descripcion: p.descripcion,
                costoTipo: sanitizeCostoTipo(p.costoTipo),
                costoMin: p.costoMin ?? 0,
                costoMax: p.costoMax ?? 0,
                ubicacion: p.ubicacion,
              })),
            },
            requisitos: {
              create: (t.requisitos || []).map((r) => ({
                id: r.id,
                descripcion: r.descripcion,
                aplicaSi: r.aplicaSi,
                orden: r.orden,
              })),
            },
          },
        })
      )
    );
    if ((i + CHUNK_SIZE) % 150 === 0 || i + CHUNK_SIZE >= TRAMITES.length) {
      console.log(`Progreso: ${Math.min(i + CHUNK_SIZE, TRAMITES.length)} / ${TRAMITES.length} trámites insertados.`);
    }
  }

  // 5. Insertar Guías Multientidad
  for (const g of GUIAS_MULTIENTIDAD) {
    const guia = await prisma.guiaMultientidad.create({
      data: {
        id: g.id,
        slug: g.slug,
        nombre: g.nombre,
        descripcion: g.descripcion,
        ultimaVerificacion: new Date(g.ultimaVerificacion),
        duracionEstimada: g.duracionEstimada,
        costoEstimado: g.costoEstimado,
      },
    });

    for (const item of g.items) {
      const matchTramite = TRAMITES.find((tr) => tr.slug === item.tramiteSlug);
      if (matchTramite) {
        await prisma.guiaTramite.create({
          data: {
            guiaId: guia.id,
            tramiteId: matchTramite.id,
            orden: item.orden,
            nota: item.nota,
          },
        });
      }
    }
  }

  console.log(`Base de datos poblada exitosamente con ${TRAMITES.length} tramites oficiales.`);
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
