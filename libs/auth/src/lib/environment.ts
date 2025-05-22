/**
 * Environment variables type declarations and access helper
 */
declare global {
  namespace NodeJS {
    interface ProcessEnv {
      USE_MOCK_COGNITO?: string;
      COGNITO_REGION?: string;
      COGNITO_USER_POOL_ID?: string;
      COGNITO_CLIENT_ID?: string;
      NODE_ENV?: 'development' | 'production' | 'test';
    }
  }
}

/**
 * Helper function to safely access process.env values
 * @param key Environment variable key
 * @param defaultValue Default value if not set
 * @returns Environment variable value or default
 */
export const getEnvVar = (key: keyof NodeJS.ProcessEnv, defaultValue: string = ''): string => {
  return process.env[key] || defaultValue;
};

/**
 * Helper function to safely set process.env values in tests
 * @param key Environment variable key
 * @param value Value to set
 */
export const setEnvVar = (key: keyof NodeJS.ProcessEnv, value: string): void => {
  if (process.env.NODE_ENV === 'test') {
    process.env[key] = value;
  }
};

export default {
  getEnvVar,
  setEnvVar,
};