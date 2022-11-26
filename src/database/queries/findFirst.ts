import { prisma } from 'database';

export async function findFirst() {
  const course = await prisma.courses.findFirst({
    take: -1,
  });

  console.log(course);
}
