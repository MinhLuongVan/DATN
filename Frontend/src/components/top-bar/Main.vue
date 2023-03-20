<template>
  <!-- BEGIN: Top Bar -->
  <div
    class="top-bar-boxed h-[70px] md:h-[65px] z-[51] sm:borde-b-2 border-white/[0.08] mt-4 md:mt-0 -mx-3 sm:-mx-8 md:-mx-0 px-3 md:border-b-0 relative md:fixed md:inset-x-0 md:top-0 sm:px-8 md:px-10 md:pt-10 md:bg-gradient-to-b md:from-slate-100 md:to-transparent dark:md:from-darkmode-700"
  >
    <div class="h-full lg:px-40 lg:flex items-center">
      <!-- BEGIN: Logo -->
      <p
        v-for="item in mySetting"
        :key="item"
        class="logo -intro-x md:flex xl:w-[180px] block"
      >
        <img
          class="logo__image h-20 w-full lg:h-auto lg:w-4/5 lg:mb-0 -lg:ml-0 lg:mt-6 cursor-pointer"
          :src="item.logoUser"
          @click="router.push('/')"
        />
      </p>
      <!-- END: Logo -->
      <div class="flex ml-16 lg:ml-0">
        <!-- BEGIN: Search -->
        <div class="intro-x relative sm:mt-1 lg:mt-0 lg:mr-16 mr-5 lg:ml-40">
          <div class="search lg:block">
            <input
              type="text"
              class="search__input text-lime-500 lg:py-2.5 py-1.5 lg:text-base text-sm sm:mt-1"
              placeholder="Tìm kiếm..."
              v-model="searchKeyword"
              v-on:keyup.enter="actionSearchProduct"
            />
            <SearchIcon
              @click="actionSearchProduct"
              class="search__icon dark:text-slate-500"
            />
          </div>
          <!-- <a class="notification notification--light" href="">
          <SearchIcon class="notification__icon dark:text-slate-500" />
        </a> -->
        </div>
        <!-- END: Search -->

        <!-- BEGIN: Shopping-cart -->
        <Dropdown class="intro-x mr-5">
          <span
            class="px-1.5 py-0.5 bg-lime-500 border-lime-500 text-white rounded-full ml-3"
            >{{ myCart.length }}</span
          >

          <DropdownToggle
            tag="div"
            role="button"
            class="notification cursor-pointer"
          >
            <Shopping-cartIcon
              class="notification__icon lg:mb-0 text-lime-500 dark:text-slate-500"
            />
          </DropdownToggle>
          <DropdownMenu class="notification-content pt-2">
            <DropdownContent tag="div" class="notification-content__box">
              <span v-if="myCart.length <= 0" class="text-center"
                >Giỏ hàng của bạn đang trống!</span
              >
              <div
                v-else
                class="notification-content__title text-lg text-orange-400"
              >
                Giỏ hàng
              </div>
              <div
                v-for="(item, index) in myCart"
                :key="index"
                class="cursor-pointer relative flex justify-between items-center border border-orange-300 p-3 mt-3"
              >
                <div class="flex">
                  <div class="w-12 h-12 flex-none image-fit mr-1">
                    <img
                      alt="Enigma Tailwind HTML Admin Template"
                      class="rounded-full"
                      :src="item.productImage"
                    />
                  </div>
                  <div class="ml-2 overflow-hidden">
                    <div class="items-center">
                      <span class="font-medium truncate mr-5">{{
                        item.productName
                      }}</span>
                    </div>
                    <div class="flex">
                      <div class="text-slate-400 mt-0.5 whitespace-nowrap">
                        x{{ item.quantity }}
                      </div>
                      <div class="w-full truncate text-slate-500 mx-3 mt-0.5">
                        {{ item.totalMoney }}vnđ
                      </div>
                    </div>
                  </div>
                </div>
                <XIcon
                  class="w-5 h-5 text-red-500 border border-red-500 rounded-full"
                  @click="actionDeleteProduct(item)"
                ></XIcon>
              </div>
              <div v-if="myCart.length > 0" class="mt-3">
                <button
                  class="btn text-slate-100 bg-lime-500 border-slime-500 mr-3"
                  @click="router.push('/product/cart')"
                >
                  Giỏ hàng
                </button>
                <button
                  class="btn text-slate-100 bg-lime-500 border-slime-500"
                  @click="router.push('/checkout')"
                >
                  Thanh toán
                </button>
              </div>
            </DropdownContent>
          </DropdownMenu>
        </Dropdown>

        <!-- END: Shopping-cart -->
      </div>
      <!-- BEGIN: Account Menu -->
      <div v-if="currentUser._id" class="lg:ml-10">
        <Dropdown class="intro-x w-8 h-8 pt-4 lg:pt-2.5">
          <DropdownToggle
            tag="div"
            role="button"
            class="w-8 h-8 -mt-2 rounded-full overflow-hidden shadow-lg image-fit zoom-in scale-110"
          >
            <img
              alt="Enigma Tailwind HTML Admin Template"
              src="../../assets/images/no-avatar.png"
            />
          </DropdownToggle>
          <DropdownMenu class="w-44 lg:w-56 bg-slate-500 rounded-md">
            <div class="text-white p-3 border-b border-white/[0.08]">
              <div class="font-medium">{{ currentUser.name }}</div>
              <div class="text-white mt-0.5 dark:text-slate-500">
                {{ currentUser.email }}
              </div>
            </div>
            <div
              class="flex dropdown-item text-white text-sm hover:bg-white/5 p-3 cursor-pointer"
              @click="actionShowChangePassword(userId)"
            >
              <LockIcon class="w-4 h-4 mr-2" /> Đổi mật khẩu
            </div>
            <div
              class="flex dropdown-item text-white text-sm hover:bg-white/5 p-3"
              @click="actionLogout()"
            >
              <ToggleRightIcon class="w-4 h-4 mr-2 mt-0.5 cursor-pointer" />
              Đăng xuất
            </div>
          </DropdownMenu>
        </Dropdown>
      </div>
      <!-- END: Account Menu -->

      <!-- BEGIN: Login-Register -->

      <div v-else>
        <nav class="-intro-x h-[55px] mb-2 pt-2">
          <div class="text-black hidden lg:block">
            <a class="hover:text-red-500 lg:text-base" href="/register"
              >Đăng ký</a
            >
          </div>
          <div class="text-black hidden lg:block">
            <a class="hover:text-red-500 lg:text-base" href="/login"
              >Đăng nhập</a
            >
          </div>
        </nav>
      </div>
      <!-- END: Login-Register -->
    </div>
    <nav
      class="-intro-x h-[55px] lg:mt-7 hidden lg:flex float-right pr-36 font-medium"
    >
      <a href="/" class="hover:text-lime-500 mr-6 text-base">TRANG CHỦ</a>
      <a href="/introduce" class="hover:text-lime-500 mr-6 text-base"
        >GIỚI THIỆU</a
      >
      <a href="/listproduct" class="hover:text-lime-500 mr-6 text-base"
        >SẢN PHẨM</a
      >
      <a href="/news" class="hover:text-lime-500 mr-6 text-base">TIN TỨC</a>
      <a href="/contact" class="hover:text-lime-500 mr-6 text-base">LIÊN HỆ</a>
    </nav>

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
            <label class="text-base">Mật khẩu mới</label>
            <input
              type="text"
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
              type="text"
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
  <!-- END: Top Bar -->
</template>

<script lang="ts">
import { computed, onMounted, reactive, ref } from "vue";
import { defineComponent } from "vue";
import { useRouter } from "vue-router";
import Cookies from "js-cookie";
import { useAuthStore } from "../../stores/authStore";
import {
  REGEXAGAiNPASSWORD,
  REGEXPASSWORD,
  REQUIRED,
  setNotificationToastMessage,
} from "../../utils/myFunction";
import cartService from "../../services/cartService";
import { cartInfor } from "../../types/cartType";
import { CartModel } from "../../model/cartModel";
import { useCartStore } from "../../stores/cartStore";
import { useSettingStore } from "../../stores/settingStore";
import { useProductStore } from "../../stores/productStore";
import userService from "../../services/userService";
import { userInfor } from "../../types/userType";
export default defineComponent({
  name: "top-bar",
  setup() {
    const searchDropdown = ref(false);
    const productStore = useProductStore();
    const router = useRouter();
    const myCartStore = useCartStore();
    const authStore = useAuthStore();
    const carts = ref<cartInfor[]>([]);
    const myCart: any = computed(() => myCartStore.carts);
    const settingStore = useSettingStore();
    const mySetting: any = computed(() => settingStore.settings);
    const currentUser: any = computed(() => {
      return authStore.currentUser;
    });
    const searchKeyword = ref("");
    const ChangeConfirmationModal = ref(false);
    const idUpdate = ref("");
    const errMsg = ref(false);
    const userId = authStore.currentUser._id;
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

    const showSearchDropdown = () => {
      searchDropdown.value = true;
    };
    const hideSearchDropdown = () => {
      searchDropdown.value = false;
    };

    // Delete product
    async function actionDeleteProduct(item: cartInfor) {
      const itemDelete = new CartModel();
      itemDelete._id = item._id;
      const response = await cartService.delete(
        itemDelete,
        authStore.currentUser.Token
      );
      if (response.data.error) {
        setNotificationToastMessage("Xóa dữ liệu thất bại", false);
      } else {
        myCartStore.getAllCart();
      }
    }

    function actionSearchProduct() {
      productStore.searchKeyword = searchKeyword.value;
    }

    async function actionLogout() {
      Cookies.remove("Authorization");
      await router.push("/login");
    }

    // lấy id
    async function actionShowChangePassword(userId: string) {
      const itemFindId: any = { _id: userId };
      const response = await userService.findId(
        itemFindId,
        authStore.currentUser.Token
      );
      idUpdate.value = response.data.values._id;
      formData.username = response.data.values.username;
      formData.email = response.data.values.email;
      // formData.password = response.data.values.password;
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
        authStore.currentUser.Token
      );
      if (response.data.success) {
        ChangeConfirmationModal.value = false;
        authStore.initGetAllUser();
        actionLogout();
      } else {
        setNotificationToastMessage("Cập nhật dữ liệu thất bại", false);
      }
    }

    onMounted(() => {
      myCartStore.getAllCart();
      settingStore.getAllSetting();
    });

    return {
      router,
      carts,
      myCart,
      currentUser,
      mySetting,
      searchDropdown,
      showSearchDropdown,
      hideSearchDropdown,
      actionLogout,
      actionDeleteProduct,
      actionSearchProduct,
      searchKeyword,
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
