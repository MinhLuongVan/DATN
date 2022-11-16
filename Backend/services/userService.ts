import bcrypt from 'bcrypt';
import { User } from '../models/userModel';
import mongoose from 'mongoose';
import jwt from 'jsonwebtoken';
import {env,errorUnknown} from '../utils/myVariables';
import {IUser} from '../models/interface/user';
import { okResponse,errResponse,dataNotFoundResponse } from '../notifications/message';

// Register 

export const registerUserServices = async function (data: IUser) {
    try {
        const existedUser = await User.findOne({email: data.email});
        if(existedUser){
            return errResponse("This email already exists");
        }
        const salt = await bcrypt.genSalt(10);
        const hashed = await bcrypt.hash(data.password,salt);
        
        const itemRegister = await new User({
            username: data.username,
            email: data.email,
            password: hashed,
            // passwordagain: hashed,
            sdt: data.sdt,

        });

        await itemRegister.save();
        return okResponse(itemRegister);
    } catch (error: unknown) {
        let err: string;
        if(error instanceof Error) {
            err = error.message;
        }else {
            err = errorUnknown;
        }
        return errResponse(err);
    }
};

// Get All Users

export const findAllUsersServices = async function () {
    try {
        const itemFind = await User.find().sort({username: -1});
        if(itemFind){
            return okResponse(itemFind);
        } else {
            return dataNotFoundResponse();
        }
    } catch (e: unknown) {
        let err: string;
        if (e instanceof Error) {
            err = e.message;
        } else {
            err = errorUnknown;
        }
        return errResponse(err);
    }
}

// Get User

export const findOneUserServices = async function (verify: string) {
    try {
        const itemFind = await User.findOne({
            _id: new mongoose.Types.ObjectId(verify),
        });

        if (itemFind) {
            return okResponse(itemFind);
        } else {
            return dataNotFoundResponse();
        }
    } catch (e: unknown) {
        let err: string;
        if (e instanceof Error) {
            err = e.message;
        } else {
            err = errorUnknown;
        }
        return errResponse(err);
    }
};

// Delete User

export const deleteUserServices = async function ( data: IUser) {
    try {
        const itemDelete = await User.findOneAndDelete({
            _id: new mongoose.Types.ObjectId(data._id),
        });
        if(itemDelete){
            return okResponse(itemDelete);
        }else {
            return dataNotFoundResponse();
        }
    } catch (e: unknown) {
        let err: string;
        if (e instanceof Error) {
            err = e.message;
        } else {
            err = errorUnknown;
        }
        return errResponse(err);
    } 
}

// Update User

export const updateUserServices = async function ( data: IUser) {
    try {
        const itemUpdate = await User.findOne({
            _id: new mongoose.Types.ObjectId(data._id),
        });
        if(itemUpdate) {
            const salt = await bcrypt.genSalt(10);
            const hashed = await bcrypt.hash(data.password,salt);
            itemUpdate.username = data.username;
            itemUpdate.email = data.email;
            itemUpdate.password = hashed;
            // itemUpdate.passwordagain = hashed;
            itemUpdate.sdt = data.sdt
            await itemUpdate.save();
            return okResponse(itemUpdate);
        }else {
            return dataNotFoundResponse();
        }
    } catch (e: unknown) {
        let err: string;
        if (e instanceof Error) {
            err = e.message;
        } else {
            err = errorUnknown;
        }
        return errResponse(err);
    }
}

// Login

export const loginUserServices = async function (data: IUser) {
    try {
        const createAccessToken = env.JWT_ACCESS_KEY;
        const itemUser = await User.findOne({email: data.email});
        const userInfor = await User.findOne({email: data.email}).select("-password");
        
        if(itemUser){
            const checkPassword = itemUser && (await bcrypt.compare(data.password,itemUser.password));
            if(checkPassword) {
                const Token: string = jwt.sign(
                    {
                        id : itemUser._id,
                        isAdmin : itemUser.isAdmin
                    },
                    createAccessToken,
                    {expiresIn: "1d"}
                );
                // const refreshToken: string = jwt.sign(
                //     {
                //         id : itemUser._id,
                //         isAdmin : itemUser.isAdmin
                //     },
                //     createReshToken,
                //     {expiresIn: '30d'}
                // )
                return okResponse({Token,userInfor})
            } 
        } else {
            return dataNotFoundResponse();
        }
    } catch (error: unknown) {
        let err: string;
        if(error instanceof Error) {
            err = error.message;
        }else {
            err = errorUnknown;
        }
        return errResponse(err);
    }
}
