import { Timestamp } from "mongodb";
import mongoose from "mongoose";
import { v4 as uuidv4 } from 'uuid';

const ticketsCollection = 'ticket'

const ticketsSchema = new mongoose.Schema({

    products: {
        type: Array,
        default: [],
        required: true
    },
    code: {
        type: String,
        default: uuid(),
        required: true
    },
    amount: {
        type: Number,
        default: 0,
        required: true
    },
    purchaser: {
        type: String,
        default: uuidv4(),
        required: true
    },
    purchase_datetime: {
        type: String,
        default: Date.now(),
        required: true
    },
})

const ticketsModel = mongoose.model(ticketsCollection, ticketsSchema)

export default ticketsModel;