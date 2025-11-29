import { sendWelcomeEmail } from "../emails/emailHandlers.js";
import { generateToken } from "../lib/utils.js";
import User from "../models/User.js";
import bcrypt from "bcryptjs";
import { requiredEnv } from "../utils/env.js";

export const signup = async (req, res) => {
  const { fullName, email, password } = req.body;

  try {
    if (!fullName || !email || !password) {
      return res.status(400).json({ message: "All fields are required" });
    }
    if (password.length < 6) {
      return res
        .status(400)
        .json({ message: "Password must be at least 8 characters" });
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({ message: "Invalid email" });
    }

    const user = await User.findOne({ email });
    if (user) {
      return res.status(400).json({ message: "Email already exists" });
    } else {
      const salt = await bcrypt.genSalt(10);
      const hashedPassword = await bcrypt.hash(password, salt);

      const newUser = new User({
        fullName,
        email,
        password: hashedPassword,
      });

      if (newUser) {
        await newUser.save();
        generateToken(newUser._id, res);

        res.status(201).json({
          _id: newUser._id,
          fullName: newUser.fullName,
          email: newUser.email,
          profilePic: newUser.profilePic,
        });

        try {
          await sendWelcomeEmail(
            newUser.email,
            newUser.fullName,
            requiredEnv("CLIENT_URL")
          );
        } catch (error) {
          console.error("Failed to send welcome email: ", error);
        }
      } else {
        res.status(400).json({ message: "Invalid user data" });
      }
    }
  } catch (error) {
    console.error("Error in signup controller", error);
    if (
      error?.code === 11000 &&
      (error.keyPattern?.email || error.keyValue?.email)
    ) {
      return res.status(409).json({ message: "Email already exists" });
    }
    res.status(500).json({ message: "Internal server error" });
  }
};
