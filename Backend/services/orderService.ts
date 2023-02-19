import mongoose from 'mongoose';
import {errorUnknown} from '../utils/myVariables';
import { okResponse,errResponse,dataNotFoundResponse } from '../notifications/message';
import { Order } from '../models/orderModel';
import { IOrder } from '../models/interface/order';


//get all order
export const getAllOrderServices = async function() {
    try {
        const itemFind = await Order.find();
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


// Add order
export const addOrderServices = async function (data: IOrder) {
    try {
        const itemAddOrder = await new Order({
            userId: data.userId,
            uuid: data.uuid,
            name: data.name,
            sđt: data.sđt,
            city: data.city,
            district: data.district,
            details: data.details,
            note: data.note,
            status: data.status,
            payments: data.payments,
            totalMoney: data.totalMoney,
        });
        await itemAddOrder.save();
        return okResponse(itemAddOrder);
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

// get id order
export const findOneOrderServices = async function(data:IOrder) {
    try {
        const itemFindId = await Order.findOne({
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

// delete order
export const deleteOrderServices = async function(data: IOrder) {
    try {
        const itemDelete = await Order.findByIdAndDelete({
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
