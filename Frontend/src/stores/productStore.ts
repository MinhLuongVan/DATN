import {  defineStore} from "pinia";
import { setNotificationToastMessage } from "../utils/myFunction";
import { useAuthStore } from "../stores/authStore";
import { productInfor } from "../types/productType";
import productService from "../services/productService";

export const useProductStore = defineStore({
    id:'myProduct',
    state: () => ({
        products: {} as productInfor ,
    }),
    getters: {},
    actions: {
        async getAllProduct() {
                const authStore = useAuthStore()
                const data = {} as productInfor;
                const response =  await productService.findAll(data, authStore.currentUser.Token)
                if(response.data.success){
                    this.products =  response.data.values;
                } else {
                    setNotificationToastMessage('Tải dữ liệu thất bại',false)
                }   
        }
    },
});