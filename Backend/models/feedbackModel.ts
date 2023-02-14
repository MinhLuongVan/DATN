import mongoose from "mongoose";
import { Schema,Document } from 'mongoose';
interface FeedbackType extends Document {
    userId: string;
    productId: string;
    content: string;
    rating: number;
}
 const FeedbackSchema = new Schema<FeedbackType>({
    userId: {
        type: String,
        ref: "User"
    },
    productId:{
        type: String,
        ref: "Product"
    },
    content: {
        type: String,
    },
    rating: {
        type: Number,
    }
 },
    { timestamps: true}
 );
 export const Feedback = mongoose.model<FeedbackType>("Feedback",FeedbackSchema);
