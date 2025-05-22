import { BaseEntity } from '@a1c/types';
import { BaseRepository } from './base-repository';
import * as localStorage from './local-storage';

// Mock localStorage functions
jest.mock('./local-storage', () => {
  const originalModule = jest.requireActual('./local-storage');
  const mockStorage: Record<string, any> = {};
  
  return {
    ...originalModule,
    getStorageItem: jest.fn((key: string) => mockStorage[key] || null),
    setStorageItem: jest.fn((key: string, value: any) => {
      mockStorage[key] = value;
    }),
    removeStorageItem: jest.fn((key: string) => {
      delete mockStorage[key];
    }),
    generateId: jest.fn(() => 'test-id'),
    getCurrentTimestamp: jest.fn(() => '2023-01-01T00:00:00.000Z'),
  };
});

// Test entity type
interface TestEntity extends BaseEntity {
  name: string;
  value: number;
  tags?: string[];
}

// Test repository implementation
class TestRepository extends BaseRepository<TestEntity> {
  constructor() {
    super('test_entities');
  }
}

describe('BaseRepository', () => {
  let repository: TestRepository;
  
  beforeEach(() => {
    jest.clearAllMocks();
    repository = new TestRepository();
  });
  
  describe('create', () => {
    it('should create a new entity with generated ID and timestamps', async () => {
      const data = { name: 'Test Entity', value: 42 };
      const result = await repository.create(data);
      
      expect(result).toEqual({
        ...data,
        id: 'test-id',
        createdAt: '2023-01-01T00:00:00.000Z',
        updatedAt: '2023-01-01T00:00:00.000Z',
      });
      
      expect(localStorage.setStorageItem).toHaveBeenCalledWith('test_entities', [result]);
    });
  });
  
  describe('findById', () => {
    it('should find an entity by ID', async () => {
      const entity = {
        id: 'test-id',
        name: 'Test Entity',
        value: 42,
        createdAt: '2023-01-01T00:00:00.000Z',
        updatedAt: '2023-01-01T00:00:00.000Z',
      };
      
      (localStorage.getStorageItem as jest.Mock).mockReturnValueOnce([entity]);
      
      const result = await repository.findById('test-id');
      expect(result).toEqual(entity);
    });
    
    it('should return null if entity not found', async () => {
      (localStorage.getStorageItem as jest.Mock).mockReturnValueOnce([]);
      
      const result = await repository.findById('non-existent-id');
      expect(result).toBeNull();
    });
  });
  
  describe('findMany', () => {
    it('should find entities matching filter', async () => {
      const entities = [
        {
          id: 'test-id-1',
          name: 'Test Entity 1',
          value: 42,
          createdAt: '2023-01-01T00:00:00.000Z',
          updatedAt: '2023-01-01T00:00:00.000Z',
        },
        {
          id: 'test-id-2',
          name: 'Test Entity 2',
          value: 43,
          createdAt: '2023-01-01T00:00:00.000Z',
          updatedAt: '2023-01-01T00:00:00.000Z',
        },
      ];
      
      (localStorage.getStorageItem as jest.Mock).mockReturnValueOnce(entities);
      
      const result = await repository.findMany({ value: 42 });
      expect(result).toEqual([entities[0]]);
    });
    
    it('should apply pagination options', async () => {
      const entities = [
        { id: 'test-id-1', name: 'Test 1', value: 1, createdAt: '2023-01-01T00:00:00.000Z', updatedAt: '2023-01-01T00:00:00.000Z' },
        { id: 'test-id-2', name: 'Test 2', value: 2, createdAt: '2023-01-01T00:00:00.000Z', updatedAt: '2023-01-01T00:00:00.000Z' },
        { id: 'test-id-3', name: 'Test 3', value: 3, createdAt: '2023-01-01T00:00:00.000Z', updatedAt: '2023-01-01T00:00:00.000Z' },
      ];
      
      (localStorage.getStorageItem as jest.Mock).mockReturnValueOnce(entities);
      
      const result = await repository.findMany({}, { skip: 1, limit: 1 });
      expect(result).toEqual([entities[1]]);
    });
    
    it('should apply sorting options', async () => {
      const entities = [
        { id: 'test-id-1', name: 'Test 1', value: 3, createdAt: '2023-01-01T00:00:00.000Z', updatedAt: '2023-01-01T00:00:00.000Z' },
        { id: 'test-id-2', name: 'Test 2', value: 1, createdAt: '2023-01-01T00:00:00.000Z', updatedAt: '2023-01-01T00:00:00.000Z' },
        { id: 'test-id-3', name: 'Test 3', value: 2, createdAt: '2023-01-01T00:00:00.000Z', updatedAt: '2023-01-01T00:00:00.000Z' },
      ];
      
      (localStorage.getStorageItem as jest.Mock).mockReturnValueOnce(entities);
      
      const result = await repository.findMany({}, { sort: { value: 1 } });
      expect(result).toEqual([entities[1], entities[2], entities[0]]);
    });
  });
  
  describe('update', () => {
    it('should update an entity', async () => {
      const entity = {
        id: 'test-id',
        name: 'Test Entity',
        value: 42,
        createdAt: '2023-01-01T00:00:00.000Z',
        updatedAt: '2023-01-01T00:00:00.000Z',
      };
      
      (localStorage.getStorageItem as jest.Mock).mockReturnValueOnce([entity]);
      
      const result = await repository.update('test-id', { name: 'Updated Entity' });
      
      expect(result).toEqual({
        ...entity,
        name: 'Updated Entity',
        updatedAt: '2023-01-01T00:00:00.000Z',
      });
      
      expect(localStorage.setStorageItem).toHaveBeenCalledWith('test_entities', [result]);
    });
    
    it('should return null if entity not found', async () => {
      (localStorage.getStorageItem as jest.Mock).mockReturnValueOnce([]);
      
      const result = await repository.update('non-existent-id', { name: 'Updated Entity' });
      expect(result).toBeNull();
    });
  });
  
  describe('delete', () => {
    it('should delete an entity', async () => {
      const entity = {
        id: 'test-id',
        name: 'Test Entity',
        value: 42,
        createdAt: '2023-01-01T00:00:00.000Z',
        updatedAt: '2023-01-01T00:00:00.000Z',
      };
      
      (localStorage.getStorageItem as jest.Mock).mockReturnValueOnce([entity]);
      
      const result = await repository.delete('test-id');
      
      expect(result).toBe(true);
      expect(localStorage.setStorageItem).toHaveBeenCalledWith('test_entities', []);
    });
    
    it('should return false if entity not found', async () => {
      (localStorage.getStorageItem as jest.Mock).mockReturnValueOnce([]);
      
      const result = await repository.delete('non-existent-id');
      expect(result).toBe(false);
    });
  });
  
  describe('count', () => {
    it('should count entities matching filter', async () => {
      const entities = [
        { id: 'test-id-1', name: 'Test 1', value: 42, createdAt: '2023-01-01T00:00:00.000Z', updatedAt: '2023-01-01T00:00:00.000Z' },
        { id: 'test-id-2', name: 'Test 2', value: 42, createdAt: '2023-01-01T00:00:00.000Z', updatedAt: '2023-01-01T00:00:00.000Z' },
        { id: 'test-id-3', name: 'Test 3', value: 43, createdAt: '2023-01-01T00:00:00.000Z', updatedAt: '2023-01-01T00:00:00.000Z' },
      ];
      
      (localStorage.getStorageItem as jest.Mock).mockReturnValueOnce(entities);
      
      const result = await repository.count({ value: 42 });
      expect(result).toBe(2);
    });
  });
});