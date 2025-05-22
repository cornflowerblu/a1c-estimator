# Database Library (@a1c/db)

This library provides database access for the A1C Estimator application using Prisma ORM.

## Setup

The database setup has been simplified to use a centralized Prisma schema and consistent configuration.

### Quick Setup

A setup script is provided to quickly set up the Prisma environment:

```bash
# Make the script executable
chmod +x libs/db/scripts/setup-prisma.sh

# Run the setup script
./libs/db/scripts/setup-prisma.sh
```

This script will:
1. Create the necessary directories
2. Generate the Prisma client
3. Verify that the setup was successful

### Directory Structure

```
libs/db/
├── generated/         # Generated Prisma client files
├── prisma/            # Prisma schema and migrations
│   ├── schema.prisma  # The centralized Prisma schema
│   └── migrations/    # Database migrations
├── src/               # Source code
│   ├── lib/           # Library code
│   │   └── prisma-client.ts  # Prisma client singleton
│   └── index.ts       # Main exports
├── examples/          # Usage examples
└── index.ts           # Re-export from src/
```

### Prisma Schema

The Prisma schema is located at `libs/db/prisma/schema.prisma`. This is the single source of truth for your database schema.

### Prisma Client

The Prisma client is generated to `libs/db/generated/client/` and exported as a singleton from `libs/db/src/lib/prisma-client.ts`.

## Usage

### Importing the Prisma Client

```typescript
// Import the Prisma client singleton
import { prisma } from '@a1c/db';

// Use it in your code
const users = await prisma.user.findMany();
```

### Common Operations

See the examples directory for common usage patterns:

- Basic CRUD operations
- Transactions
- Relations

## Commands

The following commands are available for working with the database:

### Generate Prisma Client

```bash
nx run db:generate-client
```

This command generates the Prisma client based on your schema.

### Run Migrations

```bash
nx run db:migrate -- --name <migration-name>
```

This command creates a new migration and applies it to your database.

### Reset Database

```bash
nx run db:migrate-reset
```

This command resets your database and applies all migrations from scratch.

### Seed Database

```bash
nx run db:seed
```

This command seeds your database with initial data.

### Prisma Studio

```bash
nx run db:prisma -- studio
```

This command opens Prisma Studio, a visual editor for your database.

## Environment Variables

The following environment variables are required:

- `DATABASE_URL`: The connection string for your PostgreSQL database

Example:
```
DATABASE_URL="postgresql://username:password@localhost:5432/a1c?schema=public"
```

## Troubleshooting

### Client Generation Issues

If you encounter issues with the Prisma client generation:

1. Delete the generated client directory: `rm -rf libs/db/generated/client`
2. Regenerate the client: `nx run db:generate-client`

### Database Connection Issues

If you encounter database connection issues:

1. Verify your DATABASE_URL environment variable
2. Ensure your database server is running
3. Check network connectivity to the database server

## Best Practices

1. Always use the exported prisma singleton from `@a1c/db` rather than creating new instances
2. Use transactions for operations that require multiple database changes
3. Add new models to the centralized schema.prisma file
4. Run migrations in development to keep your local database in sync
5. Document complex database queries in comments