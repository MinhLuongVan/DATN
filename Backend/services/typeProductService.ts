import mongoose from 'mongoose';
import {errorUnknown} from '../utils/myVariables';
import { okResponse,errResponse,dataNotFoundResponse } from '../notifications/message';
import { TypeProduct } from '../models/typeProductModel';
import {ITypeProduct} from '../models/interface/typeProduct'
//get all product
export const getAllTypeProductService = async function() {
    try {
        const itemFind = await TypeProduct.find();
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


// Add type product
export const createTypeProductSevice = async function (data: ITypeProduct) {
    try {
        const itemAddTypeProduct = await new TypeProduct({
            uuid: data.uuid,
            name: data.name,
        });
        await itemAddTypeProduct.save();
        return okResponse(itemAddTypeProduct);   
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

// get id type product
export const findOneTypeProductServices = async function(data:ITypeProduct) {
    try {
        const itemFindIdTypeProduct = await TypeProduct.findOne({
            _id: new mongoose.Types.ObjectId(data._id)
        });
        if(itemFindIdTypeProduct) {
            return okResponse(itemFindIdTypeProduct);
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

// update type product
export const updateTypeProductSevice = async function (data: ITypeProduct) {
    try {
        const itemUpdateTypeProduct = await TypeProduct.findOne({
            _id: new mongoose.Types.ObjectId(data._id),
        });
        if(itemUpdateTypeProduct){
            itemUpdateTypeProduct.name = data.name,
            itemUpdateTypeProduct.uuid = data.uuid
            await itemUpdateTypeProduct.save();
            return okResponse(itemUpdateTypeProduct);  
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

// delete type product 
export const deleteTypeProductServices = async function(data: ITypeProduct) {
    try {
        const itemDeleteTypeProduct = await TypeProduct.findByIdAndDelete({
            _id: new mongoose.Types.ObjectId(data._id)
        });
        if(itemDeleteTypeProduct) {
            return okResponse(itemDeleteTypeProduct);
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