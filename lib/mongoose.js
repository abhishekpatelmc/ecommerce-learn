import mongoose from "mongoose";

export async function initMongoose() {
  // If the connection is already established, return it
  if (mongoose.connection.readyState === 1) {
    return mongoose.connection;
  }
  return await mongoose.connect(process.env.MONGODB_URL);
}
