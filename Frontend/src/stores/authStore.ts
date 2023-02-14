import { defineStore,StoreDefinition} from "pinia";
import Cookies from 'js-cookie';
import {User, userInfor} from '../types/userType';
import {env} from '../utils/myVariables';
import UserService from '../services/userService'

export const useAuthStore = defineStore({
    id:'auth',
    state: () => ({
        currentUser: {} as User,
        currentRegister: {} as User | {},
        isAuthenticated:false,
        activeUser: [] as string[],
        token: "" as string | undefined
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
        async getInforUser(currentUser: User) {
            if(this.token) {
                const data = {
                    _id: currentUser.userInfor._id,
                } as userInfor;
                const response =  await UserService.findOne(data,this.token)
                this.currentUser =  response.data.values;
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