import { errorUnknown } from "../utils/myVariables";
import { Request, Response } from "express";
import * as response from "../notifications/message";
import { ICart } from "../models/interface/cart";
import {
  addCartServices,
  deleteCartServices,
  findOneCartServices,
  getAllCartServices,
  updateCartSevices,
  deleteAllCartServices,
} from "../services/cartService";

//get all cart
export const getAllCart = async function (req: Request, res: Response) {
  try {
    const itemFind = await getAllCartServices();
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

// save cart
export const saveCart = async function (req: Request, res: Response) {
  try {
    const item = req.body as ICart;
    const itemAdd = await addCartServices(item);
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

//find cart by id
export const findIdCart = async function (req: Request, res: Response) {
  try {
    const itemId = req.body as ICart;
    const itemFindId = await findOneCartServices(itemId);
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

//update cart
export const updateCart = async function (req: Request, res: Response) {
  try {
    const itemEdit = req.body as ICart;
    const itemUpdate = await updateCartSevices(itemEdit);
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

//delete cart
export const deleteCart = async function (req: Request, res: Response) {
  try {
    const item = req.body as ICart;
    const itemDelete = await deleteCartServices(item);
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

//delete all cart
export const deleteAllCart = async function (req: Request, res: Response) {
  try {
    const itemDelete = await deleteAllCartServices();
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
