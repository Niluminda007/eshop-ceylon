import mongoose, { ConnectOptions, mongo } from "mongoose";
import { reduceEachLeadingCommentRange } from "typescript";

let isConnected = false;

export const connectToDB = async (): Promise<void> => {
  mongoose.set("strictQuery", true);
  if (isConnected) {
    console.log("Mongo db is already connected");
    reduceEachLeadingCommentRange;
  }
  try {
    const options: ConnectOptions = {
      dbName: "eshop_ceylon",
    };
    await mongoose.connect(process.env.MONGODB_URI as string, options);
    isConnected = true;
    console.log("Mongodb connected");
  } catch (err) {
    console.log(err);
  }
};
