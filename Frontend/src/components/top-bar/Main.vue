<template>
  <!-- BEGIN: Top Bar -->
  <div
    class="top-bar-boxed h-[70px] md:h-[65px] z-[51] border-b border-white/[0.08] mt-12 md:mt-0 -mx-3 sm:-mx-8 md:-mx-0 px-3 md:border-b-0 relative md:fixed md:inset-x-0 md:top-0 sm:px-8 md:px-10 md:pt-10 md:bg-gradient-to-b md:from-slate-100 md:to-transparent dark:md:from-darkmode-700"
  >
    <div class="h-full flex items-center">
      <!-- BEGIN: Logo -->
      <a href="" class="logo -intro-x hidden md:flex xl:w-[180px] block">
        <img
          alt="Enigma Tailwind HTML Admin Template"
          class="logo__image w-6"
          src="@/assets/images/logo.svg"
        />
        <span class="logo__text text-white font-serif text-xl ml-3"> My Blog </span>
      </a>
      <!-- END: Logo -->
      <!-- BEGIN: Breadcrumb -->
      <nav aria-label="breadcrumb" class="-intro-x h-[45px] mr-auto">
        <ol class="breadcrumb breadcrumb-light">
          <li class="breadcrumb-item"><a href="#">Application</a></li>
          <li class="breadcrumb-item active" aria-current="page">Home</li>
        </ol>
      </nav>
      <!-- END: Breadcrumb -->
      <!-- BEGIN: Search -->
      <div class="intro-x relative mr-3 sm:mr-6">
        <div class="search hidden sm:block">
          <input
            type="text"
            class="search__input form-control border-transparent"
            placeholder="Search..."
            @focus="showSearchDropdown"
            @blur="hideSearchDropdown"
          />
          <SearchIcon class="search__icon dark:text-slate-500" />
        </div>
        <a class="notification notification--light sm:hidden" href="">
          <SearchIcon class="notification__icon dark:text-slate-500" />
        </a>
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
                href
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
              href
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
      <!-- BEGIN: Notifications -->
      <Dropdown class="intro-x mr-4 sm:mr-6">
        <DropdownToggle
          tag="div"
          role="button"
          class="notification notification--bullet cursor-pointer"
        >
          <BellIcon class="notification__icon dark:text-slate-500" />
        </DropdownToggle>
        <DropdownMenu class="notification-content pt-2">
          <DropdownContent tag="div" class="notification-content__box">
            <div class="notification-content__title">Notifications</div>
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
      <!-- END: Notifications -->
      <!-- BEGIN: Account Menu -->
      <Dropdown class="intro-x w-8 h-8">
        <DropdownToggle
          tag="div"
          role="button"
          class="w-8 h-8 rounded-full overflow-hidden shadow-lg image-fit zoom-in scale-110"
        >
          <img
           src="../../assets/images/no-avatar.png"
          />
        </DropdownToggle>
        <DropdownMenu class="w-56">
          <DropdownContent
            class="bg-primary/80 before:block before:absolute before:bg-black before:inset-0 before:rounded-md before:z-[-1] text-white"
          >
            <DropdownHeader tag="div" class="!font-normal">
              <div class="font-medium">
                {{ currentUser.username }}
              </div>
              <div class="text-xs text-white/60 mt-0.5 dark:text-slate-500">
                A person with a good job
              </div>
            </DropdownHeader>
            <DropdownDivider class="border-white/[0.08]" />
            <DropdownItem class="dropdown-item hover:bg-white/5">
              <UserIcon class="w-4 h-4 mr-2" /> Profile</DropdownItem
            >
            <DropdownItem class="dropdown-item hover:bg-white/5"
            @click="router.push('/register')"
            >
              <PlusIcon class="w-4 h-4 mr-2" /> Add Account</DropdownItem
            >
            <DropdownDivider class="border-white/[0.08]" />
            <DropdownItem
              class="dropdown-item hover:bg-white/5"
              @click="actionLogout"
            >
              <Log-outIcon class="w-4 h-4 mr-2" /> Logout</DropdownItem
            >
          </DropdownContent>
        </DropdownMenu>
      </Dropdown>
      <!-- END: Account Menu -->
    </div>
  </div>
  <!-- END: Top Bar -->
</template>

<script lang="ts">
import { computed, ref } from "vue";
import { defineComponent } from "vue";
import { useRouter } from 'vue-router';
import Cookies from 'js-cookie';
import {useAuthStore} from '../../stores/authStore'
export default defineComponent ({
  name: "Main",
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
     Cookies.remove('Authorization');
      await router.push('/login')
    }; 
    
   
    return {
      router,
      currentUser,
      searchDropdown,
      showSearchDropdown,
      hideSearchDropdown,
      actionLogout
    }
  },
});
</script>
