// TypeScript interfaces matching the Prisma models for localStorage implementation

// Enums
export enum MealContext {
  BEFORE_BREAKFAST = 'BEFORE_BREAKFAST',
  AFTER_BREAKFAST = 'AFTER_BREAKFAST',
  BEFORE_LUNCH = 'BEFORE_LUNCH',
  AFTER_LUNCH = 'AFTER_LUNCH',
  BEFORE_DINNER = 'BEFORE_DINNER',
  AFTER_DINNER = 'AFTER_DINNER',
  BEDTIME = 'BEDTIME',
  WAKEUP = 'WAKEUP',
  FASTING = 'FASTING',
  OTHER = 'OTHER'
}

export enum DisplayUnit {
  A1C = 'A1C',
  AG = 'AG'
}

export enum ReminderFrequency {
  DAILY = 'DAILY',
  TWICE_DAILY = 'TWICE_DAILY',
  WEEKLY = 'WEEKLY',
  CUSTOM = 'CUSTOM'
}

export enum Theme {
  LIGHT = 'LIGHT',
  DARK = 'DARK',
  SYSTEM = 'SYSTEM'
}

export enum DiabetesType {
  TYPE_1 = 'TYPE_1',
  TYPE_2 = 'TYPE_2',
  GESTATIONAL = 'GESTATIONAL',
  PREDIABETES = 'PREDIABETES',
  OTHER = 'OTHER'
}

export enum GlucoseUnit {
  MGDL = 'MGDL',
  MMOLL = 'MMOLL'
}

// Base interface for all entities
export interface BaseEntity {
  id: string;
  createdAt: string; // ISO date string
  updatedAt: string; // ISO date string
}

// User model
export interface User extends BaseEntity {
  name?: string | null;
  email?: string | null;
  emailVerified?: string | null; // ISO date string
  image?: string | null;
  // References to related entities
  accounts?: string[]; // Array of Account IDs
  sessions?: string[]; // Array of Session IDs
  preferences?: string | null; // UserPreferences ID
  medicalProfile?: string | null; // UserMedicalProfile ID
  glucoseReadings?: string[]; // Array of GlucoseReading IDs
  runs?: string[]; // Array of Run IDs
  months?: string[]; // Array of Month IDs
}

// Account model
export interface Account extends BaseEntity {
  userId: string;
  type: string;
  provider: string;
  providerAccountId: string;
  refresh_token?: string | null;
  access_token?: string | null;
  expires_at?: number | null;
  token_type?: string | null;
  scope?: string | null;
  id_token?: string | null;
  session_state?: string | null;
}

// Session model
export interface Session extends BaseEntity {
  sessionToken: string;
  userId: string;
  expires: string; // ISO date string
}

// UserMedicalProfile model
export interface UserMedicalProfile extends BaseEntity {
  userId: string;
  diabetesType?: DiabetesType | null;
  birthYear?: number | null;
  targetA1C?: number | null;
  preferredUnit: GlucoseUnit;
}

// GlucoseReading model
export interface GlucoseReading extends BaseEntity {
  value: number;
  timestamp: string; // ISO date string
  mealContext: MealContext;
  notes?: string | null;
  userId: string;
  runId?: string | null;
}

// Run model
export interface Run extends BaseEntity {
  name: string;
  startDate: string; // ISO date string
  endDate: string; // ISO date string
  calculatedA1C?: number | null;
  averageGlucose?: number | null;
  userId: string;
  monthId?: string | null;
  readings?: string[]; // Array of GlucoseReading IDs
}

// Month model
export interface Month extends BaseEntity {
  name: string;
  startDate: string; // ISO date string
  endDate: string; // ISO date string
  calculatedA1C?: number | null;
  averageGlucose?: number | null;
  userId: string;
  runs?: string[]; // Array of Run IDs
}

// UserPreferences model
export interface UserPreferences extends BaseEntity {
  displayUnit: DisplayUnit;
  targetA1C?: number | null;
  reminderEnabled: boolean;
  reminderFrequency: ReminderFrequency;
  theme: Theme;
  userId: string;
}

// VerificationToken model
export interface VerificationToken {
  identifier: string;
  token: string;
  expires: string; // ISO date string
}

// Type for query filters
export type QueryFilter<T> = {
  [K in keyof T]?: T[K] | { $eq?: T[K]; $ne?: T[K]; $gt?: T[K]; $gte?: T[K]; $lt?: T[K]; $lte?: T[K]; $in?: T[K][]; $nin?: T[K][] };
};

// Type for query options
export interface QueryOptions {
  limit?: number;
  skip?: number;
  sort?: { [key: string]: 1 | -1 };
}