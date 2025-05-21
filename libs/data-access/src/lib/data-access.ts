import {PrismaClient} from '@prisma/client/a1c'

const prisma = new PrismaClient();

export async function dataAccess(): Promise<PrismaClient> {
  return prisma
}