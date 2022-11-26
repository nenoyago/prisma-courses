import { prisma } from 'database';

export async function create() {
  const result = await prisma.books.create({
    data: {
      name: 'Arquitetura limpa',
      id_author: 'eda62cc1-aa53-4b5e-b454-ec75819c2488',
    },
  });

  console.log(result);
}
