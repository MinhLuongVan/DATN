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
        <h2 class="text-lg mx-2 hover:text-lime-500 cursor-pointer" @click="router.push('/listproduct')">Sản phẩm</h2>
        <span>--></span>
        <h2 class="text-lg ml-2 text-lime-500">Xương rồng</h2>
      </div>
      <div class="intro-y grid grid-cols-12 gap-6 mt-4">
        <div class="col-span-12 lg:col-span-9">
          <div class="intro-y grid grid-cols-9 gap-4">
            <div class="col-span-9 h-80 lg:col-span-4 border">
              <img
                src="../../assets/images/tree5.jpg"
                alt="/"
                class="w-full h-full bg-contain"
              />
            </div>
            <div class="col-span-9 lg:col-span-5 px-4">
              <h2 class="text-base font-bold lg:text-2xl">Tên cây</h2>
              <ul class="mt-2 flex">
              <li><StarIcon></StarIcon></li>
              <li><StarIcon></StarIcon></li>
              <li><StarIcon></StarIcon></li>
              <li><StarIcon></StarIcon></li>
              <li><StarIcon></StarIcon></li>
            </ul>
              <p class="py-1.5 lg:text-base">Mã sản phẩm:</p>
              <div class="flex">
                <p class="py-1.5 lg:text-base">Tình trạng :</p>
                <span class="py-1.5 text-orange-500 lg:text-base ml-2"
                  >Còn hàng</span
                >
              </div>
              <p class="pt-2 text-lg font-bold text-orange-400 lg:text-2xl">
                70.000đ
              </p>
              <div class="flex">
                <p class="text-gray-400 lg:text-base"><del>50.000đ</del></p>
                <span class="text-orange-500 ml-2 lg:text-base">(-22%)</span>
              </div>
              <p class="lg:text-base border-b pb-3">Giá sau thuế : 70.000đ</p>

              <div class="mt-4 pt-3 border-t">
                <span class="font-bold lg:text-base">Số lượng </span>
                <button class="ml-3 border px-2.5 py-1 text-xl">-</button>
                <button class="border-t border-b px-3 lg:px-4 py-1 text-xl">
                  1
                </button>
                <button class="border px-2.5 py-1 text-xl">+</button>
                <button
                  class="w-full lg:w-2/5 lg:ml-10 mt-3 text-base font-bold py-2 px-2 rounded-md text-white bg-lime-500 hover:bg-lime-600"
                >
                  Thêm vào giỏ hàng
                </button>
              </div>
            </div>
          </div>
          <button
            class="mt-4 text-base py-1.5 px-4 rounded-md text-white bg-orange-500 hover:bg-orange-600"
            @click="showDescribe"
          >
            Mô tả
          </button>
          <button
            class="mt-4 ml-3 text-base py-1.5 px-3 rounded-md text-white bg-lime-500 hover:bg-lime-600"
            @click="showEvaluate"
          >
            Đánh giá (0)
          </button>

          <!-- BEGIN: đánh giá -->
          <div v-if="isShowEvaluate" class="mt-4 border p-3">
            <span class="text-xl lg:text-2xl">Viết đánh giá</span>
            <p class="text-base mt-2">Email</p>
            <input class="w-full mt-2 rounded-md" type="text" />
            <p class="text-base mt-2">Họ tên</p>
            <input class="w-full mt-2 rounded-md" type="text" />
            <p class="text-base mt-2">Nội dung đánh giá</p>
            <textarea
              class="w-full mt-2 rounded-md"
              name=""
              id=""
              rows="4"
            ></textarea>
            <button
              class="border mt-3 py-2 px-4 rounded-md text-base text-white bg-lime-500 hover:bg-lime-600"
            >
              Gửi đi
            </button>
          </div>
          <!-- END: đánh giá -->

          <!-- BEGIN: mô tả -->
          <div v-else class="mt-4 border p-3">
           <h2 class="text-lg font-medium">ĐẶC ĐIỂM CỦA CÂY</h2>
           <P class="text-base mt-3">Mô tả</P>
          </div>
          <!-- END: mô tả -->
        </div>
        <div class="col-span-12 lg:col-span-3">
          <div class="w-full border">
            <button
              class="w-full text-base font-medium text-white bg-lime-500 p-2"
            >
              SẢN PHẨM KHUYẾN MÃI
            </button>
            <div
              v-for="(item, index) in Fake"
              :key="index"
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
                      :src="item.name"
                    />
                  </div>
                  <div class="text-slate-600 dark:text-slate-500 ml-3">
                    <div class="flex items-center">Price: {{ 123 }}</div>
                    <div class="flex items-center mt-2">
                      Remaining Stock:{{}}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- BEGIN:SẢN PHẨM LIÊN QUAN -->
        <div class="col-span-12">
          <div class="flex lg:mt-5 mt-3 justify-center">
            <hr
              style="height: 3px"
              class="w-2/5 mt-3 bg-orange-600 hidden lg:block"
            />
            <button
              class="lg:w-1/5 w-3/5 lg:text-md font-bold text-white lg:rounded-full rounded-md py-2.5 px-4 bg-lime-600"
            >
             SẢN PHẨM LIÊN QUAN
            </button>
            <hr
              lg:block
              style="height: 3px"
              class="w-2/5 mt-3 bg-orange-600 hidden lg:block"
            />
          </div>
        </div>
        <div class="col-span-12">
          <!-- Begin:slide -->
          <carousel :settings="settings" :breakpoints="breakpoints">
            <slide v-for="(item, index) in Fake" :key="index">
              <div class="carousel__item w-full h-auto border rounded-xl">
                <div class="item-container">
                  <img
                    :src="item.name"
                    alt="/"
                    class="w-full h-60 rounded-t-xl"
                  />
                  <span
                    class="absolute top-0 bg-pending/80 text-white text-xs -ml-28 mt-4 px-3 py-1 rounded z-10"
                    >-20%
                  </span>
                  <div class="overlay">
                    <div class="flex justify-center">
                      <ShoppingCartIcon class="w-5 h-5 mx-3 hover:text-lime-500"></ShoppingCartIcon>
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
            </slide>

            <template #addons>
              <navigation />
            </template>
          </carousel>
          <!-- end:slide -->
         
        </div>
        <!-- END: SẢM PHẨM LIÊN QUAN -->
      </div>
    </div>
    <bottom />
    <!-- END: Page Layout -->
  </div>
</template>
<script lang="ts">
import { useRouter } from "vue-router";
import bottom from "../../views/Footer/Footer.vue";
import "vue3-carousel/dist/carousel.css";
import { Carousel, Slide, Navigation } from "vue3-carousel";
import { ref } from 'vue';
export default {
  name: "DetailProduct",
  components: {
    bottom,
    Carousel,
    Slide,
    Navigation,
  },
  setup() {
    const router = useRouter();
    const isShowDescribe = ref(false);
    const isShowEvaluate = ref(false);

    function showDescribe() {
      isShowEvaluate.value = false
    }
    function showEvaluate() {
      isShowEvaluate.value = true;
      isShowDescribe.value = false;
    }
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
      
    ];
    return {
      router,
      showDescribe,
      isShowDescribe,
      isShowEvaluate,
      showEvaluate,
      Fake,
      settings: {
        itemsToShow: 1,
        snapAlign: "center",
      },
      breakpoints: {
        700: {
          itemsToShow: 3,
          snapAlign: "center",
        },
        1024: {
          itemsToShow: 4,
          snapAlign: "start",
        },
      },
    };
  },
};
</script>
<style>
.carousel__slide {
  padding: 10px;
}

.carousel__prev,
.carousel__next {
  background-color: #fff7;
}
.item-container {
  position: relative;
}
.overlay {
  position: absolute;
  bottom: 0;
  background: rgb(0, 0, 0);
  background: rgba(0, 0, 0, 0.5); /* Black see-through */
  color: #f1f1f1;
  width: 100%;
  transition: 0.5s ease;
  opacity: 0;
  color: white;
  font-size: 20px;
  padding: 15px;
  text-align: center;
}
.item-container:hover .overlay {
  opacity: 1;
}
</style>
