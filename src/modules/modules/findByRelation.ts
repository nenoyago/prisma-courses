import { prisma } from 'database';

export async function findByRelation() {
  const result = await prisma.coursesModules.findMany({
    where: {
      id: '4b73423a-ab3a-44cf-8027-66ac70e792cf',
    },
    include: {
      modules: true,
      courses: true,
    },
  });

  console.log(JSON.stringify(result));
}
