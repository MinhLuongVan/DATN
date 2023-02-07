import express from 'express';
import { addContact, getAllContact } from '../controllers/contactController';


export const contactRoute = function (app: express.Application) {
    app.route("/api/contact/find-all").post(getAllContact);
    app.route("/api/contact/save").post(addContact);
}