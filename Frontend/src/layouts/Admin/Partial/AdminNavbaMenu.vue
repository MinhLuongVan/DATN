<template>
  <!-- BEGIN: Top Bar -->
  <div
    class="bg-[#1e293b] h-[70px] md:h-[65px] z-[51] border-b border-white/[0.08] md:mt-0 md:-mx-0 px-3 md:border-b-0 lg:fixed md:inset-x-0 sm:top-0 lg:top-0 fixed w-full sm:px-8 md:px-10 md:pt-2"
  >
    <div v-for="item in mySetting" :key="item" class="h-full flex items-center">
      <!-- BEGIN: Logo -->
      <a href="" class="logo -intro-x md:flex xl:w-[180px] block">
        <img
          :src="item.logoAdmin"
          alt=""
          class="h-[45px] mx-1"
          height="35"
        />
        <span class="pl-2 text-white mt-2.5 hidden lg:block">{{ item.name }}</span>
      </a>
      <!-- END: Logo -->
      <div class="w-full h-full flex justify-between">
        <!-- BEGIN: Breadcrumb -->
        <div class="w-full h-full py-2 flex">
          <span class="border-slate-600 border-r pl-10 hidden lg:block"></span>
          <span class="text-slate-300 text-lg pl-3 pt-2 hidden lg:block"></span>
        </div>
        <!-- END: Breadcrumb -->
        <!-- BEGIN: Account Menu -->
        <Dropdown class="intro-x w-8 h-8 pt-4 lg:pt-2.5">
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
          <DropdownMenu class="w-44 lg:w-56 bg-[#28334e] rounded-md">
            <div class="text-white p-3 border-b border-white/[0.08]">
              <div class="font-medium">{{ myAuth.currentUser.email }}</div>
              <div class="text-xs text-white mt-0.5 dark:text-slate-500">
                {{ myAuth.currentUser.username }}
              </div>
            </div>
            <div
              class="flex dropdown-item text-white text-sm hover:bg-white/5 p-3"
            >
              <LockIcon class="w-4 h-4 mr-2" /> Đổi mật khẩu
            </div>
            <div
              class="flex dropdown-item text-white text-sm hover:bg-white/5 p-3 cursor-pointer"
              @click="actionLogout()"
            >
              <ToggleRightIcon class="w-4 h-4 mr-2 mt-0.5"/> Đăng xuất
            </div>
          </DropdownMenu>
        </Dropdown>
      </div>
      <!-- END: Account Menu -->
    </div>
  </div>
  <!-- END: Top Bar -->
</template>

<script lang="ts">
import { computed, defineComponent, onMounted } from "vue";
import { useRouter } from "vue-router";
import Cookies from "js-cookie";
import { useAuthStore } from "../../../stores/authStore";
import { useSettingStore } from "../../../stores/settingStore";
export default defineComponent({
  name: "AdminNavbarMenu",

  setup() {
    const router = useRouter();
    const myAuth = useAuthStore();
    const settingStore = useSettingStore();
    const mySetting: any = computed(() =>settingStore.settings);

    onMounted(() => {
      settingStore.getAllSetting();
    })
    // Logout
    async function actionLogout () {
      Cookies.remove("Authorization");
      await router.push("/admin/login");
    }
    return {
      actionLogout,
      myAuth,
      router,
      mySetting
    };
  },
});
</script>
