import aj from "../lib/arcjet.js";
import { isSpoofedBot } from "@arcjet/inspect";

export const arcjectProtection = async (req, res, next) => {
  try {
    const decision = await aj.protect(req, { requested: 1 });

    if (decision.isDenied()) {
      if (decision.reason.isRateLimit()) {
        return res
          .status(429)
          .json({ message: "Too many requests. Please try again later." });
      } else if (decision.reason.isBot()) {
        return res.status(403).json({ message: "Bot access denied" });
      } else {
        return res.status(403).json({ message: "Access Denied" });
      }
    }

    // check for spoofed bot
    if (decision.results.some(isSpoofedBot)) {
      return res
        .status(403)
        .json({ error: "Bot deteced", message: "Malicious bot detected" });
    }
    next();
  } catch (error) {
    console.error("Middleware Error", error);
    res.status(500).json({ message: "Internal server error" });
  }
};
