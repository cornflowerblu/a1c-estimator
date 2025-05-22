# A1C Estimator Database Library

This library provides database access for the A1C Estimator application using Prisma ORM.

## Overview

The database library centralizes all database operations and provides a type-safe interface for interacting with the PostgreSQL database. It uses Prisma ORM for database access and schema management.

## Setup

### Prerequisites

- Node.js 16+
- PostgreSQL database
- Environment variables configured (see below)

### Environment Variables

Create a `.env` file in the root of the project with the following variables:

```
DATABASE_URL="postgresql://username:password@localhost:5432/a1c_estimator"
```

Replace `username`, `password`, and database name as appropriate for your environment.

### Installation

1. Install dependencies:
   ```
   npm install
   ```

2. Generate Prisma client:
   ```
   cd libs/db
   npx prisma generate
   ```

3. Run migrations (if needed):
   ```
   npx prisma migrate dev
   ```

## Usage

### Basic Usage

Import the Prisma client from the library:

```typescript
import { prisma } from '@a1c/db';

// Example: Find a user
const user = await prisma.user.findUnique({
  where: { email: 'user@example.com' },
});
```

### Examples

See the `examples` directory for more detailed usage examples:

- `basic-usage.ts`: Demonstrates common database operations
- Additional examples for specific use cases

## Schema

The Prisma schema is located at `libs/db/prisma/schema.prisma`. It defines the following models:

- User: Application user
- Account: Authentication accounts (for NextAuth.js)
- Session: User sessions
- UserMedicalProfile: Medical information for users
- GlucoseReading: Blood glucose readings
- Run: Collection of readings over a period
- Month: Monthly aggregation of runs
- UserPreferences: User application preferences

## Scripts

The `scripts` directory contains helpful utilities:

- `setup-prisma.sh`: Script to initialize, generate, and manage Prisma

Usage:
```
cd libs/db
./scripts/setup-prisma.sh --help
```

## Development

### Adding a New Model

1. Update the schema in `prisma/schema.prisma`
2. Run `npx prisma generate` to update the client
3. Run `npx prisma migrate dev --name add_new_model` to create a migration

### Running Prisma Studio

To explore and edit your data visually:

```
npx prisma studio
```

## Troubleshooting

### Common Issues

1. **Client not generated**: Run `npx prisma generate` in the `libs/db` directory
2. **Database connection issues**: Check your DATABASE_URL in the .env file
3. **Type errors**: Make sure you've generated the latest Prisma client after schema changes

## Resources

- [Prisma Documentation](https://www.prisma.io/docs/)
- [NextAuth.js with Prisma](https://next-auth.js.org/adapters/prisma)
