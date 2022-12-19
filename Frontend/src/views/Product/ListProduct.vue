<template>
  <div class="">
    <!-- BEGIN: Page Layout -->
    <div class="intro-y py-3 lg:px-52">
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
              <li class="px-3 py-2 border-b hover:text-lime-500 flex">
                Xương rồng
              </li>
              <li class="px-3 py-2 border-b hover:text-lime-500">Sen đá</li>
              <li class="px-3 py-2 border-b hover:text-lime-500">
                Cây văn phòng
              </li>
              <li class="px-3 py-2 border-b hover:text-lime-500">Cây treo</li>
              <li class="px-3 py-2 border-b hover:text-lime-500">
                Cây dàn leo
              </li>
              <li class="px-3 py-2 hover:text-lime-500">Chậu cảnh</li>
            </ul>
          </div>
          <div class="w-full mt-5 border">
            <button
              class="w-full text-base font-medium text-white bg-lime-500 p-2"
            >
              SẢN PHẨM KHUYẾN MÃI
            </button>
            <div
              v-for="(faker, fakerKey) in $_.take($f(), 12)"
              :key="fakerKey"
              class="intro-y mt-4"
            >
              <div class="lg:border-y lg:px-2 mb-2">
                <div class="p-2 flex">
                  <div
                    class="h-20 w-20 image-fit overflow-hidden before:block before:absolute before:w-full before:h-full before:top-0 before:left-0 before:z-10 before:bg-gradient-to-t before:from-black before:to-black/10"
                  >
                    <img
                      alt="Midone - HTML Admin Template"
                      class=""
                      :src="faker.images[0]"
                    />
                  </div>
                  <div class="text-slate-600 dark:text-slate-500 ml-3">
                    <div class="flex items-center">
                      Price: ${{ faker.totals[0] }}
                    </div>
                    <div class="flex items-center mt-2">
                      Remaining Stock:
                      {{ faker.stocks[0] }}
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
              class="intro-y lg:col-span-3 col-span-9 mt-4"
              v-for="(item, index) in Fake"
              :key="index"
            >
              <div class="w-full h-auto border rounded-xl">
                <div class="item-container">
                  <img
                    :src="item.name"
                    alt="/"
                    class="w-full h-60 rounded-t-xl"
                  />
                  <span
                    class="absolute top-0 bg-pending/80 text-white text-xs ml-3 mt-4 px-3 py-1 rounded z-10"
                    >-20%
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
                  <span>Cây cảnh</span>
                </div>
                <div class="text-center mb-4 mt-4 text-base">
                  <span class="text-orange-400">200.000đ</span>
                  <span class="text-gray-300 px-3"><del>250.000đ</del></span>
                </div>
              </div>
            </div>
          </div>
          <!-- END: product -->
        </div>
        <!-- END: slide show -->
      </div>
    </div>
    <bottom />
    <!-- END: Page Layout -->
  </div>
</template>
<script lang="ts">
import { useRouter } from "vue-router";
import bottom from "../../views/Footer/Footer.vue";
export default {
  name: "Product",
  components: {
    bottom,
  },
  setup() {
    const router = useRouter();
    const Fake = [
      {
        name: "http://list.vn/wp-content/uploads/2021/02/qu-2.jpg",
      },
      {
        name: "https://toplist.vn/images/800px/cay-canh-ha-noi-555822.jpg",
      },
      {
        name: "https://toplist.vn/images/800px/cay-canh-ha-noi-555822.jpg",
      },
      {
        name: "https://toplist.vn/images/800px/cay-canh-ha-noi-555822.jpg",
      },
      {
        name: "http://list.vn/wp-content/uploads/2021/02/qu-2.jpg",
      },
    ];
    return {
      router,
      Fake,
    };
  },
};
</script>
