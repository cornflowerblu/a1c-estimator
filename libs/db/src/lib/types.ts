/**
 * Re-export Prisma types for use in the application
 */
export {
  MealContext,
  DisplayUnit,
  ReminderFrequency,
  Theme,
  DiabetesType,
  GlucoseUnit,
  Prisma,
} from '@prisma/client';

// Export additional type utilities as needed
export type { Account, User, Session, GlucoseReading, Run, Month, UserPreferences, UserMedicalProfile } from '@prisma/client';