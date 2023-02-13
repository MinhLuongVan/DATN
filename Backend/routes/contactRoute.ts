import express from 'express';
import { addContact, getAllContact,findIdContact,deleteContact } from '../controllers/contactController';


export const contactRoute = function (app: express.Application) {
    app.route("/api/contact").post(getAllContact);
    app.route("/api/contact/save").post(addContact);
    app.route("/api/contact/find-one").post(findIdContact);
    app.route("/api/contact/delete").post(deleteContact);

}