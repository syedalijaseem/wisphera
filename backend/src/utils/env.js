import "dotenv/config";

export function requiredEnv(key) {
  const value = process.env[key];
  if (!value) {
    throw new Error(`${key} is not configured`);
  }
  return value;
}
