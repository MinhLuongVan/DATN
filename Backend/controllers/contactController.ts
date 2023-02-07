import { IContact } from "../models/interface/contact";
import {Request, Response} from 'express';
import * as response from "../notifications/message";
import { errorUnknown } from '../utils/myVariables';
import { createContactSevice,getAllContactService } from "../services/contactService";

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