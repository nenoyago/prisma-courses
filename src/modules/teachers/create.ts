import { prisma } from 'database';

export async function create() {
  const result = await prisma.teachers.create({
    data: {
      name: 'Yago Neno',
    },
  });

  console.log(result);
}
