import { prisma } from 'database';

export async function findByCourse() {
  const result = await prisma.courses.findMany({
    where: {
      id: '4b73423a-ab3a-44cf-8027-66ac70e792cf',
    },
    include: {
      coursesModules: true,
    },
  });

  console.log(JSON.stringify(result));
}
