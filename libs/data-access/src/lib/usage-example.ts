/**
 * Usage examples for the localStorage data access layer
 * This file is for documentation purposes only and is not meant to be imported
 */

import { DiabetesType, GlucoseUnit, MealContext } from '@a1c/types';
import { dataAccess } from './data-access';

/**
 * Example: Creating a new user and associated data
 */
async function createUserExample() {
  // Get data access instance
  const db = dataAccess();
  
  // Create a new user
  const user = await db.users.create({
    email: 'user@example.com',
    name: 'Test User',
    emailVerified: new Date().toISOString(),
  });
  
  console.log('Created user:', user);
  
  // Create user preferences
  const preferences = await db.userPreferences.createOrUpdate(user.id, {
    targetA1C: 6.5,
  });
  
  console.log('Created preferences:', preferences);
  
  // Create user medical profile
  const medicalProfile = await db.userMedicalProfiles.createOrUpdate(user.id, {
    diabetesType: DiabetesType.TYPE_2,
    birthYear: 1980,
    preferredUnit: GlucoseUnit.MGDL,
  });
  
  console.log('Created medical profile:', medicalProfile);
  
  return user;
}

/**
 * Example: Adding glucose readings for a user
 */
async function addGlucoseReadingsExample(userId: string) {
  const db = dataAccess();
  
  // Add some glucose readings
  const reading1 = await db.glucoseReadings.create({
    userId,
    value: 120,
    timestamp: new Date().toISOString(),
    mealContext: MealContext.BEFORE_BREAKFAST,
  });
  
  const reading2 = await db.glucoseReadings.create({
    userId,
    value: 140,
    timestamp: new Date().toISOString(),
    mealContext: MealContext.AFTER_BREAKFAST,
    notes: 'Had cereal with milk',
  });
  
  console.log('Created readings:', reading1, reading2);
  
  // Get all readings for the user
  const userReadings = await db.glucoseReadings.findByUserId(userId);
  console.log(`Found ${userReadings.length} readings for user`);
  
  return [reading1, reading2];
}

/**
 * Example: Creating a run with readings
 */
async function createRunExample(userId: string, readingIds: string[]) {
  const db = dataAccess();
  
  // Create a run with the readings
  const run = await db.runs.createWithReadings({
    userId,
    name: 'Morning Run',
    startDate: new Date().toISOString(),
    endDate: new Date().toISOString(),
  }, readingIds);
  
  console.log('Created run:', run);
  
  // Calculate statistics for the run
  const updatedRun = await db.runs.calculateStatistics(run.id);
  console.log('Run with statistics:', updatedRun);
  
  return run;
}

/**
 * Example: Creating a month with runs
 */
async function createMonthExample(userId: string, runIds: string[]) {
  const db = dataAccess();
  
  // Create a month with the runs
  const month = await db.months.createWithRuns({
    userId,
    name: 'January 2023',
    startDate: new Date('2023-01-01').toISOString(),
    endDate: new Date('2023-01-31').toISOString(),
  }, runIds);
  
  console.log('Created month:', month);
  
  // Calculate statistics for the month
  const updatedMonth = await db.months.calculateStatistics(month.id);
  console.log('Month with statistics:', updatedMonth);
  
  return month;
}

/**
 * Example: Querying data with filters
 */
async function queryDataExample(userId: string) {
  const db = dataAccess();
  
  // Get readings within a date range
  const startDate = new Date('2023-01-01').toISOString();
  const endDate = new Date('2023-01-31').toISOString();
  
  const readings = await db.glucoseReadings.findByUserId(userId, {
    startDate,
    endDate,
    sort: { timestamp: -1 }, // Sort by timestamp descending
    limit: 10, // Limit to 10 results
  });
  
  console.log(`Found ${readings.length} readings in date range`);
  
  // Get runs for the user
  const runs = await db.runs.findByUserId(userId);
  console.log(`Found ${runs.length} runs for user`);
  
  // Get months for the user
  const months = await db.months.findByUserId(userId);
  console.log(`Found ${months.length} months for user`);
}

/**
 * Example: Full workflow
 */
async function fullWorkflowExample() {
  // Create a user
  const user = await createUserExample();
  
  // Add glucose readings
  const readings = await addGlucoseReadingsExample(user.id);
  
  // Create a run with the readings
  const run = await createRunExample(user.id, readings.map(r => r.id));
  
  // Create a month with the run
  const month = await createMonthExample(user.id, [run.id]);
  
  // Query data
  await queryDataExample(user.id);
}

// This is just for documentation, not meant to be executed
if (false) {
  fullWorkflowExample().catch(console.error);
}