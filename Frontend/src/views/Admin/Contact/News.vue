<template>
  <div>
    <div class="mb-3 mt-12 lg:mt-0 bg-white rounded-md">
      <button
        class="border rounded-md py-2 px-3 flex bg-lime-500 text-white"
        @click="AddConfirmationModal = true"
      >
        <plus-squareIcon class="w-4 h-4 mr-2 mt-0.5"></plus-squareIcon>
        Thêm tin tức
      </button>
    </div>
    <div class="block lg:flex justify-between">
      <span class="lg:pt-2.5 text-slate-700"
        >Tổng số tin tức : {{ totalNews }}</span
      >
      <div class="flex">
        <div class="min-w-[215px] max-w-sm relative my-2 lg:my-0">
          <input
            class="form-control shadow-none border border-slate-300 dark:border-slate-300 dark:bg-white dark:text-slate-700 pr-11"
            type="search"
            placeholder="Tìm kiếm..."
            v-on:keyup.enter="actionSearchNews"
            v-model="keyword"
          />
          <button class="absolute inset-y-0 right-0 px-3 border-l" @click="actionSearchNews">
            <SearchIcon class="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
    <div class="mt-2 lg:mt-4">
      <!-- BEGIN: Data List -->
      <div class="intro-y col-span-12 overflow-auto lg:overflow-visible">
        <table v-if="news.length > 0" class="table table-report -mt-2">
          <thead>
            <tr>
              <th class="whitespace-nowrap text-center">Hình ảnh</th>
              <th class="whitespace-nowrap text-center">Tiêu đề</th>
              <th class="whitespace-nowrap text-center">Nội dung</th>
              <th class="text-center whitespace-nowrap">Ngày tạo</th>
              <th class="text-center whitespace-nowrap">Hành động</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="item in news" :key="item._id" class="intro-x">
              <td class="w-24">
                <div class="w-10 h-10 image-fit zoom-in">
                  <img
                    alt="Midone Tailwind HTML Admin Template"
                    class="rounded-full"
                    :src="item.image"
                  />
                </div>
              </td>
              <td class="text-center pt-4">{{ item.name }}</td>
              <td v-if="item.content.length > 100" class="pt-4">
                {{ item.content.slice(0, 99) }}...
              </td>
              <td v-else class="pt-4">{{ item.content }}</td>
              <td class="text-center pt-4">
                {{ moment(item.createdAt).format("DD/MM/YYYY HH:mm") }}
              </td>
              <td class="table-report__action w-56">
                <div class="flex justify-center items-center">
                  <a
                    class="flex items-center mr-3"
                    href="javascript:;"
                    @click="actionInitEditNews(item)"
                  >
                    <CheckSquareIcon class="w-4 h-4 mr-1" /> Chỉnh sửa
                  </a>
                  <a
                    class="flex items-center text-danger"
                    href="javascript:;"
                    @click="actionInitDeleteNews(item)"
                  >
                    <Trash2Icon class="w-4 h-4 mr-1" /> Xóa
                  </a>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
        <div v-else class="text-center">
          <span class="text-">Thật tiếc! Chưa có tin tức nào!</span>
        </div>
        <!-- BEGIN: Delete Confirmation Modal -->
        <Modal
          :show="deleteConfirmationModal"
          @hidden="deleteConfirmationModal = false"
        >
          <ModalBody class="p-0">
            <div class="p-5 text-center">
              <XCircleIcon class="w-16 h-16 text-danger mx-auto mt-3" />
              <div class="text-3xl mt-5">Xóa tin tức ?</div>
              <div class="text-slate-500 mt-2">
                Bạn có chắc chắn muốn xóa tin tức này?
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
                @click="actionDeleteNews"
              >
                Xóa
              </button>
            </div>
          </ModalBody>
        </Modal>
        <!-- END: Delete Confirmation Modal -->
      </div>
      <!-- END: Data List -->
    </div>
    <!-- BEGIN: Add,Edit Confirmation Modal -->
    <Modal :show="AddConfirmationModal" @hidden="AddConfirmationModal = false">
      <ModalBody class="p-0">
        <div v-if="!showButtonEdit" class="px-5 pt-3 text-center text-2xl">
          <h2 class="text-lime-500">Thêm tin tức</h2>
        </div>
        <div v-else class="px-5 pt-3 text-center text-2xl">
          <h2 class="text-lime-500">Cập nhật tin tức</h2>
        </div>
        <div class="pt-5">
          <div class="px-5">
            <label class="text-base">Tên tin tức</label>
            <input
              type="text"
              v-model="name"
              class="form-control my-2"
              placeholder="Nhập tên sản phẩm"
            />
          </div>

          <div class="px-5">
            <label class="text-base">Nội dung</label>
            <textarea
              type="text"
              rows="6"
              v-model="content"
              class="form-control my-2"
              placeholder="Nhập tên sản phẩm"
            ></textarea>
          </div>
          <div class="px-5">
            <label class="text-base">Hình ảnh</label>
            <!-- BEGIN: Single File Upload -->
            <input
              type="file"
              @change="uploadImage"
              class="intro-x login__input form-control py-3 px-4 block mt-1"
            />
            <!-- END: Single File Upload -->
            <div
              class="text-danger mt-3"
              v-if="chosenFile && !chosenFile.type.includes('image/')"
            >
              Đây không phải là file hình ảnh
            </div>
          </div>
        </div>
        <div class="pb-5 pt-2 text-center lg:pl-56 lg:pr-3">
          <button
            type="button"
            @click="actionCloseModal()"
            class="btn w-24 mr-1"
          >
            Trở lại
          </button>
          <button
            v-if="!showButtonEdit"
            type="button"
            class="btn text-white bg-lime-500"
            @click="actionSaveNews"
          >
            Lưu và đóng
          </button>
          <button
            v-else
            type="button"
            class="btn text-white bg-lime-500 w-24"
            @click="actionEditNews"
          >
            Cập nhật
          </button>
        </div>
      </ModalBody>
    </Modal>
    <!-- END: Delete Confirmation Modal -->
    <div
      v-if="news.length > 0"
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
          :click-handler="actionGetAllNews"
        >
        </Paginate>
      </nav>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent, onMounted, ref } from "vue";
import { useAuthStore } from "../../../stores/authStore";
import { setNotificationToastMessage } from "../../../utils/myFunction";
import { useRouter } from "vue-router";
import moment from "moment";
import { getDownloadURL, uploadBytesResumable } from "firebase/storage";
import { storage } from "../../../firebase.js";
import { ref as fireBaseRef } from "firebase/storage";
import { newsInfor } from "../../../types/newsType";
import { NewsModel } from "../../../model/newsModel";
import newsService from "../../../services/newsService";
import Paginate from "vuejs-paginate-next";
export default defineComponent({
  name: "News",
  components: { Paginate },
  setup() {
    const router = useRouter();
    const deleteConfirmationModal = ref(false);
    const AddConfirmationModal = ref(false);
    const showButtonEdit = ref(false);
    const authStore = useAuthStore();
    const idUpdate = ref("");
    const selectedNews = ref<NewsModel>(new NewsModel());
    const name = ref("");
    const content = ref("");
    const image = ref("");
    const keyword = ref("");
    const currentPage = ref(1);
    const totalPages = ref(1);
    const totalNews = ref(0);
    const news = ref<newsInfor[]>([]);
    const chosenFile: any = ref(null);

    const uploadFiles = (file: any) => {
      //
      if (!file) return;
      const sotrageRef = fireBaseRef(storage, `files/${file.name}`);
      const uploadTask = uploadBytesResumable(sotrageRef, file);
      uploadTask.on(
        "state_changed",
        (snapshot) => {
          const prog = Math.round(
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100
          );
        },
        (error) => {
          setNotificationToastMessage("Can't upload an avatar", false);
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
            image.value = downloadURL;
          });
        }
      );
    };
    async function uploadImage(event: any) {
      chosenFile.value = event.target.files[0];
      if (
        chosenFile.value.name.includes(".jpg") ||
        chosenFile.value.name.includes(".jpeg") ||
        chosenFile.value.name.includes(".pdf") ||
        chosenFile.value.name.includes(".eps") ||
        chosenFile.value.name.includes(".ai") ||
        chosenFile.value.name.includes(".webp") ||
        chosenFile.value.name.includes(".indd") ||
        chosenFile.value.name.includes(".raw") ||
        chosenFile.value.name.includes(".jpeg") ||
        chosenFile.value.name.includes(".psd") ||
        chosenFile.value.name.includes(".png") ||
        chosenFile.value.name.includes(".gif") ||
        chosenFile.value.name.includes(".tiff") ||
        chosenFile.value.name.includes(".bmp") ||
        chosenFile.value.name.includes(".jfif")
      ) {
        uploadFiles(chosenFile.value);
      } else {
        image.value = "";
      }
    }

    //reload data
    const reloadData = () => {
      name.value = "";
      content.value = "";
      image.value = "";
    };

    // get all news
    async function actionGetAllNews(page: number) {
      currentPage.value = page;
      const data = {
        page: currentPage.value,
      } as any;
      const response = await newsService.findByPage(
        data,
        authStore.currentUser.Token
      );
      if (response.data.success) {
        news.value = response.data.values.data;
        totalNews.value = response.data.values.total;
        totalPages.value = response.data.values.totalPage;
      } else {
        setNotificationToastMessage("Tải dữ liệu thât bại", false);
      }
    }

    // Save news
    const actionSaveNews = async () => {
      const data = {
        name: name.value,
        content: content.value,
        image: image.value,
      } as newsInfor;
      if (name.value === "" || content.value === "") {
        setNotificationToastMessage("Vui lòng nhập đủ thông tin", false);
      } else {
        const response = await newsService.save(
          data,
          authStore.currentUser.Token
        );
        if (response.data.success) {
          AddConfirmationModal.value = false;
          reloadData();
          actionGetAllNews(1);
        } else {
          setNotificationToastMessage("Tải dữ liệu thất bại", false);
        }
      }
    };

    // search product
    async function actionSearchNews() {
      const data = {
        name: keyword.value,
        page: currentPage.value,
      };
      const response = await newsService.findByPage(
        data,
        authStore.currentUser.Token
      );
      if (response.data.success) {
        news.value = response.data.values.data;
        totalNews.value = response.data.values.total;
        totalPages.value = response.data.values.totalPage;
      } else {
        setNotificationToastMessage("Tải dữ liệu thât bại", false);
      }
    }

    // lấy id delete
    function actionInitDeleteNews(item: newsInfor) {
      selectedNews.value._id = item._id;
      deleteConfirmationModal.value = true;
    }

    // Delete news
    async function actionDeleteNews() {
      const itemDelete = new NewsModel();
      itemDelete._id = selectedNews.value._id;
      const response = await newsService.delete(
        itemDelete,
        authStore.currentUser.Token
      );
      if (response.data.error) {
        setNotificationToastMessage("Xóa dữ liệu thất bại", false);
      } else {
        deleteConfirmationModal.value = false;
        actionGetAllNews(1);
      }
    }

    // lấy news by id
    async function actionInitEditNews(item: newsInfor) {
      const itemFindId: any = { _id: item._id } as newsInfor;
      const response = await newsService.findOne(
        itemFindId,
        authStore.currentUser.Token
      );
      idUpdate.value = response.data.values._id;
      name.value = response.data.values.name;
      content.value = response.data.values.content;
      image.value = response.data.values.image;
      AddConfirmationModal.value = true;
      showButtonEdit.value = true;
    }

    //edit news
    async function actionEditNews() {
      const dataUpdate = {
        _id: idUpdate.value,
        name: name.value,
        content: content.value,
        image: image.value,
      } as newsInfor;
      const response = await newsService.update(
        dataUpdate,
        authStore.currentUser.Token
      );
      if (response.data.success) {
        AddConfirmationModal.value = false;
        showButtonEdit.value = false;
        reloadData();
        actionGetAllNews(1);
      } else {
        setNotificationToastMessage("Cập nhật dữ liệu thất bại", false);
      }
    }
    const actionCloseModal = () => {
      AddConfirmationModal.value = false;
      showButtonEdit.value = false;
      reloadData();
    };

    onMounted(() => {
      actionGetAllNews(1);
    });

    return {
      router,
      news,
      moment,
      idUpdate,
      keyword,
      name,
      image,
      chosenFile,
      content,
      showButtonEdit,
      totalNews,
      totalPages,
      uploadImage,
      uploadFiles,
      actionInitEditNews,
      actionSaveNews,
      actionEditNews,
      actionInitDeleteNews,
      actionDeleteNews,
      actionGetAllNews,
      AddConfirmationModal,
      deleteConfirmationModal,
      actionCloseModal,
      actionSearchNews,
    };
  },
});
</script>
