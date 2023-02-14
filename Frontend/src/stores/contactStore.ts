import { StoreDefinition, defineStore} from "pinia";
import { setNotificationToastMessage } from "../utils/myFunction";
import { useAuthStore } from "../stores/authStore";
import { contactInfor } from '../types/contactType';
import contactService from "../services/contactService";
export const useContactStore = defineStore({
    id:'myContact',
    state: () => ({
        contacts: {} as contactInfor ,
        
    }),
    getters: {},
    actions: {
        async getAllContact() {
                const authStore = useAuthStore()
                const data = {} as contactInfor;
                const response =  await contactService.findAll(data,authStore.currentUser.Token)
                if(response.data.success){
                    this.contacts =  response.data.values;
                } else {
                    setNotificationToastMessage('Tải dữ liệu thất bại',false)
                }   
        }
    },
});