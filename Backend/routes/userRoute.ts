import express from "express";
import {
  deleteUser,
  findAllUsers,
  findOneUser,
  loginUser,
  registerUser,
  updateUser,
  findByPage,
  searchUser,
  findUserId,
} from "../controllers/userController";

export const userRoute = function (app: express.Application) {
  app.route("/api/user/register").post(registerUser);
  app.route("/api/user/login").post(loginUser);
  app.route("/api/user/find-all").post(findAllUsers);
  app.route("/api/user/find-one").post(findOneUser);
  app.route("/api/user/find-id").post(findUserId);
  app.route("/api/user/delete").post(deleteUser);
  app.route("/api/user/update").post(updateUser);
  app.route("/api/user/find-by-page").post(findByPage);
  app.route("/api/user/search").post(searchUser);
};
