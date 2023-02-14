import express from 'express';
import {userRoute} from './userRoute';
import {productRoute} from './productRoute';
import {contactRoute} from './contactRoute';
import {cartRoute } from './cartRoute';
import {typeProductRoute} from './typeProductRoute';
import { newsRoute } from './newsRoute';
import { feedbackRoute } from './feedbackRoute';
export const useRoute = function (app: express.Application) {
    userRoute(app);
    productRoute(app);
    contactRoute(app);
    cartRoute(app);
    typeProductRoute(app);
    newsRoute(app);
    feedbackRoute(app);
}