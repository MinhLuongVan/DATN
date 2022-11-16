import mongoose from 'mongoose';
import { Schema,Document } from 'mongoose';
 interface UserType extends Document {
    username: string;
    email: string;
    password: string;
    isAdmin: boolean;
    sdt: string;
    // passwordagain: string;
 }
  const UserSchema = new Schema<UserType>({
    username:{
        type : String,
    },
    email:{
        type: String,
        minLength: 6,
        unique: true,
        validate: {
            validator: function (v: any) {
                // Valid email belike hung@gmail.com
                return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(v);
            },
            message: "Please enter a valid email",
        }
    },
    password:{
        type : String,
        minlength:6
    },
    // passwordagain:{
    //     type : String,
    // },
    sdt:{
        type: String
    },
    isAdmin: {
        type: Boolean,
        default: false,
    }
  },
  { timestamps: true}
);
export const User = mongoose.model<UserType>("User",UserSchema);