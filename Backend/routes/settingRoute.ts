import express from "express";
import {
  deleteSetting,
  findIdSetting,
  getAllSetting,
  saveSetting,
  updateSetting,
} from "../controllers/settingController";

export const settingRoute = function (app: express.Application) {
  app.route("/api/setting/save").post(saveSetting);
  app.route("/api/setting").post(getAllSetting);
  app.route("/api/setting/delete").post(deleteSetting);
  app.route("/api/setting/update").post(updateSetting);
  app.route("/api/setting/find-one").post(findIdSetting);
};
