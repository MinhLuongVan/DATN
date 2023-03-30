<template>
  <div>
    <div class="intro-y py-3 lg:px-52 mt-3 lg:mt-5">
      <div class="intro-y flex lg:mt-0 items-center">
        <div class="flex cursor-pointer" @click="router.push('/')">
          <HomeIcon class="w-5 h-5 mt-0.5"></HomeIcon>
          <h2 class="text-lg mx-2 hover:text-lime-500">Trang chủ</h2>
        </div>
        <span>--></span>
        <h2 class="text-lg ml-2 text-lime-500">Thanh toán</h2>
      </div>

      <!-- BEGIN : thanh toán -->
      <div class="intro-y grid grid-cols-12 gap-6 mt-4">
        <div class="col-span-12 lg:col-span-8">
          <!-- Begin: Địa chỉ nhận hàng -->
          <div class="border rounded-md">
            <div
              class="w-full h-12 py-2.5 -mt-0.5 border-b rounded-t-md border-gray-200 flex bg-gray-200"
            >
              <Map-pinIcon class="w-4 mr-1 ml-3"></Map-pinIcon>
              <span class="text-base">Địa chỉ nhận hàng</span>
            </div>
            <div class="grid grid-cols-2 intro-y gap-3">
              <div class="col-span-2 lg:col-span-1 mt-3 px-3">
                <span class="text-base font-medium">Họ tên</span>
                <input
                  type="text"
                  v-model.trim="formData.name"
                  class="w-full rounded-md mt-2"
                  placeholder="Họ và tên"
                />
                <small class="text-red-500 text-base" v-if="errMsg">
                  {{ nameErr }}
                </small>
              </div>
              <div class="col-span-2 lg:col-span-1 mt-3 px-3">
                <span class="text-base font-medium">Điện thoại</span>
                <input
                  type="text"
                  v-model.trim="formData.sđt"
                  class="rounded-md mt-2 w-full"
                  placeholder="SĐT"
                />
                <small class="text-red-500 text-base" v-if="errMsg">
                  {{ sđtErr }}
                </small>
              </div>
            </div>
            <div class="grid grid-cols-2 intro-y gap-3">
              <div class="col-span-2 lg:col-span-1 mt-3 px-3">
                <span class="text-base font-medium">Tỉnh/Thành phố</span>
                <input
                  type="text"
                  v-model.trim="formData.city"
                  class="w-full rounded-md mt-2"
                  placeholder="Vd: Bắc Giang"
                />
                <small class="text-red-500 text-base" v-if="errMsg">
                  {{ cityErr }}
                </small>
              </div>
              <div class="col-span-2 lg:col-span-1 mt-3 px-3">
                <span class="text-base font-medium">Quận/Huyện</span>
                <input
                  type="text"
                  v-model.trim="formData.district"
                  class="rounded-md mt-2 w-full"
                  placeholder="Vd: Yên Dũng"
                />
                <small class="text-red-500 text-base" v-if="errMsg">
                  {{ districtErr }}
                </small>
              </div>
            </div>
            <div class="mt-3 px-3">
              <span class="text-base font-medium">Địa chỉ chi tiết</span>
              <input
                type="text"
                v-model.trim="formData.details"
                class="w-full rounded-md mt-2"
                placeholder="Vd: Thôn Tân Mỹ- Xã Lãng Sơn"
              />
              <small class="text-red-500 text-base" v-if="errMsg">
                {{ detailErr }}
              </small>
            </div>
            <div class="mt-3 px-3">
              <span class="text-base font-medium">Ghi chú</span>
              <textarea
                v-model="formData.note"
                class="w-full rounded-md mt-2 mb-4"
                rows="2"
                placeholder="Vd: Chuyển hàng tong giờ hành chính từ thứ 2 đến thứ 6"
              ></textarea>
            </div>
          </div>
          <!-- End : Địa chỉ nhận hàng -->

          <!-- Begin: hình thức thanh toán -->
          <div class="border rounded-md mt-4">
            <div
              class="w-full h-12 py-2.5 -mt-0.5 border-b rounded-t-md border-gray-200 flex bg-gray-200"
            >
              <Credit-cardIcon class="w-4 mr-1 ml-3"></Credit-cardIcon>
              <span class="text-base">Phương thức thanh toán</span>
            </div>
            <div class="my-3 px-3 flex items-center cursor-pointer">
              <input
                type="checkbox"
                name="checkedATM"
                id="checkedATM"
                class="rounded-full"
              />
              <div class="border w-full flex ml-2 rounded-md p-2">
                <img
                  src="../../assets/images/log-atm.jpg"
                  alt="/"
                  class="w-14 lg:w-20 ml-2"
                />
                <div class="ml-3 py-3">
                  <h2 class="text-base font-medium">Thanh toán qua IPay</h2>
                  <p>
                    Sử dụng thẻ ATM hoặc Internet Banking để tiến hành chuyển
                    khoản cho chúng tôi
                  </p>
                </div>
              </div>
            </div>

            <div class="my-3 px-3 flex items-center cursor-pointer">
              <input
                type="checkbox"
                name="checked"
                id="checked"
                class="rounded-full"
                checked
              />
              <div class="border w-full flex ml-2 rounded-md p-2">
                <img
                  src="../../assets/images/logo-xe.png"
                  alt="/"
                  class="w-14 lg:w-20 ml-2"
                />
                <div class="ml-3 py-2">
                  <h2 class="text-base font-medium">
                    Thanh toán khi nhận hàng
                  </h2>
                  <p>
                    Khách hàng thanh toán tiền mặt cho nhân viên giao hàng khi
                    hàng được chuyển đến địa chỉ nhận hàng
                  </p>
                </div>
              </div>
            </div>
          </div>
          <!-- End: hình thức thanh toán -->
        </div>
        <div class="col-span-12 lg:col-span-4">
          <!-- Begin: Đơn hàng -->
          <div class="border rounded-md">
            <div
              class="w-full h-12 py-2.5 border-b rounded-t-md border-gray-200 flex bg-gray-200"
            >
              <Shopping-cartIcon class="w-4 mr-1 ml-3"></Shopping-cartIcon>
              <span class="text-base">Đơn hàng</span>
            </div>
            <div v-if="!showProduct" class="flex p-3">
              <img :src="listProduct.image" alt="/" class="w-24 h-24" />
              <div class="p-2.5">
                <p class="font-medium pb-1">{{ listProduct.name }}</p>
                <p>{{ listProduct.priceSale }}vnđ</p>
                <span>x1</span>
                <p>{{ listProduct.priceSale }}vnđ</p>
              </div>
            </div>
            <div v-else class="flex p-3"></div>
          </div>
          <!-- End: Đơn hàng -->

          <!-- Begin: Vận chuyển -->
          <div class="border rounded-md mt-4">
            <div
              class="w-full h-12 py-2.5 border-b rounded-t-md border-gray-200 flex bg-gray-200"
            >
              <TruckIcon class="w-5 mr-1 ml-3"></TruckIcon>
              <span class="text-base">Vận chuyển</span>
            </div>
            <div class="p-3">
              <h2 class="font-medium">Phí giao hàng tận nơi</h2>
              <div class="flex py-3">
                <input
                  type="checkbox"
                  name="checked"
                  id="checkbox"
                  class="rounded-full"
                  checked
                />
                <p class="px-2">Miễn phí giao hàng toàn quốc</p>
              </div>
            </div>
          </div>
          <!-- End: Vận chuyển-->

          <!-- Begin: Thành tiền -->
          <table class="mt-4">
            <tr>
              <th class="border px-8 py-2">Thành tiền</th>
              <th class="border px-8 py-2">Phí vận chuyển</th>
              <th class="border px-8 py-2">Tổng tiền</th>
            </tr>
            <tr v-if="!showProduct">
              <td class="border py-2 px-8">{{ listProduct.priceSale }}vnđ</td>
              <td class="border text-center py-2 px-8">0vnđ</td>
              <td class="border text-red-500 py-2 px-8">
                {{ listProduct.priceSale }}vnđ
              </td>
            </tr>
            <tr v-else>
              <td class="border py-2 px-8">0vnđ</td>
              <td class="border text-center py-2 px-8">0vnđ</td>
              <td class="border text-red-500 py-2 px-8">0vnđ</td>
            </tr>
          </table>
          <!-- End: Thành tiền-->
          <div class="mt-4 flex justify-between">
            <button
              class="px-4 py-2 rounded-md bg-gray-200 hover:bg-gray-300"
              @click="router.push('/product/cart')"
            >
              Quay lại giỏ hàng
            </button>
            <button
              class="px-4 py-2 text-white rounded-md bg-lime-500 hover:bg-lime-600"
              @click="actionOrder()"
            >
              Đặt hàng
            </button>
          </div>
        </div>
      </div>
      <!-- END : thanh toán -->
    </div>
    <bottom />
  </div>
</template>

<script lang="ts">
import { useRoute } from "vue-router";
import { useRouter } from "vue-router";
import { productInfor } from "../../types/productType";
import productService from "../../services/productService";
import { useAuthStore } from "../../stores/authStore";
import bottom from "../../views/Footer/Footer.vue";
import { computed, onMounted, reactive, ref } from "vue";
import {
  REGEXNUMBER,
  REQUIRED,
  setNotificationToastMessage,
} from "../../utils/myFunction";
import { orderInfor } from "../../types/orderType";
import OrderService from "../../services/orderService";
import ShortUniqueId from "short-unique-id";

export default {
  name: "Pay",
  components: {
    bottom,
  },
  setup() {
    const router = useRouter();
    const route = useRoute();
    const authStore = useAuthStore();
    const listProduct: any = ref<productInfor[]>([]);
    const uuid = new ShortUniqueId({ length: 8 });
    const currentUser: any = computed(() => {
      return authStore.currentUser;
    });
    const formData = reactive({
      name: "",
      sđt: "",
      city: "",
      district: "",
      details: "",
      note: "",
      status: "",
      payments: "",
    });
    const showProduct = ref(false);
    // validate
    const errMsg = ref(false);
    const nameErr = computed(() => {
      if (!formData.name) return REQUIRED;
    });
    const phonePattern = /^[0-9]{10,11}$/;
    const sđtErr = computed(() => {
      if (!formData.sđt) {
        return REQUIRED;
      } else if (!phonePattern.test(formData.sđt)) {
        return REGEXNUMBER;
      }
    });
    const cityErr = computed(() => {
      if (!formData.city) return REQUIRED;
    });
    const districtErr = computed(() => {
      if (!formData.district) return REQUIRED;
    });
    const detailErr = computed(() => {
      if (!formData.details) return REQUIRED;
    });

    //Order
    const actionOrder = async () => {
      if (
        nameErr.value ||
        sđtErr.value ||
        cityErr.value ||
        districtErr.value ||
        detailErr.value
      ) {
        errMsg.value = true;
      } else {
        const data = {
          userId: currentUser.value._id,
          uuid: uuid(),
          name: formData.name,
          sđt: formData.sđt,
          city: formData.city,
          district: formData.district,
          details: formData.details,
          note: formData.note,
          status: "Chờ duyệt",
          payments: "Thanh toán khi nhận hàng",
          totalMoney: listProduct.value.priceSale,
        } as orderInfor;
        const response = await OrderService.save(
          data,
          authStore.currentUser.Token
        );
        if (response.data.success) {
          reloadData();
          setNotificationToastMessage("Đặt hàng thành công ", true);
          router.push("/my-order");
        } else {
          setNotificationToastMessage("Đặt hàng thất bại", false);
        }
      }
    };

    // get product by id
    async function actionGetProductById() {
      const itemFind: any = { _id: route.params.id } as productInfor;
      const response = await productService.findOne(
        itemFind,
        authStore.currentUser.Token
      );
      if (response.data.success) {
        listProduct.value = response.data.values;
      } else {
        setNotificationToastMessage("Tải dữ liệu thất bại", false);
      }
    }

    function reloadData() {
      showProduct.value = true;
      errMsg.value = false;
    }

    function scrollTop() {
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      })
    }

    onMounted(async () => {
      await actionGetProductById();
      scrollTop();
    });
    return {
      route,
      router,
      errMsg,
      uuid,
      nameErr,
      sđtErr,
      cityErr,
      districtErr,
      detailErr,
      formData,
      showProduct,
      listProduct,
      actionOrder,
    };
  },
};
</script>

<style></style>
