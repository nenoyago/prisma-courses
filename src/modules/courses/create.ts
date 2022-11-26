import { prisma } from 'database';

export async function create() {
  const result = await prisma.courses.create({
    data: {
      name: 'Curso de Javascript',
      duration: 500,
      description: 'Curso de Javascript moderno',
      teacher: {
        connectOrCreate: {
          where: {
            name: 'Yago Neno',
          },
          create: {
            name: 'Yago Neno',
          },
        },
      },
    },
  });

  console.log(result);
}
