<template>
  <div>
    <div class="block lg:flex justify-between py-3 lg:py-1 mt-8 lg:mt-0">
      <span class="lg:pt-2.5 text-slate-700"
        >Tổng số đơn hàng : {{ totalOrder }}</span
      >
      <div class="flex">
        <div class="min-w-[230px] max-w-sm relative my-2 lg:my-0">
          <input
            class="form-control shadow-none border border-slate-300 dark:border-slate-300 dark:bg-white dark:text-slate-700 pr-11"
            type="search"
            placeholder="Tìm kiếm..."
          />
          <button class="absolute inset-y-0 right-0 px-3 border-l">
            <SearchIcon class="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
    <div class="mt-2 lg:mt-4">
      <!-- BEGIN: Data List -->
      <div class="intro-y col-span-12 overflow-auto lg:overflow-visible">
        <table v-if="orders.length > 0" class="table table-report -mt-2">
          <thead>
            <tr>
              <th class="text-center whitespace-nowrap">Mã đơn hàng</th>
              <th class="text-center whitespace-nowrap">Tên người đặt</th>
              <th class="text-center whitespace-nowrap">
                Hình thức thanh toán
              </th>
              <th class="text-center whitespace-nowrap">Trạng thái</th>
              <th class="text-center whitespace-nowrap">Ngày đặt</th>
              <th class="text-center whitespace-nowrap">Tổng tiền</th>
              <th class="text-center whitespace-nowrap">Hành động</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(item, index) in orders" :key="index" class="intro-x">
              <td class="text-center pt-4">{{ item.uuid }}></td>
              <td class="text-center pt-4">{{ item.name }}</td>
              <td class="text-center pt-4">{{ item.payments }}</td>
              <td class="text-center pt-4">
                <button class="py-1 px-2 bg-slate-100 rounded-md">
                  {{ item.status }}
                </button>
              </td>
              <td class="text-center pt-4">
                {{ moment(item.createdAt).format("DD/MM/YYYY HH:mm") }}
              </td>
              <td class="text-center pt-4">{{ item.totalMoney }}vnđ</td>
              <td class="table-report__action w-56">
                <div class="flex justify-center items-center">
                  <a
                    class="flex items-center mr-3 cursor-pointer"
                    @click="router.push('/admin/order/' + item._id)"
                  >
                    <EyeIcon class="w-4 h-4 mr-1" /> Xem
                  </a>
                  <a
                    class="flex items-center text-danger"
                    @click="actionInitDeleteOrder(item)"
                  >
                    <Trash2Icon class="w-4 h-4 mr-1" /> Xóa
                  </a>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
        <div v-else class="text-center">
          <span class="text-">Thật tiếc! Chưa có đơn hàng nào!</span>
        </div>
      </div>
      <!-- END: Data List -->
      <!-- BEGIN: Delete Confirmation Modal -->
      <Modal
        :show="deleteConfirmationModal"
        @hidden="deleteConfirmationModal = false"
      >
        <ModalBody class="p-0">
          <div class="p-5 text-center">
            <XCircleIcon class="w-16 h-16 text-danger mx-auto mt-3" />
            <div class="text-3xl mt-5">Xóa đơn hàng ?</div>
            <div class="text-slate-500 mt-2">
              Bạn có chắc muốn xóa đơn hàng này không?
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
              @click="actionDeleteOrder()"
            >
              Xóa
            </button>
          </div>
        </ModalBody>
      </Modal>
      <!-- END: Delete Confirmation Modal -->
      <div v-if="orders.length > 0"
        class="intro-y col-span-12 flex flex-wrap sm:flex-row sm:flex-nowrap items-center"
      >
        <nav
          class="w-full sm:w-auto sm:mr-auto items-center mt-5 mx-auto bottom-0"
        >
          <Paginate
            :page-count="totalPages"
            :page-range="3"
            :margin-pages="2"
            :prev-text="'<<'"
            :next-text="'>>'"
            :container-class="'pagination'"
            :page-class="'page-item'"
            :click-handler="initGetAllOrder"
          >
          </Paginate>
        </nav>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { useRouter } from "vue-router";
import { computed, defineComponent, onMounted, ref } from "vue";
import { useOrderStore } from "../../../stores/orderStore";
import moment from "moment";
import { orderInfor } from "../../../types/orderType";
import { OrderModel } from "../../../model/orderModel";
import orderService from "../../../services/orderService";
import { setNotificationToastMessage } from "../../../utils/myFunction";
import { useAuthStore } from "../../../stores/authStore";
import Paginate from "vuejs-paginate-next";
export default defineComponent({
  name: "Orders",
  components: { Paginate },
  setup() {
    const router = useRouter();
    const myOrderStore = useOrderStore();
    const authStore = useAuthStore();
    const myOrder: any = computed(() => myOrderStore.orders);
    const deleteConfirmationModal = ref(false);
    const selectedOrder = ref<OrderModel>(new OrderModel());
    const orders = ref<orderInfor[]>([]);
    const totalPages = ref(1);
    const currentPage = ref(1);
    const totalOrder = ref(0);

    // get all order by page
    async function initGetAllOrder(page: number) {
      currentPage.value = page;
      const data = {
        page: currentPage.value,
      } as any;
      const response = await orderService.findByPage(
        data,
        authStore.currentUser.Token
      );
      // products.value = response.data.values;
      if (response.data.success) {
        orders.value = response.data.values.data;
        totalOrder.value = response.data.values.total;
        totalPages.value = response.data.values.totalPage;
      } else {
        setNotificationToastMessage("Tải dữ liệu thât bại", false);
      }
    }
    // init data delete order
    async function actionInitDeleteOrder(item: orderInfor) {
      selectedOrder.value._id = item._id;
      deleteConfirmationModal.value = true;
    }

    //delete order
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
        // myOrderStore.getAllOrder();
        initGetAllOrder(1);
      }
    }

    onMounted(async () => {
      await initGetAllOrder(1);
      // await myOrderStore.getAllOrder();
    });
    return {
      router,
      myOrder,
      orders,
      moment,
      totalPages,
      totalOrder,
      currentPage,
      actionInitDeleteOrder,
      actionDeleteOrder,
      deleteConfirmationModal,
      initGetAllOrder
    };
  },
});
</script>
