import { prisma } from 'database';

export async function createNonExistTeacher() {
  const result = await prisma.courses.create({
    data: {
      name: 'Curso de Elixir',
      duration: 200,
      description: 'Curso excelente de Elixir',
      teacher: {
        create: {
          name: 'Rafa Camarda',
        },
      },
    },
  });

  console.log(result);
}
