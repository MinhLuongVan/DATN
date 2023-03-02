// @ts-ignore
import jwt from "jsonwebtoken";
import mongoose from "mongoose";
import { User } from "../models/userModel";
import { errResponse } from "../notifications/message";
import { env } from "../utils/myVariables";

export const authorizationServices = async function (
  authorization: string
): Promise<string> {
  let userId = "";
  try {
    const createAccessToken = env.JWT_ACCESS_KEY;
    jwt.verify(
      authorization,
      createAccessToken,
      async function (err, decoded: any) {
        if (err || !decoded) {
          return errResponse("Internal Server Error");
        } else {
          userId = decoded.id;
        }
      }
    );
  } catch (e: unknown) {
    return userId;
  }
  return userId;
};

export const authorizationAdminServices = async function (
  authorization: string
): Promise<any> {
  let userId = "";
  let isAdmin = false;
  try {
    const createAccessToken = env.JWT_ACCESS_KEY;
    await jwt.verify(
      authorization,
      createAccessToken,
      async function (err, decoded: any) {
        if (err || !decoded) {
          return errResponse("Internal Server Error");
        } else {
          userId = decoded.id;
          const user = await User.findOne({
            _id: new mongoose.Types.ObjectId(userId),
          });
          if (user) {
            isAdmin = user.isAdmin;
          } else {
            isAdmin = false;
          }
        }
      }
    );
  } catch (e: unknown) {
    return isAdmin;
  }
  return isAdmin;
};
