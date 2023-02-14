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
        async getAllFeedback() {
                const authStore = useAuthStore()
                const data = {} as feedbackInfor;
                const response =  await feedbackService.findAll(data, authStore.currentUser.Token)
                if(response.data.success){
                    this.feedbacks =  response.data.values;
                } else {
                    setNotificationToastMessage('Tải dữ liệu thất bại',false)
                }   
        },
    },
});