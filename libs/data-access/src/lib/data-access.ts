import { prisma } from '@a1c/db';

/**
 * @deprecated Use the prisma client directly from @a1c/db instead.
 * Example: import { prisma } from '@a1c/db';
 */
export async function dataAccess(url?: string) {
  console.warn('dataAccess() is deprecated. Import prisma from @a1c/db directly instead.');
  return prisma;
}
