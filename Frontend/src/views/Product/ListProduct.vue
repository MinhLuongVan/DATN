<template>
  <div class="">
    <!-- BEGIN: Page Layout -->
    <div class="intro-y py-3 lg:px-52 mt-3 lg:mt-5">
      <div class="intro-y flex lg:mt-0 items-center">
        <div class="flex cursor-pointer" @click="router.push('/')">
          <HomeIcon class="w-5 h-5 mt-0.5"></HomeIcon>
          <h2 class="text-lg mx-2 hover:text-lime-500">Trang chủ</h2>
        </div>
        <span>--></span>
        <h2 class="text-lg ml-2 text-lime-500">Tất cả sản phẩm</h2>
      </div>
      <div class="intro-y grid grid-cols-11 gap-8 mt-4">
        <!-- BEGIN: slide show  -->
        <div class="intro-y lg:col-span-3 col-span-12">
          <div class="w-full">
            <button
              class="w-full text-base font-medium text-white bg-lime-500 p-2"
            >
              DANH MỤC SẢN PHẨM
            </button>
            <ul class="text-base border">
              <li
                class="px-3 py-2 border-b hover:text-lime-500 flex cursor-pointer"
                @click="initGetAllProductByCastus()"
                :class="`${castus.length > 0 ? 'text-lime-500' : ''}`"
              >
                Xương rồng
              </li>
              <li
                class="px-3 py-2 border-b hover:text-lime-500 cursor-pointer"
                @click="initGetAllProductByStoneLotus()"
                :class="`${stonelotus.length > 0 ? 'text-lime-500' : ''}`"
              >
                Sen đá
              </li>
              <li
                class="px-3 py-2 border-b hover:text-lime-500 cursor-pointer"
                :class="`${officetree.length > 0 ? 'text-lime-500' : ''}`"
                @click="initGetAllProductByOfficeTree()"
              >
                Cây văn phòng
              </li>
              <li
                class="px-3 py-2 border-b hover:text-lime-500 cursor-pointer"
                @click="initGetAllProductByHangingTree()"
                :class="`${hangingtree.length > 0 ? 'text-lime-500' : ''}`"
              >
                Cây treo
              </li>
              <li
                class="px-3 py-2 hover:text-lime-500 cursor-pointer"
                @click="initGetAllProductByPot()"
                :class="`${pots.length > 0 ? 'text-lime-500' : ''}`"
              >
                Chậu cảnh
              </li>
            </ul>
          </div>
          <div class="w-full mt-5 border">
            <button
              class="w-full text-base font-medium text-white bg-lime-500 p-2"
            >
              SẢN PHẨM KHUYẾN MÃI
            </button>
            <div
              v-for="(item, index) in sales"
              :key="index"
              class="intro-y mt-2"
            >
              <div class="lg:border-y lg:px-2 mb-2">
                <div class="p-2 flex">
                  <div
                    class="h-20 w-20 image-fit overflow-hidden before:block before:absolute before:w-full before:h-full before:top-0 before:left-0 before:z-10 before:bg-gradient-to-t before:from-black before:to-black/10"
                  >
                    <img
                      alt="Midone - HTML Admin Template"
                      class=""
                      :src="item.image"
                    />
                  </div>
                  <div class="text-slate-600 dark:text-slate-500 ml-3 py-4">
                    <div class="flex items-center">
                      {{ item.name }}
                    </div>
                    <div class="flex items-center mt-2">
                      Giá: {{ item.price }}vnđ
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="intro-y lg:col-span-8 col-span-12">
          <div class="flex border-b pb-4 justify-between">
            <div class="flex">
              <GiftIcon></GiftIcon>
              <ListIcon class="ml-5"></ListIcon>
            </div>
            <div class="flex">
              <p>Sắp xếp theo :</p>
              <select
                class="rounded-full py-1 -mt-1 text-sm"
                aria-label="Default select example"
              >
                <option selected>Mặc định</option>
                <option value="1">Giá(cao-thấp)</option>
                <option value="2">Giá(thấp-cao)</option>
                <option value="3">Tên(a-z)</option>
                <option value="4">Tên(z-a)</option>
              </select>
            </div>
          </div>
          <!-- BEGIN: product -->
          <div class="intro-y grid grid-cols-9 gap-6">
            <div
              class="intro-y lg:col-span-3 col-span-9 mt-5"
              v-for="(item, index) in officetree"
              :key="index"
            >
              <div class="w-full h-auto border rounded-xl">
                <div class="item-container">
                  <img
                    :src="item.image"
                    alt="/"
                    class="w-full h-60 rounded-t-xl"
                  />
                  <span
                    v-if="item.discount > 0"
                    class="absolute top-0 bg-pending/80 text-white text-xs ml-3 mt-4 px-3 py-1 rounded z-10"
                    >{{ item.discount }}%
                  </span>
                  <div class="overlay">
                    <div class="flex justify-center">
                      <ShoppingCartIcon
                        class="w-5 h-5 mx-3 hover:text-lime-500"
                      ></ShoppingCartIcon>
                      <EyeIcon class="w-5 h-5 hover:text-lime-500"></EyeIcon>
                    </div>
                  </div>
                </div>
                <div
                  class="w-full h-6 text-center cursor-pointer mt-4 text-base hover:text-lime-400"
                >
                  <span>{{ item.name }}</span>
                </div>
                <div class="text-center mb-4 mt-4 text-base">
                  <span class="text-orange-400">{{ item.price }}vnđ</span>
                  <span class="text-gray-300 px-3"><del>250.000đ</del></span>
                </div>
              </div>
            </div>
          </div>
          <!-- END: product -->
          <!-- BEGIN: product castus -->
          <div class="intro-y grid grid-cols-9 gap-6">
            <div
              class="intro-y lg:col-span-3 col-span-9 mt-4"
              v-for="(item, index) in castus"
              :key="index"
            >
              <div class="w-full h-auto border rounded-xl">
                <div class="item-container">
                  <img
                    :src="item.image"
                    alt="/"
                    class="w-full h-60 rounded-t-xl"
                  />
                  <span
                    v-if="item.discount > 0"
                    class="absolute top-0 bg-pending/80 text-white text-xs ml-3 mt-4 px-3 py-1 rounded z-10"
                    >{{ item.discount }}%
                  </span>
                  <div class="overlay">
                    <div class="flex justify-center">
                      <ShoppingCartIcon
                        class="w-5 h-5 mx-3 hover:text-lime-500"
                      ></ShoppingCartIcon>
                      <EyeIcon class="w-5 h-5 hover:text-lime-500"></EyeIcon>
                    </div>
                  </div>
                </div>
                <div
                  class="w-full h-6 text-center cursor-pointer mt-4 text-base hover:text-lime-400"
                >
                  <span>{{ item.name }}</span>
                </div>
                <div class="text-center mb-4 mt-4 text-base">
                  <span class="text-orange-400">{{ item.price }}vnđ</span>
                  <span class="text-gray-300 px-3"><del>250.000đ</del></span>
                </div>
              </div>
            </div>
          </div>
          <!-- END: product castus -->
          <!-- BEGIN: product stone lotus -->
          <div class="intro-y grid grid-cols-9 gap-6">
            <div
              class="intro-y lg:col-span-3 col-span-9 mt-4"
              v-for="(item, index) in stonelotus"
              :key="index"
            >
              <div class="w-full h-auto border rounded-xl">
                <div class="item-container">
                  <img
                    :src="item.image"
                    alt="/"
                    class="w-full h-60 rounded-t-xl"
                  />
                  <span
                    v-if="item.discount > 0"
                    class="absolute top-0 bg-pending/80 text-white text-xs ml-3 mt-4 px-3 py-1 rounded z-10"
                    >{{ item.discount }}%
                  </span>
                  <div class="overlay">
                    <div class="flex justify-center">
                      <ShoppingCartIcon
                        class="w-5 h-5 mx-3 hover:text-lime-500"
                      ></ShoppingCartIcon>
                      <EyeIcon class="w-5 h-5 hover:text-lime-500"></EyeIcon>
                    </div>
                  </div>
                </div>
                <div
                  class="w-full h-6 text-center cursor-pointer mt-4 text-base hover:text-lime-400"
                >
                  <span>{{ item.name }}</span>
                </div>
                <div class="text-center mb-4 mt-4 text-base">
                  <span class="text-orange-400">{{ item.price }}vnđ</span>
                  <span class="text-gray-300 px-3"><del>250.000đ</del></span>
                </div>
              </div>
            </div>
          </div>
          <!-- END: product stone lotus -->
          <!-- BEGIN: product hanging tree -->
          <div class="intro-y grid grid-cols-9 gap-6">
            <div
              class="intro-y lg:col-span-3 col-span-9 mt-4"
              v-for="(item, index) in hangingtree"
              :key="index"
            >
              <div class="w-full h-auto border rounded-xl">
                <div class="item-container">
                  <img
                    :src="item.image"
                    alt="/"
                    class="w-full h-60 rounded-t-xl"
                  />
                  <span
                    v-if="item.discount > 0"
                    class="absolute top-0 bg-pending/80 text-white text-xs ml-3 mt-4 px-3 py-1 rounded z-10"
                    >{{ item.discount }}%
                  </span>
                  <div class="overlay">
                    <div class="flex justify-center">
                      <ShoppingCartIcon
                        class="w-5 h-5 mx-3 hover:text-lime-500"
                      ></ShoppingCartIcon>
                      <EyeIcon class="w-5 h-5 hover:text-lime-500"></EyeIcon>
                    </div>
                  </div>
                </div>
                <div
                  class="w-full h-6 text-center cursor-pointer mt-4 text-base hover:text-lime-400"
                >
                  <span>{{ item.name }}</span>
                </div>
                <div class="text-center mb-4 mt-4 text-base">
                  <span class="text-orange-400">{{ item.price }}vnđ</span>
                  <span class="text-gray-300 px-3"><del>250.000đ</del></span>
                </div>
              </div>
            </div>
          </div>
          <!-- END: product hanging tree -->
          <!-- BEGIN: product pot -->
          <div class="intro-y grid grid-cols-9 gap-6">
            <div
              class="intro-y lg:col-span-3 col-span-9 mt-4"
              v-for="(item, index) in pots"
              :key="index"
            >
              <div class="w-full h-auto border rounded-xl">
                <div class="item-container">
                  <img
                    :src="item.image"
                    alt="/"
                    class="w-full h-60 rounded-t-xl"
                  />
                  <span
                    v-if="item.discount > 0"
                    class="absolute top-0 bg-pending/80 text-white text-xs ml-3 mt-4 px-3 py-1 rounded z-10"
                    >{{ item.discount }}%
                  </span>
                  <div class="overlay">
                    <div class="flex justify-center">
                      <ShoppingCartIcon
                        class="w-5 h-5 mx-3 hover:text-lime-500"
                      ></ShoppingCartIcon>
                      <EyeIcon class="w-5 h-5 hover:text-lime-500"></EyeIcon>
                    </div>
                  </div>
                </div>
                <div
                  class="w-full h-6 text-center cursor-pointer mt-4 text-base hover:text-lime-400"
                >
                  <span>{{ item.name }}</span>
                </div>
                <div class="text-center mb-4 mt-4 text-base">
                  <span class="text-orange-400">{{ item.price }}vnđ</span>
                  <span class="text-gray-300 px-3"><del>250.000đ</del></span>
                </div>
              </div>
            </div>
          </div>
          <!-- END: product pot -->
        </div>
      </div>
    </div>
    <bottom />
    <!-- END: Page Layout -->
  </div>
</template>
<script lang="ts">
import { defineComponent, onMounted, ref } from "vue";
import { useRouter } from "vue-router";
import { useAuthStore } from "../../stores/authStore";
import { productInfor } from "../../types/productType";
import { setNotificationToastMessage } from "../../utils/myFunction";
import bottom from "../../views/Footer/Footer.vue";
import productService from "../../services/productService";
export default defineComponent({
  name: "Product",
  components: {
    bottom,
  },
  setup() {
    const router = useRouter();
    const sales = ref<productInfor[]>([]);
    const officetree = ref<productInfor[]>([]);
    const castus = ref<productInfor[]>([]);
    const stonelotus = ref<productInfor[]>([]);
    const hangingtree = ref<productInfor[]>([]);
    const pots = ref<productInfor[]>([]);
    const authStore = useAuthStore();

    // Get all product sale
    async function initGetAllProductBySale() {
      const data = {} as productInfor;
      const response = await productService.findBySale(data, authStore.token);
      // products.value = response.data.values;
      if (response.data.success) {
        sales.value = response.data.values;
      } else {
        setNotificationToastMessage("Tải dữ liệu thât bại", false);
      }
    }

    // Get all product by category
    async function initGetAllProductByOfficeTree() {
      const data = {} as productInfor;
      const response = await productService.findByCategory(
        data,
        authStore.token
      );
      // products.value = response.data.values;
      if (response.data.success) {
        officetree.value = response.data.values;
      } else {
        setNotificationToastMessage("Tải dữ liệu thât bại", false);
      }
    }

    // Get all product by category = xương rồng
    async function initGetAllProductByCastus() {
      const data = {} as productInfor;
      const response = await productService.findByCastus(data, authStore.token);
      // products.value = response.data.values;
      if (response.data.success) {
        castus.value = response.data.values;
      } else {
        setNotificationToastMessage("Tải dữ liệu thât bại", false);
      }
    }

    // Get all product by category = sen đá
    async function initGetAllProductByStoneLotus() {
      const data = {} as productInfor;
      const response = await productService.findByStoneLotus(
        data,
        authStore.token
      );
      // products.value = response.data.values;
      if (response.data.success) {
        stonelotus.value = response.data.values;
      } else {
        setNotificationToastMessage("Tải dữ liệu thât bại", false);
      }
    }

    // Get all product by category = cây treo
    async function initGetAllProductByHangingTree() {
      const data = {} as productInfor;
      const response = await productService.findByHangingTree(
        data,
        authStore.token
      );
      // products.value = response.data.values;
      if (response.data.success) {
        hangingtree.value = response.data.values;
      } else {
        setNotificationToastMessage("Tải dữ liệu thât bại", false);
      }
    }

    // Get all product by category = chậu cảnh
    async function initGetAllProductByPot() {
      const data = {} as productInfor;
      const response = await productService.findByPot(data, authStore.token);
      // products.value = response.data.values;
      if (response.data.success) {
        pots.value = response.data.values;
      } else {
        setNotificationToastMessage("Tải dữ liệu thât bại", false);
      }
    }
    onMounted(() => {
      initGetAllProductBySale();
    });
    return {
      router,
      sales,
      officetree,
      castus,
      stonelotus,
      hangingtree,
      pots,
      initGetAllProductByOfficeTree,
      initGetAllProductByCastus,
      initGetAllProductByStoneLotus,
      initGetAllProductByHangingTree,
      initGetAllProductByPot,
    };
  },
});
</script>
