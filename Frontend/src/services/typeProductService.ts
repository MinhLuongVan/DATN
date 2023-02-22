import { apiClient } from "../http-common";
import { TypeProductModel } from "../model/typeProductModel";
import { typeProductInfor } from "../types/typeProductType";

class TypeProductService {
    findAll(data: typeProductInfor, token: string) {
        return apiClient(token).post("/typeproduct",data)
    }
    save(data: typeProductInfor, token: string) {
        return apiClient(token).post("/typeproduct/save",data)
    }
    findOne(data: TypeProductModel, token: string) {
        return apiClient(token).post("/typeproduct/find-one",data)
    }
    update(data: typeProductInfor, token: string) {
        return apiClient(token).post("/typeproduct/update",data)
    }
    delete(data: TypeProductModel, token: string) {
        return apiClient(token).post("/typeproduct/delete",data)
    }
    findByPage(data: any, token: string) {
        return apiClient(token).post("/typeproduct/find-by-page",data)
    }
}
export default new TypeProductService();