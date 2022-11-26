import { prisma } from 'database';

export async function deleteRelation() {
  const result = await prisma.coursesModules.delete({
    where: {
      id: 'adce41bb-e244-4d20-b39d-39a89f3cba8b',
    },
  });

  console.log(result);
}
