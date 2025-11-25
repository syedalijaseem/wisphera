import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    const { MONGO_URI } = process.env;
    if (!MONGO_URI) {
      throw new Error("MONGO_URI is not set");
    }
    const conn = await mongoose.connect(MONGO_URI, {
      serverSelectionTimeoutMS: 10000,
    });
    console.log("MongoDB Connected:", conn.connection.host);
  } catch (error) {
    console.error("Error connecting to MongoDB", error);
    throw error;
    process.exit(1);
  }
};
