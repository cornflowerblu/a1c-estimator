/**
 * GlucoseReading repository for localStorage data access
 */

import { GlucoseReading } from '@a1c/types';
import { BaseRepository } from './base-repository';
import { STORAGE_KEYS } from './local-storage';

export class GlucoseReadingRepository extends BaseRepository<GlucoseReading> {
  constructor() {
    super(STORAGE_KEYS.GLUCOSE_READINGS);
  }

  /**
   * Find readings by user ID
   * @param userId User ID
   * @param options Query options
   * @returns Array of readings
   */
  async findByUserId(userId: string, options: { 
    limit?: number; 
    skip?: number; 
    sort?: { [key: string]: 1 | -1 }; 
    startDate?: string; 
    endDate?: string;
  } = {}): Promise<GlucoseReading[]> {
    const filter: any = { userId };
    
    // Add date range filter if provided
    if (options.startDate || options.endDate) {
      filter.timestamp = {};
      
      if (options.startDate) {
        filter.timestamp.$gte = options.startDate;
      }
      
      if (options.endDate) {
        filter.timestamp.$lte = options.endDate;
      }
    }
    
    return this.findMany(filter, {
      limit: options.limit,
      skip: options.skip,
      sort: options.sort || { timestamp: -1 } // Default sort by timestamp descending
    });
  }

  /**
   * Find readings by run ID
   * @param runId Run ID
   * @returns Array of readings
   */
  async findByRunId(runId: string): Promise<GlucoseReading[]> {
    return this.findMany({ runId });
  }

  /**
   * Calculate average glucose value for a set of readings
   * @param readings Array of readings
   * @returns Average glucose value or null if no readings
   */
  calculateAverageGlucose(readings: GlucoseReading[]): number | null {
    if (readings.length === 0) {
      return null;
    }
    
    const sum = readings.reduce((total, reading) => total + reading.value, 0);
    return sum / readings.length;
  }

  /**
   * Calculate estimated A1C from average glucose
   * @param averageGlucose Average glucose value
   * @returns Estimated A1C value or null if no average
   */
  calculateA1C(averageGlucose: number | null): number | null {
    if (averageGlucose === null) {
      return null;
    }
    
    // A1C = (Average Glucose + 46.7) / 28.7
    return (averageGlucose + 46.7) / 28.7;
  }
}