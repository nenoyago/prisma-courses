import { prisma } from 'database';

export async function update() {
  const result = await prisma.courses.update({
    where: {
      id: '180cf0f4-84ad-6f82-8cb3-15b816809f9b',
    },
    data: {
      duration: 300,
      description: 'Curso muito excelente de ReactJS com Diego Fernandes',
    },
  });

  console.log(result);
}
