import { dataAccess } from '@a1c/data'
import { User } from '@a1c/types';
import { PrismaClient } from '@prisma/client';

// implement DataAccess and get users
export async function GET(): Promise<Response> {
  const data: PrismaClient = await dataAccess();
  const users: User[] = await data.user.findMany(); 
  return Response.json({
    status: 200,
    data: users
  });
}