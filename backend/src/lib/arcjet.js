import arcjet, { shield, detectBot, tokenBucket } from "@arcjet/node";
import { requiredEnv } from "../utils/env.js";

const aj = arcjet({
  key: requiredEnv("ARCJET_KEY"),
  rules: [
    shield({ mode: "LIVE" }),
    detectBot({
      mode: "LIVE",
      allow: ["CATEGORY:SEARCH_ENGINE"],
    }),
    tokenBucket({
      mode: "LIVE",
      characteristics: ["ip.src"],
      refillRate: 5,
      interval: 60,
      capacity: 100,
    }),
  ],
});

export default aj;
