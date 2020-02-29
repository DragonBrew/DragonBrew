import mongoose from "mongoose";
import config from "./config";

const connectDB = async () => {
  try {
    await mongoose.connect(config.MONGO_URI, {
      useFindAndModify: true,
      useNewUrlParser: true,
      useUnifiedTopology: true
    });
    console.log("[MONGO] CONNECTED TO DATABASE");
  } catch (error) {
    console.log(`[MONGO ERROR] ${error}`);
  }
};

export default connectDB;
