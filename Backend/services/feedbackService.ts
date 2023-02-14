import mongoose from 'mongoose';
import {errorUnknown} from '../utils/myVariables';
import { okResponse,errResponse,dataNotFoundResponse } from '../notifications/message';
import { Feedback } from '../models/feedbackModel';
import { IFeedback } from '../models/interface/feedback';

//get all FeedBack
export const getAllFeedBackServices = async function() {
    try {
        const itemFind = await Feedback.find();
        if(itemFind) {
            return okResponse(itemFind);
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
};


// Add FeedBack
export const addFeedBackServices = async function (data: IFeedback) {
    try {
        const itemAdd = await new Feedback({
            userId: data.userId,
            productId: data.productId,
            content: data.content,
            rating: data.rating,
        });
        await itemAdd.save();
        return okResponse(itemAdd);
    }catch (error: unknown) {
        let err: string;
        if(error instanceof Error) {
            err = error.message;
        }else {
            err = errorUnknown;
        }
        return errResponse(err);
    }
}

// get id cart
export const findOneFeedBackServices = async function(data:IFeedback) {
    try {
        const itemFindId = await Feedback.findOne({
            _id: new mongoose.Types.ObjectId(data._id)
        });
        if(itemFindId) {
            return okResponse(itemFindId);
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

// update FeedBack
export const updateFeedBackSevices = async function (data: IFeedback) {
    try {
        const itemUpdate = await Feedback.findOne({
            _id: new mongoose.Types.ObjectId(data._id),
        });
        if(itemUpdate) {     
            itemUpdate.content = data.content,       
            itemUpdate.rating = data.rating,          
            await itemUpdate.save();
            return okResponse(itemUpdate);  
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

// delete FeedBack 
export const deleteFeedBackServices = async function(data: IFeedback) {
    try {
        const itemDelete = await Feedback.findByIdAndDelete({
            _id: new mongoose.Types.ObjectId(data._id)
        });
        if(itemDelete) {
            return okResponse(itemDelete);
        }else {
            return dataNotFoundResponse();
        }
    }catch (e: unknown) {
        let err: string;
        if (e instanceof Error) {
            err = e.message;
        } else {
            err = errorUnknown;
        }
        return errResponse(err);
    }
}
