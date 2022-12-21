<template>
    <div class="admin-layout">
      <div class="flex flex-wrap max-h-screen">
        <div class="bg-light" :class="{'w-[18rem] basis-72': !showHide, 'w-[4rem] basis-16': showHide}">
          <a href="/admin" class="admin-logo flex items-center py-1 px-5">
            <img src="../../assets/images/logoAdmin.jfif" alt="" class="h-[45px]" height="35">
            <span class="ml-1" v-if="!showHide">Admin</span>
          </a>
          <AdminSideMenu class="h-full"/>
        </div>
        <div class="admin-content bg-light" :style="{flexBasis: !showHide ? 'calc(100% - 18rem)' : 'calc(100% - 4rem)', width: !showHide ? 'calc(100% - 18rem)' : 'calc(100% - 4rem)'}">
          <div class="flex items-center bg-white border-b scroll-gray-400 overflow-y-hidden">
            <button type="button" class="btn btn-outline-secondary dark:text-slate-600 mx-2" @click="showHide = !showHide">
              <AlignRightIcon v-if="!showHide" class="w-4 h-4"/>
              <XIcon v-else class="w-4 h-4"/>
            </button>
            <div class="grow">
              <admin-navbar-menu/>
            </div>
          </div>
          <div class="p-5 scroll-gray-400 overflow-y-auto" style="height: calc(100vh - 49px)">
            <iNETComponent name="Loading" :load-options="{name: 'perfor'}"/>
            <router-view />
          </div>
        </div>
      </div>
    </div>
  <!-- BEGIN: Notification Toastify -->

  <!-- END: Notification Toastify -->
</template>

<script lang="ts">
  import { defineComponent,ref } from "vue";
  import AdminSideMenu from "../../layouts/Admin/Partial/AdminSideMenu.vue";
  import AdminNavbarMenu from "../../layouts/Admin/Partial/AdminNavbaMenu.vue";
  export default defineComponent({
    components: {AdminSideMenu, AdminNavbarMenu},
    setup(){
        const showHide = ref(false);
      return {
        showHide,
      }
    }
  });
</script>

<style >

</style>