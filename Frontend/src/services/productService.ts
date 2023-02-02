import { apiClient } from "../http-common";
import { productInfor } from "../types/productType";
import { ProductModel } from "../model/productModel";

class ProductService {
    findAll(data: productInfor, token: string) {
        return apiClient(token).post("/product",data)
    }
    findByNew(data: productInfor, token: string) {
        return apiClient(token).post("/product/new",data)
    }
    findByCategory(data: productInfor, token: string) {
        return apiClient(token).post("/product/category",data)
    }
    findByTree(data: productInfor, token: string) {
        return apiClient(token).post("/product/tree",data)
    }
    findBySale(data: productInfor, token: string) {
        return apiClient(token).post("/product/sale",data)
    }
    save(data: productInfor, token: string) {
        return apiClient(token).post("/product/save",data)
    }
    findOne(data: productInfor, token: string) {
        return apiClient(token).post("/product/find-one",data)
    }
    update(data: productInfor, token: string) {
        return apiClient(token).post("/product/update",data)
    }
    delete(data: ProductModel, token: string) {
        return apiClient(token).post("/product/delete",data)
    }
}
export default new ProductService();