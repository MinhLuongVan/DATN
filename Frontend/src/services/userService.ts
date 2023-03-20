import { apiAuthClient,apiClient } from "../http-common";
import { userInfor } from "../types/userType";
import { UserModel } from '../model/userModel';


class UserService { 
    login(data: userInfor) {
        return apiAuthClient.post("/user/login",data)
    }
    register(data: userInfor) {
        return apiAuthClient.post("/user/register",data)
    }
    findAll( data: userInfor,token: string) {
        return apiClient(token).post("/user/find-all",data)
    }
    update( data: userInfor,token: string) {
        return apiClient(token).post("/user/update",data)
    }
    delete(data: UserModel,token: string) {
        return apiClient(token).post("/user/delete",data)
    }
    findOne(data: userInfor , token: string) {
        return apiClient(token).post("/user/find-one",data)
    }
    findId(data: any , token: string) {
        return apiClient(token).post("/user/find-id",data)
    }
    findByPage(data: any, token: string) {
        return apiClient(token).post("/user/find-by-page",data)
    }
    search(data: UserModel, token: string) {
        return apiClient(token).post("/user/search",data)
    }

}
export default new UserService();