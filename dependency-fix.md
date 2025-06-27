# Pipeline Build Fix

The pipeline is failing due to npm dependency issues. The following steps are needed to fix the build:

1. Run `npm install` to update the package-lock.json with the following packages:
   - @adobe/css-tools@4.4.3
   - @testing-library/jest-dom@6.6.3
   - chalk@3.0.0 and chalk@4.1.2
   - css.escape@1.5.1
   - dom-accessibility-api@0.6.3
   - min-indent@1.0.1
   - redent@3.0.0
   - strip-indent@3.0.0
   - ansi-styles@4.3.0
   - supports-color@7.2.0

2. Commit the updated package-lock.json file

3. Alternatively, you can:
   - Delete the existing package-lock.json
   - Delete the node_modules folder
   - Run `npm install` to generate a fresh package-lock.json
   - Commit the new package-lock.json

This will resolve the "npm ci" failure in the pipeline by ensuring the package.json and package-lock.json are in sync.