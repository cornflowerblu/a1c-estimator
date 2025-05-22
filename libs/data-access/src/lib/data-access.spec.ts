import { dataAccess } from './data-access';

describe('dataAccess', () => {
  it('should return a data access instance', () => {
    const result = dataAccess();
    
    // Check that the instance has all the expected repositories
    expect(result).toHaveProperty('users');
    expect(result).toHaveProperty('glucoseReadings');
    expect(result).toHaveProperty('runs');
    expect(result).toHaveProperty('months');
    expect(result).toHaveProperty('userPreferences');
    expect(result).toHaveProperty('userMedicalProfiles');
  });
});
