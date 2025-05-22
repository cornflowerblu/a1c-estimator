#!/bin/bash

# Script to set up the Prisma environment for the A1C Estimator project

# Ensure we're in the project root
cd "$(dirname "$0")/../../../"

echo "Setting up Prisma environment..."

# Create the generated directory if it doesn't exist
mkdir -p libs/db/generated/client

# Generate the Prisma client
echo "Generating Prisma client..."
cd libs/db/prisma
npx prisma generate

# Check if the client was generated successfully
if [ $? -eq 0 ]; then
  echo "Prisma client generated successfully!"
else
  echo "Error generating Prisma client. Please check your Prisma configuration."
  exit 1
fi

echo "Prisma setup complete!"
echo "You can now import the Prisma client using: import { prisma } from '@a1c/db';"