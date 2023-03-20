import { defineStore,StoreDefinition} from "pinia";
import Cookies from 'js-cookie';
import { User, userInfor } from '../types/userType';
import {env} from '../utils/myVariables';
import UserService from '../services/userService'
import { setNotificationToastMessage } from "../utils/myFunction";

export const useAuthAdminStore:StoreDefinition = defineStore({
    id:'authAdmin',
    state: () => ({
        currentUserAdmin: {} as User ,
        isAuthenticated:false,
        activeUser: [] as string[],
        tokenAdmin: "" as string | undefined,
        users: {} as userInfor
    }),
    getters: {},
    actions: {
        loginUserAdmin(currentUserAdmin: User) {
            this.currentUserAdmin = currentUserAdmin;
            this.isAuthenticated = true;
            Cookies.set('AuthorizationAdmin',currentUserAdmin.Token);
        },
        getToken() {
            this.tokenAdmin = Cookies.get(env.nameCookieAdmin);
        },
        async getInforUser() {
            if(this.tokenAdmin) {
                const data = {} as userInfor;
                const response =  await UserService.findOne(data,this.tokenAdmin)
                this.currentUserAdmin =  response.data.values;
            }
        },

         // Get all user
        async initGetAllUser() {
            if(this.tokenAdmin) {
                const data = {} as userInfor;
                const response = await UserService.findAll(data, this.tokenAdmin);
                    if (response.data.success) {
                        this.users = response.data.values;
                    } else {
                        setNotificationToastMessage("Tải dữ liệu thât bại", false);
                }
            }
        },
        logoutUserAdmin() {
            Cookies.remove(env.nameCookieAdmin);
        },
       
    },
    persist: {
        enabled: true,
        strategies: [
          {
            key: "Totoro-Garden-Admin",
            storage: localStorage,
          },
        ],
      },
});

