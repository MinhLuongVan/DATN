<template>
  <!-- BEGIN: Top Bar -->
  <div
    class=" bg-[#1e293b] h-[70px] md:h-[65px] z-[51] border-b border-white/[0.08] md:mt-0 -mx-3 sm:-mx-8 md:-mx-0 px-3 md:border-b-0  lg:fixed md:inset-x-0 lg:top-0 fixed  w-full sm:px-8 md:px-10 md:pt-2 md:bg-gradient-to-b md:from-slate-100 md:to-transparent dark:md:from-darkmode-700"
  >
    <div class="h-full flex items-center">
      <!-- BEGIN: Logo -->
      <a href="" class="logo -intro-x  md:flex xl:w-[180px] block">
        <img
          src="../../../assets/images/logoAdmin.jfif"
          alt=""
          class="h-[45px]"
          height="35"
        />
        <span class="pl-2 hidden lg:block">Admin</span>
      </a>
      <!-- END: Logo -->
      <!-- BEGIN: Breadcrumb -->
      <nav aria-label="breadcrumb" class="-intro-x pl-0.5 h-[45px] mr-auto">
        <ol class="breadcrumb breadcrumb-light">
          <li class="breadcrumb-item active hidden lg:block" aria-current="page">Trang chủ</li>
        </ol>
      </nav>
      <!-- END: Breadcrumb -->
      
      <!-- BEGIN: Account Menu -->
      <Dropdown class="intro-x w-8 h-8">
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
        <DropdownMenu class="w-44 lg:w-56 bg-[#28334e]">
            <DropdownHeader tag="div" class="!font-normal text-white">
              <div class="font-medium">
                minhlv@gmail.com
              </div>
              <div class="text-xs text-white mt-0.5 dark:text-slate-500">
               minhlv
              </div>
            </DropdownHeader>
            <DropdownDivider class="border-white/[0.08]" />
            <DropdownItem class="flex dropdown-item text-white text-sm hover:bg-white/5">
              <LockIcon class="w-4 h-4 mr-2" /> Đổi mật khẩu</DropdownItem
            >
            <DropdownDivider class="border-white/[0.08]" />
            <DropdownItem class="flex dropdown-item text-white text-sm hover:bg-white/5">
              <ToggleRightIcon class="w-4 h-4 mr-2" /> Đăng xuất</DropdownItem
            >
        </DropdownMenu>
      </Dropdown>
      <!-- END: Account Menu -->
    </div>
  </div>
  <!-- END: Top Bar -->
</template>


<script lang="ts">
import { defineComponent} from "vue";
  
  export default defineComponent({
    name: "AdminNavbarMenu",

    setup() {
   
      return {
       
      }
    }
  })
</script>

