# Modern Web Application Development Framework with Nx

A comprehensive monorepo setup using Nx for building scalable web applications with React, Next.js, and TypeScript. This framework provides a modular architecture with shared libraries for UI components, services, data access, and utilities.

The project implements a modern development environment with full testing support through Jest and Cypress, build optimization via Vite, and continuous integration using GitHub Actions. It features a modular architecture that separates concerns into distinct libraries, making it ideal for large-scale applications that require maintainable and reusable code.

## Repository Structure
```
.
├── libs/                      # Shared libraries
│   ├── data-access/          # Data access layer for API interactions
│   ├── services/             # Business logic and service layer
│   ├── types/                # Shared TypeScript type definitions
│   ├── ui/                   # Reusable React UI components
│   └── utils/                # Common utility functions
├── web/                      # Main Next.js web application
│   ├── src/
│   │   └── app/             # Next.js app directory with API routes
│   └── specs/               # Web application tests
├── web-e2e/                 # End-to-end tests using Cypress
├── nx.json                  # Nx workspace configuration
└── package.json             # Project dependencies and scripts
```

## Usage Instructions
### Prerequisites
- Node.js 20.x or later
- npm 8.x or later
- Git

### Installation

```bash
# Clone the repository
git clone <repository-url>
cd <repository-name>

# Install dependencies
npm ci --legacy-peer-deps

# Build all libraries
npx nx run-many --target=build --all
```

### Quick Start
1. Start the development server:
```bash
npx nx serve web
```

2. Run tests:
```bash
# Unit tests
npx nx test

# E2E tests
npx nx e2e web-e2e
```

### More Detailed Examples

1. Creating a new library:
```bash
npx nx g @nx/react:library my-library
```

2. Running affected tests:
```bash
npx nx affected:test
```

3. Building specific projects:
```bash
npx nx build web
```

### Troubleshooting

1. Common Build Issues
- Issue: Module not found errors
  ```bash
  # Clear Nx cache
  npx nx reset
  # Rebuild all projects
  npx nx run-many --target=build --all
  ```

2. Development Server Issues
- Issue: Hot reload not working
  ```bash
  # Clear Next.js cache
  rm -rf web/.next
  # Restart development server
  npx nx serve web
  ```

## Data Flow
The application follows a layered architecture pattern with clear separation of concerns.

```ascii
[Client] -> [Next.js Routes] -> [Services Layer] -> [Data Access Layer] -> [External APIs]
     ^            |                    |                     |
     |            v                    v                     v
     +--------- [UI Components] <- [Business Logic] <- [Data Models]
```

Component interactions:
1. UI components consume services for business logic
2. Services use data-access layer for API interactions
3. Types library provides shared interfaces across layers
4. Utils library provides common functionality
5. Next.js API routes handle external requests

## Infrastructure

### Build System
- Nx workspace configuration manages project dependencies and build pipeline
- Vite handles UI library bundling and optimization
- Jest and Cypress handle testing infrastructure

### CI/CD
- GitHub Actions workflow for continuous integration
- Automated testing and building of affected projects
- Nx Cloud integration for distributed task execution

### Development Tools
- ESLint for code quality
- TypeScript for type safety
- Tailwind CSS for styling
- Next.js for server-side rendering and API routes