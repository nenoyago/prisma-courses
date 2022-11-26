import { prisma } from 'database';

export async function create() {
  const result = await prisma.modules.create({
    data: {
      name: 'Aprendendo Firebase',
      description: 'Aprendendo Firebase do zero',
      coursesModules: {
        create: {
          courses: {
            connect: {
              id: '4b73423a-ab3a-44cf-8027-66ac70e792cf',
            },
          },
        },
      },
    },
  });

  console.log(result);
}
