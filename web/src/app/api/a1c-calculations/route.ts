import { NextRequest } from 'next/server';
import { prisma } from '@a1c/db';
import { User } from '@a1c/types';

// Define the request body type
interface A1CCalculationRequest {
  firstName: string;
  lastName: string;
  email: string;
  userId?: string;
  readings: Array<{
    value: number;
    date: string;
    notes?: string;
  }>;
}

export async function POST(request: NextRequest): Promise<Response> {
  try {
    // Parse the request body
    const data: A1CCalculationRequest = await request.json();
    
    // Validate required fields
    if (!data.firstName || !data.lastName || !data.email || !data.readings || data.readings.length === 0) {
      return Response.json(
        { 
          success: false, 
          message: 'Missing required fields' 
        },
        { status: 400 }
      );
    }
    
    // Find or create user
    let user: User | null = null;
    
    if (data.userId) {
      // If userId is provided, try to find the user
      user = await prisma.user.findUnique({
        where: { id: data.userId }
      });
      
      if (!user) {
        return Response.json(
          { 
            success: false, 
            message: 'User not found' 
          },
          { status: 404 }
        );
      }
    } else {
      // Check if user exists with the provided email
      user = await prisma.user.findFirst({
        where: { email: data.email }
      });
      
      if (!user) {
        // Create a new user if not found
        user = await prisma.user.create({
          data: {
            name: `${data.firstName} ${data.lastName}`,
            email: data.email,
          }
        });
      }
    }
    
    // Calculate average glucose from A1C readings
    const averageA1C = data.readings.reduce((sum, reading) => sum + reading.value, 0) / data.readings.length;
    
    // Create a new run for the A1C readings
    const run = await prisma.run.create({
      data: {
        name: `A1C Calculation - ${new Date().toISOString().split('T')[0]}`,
        startDate: new Date(Math.min(...data.readings.map(r => new Date(r.date).getTime()))).toISOString(),
        endDate: new Date(Math.max(...data.readings.map(r => new Date(r.date).getTime()))).toISOString(),
        calculatedA1C: averageA1C,
        userId: user.id,
      }
    });
    
    // Create glucose readings
    const readings = await Promise.all(
      data.readings.map(reading => 
        prisma.glucoseReading.create({
          data: {
            value: reading.value,
            timestamp: new Date(reading.date).toISOString(),
            mealContext: 'OTHER', // Default context
            notes: reading.notes || null,
            userId: user!.id,
            runId: run.id,
          }
        })
      )
    );
    
    return Response.json(
      {
        success: true,
        message: 'A1C calculation submitted successfully',
        data: {
          user: {
            id: user.id,
            name: user.name,
            email: user.email,
          },
          run: {
            id: run.id,
            name: run.name,
            calculatedA1C: run.calculatedA1C,
          },
          readingsCount: readings.length,
        }
      },
      { status: 201 }
    );
  } catch (error) {
    console.error('Error submitting A1C calculation:', error);
    
    return Response.json(
      { 
        success: false, 
        message: 'Internal server error' 
      },
      { status: 500 }
    );
  }
}