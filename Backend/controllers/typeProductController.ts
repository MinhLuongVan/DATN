import { ITypeProduct } from "../models/interface/typeProduct";
import { Request, Response } from "express";
import * as response from "../notifications/message";
import { errorUnknown } from "../utils/myVariables";
import {
  createTypeProductSevice,
  deleteTypeProductServices,
  findByPageService,
  findOneTypeProductServices,
  getAllTypeProductService,
  updateTypeProductSevice,
} from "../services/typeProductService";

//Get All Product
export const getAllTypeProduct = async function (req: Request, res: Response) {
  try {
    const itemTypeProduct = await getAllTypeProductService();
    return res.json(itemTypeProduct);
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

// Create Product
export const saveTypeProduct = async function (req: Request, res: Response) {
  try {
    const itemTypeProduct = req.body as ITypeProduct;
    const itemAddTypeProduct = await createTypeProductSevice(itemTypeProduct);
    return res.json(itemAddTypeProduct);
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

// Find a product

export const findIdTypeProduct = async function (req: Request, res: Response) {
  try {
    const itemId = req.body as ITypeProduct;
    const itemFindId = await findOneTypeProductServices(itemId);
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

// Update Product

export const updateTypeProduct = async function (req: Request, res: Response) {
  try {
    // const authorization = req.headers['authorization'];
    // if(!authorization) {
    //     return errJwtNotVerify(res);
    // }
    // const verify = await authorizationAdminServices(authorization);
    // if(verify) {
    const itemEdit = req.body as ITypeProduct;
    const itemUpdate = await updateTypeProductSevice(itemEdit);
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

// Delete product

export const deleteTypeProduct = async function (req: Request, res: Response) {
  try {
    // const authorization = req.headers['authorization'];
    // if(!authorization) {
    //     return errJwtNotVerify(res);
    // }
    // const verify = await authorizationAdminServices(authorization);
    // if(verify) {
    const item = req.body as ITypeProduct;
    const itemDelete = await deleteTypeProductServices(item);
    return res.json(itemDelete);
    // } else {
    //     return errJwtNotVerify(res);
    // }
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

// Findby page typeproduct
export const findByPage = async function (req: Request, res: Response) {
  try {
    const item = req.body;
    const itemTypeProduct = await findByPageService(item);
    return res.json(itemTypeProduct);
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
