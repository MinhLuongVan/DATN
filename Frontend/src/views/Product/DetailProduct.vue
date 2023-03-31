<template>
  <div>
    <!-- BEGIN: Page Layout -->
    <div class="intro-y py-3 lg:px-52 mt-3 lg:mt-5">
      <div class="intro-y flex lg:mt-0 items-center">
        <div class="flex cursor-pointer" @click="router.push('/')">
          <HomeIcon class="w-5 h-5 mt-0.5"></HomeIcon>
          <h2 class="text-lg mx-2 hover:text-lime-500">Trang chủ</h2>
        </div>
        <span>--></span>
        <h2
          class="text-lg mx-2 hover:text-lime-500 cursor-pointer"
          @click="router.push('/listproduct')"
        >
          Sản phẩm
        </h2>
        <span>--></span>
        <h2 class="text-lg ml-2 text-lime-500">{{ listProduct.name }}</h2>
      </div>
      <div class="intro-y grid grid-cols-12 gap-6 mt-4">
        <div class="col-span-12 lg:col-span-9">
          <div class="intro-y grid grid-cols-9 gap-4">
            <div class="col-span-9 h-80 lg:col-span-4 border">
              <img
                :src="listProduct.image"
                data-action="zoom"
                alt="/"
                class="w-full h-full bg-contain"
              />
            </div>
            <div class="col-span-9 lg:col-span-5 px-4">
              <h2 class="text-base font-bold lg:text-2xl">
                {{ listProduct.name }}
              </h2>
              <div
                v-for="(item, index) in myFeedback"
                :key="index"
                class="flex"
                v-if="rating > 0"
              >
                <ul class="mt-2 flex">
                  <li>
                    <StarIcon
                      class="w-4 h-4 ml-1 text-orange-500 fill-orange-400"
                    ></StarIcon>
                  </li>
                  <span class="ml-2">({{ item.rating }})</span>
                </ul>
              </div>
              <div v-else>
                <ul class="mt-2 flex">
                  <li>
                    <StarIcon
                      class="w-4 h-4 ml-1 text-orange-500 fill-orange-400"
                    ></StarIcon>
                  </li>
                  <span class="ml-2">(0)</span>
                </ul>
              </div>
              <p class="py-1.5 lg:text-base">
                Mã sản phẩm :
                <span class="text-orange-400">
                  {{ listProduct.uuid }}
                </span>
              </p>
              <div class="flex">
                <p class="py-1.5 lg:text-base">Tình trạng :</p>
                <span
                  v-if="listProduct.amount > 0"
                  class="py-1.5 text-orange-400 lg:text-base ml-2"
                  >Còn hàng</span
                >
                <span v-else class="py-1.5 text-slate-400 lg:text-base ml-2"
                  >Hết hàng</span
                >
              </div>
              <p
                v-if="listProduct.discount > 0"
                class="pt-2 text-lg font-bold text-orange-400 lg:text-2xl"
              >
                {{ listProduct.priceSale }}vnđ
              </p>
              <p
                v-else
                class="pt-2 text-lg font-bold text-orange-400 lg:text-2xl"
              >
                {{ listProduct.price }}vnđ
              </p>
              <div v-if="listProduct.discount > 0" class="flex">
                <p class="text-gray-400 lg:text-base">
                  <del>{{ listProduct.price }}vnđ</del>
                </p>
                <span class="text-orange-500 ml-2 lg:text-base"
                  >({{ listProduct.discount }}%)</span
                >
              </div>
              <p
                v-if="listProduct.discount > 0"
                class="lg:text-base border-b pb-3"
              >
                Giá sau thuế :
                <span class="text-orange-400">
                  {{ listProduct.priceSale }}vnđ
                </span>
              </p>
              <p v-else class="lg:text-base border-b pb-3">
                Giá sau thuế :
                <span class="text-orange-400">
                  {{ listProduct.priceSale }}vnđ
                </span>
              </p>
              <div class="mt-4 pt-3 border-t">
                <span class="font-bold lg:text-base">Số lượng </span>
                <button
                  class="ml-3 border px-2.5 py-1 text-xl"
                  @click="downAmount()"
                >
                  -
                </button>
                <button class="border-t border-b px-3 lg:px-4 py-1 text-xl">
                  {{ quantity }}
                </button>
                <button class="border px-2.5 py-1 text-xl" @click="upAmount()">
                  +
                </button>
                <button
                  class="w-full lg:w-2/5 lg:ml-10 mt-3 text-base font-bold py-2 px-2 rounded-md text-white bg-lime-500 hover:bg-lime-600"
                  @click="actionAddCart()"
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
            v-if="myFeedback.length > 0"
            class="mt-4 ml-3 text-base py-1.5 px-3 rounded-md text-white bg-lime-500 hover:bg-lime-600"
            @click="showEvaluate"
          >
            Đánh giá ({{ myFeedback.length }})
          </button>
          <button
            v-else
            class="mt-4 ml-3 text-base py-1.5 px-3 rounded-md text-white bg-lime-500 hover:bg-lime-600"
            @click="showEvaluate"
          >
            Đánh giá(0)
          </button>

          <!-- BEGIN: đánh giá -->
          <div v-if="isShowEvaluate" class="mt-4 border p-3">
            <div v-if="showComment">
              <span class="text-xl lg:text-2xl">Viết đánh giá</span>
              <p class="text-base mt-2">Số sao (1-5)</p>
              <StarIcon class="text-orange-500 fill-orange-400"></StarIcon>
              <input
                class="w-full mt-2 rounded-md"
                type="number"
                min="0"
                max="5"
                v-model="rating"
              />
              <p class="text-base mt-2">Nội dung đánh giá</p>
              <textarea
                class="w-full mt-2 rounded-md"
                name=""
                id=""
                rows="2"
                v-model="content"
              ></textarea>
              <button
                v-if="!showBtnEdit"
                class="border mt-3 py-2 px-4 rounded-md text-base text-white bg-lime-500 hover:bg-lime-600"
                @click="actionFeedback()"
              >
                Gửi đi
              </button>
              <button
                v-else
                class="border mt-3 py-2 px-4 rounded-md text-base text-white bg-lime-500 hover:bg-lime-600"
                @click="actionEditFeedback()"
              >
                Cập nhật
              </button>
            </div>
            <div
              v-else
              v-for="(item, index) in myFeedback"
              :key="index"
              class="w-full h-auto py-2 flex"
            >
              <img
                src="../../assets/images/no-avatar.png"
                alt=""
                class="w-8 h-8 mt-3 rounded-xl"
              />
              <div
                class="ml-2 px-3 py-1 border rounded-xl w-full bg-slate-100 flex justify-between"
              >
                <div class="w-3/5">
                  <span class="font-medium">{{ item.userId }}</span>
                  <p class="pt-1">{{ item.content }}</p>
                </div>
                <div class="flex">
                  <a
                    class="flex pt-1 mr-3 cursor-pointer"
                    @click="actionInitdata(item)"
                  >
                    <CheckSquareIcon class="w-4 h-4 mr-1" /> Chỉnh sửa
                  </a>
                  <a
                    class="flex pt-1 text-danger cursor-pointer"
                    @click="actionDeleteFeedback(item)"
                  >
                    <Trash2Icon class="w-4 h-4 mr-1" /> Xóa
                  </a>
                </div>
              </div>
            </div>
            <span
              v-if="!showComment"
              class="mt-3 pl-10 text-base cursor-pointer"
              @click="showComment = true"
              >Viết đánh giá...</span
            >
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
              class="w-full text-base border border-lime-500 font-medium text-white bg-lime-500 p-2"
            >
              SẢN PHẨM KHUYẾN MÃI
            </button>
            <div
              v-for="(item, index) in sales"
              :key="index"
              class="intro-y mt-4"
            >
              <div
                class="px-3 mb-2 hover:border border-lime-300 cursor-pointer"
                @click="router.push('/product/' + item._id)"
              >
                <div class="p-2 flex">
                  <div class="h-24 w-24 image-fit o">
                    <img
                      alt="Midone - HTML Admin Template"
                      class=""
                      :src="item.image"
                    />
                  </div>
                  <div class="text-slate-600 dark:text-slate-500 ml-3 py-5">
                    <div class="flex items-center">
                      {{ item.name }}
                    </div>
                    <div class="flex items-center mt-2">
                      Giá: {{ item.priceSale }}vnđ
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
              class="w-2/5 mt-4 bg-orange-600 hidden lg:block"
            />
            <button
              class="lg:w-1/5 w-3/5 lg:text-md font-bold text-white lg:rounded-full rounded-md py-2.5 px-4 bg-lime-600"
            >
              SẢN PHẨM LIÊN QUAN
            </button>
            <hr
              lg:block
              style="height: 3px"
              class="w-2/5 mt-4 bg-orange-600 hidden lg:block"
            />
          </div>
        </div>
        <div class="col-span-12">
          <!-- Begin:slide -->
          <carousel :settings="settings" :breakpoints="breakpoints">
            <slide v-for="(item, index) in products" :key="index">
              <div class="carousel__item w-full h-auto border rounded-xl">
                <div class="item-container">
                  <img
                    :src="item.image"
                    alt="/"
                    class="w-full h-60 rounded-t-xl"
                  />
                  <span
                    v-if="item.discount > 0"
                    class="absolute top-0 bg-pending/80 text-white text-xs -ml-28 mt-4 px-3 py-1 rounded z-10"
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
                        ></ShoppingCartIcon>
                      </Tippy>
                      <Tippy tag="div" class="cursor-pointer" content="Xem">
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
                  <span>Cây cảnh</span>
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
import { useRoute } from "vue-router";
import bottom from "../../views/Footer/Footer.vue";
import "vue3-carousel/dist/carousel.css";
import { Carousel, Slide, Navigation } from "vue3-carousel";
import { computed, onMounted, ref, watch } from "vue";
import { productInfor } from "../../types/productType";
import productService from "../../services/productService";
import { useAuthStore } from "../../stores/authStore";
import { useCartStore } from "../../stores/cartStore";
import { useFeedbackStore } from "../../stores/feedbackStore";
import { setNotificationToastMessage } from "../../utils/myFunction";
import { cartInfor } from "../../types/cartType";
import cartService from "../../services/cartService";
import feedbackService from "../../services/feedbackService";
import { feedbackInfor } from "../../types/feedbackType";
import { useProductStore } from "../../stores/productStore";

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
    const route = useRoute();
    const authStore = useAuthStore();
    const myCartStore = useCartStore();
    const myProductStore = useProductStore();
    const myFeedbackStore = useFeedbackStore();
    const listProduct: any = ref<productInfor[]>([]);
    const isShowDescribe = ref(false);
    const isShowEvaluate = ref(false);
    const quantity = ref(1);
    const changeAmount = ref(0);
    const sales = ref<productInfor[]>([]);
    const products = ref<productInfor[]>([]);
    const currentUser: any = computed(() => {
      return authStore.currentUser;
    });
    const myCarts = computed(() => myCartStore.carts);
    const myFeedback: any = computed(() => myFeedbackStore.feedbacks);
    const content = ref("");
    const rating = ref(0);
    const showComment = ref(false);
    const idUpdate = ref(false);
    const idUpdateAmout = ref("");
    const showBtnEdit = ref(false);
    function showDescribe() {
      isShowEvaluate.value = false;
    }
    function showEvaluate() {
      isShowEvaluate.value = true;
      isShowDescribe.value = false;
    }

    function downAmount() {
      if (quantity.value <= 1) {
        quantity.value;
      } else quantity.value--;
    }
    function upAmount() {
      if (quantity.value >= listProduct.value.amount) {
        quantity.value = listProduct.value.amount;
      } else quantity.value++;
    }

    // get product by id
    async function actionGetProductById() {
      const itemFind: any = { _id: route.params.id } as productInfor;
      const response = await productService.findOne(
        itemFind,
        authStore.currentUser.Token
      );
      if (response.data.success) {
        listProduct.value = response.data.values;
        changeAmount.value = response.data.values.amount;
        idUpdateAmout.value = response.data.values._id;
      } else {
        //setNotificationToastMessage("Tải dữ liệu thất bại", false);
      }
    }

    // Get all product by sale
    async function initGetAllProductBySale() {
      const data = {} as productInfor;
      const response = await productService.findBySale(
        data,
        authStore.currentUser.Token
      );
      if (response.data.success) {
        sales.value = response.data.values;
      } else {
        setNotificationToastMessage("Tải dữ liệu thât bại", false);
      }
    }

    // Get all product by sp liên quan
    async function initGetAllProductByRelate() {
      const data = {} as productInfor;
      const response = await productService.findByNew(
        data,
        authStore.currentUser.Token
      );
      if (response.data.success) {
        products.value = response.data.values;
      } else {
        setNotificationToastMessage("Tải dữ liệu thât bại", false);
      }
    }

    // change amount product
    async function actionEditAmountProduct() {
      const dataUpdate = {
        _id: idUpdateAmout.value,
        amount: Number(changeAmount.value - quantity.value),
      } as productInfor;
      const response = await productService.updateAmount(
        dataUpdate,
        authStore.currentUser.Token
      );
      if (response.data.success) {
        myProductStore.getAllProduct();
      } else {
        setNotificationToastMessage("Cập nhật dữ liệu thất bại", false);
      }
    }

    // add product in cart
    async function actionAddCart() {
      const data = {
        userId: currentUser.value._id,
        productImage: listProduct.value.image,
        productName: listProduct.value.name,
        productId: listProduct.value.uuid,
        product_Id: listProduct.value._id,
        productPrice: listProduct.value.priceSale,
        quantity: quantity.value,
      } as cartInfor;
      if (listProduct.value.amount <= 0) {
        setNotificationToastMessage("Thật tiếc!Sản phẩm đã hết");
      } else {
        const response = await cartService.save(
          data,
          authStore.currentUser.Token
        );
        if (response.data.success) {
          myCartStore.getAllCart();
          //router.push('/product/cart')
          setNotificationToastMessage("Thêm giỏ hàng thành công ", true);
          actionEditAmountProduct();
        } else {
          setNotificationToastMessage("Tải dữ liệu thất bại", false);
        }
      }
    }

    // feedback product
    async function actionFeedback() {
      const data = {
        userId: currentUser.value.username,
        productId: listProduct.value._id,
        productImage: listProduct.value.image,
        content: content.value,
        rating: rating.value,
      } as feedbackInfor;
      if (rating.value < 0 || rating.value > 5) {
        setNotificationToastMessage("Không hợp lệ!", false);
      } else {
        const response = await feedbackService.save(
          data,
          authStore.currentUser.Token
        );
        if (response.data.success) {
          myFeedbackStore.getAllFeedbackById(listProduct.value._id);
          showComment.value = false;
          setNotificationToastMessage("Đánh giá sản phẩm thành công ", true);
        } else {
          setNotificationToastMessage("Tải dữ liệu thất bại", false);
        }
      }
    }

    // delete feedback product
    async function actionDeleteFeedback(item: feedbackInfor) {
      const itemFind: any = { _id: item._id } as feedbackInfor;
      const response = await feedbackService.delete(
        itemFind,
        authStore.currentUser.Token
      );
      if (response.data.success) {
        myFeedbackStore.getAllFeedbackById(listProduct.value._id);
      } else {
        setNotificationToastMessage("Tải dữ liệu thất bại", false);
      }
    }

    //init value by id feedback
    async function actionInitdata(item: feedbackInfor) {
      const itemFindId: any = { _id: item._id } as feedbackInfor;
      const response = await feedbackService.findOne(
        itemFindId,
        authStore.Token
      );
      idUpdate.value = response.data.values._id;
      rating.value = response.data.values.rating;
      content.value = response.data.values.content;
      showBtnEdit.value = true;
      showComment.value = true;
    }

    // edit feedback
    async function actionEditFeedback() {
      const dataUpdate = {
        _id: idUpdate.value,
        rating: rating.value,
        content: content.value,
      } as unknown as feedbackInfor;
      const response = await feedbackService.update(
        dataUpdate,
        authStore.currentUser.Token
      );
      if (response.data.success) {
        showBtnEdit.value = false;
        showComment.value = false;
        myFeedbackStore.getAllFeedbackById(listProduct.value._id);
      } else {
        setNotificationToastMessage("Cập nhật dữ liệu thất bại", false);
      }
    }

    function scrollTop() {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }

    watch(
      () => route.params.id,
      async () => {
        await actionGetProductById();
        scrollTop();
      }
    );
    onMounted(async () => {
      scrollTop();
      await actionGetProductById();
      await initGetAllProductBySale();
      await initGetAllProductByRelate();
      myFeedbackStore.getAllFeedbackById(listProduct.value._id);
    });
    return {
      router,
      route,
      sales,
      myCarts,
      myFeedback,
      content,
      rating,
      listProduct,
      showDescribe,
      showComment,
      isShowDescribe,
      isShowEvaluate,
      showEvaluate,
      showBtnEdit,
      idUpdate,
      downAmount,
      upAmount,
      idUpdateAmout,
      changeAmount,
      products,
      quantity,
      currentUser,
      actionAddCart,
      actionFeedback,
      actionDeleteFeedback,
      actionInitdata,
      actionEditFeedback,
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
