# Prisma Configuration Setup

This document outlines the changes made to simplify and centralize the Prisma configuration in the A1C Estimator project.

## Changes Made

### 1. Centralized Prisma Schema

The Prisma schema has been centralized to a single location:

```
/libs/db/prisma/schema.prisma
```

This is now the single source of truth for the database schema. All duplicate schema files have been removed to avoid confusion and inconsistency.

### 2. Consistent Prisma Client Generation

The Prisma client is now generated to a consistent location:

```
/libs/db/generated/client/
```

This makes it easier to import the client and ensures that all parts of the application use the same client.

### 3. Updated Project Configuration

The `project.json` file has been updated to use consistent paths for all Prisma commands:

- All commands now reference the central schema location
- The command names have been standardized for clarity

### 4. Standardized Prisma Client Usage

A singleton Prisma client is now exported from the db library:

```typescript
import { prisma } from '@a1c/db';
```

This ensures that all parts of the application use the same Prisma client instance, which is more efficient and prevents connection pool exhaustion.

### 5. Fixed Path Mappings

The `tsconfig.base.json` path mapping for `@a1c/db` now correctly points to an existing file:

```json
"@a1c/db": ["libs/db/index.ts"]
```

### 6. Deprecated Legacy Data Access

The `dataAccess()` function in `libs/data-access/src/lib/data-access.ts` has been deprecated in favor of directly importing the Prisma client from `@a1c/db`.

### 7. Added Documentation and Examples

- Added comprehensive documentation in `libs/db/README.md`
- Added usage examples in `libs/db/examples/`
- Added tests for the Prisma client

## How to Use the New Setup

### Importing the Prisma Client

```typescript
import { prisma } from '@a1c/db';

// Use it in your code
const users = await prisma.user.findMany();
```

### Running Prisma Commands

```bash
# Generate Prisma client
nx run db:generate-client

# Create and apply migrations
nx run db:migrate -- --name <migration-name>

# Reset database
nx run db:migrate-reset

# Open Prisma Studio
nx run db:prisma -- studio
```

## Benefits of the New Setup

1. **Simplicity**: Single source of truth for the schema and client
2. **Consistency**: All commands and imports use the same paths
3. **Efficiency**: Singleton Prisma client prevents connection pool exhaustion
4. **Maintainability**: Clear documentation and examples make it easier to work with the database
5. **Testability**: Added tests for the Prisma client

## Next Steps

1. Run database migrations to ensure the schema is up to date
2. Update any remaining code that imports Prisma directly to use the centralized client
3. Add more comprehensive tests for database operations
4. Consider adding a seeding script for development data