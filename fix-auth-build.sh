#!/bin/bash
set -e

# Go to libs/auth directory
cd libs/auth

# Install required dependencies 
npm install @auth/prisma-adapter@1.0.0
npm install next-auth@4.0.0
npm install @prisma/client

# Make script executable
chmod +x fix-auth-build.sh

echo "Auth dependencies installed successfully"