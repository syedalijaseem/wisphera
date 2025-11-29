import { Resend } from "resend";
import "dotenv/config";
import { requiredEnv } from "../utils/env.js";

export const resendClient = new Resend(requiredEnv("RESEND_API_KEY"));

export const sender = {
  email: requiredEnv("EMAIL_FROM"),
  name: requiredEnv("EMAIL_FROM_NAME"),
};
