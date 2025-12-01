import "dotenv/config";

export function requiredEnv(key) {
  const value = process.env[key];
  if (!value) {
    throw new Error(`${key} is not configured`);
  }
  return value;
}

export function validateEnv() {
  // Validate all required environment variables at startup
  requiredEnv("MONGO_URI");
  requiredEnv("JWT_SECRET");
  requiredEnv("NODE_ENV");
  requiredEnv("ARCJET_KEY");
  requiredEnv("SUPABASE_URL");
  requiredEnv("SUPABASE_SERVICE_KEY");
  requiredEnv("RESEND_API_KEY");
  requiredEnv("EMAIL_FROM");
  requiredEnv("EMAIL_FROM_NAME");
  requiredEnv("CLIENT_URL");
}
