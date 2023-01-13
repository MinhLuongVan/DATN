<template>
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
            <DropdownContent
              class="bg-primary/80 before:block before:absolute before:bg-black before:inset-0 before:rounded-md before:z-[-1] text-white"
            >
              <DropdownHeader
                tag="div"
                class="!font-normal text-white -mt-2 border-b"
              >
                <div class="font-medium">minhlv@123</div>
                <div class="text-xs text-white mt-0.5 dark:text-slate-500">
                  minhlv
                </div>
              </DropdownHeader>
              <DropdownItem class="text-sm hover:bg-white/80 text-white">
                <UserIcon class="w-4 h-4 mr-2" /> Thông tin
              </DropdownItem>
              <DropdownItem class="text-sm hover:bg-white/80 text-white">
                <UnlockIcon class="w-4 h-4 mr-2" /> Đổi mật khẩu</DropdownItem
              >
              <DropdownItem class="text-sm hover:bg-white/80 text-white">
                <Log-outIcon class="w-4 h-4 mr-2" />Đăng xuất</DropdownItem
              >
            </DropdownContent>
          </DropdownMenu>
        </Dropdown>
      </div>
    </div>
  </div>
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
<style>
.top-bar {
  top: 0;
  position: sticky;
  position: -webkit-sticky;
  z-index: 1;
}
</style>
