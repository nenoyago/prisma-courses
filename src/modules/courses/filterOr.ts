import { prisma } from 'database';

export async function filterOr() {
  const result = await prisma.courses.findMany({
    where: {
      OR: [
        {
          name: {
            contains: 'ReactJS',
          },
        },
        {
          name: {
            contains: 'React Native',
          },
        },
      ],
      AND: {
        duration: 300,
      },
    },
  });

  console.log(result);
}
