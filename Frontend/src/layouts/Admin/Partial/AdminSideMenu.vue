<template>
    <div class="bg-black">
      <ul>
        <li v-for="(list,index) in listRouterAdmin" :key="index">
        <router-link class="py-3 px-5 flex items-center text-white" :to="'/admin/' + list.path">
          <i v-if="list.meta && list.meta.lucideIcon" :icon-name="list.meta.lucideIcon" class="w-4 h-4 mr-2 shrink-0"></i>
        {{list.name }}
        </router-link>
        <ul v-if="list.children && list.children.length > 0">
          <li v-for="(listC,index) in list.children" :key="index">
            <router-link class="py-3 px-5 flex items-center text-white" :to="'/admin/' + list.path + '/' + listC.path">
              <i v-if="listC.meta && listC.meta.lucideIcon" :icon-name="listC.meta.lucideIcon" class="w-4 h-4 mr-2 shrink-0"></i>
            {{listC.name}}
            </router-link>
          </li>
        </ul>
      </li>
      </ul>
    </div>
  </template>
  
  <script lang="ts">
    import { defineComponent} from "vue";
    import { useRouter } from 'vue-router';
    import {ref} from "vue";
    import { createIcons, icons } from "lucide";
  
    export default defineComponent({
      name: 'AdminSideMenu',
      mounted() {
        createIcons({ icons, nameAttr: 'icon-name' });
      },
      setup() {
        const router = useRouter();
        const listRouterAdmin = ref<any>([]);
        const findAdmin = router.options.routes.find(item => item.path === '/admin');
        if(findAdmin && findAdmin.children) {
          findAdmin.children.forEach(item => listRouterAdmin.value.push(item));
        }
        console.log('find',findAdmin)
        console.log('findArr',listRouterAdmin)
        return {
          listRouterAdmin, 
        }
      }
    })
  </script>
  
  <style >
    
  </style>