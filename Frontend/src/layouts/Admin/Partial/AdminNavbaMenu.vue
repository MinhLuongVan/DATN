<!-- <template>
  <div class="top-bar row flex h-16 bg-[#1e293b]">
    <div class="flex items-center justify-between">
      <div class="flex items-center mb-4 px-2 lg:px-4 py-2">
        <img
          src="../../../assets/images/logoAdmin.jfif"
          alt=""
          class="h-[45px]"
          height="35"
        />
        <span class="pl-2 hidden lg:block">Admin</span>
      </div>
      <div class="mb-4 mr-1 lg:mr-6">
        
      </div>
    </div>
  </div>
</template> -->
<template>
  <!-- BEGIN: Top Bar -->
  <div
    class=" bg-[#1e293b] h-[70px] md:h-[65px] z-[51] border-b border-white/[0.08] md:mt-0 -mx-3 sm:-mx-8 md:-mx-0 px-3 md:border-b-0 relative lg:fixed md:inset-x-0 lg:top-0 sm:fixed sm:top-0 sm:px-8 md:px-10 md:pt-2 md:bg-gradient-to-b md:from-slate-100 md:to-transparent dark:md:from-darkmode-700"
  >
    <div class="h-full flex items-center">
      <!-- BEGIN: Logo -->
      <a href="" class="logo -intro-x hidden md:flex xl:w-[180px] block">
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
          <li class="breadcrumb-item"><a href="#">Application</a></li>
          <li class="breadcrumb-item active" aria-current="page">Dashboard</li>
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

