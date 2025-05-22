/**
 * UserPreferences repository for localStorage data access
 */

import { DisplayUnit, ReminderFrequency, Theme, UserPreferences } from '@a1c/types';
import { BaseRepository } from './base-repository';
import { STORAGE_KEYS } from './local-storage';

export class UserPreferencesRepository extends BaseRepository<UserPreferences> {
  constructor() {
    super(STORAGE_KEYS.USER_PREFERENCES);
  }

  /**
   * Find preferences by user ID
   * @param userId User ID
   * @returns User preferences or null if not found
   */
  async findByUserId(userId: string): Promise<UserPreferences | null> {
    return this.findFirst({ userId });
  }

  /**
   * Create or update preferences for a user
   * @param userId User ID
   * @param data Preferences data
   * @returns Created or updated preferences
   */
  async createOrUpdate(userId: string, data: Partial<Omit<UserPreferences, 'id' | 'createdAt' | 'updatedAt' | 'userId'>>): Promise<UserPreferences> {
    // Check if preferences already exist for this user
    const existing = await this.findByUserId(userId);
    
    if (existing) {
      // Update existing preferences
      const updated = await this.update(existing.id, data);
      return updated!;
    } else {
      // Create new preferences with defaults
      return this.create({
        userId,
        displayUnit: data.displayUnit || DisplayUnit.A1C,
        targetA1C: data.targetA1C || null,
        reminderEnabled: data.reminderEnabled !== undefined ? data.reminderEnabled : false,
        reminderFrequency: data.reminderFrequency || ReminderFrequency.DAILY,
        theme: data.theme || Theme.SYSTEM
      });
    }
  }
}