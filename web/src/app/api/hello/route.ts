import { dataAccess } from '@a1c/data';

export async function GET() {
  
  const body = {
    status: 200,
    message: `Hello, from ${dataAccess()}!`
  }

  return Response.json(body);
}
