import { getDataAccess } from './data-access-facade';

// Export the localStorage-based data access implementation
export const dataAccess = getDataAccess;

// For backward compatibility with the original Prisma implementation
export async function getPrismaClient(url?: string) {
  console.warn('Prisma client is not available in the localStorage implementation');
  return null;
}
