# Pipeline Fix for Package Lock Inconsistencies

The build pipeline is failing due to inconsistencies between `package.json` and `package-lock.json`. The error logs show many missing dependencies in the lock file that are present in package.json, particularly related to AWS SDK and authentication packages.

## Required Changes

1. Delete the existing `package-lock.json` file
2. Run a fresh `npm install` to regenerate the lock file with all dependencies
3. Commit the updated `package-lock.json` file

## Steps to Fix

```bash
# From the project root:
rm package-lock.json
npm install

# Once complete, verify the new package-lock.json contains all dependencies
git add package-lock.json
git commit -m "chore: update package-lock.json with all dependencies"
git push
```

This will ensure all dependencies listed in package.json are properly tracked in the lock file, including:

- @aws-sdk/* packages
- @simplewebauthn/* packages
- aws-amplify
- next-auth
- And all their subdependencies

After this fix, the CI pipeline should run successfully as npm ci will be able to install all required dependencies from a consistent lock file.