import { apiClient } from "../http-common";
import { SettingModel } from "../model/settingModel";
import { settingInfor } from "../types/settingType";

class SettingService {
    save(data: settingInfor, token: string) {
        return apiClient(token).post("/setting/save",data)
    }
    findAll(data: settingInfor, token: string) {
        return apiClient(token).post("/setting",data)
    }
    findOne(data: SettingModel, token: string) {
        return apiClient(token).post("/setting/find-one",data)
    }
    update(data: settingInfor, token: string) {
        return apiClient(token).post("/setting/update",data)
    }
    delete(data: SettingModel, token: string) {
        return apiClient(token).post("/setting/delete",data)
    }
}
export default new SettingService();