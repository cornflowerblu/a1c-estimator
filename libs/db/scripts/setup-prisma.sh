#!/bin/bash

# setup-prisma.sh
# This script sets up and configures Prisma for the A1C Estimator project
# It handles schema generation, client generation, and database migrations

# Exit on error
set -e

# Display help message
function show_help {
  echo "Prisma Setup Script for A1C Estimator"
  echo ""
  echo "Usage: ./setup-prisma.sh [OPTIONS]"
  echo ""
  echo "Options:"
  echo "  --init          Initialize Prisma in the project (first-time setup)"
  echo "  --generate      Generate Prisma client"
  echo "  --migrate       Run database migrations"
  echo "  --studio        Launch Prisma Studio"
  echo "  --reset         Reset the database (CAUTION: Deletes all data)"
  echo "  --help          Show this help message"
  echo ""
  echo "Examples:"
  echo "  ./setup-prisma.sh --init"
  echo "  ./setup-prisma.sh --generate --migrate"
}

# Check if no arguments provided
if [ $# -eq 0 ]; then
  show_help
  exit 1
fi

# Set variables
SCHEMA_PATH="./prisma/schema.prisma"
DB_URL=${DATABASE_URL:-"postgresql://postgres:postgres@localhost:5432/a1c_estimator"}

# Process arguments
INIT=false
GENERATE=false
MIGRATE=false
STUDIO=false
RESET=false

while [[ "$#" -gt 0 ]]; do
  case $1 in
    --init) INIT=true ;;
    --generate) GENERATE=true ;;
    --migrate) MIGRATE=true ;;
    --studio) STUDIO=true ;;
    --reset) RESET=true ;;
    --help) show_help; exit 0 ;;
    *) echo "Unknown parameter: $1"; show_help; exit 1 ;;
  esac
  shift
done

# Create directories if they don't exist
mkdir -p ./prisma

# Initialize Prisma
if [ "$INIT" = true ]; then
  echo "Initializing Prisma..."
  
  # Check if npx is installed
  if ! command -v npx &> /dev/null; then
    echo "Error: npx is not installed. Please install Node.js and npm."
    exit 1
  fi
  
  # Initialize Prisma with PostgreSQL
  npx prisma init --datasource-provider postgresql
  
  echo "Prisma initialized successfully!"
  echo "Please update the DATABASE_URL in .env file"
fi

# Generate Prisma client
if [ "$GENERATE" = true ]; then
  echo "Generating Prisma client..."
  
  # Check if schema exists
  if [ ! -f "$SCHEMA_PATH" ]; then
    echo "Error: Prisma schema not found at $SCHEMA_PATH"
    exit 1
  fi
  
  # Generate client
  npx prisma generate
  
  echo "Prisma client generated successfully!"
fi

# Run migrations
if [ "$MIGRATE" = true ]; then
  echo "Running database migrations..."
  
  # Check if schema exists
  if [ ! -f "$SCHEMA_PATH" ]; then
    echo "Error: Prisma schema not found at $SCHEMA_PATH"
    exit 1
  fi
  
  # Check if DATABASE_URL is set
  if [ -z "$DATABASE_URL" ]; then
    echo "Warning: DATABASE_URL environment variable not set."
    echo "Using default: $DB_URL"
    export DATABASE_URL="$DB_URL"
  fi
  
  # Run migration
  npx prisma migrate dev --name init
  
  echo "Database migrations completed successfully!"
fi

# Launch Prisma Studio
if [ "$STUDIO" = true ]; then
  echo "Launching Prisma Studio..."
  
  # Check if DATABASE_URL is set
  if [ -z "$DATABASE_URL" ]; then
    echo "Warning: DATABASE_URL environment variable not set."
    echo "Using default: $DB_URL"
    export DATABASE_URL="$DB_URL"
  fi
  
  # Start Prisma Studio
  npx prisma studio
fi

# Reset database
if [ "$RESET" = true ]; then
  echo "WARNING: This will delete all data in your database."
  read -p "Are you sure you want to continue? (y/N): " confirm
  
  if [[ "$confirm" == [yY] || "$confirm" == [yY][eE][sS] ]]; then
    echo "Resetting database..."
    
    # Check if DATABASE_URL is set
    if [ -z "$DATABASE_URL" ]; then
      echo "Warning: DATABASE_URL environment variable not set."
      echo "Using default: $DB_URL"
      export DATABASE_URL="$DB_URL"
    fi
    
    # Reset database
    npx prisma migrate reset --force
    
    echo "Database reset successfully!"
  else
    echo "Database reset cancelled."
  fi
fi

echo "Prisma setup script completed!"