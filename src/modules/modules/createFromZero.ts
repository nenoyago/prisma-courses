import { prisma } from 'database';

export async function createFromZero() {
  const result = await prisma.coursesModules.create({
    data: {
      courses: {
        create: {
          duration: 300,
          name: 'Curso de NodeJS',
          description: 'Curso completo de NodeJS',
          teacher: {
            connect: {
              id: '78a18ccc-a240-48d9-ab9c-92c226131168',
            },
          },
        },
      },
      modules: {
        create: {
          description: 'Curso completo de PrismaIO',
          name: 'PrismaIO',
        },
      },
    },
  });

  console.log(result);
}
