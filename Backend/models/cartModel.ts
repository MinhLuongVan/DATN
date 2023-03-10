import mongoose from "mongoose";
import { Schema,Document } from 'mongoose';
interface CartType extends Document {
    userId: string;
    productId: string;
    product_Id: string;
    productImage: string;
    productName: string;
    productPrice: number;
    totalMoney: number;
    quantity: number;
}
 const CartSchema = new Schema<CartType>({
    userId:{
        type: String,
        ref: 'User'
    },
    productId: {
        type: String,
        ref: 'Product'
    },
    product_Id: {
        type: String,
        ref: 'Product'
    },
    productImage: {
        type: String,
        ref: 'Product'
    },
    productName: {
        type: String,
        ref: 'Product'
    },
    productPrice: {
        type: Number,
        ref: 'Product'
    },
    totalMoney:{
        type: Number,
    },
    quantity: {
        type: Number,
    }
 },
    { timestamps: true}
 );
 export const Cart = mongoose.model<CartType>("Cart",CartSchema);