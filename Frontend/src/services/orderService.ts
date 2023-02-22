import { apiClient } from "../http-common";
import { orderInfor } from '../types/orderType';
import { OrderModel } from '../model/orderModel';

class OrderService {
    findAll(data: orderInfor, token: string) {
        return apiClient(token).post("/order",data)
    }
    save(data: orderInfor, token: string) {
        return apiClient(token).post("/order/save",data)
    }
    findOne(data: OrderModel, token: string) {
        return apiClient(token).post("/order/find-one",data)
    }
    delete(data: OrderModel, token: string) {
        return apiClient(token).post("/order/delete",data)
    }
}
export default new OrderService();