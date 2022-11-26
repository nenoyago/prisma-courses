import { prisma } from 'database';

export async function filterStartWith() {
  const result = await prisma.courses.findMany({
    where: {
      name: {
        startsWith: 'Curso',
        mode: 'insensitive',
      },
    },
  });

  console.log(result);
}
