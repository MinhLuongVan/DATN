import { IContact } from '../models/interface/contact';
import {Request, Response} from 'express';
import * as response from "../notifications/message";
import { errorUnknown } from '../utils/myVariables';
import { createContactSevice, getAllContactService, findOneContactServices, deleteContactServices,findByPageService } from '../services/contactService';

// get all contact
export const getAllContact = async function (req: Request, res: Response) {
    try {
        const itemContact = await getAllContactService();
        return res.json(itemContact);
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
// save contact
export const addContact = async function (req: Request, res: Response) {
    try {
        const itemContact = req.body as IContact
        const itemAddContact = await createContactSevice(itemContact);
        return res.json(itemAddContact);
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

// Find a contact
export const findIdContact = async function (req:Request, res:Response) {
    try {
        const itemId = req.body as IContact;
        const itemFindId = await findOneContactServices(itemId);
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

// Delete news
export const deleteContact = async function (req: Request, res: Response) {
    try {
            const item = req.body as IContact;
            const itemDelete = await deleteContactServices(item);
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

// Findby page contact
export const findByPage = async function (req: Request, res: Response) {
    try {
        const item = req.body;
        const itemContact = await findByPageService(item);
        return res.json(itemContact);
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

