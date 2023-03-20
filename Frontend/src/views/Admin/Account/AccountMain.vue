<template>
  <div>
    <div class="mb-3 bg-white rounded-md mt-12 lg:mt-0">
      <button
        class="border rounded-md py-2 px-3 flex bg-lime-500 text-white"
        @click="AddConfirmationModal = true"
      >
        <plus-squareIcon class="w-4 h-4 mr-2 mt-0.5"></plus-squareIcon>
        Thêm tài khoản
      </button>
    </div>
    <div class="block lg:flex justify-between">
      <span class="lg:pt-2.5 text-slate-700"
        >Tổng số tài khoản : {{ totalUser }}</span
      >
      <div class="flex">
        <div class="min-w-[215px] max-w-sm relative my-2 lg:my-0">
          <input
            class="form-control shadow-none border border-slate-300 dark:border-slate-300 dark:bg-white dark:text-slate-700 pr-11"
            type="search"
            placeholder="Tìm kiếm..."
            v-on:keyup.enter="actionSearchUser"
            v-model="keyword"
          />
          <button
            class="absolute inset-y-0 right-0 px-3 border-l"
            @click="actionSearchUser"
          >
            <SearchIcon class="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
    <div class="mt-2 lg:mt-4">
      <!-- BEGIN: Data List -->
      <div class="intro-y col-span-12 overflow-auto lg:overflow-visible">
        <table class="table table-report -mt-2">
          <thead>
            <tr>
              <th class="whitespace-nowrap">Tên người dùng</th>
              <th class="whitespace-nowrap">Email</th>
              <th class="whitespace-nowrap">Sđt</th>
              <th class="text-center whitespace-nowrap">Quyền admin</th>
              <th class="text-center whitespace-nowrap">Hành động</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(item, index) in users" :key="index" class="intro-x">
              <td>
                <div class=" whitespace-nowrap">{{
                  item.username
                }}</div>
              </td>
              <td>
                <div class="text-slate-500 whitespace-nowrap mt-0.5">
                  {{ item.email }}
                </div>
              </td>
              <td>
                <div class="text-slate-500 whitespace-nowrap mt-0.5">
                  {{ item.sdt }}
                </div>
              </td>
              <td>
                <div
                  class="text-slate-500 text-center whitespace-nowrap mt-0.5"
                >
                  {{ item.isAdmin }}
                </div>
              </td>
              <td class="table-report__action w-56">
                <div class="flex justify-center items-center">
                  <a
                    class="flex items-center mr-3"
                    href="javascript:;"
                    @click="actionInitEditAccount(item)"
                  >
                    <CheckSquareIcon class="w-4 h-4 mr-1" /> Chỉnh sửa
                  </a>
                  <a
                    class="flex items-center text-danger"
                    href="javascript:;"
                    @click="actionInitDeleteAccount(item)"
                  >
                    <Trash2Icon class="w-4 h-4 mr-1" /> Xóa
                  </a>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <!-- END: Data List -->
      <!-- BEGIN: Add,Edit Confirmation Modal -->
      <Modal
        :show="AddConfirmationModal"
        @hidden="AddConfirmationModal = false"
      >
        <ModalBody class="p-0">
          <div v-if="!showButtonEdit" class="px-5 pt-3 text-center text-2xl">
            <h2 class="text-lime-500">Thêm tài khoản</h2>
          </div>
          <div v-else class="px-5 pt-3 text-center text-2xl">
            <h2 class="text-lime-500">Cập nhật tài khoản</h2>
          </div>
          <div class="pt-5">
            <div class="px-5">
              <label class="text-base">Họ và tên</label>
              <input
                type="text"
                v-model.trim="state.username"
                placeholder="Họ và tên"
                class="form-control my-2"
              />
              <small class="text-red-500 text-base" v-if="errMsg">
                {{ usernameErr }}
              </small>
            </div>
            <div class="px-5">
              <label class="text-base">Email</label>
              <input
                type="text"
                v-model.trim="state.email"
                placeholder="Email"
                class="form-control my-2"
              />
              <small class="text-red-500 text-base" v-if="errMsg">
                {{ emailErr }}
              </small>
            </div>
            <div class="px-5">
              <label class="text-base">SĐT</label>
              <input
                type="text"
                v-model.trim="state.sdt"
                placeholder="Số điện thoại"
                class="form-control my-2"
              />
              <small class="text-red-500 text-base" v-if="errMsg">
                {{ sđtErr }}
              </small>
            </div>
            <div class="px-5">
              <label class="text-base">Mật khẩu</label>
              <input
                type="text"
                v-model.trim="state.password"
                placeholder="Mật khẩu"
                class="form-control my-2"
              />
              <small class="text-red-500 text-base" v-if="errMsg">
                {{ passwordErr }}
              </small>
            </div>
            <div v-if="!showButtonEdit" class="px-5">
              <label class="text-base">Nhập lại mật khẩu</label>
              <input
                type="text"
                v-model.trim="state.passwordagain"
                placeholder="Nhập lại mật khẩu"
                class="form-control my-2"
              />
              <small
                class="text-red-500 text-base"
                v-if="errMsg"
              >
                {{ againPasswordErr }}
              </small>
            </div>
          </div>
          <div class="pb-5 pt-2 text-center lg:pl-56 lg:pr-3">
            <button
              type="button"
              @click="actionCloseModal()"
              class="btn btn-outline-secondary w-24 mr-1"
            >
              Trở lại
            </button>
            <button
              v-if="!showButtonEdit"
              type="button"
              class="btn text-white bg-lime-500"
              @click="actionSaveAccount()"
            >
              Lưu và đóng
            </button>
            <button
              v-else
              type="button"
              class="btn text-white bg-lime-500 w-24"
              @click="actionEditAccount"
            >
              Cập nhật
            </button>
          </div>
        </ModalBody>
      </Modal>
      <!-- END: Add,edit Confirmation Modal -->
      <!-- BEGIN: Delete Confirmation Modal -->
      <Modal
        :show="deleteConfirmationModal"
        @hidden="deleteConfirmationModal = false"
      >
        <ModalBody class="p-0">
          <div class="p-5 text-center">
            <XCircleIcon class="w-16 h-16 text-danger mx-auto mt-3" />
            <div class="text-3xl mt-5">Xóa tài khoản?</div>
            <div class="text-slate-500 mt-2">
              Bạn có chắc chắn muốn xóa tài khoản này ?
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
              @click="actionDeleteAccount"
            >
              Xóa
            </button>
          </div>
        </ModalBody>
      </Modal>
      <!-- END: Delete Confirmation Modal -->
      <div
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
            :click-handler="actionInitGetAllUser"
          >
          </Paginate>
        </nav>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { computed, defineComponent, onMounted, ref } from "vue";
import { useRouter } from "vue-router";
import { useAuthStore } from "../../../stores/authStore";
import { userInfor } from "../../../types/userType";
import userService from "../../../services/userService";
import {
  REGEXAGAiNPASSWORD,
  REGEXEMAIL,
  REGEXNUMBER,
  REGEXPASSWORD,
  REQUIRED,
  setNotificationToastMessage,
} from "../../../utils/myFunction";
import { UserModel } from "../../../model/userModel";
import Paginate from "vuejs-paginate-next";
export default defineComponent({
  name: "Accounts",
  components: { Paginate },
  setup() {
    const deleteConfirmationModal = ref(false);
    const AddConfirmationModal = ref(false);
    const router = useRouter();
    const authStore = useAuthStore();
    const users = ref<userInfor[]>([]);
    const showButtonEdit = ref(false);
    const idUpdate = ref("");
    const keyword = ref("");
    const currentPage = ref(1);
    const totalPages = ref(1);
    const totalUser = ref(0);
    const selectedUser = ref<UserModel>(new UserModel());
    const myAccount: any = computed(() => authStore.users);

    const state = ref({
      email: "",
      password: "",
      username: "",
      sdt: "",
      passwordagain: "",
    });

    // validate
    const errMsg = ref(false);
    const usernameErr = computed(() => {
      if (!state.value.username) return REQUIRED;
    });
    const phonePattern = /^[0-9]{10,11}$/;
    const sđtErr = computed(() => {
      if (!state.value.sdt) {
        return REQUIRED;
      } else if (!phonePattern.test(state.value.sdt)) {
        return REGEXNUMBER;
      }
    });
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const emailErr = computed(() => {
      if (!state.value.email) {
        return REQUIRED;
      } else if (!emailRegex.test(state.value.email)) {
        return REGEXEMAIL;
      }
    });
    const passwordErr = computed(() => {
      if (!state.value.password) {
        return REQUIRED;
      } else if (state.value.password.length < 6) {
        return REGEXPASSWORD;
      }
    });
    const againPasswordErr = computed(() => {
      if (!state.value.passwordagain) {
        return REQUIRED;
      } else if (state.value.passwordagain !== state.value.password) {
        return REGEXAGAiNPASSWORD;
      }
    });

    const actionSaveAccount = async () => {
      if (
        emailErr.value ||
        usernameErr.value ||
        sđtErr.value ||
        passwordErr.value ||
        againPasswordErr.value
      ) {
        errMsg.value = true;
      } else {
        const data = {
          email: state.value.email,
          username: state.value.username,
          password: state.value.password,
          sdt: state.value.sdt,
          passwordagain: state.value.passwordagain,
        } as userInfor;
        if (state.value.password === state.value.passwordagain) {
          const res = await userService.register(data);
          if (res.data.success) {
            authStore.registerUser(res.data.values);
            AddConfirmationModal.value = false;
            authStore.initGetAllUser();
            actionInitGetAllUser(1);
          } else {
            setNotificationToastMessage(res.data.message, false);
          }
        } else {
          setNotificationToastMessage("Vui lòng nhập đúng mật khẩu", false);
        }
      }
    };

    //get all user by page
    async function actionInitGetAllUser(page: number) {
      currentPage.value = page;
      const data = {
        page: currentPage.value,
      } as any;
      const response = await userService.findByPage(
        data,
        authStore.currentUser.Token
      );
      if (response.data.success) {
        users.value = response.data.values.data;
        totalUser.value = response.data.values.total;
        totalPages.value = response.data.values.totalPage;
      } else {
        setNotificationToastMessage("Tải dữ liệu thât bại", false);
      }
    }

    // lấy user by id
    async function actionInitEditAccount(item: userInfor) {
      const itemFindId: any = { _id: item._id } as userInfor;
      const response = await userService.findId(
        itemFindId,
        authStore.currentUser.Token
      );
      idUpdate.value = response.data.values._id;
      state.value.username = response.data.values.username;
      state.value.email = response.data.values.email;
      state.value.sdt = response.data.values.sdt;
      state.value.password = response.data.values.password;
      AddConfirmationModal.value = true;
      showButtonEdit.value = true;
    }

    function actionInitDeleteAccount(item: userInfor) {
      selectedUser.value._id = item._id;
      deleteConfirmationModal.value = true;
    }

    // Delete product
    async function actionDeleteAccount() {
      const itemDelete = new UserModel();
      itemDelete._id = selectedUser.value._id;
      const response = await userService.delete(
        itemDelete,
        authStore.currentUser.Token
      );
      if (response.data.error) {
        setNotificationToastMessage("Xóa dữ liệu thất bại", false);
      } else {
        deleteConfirmationModal.value = false;
        authStore.initGetAllUser();
        actionInitGetAllUser(1);
      }
    }

    //edit user
    async function actionEditAccount() {
      const dataUpdate = {
        _id: idUpdate.value,
        username: state.value.username,
        email: state.value.email,
        sdt: state.value.sdt,
        password: state.value.password,
      } as userInfor;
      const response = await userService.update(
        dataUpdate,
        authStore.currentUser.Token
      );
      if (response.data.success) {
        AddConfirmationModal.value = false;
        showButtonEdit.value = false;
        reloadData();
        authStore.initGetAllUser();
        actionInitGetAllUser(1);
      } else {
        setNotificationToastMessage("Cập nhật dữ liệu thất bại", false);
      }
    }

    // search user
    async function actionSearchUser() {
      const data = {
        email: keyword.value,
        page: currentPage.value,
      };
      const response = await userService.findByPage(
        data,
        authStore.currentUser.Token
      );
      if (response.data.success) {
        users.value = response.data.values.data;
        totalUser.value = response.data.values.total;
        totalPages.value = response.data.values.totalPage;
      } else {
        setNotificationToastMessage("Tải dữ liệu thât bại", false);
      }
    }

    //reload data
    const reloadData = () => {
      state.value.email = "";
      state.value.username = "";
      state.value.sdt = "";
      state.value.password = "";
      state.value.passwordagain = "";
      errMsg.value = false;
    };

    const actionCloseModal = () => {
      AddConfirmationModal.value = false;
      showButtonEdit.value = false;
      reloadData();
    };

    onMounted(() => {
      actionInitGetAllUser(1);
      authStore.initGetAllUser();
    });
    return {
      router,
      state,
      errMsg,
      usernameErr,
      emailErr,
      passwordErr,
      againPasswordErr,
      sđtErr,
      users,
      idUpdate,
      keyword,
      myAccount,
      currentPage,
      totalPages,
      totalUser,
      showButtonEdit,
      deleteConfirmationModal,
      AddConfirmationModal,
      actionCloseModal,
      actionSaveAccount,
      actionInitEditAccount,
      actionDeleteAccount,
      actionInitDeleteAccount,
      actionEditAccount,
      actionInitGetAllUser,
      actionSearchUser,
    };
  },
});
</script>
