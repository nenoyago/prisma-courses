import { Prisma, Modules } from '@prisma/client';
import { prisma } from 'database';

export async function queryRaw() {
  const result = await prisma.$queryRaw<Modules[]>(
    Prisma.sql`SELECT * FROM modules`
  );

  result.forEach(item => console.log(item.name));
}
