<template>
  <div>
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
              <button type="button" class="btn btn-danger w-24">Hủy</button>
            </div>
          </ModalBody>
        </Modal>
        <!-- END: Delete Confirmation Modal -->
      </div>
      <!-- END: Data List -->
    </div>
  </div>
</template>
<script lang="ts">
import { computed, defineComponent, ref } from "vue";
import moment from "moment";
import { useRouter } from "vue-router";
import { useOrderStore } from "../../stores/orderStore";
export default defineComponent({
  name: "MyOrder",
  setup() {
    const router = useRouter();
    const deleteConfirmationModal = ref(false);
    const myOrderStore = useOrderStore();
    const myOrder: any = computed(() => myOrderStore.orders);
    return {
      router,
      moment,
      myOrder,
      deleteConfirmationModal,
    };
  },
});
</script>
<style></style>
