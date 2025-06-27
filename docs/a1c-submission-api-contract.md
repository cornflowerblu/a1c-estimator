# A1C Submission API Contract

This document outlines the API contract for the A1C Calculation Submission endpoint.

## Endpoint

```
POST /api/a1c-calculations
```

## Request Body

```typescript
{
  firstName: string;       // Required: User's first name
  lastName: string;        // Required: User's last name
  email: string;           // Required: User's email address
  userId?: string;         // Optional: User ID if the user is already registered
  readings: Array<{        // Required: Array of A1C readings
    value: number;         // Required: A1C value in percentage
    date: string;          // Required: Date of reading in ISO format (YYYY-MM-DD)
    notes?: string;        // Optional: Additional notes about the reading
  }>;
}
```

### Example Request

```json
{
  "firstName": "John",
  "lastName": "Doe",
  "email": "john.doe@example.com",
  "readings": [
    {
      "value": 5.7,
      "date": "2023-01-15",
      "notes": "Fasting reading"
    },
    {
      "value": 6.1,
      "date": "2023-02-20",
      "notes": "After lunch"
    }
  ]
}
```

## Response

### Success Response (201 Created)

```typescript
{
  success: true;
  message: string;         // Success message
  data: {
    user: {
      id: string;          // User ID
      name: string;        // User's full name
      email: string;       // User's email
    };
    run: {
      id: string;          // Run ID
      name: string;        // Run name
      calculatedA1C: number; // Average A1C value
    };
    readingsCount: number; // Number of readings submitted
  };
}
```

### Example Success Response

```json
{
  "success": true,
  "message": "A1C calculation submitted successfully",
  "data": {
    "user": {
      "id": "user_123456",
      "name": "John Doe",
      "email": "john.doe@example.com"
    },
    "run": {
      "id": "run_789012",
      "name": "A1C Calculation - 2023-03-15",
      "calculatedA1C": 5.9
    },
    "readingsCount": 2
  }
}
```

### Error Responses

#### 400 Bad Request

```json
{
  "success": false,
  "message": "Missing required fields"
}
```

#### 404 Not Found

```json
{
  "success": false,
  "message": "User not found"
}
```

#### 500 Internal Server Error

```json
{
  "success": false,
  "message": "Internal server error"
}
```

## Authentication

This endpoint requires authentication if the user is submitting readings to their own account (using userId). If creating a new submission without linking to an existing account, authentication is not required.

## Rate Limiting

To prevent abuse, this API is rate limited to 10 requests per minute per IP address.

## Data Processing

1. If a userId is provided, the system will verify the user exists
2. If no userId is provided but the email matches an existing user, the readings will be linked to that user
3. If no matching user is found, a new user will be created
4. A1C readings are stored and linked to a "run" which represents a collection of readings
5. The average A1C value is calculated from all submitted readings