import {  defineStore} from "pinia";
import { typeProductInfor } from "../types/typeProductType";
import typeProductService from "../services/typeProductService";
import { setNotificationToastMessage } from "../utils/myFunction";
import { useAuthStore } from "../stores/authStore";

export const useTypeProductStore = defineStore({
    id:'myTypeProduct',
    state: () => ({
        typeProducts: {} as typeProductInfor ,
        
    }),
    getters: {},
    actions: {
        async getAllTypeProduct() {
                const authStore = useAuthStore()
                const data = {} as typeProductInfor;
                const response =  await typeProductService.findAll(data, authStore.token)
                if(response.data.success){
                    this.typeProducts =  response.data.values;
                } else {
                    setNotificationToastMessage('Tải dữ liệu thất bại',false)
                }   
        }
    },
});