import mongoose from "mongoose";
import { errorUnknown } from "../utils/myVariables";
import {
  okResponse,
  errResponse,
  dataNotFoundResponse,
} from "../notifications/message";
import { Order } from "../models/orderModel";
import { IOrder } from "../models/interface/order";

//get all order
export const getAllOrderServices = async function () {
  try {
    const itemFind = await Order.find();
    if (itemFind) {
      return okResponse(itemFind);
    } else {
      return dataNotFoundResponse();
    }
  } catch (error: unknown) {
    let err: string;
    if (error instanceof Error) {
      err = error.message;
    } else {
      err = errorUnknown;
    }
    return errResponse(err);
  }
};

//get all OrderByid
export const getAllOrderByIdServices = async function (userId: any) {
  try {
    const itemFind = await Order.find({ userId: userId.userId });
    if (itemFind) {
      return okResponse(itemFind);
    } else {
      return dataNotFoundResponse();
    }
  } catch (error: unknown) {
    let err: string;
    if (error instanceof Error) {
      err = error.message;
    } else {
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
  } catch (error: unknown) {
    let err: string;
    if (error instanceof Error) {
      err = error.message;
    } else {
      err = errorUnknown;
    }
    return errResponse(err);
  }
};

// get id order
export const findOneOrderServices = async function (data: IOrder) {
  try {
    const itemFindId = await Order.findOne({
      _id: new mongoose.Types.ObjectId(data._id),
    });
    if (itemFindId) {
      return okResponse(itemFindId);
    } else {
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
};

// delete order
export const deleteOrderServices = async function (data: IOrder) {
  try {
    const itemDelete = await Order.findByIdAndDelete({
      _id: new mongoose.Types.ObjectId(data._id),
    });
    if (itemDelete) {
      return okResponse(itemDelete);
    } else {
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
};

// findBy page order
export const findByPageService = async function (data: any) {
  try {
    let condition = {} as any;
    if (data.name) {
      condition.name = { $regex: data.name, $options: "i" };
    }
    const perPage = 5;
    const page = data.page;
    const total = await Order.count();
    const totalPage = Math.ceil(total / perPage);

    const itemFind = await Order.find(condition)
      .sort({ createdAt: -1 })
      .skip(perPage * page - perPage)
      .limit(perPage);
    if (itemFind) {
      return okResponse({ data: itemFind, total: total, totalPage: totalPage });
    } else {
      return dataNotFoundResponse();
    }
  } catch (error: unknown) {
    let err: string;
    if (error instanceof Error) {
      err = error.message;
    } else {
      err = errorUnknown;
    }
    return errResponse(err);
  }
};

// search order
export const searchOrderService = async function (data: IOrder) {
  try {
    const itemFind = await Order.find({
      name: { $regex: data.name, $options: "$i" },
    }).sort({ createdAt: -1 });

    if (itemFind) {
      return okResponse({ data: itemFind });
    } else {
      return dataNotFoundResponse();
    }
  } catch (error: unknown) {
    let err: string;
    if (error instanceof Error) {
      err = error.message;
    } else {
      err = errorUnknown;
    }
    return errResponse(err);
  }
};
