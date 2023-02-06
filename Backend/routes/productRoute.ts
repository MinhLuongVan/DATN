import express from "express";
import { getAllProduct, addProduct, findIdProduct, updatePost, deletePost, getProductByNew, getProductByCategory, getProductByTree, getProductBySale, getProductByCastus, getProductByPot, getProductByStoneLotus, getProductByHangingTree } from '../controllers/productController';

export const productRoute = function (app: express.Application) {
    app.route("/api/product").post(getAllProduct);
    app.route("/api/product/new").post(getProductByNew);
    app.route("/api/product/category").post(getProductByCategory);
    app.route("/api/product/tree").post(getProductByTree);
    app.route("/api/product/sale").post(getProductBySale);
    app.route("/api/product/castus").post(getProductByCastus);
    app.route("/api/product/pot").post(getProductByPot);
    app.route("/api/product/stonelotus").post(getProductByStoneLotus);
    app.route("/api/product/hangingtree").post(getProductByHangingTree);
    app.route("/api/product/save").post(addProduct);
    app.route("/api/product/find-one").post(findIdProduct);
    app.route("/api/product/update").post(updatePost);
    app.route("/api/product/delete").post(deletePost);
}