import mongoose from "mongoose";
import { Schema,Document } from 'mongoose';
interface SettingType extends Document {
    name: string;
    keyword: string;
    logoUser: string;
    logoAdmin: string;
}
 const SettingSchema = new Schema<SettingType>({
    name: {
        type: String,
    },
    keyword: {
        type: String,
    },
    logoAdmin: {
        type: String,
    },
    logoUser: {
        type: String,   
    }
 },
    { timestamps: true}
 );
 export const Setting = mongoose.model<SettingType>("Setting",SettingSchema);