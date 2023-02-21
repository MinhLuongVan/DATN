import { errorUnknown } from "../utils/myVariables";
import { Request, Response } from "express";
import * as response from "../notifications/message";
import { ISetting } from "../models/interface/setting";
import { addSettingServices, deleteSettingServices, findOneSettingServices, getAllSettingServices, updateSettingSevices } from "../services/settingService";

//get all setting
export const getAllSetting = async function (req: Request, res: Response) {
  try {
    const itemFind = await getAllSettingServices();
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

// save setting
export const saveSetting = async function (req: Request, res: Response) {
  try {
    const item = req.body as ISetting;
    const itemAdd = await addSettingServices(item);
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

//find setting by id
export const findIdSetting = async function (req: Request, res: Response) {
  try {
    const itemId = req.body as ISetting;
    const itemFindId = await findOneSettingServices(itemId);
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

//update setting
export const updateSetting = async function (req: Request, res: Response) {
  try {
    const itemEdit = req.body as ISetting;
    const itemUpdate = await updateSettingSevices(itemEdit);
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

//delete setting
export const deleteSetting = async function (req: Request, res: Response) {
  try {
    const item = req.body as ISetting;
    const itemDelete = await deleteSettingServices(item);
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



