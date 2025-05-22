/**
 * Basic Usage Examples for Prisma Client in A1C Estimator
 * 
 * This file demonstrates common database operations using the Prisma client.
 * It includes examples for:
 * - User operations
 * - Glucose reading operations
 * - Run operations
 * - Month operations
 */

import { prisma } from '../src/lib/prisma-client';
import { DiabetesType, GlucoseUnit, MealContext } from '../src/lib/types';

/**
 * User Operations
 */
export async function userOperations() {
  // Create a new user
  const newUser = await prisma.user.create({
    data: {
      email: 'test@example.com',
      name: 'Test User',
    },
  });
  console.log('Created user:', newUser);

  // Create user with medical profile
  const userWithProfile = await prisma.user.create({
    data: {
      email: 'patient@example.com',
      name: 'Patient User',
      medicalProfile: {
        create: {
          diabetesType: DiabetesType.TYPE_2,
          birthYear: 1980,
          targetA1C: 6.5,
          preferredUnit: GlucoseUnit.MGDL,
        },
      },
    },
    include: {
      medicalProfile: true,
    },
  });
  console.log('Created user with medical profile:', userWithProfile);

  // Find a user by email
  const foundUser = await prisma.user.findUnique({
    where: {
      email: 'test@example.com',
    },
    include: {
      medicalProfile: true,
      preferences: true,
    },
  });
  console.log('Found user:', foundUser);

  // Update a user
  const updatedUser = await prisma.user.update({
    where: {
      id: newUser.id,
    },
    data: {
      name: 'Updated Name',
    },
  });
  console.log('Updated user:', updatedUser);

  return { newUser, userWithProfile, foundUser, updatedUser };
}

/**
 * Glucose Reading Operations
 */
export async function glucoseReadingOperations(userId: string) {
  // Create a new glucose reading
  const newReading = await prisma.glucoseReading.create({
    data: {
      value: 120,
      timestamp: new Date(),
      mealContext: MealContext.AFTER_BREAKFAST,
      notes: 'After cereal',
      userId,
    },
  });
  console.log('Created glucose reading:', newReading);

  // Get all readings for a user
  const userReadings = await prisma.glucoseReading.findMany({
    where: {
      userId,
    },
    orderBy: {
      timestamp: 'desc',
    },
  });
  console.log(`Found ${userReadings.length} readings for user`);

  // Get readings within a date range
  const startDate = new Date();
  startDate.setDate(startDate.getDate() - 7); // One week ago
  
  const readingsInRange = await prisma.glucoseReading.findMany({
    where: {
      userId,
      timestamp: {
        gte: startDate,
        lte: new Date(),
      },
    },
    orderBy: {
      timestamp: 'asc',
    },
  });
  console.log(`Found ${readingsInRange.length} readings in the last week`);

  // Update a reading
  const updatedReading = await prisma.glucoseReading.update({
    where: {
      id: newReading.id,
    },
    data: {
      value: 125,
      notes: 'Updated reading value',
    },
  });
  console.log('Updated reading:', updatedReading);

  return { newReading, userReadings, readingsInRange, updatedReading };
}

/**
 * Run Operations
 */
export async function runOperations(userId: string) {
  // Create a new run
  const startDate = new Date();
  startDate.setDate(startDate.getDate() - 14); // Two weeks ago
  
  const endDate = new Date();
  
  const newRun = await prisma.run.create({
    data: {
      name: 'Two Week Run',
      startDate,
      endDate,
      calculatedA1C: 6.7,
      averageGlucose: 140,
      userId,
    },
  });
  console.log('Created run:', newRun);

  // Get all runs for a user
  const userRuns = await prisma.run.findMany({
    where: {
      userId,
    },
    orderBy: {
      startDate: 'desc',
    },
    include: {
      readings: true,
    },
  });
  console.log(`Found ${userRuns.length} runs for user`);

  // Add readings to a run
  const reading1 = await prisma.glucoseReading.create({
    data: {
      value: 130,
      timestamp: new Date(startDate.getTime() + 1000 * 60 * 60 * 24), // 1 day after start
      mealContext: MealContext.BEFORE_LUNCH,
      userId,
      runId: newRun.id,
    },
  });

  const reading2 = await prisma.glucoseReading.create({
    data: {
      value: 145,
      timestamp: new Date(startDate.getTime() + 1000 * 60 * 60 * 48), // 2 days after start
      mealContext: MealContext.AFTER_DINNER,
      userId,
      runId: newRun.id,
    },
  });

  // Get run with readings
  const runWithReadings = await prisma.run.findUnique({
    where: {
      id: newRun.id,
    },
    include: {
      readings: true,
    },
  });
  console.log(`Run has ${runWithReadings?.readings.length} readings`);

  return { newRun, userRuns, runWithReadings, readings: [reading1, reading2] };
}

/**
 * Month Operations
 */
export async function monthOperations(userId: string) {
  // Create a new month
  const startDate = new Date();
  startDate.setDate(1); // First day of current month
  startDate.setHours(0, 0, 0, 0);
  
  const endDate = new Date(startDate);
  endDate.setMonth(endDate.getMonth() + 1);
  endDate.setDate(0); // Last day of current month
  endDate.setHours(23, 59, 59, 999);
  
  const monthName = startDate.toLocaleString('default', { month: 'long', year: 'numeric' });
  
  const newMonth = await prisma.month.create({
    data: {
      name: monthName,
      startDate,
      endDate,
      calculatedA1C: 6.5,
      averageGlucose: 135,
      userId,
    },
  });
  console.log('Created month:', newMonth);

  // Create a run within the month
  const runStartDate = new Date(startDate);
  runStartDate.setDate(runStartDate.getDate() + 1); // Start on the 2nd day
  
  const runEndDate = new Date(runStartDate);
  runEndDate.setDate(runEndDate.getDate() + 13); // 14-day run
  
  const run = await prisma.run.create({
    data: {
      name: '14-day Run',
      startDate: runStartDate,
      endDate: runEndDate,
      calculatedA1C: 6.6,
      averageGlucose: 138,
      userId,
      monthId: newMonth.id,
    },
  });

  // Get month with runs
  const monthWithRuns = await prisma.month.findUnique({
    where: {
      id: newMonth.id,
    },
    include: {
      runs: true,
    },
  });
  console.log(`Month has ${monthWithRuns?.runs.length} runs`);

  return { newMonth, run, monthWithRuns };
}

/**
 * Main example function that demonstrates all operations
 */
export async function runAllExamples() {
  try {
    console.log('Starting Prisma examples...');
    
    // Create a test user
    const { newUser } = await userOperations();
    const userId = newUser.id;
    
    // Run other operations with this user
    const glucoseResults = await glucoseReadingOperations(userId);
    const runResults = await runOperations(userId);
    const monthResults = await monthOperations(userId);
    
    console.log('All examples completed successfully!');
    
    // Clean up (optional)
    // await prisma.user.delete({ where: { id: userId } });
    
    return {
      user: newUser,
      glucoseResults,
      runResults,
      monthResults,
    };
  } catch (error) {
    console.error('Error running examples:', error);
    throw error;
  } finally {
    await prisma.$disconnect();
  }
}

// Uncomment to run the examples
// runAllExamples()
//   .then(() => console.log('Done!'))
//   .catch(console.error);