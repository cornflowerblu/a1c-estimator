/**
 * Month repository for localStorage data access
 */

import { Month } from '@a1c/types';
import { BaseRepository } from './base-repository';
import { STORAGE_KEYS } from './local-storage';
import { RunRepository } from './run-repository';
import { GlucoseReadingRepository } from './glucose-reading-repository';

export class MonthRepository extends BaseRepository<Month> {
  private runRepository: RunRepository;
  private glucoseReadingRepository: GlucoseReadingRepository;
  
  constructor() {
    super(STORAGE_KEYS.MONTHS);
    this.runRepository = new RunRepository();
    this.glucoseReadingRepository = new GlucoseReadingRepository();
  }

  /**
   * Find months by user ID
   * @param userId User ID
   * @param options Query options
   * @returns Array of months
   */
  async findByUserId(userId: string, options: { 
    limit?: number; 
    skip?: number; 
    sort?: { [key: string]: 1 | -1 }; 
  } = {}): Promise<Month[]> {
    return this.findMany(
      { userId }, 
      {
        limit: options.limit,
        skip: options.skip,
        sort: options.sort || { startDate: -1 } // Default sort by startDate descending
      }
    );
  }

  /**
   * Create a new month with runs
   * @param data Month data
   * @param runIds Array of run IDs to associate with the month
   * @returns Created month
   */
  async createWithRuns(data: Omit<Month, 'id' | 'createdAt' | 'updatedAt' | 'runs'>, runIds: string[]): Promise<Month> {
    // Create the month
    const month = await this.create({
      ...data,
      runs: runIds
    });
    
    // Update each run with the month ID
    for (const runId of runIds) {
      await this.runRepository.update(runId, { monthId: month.id });
    }
    
    return month;
  }

  /**
   * Calculate A1C and average glucose for a month
   * @param monthId Month ID
   * @returns Updated month with calculated values
   */
  async calculateStatistics(monthId: string): Promise<Month | null> {
    const month = await this.findById(monthId);
    
    if (!month) {
      return null;
    }
    
    // Get all runs for this month
    const runs = await this.runRepository.findByMonthId(monthId);
    
    // Get all readings from all runs
    let allReadings = [];
    for (const run of runs) {
      const readings = await this.runRepository.getReadings(run.id);
      allReadings = [...allReadings, ...readings];
    }
    
    // Calculate average glucose
    const averageGlucose = this.glucoseReadingRepository.calculateAverageGlucose(allReadings);
    
    // Calculate A1C
    const calculatedA1C = this.glucoseReadingRepository.calculateA1C(averageGlucose);
    
    // Update month with calculated values
    return this.update(monthId, {
      averageGlucose,
      calculatedA1C
    });
  }

  /**
   * Get runs for a month
   * @param monthId Month ID
   * @returns Array of runs
   */
  async getRuns(monthId: string) {
    return this.runRepository.findByMonthId(monthId);
  }
}