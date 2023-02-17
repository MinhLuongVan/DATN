import { StoreDefinition, defineStore} from "pinia";
import { setNotificationToastMessage } from "../utils/myFunction";
import { useAuthStore } from "../stores/authStore";
import { feedbackInfor } from "../types/feedbackType";
import feedbackService from "../services/feedbackService";

export const useFeedbackStore = defineStore({
    id:'myFeedback',
    state: () => ({
        feedbacks: {} as feedbackInfor ,
        
    }),
    getters: {},
    actions: {
        async getAllFeedback(productId: any) {
                const authStore = useAuthStore()
                const data = {productId: productId.values} as feedbackInfor;
                const response =  await feedbackService.findAll(data, authStore.currentUser.Token)
                console.log('data',response.data);
                if(response.data.success){
                    this.feedbacks =  response.data.values; 
                } else {
                setNotificationToastMessage('Tải dữ liệu thất bại',false)
                }   
        },
    },
});