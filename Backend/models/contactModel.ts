import mongoose from "mongoose";
import { Schema,Document } from 'mongoose';
interface ContactType extends Document {
    name: string;
    email: string;
    note: string;
   // owner: mongoose.Schema.Types.ObjectId;
}
 const ContactSchema = new Schema<ContactType>({
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
 export const Contact = mongoose.model<ContactType>("Contact",ContactSchema);
