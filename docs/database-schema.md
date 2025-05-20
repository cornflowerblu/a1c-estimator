# A1C Estimator Database Schema

## Overview

This document outlines the database schema for the A1C Estimator application. The schema is designed to support tracking glucose readings, calculating A1C estimates, and managing user data.

## Entities

### User

Stores information about application users.

| Field | Type | Description |
|-------|------|-------------|
| id | UUID | Primary key |
| email | String | User's email address (unique) |
| name | String | User's full name (optional) |
| externalId | String | ID from authentication provider (Cognito) |
| createdAt | DateTime | When the user was created |
| updatedAt | DateTime | When the user was last updated |

### GlucoseReading

Stores individual glucose readings.

| Field | Type | Description |
|-------|------|-------------|
| id | UUID | Primary key |
| userId | UUID | Foreign key to User |
| value | Float | Glucose reading value in mg/dL |
| timestamp | DateTime | When the reading was taken |
| mealContext | Enum | Context of the reading (before_meal, after_meal, fasting, bedtime, etc.) |
| notes | String | Optional notes about the reading |
| runId | UUID | Foreign key to Run (optional) |
| createdAt | DateTime | When the record was created |
| updatedAt | DateTime | When the record was last updated |

### Run

Represents a collection of glucose readings that form a "RUN" cycle.

| Field | Type | Description |
|-------|------|-------------|
| id | UUID | Primary key |
| userId | UUID | Foreign key to User |
| name | String | Name of the run (e.g., "Morning Run", "Day 1") |
| startDate | DateTime | Start date of the run |
| endDate | DateTime | End date of the run |
| calculatedA1C | Float | Calculated A1C value for this run |
| averageGlucose | Float | Average glucose value for this run |
| monthId | UUID | Foreign key to Month (optional) |
| createdAt | DateTime | When the record was created |
| updatedAt | DateTime | When the record was last updated |

### Month

Represents a collection of runs that form a "MONTH" cycle.

| Field | Type | Description |
|-------|------|-------------|
| id | UUID | Primary key |
| userId | UUID | Foreign key to User |
| name | String | Name of the month (e.g., "January 2025") |
| startDate | DateTime | Start date of the month |
| endDate | DateTime | End date of the month |
| calculatedA1C | Float | Calculated A1C value for this month |
| averageGlucose | Float | Average glucose value for this month |
| createdAt | DateTime | When the record was created |
| updatedAt | DateTime | When the record was last updated |

### UserPreferences

Stores user preferences for the application.

| Field | Type | Description |
|-------|------|-------------|
| id | UUID | Primary key |
| userId | UUID | Foreign key to User (unique) |
| displayUnit | Enum | Preferred display unit (A1C or AG) |
| targetA1C | Float | User's target A1C value (optional) |
| reminderEnabled | Boolean | Whether reminders are enabled |
| reminderFrequency | Enum | Frequency of reminders (daily, weekly, etc.) |
| theme | Enum | UI theme preference (light, dark, system) |
| createdAt | DateTime | When the record was created |
| updatedAt | DateTime | When the record was last updated |

### UserMedicalProfile

Stores medical information for users.

| Field | Type | Description |
|-------|------|-------------|
| id | UUID | Primary key |
| userId | UUID | Foreign key to User (unique) |
| diabetesType | Enum | Type of diabetes (Type 1, Type 2, etc.) |
| birthYear | Integer | User's birth year (optional) |
| targetA1C | Float | User's target A1C value (optional) |
| preferredUnit | Enum | Preferred glucose unit (mg/dL or mmol/L) |
| createdAt | DateTime | When the record was created |
| updatedAt | DateTime | When the record was last updated |

## Relationships

- **User** 1:N **GlucoseReading** - A user can have many glucose readings
- **User** 1:N **Run** - A user can have many runs
- **User** 1:N **Month** - A user can have many months
- **User** 1:1 **UserPreferences** - A user has one set of preferences
- **User** 1:1 **UserMedicalProfile** - A user has one medical profile
- **Run** 1:N **GlucoseReading** - A run can contain many glucose readings
- **Month** 1:N **Run** - A month can contain many runs

## Indexes

- **GlucoseReading**: userId, timestamp, runId
- **Run**: userId, monthId, startDate, endDate
- **Month**: userId, startDate, endDate

## Enums

### MealContext
- BEFORE_BREAKFAST
- AFTER_BREAKFAST
- BEFORE_LUNCH
- AFTER_LUNCH
- BEFORE_DINNER
- AFTER_DINNER
- BEDTIME
- WAKEUP
- FASTING
- OTHER

### DisplayUnit
- A1C
- AG (Average Glucose)

### ReminderFrequency
- DAILY
- TWICE_DAILY
- WEEKLY
- CUSTOM

### Theme
- LIGHT
- DARK
- SYSTEM

### DiabetesType
- TYPE_1
- TYPE_2
- GESTATIONAL
- PREDIABETES
- OTHER

### GlucoseUnit
- MGDL
- MMOLL
