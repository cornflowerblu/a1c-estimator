# Prisma Setup Guide for A1C Estimator

This document outlines the changes made to fix and simplify the Prisma configuration in the A1C Estimator project.

## Changes Made

### 1. Centralized Prisma Schema

We moved the Prisma schema to a central location at `libs/db/prisma/schema.prisma` and removed the duplicate schema in `libs/db/schema/prisma/schema.prisma`. This simplifies maintenance and ensures consistency.

**Before:**
- Multiple schema files in different locations
- Inconsistent client generation paths
- Confusion about which schema to use

**After:**
- Single source of truth for database schema
- Clear location for all database-related files
- Simplified client generation

### 2. Fixed Import Paths

We updated the import paths in `tsconfig.base.json` to correctly point to the db library:

```json
"paths": {
  "@a1c/db": ["libs/db/src/index.ts"]
}
```

This ensures that imports like `import { prisma } from '@a1c/db'` work correctly throughout the application.

### 3. Simplified Prisma Client Generation

We updated the Prisma client configuration to generate the client in a standard location:

```prisma
generator client {
  provider = "prisma-client-js"
  output   = "../../../node_modules/.prisma/client"
}
```

This follows Prisma best practices and ensures compatibility with the NextAuth.js adapter.

### 4. Created Type Exports

We created a `types.ts` file that re-exports Prisma types, making them easily accessible throughout the application:

```typescript
export {
  MealContext,
  DisplayUnit,
  ReminderFrequency,
  Theme,
  DiabetesType,
  GlucoseUnit,
  Prisma,
} from '@prisma/client';

export type { Account, User, Session, GlucoseReading, Run, Month, UserPreferences, UserMedicalProfile } from '@prisma/client';
```

### 5. Added Example Files

We created example files to demonstrate how to use Prisma in the application:

- `examples/basic-usage.ts`: Comprehensive examples of all database operations
- `examples/minimal-example.ts`: Minimal working example for quick testing

### 6. Added Setup Script

We created a `scripts/setup-prisma.sh` script to simplify common Prisma operations:

- Initialize Prisma
- Generate Prisma client
- Run migrations
- Launch Prisma Studio
- Reset the database

### 7. Updated Documentation

We updated the `README.md` file with comprehensive documentation on:

- Setting up the database
- Using Prisma in the application
- Common troubleshooting steps
- Development workflows

## How to Use the New Setup

### Basic Usage

```typescript
import { prisma } from '@a1c/db';

// Example: Find a user
const user = await prisma.user.findUnique({
  where: { email: 'user@example.com' },
});
```

### Running Migrations

```bash
cd libs/db
npx prisma migrate dev
```

### Generating the Client

```bash
cd libs/db
npx prisma generate
```

### Using the Setup Script

```bash
cd libs/db
./scripts/setup-prisma.sh --generate --migrate
```

## Benefits of the New Setup

1. **Simplicity**: Single source of truth for database schema
2. **Maintainability**: Easier to update and maintain
3. **Type Safety**: Proper type exports for use throughout the application
4. **Documentation**: Clear examples and documentation
5. **Tooling**: Helper scripts for common operations

## Next Steps

1. Ensure all team members are using the new setup
2. Update any existing code that might be using the old paths
3. Consider adding more specific examples for complex queries
4. Add automated tests for database operations