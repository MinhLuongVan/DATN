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
          @click="actionShowDropdown"
        >
          <Shopping-bagIcon class="w-6 h-6 lg:w-5 lg:h-5"></Shopping-bagIcon>
          <span class="pl-2 pt-0.5 hidden lg:pr-10 lg:block"
            >Quản lý bán hàng</span
          >
          <chevron-downIcon
            v-if="!showDropdown"
            class="w-5 h-5 hidden lg:block"
          ></chevron-downIcon>
          <chevron-upIcon
            v-else
            class="w-5 h-5 hidden lg:block"
          ></chevron-upIcon>
        </a>
        <div v-if="showDropdown" class="">
          <a
            class="flex h-12 mb-2 px-6 lg:px-12 items-center text-white cursor-pointer"
            @click="router.push('/admin/products')"
            :class="`${routeMenu === '/admin/products' ? 'bg-[#4a4a4a]' : ''}`"
          >
            <PackageIcon class="w-6 h-6 lg:w-5 lg:h-5"></PackageIcon>
            <span class="pl-2 pt-0.5 hidden lg:block">Sản phẩm</span>
          </a>
          <a
            class="flex h-12 mb-2 px-6 lg:px-12 items-center text-white cursor-pointer"
            @click="router.push('/admin/typeproduct')"
            :class="`${
              routeMenu === '/admin/typeproduct' ? 'bg-[#4a4a4a]' : ''
            }`"
          >
            <X-squareIcon class="w-6 h-6 lg:w-5 lg:h-5"></X-squareIcon>
            <span class="pl-2 pt-0.5 hidden lg:block">Loại sản phẩm</span>
          </a>
          <a
            class="flex h-12 mb-2 px-6 lg:px-12 items-center text-white cursor-pointer"
            @click="router.push('/admin/order')"
            :class="`${routeMenu === '/admin/order' ? 'bg-[#4a4a4a]' : ''}`"
          >
            <Shopping-cartIcon class="w-6 h-6 lg:w-5 lg:h-5"></Shopping-cartIcon>
            <span class="pl-2 pt-0.5 hidden lg:block">Đơn hàng</span>
          </a>
        </div>
        <a
          class="flex h-12 mb-2 px-6 lg:px-5 items-center text-white cursor-pointer"
          @click="actionShowDropdownContent"
        >
          <AlbumIcon class="w-6 h-6 lg:w-5 lg:h-5"></AlbumIcon>
          <span class="pl-2 pt-0.5 hidden lg:pr-10 lg:block"
            >Quản lý nội dung</span
          >
          <chevron-downIcon
            v-if="!showDropdownContent"
            class="w-5 h-5 hidden lg:block"
          ></chevron-downIcon>
          <chevron-upIcon
            v-else
            class="w-5 h-5 hidden lg:block"
          ></chevron-upIcon>
        </a>
        <div v-if="showDropdownContent" class="">
          <a
            class="flex h-12 mb-2 px-6 lg:px-12 items-center text-white cursor-pointer"
            @click="router.push('/admin/contact')"
            :class="`${routeMenu === '/admin/contact' ? 'bg-[#4a4a4a]' : ''}`"
          >
            <ReplyIcon class="w-6 h-6 lg:w-5 lg:h-5"></ReplyIcon>
            <span class="pl-2 pt-0.5 hidden lg:block">Phản hồi</span>
          </a>
          <a
            class="flex h-12 mb-2 px-6 lg:px-12 items-center text-white cursor-pointer"
            @click="router.push('/admin/comment')"
            :class="`${
              routeMenu === '/admin/comment' ? 'bg-[#4a4a4a]' : ''
            }`"
          >
            <Thumbs-upIcon class="w-6 h-6 lg:w-5 lg:h-5"></Thumbs-upIcon>
            <span class="pl-2 pt-0.5 hidden lg:block">Đánh giá</span>
          </a>
          <a
            class="flex h-12 mb-2 px-6 lg:px-12 items-center text-white cursor-pointer"
            @click="router.push('/admin/news')"
            :class="`${routeMenu === '/admin/news' ? 'bg-[#4a4a4a]' : ''}`"
          >
            <Clipboard-listIcon class="w-6 h-6 lg:w-5 lg:h-5"></Clipboard-listIcon>
            <span class="pl-2 pt-0.5 hidden lg:block">Tin tức</span>
          </a>
        </div>
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
import { computed, defineComponent, ref } from "vue";
import { useRoute } from "vue-router";
import { useRouter } from "vue-router";
export default defineComponent({
  name: "SideMenuAdmin",
  setup() {
    const route = useRoute();
    const router = useRouter();
    const routeMenu = computed(() => route.path);
    const showDropdown = ref(false);
    const showDropdownContent = ref(false);

    function actionShowDropdown() {
      showDropdown.value = !showDropdown.value;
    }

    function actionShowDropdownContent() {
      showDropdownContent.value = !showDropdownContent.value;
    }
    return {
      route,
      router,
      routeMenu,
      showDropdown,
      showDropdownContent,
      actionShowDropdown,
      actionShowDropdownContent
    };
  },
});
</script>
<style></style>
