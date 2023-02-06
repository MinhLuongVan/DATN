import mongoose from "mongoose";
import { Schema,Document } from 'mongoose';
interface FeedbackType extends Document {
    name: string;
    email: string;
    note: string;
}
 const FeedbackSchema = new Schema<FeedbackType>({
    name:{
        type: String,
    },
    email: {
        type: String,
    },
    note: {
        type: String,
    }
 },
    { timestamps: true}
 );
 export const Feedback = mongoose.model<FeedbackType>("Feedback",FeedbackSchema);
