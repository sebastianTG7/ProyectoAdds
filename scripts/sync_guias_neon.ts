import { PrismaClient } from '@prisma/client';
import { GUIAS_MULTIENTIDAD, TRAMITES } from '../src/data/mockData';

const prisma = new PrismaClient();

async function main() {
  console.log('Sincronizando Guías Multientidad en Neon PostgreSQL...');

  // 1. Limpiar guias anteriores
  await prisma.guiaTramite.deleteMany();
  await prisma.guiaMultientidad.deleteMany();

  // 2. Insertar las 10 guías multientidad
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

  const guiasCount = await prisma.guiaMultientidad.count();
  const guiasTramiteCount = await prisma.guiaTramite.count();
  console.log(`Neon actualizado exitosamente:`);
  console.log(`- Guías Multientidad: ${guiasCount}`);
  console.log(`- Trámites encadenados en guías: ${guiasTramiteCount}`);
}

main()
  .catch((e) => {
    console.error('Error sincronizando guías:', e);
    process.exit(1);
  })
  .finally(() => prisma.$disconnect());
