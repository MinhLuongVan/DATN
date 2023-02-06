import { IContact } from '../models/interface/contact';
import {Contact} from '../models/contactModel';
import { errorUnknown } from '../utils/myVariables';
import { okResponse,errResponse,dataNotFoundResponse } from '../notifications/message';

// get all contact
// save contact
export const createContactSevice = async function (data: IContact) {
    try {
        const itemAddContact = await new Contact({
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
