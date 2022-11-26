import { prisma } from 'database';

export async function createManyToMany() {
  const result = await prisma.coursesModules.create({
    data: {
      id_course: '4b73423a-ab3a-44cf-8027-66ac70e792cf',
      id_module: '18d69ed8-bc1f-474b-b2e1-2b3fe43d3188',
    },
  });

  console.log(result);
}
