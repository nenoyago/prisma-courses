import { prisma } from 'database';

export async function findRelation() {
  const result = await prisma.courses.findMany({
    include: {
      teacher: true,
    },
  });

  console.log(result);
}
