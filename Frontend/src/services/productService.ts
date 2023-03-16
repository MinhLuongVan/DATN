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
    findByCastus(data: productInfor, token: string) {
        return apiClient(token).post("/product/castus",data)
    }
    findByPot(data: productInfor, token: string) {
        return apiClient(token).post("/product/pot",data)
    }
    findByStoneLotus(data: productInfor, token: string) {
        return apiClient(token).post("/product/stonelotus",data)
    }
    findByHangingTree(data: productInfor, token: string) {
        return apiClient(token).post("/product/hangingtree",data)
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
    findOne(data: ProductModel, token: string) {
        return apiClient(token).post("/product/find-one",data)
    }
    update(data: productInfor, token: string) {
        return apiClient(token).post("/product/update",data)
    }
    updateAmount(data: productInfor, token: string) {
        return apiClient(token).post("/product/update-amount",data)
    }
    delete(data: ProductModel, token: string) {
        return apiClient(token).post("/product/delete",data)
    }
    findByPage(data: any, token: string) {
        return apiClient(token).post("/product/find-by-page",data)
    }
    search(data: any, token: string) {
        return apiClient(token).post("/product/search",data)
    }
}
export default new ProductService();