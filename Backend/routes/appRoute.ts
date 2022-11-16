import express from 'express';
import {userRoute} from './userRoute';

export const useRoute = function (app: express.Application) {
    userRoute(app)
}