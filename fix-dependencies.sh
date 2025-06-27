#!/bin/bash

# Remove existing dependency files
rm -f package-lock.json
rm -rf node_modules/

# Install dependencies with exact versions
npm install --save-exact @adobe/css-tools@4.4.3 \
  @testing-library/jest-dom@6.6.3 \
  chalk@3.0.0 \
  chalk@4.1.2 \
  css.escape@1.5.1 \
  dom-accessibility-api@0.6.3 \
  min-indent@1.0.1 \
  redent@3.0.0 \
  strip-indent@3.0.0 \
  ansi-styles@4.3.0 \
  supports-color@7.2.0

# Install remaining dependencies
npm install

# Make the file executable
chmod +x fix-dependencies.sh