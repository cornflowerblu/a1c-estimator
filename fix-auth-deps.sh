#!/bin/bash

# Install required dependencies for auth module
cd libs/auth
npm install @auth/prisma-adapter@1.0.0
npm install next-auth@4.0.0
npm install @prisma/client