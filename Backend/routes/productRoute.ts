import express from "express";
import { getAllProduct, saveProduct, findIdProduct, updateProduct, deleteProduct, getProductByNew, getProductByCategory, getProductBySale, getProductByCastus, getProductByStoneLotus, getProductByHangingTree,findByPage } from '../controllers/productController';

export const productRoute = function (app: express.Application) {
    app.route("/api/product").post(getAllProduct);
    app.route("/api/product/new").post(getProductByNew);
    app.route("/api/product/category").post(getProductByCategory);
    app.route("/api/product/sale").post(getProductBySale);
    app.route("/api/product/castus").post(getProductByCastus);
    app.route("/api/product/stonelotus").post(getProductByStoneLotus);
    app.route("/api/product/hangingtree").post(getProductByHangingTree);
    app.route("/api/product/save").post(saveProduct);
    app.route("/api/product/find-one").post(findIdProduct);
    app.route("/api/product/update").post(updateProduct);
    app.route("/api/product/delete").post(deleteProduct);
    app.route("/api/product/find-by-page").post(findByPage);
}