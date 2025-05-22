/**
 * Run repository for localStorage data access
 */

import { Run } from '@a1c/types';
import { BaseRepository } from './base-repository';
import { STORAGE_KEYS } from './local-storage';
import { GlucoseReadingRepository } from './glucose-reading-repository';

export class RunRepository extends BaseRepository<Run> {
  private glucoseReadingRepository: GlucoseReadingRepository;
  
  constructor() {
    super(STORAGE_KEYS.RUNS);
    this.glucoseReadingRepository = new GlucoseReadingRepository();
  }

  /**
   * Find runs by user ID
   * @param userId User ID
   * @param options Query options
   * @returns Array of runs
   */
  async findByUserId(userId: string, options: { 
    limit?: number; 
    skip?: number; 
    sort?: { [key: string]: 1 | -1 }; 
  } = {}): Promise<Run[]> {
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
   * Find runs by month ID
   * @param monthId Month ID
   * @returns Array of runs
   */
  async findByMonthId(monthId: string): Promise<Run[]> {
    return this.findMany({ monthId });
  }

  /**
   * Create a new run with readings
   * @param data Run data
   * @param readingIds Array of reading IDs to associate with the run
   * @returns Created run
   */
  async createWithReadings(data: Omit<Run, 'id' | 'createdAt' | 'updatedAt' | 'readings'>, readingIds: string[]): Promise<Run> {
    // Create the run
    const run = await this.create({
      ...data,
      readings: readingIds
    });
    
    // Update each reading with the run ID
    for (const readingId of readingIds) {
      await this.glucoseReadingRepository.update(readingId, { runId: run.id });
    }
    
    return run;
  }

  /**
   * Calculate A1C and average glucose for a run
   * @param runId Run ID
   * @returns Updated run with calculated values
   */
  async calculateStatistics(runId: string): Promise<Run | null> {
    const run = await this.findById(runId);
    
    if (!run) {
      return null;
    }
    
    // Get all readings for this run
    const readings = await this.glucoseReadingRepository.findByRunId(runId);
    
    // Calculate average glucose
    const averageGlucose = this.glucoseReadingRepository.calculateAverageGlucose(readings);
    
    // Calculate A1C
    const calculatedA1C = this.glucoseReadingRepository.calculateA1C(averageGlucose);
    
    // Update run with calculated values
    return this.update(runId, {
      averageGlucose,
      calculatedA1C
    });
  }

  /**
   * Get readings for a run
   * @param runId Run ID
   * @returns Array of readings
   */
  async getReadings(runId: string) {
    return this.glucoseReadingRepository.findByRunId(runId);
  }
}