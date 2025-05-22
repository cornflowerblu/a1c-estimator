import { prisma } from './prisma-client';

describe('Prisma Client', () => {
  // Mock the PrismaClient methods
  const mockFindMany = jest.fn();
  
  beforeEach(() => {
    // Reset mocks
    jest.resetAllMocks();
    
    // Mock the user.findMany method
    (prisma.user as any).findMany = mockFindMany;
  });
  
  it('should be defined', () => {
    expect(prisma).toBeDefined();
  });
  
  it('should have user model', () => {
    expect(prisma.user).toBeDefined();
  });
  
  it('should be able to query users', async () => {
    // Setup mock return value
    const mockUsers = [{ id: '1', name: 'Test User', email: 'test@example.com' }];
    mockFindMany.mockResolvedValue(mockUsers);
    
    // Call the method
    const users = await prisma.user.findMany();
    
    // Assertions
    expect(mockFindMany).toHaveBeenCalled();
    expect(users).toEqual(mockUsers);
  });
});