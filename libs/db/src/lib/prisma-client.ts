// eslint-disable-next-line @nx/enforce-module-boundaries
import { PrismaClient } from '../../schema/generated/prisma';

// PrismaClient is attached to the `global` object in development to prevent
// exhausting your database connection limit.
// Learn more: https://pris.ly/d/help/next-js-best-practices

// Add prisma to the NodeJS global type
export interface CustomNodeJsGlobal {
  prisma: PrismaClient | undefined;
}

// Prevent multiple instances of Prisma Client in development
declare global {
  // eslint-disable-next-line no-var
  var prisma: PrismaClient | undefined;
}

export const prisma = globalThis.prisma || new PrismaClient();

if (process.env['NODE_ENV'] !== 'production') {
  globalThis.prisma = prisma;
}
