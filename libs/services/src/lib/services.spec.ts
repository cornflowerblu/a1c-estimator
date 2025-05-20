import { randomData } from './services';

describe('services', () => {
  it('should return data with 200 status code', async () => {
    const result = await randomData();
    expect(result).toHaveProperty('data');
    expect(result.data).toHaveProperty('id');
    expect(result.data).toHaveProperty('name');
    expect(result).toHaveProperty('statusCode', 200);
  });
});
