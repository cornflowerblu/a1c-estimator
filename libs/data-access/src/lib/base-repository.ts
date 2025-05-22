/**
 * Base repository class for localStorage data access
 * Provides common CRUD operations for all entity types
 */

import { BaseEntity, QueryFilter, QueryOptions } from '@a1c/types';
import { generateId, getCurrentTimestamp, getStorageItem, setStorageItem } from './local-storage';

export abstract class BaseRepository<T extends BaseEntity> {
  protected storageKey: string;

  constructor(storageKey: string) {
    this.storageKey = storageKey;
  }

  /**
   * Create a new entity
   * @param data Entity data without id, createdAt, updatedAt
   * @returns Created entity with id, createdAt, updatedAt
   */
  async create(data: Omit<T, 'id' | 'createdAt' | 'updatedAt'>): Promise<T> {
    const entities = this.getAll();
    const timestamp = getCurrentTimestamp();
    
    const newEntity = {
      ...data,
      id: generateId(),
      createdAt: timestamp,
      updatedAt: timestamp,
    } as T;
    
    entities.push(newEntity);
    this.saveAll(entities);
    
    return newEntity;
  }

  /**
   * Find an entity by ID
   * @param id Entity ID
   * @returns Entity or null if not found
   */
  async findById(id: string): Promise<T | null> {
    const entities = this.getAll();
    return entities.find(entity => entity.id === id) || null;
  }

  /**
   * Find entities by filter
   * @param filter Query filter
   * @param options Query options (limit, skip, sort)
   * @returns Array of matching entities
   */
  async findMany(filter: QueryFilter<T> = {}, options: QueryOptions = {}): Promise<T[]> {
    let entities = this.getAll();
    
    // Apply filters
    entities = this.applyFilter(entities, filter);
    
    // Apply sorting
    if (options.sort) {
      entities = this.applySort(entities, options.sort);
    }
    
    // Apply pagination
    if (options.skip) {
      entities = entities.slice(options.skip);
    }
    
    if (options.limit) {
      entities = entities.slice(0, options.limit);
    }
    
    return entities;
  }

  /**
   * Find first entity matching filter
   * @param filter Query filter
   * @returns First matching entity or null
   */
  async findFirst(filter: QueryFilter<T> = {}): Promise<T | null> {
    const entities = this.applyFilter(this.getAll(), filter);
    return entities.length > 0 ? entities[0] : null;
  }

  /**
   * Update an entity
   * @param id Entity ID
   * @param data Updated data
   * @returns Updated entity or null if not found
   */
  async update(id: string, data: Partial<Omit<T, 'id' | 'createdAt' | 'updatedAt'>>): Promise<T | null> {
    const entities = this.getAll();
    const index = entities.findIndex(entity => entity.id === id);
    
    if (index === -1) {
      return null;
    }
    
    const updatedEntity = {
      ...entities[index],
      ...data,
      updatedAt: getCurrentTimestamp(),
    } as T;
    
    entities[index] = updatedEntity;
    this.saveAll(entities);
    
    return updatedEntity;
  }

  /**
   * Delete an entity
   * @param id Entity ID
   * @returns true if deleted, false if not found
   */
  async delete(id: string): Promise<boolean> {
    const entities = this.getAll();
    const initialLength = entities.length;
    
    const filteredEntities = entities.filter(entity => entity.id !== id);
    
    if (filteredEntities.length === initialLength) {
      return false;
    }
    
    this.saveAll(filteredEntities);
    return true;
  }

  /**
   * Count entities matching filter
   * @param filter Query filter
   * @returns Count of matching entities
   */
  async count(filter: QueryFilter<T> = {}): Promise<number> {
    return this.applyFilter(this.getAll(), filter).length;
  }

  /**
   * Get all entities from storage
   * @returns Array of entities
   */
  protected getAll(): T[] {
    return getStorageItem<T[]>(this.storageKey) || [];
  }

  /**
   * Save all entities to storage
   * @param entities Array of entities
   */
  protected saveAll(entities: T[]): void {
    setStorageItem(this.storageKey, entities);
  }

  /**
   * Apply filter to entities
   * @param entities Array of entities
   * @param filter Query filter
   * @returns Filtered array of entities
   */
  protected applyFilter(entities: T[], filter: QueryFilter<T>): T[] {
    if (Object.keys(filter).length === 0) {
      return entities;
    }
    
    return entities.filter(entity => {
      return Object.entries(filter).every(([key, value]) => {
        const entityKey = key as keyof T;
        const entityValue = entity[entityKey];
        
        // Handle complex filter operators
        if (value !== null && typeof value === 'object') {
          return this.applyOperators(entityValue, value);
        }
        
        // Simple equality check
        return entityValue === value;
      });
    });
  }

  /**
   * Apply filter operators
   * @param entityValue Entity field value
   * @param operators Filter operators
   * @returns true if matches, false otherwise
   */
  protected applyOperators(entityValue: any, operators: any): boolean {
    if (operators.$eq !== undefined) {
      if (entityValue !== operators.$eq) return false;
    }
    
    if (operators.$ne !== undefined) {
      if (entityValue === operators.$ne) return false;
    }
    
    if (operators.$gt !== undefined) {
      if (!(entityValue > operators.$gt)) return false;
    }
    
    if (operators.$gte !== undefined) {
      if (!(entityValue >= operators.$gte)) return false;
    }
    
    if (operators.$lt !== undefined) {
      if (!(entityValue < operators.$lt)) return false;
    }
    
    if (operators.$lte !== undefined) {
      if (!(entityValue <= operators.$lte)) return false;
    }
    
    if (operators.$in !== undefined) {
      if (!operators.$in.includes(entityValue)) return false;
    }
    
    if (operators.$nin !== undefined) {
      if (operators.$nin.includes(entityValue)) return false;
    }
    
    return true;
  }

  /**
   * Apply sorting to entities
   * @param entities Array of entities
   * @param sort Sort options
   * @returns Sorted array of entities
   */
  protected applySort(entities: T[], sort: { [key: string]: 1 | -1 }): T[] {
    const sortEntries = Object.entries(sort);
    
    if (sortEntries.length === 0) {
      return entities;
    }
    
    return [...entities].sort((a, b) => {
      for (const [key, direction] of sortEntries) {
        const aValue = a[key as keyof T];
        const bValue = b[key as keyof T];
        
        if (aValue < bValue) {
          return direction === 1 ? -1 : 1;
        }
        
        if (aValue > bValue) {
          return direction === 1 ? 1 : -1;
        }
      }
      
      return 0;
    });
  }
}