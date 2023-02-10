import {Product} from '../models/productsModel';
import mongoose from 'mongoose';
import {errorUnknown} from '../utils/myVariables';
import { IProduct } from '../models/interface/products';
import { okResponse,errResponse,dataNotFoundResponse } from '../notifications/message';
import { Cart } from '../models/cartModel';
import { ICart } from '../models/interface/cart';

//get all product
export const getAllCartServices = async function() {
    try {
        const itemFind = await Cart.find();
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
export const addCartServices = async function (data: ICart) {
    try {
        const itemAddCart = await new Cart({
            userId: data.userId,
            productId: data.productId,
            productImage: data.productImage,
            productName: data.productName,
            productPrice: data.productPrice,
            quantity: data.quantity,
            totalMoney: (data.productPrice)*(data.quantity),
        });
        await itemAddCart.save();
        return okResponse(itemAddCart);
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

// get id product
export const findOneCartServices = async function(data:ICart) {
    try {
        const itemFindIdCart = await Cart.findOne({
            _id: new mongoose.Types.ObjectId(data._id)
        });
        if(itemFindIdCart) {
            return okResponse(itemFindIdCart);
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
export const updateCartSevices = async function (data: ICart) {
    try {
        const itemUpdateCart = await Cart.findOne({
            _id: new mongoose.Types.ObjectId(data._id),
        });
        if(itemUpdateCart) {            
            itemUpdateCart.quantity = data.quantity,          
            await itemUpdateCart.save();
            return okResponse(itemUpdateCart);  
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
export const deleteCartServices = async function(data: ICart) {
    try {
        const itemDeleteCart = await Cart.findByIdAndDelete({
            _id: new mongoose.Types.ObjectId(data._id)
        });
        if(itemDeleteCart) {
            return okResponse(itemDeleteCart);
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

//search
export const searchProductServices = async function(data: IProduct) {
    try {
           const itemSearch = await Product.find({title: {$regex: data.name, $options:"$i"}})
        if(itemSearch) {
            return {data: itemSearch}
        } else {
            return dataNotFoundResponse();
        }

    } catch(e: unknown) {
        let err: string;
        if (e instanceof Error) {
            err = e.message;
        } else {
            err = errorUnknown;
        }
        return errResponse(err);
    }
}