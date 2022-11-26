import { prisma } from 'database';

export async function create() {
  const result = await prisma.courses.create({
    data: {
      duration: 200,
      name: 'Curso de NodeJS',
      description: 'Curso excelente de NodeJS',
      teacher: {
        create: {
          name: 'Dani Evangelista',
        },
      },
    },
  });

  console.log(result);
}
