import { apiClient } from "../http-common";
import { CartModel } from "../model/cartModel";
import { cartInfor } from "../types/cartType";
class CartService {
    findAll(data: cartInfor, token: string) {
        return apiClient(token).post("/cart",data)
    }
    save(data: cartInfor, token: string) {
        return apiClient(token).post("/cart/save",data)
    }
    findOne(data: CartModel, token: string) {
        return apiClient(token).post("/cart/find-one",data)
    }
    update(data: cartInfor, token: string) {
        return apiClient(token).post("/cart/update",data)
    }
    delete(data: CartModel, token: string) {
        return apiClient(token).post("/cart/delete",data)
    }
    deleteAll(data: cartInfor, token: string) {
        return apiClient(token).post("/cart/delete-all",data)
    }
}
export default new CartService();