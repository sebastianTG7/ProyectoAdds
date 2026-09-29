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

  // 4. Insertar Trámites con Pasos y Requisitos
  for (const t of TRAMITES) {
    await prisma.tramite.create({
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
        tipoResultado: t.tipoResultado as any,
        vigenciaResultadoDias: t.vigenciaResultadoDias,
        ultimaVerificacion: new Date(t.ultimaVerificacion),
        fuenteUrl: t.fuenteUrl,
        frecuenciaBusqueda: t.frecuenciaBusqueda,
        costoResumen: t.costoResumen,
        baseLegal: t.baseLegal,
        pasos: {
          create: t.pasos.map((p) => ({
            id: p.id,
            orden: p.orden,
            modalidad: p.modalidad === 'online' || p.modalidad === 'presencial' ? p.modalidad : null,
            variante: p.variante,
            esOpcional: p.esOpcional,
            titulo: p.titulo,
            descripcion: p.descripcion,
            costoTipo: p.costoTipo as any,
            costoMin: p.costoMin,
            costoMax: p.costoMax,
            ubicacion: p.ubicacion,
          })),
        },
        requisitos: {
          create: t.requisitos.map((r) => ({
            id: r.id,
            descripcion: r.descripcion,
            aplicaSi: r.aplicaSi,
            orden: r.orden,
          })),
        },
      },
    });
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
