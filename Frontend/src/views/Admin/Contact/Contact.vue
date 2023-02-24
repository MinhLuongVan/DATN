<template>
  <div>
    <div class="block lg:flex justify-between">
      <span class="lg:pt-2.5 text-slate-700"
        >Tổng số liên hệ : {{ totalContact }}</span
      >
      <div class="flex">
        <div class="min-w-[215px] max-w-sm relative my-2 lg:my-0">
          <input
            class="form-control shadow-none border border-slate-300 dark:border-slate-300 dark:bg-white dark:text-slate-700 pr-11"
            type="search"
            placeholder="Tìm kiếm..."
            v-on:keyup.enter="actionSearchContact"
            v-model="keyword"
          />
          <button
            class="absolute inset-y-0 right-0 px-3 border-l"
            @click="actionSearchContact"
          >
            <SearchIcon class="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
    <div class="mt-2 lg:mt-4">
      <!-- BEGIN: Data List -->
      <div class="intro-y col-span-12 overflow-auto lg:overflow-visible">
        <table v-if="myContact.length > 0" class="table table-report -mt-2">
          <thead>
            <tr>
              <th class="whitespace-nowrap text-center">Họ tên</th>
              <th class="whitespace-nowrap text-center">Email</th>
              <th class="whitespace-nowrap text-center">Nội dung</th>
              <th class="text-center whitespace-nowrap">Ngày tạo</th>
              <th class="text-center whitespace-nowrap">Hành động</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="item in myContact" :key="item._id" class="intro-x">
              <td class="text-center pt-4">{{ item.name }}</td>
              <td class="text-center pt-4">{{ item.email }}</td>
              <td v-if="item.note.length > 100" class="text-center pt-4">
                {{ item.note.slice(0, 99) }}...
              </td>
              <td v-else class="text-center pt-4">{{ item.note }}</td>
              <td class="text-center pt-4">
                {{ moment(item.createdAt).format("DD/MM/YYYY HH:mm") }}
              </td>
              <td class="table-report__action w-56">
                <div class="flex justify-center items-center">
                  <a
                    class="flex items-center text-danger"
                    href="javascript:;"
                    @click="actionInitDeleteContact(item)"
                  >
                    <Trash2Icon class="w-4 h-4 mr-1" /> Xóa
                  </a>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
        <div v-else class="text-center">
          <span class="text-">Thật tiếc! Chưa có phản hồi nào!</span>
        </div>
        <!-- BEGIN: Delete Confirmation Modal -->
        <Modal
          :show="deleteConfirmationModal"
          @hidden="deleteConfirmationModal = false"
        >
          <ModalBody class="p-0">
            <div class="p-5 text-center">
              <XCircleIcon class="w-16 h-16 text-danger mx-auto mt-3" />
              <div class="text-3xl mt-5">Xóa liên hệ ?</div>
              <div class="text-slate-500 mt-2">
                Bạn có chắc chắn muốn xóa liên hệ này?
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
                @click="actionDeleteContact"
              >
                Xóa
              </button>
            </div>
          </ModalBody>
        </Modal>
        <!-- END: Delete Confirmation Modal -->
      </div>
      <div
        v-if="myContact.length > 0"
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
            :click-handler="initGetAllContact"
          >
          </Paginate>
        </nav>
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
import { ContactModel } from "../../../model/contactModel";
import { contactInfor } from "../../../types/contactType";
import contactService from "../../../services/contactService";
import { useContactStore } from "../../../stores/contactStore";
import Paginate from "vuejs-paginate-next";
export default defineComponent({
  name: "Contact",
  components: { Paginate },
  setup() {
    const router = useRouter();
    const deleteConfirmationModal = ref(false);
    const authStore = useAuthStore();
    const contactStore = useContactStore();
    const myContact = ref<contactInfor[]>([]);
    const selectedContact = ref<ContactModel>(new ContactModel());
    const contacts: any = computed(() => contactStore.contacts);
    const currentPage = ref(1);
    const totalPages = ref(1);
    const totalContact = ref(0);
    const keyword = ref("");

    // Get all contact
    async function initGetAllContact(page: number) {
      currentPage.value = page;
      const data = {
        page: currentPage.value,
      } as any;
      const response = await contactService.findByPage(
        data,
        authStore.currentUser.Token
      );
      if (response.data.success) {
        myContact.value = response.data.values.data;
        totalContact.value = response.data.values.total;
        totalPages.value = response.data.values.totalPage;
      } else {
        setNotificationToastMessage("Tải dữ liệu thât bại", false);
      }
    }

    // search contact
    async function actionSearchContact() {
      const data = {
        email: keyword.value,
        page: currentPage.value,
      };
      const response = await contactService.findByPage(
        data,
        authStore.currentUser.Token
      );
      if (response.data.success) {
        myContact.value = response.data.values.data;
        totalContact.value = response.data.values.total;
        totalPages.value = response.data.values.totalPage;
      } else {
        setNotificationToastMessage("Tải dữ liệu thât bại", false);
      }
    }

    // init id delete
    function actionInitDeleteContact(item: contactInfor) {
      selectedContact.value._id = item._id;
      deleteConfirmationModal.value = true;
    }

    // Delete news
    async function actionDeleteContact() {
      const itemDelete = new ContactModel();
      itemDelete._id = selectedContact.value._id;
      const response = await contactService.delete(
        itemDelete,
        authStore.currentUser.Token
      );
      if (response.data.error) {
        setNotificationToastMessage("Xóa dữ liệu thất bại", false);
      } else {
        deleteConfirmationModal.value = false;
        initGetAllContact(1);
      }
    }

    onMounted(() => {
      initGetAllContact(1);
      //contactStore.getAllContact();
    });

    return {
      router,
      moment,
      contacts,
      totalContact,
      totalPages,
      myContact,
      keyword,
      initGetAllContact,
      actionDeleteContact,
      actionInitDeleteContact,
      deleteConfirmationModal,
      actionSearchContact,
    };
  },
});
</script>
