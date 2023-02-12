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
              <tr v-for="(item,index) in myCart" :key="index">
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
                  <div class="flex justify-center text-red-500">
                    <TrashIcon class="w-5"></TrashIcon> 
                    <p class="pl-1 pt-1"
                    @click="actionInitDeleteCart(item)">Xóa</p>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
          <div v-else class="w-full text-center">
            <span class="text-lg mt-2">Bạn chưa có sản phẩm nào trong giỏ hàng!</span>
          </div>
            <!-- BEGIN: Delete Confirmation Modal -->
        <Modal
          :show="deleteConfirmationModal"
          @hidden="deleteConfirmationModal = false"
        >
          <ModalBody class="p-0">
            <div class="p-5 text-center">
              <XCircleIcon class="w-16 h-16 text-danger mx-auto mt-3" />
              <div class="text-3xl mt-5">Xóa sản phẩm</div>
              <div class="text-slate-500 mt-2">
                Bạn có chắc chắn muốn xóa sản phẩm này?
              </div>
            </div>
            <div class="px-5 pb-8 text-center">
              <button
                type="button"
                @click="deleteConfirmationModal = false"
                class="btn btn-outline-secondary w-24 mr-1"
              >
                Cancel
              </button>
              <button
                type="button"
                class="btn btn-danger w-24"
                @click="actionDeleteProduct"
              >
                Delete
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
              <td class="border py-2 px-8">70.000đ </td>
              <td class="border py-2 px-8">70.000đ</td>
            </tr>
          </table>
         <div class="flex justify-between">
          <div v-if="myCart.length > 0">
            <button class="mt-4 px-4 py-2 rounded-md text-white bg-lime-500 hover:bg-lime-600 ">Tiến hành thanh toán</button>
          </div>
          <div>
            <button class="mt-4 px-4 py-2 rounded-md  bg-gray-200 hover:bg-gray-300 "
            @click="router.push('/')">Tiếp tục mua hàng</button>
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
export default {
  name: "Cart",
  components: {
    bottom,
  },
  setup() {
    const router = useRouter();
    const authStore = useAuthStore();
    const carts = ref<cartInfor[]>([]);
    const myCartStore = useCartStore();
    const myCart: any = computed(() => myCartStore.carts) 
    const selectedCart = ref<CartModel>(new CartModel());
    const deleteConfirmationModal = ref(false);

    // init id cart
    function actionInitDeleteCart(item: cartInfor) {
      selectedCart.value._id = item._id;
      deleteConfirmationModal.value = true;
    }

    // Delete product
    async function actionDeleteProduct() {
      const itemDelete = new CartModel();
      itemDelete._id = selectedCart.value._id;
      const response = await cartService.delete(itemDelete, authStore.token);
      if (response.data.error) {
        setNotificationToastMessage("Xóa dữ liệu thất bại", false);
      } else {
        deleteConfirmationModal.value = false;
        myCartStore.getAllCart();
      }
    }
    onMounted( async () => {
      await myCartStore.getAllCart();;
    })
    return {
      router,
      carts,
      myCart,
      deleteConfirmationModal,
      actionDeleteProduct,
      actionInitDeleteCart
    };
  },
};
</script>

<style></style>
