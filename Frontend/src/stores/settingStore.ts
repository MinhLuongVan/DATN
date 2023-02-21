import { StoreDefinition, defineStore} from "pinia";
import { setNotificationToastMessage } from "../utils/myFunction";
import { useAuthStore } from "../stores/authStore";
import { settingInfor } from "../types/settingType";
import settingService from "../services/settingService";

export const useSettingStore:StoreDefinition = defineStore({
    id:'mySetting',
    state: () => ({
        settings: {} as settingInfor ,
        
    }),
    getters: {},
    actions: {
        async getAllSetting() {
                const authStore = useAuthStore()
                const data = {} as settingInfor;
                const response =  await settingService.findAll(data, authStore.currentUser.Token)
                if(response.data.success){
                    this.settings =  response.data.values;
                } else {
                    setNotificationToastMessage('Tải dữ liệu thất bại',false)
                }   
        }
    },
});