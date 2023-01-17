<template>
  <div class="py-5 md:py-0">
   
    <div class="flex overflow-hidden ">
      <!-- BEGIN: Side Menu -->
      <nav class="side-nav bg-slate-600">
        <ul>
          <!-- BEGIN: First Child -->
      
            <li>Trang chủ</li>
            <li>Quản lý sản phẩm</li>
            <li>Quản lý đơn hàng</li>
            <li>Quản lý tài khoản</li>
            <li>Cấu hình hệ thống</li>
        
          <!-- END: First Child -->
        </ul>
      </nav>
      <!-- END: Side Menu -->
      <!-- BEGIN: Content -->
      <div class="content">
        <router-view />
      </div>
      <!-- END: Content -->
    </div>
  </div>
</template>

<script lang="ts">
import { useRoute, useRouter } from "vue-router";


export default {
  name: "AdminLayout",

  setup() {
    const route = useRoute();
    const router = useRouter();
  },
};
</script>
