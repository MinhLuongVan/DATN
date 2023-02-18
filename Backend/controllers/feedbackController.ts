import { errorUnknown } from "../utils/myVariables";
import {Request, Response} from 'express';
import * as response from "../notifications/message";
import { addFeedBackServices, deleteFeedBackServices, findOneFeedBackServices,getAllFeedBackByIdServices, getAllFeedBackServices, updateFeedBackSevices } from "../services/feedbackService";
import { IFeedback } from "../models/interface/feedback";

// get all feedback by id
export const getAllFeedBack = async function (req: Request, res: Response) {
    try {
        const itemFind = await getAllFeedBackServices();
        return res.json(itemFind);
    } catch (e: unknown) {
        let err: string;
        if (e instanceof Error) {
            err = e.message;
        } else {
            err = errorUnknown;
        }
        return response.error(err, res);
    }
}

//get all feedback
export const getAllFeedBackById = async function (req: Request, res: Response) {
    try {
        const productId = req.body;
        const itemFind = await getAllFeedBackByIdServices(productId);
        return res.json(itemFind);
    } catch (e: unknown) {
        let err: string;
        if (e instanceof Error) {
            err = e.message;
        } else {
            err = errorUnknown;
        }
        return response.error(err, res);
    }
}

// save feedback
export const saveFeedBack = async function (req: Request, res: Response) {
    try {  
            const item = req.body as IFeedback;
            const itemAdd = await addFeedBackServices(item);
            return res.json(itemAdd); 
   
    } catch (e: unknown) {
        let err: string;
        if (e instanceof Error) {
            err = e.message;
        } else {
            err = errorUnknown;
        }
        return response.error(err, res);
    }
}

//find feedback by id
export const findIdFeedBack = async function (req:Request, res:Response) {
    try {
        const itemId = req.body as IFeedback;
        const itemFindId = await findOneFeedBackServices(itemId);
        return res.json(itemFindId);
    } catch (e: unknown) {
        let err: string;
        if (e instanceof Error) {
            err = e.message;
        } else {
            err = errorUnknown;
        }
        return response.error(err, res);
    }
};

//update feedback
export const updateFeedBack = async function (req: Request, res: Response) {
    try {
            const itemEdit = req.body as IFeedback;
            const itemUpdate = await updateFeedBackSevices(itemEdit);
            return res.json(itemUpdate); 
        
    } catch (e: unknown) {
        let err: string;
        if (e instanceof Error) {
            err = e.message;
        } else {
            err = errorUnknown;
        }
        return response.error(err, res);
    }
};

//delete feedback
export const deleteFeedBack = async function (req: Request, res: Response) {
    try {  
            const item = req.body as IFeedback;
            const itemDelete = await deleteFeedBackServices(item);
            return res.json(itemDelete); 
   
    } catch (e: unknown) {
        let err: string;
        if (e instanceof Error) {
            err = e.message;
        } else {
            err = errorUnknown;
        }
        return response.error(err, res);
    }
}
