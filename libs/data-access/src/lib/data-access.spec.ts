import { dataAccess } from './data-access';

describe('dataAccess', () => {
  it('should return a response with 200 status code', () => {
    const result = dataAccess();
    expect(result).toHaveProperty('data');
    expect(result).toHaveProperty('statusCode', 200);
  });
});
