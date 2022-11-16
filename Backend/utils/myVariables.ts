import dotenv from "dotenv";
dotenv.config({path: `.env.${process.env.NODE_ENV}`});

export const env = {
    JWT_REFRESH_KEY: process.env.JWT_REFRESH_KEY as string,
    JWT_ACCESS_KEY: process.env.JWT_ACCESS_KEY as string,
    MONGODB: process.env.MONGODB as string,
    CLIENT_HOST: process.env.CLIENT_HOST as string,
}

export const errorUnknown = "Unknown error";