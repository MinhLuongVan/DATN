<template>
  <div>
    <div class="intro-y py-3 lg:px-52 mt-3 lg:mt-5">
      <div class="intro-y flex lg:mt-0 items-center">
        <div class="flex cursor-pointer" @click="router.push('/')">
          <HomeIcon class="w-5 h-5 mt-0.5"></HomeIcon>
          <h2 class="text-lg mx-2 hover:text-lime-500">Trang chủ</h2>
        </div>
        <span>--></span>
        <h2 class="text-lg ml-2 text-lime-500">Giỏ hàng</h2>
      </div>

      <!-- BEGIN : GIỎ HÀNG -->
      <div class="intro-y grid grid-cols-12">
        <div class="col-span-12">
          <h2 class="text-xl mt-4 lg:text-2xl">Giỏ hàng</h2>
          <table v-if="myCart.length > 0" class="mt-3 table table-bordered">
            <thead>
              <tr>
                <th class="border text-center">Stt</th>
                <th class="border text-center">Mã sản phẩm</th>
                <th class="border text-center">Ảnh</th>
                <th class="border text-center">Tên sản phẩm</th>
                <th class="border text-center">Đơn giá</th>
                <th class="border text-center">Số lượng</th>
                <th class="border text-center">Tổng</th>
                <th class="border text-center">Hành động</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(item, index) in myCart" :key="index">
                <td class="border text-center">{{ index + 1 }}</td>
                <td class="border text-center">{{ item.productId }}</td>
                <td class="w-36 border">
                  <img :src="item.productImage" alt="" />
                </td>
                <td class="border text-center">{{ item.productName }}</td>
                <td class="border text-center">{{ item.productPrice }}vnđ</td>
                <td class="border text-center">{{ item.quantity }}</td>
                <td class="border text-center">{{ item.totalMoney }}vnđ</td>
                <td class="border text-center">
                  <div class="flex justify-center cursor-pointer">
                    <a
                      class="flex items-center mr-3"
                      href="javascript:;"
                      @click="actionInitEditCart(item)"
                    >
                      <CheckSquareIcon class="w-4 h-4 mr-1" /> Chỉnh sửa
                    </a>
                    <a
                      class="flex items-center text-danger"
                      href="javascript:;"
                      @click="actionInitDeleteCart(item)"
                    >
                      <Trash2Icon class="w-4 h-4 mr-1" /> Xóa
                    </a>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
          <div v-else class="w-full pb-48 text-center">
            <span class="text-lg mt-2"
              >Bạn chưa có sản phẩm nào trong giỏ hàng!</span
            >
          </div>
          <!-- BEGIN: Delete Confirmation Modal -->
          <Modal
            :show="deleteConfirmationModal"
            @hidden="deleteConfirmationModal = false"
          >
            <ModalBody v-if="!showInput" class="p-0">
              <div class="p-5 text-center">
                <XCircleIcon class="w-16 h-16 text-danger mx-auto mt-3" />
                <div class="text-3xl mt-5">Xóa giỏ hàng</div>
                <div class="text-slate-500 mt-2">
                  Bạn có chắc chắn muốn xóa sản phẩm này trong giỏ hàng?
                </div>
              </div>
              <div class="px-5 pb-8 text-center">
                <button
                  type="button"
                  @click="deleteConfirmationModal = false"
                  class="btn btn-outline-secondary w-24 mr-1"
                >
                  Trở lại
                </button>
                <button
                  type="button"
                  class="btn btn-danger w-24"
                  @click="actionDeleteCart"
                >
                  Xóa
                </button>
              </div>
            </ModalBody>
            <ModalBody v-else class="p-0">
              <div class="p-5 text-center">
                <div class="text-lime-500 mt-5 text-2xl">Cập nhật giỏ hàng</div>
              </div>
              <div class="px-10">
                <label class="text-base">Số lượng</label>
                <input
                  class="w-full mt-2 rounded-md"
                  type="number"
                  min="1"
                  v-model="quantityChange"
                />
              </div>
              <div class="py-5 text-center lg:pl-56 lg:pr-3">
                <button
                  type="button"
                  @click="deleteConfirmationModal = false"
                  class="btn btn-outline-secondary w-20 mr-1"
                >
                  Trở lại
                </button>
                <button
                  type="button"
                  class="btn text-white bg-lime-500"
                  @click="actionEditCart()"
                >
                  Cập nhật
                </button>
              </div>
            </ModalBody>
          </Modal>
          <!-- END: Delete Confirmation Modal -->
          <table v-if="myCart.length > 0" class="mt-5">
            <tr>
              <th class="border px-8 py-2">Thành tiền</th>
              <th class="border px-8 py-2">Tổng tiền</th>
            </tr>
            <tr>
              <td class="border py-2 px-8">{{ totalPrice }}vnđ</td>
              <td class="border py-2 px-8">{{ totalPrice }}vnđ</td>
            </tr>
          </table>
          <div class="flex justify-between">
            <div v-if="myCart.length > 0">
              <button
                class="mt-4 px-4 py-2 rounded-md text-white bg-lime-500 hover:bg-lime-600"
                @click="router.push('/checkout')"
              >
                Tiến hành thanh toán
              </button>
            </div>
            <div>
              <button
                class="mt-3 px-4 py-2 rounded-md bg-gray-200 hover:bg-gray-300"
                @click="router.push('/')"
              >
                Tiếp tục mua hàng
              </button>
            </div>
          </div>
        </div>
      </div>
      <!-- END : GIỎ HÀNG -->
    </div>
    <bottom />
  </div>
</template>

<script lang="ts">
import { useRouter } from "vue-router";
import bottom from "../../views/Footer/Footer.vue";
import { computed, onMounted, ref } from "vue";
import { cartInfor } from "../../types/cartType";
import { useAuthStore } from "../../stores/authStore";
import { setNotificationToastMessage } from "../../utils/myFunction";
import cartService from "../../services/cartService";
import { CartModel } from "../../model/cartModel";
import { useCartStore } from "../../stores/cartStore";
import { productInfor } from "../../types/productType";
import productService from "../../services/productService";
import { useProductStore } from "../../stores/productStore";

export default {
  name: "Cart",
  components: {
    bottom,
  },
  setup() {
    const router = useRouter();
    const authStore = useAuthStore();
    const carts: any = ref<cartInfor[]>([]);
    const myCartStore = useCartStore();
    const myProductStore = useProductStore();
    const myCart: any = computed(() => myCartStore.carts);
    const selectedCart = ref<CartModel>(new CartModel());
    const deleteConfirmationModal = ref(false);
    const quantityChange = ref(1);
    const changeAmount = ref(0);
    const showInput = ref(false);
    const idUpdate = ref("");
    const idUpdateAmout = ref("");
    const totalPrice = computed(() => {
      let total = 0;
      myCart.value.forEach((item: any) => {
        total += item.productPrice * item.quantity;
      });
      return total;
    });
    const test = computed(() => quantityChange.value)

    //init value by id cart
    async function actionInitEditCart(item: cartInfor) {
      const itemFindId: any = { _id: item._id } as cartInfor;
      const response = await cartService.findOne(itemFindId, authStore.Token);
      idUpdate.value = response.data.values._id;
      quantityChange.value = response.data.values.quantity;
      deleteConfirmationModal.value = true;
      showInput.value = true;
    }

    //edit cart
    async function actionEditCart() {
      const dataUpdate = {
        _id: idUpdate.value,
        quantity: Number(quantityChange.value),
      } as cartInfor;
      const response = await cartService.update(
        dataUpdate,
        authStore.currentUser.Token
      );
      if (response.data.success) {
        deleteConfirmationModal.value = false;
        showInput.value = false;
        myCartStore.getAllCart();
      } else {
        setNotificationToastMessage("Cập nhật dữ liệu thất bại", false);
      }
    }

    async function actionGetProductById(product_Id :string) {
      const itemFind: any = { _id: product_Id } as productInfor;
      const response = await productService.findOne(
        itemFind,
        authStore.currentUser.Token
      );
      if (response.data.success) {
        changeAmount.value = response.data.values.amount;
        idUpdateAmout.value = response.data.values._id;
      } else {
        setNotificationToastMessage("Tải dữ liệu thất bại", false);
      }
    }

     // change amount product
     async function actionEditAmountProduct() {
      const dataUpdate = {
        _id: idUpdateAmout.value,
        amount: Number((changeAmount.value + quantityChange.value)),
      } as productInfor ;
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

    // init id cart
    function actionInitDeleteCart(item: cartInfor) {
      selectedCart.value._id = item._id;
      deleteConfirmationModal.value = true;
      actionGetProductById(item.product_Id);
      console.log('test',test.value);
      
    }

    // Delete cart
    async function actionDeleteCart() {
      const itemDelete = new CartModel();
      itemDelete._id = selectedCart.value._id;
      const response = await cartService.delete(
        itemDelete,
        authStore.currentUser.Token
      );
      if (response.data.error) {
        setNotificationToastMessage("Xóa dữ liệu thất bại", false);
      } else {
        deleteConfirmationModal.value = false;
        showInput.value = true;
        myCartStore.getAllCart();
        actionEditAmountProduct();
      }
    }

    onMounted(async () => {
      await myCartStore.getAllCart();
    });
    return {
      router,
      carts,
      myCart,
      showInput,
      totalPrice,
      idUpdate,
      idUpdateAmout,
      changeAmount,
      quantityChange,
      test,
      deleteConfirmationModal,
      actionDeleteCart,
      actionInitDeleteCart,
      actionInitEditCart,
      actionEditCart, 
    };
  },
};
</script>

<style></style>
