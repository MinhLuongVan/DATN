<template>
  <div
    v-for="(item, index) in mySetting"
    :key="index"
    class="lg:w-2/3 p-3 lg:p-5 bg-slate-100 rounded-md mt-12 lg:mt-2"
  >
    <h2 class="py-2 text-xl">Cấu hình website</h2>
    <fieldset class="border border-slate-300 my-2 p-3 w-full">
      <legend class="text-base px-2">Tên website</legend>
      <div class="flex items-center justify-between">
        <p class="w-4/5 border bg-white py-2 px-2">{{ item.name }}</p>
        <div>
          <button
            class="border border-slate-300 text-slate-500 rounded-full p-2 mr-2 hover:text-slate-700"
          >
            <EditIcon class="w-4 h-4" />
          </button>
          <button
            class="border border-red-500 text-red-500 rounded-full p-2 hover:text-red-700"
          >
            <TrashIcon class="w-4 h-4" />
          </button>
        </div>
      </div>
    </fieldset>
    <fieldset class="border border-slate-300 my-2 p-3 w-full">
      <legend class="text-base px-2">Từ khóa</legend>
      <div class="flex w-full items-center justify-between">
        <p class="w-4/5 border bg-white py-2 px-2">{{ item.keyword }}</p>
        <div>
          <button
            class="border border-slate-300 text-slate-500 rounded-full p-2 mr-2 hover:text-slate-700"
          >
            <EditIcon class="w-4 h-4" />
          </button>
          <button
            class="border border-red-500 text-red-500 rounded-full p-2 hover:text-red-700"
          >
            <TrashIcon class="w-4 h-4" />
          </button>
        </div>
      </div>
    </fieldset>
    <fieldset class="border border-slate-300 my-2 p-3 w-full mt-5">
      <legend class="text-base px-2">Logo giao diện người dùng</legend>
      <div class="flex items-center justify-between">
        <img
          :src="item.logoUser"
          alt=""
          class="img-logo w-1/2 h-28 lg:w-2/3 lg:h-32"
        />
        <div>
          <button
            class="border border-slate-300 text-slate-500 rounded-full p-2 mr-2 hover:text-slate-700"
          >
            <EditIcon class="w-4 h-4" />
          </button>
          <button
            class="border border-red-500 text-red-500 rounded-full p-2 hover:text-red-700"
          >
            <TrashIcon class="w-4 h-4" />
          </button>
        </div>
      </div>
    </fieldset>
    <fieldset class="border border-slate-300 my-2 p-3 w-full mt-5">
      <legend class="text-base px-2">Logo giao diện quản trị</legend>
      <div class="flex items-center justify-between">
        <img
          :src="item.logoAdmin"
          alt=""
          class="img-logo w-1/2 h-28 lg:w-2/3 lg:h-32"
        />
        <div>
          <button
            class="border border-slate-300 text-slate-500 rounded-full p-2 mr-2 hover:text-slate-700"
          >
            <EditIcon class="w-4 h-4" />
          </button>
          <button
            class="border border-red-500 text-red-500 rounded-full p-2 hover:text-red-700"
          >
            <TrashIcon class="w-4 h-4" />
          </button>
        </div>
      </div>
    </fieldset>
    <button @click="AddConfirmationModal = true">Thêm</button>
    <!-- BEGIN: Add,Edit Confirmation Modal -->
    <Modal :show="AddConfirmationModal" @hidden="AddConfirmationModal = false">
      <ModalBody class="p-0">
        <div class="px-5 pt-3 text-center text-2xl">
          <h2 class="text-lime-500">Thiết lập cấu hình</h2>
        </div>
        <div class="pt-5">
          <div class="px-5">
            <label class="text-base">Tên website</label>
            <input
              type="text"
              v-model="name"
              class="form-control my-2"
              placeholder="Nhập tên website"
            />
          </div>
          <div class="px-5">
            <label class="text-base">Từ khóa</label>
            <input
              type="text"
              class="form-control my-2"
              v-model="keyword"
              placeholder="Nhập từ khóa"
            />
          </div>
          <div class="px-5">
            <label class="text-base">Logo User</label>
            <!-- BEGIN: Single File Upload -->
            <input
              type="file"
              @change="uploadLogoUser"
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
          <div class="px-5">
            <label class="text-base">Logo Admin</label>
            <!-- BEGIN: Single File Upload -->
            <input
              type="file"
              @change="uploadLogoAdmin"
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
            class="btn btn-outline-secondary w-24 mr-1"
            @click="AddConfirmationModal = false"
          >
            Trở lại
          </button>
          <button
            type="button"
            class="btn text-white bg-lime-500"
            @click="actionSaveSetting"
          >
            Lưu và đóng
          </button>
        </div>
      </ModalBody>
    </Modal>
    <!-- END: Delete Confirmation Modal -->
  </div>
</template>
<script lang="ts">
import { computed, defineComponent, onMounted, ref } from "vue";
import { useSettingStore } from "../../../stores/settingStore";
import { useRouter } from "vue-router";
import { getDownloadURL, uploadBytesResumable } from "firebase/storage";
import { storage } from "../../../firebase.js";
import { ref as fireBaseRef } from "firebase/storage";
import { setNotificationToastMessage } from "../../../utils/myFunction";
import { settingInfor } from "../../../types/settingType";
import settingService from "../../../services/settingService";
import { useAuthStore } from "../../../stores/authStore";
export default defineComponent({
  name: "AdminSetting",
  setup() {
    const router = useRouter();
    const authStore = useAuthStore();
    const mySettingStore = useSettingStore();
    const mySetting = computed(() => mySettingStore.settings);
    const AddConfirmationModal = ref(false);
    const chosenFile: any = ref(null);
    const name = ref("");
    const keyword = ref("");
    const logoAdmin = ref("");
    const logoUser = ref("");

    const uploadFilesUser = (file: any) => {
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
          setNotificationToastMessage("Không thể tải ảnh lên", false);
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
            logoUser.value = downloadURL;
          });
        }
      );
    };
    const uploadFilesAdmin = (file: any) => {
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
          setNotificationToastMessage("Không thể tải ảnh lên", false);
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
            logoAdmin.value = downloadURL;
          });
        }
      );
    };

    async function uploadLogoUser(event: any) {
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
        uploadFilesUser(chosenFile.value);
      } else {
        logoUser.value = "";
      }
    }

    async function uploadLogoAdmin(event: any) {
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
        uploadFilesAdmin(chosenFile.value);
      } else {
        logoAdmin.value = "";
      }
    }

    //reload data
    const reloadData = () => {
      name.value = "";
      keyword.value = "";
      logoAdmin.value = "";
      logoUser.value = "";
    };

    // setting
    const actionSaveSetting = async () => {
      const data = {
        name: name.value,
        keyword: keyword.value,
        logoAdmin: logoAdmin.value,
        logoUser: logoUser.value,
      } as settingInfor;
      const response = await settingService.save(
        data,
        authStore.currentUser.Token
      );
      if (response.data.success) {
        AddConfirmationModal.value = false;
        reloadData();
        mySettingStore.getAllSetting();
      } else {
        setNotificationToastMessage("Tải dữ liệu thất bại", false);
      }
    };

    onMounted(async () => {
      mySettingStore.getAllSetting();
    });

    return {
      router,
      mySetting,
      chosenFile,
      name,
      keyword,
      logoUser,
      logoAdmin,
      uploadLogoUser,
      uploadFilesUser,
      uploadFilesAdmin,
      uploadLogoAdmin,
      actionSaveSetting,
      AddConfirmationModal,
    };
  },
});
</script>
<style>
.img-logo {
  object-fit: contain;
}
</style>
