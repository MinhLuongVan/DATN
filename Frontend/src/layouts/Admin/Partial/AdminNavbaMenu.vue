<template>
  <!-- BEGIN: Top Bar -->
  <div
    class="bg-[#1e293b] h-[70px] md:h-[65px] z-[51] border-b border-white/[0.08] md:mt-0 md:-mx-0 px-3 md:border-b-0 lg:fixed md:inset-x-0 sm:top-0 lg:top-0 fixed w-full sm:px-8 md:px-10 md:pt-2"
  >
    <div v-for="item in mySetting" :key="item" class="h-full flex items-center">
      <!-- BEGIN: Logo -->
      <a href="" class="logo -intro-x md:flex xl:w-[180px] block">
        <img :src="item.logoAdmin" alt="" class="h-[45px] mx-1" height="35" />
        <span class="pl-2 text-white mt-2.5 hidden lg:block">{{
          item.name
        }}</span>
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
              <div class="font-medium">{{ myAuth.currentUserAdmin.email }}</div>
              <div class="text-xs text-white mt-0.5 dark:text-slate-500">
                {{ myAuth.currentUserAdmin.username }}
              </div>
            </div>
            <div
              class="flex dropdown-item text-white text-sm hover:bg-white/5 p-3 cursor-pointer"
              @click="actionShowChangePassword(userId)"
            >
              <LockIcon class="w-4 h-4 mr-2" /> Đổi mật khẩu
            </div>
            <div
              class="flex dropdown-item text-white text-sm hover:bg-white/5 p-3 cursor-pointer"
              @click="actionLogout()"
            >
              <ToggleRightIcon class="w-4 h-4 mr-2 mt-0.5" /> Đăng xuất
            </div>
          </DropdownMenu>
        </Dropdown>
      </div>
      <!-- END: Account Menu -->
      <!-- BEGIN: Change password Confirmation Modal -->
      <Modal
        :show="ChangeConfirmationModal"
        @hidden="ChangeConfirmationModal = false"
      >
        <ModalBody class="p-0">
          <div class="px-5 pt-3 text-center text-2xl">
            <h2 class="text-lime-500">Đổi mật khẩu</h2>
          </div>
          <div class="pt-5">
            <div class="px-5">
              <label class="text-base">Mật khẩu</label>
              <input
                type="password"
                v-model.trim="formData.password"
                placeholder="Mật khẩu"
                class="form-control my-2"
              />
              <small class="text-red-500 text-base" v-if="errMsg">
                {{ passwordErr }}
              </small>
            </div>
            <div class="px-5">
              <label class="text-base">Nhập lại mật khẩu</label>
              <input
                type="password"
                v-model.trim="formData.passwordagain"
                placeholder="Nhập lại mật khẩu"
                class="form-control my-2"
              />
              <small class="text-red-500 text-base" v-if="errMsg">
                {{ againPasswordErr }}
              </small>
            </div>
          </div>
          <div class="pb-5 pt-2 text-center lg:pl-56 lg:pr-3">
            <button
              type="button"
              class="btn btn-outline-secondary w-24 mr-1"
              @click="ChangeConfirmationModal = false"
            >
              Trở lại
            </button>
            <button
              type="button"
              class="btn text-white bg-lime-500"
              @click="actionChangePassword"
            >
              Lưu và đóng
            </button>
          </div>
        </ModalBody>
      </Modal>
      <!-- END:  Change password Confirmation Modal -->
    </div>
  </div>
  <!-- END: Top Bar -->
</template>

<script lang="ts">
import { computed, defineComponent, onMounted, reactive, ref } from "vue";
import { useRouter } from "vue-router";
import Cookies from "js-cookie";
import { useAuthAdminStore } from "../../../stores/authAdminStore";
import { useSettingStore } from "../../../stores/settingStore";
import {
  REGEXAGAiNPASSWORD,
  REGEXPASSWORD,
  REQUIRED,
  setNotificationToastMessage,
} from "../../../utils/myFunction";
import userService from "../../../services/userService";
import { userInfor } from "../../../types/userType";
export default defineComponent({
  name: "AdminNavbarMenu",

  setup() {
    const router = useRouter();
    const myAuth = useAuthAdminStore();
    const settingStore = useSettingStore();
    const mySetting: any = computed(() => settingStore.settings);
    const ChangeConfirmationModal = ref(false);
    const idUpdate = ref("");
    const errMsg = ref(false);
    const userId = myAuth.currentUserAdmin._id;
    const passwordErr = computed(() => {
      if (!formData.password) {
        return REQUIRED;
      } else if (formData.password.length < 6) {
        return REGEXPASSWORD;
      }
    });
    const againPasswordErr = computed(() => {
      if (!formData.passwordagain) {
        return REQUIRED;
      } else if (formData.passwordagain !== formData.password) {
        return REGEXAGAiNPASSWORD;
      }
    });
    const formData = reactive({
      username: "",
      sdt: "",
      email: "",
      password: "",
      passwordagain: "",
    });

    async function actionShowChangePassword(userId: string) {
      const itemFindId: any = { _id: userId };
      const response = await userService.findId(
        itemFindId,
        myAuth.currentUserAdmin.Token
      );
      idUpdate.value = response.data.values._id;
      formData.username = response.data.values.username;
      formData.email = response.data.values.email;
      formData.password = formData.password;
      formData.sdt = response.data.values.sdt;
      ChangeConfirmationModal.value = true;
    }
    
    // change password
    async function actionChangePassword() {
      const dataUpdate = {
        _id: idUpdate.value,
        username: formData.username,
        email: formData.email,
        sdt: formData.sdt,
        password: formData.password,
      } as userInfor;
      const response = await userService.update(
        dataUpdate,
        myAuth.currentUserAdmin.Token
      );
      if (response.data.success) {
        ChangeConfirmationModal.value = false;
        myAuth.initGetAllUser();
        actionLogout();
      } else {
        setNotificationToastMessage("Cập nhật dữ liệu thất bại", false);
      }
    }

    // Logout
    async function actionLogout() {
      Cookies.remove("AuthorizationAdmin");
      await router.push("/admin/login");
    }

    onMounted(() => {
      settingStore.getAllSetting();
    });
    return {
      actionLogout,
      myAuth,
      router,
      mySetting,
      idUpdate,
      userId,
      errMsg,
      formData,
      passwordErr,
      againPasswordErr,
      ChangeConfirmationModal,
      actionShowChangePassword,
      actionChangePassword,
    };
  },
});
</script>
