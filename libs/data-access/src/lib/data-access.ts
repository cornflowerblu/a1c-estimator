import { PrismaClient } from '@prisma/client/a1c';

export async function dataAccess(url?: string): Promise<PrismaClient> {
  const dbUrl = process.env['DATABASE_URL'];

  if (!dbUrl) {
    console.error('DATABASE_URL is not defined');
    const DATABASE_URL = url;
    const prisma = new PrismaClient({
      datasources: {
        db: {
          url: DATABASE_URL,
        },
      },
    });
    return prisma;
  }

  const prisma = new PrismaClient({
    datasources: {
      db: {
        url: dbUrl,
      },
    },
  });
  return prisma;
}
