<template>
  <div>
    <div class="intro-y py-3 lg:px-52 mt-3 lg:mt-5">
      <div class="intro-y flex lg:mt-0 items-center">
        <div class="flex cursor-pointer" @click="router.push('/')">
          <HomeIcon class="w-5 h-5 mt-0.5"></HomeIcon>
          <h2 class="text-lg mx-2 hover:text-lime-500">Trang chủ</h2>
        </div>
        <span>--></span>
        <h2 class="text-lg ml-2 text-lime-500">Đơn hàng</h2>
      </div>

      <div class="mt-2 lg:mt-4">
        <!-- BEGIN: Data List -->
        <div class="intro-y col-span-12 overflow-auto lg:overflow-visible">
          <table v-if="myOrder.length > 0" class="table table-report -mt-2">
            <thead>
              <tr>
                <th class="text-center whitespace-nowrap">Mã đơn hàng</th>
                <th class="text-center whitespace-nowrap">Trạng thái</th>
                <th class="text-center whitespace-nowrap">Ngày đặt</th>
                <th class="text-center whitespace-nowrap">Tổng tiền</th>
                <th class="text-center whitespace-nowrap">Hành động</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="item in myOrder" :key="item._id" class="intro-x">
                <td class="text-center pt-4">{{ item.uuid }}</td>
                <td class="text-center pt-4">{{ item.status }}</td>
                <td class="text-center pt-4">
                  {{ moment(item.createdAt).format("DD/MM/YYYY HH:mm") }}
                </td>
                <td class="text-center pt-4">{{ item.totalMoney }}vnđ</td>

                <td class="table-report__action w-56">
                  <div class="flex justify-center items-center">
                    <a
                      class="flex items-center text-danger"
                      href="javascript:;"
                      @click="actionInitDeleteOrder(item)"
                    >
                      <Trash2Icon class="w-4 h-4 mr-1" /> Hủy
                    </a>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
          <div v-else class="text-center">
            <span class="text-">Thật tiếc! Chưa có đơn hàng nào!</span>
          </div>
          <!-- BEGIN: Delete Confirmation Modal -->
          <Modal
            :show="deleteConfirmationModal"
            @hidden="deleteConfirmationModal = false"
          >
            <ModalBody class="p-0">
              <div class="p-5 text-center">
                <XCircleIcon class="w-16 h-16 text-danger mx-auto mt-3" />
                <div class="text-3xl mt-5">Hủy đơn hàng ?</div>
                <div class="text-slate-500 mt-2">
                  Bạn có chắc chắn muốn hủy đơn hàng này?
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
                  @click="actionDeleteOrder"
                >
                  Hủy
                </button>
              </div>
            </ModalBody>
          </Modal>
          <!-- END: Delete Confirmation Modal -->
        </div>
        <!-- END: Data List -->
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent, onMounted, ref } from "vue";
import moment from "moment";
import { useRouter } from "vue-router";
import { orderInfor } from "../../types/orderType";
import { useAuthStore } from "../../stores/authStore";
import { setNotificationToastMessage } from "../../utils/myFunction";
import orderService from "../../services/orderService";
import { OrderModel } from "../../model/orderModel";
export default defineComponent({
  name: "MyOrder",
  setup() {
    const router = useRouter();
    const deleteConfirmationModal = ref(false);
    const myOrder = ref<orderInfor[]>([]);
    const authStore = useAuthStore();
    const selectedOrder = ref<OrderModel>(new OrderModel());

    // get order by id
    async function actionGetAllOrderById(userId: string) {
      const itemFind: any = { userId: userId } as orderInfor;
      const response = await orderService.findAllById(
        itemFind,
        authStore.currentUser.Token
      );
      if (response.data.success) {
        myOrder.value = response.data.values;
      } else {
        setNotificationToastMessage("Tải dữ liệu thất bại", false);
      }
    }

    //init data delete
    function actionInitDeleteOrder(item: orderInfor) {
      selectedOrder.value._id = item._id;
      deleteConfirmationModal.value = true;
    }
    // Delete order
    async function actionDeleteOrder() {
      const itemDelete = new OrderModel();
      itemDelete._id = selectedOrder.value._id;
      const response = await orderService.delete(
        itemDelete,
        authStore.currentUser.Token
      );
      if (response.data.error) {
        setNotificationToastMessage("Xóa dữ liệu thất bại", false);
      } else {
        deleteConfirmationModal.value = false;
        // myTypeStore.getAllTypeProduct();
        actionGetAllOrderById(authStore.currentUser._id);
      }
    }

    onMounted(async () => {
      await actionGetAllOrderById(authStore.currentUser._id);
    });
    return {
      router,
      moment,
      myOrder,
      deleteConfirmationModal,
      actionInitDeleteOrder,
      actionDeleteOrder,
    };
  },
});
</script>
<style></style>
