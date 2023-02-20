import { StoreDefinition, defineStore } from "pinia";
import { setNotificationToastMessage } from "../utils/myFunction";
import { useAuthStore } from "../stores/authStore";
import { orderInfor } from "../types/orderType";
import OrderService from "../services/orderService";
export const useOrderStore = defineStore({
  id: "myOrder",
  state: () => ({
    orders: {} as orderInfor,
  }),
  getters: {},
  actions: {
    async getAllOrder() {
      const authStore = useAuthStore();
      const data = {} as orderInfor;
      const response = await OrderService.findAll(
        data,
        authStore.currentUser.Token
      );
      if (response.data.success) {
        this.orders = response.data.values;
      } else {
        setNotificationToastMessage("Đặt hàng thất bại", false);
      }
    },
  },
});
