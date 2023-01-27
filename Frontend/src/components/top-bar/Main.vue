<template>
  <!-- BEGIN: Top Bar -->
  <div
    class="top-bar-boxed h-[70px] md:h-[65px] z-[51] sm:borde-b-2 border-white/[0.08] mt-4 md:mt-0 -mx-3 sm:-mx-8 md:-mx-0 px-3 md:border-b-0 relative md:fixed md:inset-x-0 md:top-0 sm:px-8 md:px-10 md:pt-10 md:bg-gradient-to-b md:from-slate-100 md:to-transparent dark:md:from-darkmode-700"
  >
    <div class="h-full lg:px-40 lg:flex items-center">
      <!-- BEGIN: Logo -->
      <p class="logo -intro-x md:flex xl:w-[180px] block">
        <img
          class="logo__image h-20 w-full lg:h-auto lg:w-4/5  lg:mb-0 lg:ml-0 lg:mt-6 cursor-pointer"
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
      <Dropdown class="intro-x mr-7">
        <span
          class="px-1.5 py-0.5 bg-lime-500 border-lime-500 text-white rounded-full ml-3"
          >0</span
        >
        <DropdownToggle
          tag="div"
          role="button"
          class="notification cursor-pointer"
        >
          <Shopping-cartIcon
            class="notification__icon lg:mb-0  text-lime-500 dark:text-slate-500"
          />
        </DropdownToggle>
        <DropdownMenu class="notification-content pt-2 ">
          <DropdownContent tag="div" class="notification-content__box">
            <div class="notification-content__title">Giỏ hàng</div>
            <div
              v-for="(faker, fakerKey) in $_.take($f(), 5)"
              :key="fakerKey"
              class="cursor-pointer relative flex items-center"
              :class="{ 'mt-5': fakerKey }"
            >
              <div class="w-12 h-12 flex-none image-fit mr-1">
                <img
                  alt="Enigma Tailwind HTML Admin Template"
                  class="rounded-full"
                  :src="faker.photos[0]"
                />
                <div
                  class="w-3 h-3 bg-success absolute right-0 bottom-0 rounded-full border-2 border-white"
                ></div>
              </div>
              <div class="ml-2 overflow-hidden">
                <div class="flex items-center">
                  <a href="javascript:;" class="font-medium truncate mr-5">{{
                    faker.users[0].name
                  }}</a>
                  <div class="text-xs text-slate-400 ml-auto whitespace-nowrap">
                    {{ faker.times[0] }}
                  </div>
                </div>
                <div class="w-full truncate text-slate-500 mt-0.5">
                  {{ faker.news[0].shortContent }}
                </div>
              </div>
            </div>
          </DropdownContent>
        </DropdownMenu>
      </Dropdown>

      <!-- END: Shopping-cart -->
      </div>
      <!-- BEGIN: Account Menu -->
      <!-- <Dropdown class="intro-x w-8 h-8">
        <DropdownToggle
          tag="div"
          role="button"
          class="lg:w-8 lg:h-8 w-4 h-4 rounded-full overflow-hidden shadow-lg image-fit zoom-in scale-110"
        >
          <img
           src="../../assets/images/no-avatar.png"
          />
        </DropdownToggle>
        <DropdownMenu class="w-56">
          <DropdownContent
            class="bg-white before:block before:absolute before:bg-black before:inset-0 before:rounded-md before:z-[-1] text-gray-500"
          >
            <DropdownHeader tag="div" class="!font-normal">
              <div class="font-medium">
                {{ currentUser.username }}
              </div>
              <div class="text-xs text-gray-500 mt-0.5 dark:text-slate-500">
                A person with a good job
              </div>
            </DropdownHeader>
            <DropdownDivider class="border-gray/[0.08]" />
            <DropdownItem class="dropdown-item hover:bg-white/5">
              <UserIcon class="w-4 h-4 mr-2" /> Profile</DropdownItem
            >
            <DropdownItem class="dropdown-item hover:bg-white/5"
            @click="router.push('/register')"
            >
              <PlusIcon class="w-4 h-4 mr-2" /> Add Account</DropdownItem
            >
            <DropdownDivider class="border-gray/[0.08]" />
            <DropdownItem
              class="dropdown-item hover:bg-white/5"
              @click="actionLogout"
            >
              <Log-outIcon class="w-4 h-4 mr-2" /> Logout</DropdownItem
            >
          </DropdownContent>
        </DropdownMenu>
      </Dropdown> -->
      <!-- END: Account Menu -->

      <!-- BEGIN: Login-Register -->

      <nav class="-intro-x h-[55px] mb-2">
        <div class="text-black hidden lg:block">
          <a class="hover:text-red-500 lg:text-base" href="/register"
            >Đăng ký</a
          >
        </div>
        <div class="text-black hidden lg:block">
          <a class="hover:text-red-500 lg:text-base" href="/login">Đăng nhập</a>
        </div>
      </nav>
      <!-- END: Login-Register -->
    </div>
    <nav
      class="-intro-x h-[55px] lg:mt-7 hidden lg:flex float-right pr-44 font-medium"
    >
      <a href="/" class="hover:text-lime-500 mr-6 text-base">TRANG CHỦ</a>
      <a href="/introduce" class="hover:text-lime-500 mr-6 text-base"
        >GIỚI THIỆU</a
      >
      <a href="/listproduct" class="hover:text-lime-500 mr-6 text-base">SẢN PHẨM</a>
      <a href="/contact" class="hover:text-lime-500 mr-6 text-base">LIÊN HỆ</a>
    </nav>
  </div>
  <!-- END: Top Bar -->
</template>

<script lang="ts">
import { computed, ref } from "vue";
import { defineComponent } from "vue";
import { useRouter } from "vue-router";
import Cookies from "js-cookie";
import { useAuthStore } from "../../stores/authStore";
export default defineComponent({
  name: "top-bar",
  setup() {
    const searchDropdown = ref(false);
    const router = useRouter();
    const authStore = useAuthStore();

    const currentUser = computed(() => {
      return authStore.currentUser.userInfor;
    });

    const showSearchDropdown = () => {
      searchDropdown.value = true;
    };
    const hideSearchDropdown = () => {
      searchDropdown.value = false;
    };
    async function actionLogout() {
      Cookies.remove("Authorization");
      await router.push("/login");
    }

    return {
      router,
      currentUser,
      searchDropdown,
      showSearchDropdown,
      hideSearchDropdown,
      actionLogout,
    };
  },
});
</script>
