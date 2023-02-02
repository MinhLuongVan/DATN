import { IProduct } from '../models/interface/products';
import {Request, Response} from 'express';
import * as response from "../notifications/message";
import { errorUnknown } from '../utils/myVariables';
import { errJwtNotVerify, errResponse } from '../notifications/message';
import { getAllProductService, createProductSevice, findOneProductServices, updateProductSevice, deleteProductServices, getProductByNewService, getProductByCategoryService, getProductByTreeService, getProductBySaleService } from '../services/productService';

//Get All Product
export const getAllProduct = async function (req: Request, res: Response) {
    try {
        const itemProduct = await getAllProductService();
        return res.json(itemProduct);
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

// get product by new
export const getProductByNew = async function (req: Request, res: Response) {
    try {
        const itemProduct = await getProductByNewService();
        return res.json(itemProduct);
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

// get product by category
export const getProductByCategory = async function (req: Request, res: Response) {
    try {
        const itemProduct = await getProductByCategoryService();
        return res.json(itemProduct);
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

// get product by tree
export const getProductByTree = async function (req: Request, res: Response) {
    try {
        const itemProduct = await getProductByTreeService();
        return res.json(itemProduct);
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

// get product by sale
export const getProductBySale = async function (req: Request, res: Response) {
    try {
        const itemProduct = await getProductBySaleService();
        return res.json(itemProduct);
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

// Create Product 
export const addProduct = async function (req: Request, res: Response) {
    try {
        const itemProduct = req.body as IProduct
        const itemAddProduct = await createProductSevice(itemProduct);
        return res.json(itemAddProduct);
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

// Find a product

export const findIdProduct = async function (req:Request, res:Response) {
    try {
        const itemId = req.body as IProduct;
        const itemFindId = await findOneProductServices(itemId);
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

export const updatePost = async function (req: Request, res: Response) {
    try {
        // const authorization = req.headers['authorization'];
        // if(!authorization) {
        //     return errJwtNotVerify(res);
        // }
        // const verify = await authorizationAdminServices(authorization);
        // if(verify) {
            const itemEdit = req.body as IProduct;
            const itemUpdate = await updateProductSevice( itemEdit);
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

export const deletePost = async function (req: Request, res: Response) {
    try {
        // const authorization = req.headers['authorization'];
        // if(!authorization) {
        //     return errJwtNotVerify(res);
        // }
        // const verify = await authorizationAdminServices(authorization);
        // if(verify) {
            const item = req.body as IProduct;
            const itemDelete = await deleteProductServices(item);
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
}