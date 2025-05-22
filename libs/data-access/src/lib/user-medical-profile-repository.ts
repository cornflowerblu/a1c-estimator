/**
 * UserMedicalProfile repository for localStorage data access
 */

import { DiabetesType, GlucoseUnit, UserMedicalProfile } from '@a1c/types';
import { BaseRepository } from './base-repository';
import { STORAGE_KEYS } from './local-storage';

export class UserMedicalProfileRepository extends BaseRepository<UserMedicalProfile> {
  constructor() {
    super(STORAGE_KEYS.MEDICAL_PROFILES);
  }

  /**
   * Find medical profile by user ID
   * @param userId User ID
   * @returns User medical profile or null if not found
   */
  async findByUserId(userId: string): Promise<UserMedicalProfile | null> {
    return this.findFirst({ userId });
  }

  /**
   * Create or update medical profile for a user
   * @param userId User ID
   * @param data Medical profile data
   * @returns Created or updated medical profile
   */
  async createOrUpdate(userId: string, data: Partial<Omit<UserMedicalProfile, 'id' | 'createdAt' | 'updatedAt' | 'userId'>>): Promise<UserMedicalProfile> {
    // Check if medical profile already exists for this user
    const existing = await this.findByUserId(userId);
    
    if (existing) {
      // Update existing medical profile
      const updated = await this.update(existing.id, data);
      return updated!;
    } else {
      // Create new medical profile with defaults
      return this.create({
        userId,
        diabetesType: data.diabetesType || null,
        birthYear: data.birthYear || null,
        targetA1C: data.targetA1C || null,
        preferredUnit: data.preferredUnit || GlucoseUnit.MGDL
      });
    }
  }
}