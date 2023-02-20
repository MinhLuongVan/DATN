import { StoreDefinition, defineStore} from "pinia";
import { cartInfor } from "../types/cartType";
import cartService from "../services/cartService";
import { setNotificationToastMessage } from "../utils/myFunction";
import { useAuthStore } from "../stores/authStore";

export const useCartStore = defineStore({
    id:'myCart',
    state: () => ({
        carts: {} as cartInfor ,
        
    }),
    getters: {},
    actions: {
        async getAllCart() {
                const authStore = useAuthStore()
                const data = {} as cartInfor;
                const response =  await cartService.findAll(data, authStore.currentUser.Token)
                if(response.data.success){
                    this.carts =  response.data.values;
                } else {
                    setNotificationToastMessage('Tải dữ liệu thất bại',false)
                }   
        },

        async deleteAllCart() {
            const authStore = useAuthStore()
            const data = {} as cartInfor;
            const response =  await cartService.deleteAll(data, authStore.currentUser.Token)
            if(response.data.success){
                this.getAllCart();
            } else {
                setNotificationToastMessage('Xóa tất cả giỏ hàng thất bại',false)
            }   
    }

    },
});