<template>
  <div>
    <div class="block lg:flex justify-between">
      <span class="lg:pt-2.5 text-slate-700"
        >Tổng số đánh giá : {{ totalFeedback }}</span
      >
      <div class="flex">
        <div class="min-w-[215px] max-w-sm relative my-2 lg:my-0">
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
        <table v-if="feedBacks.length > 0" class="table table-report -mt-2">
          <thead>
            <tr>
              <th class="whitespace-nowrap text-center">Người đánh giá</th>
              <th class="whitespace-nowrap text-center">Sản phẩm</th>
              <th class="whitespace-nowrap text-center">Số sao</th>
              <th class="whitespace-nowrap text-center">Nội dung</th>
              <th class="text-center whitespace-nowrap">Ngày tạo</th>
              <th class="text-center whitespace-nowrap">Hành động</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="item in feedBacks" :key="item._id" class="intro-x">
              <td class="text-center pt-4">{{ item.userId }}</td>
              <td class="w-24">
                <div class="w-10 h-10 image-fit zoom-in">
                  <img
                    alt="Midone Tailwind HTML Admin Template"
                    class="rounded-full"
                    :src="item.productImage"
                  />
                </div>
              </td>
              <td class="text-center pt-4">
                <span class="flex justify-center">
                  {{ item.rating }}
                  <StarIcon
                    v-if="item.rating > 0"
                    class="w-4 h-4 ml-1 text-orange-500 fill-orange-400"
                  ></StarIcon>
                </span>
              </td>
              <td v-if="item.content.length > 100" class="text-center pt-4">
                {{ item.content.slice(0, 99) }}...
              </td>
              <td v-else class="text-center pt-4">{{ item.content }}</td>
              <td class="text-center pt-4">
                {{ moment(item.createdAt).format("DD/MM/YYYY HH:mm") }}
              </td>
              <td class="table-report__action w-56">
                <div class="flex justify-center items-center">
                  <a
                    class="flex items-center text-danger"
                    href="javascript:;"
                    @click="actionInitDeleteFeedback(item)"
                  >
                    <Trash2Icon class="w-4 h-4 mr-1" /> Xóa
                  </a>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
        <div v-else class="text-center">
          <span class="text-">Thật tiếc! Chưa có đánh giá nào!</span>
        </div>
        <!-- BEGIN: Delete Confirmation Modal -->
        <Modal
          :show="deleteConfirmationModal"
          @hidden="deleteConfirmationModal = false"
        >
          <ModalBody class="p-0">
            <div class="p-5 text-center">
              <XCircleIcon class="w-16 h-16 text-danger mx-auto mt-3" />
              <div class="text-3xl mt-5">Xóa đánh giá ?</div>
              <div class="text-slate-500 mt-2">
                Bạn có chắc chắn muốn xóa đánh giá này?
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
                @click="actionDeleteFeedback"
              >
                Xóa
              </button>
            </div>
          </ModalBody>
        </Modal>
        <!-- END: Delete Confirmation Modal -->
        <div v-if="feedBacks.length > 0"
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
            :click-handler="initGetAllComment"
          >
          </Paginate>
        </nav>
      </div>
      </div>
      <!-- END: Data List -->
    </div>
  </div>
</template>
<script lang="ts">
import { computed, defineComponent, onMounted, ref } from "vue";
import { useAuthStore } from "../../../stores/authStore";
import { setNotificationToastMessage } from "../../../utils/myFunction";
import { useRouter } from "vue-router";
import moment from "moment";
import { FeedBackModel } from "../../../model/feedbackModel";
import { feedbackInfor } from "../../../types/feedbackType";
import feedbackService from "../../../services/feedbackService";
import { useFeedbackStore } from "../../../stores/feedbackStore";
import Paginate from "vuejs-paginate-next";
export default defineComponent({
  name: "Contact",
  components: { Paginate },
  setup() {
    const router = useRouter();
    const deleteConfirmationModal = ref(false);
    const authStore = useAuthStore();
    const feedbackStore = useFeedbackStore();
    const feedBacks = ref<feedbackInfor[]>([]);
    const selectedFeedback = ref<FeedBackModel>(new FeedBackModel());
    const myFeedbacks: any = computed(() => feedbackStore.feedbackAll);
    const currentPage = ref(1);
    const totalPages = ref(1);
    const totalFeedback = ref(0);

    //get all comment
    async function initGetAllComment(page: number) {
      currentPage.value = page;
      const data = {
        page: currentPage.value,
      } as any;
      const response = await feedbackService.findByPage(
        data,
        authStore.currentUser.Token
      );
      // products.value = response.data.values;
      if (response.data.success) {
        feedBacks.value = response.data.values.data;
        totalFeedback.value = response.data.values.total;
        totalPages.value = response.data.values.totalPage;
      } else {
        setNotificationToastMessage("Tải dữ liệu thât bại", false);
      }
    }


    // init id delete
    function actionInitDeleteFeedback(item: feedbackInfor) {
      selectedFeedback.value._id = item._id;
      deleteConfirmationModal.value = true;
    }

    // Delete news
    async function actionDeleteFeedback() {
      const itemDelete = new FeedBackModel();
      itemDelete._id = selectedFeedback.value._id;
      const response = await feedbackService.delete(
        itemDelete,
        authStore.currentUser.Token
      );
      if (response.data.error) {
        setNotificationToastMessage("Xóa dữ liệu thất bại", false);
      } else {
        deleteConfirmationModal.value = false;
        // feedbackStore.getAllFeedback();
        initGetAllComment(1);
      }
    }

    onMounted(() => {
      initGetAllComment(1);
      // feedbackStore.getAllFeedback();
    });

    return {
      router,
      moment,
      myFeedbacks,
      totalFeedback,
      totalPages,
      feedBacks,
      initGetAllComment,
      actionDeleteFeedback,
      actionInitDeleteFeedback,
      deleteConfirmationModal,
    };
  },
});
</script>
