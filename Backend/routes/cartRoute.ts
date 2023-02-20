import express from 'express';
import { saveCart, deleteCart, findIdCart, getAllCart, updateCart, deleteAllCart } from '../controllers/cartController';

export const cartRoute = function (app: express.Application) {
    app.route("/api/cart/save").post(saveCart);
    app.route("/api/cart").post(getAllCart);
    app.route("/api/cart/delete-all").post(deleteAllCart);
    app.route("/api/cart/delete").post(deleteCart);
    app.route("/api/cart/update").post(updateCart);
    app.route("/api/cart/find-one").post(findIdCart);
}