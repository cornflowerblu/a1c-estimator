/**
 * User repository for localStorage data access
 */

import { User } from '@a1c/types';
import { BaseRepository } from './base-repository';
import { STORAGE_KEYS } from './local-storage';

export class UserRepository extends BaseRepository<User> {
  constructor() {
    super(STORAGE_KEYS.USERS);
  }

  /**
   * Find a user by email
   * @param email User email
   * @returns User or null if not found
   */
  async findByEmail(email: string): Promise<User | null> {
    return this.findFirst({ email });
  }

  /**
   * Find a user by external ID (from auth provider)
   * @param externalId External ID
   * @returns User or null if not found
   */
  async findByExternalId(externalId: string): Promise<User | null> {
    // Find user through accounts
    const accounts = await this.getAccounts();
    const account = accounts.find(acc => acc.providerAccountId === externalId);
    
    if (!account) {
      return null;
    }
    
    return this.findById(account.userId);
  }

  /**
   * Get user accounts
   * @returns Array of accounts
   */
  private async getAccounts() {
    const accounts = getStorageItem<any[]>(STORAGE_KEYS.ACCOUNTS) || [];
    return accounts;
  }
}