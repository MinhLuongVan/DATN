<template>
  <!-- BEGIN: Top Bar -->
  <div
    class="top-bar-boxed h-[70px] md:h-[65px] z-[51] sm:borde-b-2 border-white/[0.08] mt-4 md:mt-0 -mx-3 sm:-mx-8 md:-mx-0 px-3 md:border-b-0 relative md:fixed md:inset-x-0 md:top-0 sm:px-8 md:px-10 md:pt-10 md:bg-gradient-to-b md:from-slate-100 md:to-transparent dark:md:from-darkmode-700"
  >
    <div class="h-full lg:px-40 lg:flex items-center">
      <!-- BEGIN: Logo -->
      <p class="logo -intro-x md:flex xl:w-[180px] block">
        <img
          class="logo__image h-20 w-full lg:h-auto lg:w-4/5 lg:mb-0 -lg:ml-0 lg:mt-6 cursor-pointer"
          src="../../assets/images/logo.png"
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
              @focus="showSearchDropdown"
              @blur="hideSearchDropdown"
            />
            <SearchIcon class="search__icon dark:text-slate-500" />
          </div>
          <!-- <a class="notification notification--light" href="">
          <SearchIcon class="notification__icon dark:text-slate-500" />
        </a> -->
          <div class="search-result" :class="{ show: searchDropdown }">
            <div class="search-result__content">
              <div class="search-result__content__title">Pages</div>
              <div class="mb-5">
                <a href="" class="flex items-center">
                  <div
                    class="w-8 h-8 bg-success/20 dark:bg-success/10 text-success flex items-center justify-center rounded-full"
                  >
                    <InboxIcon class="w-4 h-4" />
                  </div>
                  <div class="ml-3">Mail Settings</div>
                </a>
                <a href="" class="flex items-center mt-2">
                  <div
                    class="w-8 h-8 bg-pending/10 text-pending flex items-center justify-center rounded-full"
                  >
                    <UsersIcon class="w-4 h-4" />
                  </div>
                  <div class="ml-3">Users & Permissions</div>
                </a>
                <a href="" class="flex items-center mt-2">
                  <div
                    class="w-8 h-8 bg-primary/10 dark:bg-primary/20 text-primary/80 flex items-center justify-center rounded-full"
                  >
                    <CreditCardIcon class="w-4 h-4" />
                  </div>
                  <div class="ml-3">Transactions Report</div>
                </a>
              </div>
              <div class="search-result__content__title">Users</div>
              <div class="mb-5">
                <a
                  v-for="(faker, fakerKey) in $_.take($f(), 4)"
                  :key="fakerKey"
                  class="flex items-center mt-2"
                >
                  <div class="w-8 h-8 image-fit">
                    <img
                      alt="Enigma Tailwind HTML Admin Template"
                      class="rounded-full"
                      :src="faker.photos[0]"
                    />
                  </div>
                  <div class="ml-3">{{ faker.users[0].name }}</div>
                  <div
                    class="ml-auto w-48 truncate text-slate-500 text-xs text-right"
                  >
                    {{ faker.users[0].email }}
                  </div>
                </a>
              </div>
              <div class="search-result__content__title">Products</div>
              <a
                v-for="(faker, fakerKey) in $_.take($f(), 4)"
                :key="fakerKey"
                class="flex items-center mt-2"
              >
                <div class="w-8 h-8 image-fit">
                  <img
                    alt="Enigma Tailwind HTML Admin Template"
                    class="rounded-full"
                    :src="faker.images[0]"
                  />
                </div>
                <div class="ml-3">{{ faker.products[0].name }}</div>
                <div
                  class="ml-auto w-48 truncate text-slate-500 text-xs text-right"
                >
                  {{ faker.products[0].category }}
                </div>
              </a>
            </div>
          </div>
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
              <span v-if="carts.length <= 0 " class="text-center">Giỏ hàng của bạn đang trống!</span>
              <div v-else class="notification-content__title text-lg text-orange-400">
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
              <div class="text-xs text-white mt-0.5 dark:text-slate-500">
                {{ currentUser.email }}
              </div>
            </div>
            <div
              class="flex dropdown-item text-white text-sm hover:bg-white/5 p-3"
            >
              <LockIcon class="w-4 h-4 mr-2" /> Đổi mật khẩu
            </div>
            <div
              class="flex dropdown-item text-white text-sm hover:bg-white/5 p-3"
            >
              <ToggleRightIcon class="w-4 h-4 mr-2 mt-0.5" /> Đăng xuất
            </div>
          </DropdownMenu>
        </Dropdown>
      </div>
      <!-- END: Account Menu -->

      <!-- BEGIN: Login-Register -->

      <div v-else>
        <nav  class="-intro-x h-[55px] mb-2 pt-2">
        <div class="text-black hidden lg:block">
          <a class="hover:text-red-500 lg:text-base" href="/register"
            >Đăng ký</a
          >
        </div>
        <div class="text-black hidden lg:block">
          <a class="hover:text-red-500 lg:text-base" href="/login">Đăng nhập</a>
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
      <a href="/contact" class="hover:text-lime-500 mr-6 text-base">LIÊN HỆ</a>
    </nav>
  </div>
  <!-- END: Top Bar -->
</template>

<script lang="ts">
import { computed, onMounted, ref } from "vue";
import { defineComponent } from "vue";
import { useRouter } from "vue-router";
import Cookies from "js-cookie";
import { useAuthStore } from "../../stores/authStore";
import { setNotificationToastMessage } from "../../utils/myFunction";
import cartService from "../../services/cartService";
import { cartInfor } from "../../types/cartType";
import { CartModel } from "../../model/cartModel";
import {useCartStore} from "../../stores/cartStore";
export default defineComponent({
  name: "top-bar",
  setup() {
    const searchDropdown = ref(false);
    const router = useRouter();
    const myCartStore = useCartStore();
    const authStore = useAuthStore();
    const carts = ref<cartInfor[]>([]);
    const myCart: any = computed(() => myCartStore.carts) 
    const currentUser = computed(() => {
      return authStore.currentUser;
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
      const response = await cartService.delete(itemDelete, authStore.token);
      if (response.data.error) {
        setNotificationToastMessage("Xóa dữ liệu thất bại", false);
      } else {
        myCartStore.getAllCart();
      }
    }

    async function actionLogout() {
      Cookies.remove("Authorization");
      await router.push("/login");
    }
    onMounted(() => {
      myCartStore.getAllCart();
    });

    return {
      router,
      carts,
      myCart,
      currentUser,
      searchDropdown,
      showSearchDropdown,
      hideSearchDropdown,
      actionLogout,
      actionDeleteProduct,
    };
  },
});
</script>
