import mongoose from "mongoose";
import { Schema,Document } from 'mongoose';
interface ProductType extends Document {
    name: string;
    uuid: string;
    amount: number;
    priceSale: number;
    price: number;
    discount: number;
    category: string;
    image: string;
}
 const ProductSchema = new Schema<ProductType>({
    name:{
        type: String,
    },
    uuid: {
        type: String,
    },
    amount: {
        type: Number,
        min: 0,
    },
    priceSale: {
        type: Number,
    },
    price: {
        type: Number,
    },
    discount: {
        type: Number,
        min: 0,
        max: 100,
    },
    category: {
        type: String,
    },
    image: {
        type: String,
    }
 },
    { timestamps: true}
 );
 export const Product = mongoose.model<ProductType>("Product",ProductSchema);
