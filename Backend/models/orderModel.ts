import mongoose from "mongoose";
import { Schema,Document } from 'mongoose';
interface OrderType extends Document {
    userId: string;
    uuid: string;
    name: string;
    sđt: string;
    city: string;
    district: string;
    details: string,
    note: string,
    status: string,
    payments: string,
    totalMoney: number;
}
 const OrderSchema = new Schema<OrderType>({
    userId:{
        type: String,
        ref: 'User'
    },
    uuid: {
        type: String,
    },
    name: {
        type: String,
    },
    sđt: {
        type: String,
    },
    city: {
        type: String,
    },
    district: {
        type: String,   
    },
    details: {
        type: String,   
    },
    note: {
        type: String,
    },
    status: {
        type: String,   
    },
    payments: {
        type: String,
    },
    totalMoney:{
        type: Number,
    }
 },
    { timestamps: true}
 );
 export const Order = mongoose.model<OrderType>("Order",OrderSchema);