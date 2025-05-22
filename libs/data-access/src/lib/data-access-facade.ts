/**
 * Data access facade for localStorage implementation
 * Provides a unified interface for all repositories
 */

import { GlucoseReadingRepository } from './glucose-reading-repository';
import { initializeStorage } from './local-storage';
import { MonthRepository } from './month-repository';
import { RunRepository } from './run-repository';
import { UserMedicalProfileRepository } from './user-medical-profile-repository';
import { UserPreferencesRepository } from './user-preferences-repository';
import { UserRepository } from './user-repository';

/**
 * Data access facade class
 * Initializes storage and provides access to all repositories
 */
export class DataAccess {
  private static instance: DataAccess;
  
  readonly users: UserRepository;
  readonly glucoseReadings: GlucoseReadingRepository;
  readonly runs: RunRepository;
  readonly months: MonthRepository;
  readonly userPreferences: UserPreferencesRepository;
  readonly userMedicalProfiles: UserMedicalProfileRepository;
  
  private constructor() {
    // Initialize localStorage with default values
    initializeStorage();
    
    // Initialize repositories
    this.users = new UserRepository();
    this.glucoseReadings = new GlucoseReadingRepository();
    this.runs = new RunRepository();
    this.months = new MonthRepository();
    this.userPreferences = new UserPreferencesRepository();
    this.userMedicalProfiles = new UserMedicalProfileRepository();
  }

  /**
   * Get the singleton instance of DataAccess
   * @returns DataAccess instance
   */
  public static getInstance(): DataAccess {
    if (!DataAccess.instance) {
      DataAccess.instance = new DataAccess();
    }
    
    return DataAccess.instance;
  }
}

/**
 * Get the data access instance
 * @returns DataAccess instance
 */
export function getDataAccess(): DataAccess {
  return DataAccess.getInstance();
}