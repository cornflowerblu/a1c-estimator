# A1C Estimator Technical Architecture

## Overview

The A1C Estimator will be built as a modern web application with potential for mobile expansion, using the Nx workspace for modular development. This document outlines the technical architecture, including component structure, data flow, and technology choices.

## System Architecture

### High-Level Architecture

```
┌─────────────────────────────────────────────────────────────┐
│                                                             │
│                      Client Applications                    │
│                                                             │
│  ┌───────────────┐  ┌───────────────┐  ┌───────────────┐    │
│  │               │  │               │  │               │    │
│  │   Web App     │  │   Mobile App  │  │   PWA         │    │
│  │   (Next.js)   │  │ (React Native)│  │               │    │
│  │               │  │               │  │               │    │
│  └───────┬───────┘  └───────┬───────┘  └───────┬───────┘    │
│          │                  │                  │            │
└──────────┼──────────────────┼──────────────────┼────────────┘
           │                  │                  │
           ▼                  ▼                  ▼
┌─────────────────────────────────────────────────────────────┐
│                                                             │
│                    Shared Component Library                 │
│                                                             │
│  ┌───────────────┐  ┌───────────────┐  ┌───────────────┐    │
│  │               │  │               │  │               │    │
│  │    UI         │  │  Forms        │  │  Charts       │    │
│  │  Components   │  │               │  │               │    │
│  │               │  │               │  │               │    │
│  └───────────────┘  └───────────────┘  └───────────────┘    │
│                                                             │
└─────────────────────────────────────────────────────────────┘
           │                  │                  │
           ▼                  ▼                  ▼
┌─────────────────────────────────────────────────────────────┐
│                                                             │
│                     Core Business Logic                     │
│                                                             │
│  ┌───────────────┐  ┌───────────────┐  ┌───────────────┐    │
│  │               │  │               │  │               │    │
│  │  A1C          │  │  Data         │  │  User         │    │
│  │  Calculation  │  │  Management   │  │  Management   │    │
│  │               │  │               │  │               │    │
│  └───────────────┘  └───────────────┘  └───────────────┘    │
│                                                             │
└─────────────────────────────────────────────────────────────┘
           │                  │                  │
           ▼                  ▼                  ▼
┌─────────────────────────────────────────────────────────────┐
│                                                             │
│                        Data Layer                           │
│                                                             │
│  ┌───────────────┐  ┌───────────────┐  ┌───────────────┐    │
│  │               │  │               │  │               │    │
│  │  API          │  │  Database     │  │  Storage      │    │
│  │  Services     │  │  Access       │  │  Services     │    │
│  │               │  │               │  │               │    │
│  └───────────────┘  └───────────────┘  └───────────────┘    │
│                                                             │
└─────────────────────────────────────────────────────────────┘
           │                  │                  │
           ▼                  ▼                  ▼
┌─────────────────────────────────────────────────────────────┐
│                                                             │
│                      Backend Services                       │
│                                                             │
│  ┌───────────────┐  ┌───────────────┐  ┌───────────────┐    │
│  │               │  │               │  │               │    │
│  │  API          │  │  Auth         │  │  Storage      │    │
│  │  Server       │  │  Service      │  │               │    │
│  │               │  │               │  │               │    │
│  └───────────────┘  └───────────────┘  └───────────────┘    │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

## Technology Stack

### Frontend

- **Framework**: Next.js (via Nx)
- **Component Library**: React with TypeScript
- **Styling**: TailwindCSS with custom theme
- **State Management**: React Context API + React Query
- **Form Handling**: React Hook Form with Zod validation
- **Data Visualization**: Chart.js or D3.js
- **Testing**: Jest, React Testing Library, Cypress

### Backend

- **API Framework**: Next.js API routes
- **Authentication**: AWS Cognito
- **Database**: PostgreSQL with Prisma ORM
- **File Storage**: AWS S3 or similar cloud storage
- **Caching**: Redis (for performance optimization)

### DevOps

- **CI/CD**: GitHub Actions
- **Containerization**: Docker
- **Hosting**: Vercel (frontend), AWS or similar (backend)
- **Monitoring**: Sentry for error tracking

## Data Model

### Core Entities

#### User
```typescript
interface User {
  id: string;
  email: string;
  name?: string;
  externalId: string; // ID from Cognito
  preferences: UserPreferences;
  medicalProfile: UserMedicalProfile;
  createdAt: Date;
  updatedAt: Date;
}

interface UserPreferences {
  displayUnit: 'A1C' | 'AG';
  targetA1C?: number;
  reminderEnabled: boolean;
  reminderFrequency: 'DAILY' | 'TWICE_DAILY' | 'WEEKLY' | 'CUSTOM';
  theme: 'light' | 'dark' | 'system';
}

interface UserMedicalProfile {
  diabetesType?: 'TYPE_1' | 'TYPE_2' | 'GESTATIONAL' | 'PREDIABETES' | 'OTHER';
  birthYear?: number;
  targetA1C?: number;
  preferredUnit: 'MGDL' | 'MMOLL';
}
```

#### GlucoseReading
```typescript
interface GlucoseReading {
  id: string;
  userId: string;
  value: number; // in mg/dl
  timestamp: Date;
  mealContext: 'BEFORE_BREAKFAST' | 'AFTER_BREAKFAST' | 'BEFORE_LUNCH' | 'AFTER_LUNCH' | 
               'BEFORE_DINNER' | 'AFTER_DINNER' | 'BEDTIME' | 'WAKEUP' | 'FASTING' | 'OTHER';
  notes?: string;
  runId?: string;
  createdAt: Date;
  updatedAt: Date;
}
```

#### Run
```typescript
interface Run {
  id: string;
  userId: string;
  name: string;
  startDate: Date;
  endDate: Date;
  calculatedA1C: number | null;
  averageGlucose: number | null;
  monthId: string | null;
  createdAt: Date;
  updatedAt: Date;
}
```

#### Month
```typescript
interface Month {
  id: string;
  userId: string;
  name: string;
  startDate: Date;
  endDate: Date;
  calculatedA1C: number | null;
  averageGlucose: number | null;
  runIds: string[];
  createdAt: Date;
  updatedAt: Date;
}
```

## Component Structure

### Core Components

#### GlucoseForm
- Handles input of glucose readings
- Supports both simple and detailed modes
- Validates input data
- Submits to data store

#### A1CCalculator
- Performs A1C calculations based on glucose readings
- Supports both RUN and MONTH calculations
- Provides conversion between A1C and AG units

#### GlucoseChart
- Visualizes glucose readings over time
- Shows trends and patterns
- Highlights out-of-range values

#### RunManager
- Displays list of RUNs
- Allows creation, editing, and deletion of RUNs
- Shows summary statistics for each RUN

#### MonthManager
- Organizes RUNs into MONTHs
- Calculates aggregate A1C values
- Provides historical view of A1C trends

#### EducationalContent
- Displays information about A1C, diabetes management
- Provides usage instructions
- Shows references and resources

## API Endpoints

### Authentication
- `POST /auth/register` - Register new user
- `POST /auth/login` - Login user
- `POST /auth/logout` - Logout user
- `GET /auth/me` - Get current user

### Glucose Readings
- `GET /readings` - Get all readings for current user
- `POST /readings` - Create new reading
- `GET /readings/:id` - Get specific reading
- `PUT /readings/:id` - Update reading
- `DELETE /readings/:id` - Delete reading

### Runs
- `GET /runs` - Get all runs for current user
- `POST /runs` - Create new run
- `GET /runs/:id` - Get specific run with readings
- `PUT /runs/:id` - Update run
- `DELETE /runs/:id` - Delete run
- `POST /runs/:id/calculate` - Calculate A1C for run

### Months
- `GET /months` - Get all months for current user
- `POST /months` - Create new month
- `GET /months/:id` - Get specific month with runs
- `PUT /months/:id` - Update month
- `DELETE /months/:id` - Delete month
- `POST /months/:id/calculate` - Calculate A1C for month

## Security Considerations

1. **Authentication**: Implement secure authentication with JWT tokens
2. **Authorization**: Ensure users can only access their own data
3. **Data Encryption**: Encrypt sensitive health data at rest and in transit
4. **Input Validation**: Validate all user inputs to prevent injection attacks
5. **CORS**: Configure proper CORS policies
6. **Rate Limiting**: Implement rate limiting to prevent abuse
7. **Audit Logging**: Log all data access and modifications

## Performance Considerations

1. **Caching**: Implement caching for frequently accessed data
2. **Pagination**: Use pagination for large data sets
3. **Lazy Loading**: Implement lazy loading for components and data
4. **Code Splitting**: Split code into smaller chunks for faster loading
5. **Image Optimization**: Optimize images and assets
6. **Database Indexing**: Create proper indexes for database queries
7. **Server-Side Rendering**: Use SSR for initial page loads

## Accessibility Considerations

1. **WCAG Compliance**: Follow WCAG 2.1 AA guidelines
2. **Keyboard Navigation**: Ensure all features are accessible via keyboard
3. **Screen Reader Support**: Test with screen readers
4. **Color Contrast**: Ensure sufficient contrast for text and UI elements
5. **Focus Management**: Implement proper focus management
6. **Responsive Design**: Ensure accessibility across all device sizes
7. **Alternative Text**: Provide alt text for all images

## Implementation Approach

1. **Modular Development**: Use Nx workspace to create modular libraries
2. **Feature-First Organization**: Organize code by feature rather than type
3. **Test-Driven Development**: Write tests before implementing features
4. **Continuous Integration**: Set up CI/CD pipeline for automated testing and deployment
5. **Documentation**: Document code, APIs, and architecture
6. **Code Reviews**: Implement peer code reviews for all changes
7. **Iterative Development**: Build incrementally with regular feedback cycles

This architecture provides a solid foundation for building a modern, scalable, and maintainable A1C Estimator application that can grow with user needs and technological advancements.
