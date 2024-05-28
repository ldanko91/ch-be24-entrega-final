import mongoose from "mongoose";
import { config } from "dotenv";
config()

export const mongoConnection = () => mongoose.connect("mongodb+srv://ldanko:Iz8ddD4Iu1kR7vEf@productmanager.0scft9y.mongodb.net/?retryWrites=true&w=majority")