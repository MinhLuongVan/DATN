import express from 'express';
import { addContact } from '../controllers/contactController';


export const contactRoute = function (app: express.Application) {
    app.route("/api/contact/save").post(addContact);
}