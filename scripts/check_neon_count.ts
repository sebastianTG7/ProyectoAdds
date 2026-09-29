import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  const tramitesCount = await prisma.tramite.count();
  const instCount = await prisma.institucion.count();
  const catCount = await prisma.categoria.count();
  console.log(`Neon PostgreSQL actual count:`);
  console.log(`- Trámites: ${tramitesCount}`);
  console.log(`- Instituciones: ${instCount}`);
  console.log(`- Categorías: ${catCount}`);
}

main()
  .catch((e) => console.error('Error connecting to Neon:', e.message))
  .finally(() => prisma.$disconnect());
