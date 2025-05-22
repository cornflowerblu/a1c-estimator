/**
 * Basic Usage Example for Prisma Client
 * 
 * This file demonstrates how to use the Prisma client for common database operations.
 */

import { prisma } from '@a1c/db';

/**
 * Example: Create a new user
 */
async function createUser(email: string, name: string) {
  try {
    const user = await prisma.user.create({
      data: {
        email,
        name,
      },
    });
    console.log('User created:', user);
    return user;
  } catch (error) {
    console.error('Error creating user:', error);
    throw error;
  }
}

/**
 * Example: Find a user by email
 */
async function findUserByEmail(email: string) {
  try {
    const user = await prisma.user.findUnique({
      where: {
        email,
      },
    });
    console.log('User found:', user);
    return user;
  } catch (error) {
    console.error('Error finding user:', error);
    throw error;
  }
}

/**
 * Example: Create a glucose reading for a user
 */
async function createGlucoseReading(userId: string, value: number, mealContext: string) {
  try {
    const reading = await prisma.glucoseReading.create({
      data: {
        value,
        timestamp: new Date(),
        mealContext: mealContext as any, // Cast to any since we're using a string input
        userId,
      },
    });
    console.log('Glucose reading created:', reading);
    return reading;
  } catch (error) {
    console.error('Error creating glucose reading:', error);
    throw error;
  }
}

/**
 * Example: Get all glucose readings for a user
 */
async function getUserGlucoseReadings(userId: string) {
  try {
    const readings = await prisma.glucoseReading.findMany({
      where: {
        userId,
      },
      orderBy: {
        timestamp: 'desc',
      },
    });
    console.log(`Found ${readings.length} readings for user ${userId}`);
    return readings;
  } catch (error) {
    console.error('Error getting glucose readings:', error);
    throw error;
  }
}

/**
 * Example: Run a transaction to create a user and their first glucose reading
 */
async function createUserWithReading(email: string, name: string, glucoseValue: number) {
  try {
    const result = await prisma.$transaction(async (tx) => {
      // Create the user
      const user = await tx.user.create({
        data: {
          email,
          name,
        },
      });
      
      // Create a glucose reading for the user
      const reading = await tx.glucoseReading.create({
        data: {
          value: glucoseValue,
          timestamp: new Date(),
          mealContext: 'FASTING',
          userId: user.id,
        },
      });
      
      return { user, reading };
    });
    
    console.log('Transaction completed successfully:', result);
    return result;
  } catch (error) {
    console.error('Transaction failed:', error);
    throw error;
  }
}

// Export the example functions
export {
  createUser,
  findUserByEmail,
  createGlucoseReading,
  getUserGlucoseReadings,
  createUserWithReading,
};