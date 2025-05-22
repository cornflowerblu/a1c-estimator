#!/bin/bash

# Remove existing package lock and node_modules
rm -f package-lock.json
rm -rf node_modules

# Install dependencies with legacy peer deps flag
npm install --legacy-peer-deps

# Install specific versions of packages with mismatches
npm install --save-exact \
  @adobe/css-tools@4.4.3 \
  @testing-library/jest-dom@6.6.3 \
  chalk@3.0.0 \
  css.escape@1.5.1 \
  dom-accessibility-api@0.6.3 \
  min-indent@1.0.1 \
  redent@3.0.0 \
  strip-indent@3.0.0

# Make the new package-lock.json file
npm install --package-lock-only

echo "Dependencies have been updated and package-lock.json has been regenerated"