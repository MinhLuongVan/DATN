import express from 'express';
import { deleteNews, findIdNews, getAllNews, saveNews, updateNews,findByPage, searchNews } from '../controllers/newsController';

export const newsRoute = function (app: express.Application) {
    app.route("/api/news/save").post(saveNews);
    app.route("/api/news").post(getAllNews);
    app.route("/api/news/delete").post(deleteNews);
    app.route("/api/news/update").post(updateNews);
    app.route("/api/news/find-one").post(findIdNews);
    app.route("/api/news/find-by-page").post(findByPage);
    app.route("/api/news/search").post(searchNews);
}