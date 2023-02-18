import { defineStore,StoreDefinition} from "pinia";
import Cookies from 'js-cookie';
import { User, userInfor } from '../types/userType';
import {env} from '../utils/myVariables';
import UserService from '../services/userService'

export const useAuthStore:StoreDefinition = defineStore({
    id:'auth',
    state: () => ({
        currentUser: {} as User ,
        currentRegister: {} as User | {},
        isAuthenticated:false,
        activeUser: [] as string[],
        token: "" as string | undefined,
        users: {} as userInfor
    }),
    getters: {},
    actions: {
        loginUser(currentUser: User) {
            this.currentUser = currentUser;
            this.isAuthenticated= true;
            Cookies.set('Authorization',currentUser.Token);
        },
        registerUser(currentRegister: User) {
            this.currentRegister = currentRegister;
            this.isAuthenticated = false;
        },
        getToken() {
            this.token = Cookies.get(env.nameCookie);
        },
        async getInforUser() {
            if(this.token) {
                const data = {} as userInfor;
                const response =  await UserService.findOne(data,this.token)
                this.currentUser =  response.data.values;
            }
        },

         // Get all user
        async initGetAllUser() {
            if(this.token) {
                const data = {} as userInfor;
                const response = await UserService.findAll(data,  this.token);
                    if (response.data.success) {
                        this.users = response.data.values;
                    } else {
                        setNotificationToastMessage("Tải dữ liệu thât bại", false);
                }
            }
        },
        logoutUser() {
            Cookies.remove(env.nameCookie)
        },
       
    },
    persist: {
        enabled: true,
        strategies: [
          {
            key: "Totoro-Garden",
            storage: localStorage,
          },
        ],
      },
});

function setNotificationToastMessage(arg0: string, arg1: boolean) {
    throw new Error("Function not implemented.");
}
