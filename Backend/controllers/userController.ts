import { Response, Request } from "express";
import {
  registerUserServices,
  loginUserServices,
  findAllUsersServices,
  deleteUserServices,
  findOneUserServices,
  updateUserServices,
  findByPageService,
  searchUserService,
  findUserIdServices,
} from "../services/userService";
import { env, errorUnknown } from "../utils/myVariables";
import { IUser } from "../models/interface/user";
import * as response from "../notifications/message";
import {
  authorizationAdminServices,
  authorizationServices,
} from "../services/authorization";
import { errJwtNotVerify, errResponse } from "../notifications/message";

// Register
export const registerUser = async function (req: Request, res: Response) {
  try {
    const item = req.body as IUser;
    if (!item.username || !item.password || !item.email) {
      return errResponse("Missing name or email or password ");
    }

    if (item.email.length < 6) {
      return errResponse("Email must has at least 5 letters");
    }
    const itemService = await registerUserServices(item);
    return res.json(itemService);
  } catch (e: unknown) {
    let err: string;
    if (e instanceof Error) {
      err = e.message;
    } else {
      err = errorUnknown;
    }
    return response.error(err, res);
  }
};

// Login
export const loginUser = async function (req: Request, res: Response) {
  try {
    const item = req.body as IUser;
    if (!item.email || !item.password) {
      return errResponse("Missing email or password");
    }
    // if(!item.email.includes("@gmail.com")){
    //     return errResponse(" Email must includes @gmail.com");
    // }
    const itemService = await loginUserServices(item);
    res.cookie("Authorization", itemService?.values?.Token);
    return res.json(itemService);
  } catch (e: unknown) {
    let err: string;
    if (e instanceof Error) {
      err = e.message;
    } else {
      err = errorUnknown;
    }
    return response.error(err, res);
  }
};

// GetAllUsers
export const findAllUsers = async function (req: Request, res: Response) {
  try {
    const authorization = req.headers["authorization"];
    if (!authorization) {
      return errJwtNotVerify(res);
    }
    const verify = await authorizationAdminServices(authorization);
    if (verify) {
      const itemService = await findAllUsersServices();
      return res.json(itemService);
    } else {
      return errJwtNotVerify(res);
    }
  } catch (e: unknown) {
    let err: string;
    if (e instanceof Error) {
      err = e.message;
    } else {
      err = errorUnknown;
    }
    return response.error(err, res);
  }
};

// find User
export const findOneUser = async function (req: Request, res: Response) {
  try {
    const authorization = req.headers["authorization"];
    if (!authorization) {
      return errJwtNotVerify(res);
    }
    const verify = await authorizationServices(authorization);

    if (verify) {
      const item = req.body as IUser;
      const itemService = await findOneUserServices(verify);
      return res.json(itemService);
    } else {
      return errJwtNotVerify(res);
    }
  } catch (e: unknown) {
    let err: string;
    if (e instanceof Error) {
      err = e.message;
    } else {
      err = errorUnknown;
    }
    return response.error(err, res);
  }
};

// find UserId
export const findUserId = async function (req: Request, res: Response) {
  try {
      const item = req.body as IUser;
      const itemService = await findUserIdServices(item);
      return res.json(itemService);
  } catch (e: unknown) {
    let err: string;
    if (e instanceof Error) {
      err = e.message;
    } else {
      err = errorUnknown;
    }
    return response.error(err, res);
  }
};

// delete User
export const deleteUser = async function (req: Request, res: Response) {
  try {
    // const authorization = req.headers["authorization"];
    // if (!authorization) {
    //     return errJwtNotVerify(res);
    // }

    // const verify = await authorizationAdminServices(authorization);

    // if (verify) {
    const item = req.body as IUser;
    const itemService = await deleteUserServices(item);
    return res.json(itemService);
    // } else {
    //     return errJwtNotVerify(res);
    // }
  } catch (e: unknown) {
    let err: string;
    if (e instanceof Error) {
      err = e.message;
    } else {
      err = errorUnknown;
    }
    return response.error(err, res);
  }
};

// Update User

export const updateUser = async function (req: Request, res: Response) {
  try {
    // const authorization = req.headers["authorization"];
    // if (!authorization) {
    //     return errJwtNotVerify(res);
    // }

    // const verify = await authorizationAdminServices(authorization);
    // if (verify) {
    const item = req.body as IUser;
    const itemService = await updateUserServices(item);
    return res.json(itemService);
    // } else {
    //     return errJwtNotVerify(res);
    // }
  } catch (e: unknown) {
    let err: string;
    if (e instanceof Error) {
      err = e.message;
    } else {
      err = errorUnknown;
    }
    return response.error(err, res);
  }
};

// Findby page user
export const findByPage = async function (req: Request, res: Response) {
  try {
    const item = req.body;
    const itemUser = await findByPageService(item);
    return res.json(itemUser);
  } catch (e: unknown) {
    let err: string;
    if (e instanceof Error) {
      err = e.message;
    } else {
      err = errorUnknown;
    }
    return response.error(err, res);
  }
};

// search user
export const searchUser = async function (req: Request, res: Response) {
  try {
    const item = req.body;
    const itemUser = await searchUserService(item);
    return res.json(itemUser);
  } catch (e: unknown) {
    let err: string;
    if (e instanceof Error) {
      err = e.message;
    } else {
      err = errorUnknown;
    }
    return response.error(err, res);
  }
};
