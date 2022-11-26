import { prisma } from 'database';

export async function createExistTeacher() {
  const result = await prisma.courses.create({
    data: {
      name: 'Curso de React Native',
      description: 'Curso excelente de React Native',
      duration: 300,
      teacher: {
        connect: {
          id: '0677311b-9082-47f7-b3a9-ef1b8e781b38',
        },
      },
    },
  });

  console.log(result);
}
