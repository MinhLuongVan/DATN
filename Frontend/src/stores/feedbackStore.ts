import { StoreDefinition, defineStore} from "pinia";
import { setNotificationToastMessage } from "../utils/myFunction";
import { useAuthStore } from "../stores/authStore";
import { feedbackInfor } from "../types/feedbackType";
import feedbackService from "../services/feedbackService";
import { feedbackRoute } from '../../../Backend/routes/feedbackRoute';

export const useFeedbackStore:StoreDefinition = defineStore({
    id:'myFeedback',
    state: () => ({
        feedbacks: {} as feedbackInfor ,
        feedbackAll: {} as feedbackInfor
        
    }),
    getters: {},
    actions: {
        async getAllFeedbackById(productId: string) {
                const authStore = useAuthStore()
                const data = {productId: productId} as feedbackInfor;
                const response =  await feedbackService.findById(data, authStore.currentUser.Token)
                if(response.data.success){
                    this.feedbacks =  response.data.values; 
                } else {
                setNotificationToastMessage('Tải dữ liệu thất bại',false)
                }   
        },

        async getAllFeedback() {
            const authStore = useAuthStore()
            const data = {} as feedbackInfor;
            const response =  await feedbackService.findAll(data, authStore.currentUser.Token)
            if(response.data.success){
                this.feedbackAll =  response.data.values; 
            } else {
            setNotificationToastMessage('Tải dữ liệu thất bại',false)
            }   
    },
        
    },
});