<template>
  <div>
    <div class="mb-3 bg-white rounded-md mt-12 lg:mt-0">
      <button class="border rounded-md py-2 px-3 flex bg-lime-500 text-white">
        <plus-squareIcon class="w-4 h-4 mr-2 mt-0.5"></plus-squareIcon>
        Thêm tài khoản
      </button>
    </div>
    <div class="block lg:flex justify-between">
      <span class="lg:pt-2.5 text-slate-700">Tổng số tài khoản : 5</span>
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
        <table class="table table-report -mt-2">
          <thead>
            <tr>
              
              <th class="whitespace-nowrap">Tên người dùng</th>
              <th class="whitespace-nowrap">Email</th>
              <th class="whitespace-nowrap">Sđt</th>
              <th class="text-center whitespace-nowrap">Trạng thái</th>
              <th class="text-center whitespace-nowrap">Hành động</th>
            </tr>
          </thead>
          <tbody>
            <tr
              v-for="(item, index) in users"
              :key="index"
              class="intro-x"
            >
              <td>
                <a href="" class="font-medium whitespace-nowrap">{{
                  item.username
                }}</a>
              </td>
              <td>
                <div class="text-slate-500 text-xs whitespace-nowrap mt-0.5">
                  {{ item.email }}
                </div>
              </td>
              <td >
                <div class="text-slate-500 text-xs whitespace-nowrap mt-0.5">
                  {{ item.sdt }}
                </div>
              </td>
              <td >
                <div class="text-slate-500 text-xs text-center whitespace-nowrap mt-0.5">
                  {{ item.isAdmin }}
                </div>
              </td>
              <td class="table-report__action w-56">
                <div class="flex justify-center items-center pt-4">
                  <a class="flex items-center mr-3" href="javascript:;"
                  >
                    <CheckSquareIcon class="w-4 h-4 mr-1" /> Edit
                  </a>
                  <a
                    class="flex items-center text-danger"
                    href="javascript:;"
                    @click="deleteConfirmationModal = true"
                  >
                    <Trash2Icon class="w-4 h-4 mr-1" /> Delete
                  </a>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
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
            <div class="text-3xl mt-5">Are you sure?</div>
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
              Cancel
            </button>
            <button type="button" class="btn btn-danger w-24">Delete</button>
          </div>
        </ModalBody>
      </Modal>
      <!-- END: Delete Confirmation Modal -->
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent, onMounted, ref } from "vue";
import { useRouter } from "vue-router";
import { useAuthStore } from "../../../stores/authStore";
import { userInfor } from "../../../types/userType";
import  userService  from "../../../services/userService";
import { setNotificationToastMessage } from "../../../utils/myFunction";
export default defineComponent({
  name: "Accounts",
  components: {},
  setup() {
    const deleteConfirmationModal = ref(false);
    const router = useRouter();
    const authStore = useAuthStore();
    const users = ref<userInfor[]>([])

      // Get all user
      async function initGetAllUser() {
      const data = {} as userInfor;
      const response = await userService.findAll(data, authStore.token);
      console.log('data',response.data)
      if (response.data.success) {
        users.value = response.data.values;
      } else {
        setNotificationToastMessage("Tải dữ liệu thât bại", false);
      }
    }
    onMounted(() => {
      initGetAllUser();
    });
    return {
      router,
      users,
      deleteConfirmationModal,
    };
  },
});
</script>
