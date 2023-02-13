import { StoreDefinition, defineStore} from "pinia";
import { setNotificationToastMessage } from "../utils/myFunction";
import { useAuthStore } from "../stores/authStore";
import { newsInfor } from "../types/newsType";
import newsService from "../services/newsService";

export const useNewsStore = defineStore({
    id:'myNews',
    state: () => ({
        news: {} as newsInfor ,
        
    }),
    getters: {},
    actions: {
        async getAllNews() {
                const authStore = useAuthStore()
                const data = {} as newsInfor;
                const response =  await newsService.findAll(data, authStore.token)
                if(response.data.success){
                    this.news =  response.data.values;
                } else {
                    setNotificationToastMessage('Tải dữ liệu thất bại',false)
                }   
        }
    },
});