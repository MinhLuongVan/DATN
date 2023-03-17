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
            v-on:keyup.enter="actionSearchOrder"
            v-model="keyword"
          />
          <button
            class="absolute inset-y-0 right-0 px-3 border-l"
            @click="actionSearchOrder"
          >
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
                <button
                  class="py-1 px-2 text-white rounded-md"
                  :class=" item.status === 'Chờ duyệt' ? 'bg-red-500' : 'bg-green-500'"
                  @click="actionEditStatus(item)"
                >
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
                    @click="actionShowOrder(item)"
                  >
                    <EyeIcon class="w-4 h-4 mr-1" /> Xem
                  </a>
                  <a
                    class="flex items-center text-danger cursor-pointer"
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
              class="btn btn-danger w-24 cursor-pointer"
              @click="actionDeleteOrder()"
            >
              Xóa
            </button>
          </div>
        </ModalBody>
      </Modal>
      <!-- END: Delete Confirmation Modal -->
       <!-- BEGIN : Modal show order -->
       <Modal
            :show="showConfirmationModal"
            @hidden="showConfirmationModal = false"
          >
            <ModalBody class="p-0">
              <div class="p-5 text-center">
                <div class="text-2xl mt-3 font-medium text-lime-500">
                  Chi tiết đơn hàng
                </div>
                <div class="w-full">
                  <div class="mt-3 h-auto">
                    <div class="px-8 w-full">
                      <div class="flex py-2 text-base">
                        <span class="font-medium">Mã đơn hàng:</span>
                        <p class="px-2">{{ formData.uuid }}</p>
                      </div>
                      <div class="flex py-2 text-base">
                        <span class="font-medium">Người đặt:</span>
                        <p class="px-2">{{ formData.name }}</p>
                      </div>
                      <div class="flex py-2 text-base">
                        <span class="font-medium">Sđt:</span>
                        <p class="px-2">{{ formData.sđt }}</p>
                      </div>
                      <div class="flex py-2 text-base">
                        <span class="font-medium">Địa chỉ chi tiết:</span>
                        <p class="px-2">{{ formData.details }}-</p>
                        <p>{{ formData.district }}-</p>
                        <p>{{ formData.city }}</p>
                      </div>
                      <div class="flex py-1 text-base">
                        <span class="font-medium pt-0.5">Trạng thái:</span>
                        <p class="px-2">
                          <button
                            class="py-1 px-2 text-white text-sm rounded-md"
                            :class="
                              formData.status === 'Chờ duyệt'
                                ? 'bg-red-500'
                                : 'bg-green-500'
                            "
                          >
                            {{ formData.status }}
                          </button>
                        </p>
                      </div>
                      <div class="flex py-2 text-base">
                        <span class="font-medium">Ngày đặt:</span>
                        <p class="px-2">
                          {{
                            moment(formData.cretedAt).format("DD/MM/YYYY HH:mm")
                          }}
                        </p>
                      </div>
                      <div class="flex py-2 text-base">
                        <span class="font-medium">Tổng tiền:</span>
                        <p class="px-2">{{ formData.totalMoney }}vnđ</p>
                      </div>
                      <div class="flex py-2 text-base">
                        <span class="font-medium">Ghi chú:</span>
                        <p class="px-2">{{ formData.note }}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="px-12 pb-8">
                <button
                  type="button"
                  @click="showConfirmationModal = false"
                  class="border rounded-md py-1.5 w-24 hover:bg-slate-100"
                >
                  Trở lại
                </button>
              </div>
            </ModalBody>
          </Modal>
          <!-- END : Modal show order -->
      <div
        v-if="orders.length > 0"
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
import { computed, defineComponent, onMounted, reactive, ref } from "vue";
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
    const showConfirmationModal = ref(false);
    const selectedOrder = ref<OrderModel>(new OrderModel());
    const orders = ref<orderInfor[]>([]);
    const totalPages = ref(1);
    const currentPage = ref(1);
    const totalOrder = ref(0);
    const keyword = ref("");
    const status = ref("");
    const idUpdate = ref("");
    const formData = reactive({
      uuid: "",
      name: "",
      sđt: "",
      city: "",
      district: "",
      details: "",
      note: "",
      status: "",
      payments: "",
      totalMoney: 0,
      cretedAt: 2023,
    });

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
      if (response.data.success) {
        orders.value = response.data.values.data;
        totalOrder.value = response.data.values.total;
        totalPages.value = response.data.values.totalPage;
      } else {
        setNotificationToastMessage("Tải dữ liệu thât bại", false);
      }
    }

    // show order
    async function actionShowOrder(item: orderInfor) {
      const itemFindId: any = { _id: item._id } as orderInfor;
      const response = await orderService.findOne(
        itemFindId,
        authStore.currentUser.Token
      );
      idUpdate.value = response.data.values._id;
      formData.uuid = response.data.values.uuid;
      formData.name = response.data.values.name;
      formData.sđt = response.data.values.sđt;
      formData.city = response.data.values.city;
      formData.district = response.data.values.district;
      formData.details = response.data.values.details;
      formData.status = response.data.values.status;
      formData.note = response.data.values.note;
      formData.payments = response.data.values.payments;
      formData.totalMoney = response.data.values.totalMoney;
      formData.cretedAt = response.data.values.createdAt;
      showConfirmationModal.value = true;
    }

    // update status
    async function actionEditStatus(item: orderInfor) {
      const itemFindId: any = { _id: item._id } as orderInfor;
      const res = await orderService.findOne(
        itemFindId,
        authStore.currentUser.Token
      );
      idUpdate.value = res.data.values._id;
      const dataUpdate = {
        _id: idUpdate.value,
        status: "Đang xử lý",
      } as orderInfor;
      const response = await orderService.update(
        dataUpdate,
        authStore.currentUser.Token
      );
      if (response.data.success) {
        initGetAllOrder(1);
      } else {
        setNotificationToastMessage("Cập nhật dữ liệu thất bại", false);
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

    // search order
    async function actionSearchOrder() {
      const data = {
        name: keyword.value,
        page: currentPage.value,
      };
      const response = await orderService.findByPage(
        data,
        authStore.currentUser.Token
      );
      if (response.data.success) {
        orders.value = response.data.values.data;
        totalOrder.value = response.data.values.total;
        totalPages.value = response.data.values.totalPage;
      } else {
        setNotificationToastMessage("Tải dữ liệu thât bại", false);
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
      keyword,
      status,
      idUpdate,
      formData,
      actionInitDeleteOrder,
      actionDeleteOrder,
      deleteConfirmationModal,
      showConfirmationModal,
      initGetAllOrder,
      actionSearchOrder,
      actionEditStatus,
      actionShowOrder
    };
  },
});
</script>
