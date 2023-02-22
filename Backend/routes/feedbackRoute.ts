import express from 'express';
import { deleteFeedBack, findIdFeedBack,getAllFeedBackById, getAllFeedBack, saveFeedBack, updateFeedBack,findByPage } from '../controllers/feedbackController';

export const feedbackRoute = function (app: express.Application) {
    app.route("/api/feedback/save").post(saveFeedBack);
    app.route("/api/feedback").post(getAllFeedBack);
    app.route("/api/feedback/find-id").post(getAllFeedBackById);
    app.route("/api/feedback/delete").post(deleteFeedBack);
    app.route("/api/feedback/update").post(updateFeedBack);
    app.route("/api/feedback/find-one").post(findIdFeedBack);
    app.route("/api/feedback/find-by-page").post(findByPage);
}