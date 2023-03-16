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
                v-if="textColor"
                class="px-3 py-2 border-b hover:text-lime-500 flex cursor-pointer text-lime-500"
                @click="showTree = 'XuongRong'"
                :class="`${showTree === 'XuongRong' ? 'text-lime-500' : ''}`"
              >
                Xương rồng
              </li>
              <li
                v-else
                class="px-3 py-2 border-b hover:text-lime-500 flex cursor-pointer"
                @click="showTree = 'XuongRong'"
                :class="`${showTree === 'XuongRong' ? 'text-lime-500' : ''}`"
              >
                Xương rồng
              </li>
              <li
                class="px-3 py-2 border-b hover:text-lime-500 cursor-pointer"
                @click="showTree = 'SenDa'"
                :class="`${showTree === 'SenDa' ? 'text-lime-500' : ''}`"
              >
                Sen đá
              </li>
              <li
                class="px-3 py-2 border-b hover:text-lime-500 cursor-pointer"
                :class="`${showTree === 'CayVanPhong' ? 'text-lime-500' : ''}`"
                @click="showTree = 'CayVanPhong'"
              >
                Cây văn phòng
              </li>
              <li
                class="px-3 py-2 border-b hover:text-lime-500 cursor-pointer"
                @click="showTree = 'CayTreo'"
                :class="`${showTree === 'CayTreo' ? 'text-lime-500' : ''}`"
              >
                Cây treo
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
              <div
                class="lg:border-y lg:px-2 mb-2"
                @click="router.push('/product/' + item._id)"
              >
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
                    <div
                      v-if="item.discount > 0"
                      class="flex items-center mt-2"
                    >
                      Giá: {{ item.priceSale }}vnđ
                    </div>
                    <div v-else class="flex items-center mt-2">
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
              <GiftIcon v-if="showProduct" @click="showProductGift" class="text-lime-500"> </GiftIcon>
              <GiftIcon v-else @click="showProductGift"></GiftIcon>
              <ListIcon v-if="!showProduct" @click="showProductList" class="ml-5 text-lime-500"></ListIcon>
              <ListIcon v-else @click="showProductList" class="ml-5"></ListIcon>
            </div>
            <!-- <div class="flex">
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
            </div> -->
          </div>
          <!-- BEGIN: product -->
          <div v-if="showProduct" class="intro-y grid grid-cols-9 gap-6">
            <div
              class="intro-y lg:col-span-3 col-span-9 mt-5"
              v-for="(item, index) in treeList"
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
                      <Tippy
                        tag="div"
                        class="cursor-pointer"
                        content="Mua ngay"
                        
                      >
                      <ShoppingCartIcon
                        class="w-5 h-5 mx-3 hover:text-lime-500"
                        @click="router.push('/pay/'+ item._id)"
                      ></ShoppingCartIcon>
                      </Tippy>
                      <Tippy
                        tag="div"
                        class="cursor-pointer"
                        content="Xem"
                      >
                      <EyeIcon
                        class="w-5 h-5 hover:text-lime-500"
                        @click="router.push('/product/' + item._id)"
                      ></EyeIcon>
                    </Tippy>
                    </div>
                  </div>
                </div>
                <div
                  class="w-full h-6 text-center cursor-pointer mt-4 text-base hover:text-lime-400"
                >
                  <span>{{ item.name }}</span>
                </div>
                <div
                  v-if="item.discount > 0"
                  class="text-center mb-4 mt-4 text-base"
                >
                  <span class="text-orange-400">{{ item.priceSale }}vnđ</span>
                  <span class="text-gray-300 px-3"
                    ><del>{{ item.price }}vnđ</del></span
                  >
                </div>
                <div v-else class="text-center mb-4 mt-4 text-base">
                  <span class="text-orange-400">{{ item.price }}vnđ</span>
                </div>
              </div>
            </div>
          </div>
          <!-- END: product -->

          <!-- BEGIN: list-product -->
          <div v-else class="intro-y grid grid-cols-9">
            <div
              class="intro-y col-span-9 mt-5"
              v-for="(item, index) in treeList"
              :key="index"
            >
              <div class="w-full flex h-auto border rounded-xl">
                <div class="item-container w-56">
                  <img
                    :src="item.image"
                    alt="/"
                    class="w-full h-44 rounded-md"
                  />
                  <span
                    v-if="item.discount > 0"
                    class="absolute top-0 bg-pending/80 text-white text-xs ml-3 mt-4 px-3 py-1 rounded z-10"
                    >{{ item.discount }}%
                  </span>
                </div>
                <div class="pl-10 py-5">
                  <div
                    class="w-full h-6 cursor-pointer mt-4 text-base hover:text-lime-400"
                  >
                    <span>{{ item.name }}</span>
                  </div>
                  <div v-if="item.discount > 0" class="mb-4 mt-4 text-base">
                    <span class="text-orange-400">{{ item.priceSale }}vnđ</span>
                    <span class="text-gray-300 px-3"
                      ><del>{{ item.price }}vnđ</del></span
                    >
                  </div>
                  <div v-else class="mb-4 mt-4 text-base">
                    <span class="text-orange-400">{{ item.price }}vnđ</span>
                  </div>
                  <div class="flex">
                    <div>
                      <button
                        class="btn bg-lime-500 text-slate-100 border-lime-500"
                        @click="router.push('/pay/'+ item._id)"
                      >
                        <Shopping-cartIcon
                          class="w-5 h-5 mr-2"
                        ></Shopping-cartIcon>
                        Mua ngay
                      </button>
                    </div>
                    <div>
                      <button
                        class="btn ml-3 text-white bg-slate-400 border-slate-400"
                      >
                        <EyeIcon
                          class="w-5 h-5"
                          @click="router.push('/product/' + item._id)"
                        ></EyeIcon>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <!-- END: list-product -->
        </div>
      </div>
    </div>
    <bottom />
    <!-- END: Page Layout -->
  </div>
</template>
<script lang="ts">
import { computed, defineComponent, onMounted, ref, watch } from "vue";
import { useRouter } from "vue-router";
import { useAuthStore } from "../../stores/authStore";
import { productInfor } from "../../types/productType";
import { setNotificationToastMessage } from "../../utils/myFunction";
import bottom from "../../views/Footer/Footer.vue";
import productService from "../../services/productService";
import { useProductStore } from "../../stores/productStore";
export default defineComponent({
  name: "Product",
  components: {
    bottom,
  },
  setup() {
    const router = useRouter();
    const productStore = useProductStore();
    const sales = ref<productInfor[]>([]);
    const showTree = ref("Xương rồng");
    const authStore = useAuthStore();
    const treeList: any = ref([]);
    const textColor = ref(true);
    const showProduct = ref(true);
    watch(
      () => showTree.value,
      (value) => {
        if (value === "SenDa") {
          initGetAllProductByStoneLotus();
        } else if (value === "CayTreo") {
          initGetAllProductByHangingTree();
        } else if (value === "XuongRong") {
          initGetAllProductByCastus();
        } else if (value === "CayVanPhong") {
          initGetAllProductByOfficeTree();
        }
      }
    );

    watch(() => productStore.searchKeyword, async (value) => {
      const authStore = useAuthStore();
            const data = {
                name: value
            }
            const response =  await productService.search(data, authStore.currentUser.Token)
            if(response.data.success){
                treeList.value =  response.data.values.data;
            } else {
                setNotificationToastMessage('Tải dữ liệu thất bại',false)
            } 
      
    })

    function showProductGift() {
      showProduct.value = true;
    }

    function showProductList() {
      showProduct.value = false;
    }

    // Get all product sale
    async function initGetAllProductBySale() {
      const data = {} as productInfor;
      const response = await productService.findBySale(data,  authStore.currentUser.Token);
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
        authStore.currentUser.Token
      );
      if (response.data.success) {
        treeList.value = response.data.values;
      } else {
        setNotificationToastMessage("Tải dữ liệu thât bại", false);
      }
      textColor.value = false;
    }

    // Get all product by category = xương rồng
    async function initGetAllProductByCastus() {
      showTree.value == "Xương rồng";
      const data = {} as productInfor;
      const response = await productService.findByCastus(data,  authStore.currentUser.Token);
      if (response.data.success) {
        treeList.value = response.data.values;
      } else {
        setNotificationToastMessage("Tải dữ liệu thât bại", false);
      }
    }

    // Get all product by category = sen đá
    async function initGetAllProductByStoneLotus() {
      showTree.value == "Sen đá";
      const data = {} as productInfor;
      const response = await productService.findByStoneLotus(
        data,
        authStore.currentUser.Token
      );
      if (response.data.success) {
        treeList.value = response.data.values;
      } else {
        setNotificationToastMessage("Tải dữ liệu thât bại", false);
      }
      textColor.value = false;
    }

    // Get all product by category = cây treo
    async function initGetAllProductByHangingTree() {
      const data = {} as productInfor;
      const response = await productService.findByHangingTree(
        data,
        authStore.currentUser.Token
      );
      if (response.data.success) {
        treeList.value = response.data.values;
      } else {
        setNotificationToastMessage("Tải dữ liệu thât bại", false);
      }
      textColor.value = false;
    }

    // Get all product by category = chậu cảnh
    async function initGetAllProductByPot() {
      const data = {} as productInfor;
      const response = await productService.findByPot(data,  authStore.currentUser.Token);
      if (response.data.success) {
        treeList.value = response.data.values;
      } else {
        setNotificationToastMessage("Tải dữ liệu thât bại", false);
      }
      textColor.value = false;
    }
    onMounted(() => {
      initGetAllProductBySale();
      initGetAllProductByCastus();
    });
    return {
      router,
      sales,
      showTree,
      treeList,
      textColor,
      showProduct,
      showProductGift,
      showProductList,
      initGetAllProductByOfficeTree,
      initGetAllProductByCastus,
      initGetAllProductByStoneLotus,
      initGetAllProductByHangingTree,
      initGetAllProductByPot,
    };
  },
});
</script>
