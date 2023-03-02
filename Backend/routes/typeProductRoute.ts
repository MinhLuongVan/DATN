import express from "express";
import {
  deleteTypeProduct,
  findIdTypeProduct,
  getAllTypeProduct,
  saveTypeProduct,
  updateTypeProduct,
  findByPage,
} from "../controllers/typeProductController";

export const typeProductRoute = function (app: express.Application) {
  app.route("/api/typeproduct").post(getAllTypeProduct);
  app.route("/api/typeproduct/save").post(saveTypeProduct);
  app.route("/api/typeproduct/find-one").post(findIdTypeProduct);
  app.route("/api/typeproduct/update").post(updateTypeProduct);
  app.route("/api/typeproduct/delete").post(deleteTypeProduct);
  app.route("/api/typeproduct/find-by-page").post(findByPage);
};
