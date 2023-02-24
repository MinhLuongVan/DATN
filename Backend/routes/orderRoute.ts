import express from 'express';
import { saveOrder, getAllOrder, deleteOrder, findIdOrder,findByPage, searchOrder } from '../controllers/orderController';

export const orderRoute = function (app: express.Application) {
    app.route("/api/order/save").post(saveOrder);
    app.route("/api/order").post(getAllOrder);
    app.route("/api/order/delete").post(deleteOrder);
    app.route("/api/order/find-one").post(findIdOrder);
    app.route("/api/order/find-by-page").post(findByPage);
    app.route("/api/order/search").post(searchOrder);
}