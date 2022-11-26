import { prisma } from 'database';

export async function filterOr() {
  let skip = 0;
  let take = 2;
  let exist = true;

  while (exist) {
    const result = await prisma.courses.findMany({
      skip,
      take,
    });

    console.log(result);
    console.log('--------');

    skip += 2;

    if (result.length === 0) {
      exist = false;
    }
  }
}
