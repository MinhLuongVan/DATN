import mongoose from "mongoose";
import { Schema,Document } from 'mongoose';
interface TypeProductType extends Document {
    name: string;
    uuid: string;
}
 const TypeProductSchema = new Schema<TypeProductType>({
    name:{
        type: String,
    },
    uuid: {
        type: String,
    }
    
 },
    { timestamps: true}
 );
 export const TypeProduct = mongoose.model<TypeProductType>("TypeProduct",TypeProductSchema);