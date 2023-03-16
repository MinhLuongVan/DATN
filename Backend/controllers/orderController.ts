import { errorUnknown } from "../utils/myVariables";
import { Request, Response } from "express";
import * as response from "../notifications/message";
import { IOrder } from "../models/interface/order";
import { getAllOrderByIdServices, updateOrderSevices } from '../services/orderService';
import {
  addOrderServices,
  deleteOrderServices,
  findOneOrderServices,
  getAllOrderServices,
  findByPageService,
  searchOrderService,
} from "../services/orderService";

//get all order
export const getAllOrder = async function (req: Request, res: Response) {
  try {
    const itemFind = await getAllOrderServices();
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
};

//get all feedback by id
export const getAllOrderById = async function (req: Request, res: Response) {
  try {
    const userId = req.body;
    const itemFind = await getAllOrderByIdServices(userId);
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
};

// save order
export const saveOrder = async function (req: Request, res: Response) {
  try {
    const item = req.body as IOrder;
    const itemAdd = await addOrderServices(item);
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
};

//find order by id
export const findIdOrder = async function (req: Request, res: Response) {
  try {
    const itemId = req.body as IOrder;
    const itemFindId = await findOneOrderServices(itemId);
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

// update order
export const updateOrder = async function (req: Request, res: Response) {
  try {
    const itemEdit = req.body as IOrder;
    const itemUpdate = await updateOrderSevices(itemEdit);
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

//delete order
export const deleteOrder = async function (req: Request, res: Response) {
  try {
    const item = req.body as IOrder;
    const itemDelete = await deleteOrderServices(item);
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
};

// Findby page order
export const findByPage = async function (req: Request, res: Response) {
  try {
    const item = req.body;
    const itemOrder = await findByPageService(item);
    return res.json(itemOrder);
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

// search order
export const searchOrder = async function (req: Request, res: Response) {
  try {
    const item = req.body;
    const itemOrder = await searchOrderService(item);
    return res.json(itemOrder);
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
