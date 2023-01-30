import {defineStore,StoreDefinition} from "pinia";
import {computed, onMounted, ref} from "vue";
import productService from "../services/productService";
import { productInfor } from '../types/productType';
import { useAuthStore } from "./authStore";
import { setNotificationToastMessage } from "../utils/myFunction";

export const ProductStore: StoreDefinition = defineStore('productStore', () => {
    const products = ref<productInfor[]>([])
    const authStore = useAuthStore();
    async function initGetAllProduct() {
        const data = {} as productInfor;
        const response = await productService.findAll(data,authStore.token);
        products.value = response.data.values;
        if (response.data.success) {
            setNotificationToastMessage("Tải dữ liệu thành công", true)
          } else {
            setNotificationToastMessage("Tải dữ liệu thât bại", false)
          }
    }
    onMounted(() => {
        initGetAllProduct();
      });
  
    return {
        products,
        initGetAllProduct
    }
});