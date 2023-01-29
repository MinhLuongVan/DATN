import express from "express";
import { getAllProduct,addProduct,findIdProduct,updatePost,deletePost } from "../controllers/productController";

export const productRoute = function (app: express.Application) {
    app.route("/api/product").post(getAllProduct);
    app.route("/api/product/save").post(addProduct);
    app.route("/api/product/find-one").post(findIdProduct);
    app.route("/api/product/update").post(updatePost);
    app.route("/api/product/delete").post(deletePost);
}