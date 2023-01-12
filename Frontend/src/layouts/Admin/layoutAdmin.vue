<template>
  <div class="container-fluid">
    <AdminNavbarMenu />
    <div class="row flex-nowrap">
      <div class="col-auto px-0">
        <div id="sidebar" class="collapse collapse-horizontal show border-end">
          <div
            id="sidebar-nav"
            class="list-group border-0 rounded-0 bg-[#1e293b] text-sm-start min-vh-100 w-20 lg:w-60"
          >
            <a class="flex h-10 my-2 px-4 items-center">
              <HomeIcon class="w-5 h-5"></HomeIcon>
              <span class="pl-2 pt-0.5">Trang chủ</span>
            </a>
            <a class="flex h-10 mb-2 px-4 items-center">
              <TagIcon class="w-5 h-5"></TagIcon>
              <span class="pl-2 pt-0.5">Quản lý sản phẩm</span>
            </a>
            <a class="flex h-10 mb-2 px-4 items-center">
              <Shopping-bagIcon class="w-5 h-5"></Shopping-bagIcon>
              <span class="pl-2 pt-0.5">Quản lý đơn hàng</span>
            </a>
            <a class="flex h-10 mb-2 px-4 items-center">
              <UsersIcon class="w-5 h-5"></UsersIcon>
              <span class="pl-2 pt-0.5">Quản lý tài khoản</span>
            </a>
            <a class="flex h-10 mb-2 px-4 items-center">
              <CalendarIcon class="w-5 h-5"></CalendarIcon>
              <span class="pl-2 pt-0.5">Báo cáo thống kê</span>
            </a>
            <a class="flex h-10 mb-2 px-4 items-center">
              <SettingsIcon class="w-5 h-5"></SettingsIcon>
              <span class="pl-2 pt-0.5">Cấu hình hệ thống</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import AdminNavbarMenu from "../Admin/Partial/AdminNavbaMenu.vue";
export default defineComponent({
  name: "AdminLayout",
  components: {AdminNavbarMenu},
  setup() {
    return {};
  },
});
</script>
<style></style>
