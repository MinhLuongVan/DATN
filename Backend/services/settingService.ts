import mongoose from 'mongoose';
import {errorUnknown} from '../utils/myVariables';
import { okResponse,errResponse,dataNotFoundResponse } from '../notifications/message';
import { Setting } from '../models/settingModel';
import {ISetting} from '../models/interface/setting';
//get all setting
export const getAllSettingServices = async function() {
    try {
        const itemFind = await Setting.find();
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


// Add setting
export const addSettingServices = async function (data: ISetting) {
    try {
        const itemAddSetting = await new Setting({
            name: data.name,
            keyword: data.keyword,
            logoAdmin: data.logoAdmin,
            logoUser: data.logoUser,
        });
        await itemAddSetting.save();
        return okResponse(itemAddSetting);
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

// get id setting
export const findOneSettingServices = async function(data:ISetting) {
    try {
        const itemFindId = await Setting.findOne({
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

// Update setting
export const updateSettingSevices = async function (data: ISetting) {
    try {
        const itemUpdateNews = await Setting.findOne({
            _id: new mongoose.Types.ObjectId(data._id),
        });
        if(itemUpdateNews) {            
            itemUpdateNews.name = data.name,
            itemUpdateNews.keyword = data.keyword,
            itemUpdateNews.logoAdmin = data.logoAdmin,
            itemUpdateNews.logoUser = data.logoUser,
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

// delete setting
export const deleteSettingServices = async function(data: ISetting) {
    try {
        const itemDelete = await Setting.findByIdAndDelete({
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
