# Pipeline Fix Required

The build is failing due to inconsistencies between package.json and package-lock.json. Here are the specific issues:

1. Package version mismatches:
   - @adobe/css-tools: lock shows 4.3.3, requires 4.4.3
   - dom-accessibility-api: lock shows 0.5.16, requires 0.6.3
   - chalk: multiple versions required, but missing from lock file
   
2. Missing packages in lock file:
   - @testing-library/jest-dom@6.6.3
   - css.escape@1.5.1
   - min-indent@1.0.1
   - redent@3.0.0
   - strip-indent@3.0.0
   - chalk@4.1.2 (multiple instances)
   - ansi-styles@4.3.0
   - supports-color@7.2.0

## Fix Required

To resolve this, you need to:

1. Delete the existing package-lock.json file
2. Run `npm install` to regenerate a clean package-lock.json with the correct versions
3. Commit the new package-lock.json file

Command sequence:
```bash
rm package-lock.json
npm install
git add package-lock.json
git commit -m "chore: regenerate package-lock.json with correct versions"
```

This will ensure that all package versions in package-lock.json match what's specified in package.json.