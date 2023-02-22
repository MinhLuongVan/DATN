<template>
  <div class="w-full">
    <div class="border rounded-lg h-auto w-2/5 mx-auto">
      <h2 class="text-xl text-center pt-6 pb-3 font-medium text-lime-500">
        Chi tiết đơn hàng
      </h2>
      <div class="px-12 w-full pb-5">
        <div class="flex py-2 text-base">
          <span class="font-medium">Mã đơn hàng:</span>
          <p class="px-2">{{ myOrder.uuid }}</p>
        </div>
        <div class="flex py-2 text-base">
          <span class="font-medium">Người đặt:</span>
          <p class="px-2">{{ myOrder.name }}</p>
        </div>
        <div class="flex py-2 text-base">
          <span class="font-medium">Sđt:</span>
          <p class="px-2">{{ myOrder.sđt }}</p>
        </div>
        <div class="flex py-2 text-base">
          <span class="font-medium">Địa chỉ chi tiết:</span>
          <p class="px-2">{{ myOrder.details }}-</p>
          <p>{{ myOrder.district }}-</p>
          <p>{{ myOrder.city }}</p>
        </div>
        <div class="flex py-2 text-base">
          <span class="font-medium">Hình thức thanh toán:</span>
          <p class="px-2">{{ myOrder.payments }}</p>
        </div>
        <div class="flex py-2 text-base">
          <span class="font-medium">Trạng thái:</span>
          <p class="px-2">{{ myOrder.status }}</p>
        </div>
        <div class="flex py-2 text-base">
          <span class="font-medium">Ngày đặt:</span>
          <p class="px-2">
            {{ moment(myOrder.createdAt).format("DD/MM/YYYY HH:mm") }}
          </p>
        </div>
        <div class="flex py-2 text-base">
          <span class="font-medium">Tổng tiền:</span>
          <p class="px-2">{{ myOrder.totalMoney }}vnđ</p>
        </div>
        <div class="flex py-2 text-base">
          <span class="font-medium">Ghi chú:</span>
          <p class="px-2">{{ myOrder.note }}</p>
        </div>
        <button
          class="border py-1.5 px-4 rounded-md bg-slate-100 mt-2 hover:bg-slate-200"
          @click="router.push('/admin/order')"
        >
          Trở lại
        </button>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { useRouter } from "vue-router";
import { useRoute } from "vue-router";
import { computed, defineComponent, onMounted, ref } from "vue";
import { setNotificationToastMessage } from "../../../utils/myFunction";
import { useAuthStore } from "../../../stores/authStore";
import { orderInfor } from "../../../types/orderType";
import orderService from "../../../services/orderService";
import moment from "moment";
export default defineComponent({
  name: "DetailOrder",
  setup() {
    const route = useRoute();
    const router = useRouter();
    const authStore = useAuthStore();
    const myOrder: any = ref<orderInfor[]>([]);

    // get order by id
    async function actionGetOrderById() {
      const itemFind: any = { _id: route.params.id } as orderInfor;
      const response = await orderService.findOne(
        itemFind,
        authStore.currentUser.Token
      );
      if (response.data.success) {
        myOrder.value = response.data.values;
      } else {
        setNotificationToastMessage("Tải dữ liệu thất bại", false);
      }
    }
    onMounted(async () => {
      await actionGetOrderById();
    });
    return {
      route,
      router,
      myOrder,
      moment,
    };
  },
});
</script>
