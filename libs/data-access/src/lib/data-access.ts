import { prisma } from '@a1c/db';
import { getDataAccess } from './data-access-facade';

/**
 * @deprecated Use the prisma client directly from @a1c/db instead.
 * Example: import { prisma } from '@a1c/db';
 */
export async function dataAccess(url?: string) {
  console.warn('dataAccess() is deprecated. Import prisma from @a1c/db directly instead.');
  return prisma;

// Export the localStorage-based data access implementation
export const dataAccess = getDataAccess;

// For backward compatibility with the original Prisma implementation
export async function getPrismaClient(url?: string) {
  console.warn('Prisma client is not available in the localStorage implementation');
  return null;
}
