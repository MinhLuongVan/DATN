import {Response} from 'express';

export const accept = function (values: any, res: Response) {
    const data = {
        status: '200',
        success: true,
        message: 'Well done,you have successfully',
        values: values,
    }
    res.json(data);
    res.end();
};

export const error = function (values: any, res: Response) {
    const data = {
        status: "404",
        success: false,
        message: "Data is not available",
        values: values,
    };
    res.json(data);
    res.end();
};

export const errJwtNotVerify = function (res: Response) {
    const data = {
        status: "404",
        success: false,
        message: "Invalid request or no access permission",
    };
    res.json(data);
    res.end();
};
export const okResponse = function (values: any) {
    const data = {
        status: "200",
        success: true,
        message: "Well done, you have successfully",
        values: values,
    };
    return data;
};

export const errResponse = function (err: any) {
    const data = {
        status: "404",
        success: false,
        message: err,
        values: ''
    };
    return data;
};

export const dataNotFoundResponse = function () {
    const data = {
        status: "505",
        success: false,
        message: "Data not found",
        values: ''
    };
    return data;
};
