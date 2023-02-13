import mongoose from "mongoose";
import { Schema,Document } from 'mongoose';
interface NewsType extends Document {
    name: string;
    content: string;
    image: string;
}
 const NewsSchema = new Schema<NewsType>({
    name:{
        type: String,
    },
    content: {
        type: String,
    },
    image: {
        type: String,
    }
 },
    { timestamps: true}
 );
 export const News = mongoose.model<NewsType>("News",NewsSchema);
