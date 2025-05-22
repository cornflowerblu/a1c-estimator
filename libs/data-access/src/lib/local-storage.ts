/**
 * localStorage utility functions for data persistence
 * This provides a temporary storage solution while the Prisma configuration is being fixed
 */

// Check if we're in a browser environment
const isBrowser = typeof window !== 'undefined';

// Storage keys for each entity type
export const STORAGE_KEYS = {
  USERS: 'a1c_users',
  ACCOUNTS: 'a1c_accounts',
  SESSIONS: 'a1c_sessions',
  MEDICAL_PROFILES: 'a1c_medical_profiles',
  GLUCOSE_READINGS: 'a1c_glucose_readings',
  RUNS: 'a1c_runs',
  MONTHS: 'a1c_months',
  USER_PREFERENCES: 'a1c_user_preferences',
  VERIFICATION_TOKENS: 'a1c_verification_tokens',
};

// In-memory storage for server-side rendering
const memoryStorage: Record<string, string> = {};

/**
 * Get data from storage
 * @param key Storage key
 * @returns Parsed data or null if not found
 */
export function getStorageItem<T>(key: string): T | null {
  try {
    if (isBrowser) {
      const item = localStorage.getItem(key);
      return item ? JSON.parse(item) : null;
    } else {
      // Use in-memory storage for server-side
      const item = memoryStorage[key];
      return item ? JSON.parse(item) : null;
    }
  } catch (error) {
    console.error(`Error getting item from storage: ${key}`, error);
    return null;
  }
}

/**
 * Set data in storage
 * @param key Storage key
 * @param value Data to store
 */
export function setStorageItem<T>(key: string, value: T): void {
  try {
    const serialized = JSON.stringify(value);
    if (isBrowser) {
      localStorage.setItem(key, serialized);
    } else {
      // Use in-memory storage for server-side
      memoryStorage[key] = serialized;
    }
  } catch (error) {
    console.error(`Error setting item in storage: ${key}`, error);
  }
}

/**
 * Remove data from storage
 * @param key Storage key
 */
export function removeStorageItem(key: string): void {
  try {
    if (isBrowser) {
      localStorage.removeItem(key);
    } else {
      // Use in-memory storage for server-side
      delete memoryStorage[key];
    }
  } catch (error) {
    console.error(`Error removing item from storage: ${key}`, error);
  }
}

/**
 * Initialize storage with default values if empty
 */
export function initializeStorage(): void {
  // Initialize each entity type with an empty array if not already set
  Object.values(STORAGE_KEYS).forEach((key) => {
    if (!getStorageItem(key)) {
      setStorageItem(key, []);
    }
  });
}

/**
 * Clear all application storage
 */
export function clearStorage(): void {
  Object.values(STORAGE_KEYS).forEach((key) => {
    removeStorageItem(key);
  });
}

/**
 * Generate a UUID for entity IDs
 * @returns UUID string
 */
export function generateId(): string {
  // Simple UUID v4 implementation
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, (c) => {
    const r = (Math.random() * 16) | 0;
    const v = c === 'x' ? r : (r & 0x3) | 0x8;
    return v.toString(16);
  });
}

/**
 * Get current timestamp in ISO format
 * @returns ISO date string
 */
export function getCurrentTimestamp(): string {
  return new Date().toISOString();
}