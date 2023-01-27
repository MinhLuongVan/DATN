<template>
  <div>
    <!-- BEGIN: Page Layout -->
    <div class="intro-y py-3 mt-4 lg:mt-28 lg:px-52">
      <div class="intro-y grid grid-cols-12 gap-6">
        <!-- BEGIN: slide show  -->
        <div class="intro-y lg:col-span-9 col-span-12">
          <!-- <div
            id="carouselExampleControls"
            class="carousel slide"
            data-bs-ride="carousel"
          >
            <div class="carousel-inner">
              <div class="carousel-item active">
                <img
                  src="https://caycanhcala.com/wp-content/uploads/2019/11/Kim-Tien_2.jpg"
                  class="d-block w-100 h-44 lg:h-96 lg:rounded-2xl"
                  alt="..."
                />
              </div>
              <div class="carousel-item">
                <img
                  src="https://sgl.com.vn/wp-content/uploads/2021/12/top-cac-loai-cay-canh-dang-hot.jpg"
                  class="d-block w-100 h-44 lg:h-96 lg:rounded-2xl"
                  alt="..."
                />
              </div>
              <div class="carousel-item">
                <img
                  src="https://freshgarden.exdomain.net/image/cache/catalog/Slide/slide-img-1360x520.jpg"
                  class="d-block w-100 h-44 lg:h-96 lg:rounded-2xl"
                  alt="..."
                />
              </div>
            </div>
            <button
              class="carousel-control-prev"
              type="button"
              data-bs-target="#carouselExampleControls"
              data-bs-slide="prev"
            >
              <span
                class="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span class="visually-hidden">Previous</span>
            </button>
            <button
              class="carousel-control-next"
              type="button"
              data-bs-target="#carouselExampleControls"
              data-bs-slide="next"
            >
              <span
                class="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span class="visually-hidden">Next</span>
            </button>
          </div> -->
          <!-- BEGIN: Fade Animation -->
      <PreviewComponent class="intro-y ">
        <div>
          <Preview>
            <div>
              <TinySlider
                :options="{
                  mode: 'gallery',
                  // controls: true,
                  speed: 500,
                }"
              >
                <div class="h-44 lg:h-80 px-2">
                  <div class="h-full image-fit rounded-md overflow-hidden">
                    <img
                    src="https://caycanhcala.com/wp-content/uploads/2019/11/Kim-Tien_2.jpg"
                    />
                  </div>
                </div>
                <div class="h-44 lg:h-80 px-2">
                  <div class="h-full image-fit rounded-md overflow-hidden">
                    <img
                    src="https://sgl.com.vn/wp-content/uploads/2021/12/top-cac-loai-cay-canh-dang-hot.jpg"
                    />
                  </div>
                </div>
                <div class="h-44 lg:h-80 px-2">
                  <div class="h-full image-fit rounded-md overflow-hidden">
                    <img
                    src="https://freshgarden.exdomain.net/image/cache/catalog/Slide/slide-img-1360x520.jpg"
                    />
                  </div>
                </div>
              </TinySlider>
            </div>
          </Preview>
        </div>
      </PreviewComponent>
      <!-- END: Fade Animation -->
        </div>
        <div class="intro-y lg:col-span-3 col-span-12">
          <div class="flex border-b mt-3 lg:mt-8 ml-3 pb-3">
            <img src="../../assets/images/car.png" alt="" />
            <div class="">
              <p class="lg:text-base font-bold">Miễn phí vận chuyên</p>
              <p class="lg:text-base">Bán kính 100 km</p>
            </div>
          </div>
          <div class="flex border-b mt-4 ml-3 pb-3">
            <img src="../../assets/images/mail.png" alt="" />
            <div class="ml-5 pt-2">
              <p class="lg:text-base font-bold">Hỗ trợ 24/7</p>
              <p class="lg:text-base">Hostline: 0363546789</p>
            </div>
          </div>
          <div class="flex border-b mt-5 ml-3 pb-3">
            <img src="../../assets/images/clock.png" alt="" />
            <div class="ml-5 pt-2">
              <p class="lg:text-base font-bold">Giờ làm việc</p>
              <p class="lg:text-base">T2 - T7 8h - 17h</p>
            </div>
          </div>
        </div>
        <!-- END: slide show -->
        <!-- BEGIN: new product -->
        <div class="col-span-12">
          <div class="flex lg:mt-5 mt-3 justify-center">
            <hr
              style="height: 3px"
              class="w-2/5 mt-5 bg-orange-400 hidden lg:block"
            />
            <button
              class="lg:w-1/5 w-3/5 lg:text-md font-bold text-white lg:rounded-full rounded-md py-2.5 px-4 bg-lime-600"
            >
              SẢN PHẨM MỚI NHẤT
            </button>
            <hr
              style="height: 3px"
              class="w-2/5 mt-5 bg-orange-400 hidden lg:block"
            />
          </div>

          <!-- begin:slide -->
          <carousel :settings="settings" :breakpoints="breakpoints">
            <slide v-for="(item, index) in Fake" :key="index">
              <div class="carousel__item w-full h-auto mt-6 border rounded-xl">
                <div class="item-container">
                  <img
                    :src="item.name"
                    alt="/"
                    class="w-full h-60 block rounded-t-xl"
                  />
                  <span
                    class="absolute top-0 bg-pending/80 text-white text-xs -ml-28 mt-5 px-3 py-1 rounded z-10"
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
        <!-- END: new product -->
        <!-- BEGIN: product sale -->
        <div class="col-span-12">
          <div class="flex lg:mt-5 mt-3 justify-center">
            <hr
              style="height: 3px"
              class="w-2/5 mt-5 bg-orange-400 hidden lg:block"
            />
            <button
              class="lg:w-1/5 w-3/5 lg:text-md font-bold text-white lg:rounded-full rounded-md py-2.5 px-4 bg-lime-600"
            >
              SẢN PHẨM KHUYẾN MÃI
            </button>
            <hr
              style="height: 3px"
              class="w-2/5 mt-5 bg-orange-400 hidden lg:block"
            />
          </div>
          <!-- Begin:slide -->
          <carousel :settings="settings" :breakpoints="breakpoints">
            <slide v-for="(item, index) in Fake" :key="index">
              <div class="carousel__item w-full h-auto mt-6 border rounded-xl">
                <div class="item-container">
                  <img
                    :src="item.name"
                    alt="/"
                    class="w-full h-60 rounded-t-xl"
                  />
                  <span
                    class="absolute top-0 bg-pending/80 text-white text-xs -ml-28 mt-5 px-3 py-1 rounded z-10"
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
        <!-- END: product sale -->
        <div class="lg:col-span-6 col-span-12">
          <img
            src="../../assets/images/tree4.jpg"
            alt="/"
            class="rounded-2xl"
          />
        </div>
        <div class="lg:col-span-6 col-span-12">
          <img
            src="../../assets/images/tree2.jpg"
            alt="/"
            class="rounded-2xl"
          />
        </div>
        <!-- BEGIN: green tree -->
        <div class="col-span-12">
          <div class="flex lg:mt-5 mt-3 justify-center">
            <hr
              style="height: 3px"
              class="w-2/5 mt-5 bg-orange-400 hidden lg:block"
            />
            <button
              class="lg:w-1/5 w-3/5 lg:text-md font-bold text-white lg:rounded-full rounded-md py-2.5 px-4 bg-lime-600"
            >
              CÂY XANH TRONG VƯỜN
            </button>
            <hr
              style="height: 3px"
              class="w-2/5 mt-5 bg-orange-400 hidden lg:block"
            />
          </div>
        </div>
        <!-- END: green tree -->
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
          <img
            src="../../assets/images/tree3.jpg"
            alt="/"
            class="rounded-2xl mt-4"
          />
        </div>

        <!-- BEGIN: standout tree -->
        <div class="lg:col-span-8 col-span-12">
          <div class="flex lg:mt-5 mt-3 justify-center">
            <hr
              style="height: 3px"
              class="w-2/5 mt-5 bg-orange-400 hidden lg:block"
            />
            <button
              class="lg:w-2/6 w-3/5 lg:text-md font-bold text-white lg:rounded-full rounded-md py-2.5 px-4 bg-lime-600"
            >
              CÂY PHONG THỦY
            </button>
            <hr
              style="height: 3px"
              class="w-2/5 mt-5 bg-orange-400 hidden lg:block"
            />
          </div>
          <div class="intro-y grid grid-cols-9 gap-8 mt-4">
            <div
              v-for="(faker, fakerKey) in $_.take($f(), 12)"
              :key="fakerKey"
              class="intro-y lg:col-span-3 col-span-9"
            >
              <div class="border-1 rounded-md hover:border-lime-300">
                <div class="px-2 py-2">
                  <div class="lg:h-60 lg:w-full w-full h-64 image-fit">
                    <img
                      alt="Midone - HTML Admin Template"
                      class=""
                      :src="faker.images[0]"
                    />
                  </div>
                  <div class="text-slate-600 dark:text-slate-500 mt-4">
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
        <div class="lg:col-span-4 col-span-12">
          <div class="flex lg:mt-5 mt-3 justify-center">
            <hr
              style="height: 3px"
              class="w-2/5 mt-5 bg-orange-400 hidden lg:block"
            />
            <button
              class="lg:w-2/6 w-3/5 lg:text-md font-bold text-white lg:rounded-full rounded-md py-2.5 px-4 bg-lime-600"
            >
              NỔI BẬT
            </button>
            <hr
              style="height: 3px"
              class="w-2/5 mt-5 bg-orange-400 hidden lg:block"
            />
          </div>
          <div
            v-for="(faker, fakerKey) in $_.take($f(), 12)"
            :key="fakerKey"
            class="intro-y mt-4"
          >
            <div class="border-1 rounded-md mb-2 hover:border-lime-300">
              <div class="p-2 flex">
                <div
                  class="h-24 w-24 image-fit overflow-hidden before:block before:absolute before:w-full before:h-full before:top-0 before:left-0 before:z-10 before:bg-gradient-to-t before:from-black before:to-black/10"
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
        <!-- END: standout tree -->
      </div>
    </div>
    <bottom />
    <!-- END: Page Layout -->
  </div>
</template>
<script lang="ts">
import "vue3-carousel/dist/carousel.css";
import { Carousel, Slide, Navigation } from "vue3-carousel";
import bottom from "../../views/Footer/Footer.vue";
export default {
  name: "Home",
  components: {
    bottom,
    Carousel,
    Slide,
    Navigation,
  },
  setup() {
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
