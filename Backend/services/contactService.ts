import { IContact } from '../models/interface/contact';
import mongoose from 'mongoose';
import { Contact } from '../models/contactModel';
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

// get id contact
export const findOneContactServices = async function(data:IContact) {
    try {
        const itemFindIdContact = await Contact.findOne({
            _id: new mongoose.Types.ObjectId(data._id)
        });
        if(itemFindIdContact) {
            return okResponse(itemFindIdContact);
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

// delete contact
export const deleteContactServices = async function(data: IContact) {
    try {
        const itemDeleteContact = await Contact.findByIdAndDelete({
            _id: new mongoose.Types.ObjectId(data._id)
        });
        if(itemDeleteContact) {
            return okResponse(itemDeleteContact);
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


