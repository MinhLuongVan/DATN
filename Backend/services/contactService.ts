import { IContact } from '../models/interface/contact';
import {Contact} from '../models/contactModel';
import { errorUnknown } from '../utils/myVariables';
import { okResponse,errResponse,dataNotFoundResponse } from '../notifications/message';

// get all contact
export const getAllContactService = async function () {
    try {
        const itemFind = await Contact.find();
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
}

// save contact
export const createContactSevice = async function (data: IContact) {
    try {
        const itemAddContact = await new Contact({
            userId: data.userId,
            name: data.name,
            email: data.email,
            note: data.note,
        });
        await itemAddContact.save();
        return okResponse(itemAddContact);   
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
