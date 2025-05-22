import { dataAccess } from '@a1c/data'
import { User } from '@a1c/types';
import { prisma } from '@a1c/db';

// implement DataAccess and get users
export async function GET(): Promise<Response> {
  const users: User[] = await prisma.user.findMany(); 
  return Response.json({
    status: 200,
    data: users
  });
}