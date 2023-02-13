import { INews } from '../models/interface/news';
import {Request, Response} from 'express';
import * as response from "../notifications/message";
import { errorUnknown } from '../utils/myVariables';
import { addNewServices, deleteNewServices, findOneNewServices, getAllNewsServices, updateNewSevices } from '../services/newsService';


//Get All news
export const getAllNews = async function (req: Request, res: Response) {
    try {
        const itemNews = await getAllNewsServices();
        return res.json(itemNews);
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

// Create news 
export const saveNews = async function (req: Request, res: Response) {
    try {
        const itemNews = req.body as INews
        const itemAddNews = await addNewServices(itemNews);
        return res.json(itemAddNews);
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

// Find a news

export const findIdNews = async function (req:Request, res:Response) {
    try {
        const itemId = req.body as INews;
        const itemFindId = await findOneNewServices(itemId);
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

// Update news

export const updateNews = async function (req: Request, res: Response) {
    try {
            const itemEdit = req.body as INews;
            const itemUpdate = await updateNewSevices( itemEdit);
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

// Delete news

export const deleteNews = async function (req: Request, res: Response) {
    try {
            const item = req.body as INews;
            const itemDelete = await deleteNewServices(item);
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

