import {randomData} from '@a1c/services'

export async function GET(): Promise<Response> {
  const data = await randomData();
  
  return Response.json({
    status: 200,
    data: data
  })
}