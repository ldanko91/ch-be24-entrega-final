import mongoose from "mongoose";
import { config } from "dotenv";
config()

export const mongoConnection = () => mongoose.connect(DB_URL)