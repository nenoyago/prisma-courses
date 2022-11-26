import { prisma } from 'database';

export async function create() {
  const result = await prisma.authors.create({
    data: {
      name: 'Mayk Brito',
      books: {
        createMany: {
          data: [
            {
              name: 'Como comecar na programacao',
            },
            {
              name: 'Como ser muito produtivo',
            },
          ],
        },
      },
    },
  });

  console.log(result);
}
