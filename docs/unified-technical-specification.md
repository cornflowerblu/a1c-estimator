# A1C Estimator - Technical Specification

## System Overview

The A1C Estimator is a modern web application built with Next.js and Nx workspace that helps users track blood glucose readings and estimate A1C levels. This document outlines the technical architecture, data models, and implementation details for the application.

## Architecture

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

### Technology Stack

#### Frontend
- **Framework**: Next.js (via Nx)
- **Component Library**: React with TypeScript
- **Styling**: TailwindCSS with custom theme
- **State Management**: React Context API + React Query
- **Form Handling**: React Hook Form with Zod validation
- **Data Visualization**: Recharts or D3.js
- **Testing**: Jest, React Testing Library, Cypress

#### Backend
- **API Framework**: Next.js API routes
- **Authentication**: AWS Cognito
- **Database**: PostgreSQL with Prisma ORM
- **File Storage**: AWS S3 or similar cloud storage
- **Caching**: Redis (for performance optimization)

#### DevOps
- **Infrastructure as Code**: AWS CDK
- **CI/CD**: GitHub Actions
- **Containerization**: Docker
- **Hosting**: AWS App Runner with Aurora Serverless
- **Monitoring**: Sentry for error tracking

## Data Models

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

## Database Schema

### Entities

#### User Table
| Field | Type | Description |
|-------|------|-------------|
| id | UUID | Primary key |
| email | String | User's email address (unique) |
| name | String | User's full name (optional) |
| externalId | String | ID from authentication provider (Cognito) |
| createdAt | DateTime | When the user was created |
| updatedAt | DateTime | When the user was last updated |

#### GlucoseReading Table
| Field | Type | Description |
|-------|------|-------------|
| id | UUID | Primary key |
| userId | UUID | Foreign key to User |
| value | Float | Glucose reading value in mg/dL |
| timestamp | DateTime | When the reading was taken |
| mealContext | Enum | Context of the reading |
| notes | String | Optional notes about the reading |
| runId | UUID | Foreign key to Run (optional) |
| createdAt | DateTime | When the record was created |
| updatedAt | DateTime | When the record was last updated |

#### Run Table
| Field | Type | Description |
|-------|------|-------------|
| id | UUID | Primary key |
| userId | UUID | Foreign key to User |
| name | String | Name of the run |
| startDate | DateTime | Start date of the run |
| endDate | DateTime | End date of the run |
| calculatedA1C | Float | Calculated A1C value for this run |
| averageGlucose | Float | Average glucose value for this run |
| monthId | UUID | Foreign key to Month (optional) |
| createdAt | DateTime | When the record was created |
| updatedAt | DateTime | When the record was last updated |

#### Month Table
| Field | Type | Description |
|-------|------|-------------|
| id | UUID | Primary key |
| userId | UUID | Foreign key to User |
| name | String | Name of the month |
| startDate | DateTime | Start date of the month |
| endDate | DateTime | End date of the month |
| calculatedA1C | Float | Calculated A1C value for this month |
| averageGlucose | Float | Average glucose value for this month |
| createdAt | DateTime | When the record was created |
| updatedAt | DateTime | When the record was last updated |

#### UserPreferences Table
| Field | Type | Description |
|-------|------|-------------|
| id | UUID | Primary key |
| userId | UUID | Foreign key to User (unique) |
| displayUnit | Enum | Preferred display unit (A1C or AG) |
| targetA1C | Float | User's target A1C value (optional) |
| reminderEnabled | Boolean | Whether reminders are enabled |
| reminderFrequency | Enum | Frequency of reminders |
| theme | Enum | UI theme preference |
| createdAt | DateTime | When the record was created |
| updatedAt | DateTime | When the record was last updated |

#### UserMedicalProfile Table
| Field | Type | Description |
|-------|------|-------------|
| id | UUID | Primary key |
| userId | UUID | Foreign key to User (unique) |
| diabetesType | Enum | Type of diabetes |
| birthYear | Integer | User's birth year (optional) |
| targetA1C | Float | User's target A1C value (optional) |
| preferredUnit | Enum | Preferred glucose unit |
| createdAt | DateTime | When the record was created |
| updatedAt | DateTime | When the record was last updated |

### Relationships
- **User** 1:N **GlucoseReading** - A user can have many glucose readings
- **User** 1:N **Run** - A user can have many runs
- **User** 1:N **Month** - A user can have many months
- **User** 1:1 **UserPreferences** - A user has one set of preferences
- **User** 1:1 **UserMedicalProfile** - A user has one medical profile
- **Run** 1:N **GlucoseReading** - A run can contain many glucose readings
- **Month** 1:N **Run** - A month can contain many runs

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

## Authentication Implementation

### AWS Cognito Setup
- Single User Pool with email as primary identifier
- Passwordless authentication with magic links
- Social login integration (Google, Apple, Facebook)
- Passkey (WebAuthn) support for secure authentication
- JWT tokens for authorization

### Authentication Flow
1. **Passwordless Authentication (Primary Method)**:
   - User enters email address
   - System sends a magic link via email
   - User clicks the link to authenticate
   - Session is established with JWT tokens

2. **Social Login**:
   - User selects preferred social provider
   - OAuth flow redirects to provider
   - User authenticates with the provider
   - Provider returns authentication token
   - System validates token and establishes session

3. **Passkey Authentication**:
   - User registers a passkey during account creation
   - For subsequent logins, user authenticates with biometrics or PIN
   - WebAuthn API handles the cryptographic verification
   - System validates the authentication and establishes session

4. **Token Management**:
   - Access token for API authorization
   - Refresh token for obtaining new access tokens
   - ID token for user information
   - Tokens stored in secure HTTP-only cookies

5. **User Session**:
   - Session maintained via tokens
   - Automatic refresh of tokens when expired
   - Secure logout process that invalidates tokens

## A1C Calculation Algorithm

The application uses a formula based on scientific research to convert average glucose readings to an estimated A1C percentage:

```
A1C = (Average Glucose + 46.7) / 28.7
```

The calculation process involves:
1. Validating input data (time order, value ranges)
2. Sorting and organizing readings
3. Interpolating between readings using random variations
4. Calculating weighted averages
5. Converting to A1C using the formula
6. Formatting and displaying results

## Infrastructure Deployment

### AWS CDK Stack

The application will be deployed using AWS CDK with the following resources:
- Aurora Serverless v2 PostgreSQL database
- App Runner service for the Next.js application
- VPC with proper networking configuration
- Security groups and IAM roles
- Secrets Manager for database credentials

### Deployment Process
1. Set up AWS CDK project
2. Configure infrastructure as code
3. Deploy database and networking components
4. Deploy application to App Runner
5. Configure CI/CD pipeline for automated deployments

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

## Testing Strategy

### Unit Testing
- Test individual components and functions
- Validate calculation algorithms
- Verify form validation

### Integration Testing
- Test API endpoints
- Verify data flow between components
- Test database operations

### End-to-End Testing
- Test complete user flows
- Verify authentication and authorization
- Test across different devices and browsers

### Performance Testing
- Optimize component rendering
- Test with large datasets
- Verify responsiveness on mobile devices

## Implementation Approach

1. **Modular Development**: Use Nx workspace to create modular libraries
2. **Feature-First Organization**: Organize code by feature rather than type
3. **Test-Driven Development**: Write tests before implementing features
4. **Continuous Integration**: Set up CI/CD pipeline for automated testing and deployment
5. **Documentation**: Document code, APIs, and architecture
6. **Code Reviews**: Implement peer code reviews for all changes
7. **Iterative Development**: Build incrementally with regular feedback cycles
