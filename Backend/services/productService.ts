import {Product} from '../models/productsModel';
import mongoose from 'mongoose';
import {errorUnknown} from '../utils/myVariables';
import { IProduct } from '../models/interface/products';
import { okResponse,errResponse,dataNotFoundResponse } from '../notifications/message';

//get all product
export const getAllProductService = async function() {
    try {
        const itemFind = await Product.find();
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

//get product by new
export const getProductByNewService = async function() {
    try {
        const limit = 5;
        const itemFind = await Product.find({}).sort({createdAt:-1}).limit(limit);
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

//get product by tree
export const getProductByTreeService = async function() {
    try {
       
        const itemFind = await Product.find({category: 'Cây trong nhà'});
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


//get product by category
export const getProductByCategoryService = async function() {
    try {
       
        const itemFind = await Product.find({category: 'cây văn phòng'});
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

//get product by sale
export const getProductBySaleService = async function() {
    try {
       
        const itemFind = await Product.find({discount: {$gt: 0}});
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
// Add product
export const createProductSevice = async function (data: IProduct) {
    try {
        const itemAddProduct = await new Product({
            name: data.name,
            amount: data.amount,
            price: data.price,
            discount: data.discount,
            category: data.category,
            image: data.image,
        });
        await itemAddProduct.save();
        return okResponse(itemAddProduct);   
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

// get id product
export const findOneProductServices = async function(data:IProduct) {
    try {
        const itemFindIdProduct = await Product.findOne({
            _id: new mongoose.Types.ObjectId(data._id)
        });
        if(itemFindIdProduct) {
            return okResponse(itemFindIdProduct);
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

// update product
export const updateProductSevice = async function (data: IProduct) {
    try {
        const itemUpdateProduct = await Product.findOne({
            _id: new mongoose.Types.ObjectId(data._id),
        });
        if(itemUpdateProduct){
            itemUpdateProduct.name = data.name,
            itemUpdateProduct.price = data.price,
            itemUpdateProduct.discount = data.discount,
            itemUpdateProduct.image = data.image,
            itemUpdateProduct.amount = data.amount,
            itemUpdateProduct.category = data.category,
            await itemUpdateProduct.save();
            return okResponse(itemUpdateProduct);  
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

// delete product 
export const deleteProductServices = async function(data: IProduct) {
    try {
        const itemDeletePost = await Product.findByIdAndDelete({
            _id: new mongoose.Types.ObjectId(data._id)
        });
        if(itemDeletePost) {
            return okResponse(itemDeletePost);
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