import { prisma } from 'database';

export async function createFkTeacher() {
  const result = await prisma.courses.create({
    data: {
      name: 'Curso de ReactJS',
      duration: 300,
      description: 'Curso excelente de ReactJS',
      id_teacher: '86e5146e-2772-49a1-b1db-6dffa12b154e',
    },
  });

  console.log(result);
}
