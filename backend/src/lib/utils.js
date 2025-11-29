import jwt from "jsonwebtoken";
import { requiredEnv } from "../utils/env.js";

export const generateToken = (userId, res) => {
  const token = jwt.sign({ userId }, requiredEnv("JWT_SECRET"), {
    expiresIn: "7d",
  });

  res.cookie("jwt", token, {
    maxAge: 7 * 24 * 60 * 60 * 1000, // miliseconds
    httpOnly: true, // prevent XSS (cross-site scripting)
    sameSite: "strict", // prevent CSRF
    secure: requiredEnv("NODE_ENV") === "development" ? false : true,
  });

  return token;
};
