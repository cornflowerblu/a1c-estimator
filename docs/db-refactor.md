# Database Refactoring Plan for A1C Estimator

## Overview

This document outlines our plan to refactor the database implementation in the A1C Estimator project. We're experiencing issues with the current Prisma setup that are causing build failures and integration problems. This plan will guide us through analyzing the original implementation, deciding on an approach, and creating an implementation plan.

## 1. Analysis of Original Implementation (Commit 6f9c913578e653a4257fa8d97ffbc57947c9f3cd)

### Findings:

- [x] Checked out the original commit to analyze the initial database structure
- [x] Reviewed type definitions created by the agents
- [x] Compared with our current models to identify similarities and differences

#### Database Structure in Original Implementation:
- **No database implementation**: The original commit (6f9c913) focused on authentication but did not include any database implementation beyond basic type definitions.
- **Type Definitions**: The original implementation included basic type definitions in `libs/types/src/lib/types.ts` for:
  - User (id, email, name, emailVerified, image)
  - Authentication-related types (AuthProvider, MagicLinkPayload, PasskeyCredential, etc.)
  - No glucose reading, run, or month-related types

#### Current Database Models:
- **Comprehensive Prisma Schema**: The current implementation has a full Prisma schema with models for:
  - User authentication (User, Account, Session, VerificationToken)
  - Medical data (UserMedicalProfile, GlucoseReading, Run, Month)
  - User preferences (UserPreferences)
  - Various enums (MealContext, DisplayUnit, ReminderFrequency, Theme, DiabetesType, GlucoseUnit)

#### Key Differences:
1. **Scope**: Original implementation had no actual database models, only TypeScript types for authentication
2. **Complexity**: Current implementation has a comprehensive relational database schema
3. **Focus**: Original focused only on auth, current includes the full domain model for the application

#### What Worked Well:
- The authentication types in the original implementation provided a good foundation
- The modular approach with separate libraries was established early

#### Limitations/Issues:
- No actual database implementation in the original commit
- No consideration for data relationships or persistence

## 2. Database Approach Decision

Based on the analysis, we need to decide on the most appropriate database approach.

### Options to Consider:
- [ ] Continue with Prisma but simplify the configuration
- [ ] Switch to a simpler ORM solution
- [ ] Use a direct database driver without an ORM
- [ ] Implement a temporary solution using localStorage for rapid development
- [ ] Consider a hybrid approach with simple storage for core features and more complex storage for advanced features

### Decision Criteria Analysis:

#### Development Speed and Simplicity:
- Prisma provides type safety and auto-generated clients, but configuration issues are slowing development
- A simpler solution like localStorage would be faster to implement initially but limit future capabilities
- A hybrid approach could provide immediate progress while setting up for future scalability

#### Type Safety and TypeScript Integration:
- Prisma offers excellent TypeScript integration with auto-generated types
- Direct database drivers would require manual type definitions
- localStorage would require manual type handling

#### Scalability:
- Prisma supports complex relationships and scales well with PostgreSQL
- Direct database access can be optimized but requires more manual work
- localStorage is not scalable beyond basic prototyping

#### Authentication Integration:
- The current Prisma setup integrates with NextAuth.js
- Any alternative would need to maintain this integration

#### Recommendation:
**Hybrid Approach with Simplified Prisma Configuration**:
1. Temporarily use localStorage for rapid development of core features
2. Fix Prisma configuration issues in a separate branch
3. Gradually migrate from localStorage to Prisma as configuration issues are resolved

## 3. Implementation Plan

### Plan Components:
- [ ] Define the database schema/model structure
- [ ] Outline the data access layer architecture
- [ ] Create a migration strategy from current implementation
- [ ] Establish testing approach for database functionality
- [ ] Set up authentication integration
- [ ] Define backup and data persistence strategy
- [ ] Document the implementation for team reference

### Implementation Phases:

#### Phase 1: Temporary localStorage Implementation (1-2 weeks)
1. Create TypeScript interfaces matching the Prisma models
2. Implement localStorage-based data access layer
3. Add basic CRUD operations for core entities
4. Implement user association with data

#### Phase 2: Fix Prisma Configuration (Parallel to Phase 1)
1. Create a clean branch for Prisma configuration
2. Simplify the Prisma setup:
   - Move schema to a central location
   - Fix import paths in tsconfig
   - Ensure proper generation of Prisma client
3. Create a minimal working example with basic models
4. Document the correct setup process

#### Phase 3: Data Migration and Integration (1-2 weeks)
1. Create migration utilities to move data from localStorage to database
2. Implement feature flags to switch between storage mechanisms
3. Gradually replace localStorage calls with Prisma calls
4. Add database-specific features (filtering, relations, etc.)

#### Phase 4: Advanced Features and Optimization (2-3 weeks)
1. Implement more complex queries and relationships
2. Add caching layer for performance
3. Implement backup and restore functionality
4. Add data validation and integrity checks

## Next Steps

1. ✅ Analyze the original implementation and current models
2. Create TypeScript interfaces for core entities (GlucoseReading, Run, Month)
3. Implement localStorage-based data layer for rapid development
4. Begin fixing Prisma configuration issues in a separate branch
5. Document the correct Prisma setup for the project

## References

- Original commit analyzed: 6f9c913578e653a4257fa8d97ffbc57947c9f3cd
- Current project plan: [Unified Project Plan](/docs/unified-project-plan.md)
- Prisma documentation: https://www.prisma.io/docs/
