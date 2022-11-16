import { defineStore,StoreDefinition} from "pinia";
import PostService from "../services/postService";
import {postInfor} from '../types/postType'
export const usePostStore: StoreDefinition = defineStore({
    id:'post',
    state: () => ({
        posts : [] as postInfor[]
    }),
    getters: {},
    // actions: {
    //     async getAllPost() {
    //         const authStore = 
    //         const data = {} as postInfor;
    //         await res = PostService.findAll(data,)
    //     }
    // }
})