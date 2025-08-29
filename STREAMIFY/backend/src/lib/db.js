import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    console.log("Attempting to connect to MongoDB...");
    console.log("MONGO_URI:", process.env.MONGO_URI ? "Set" : "Not set");
    const conn = await mongoose.connect(process.env.MONGO_URI, {
      serverSelectionTimeoutMS: 5000, // 5 second timeout
      socketTimeoutMS: 45000, // 45 second timeout
    });
    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.log("Error in connecting to MongoDB", error);
    console.log("Continuing without database connection for testing...");
    // Don't exit for now, let the server start
  }
};
