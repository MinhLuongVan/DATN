<template>
  <div class="col-auto px-0 fixed lg:top-16 mt-16 lg:mt-0">
    <div id="sidebar" class="collapse collapse-horizontal show border-end">
      <div
        id="sidebar-nav"
        class="list-group border-0 rounded-0 bg-[#1e293b] text-sm-start min-vh-100 w-20 lg:w-60 h-screen"
      >
        <a
          class="flex h-12 mb-2 px-6 -1 lg:px-5 items-center text-white cursor-pointer"
          @click="router.push('/admin')"
          :class="`${routeMenu === '/admin' ? 'bg-[#4a4a4a] ' : ''}`"
        >
          <HomeIcon class="w-6 h-6 lg:w-5 lg:h-5"></HomeIcon>
          <span class="pl-2 pt-0.5 hidden lg:block">Trang chủ</span>
        </a>
        <a
          class="flex h-12 mb-2 px-6 lg:px-5 items-center text-white cursor-pointer"
          @click="router.push('/admin/products')"
          :class="`${routeMenu === '/admin/products' ? 'bg-[#4a4a4a]' : ''}`"
        >
          <TagIcon class="w-6 h-6 lg:w-5 lg:h-5"></TagIcon>
          <span class="pl-2 pt-0.5 hidden lg:block">Quản lý sản phẩm</span>
        </a>
        <a
          class="flex h-12 mb-2 px-6 lg:px-5 items-center text-white cursor-pointer"
          @click="router.push('/admin/typeproduct')"
          :class="`${routeMenu === '/admin/typeproduct' ? 'bg-[#4a4a4a]' : ''}`"
        >
          <TagIcon class="w-6 h-6 lg:w-5 lg:h-5"></TagIcon>
          <span class="pl-2 pt-0.5 hidden lg:block">Quản lý loại sản phẩm</span>
        </a>
        <a
          class="flex h-12 mb-2 px-6 lg:px-5 items-center text-white cursor-pointer"
          @click="router.push('/admin/cart')"
          :class="`${routeMenu === '/admin/cart' ? 'bg-[#4a4a4a]' : ''}`"
        >
          <Shopping-bagIcon class="w-6 h-6 lg:w-5 lg:h-5"></Shopping-bagIcon>
          <span class="pl-2 pt-0.5 hidden lg:block">Quản lý đơn hàng</span>
        </a>
        <a
          class="flex h-12 mb-2 px-6 lg:px-5 items-center text-white cursor-pointer"
          @click="router.push('/admin/accounts')"
          :class="`${routeMenu === '/admin/accounts' ? 'bg-[#4a4a4a]' : ''}`"
        >
          <UsersIcon class="w-6 h-6 lg:w-5 lg:h-5"></UsersIcon>
          <span class="pl-2 pt-0.5 hidden lg:block">Quản lý tài khoản</span>
        </a>
        <a
          class="flex h-12 mb-2 px-6 lg:px-5 items-center text-white cursor-pointer"
        >
          <CalendarIcon class="w-6 h-6 lg:w-5 lg:h-5"></CalendarIcon>
          <span class="pl-2 pt-0.5 hidden lg:block">Báo cáo thống kê</span>
        </a>
        <a
          class="flex h-12 mb-2 px-6 lg:px-5 items-center text-white cursor-pointer"
          @click="router.push('/admin/configuration')"
          :class="`${
            routeMenu.includes('/admin/configuration') ? 'bg-[#4a4a4a]' : ''
          }`"
        >
          <SettingsIcon class="w-6 h-6 lg:w-5 lg:h-5"></SettingsIcon>
          <span class="pl-2 pt-0.5 hidden lg:block">Cấu hình hệ thống</span>
        </a>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { computed, defineComponent } from "vue";
import { useRoute } from "vue-router";
import { useRouter } from "vue-router";
export default defineComponent({
  name: "SideMenuAdmin",
  setup() {
    const route = useRoute();
    const router = useRouter();
    const routeMenu = computed(() => route.path);
    return {
      route,
      router,
      routeMenu,
    };
  },
});
</script>
<style></style>
