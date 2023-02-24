import { News } from '../models/newsModel';
import mongoose from 'mongoose';
import {errorUnknown} from '../utils/myVariables';
import { INews } from '../models/interface/news';
import { okResponse,errResponse,dataNotFoundResponse } from '../notifications/message';

//get all news
export const getAllNewsServices = async function() {
    try {
        const itemFind = await News.find();
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

// Add news
export const addNewServices = async function (data: INews) {
    try {
        const itemAddNews = await new News({
            name: data.name,
            content: data.content,
            image: data.image,
        });
        await itemAddNews.save();
        return okResponse(itemAddNews);
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

// get id news
export const findOneNewServices = async function(data:INews) {
    try {
        const itemFindIdNews = await News.findOne({
            _id: new mongoose.Types.ObjectId(data._id)
        });
        if(itemFindIdNews) {
            return okResponse(itemFindIdNews);
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

// update news
export const updateNewSevices = async function (data: INews) {
    try {
        const itemUpdateNews = await News.findOne({
            _id: new mongoose.Types.ObjectId(data._id),
        });
        if(itemUpdateNews) {            
            itemUpdateNews.name = data.name,
            itemUpdateNews.content = data.content,
            itemUpdateNews.image = data.image,
        await itemUpdateNews.save();
        return okResponse(itemUpdateNews);  
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

// delete news 
export const deleteNewServices = async function(data: INews) {
    try {
        const itemDeleteNews = await News.findByIdAndDelete({
            _id: new mongoose.Types.ObjectId(data._id)
        });
        if(itemDeleteNews) {
            return okResponse(itemDeleteNews);
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

// findBy page news
export const findByPageService = async function(data: any) {
    try {
        let condition = {} as any
        if(data.name) {
            condition.name = { $regex: data.name, $options: 'i'}
        }
        const perPage = 5; // số lượng sản phẩm xuất hiện trên 1 page
        const page = data.page;
        const total = await News.count();
        const totalPage = Math.ceil(total / perPage)
  
    const itemFind = await News.find(condition).sort({createdAt: -1})
      .skip((perPage * page) - perPage) // Trong page đầu tiên sẽ bỏ qua giá trị là 0
      .limit(perPage)
        if(itemFind) {
            return okResponse({data: itemFind, total: total,totalPage: totalPage});
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

// search news
export const searchNewsService = async function(data: INews) {
    try {  
    const itemFind = await News.find({name: {$regex: data.name, $options:"$i"}}).sort({createdAt: -1})
    
        if(itemFind) {
            return okResponse({data: itemFind});
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
