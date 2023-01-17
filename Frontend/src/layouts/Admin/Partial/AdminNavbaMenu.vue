<template>
  <!-- BEGIN: Top Bar -->
  <div
    class="top-bar-boxed h-[70px] md:h-[65px] lg:[30px] z-[51] border-b border-white/[0.08] mt-12 md:mt-0 -mx-3 sm:-mx-8 md:-mx-0 px-3 md:border-b-0 relative md:fixed md:inset-x-0 md:top-0 sm:px-8 md:px-10 md:pt-10 md:bg-gradient-to-b md:from-slate-100 md:to-transparent dark:md:from-darkmode-700"
  >
    <div class="h-full flex items-center">
      <!-- BEGIN: Logo -->
      <a href="" class="logo -intro-x hidden md:flex xl:w-[180px] block">
        <img
          alt="Enigma Tailwind HTML Admin Template"
          class="logo__image w-6"
          src="@/assets/images/logo.svg"
        />
        <span class="logo__text text-white text-lg ml-3"> Fresh Garden </span>
      </a>
      <!-- END: Logo -->
      <!-- BEGIN: Breadcrumb -->
      <nav aria-label="breadcrumb" class="-intro-x h-[45px] mr-auto">
        <ol class="breadcrumb breadcrumb-light">
          <li class="breadcrumb-item active" aria-current="page">Trang chủ</li>
        </ol>
      </nav>
      <!-- END: Breadcrumb -->
      <!-- BEGIN: Account Menu -->
      <Dropdown class="intro-x w-8 h-8 ">
          <DropdownToggle
            tag="div"
            role="button"
            class="w-8 h-8 rounded-full overflow-hidden shadow-lg image-fit zoom-in scale-110"
          >
            <img
              alt="Enigma Tailwind HTML Admin Template"
              src="../../../assets/images/no-avatar.png"
            />
          </DropdownToggle>
          <DropdownMenu class="w-40 lg:w-56 bg-[#28334e] mt-3">
              <DropdownHeader
                tag="div"
                class="!font-normal text-white -mt-2 border-b"
              >
                <div class="font-medium">minhlv@123</div>
                <div class="text-xs text-white mt-0.5 dark:text-slate-500">
                  minhlv
                </div>
              </DropdownHeader>
              <DropdownItem class="flex py-2 text-sm hover:bg-white/80 text-white">
                <UserIcon class="w-4 h-4 mr-2" /> Thông tin
              </DropdownItem>
              <DropdownItem class="flex py-2 text-sm hover:bg-white/80 text-white">
                <UnlockIcon class="w-4 h-4 mr-2" /> Đổi mật khẩu</DropdownItem
              >
              <DropdownItem class="flex py-2 text-sm hover:bg-white/80 text-white">
                <Log-outIcon class="w-4 h-4 mr-2" />Đăng xuất</DropdownItem
              >
          </DropdownMenu>
        </Dropdown>
      <!-- END: Account Menu -->
    </div>
  </div>
  <!-- END: Top Bar -->
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "AdminNavbarMenu",
  setup() {
    return {};
  },
});
</script>

