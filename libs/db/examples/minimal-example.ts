/**
 * Minimal Working Example for Prisma in A1C Estimator
 * 
 * This file demonstrates the minimal setup required to use Prisma
 * in the A1C Estimator project.
 */

import { prisma } from '../src/lib/prisma-client';

/**
 * Simple function to test database connection and basic operations
 */
async function testDatabaseConnection() {
  try {
    // Test connection by getting the number of users
    const userCount = await prisma.user.count();
    console.log(`Database connection successful. Found ${userCount} users.`);
    
    // Create a test user
    const newUser = await prisma.user.create({
      data: {
        email: 'test-minimal@example.com',
        name: 'Test User (Minimal Example)',
      },
    });
    console.log('Created test user:', newUser);
    
    // Find the user we just created
    const foundUser = await prisma.user.findUnique({
      where: {
        id: newUser.id,
      },
    });
    console.log('Found user by ID:', foundUser);
    
    // Clean up - delete the test user
    await prisma.user.delete({
      where: {
        id: newUser.id,
      },
    });
    console.log('Deleted test user');
    
    return {
      success: true,
      message: 'All database operations completed successfully',
    };
  } catch (error) {
    console.error('Database connection test failed:', error);
    return {
      success: false,
      message: `Database connection failed: ${error instanceof Error ? error.message : String(error)}`,
      error,
    };
  } finally {
    // Always disconnect from the database
    await prisma.$disconnect();
  }
}

// Uncomment to run the test
// testDatabaseConnection()
//   .then((result) => {
//     console.log('Test result:', result);
//     process.exit(result.success ? 0 : 1);
//   })
//   .catch((error) => {
//     console.error('Unexpected error:', error);
//     process.exit(1);
//   });

export { testDatabaseConnection };