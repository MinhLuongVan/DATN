<template>
  <div>
    <div
      v-for="(item, index) in mySetting"
      :key="index"
      class="lg:w-2/3 p-3 lg:p-5 bg-slate-100 rounded-md mt-12 lg:mt-2"
    >
      <h2 class="py-2 text-xl">Cấu hình website</h2>
      <fieldset class="border border-slate-300 my-2 p-3 w-full">
        <legend class="text-base px-2">Tên website</legend>
        <div class="flex items-center justify-between">
          <p class="w-4/5 border bg-white py-2.5 px-2">{{ item.name }}</p>
          <div>
            <button
              class="border border-slate-300 text-slate-500 rounded-full p-2 mr-2 hover:text-slate-700"
              @click="actionInitDataName(item)"
            >
              <EditIcon class="w-4 h-4" />
            </button>
            <button
              class="border border-red-500 text-red-500 rounded-full p-2 hover:text-red-700 hi"
            >
              <TrashIcon class="w-4 h-4" />
            </button>
          </div>
        </div>
        <div v-if="showNameEdit" class="grid grid-cols-8 w-4/5 mt-1 bg-white">
          <input type="text" class="col-span-7" v-model="nameEdit" />
          <button class="border text-slate-500" @click="actionEditName()">
            <Upload-cloudIcon class="w-5 h-5 lg:ml-6"></Upload-cloudIcon>
          </button>
        </div>
      </fieldset>
      <fieldset class="border border-slate-300 my-2 p-3 w-full">
        <legend class="text-base px-2">Từ khóa</legend>
        <div class="flex w-full items-center justify-between">
          <p class="w-4/5 border bg-white py-2.5 px-2">{{ item.keyword }}</p>
          <div>
            <button
              class="border border-slate-300 text-slate-500 rounded-full p-2 mr-2 hover:text-slate-700"
              @click="actionInitDataKeyWord(item)"
            >
              <EditIcon class="w-4 h-4" />
            </button>
            <button
              class="border border-red-500 text-red-500 rounded-full p-2 hover:text-red-700 hidden"
            >
              <TrashIcon class="w-4 h-4" />
            </button>
          </div>
        </div>
        <div
          v-if="showKeyWordEdit"
          class="grid grid-cols-8 w-4/5 mt-1 bg-white"
        >
          <input type="text" class="col-span-7" v-model="keywordEdit" />
          <button class="border text-slate-500" @click="actionEditKeyWord()">
            <Upload-cloudIcon class="w-5 h-5 lg:ml-6"></Upload-cloudIcon>
          </button>
        </div>
      </fieldset>
      <fieldset class="border border-slate-300 my-2 p-3 w-full mt-5">
        <legend class="text-base px-2">Logo giao diện người dùng</legend>
        <div class="flex items-center justify-between">
          <img v-if="item.logoUser"
            :src="item.logoUser"
            alt=""
            class="img-logo w-1/2 h-28 lg:w-2/3 lg:h-32"
          />
          <img v-else
            src="../../../assets/images/rsz_logo-01.png"
            alt=""
            class="img-logo w-1/2 h-28 lg:w-2/3 lg:h-32"
          />
          <div>
            <button
              class="border border-slate-300 text-slate-500 rounded-full p-2 mr-2 hover:text-slate-700"
              @click="actionInitDataLogoUser(item)"
            >
              <EditIcon class="w-4 h-4" />
            </button>
            <button
              class="border border-red-500 text-red-500 rounded-full p-2 hover:text-red-700 hidden"
            >
              <TrashIcon class="w-4 h-4" />
            </button>
          </div>
        </div>
       <div
          v-if="showLogoUserEdit"
          class="grid grid-cols-8 w-4/5 mt-1 bg-white"
        >
        <input
          type="file"
          @change="uploadLogoUser"
          class="col-span-7 py-1.5 px-2 block mt-1"
        />
          <button class="border text-slate-500" @click="actionEditLogoUser()">
            <Upload-cloudIcon class="w-5 h-5 lg:ml-6"></Upload-cloudIcon>
          </button>
        </div>
      </fieldset>
      <fieldset class="border border-slate-300 my-2 p-3 w-full mt-5">
        <legend class="text-base px-2">Logo giao diện quản trị</legend>
        <div class="flex items-center justify-between">
          <img v-if="item.logoAdmin"
            :src="item.logoAdmin"
            alt=""
            class="img-logo w-1/2 h-28 lg:w-2/3 lg:h-32"
          />
          <img v-else
            src="../../../assets/images/logoadmin.jpg"
            alt=""
            class="img-logo w-1/2 h-28 lg:w-2/3 lg:h-32"
          />
          <div>
            <button
              class="border border-slate-300 text-slate-500 rounded-full p-2 mr-2 hover:text-slate-700"
              @click="actionInitDataLogoAdmin(item)"
            >
              <EditIcon class="w-4 h-4" />
            </button>
            <button
              class="border border-red-500 text-red-500 rounded-full p-2 hover:text-red-700 hidden"
            >
              <TrashIcon class="w-4 h-4" />
            </button>
          </div>
        </div>
        <div
          v-if="showLogoAdminEdit"
          class="grid grid-cols-8 w-4/5 mt-1 bg-white"
        >
        <input
          type="file"
          @change="uploadLogoAdmin"
          class="col-span-7 py-1.5 px-2 block mt-1"
        />
          <button class="border text-slate-500" @click="actionEditLogoAdmin()">
            <Upload-cloudIcon class="w-5 h-5 lg:ml-6"></Upload-cloudIcon>
          </button>
        </div>
      </fieldset>
      <!-- BEGIN: Add,Edit Confirmation Modal -->
      <Modal
        :show="AddConfirmationModal"
        @hidden="AddConfirmationModal = false"
      >
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
    const mySetting: any = computed(() => mySettingStore.settings);
    const AddConfirmationModal = ref(false);
    const showNameEdit = ref(false);
    const showKeyWordEdit = ref(false);
    const idUpdate = ref("");
    const nameEdit = ref("");
    const keywordEdit = ref("");
    const showLogoUserEdit = ref(false);
    const showLogoAdminEdit = ref(false)
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
      nameEdit.value = "";
      keywordEdit.value = "";
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

    // init data edit name
    async function actionInitDataName(item: settingInfor) {
      const itemFindId: any = { _id: item._id } as settingInfor;
      const response = await settingService.findOne(
        itemFindId,
        authStore.currentUser.Token
      );
      idUpdate.value = response.data.values._id;
      nameEdit.value = response.data.values.name;
      keyword.value = response.data.values.keyword;
      logoAdmin.value = response.data.values.logoAdmin;
      logoUser.value = response.data.values.logoUser;
      showNameEdit.value = true;
    }
    // edit name
    async function actionEditName() {
      const dataUpdate = {
        _id: idUpdate.value,
        name: nameEdit.value,
        keyword: keyword.value,
        logoAdmin: logoAdmin.value,
        logoUser: logoUser.value,
      } as settingInfor;
      const response = await settingService.update(
        dataUpdate,
        authStore.currentUser.Token
      );
      if (response.data.success) {
        showNameEdit.value = false;
        mySettingStore.getAllSetting();
      } else {
        setNotificationToastMessage("Cập nhật dữ liệu thất bại", false);
      }
    }

    // init data edit keyword
    async function actionInitDataKeyWord(item: settingInfor) {
      const itemFindId: any = { _id: item._id } as settingInfor;
      const response = await settingService.findOne(
        itemFindId,
        authStore.currentUser.Token
      );
      idUpdate.value = response.data.values._id;
      keywordEdit.value = response.data.values.keyword;
      name.value = response.data.values.name;
      logoAdmin.value = response.data.values.logoAdmin;
      logoUser.value = response.data.values.logoUser;
      showKeyWordEdit.value = true;
    }
    //edit keyword
    async function actionEditKeyWord() {
      const dataUpdate = {
        _id: idUpdate.value,
        name: name.value,
        keyword: keywordEdit.value,
        logoAdmin: logoAdmin.value,
        logoUser: logoUser.value,
      } as settingInfor;
      const response = await settingService.update(
        dataUpdate,
        authStore.currentUser.Token
      );
      if (response.data.success) {
        showKeyWordEdit.value = false;
        mySettingStore.getAllSetting();
      } else {
        setNotificationToastMessage("Cập nhật dữ liệu thất bại", false);
      }
    }

    // init data logo user
    async function actionInitDataLogoUser(item: settingInfor) {
      const itemFindId: any = { _id: item._id } as settingInfor;
      const response = await settingService.findOne(
        itemFindId,
        authStore.currentUser.Token
      );
      idUpdate.value = response.data.values._id;
      keyword.value = response.data.values.keyword;
      name.value = response.data.values.name;
      logoAdmin.value = response.data.values.logoAdmin;
      logoUser.value = response.data.values.logoUser;
      showLogoUserEdit.value = true;
    }

      //edit logo user
      async function actionEditLogoUser() {
      const dataUpdate = {
        _id: idUpdate.value,
        name: name.value,
        keyword: keyword.value,
        logoAdmin: logoAdmin.value,
        logoUser: logoUser.value,
      } as settingInfor;
      const response = await settingService.update(
        dataUpdate,
        authStore.currentUser.Token
      );
      if (response.data.success) {
        showLogoUserEdit.value = false;
        mySettingStore.getAllSetting();
      } else {
        setNotificationToastMessage("Cập nhật dữ liệu thất bại", false);
      }
    }

    
    // init data logo admin
    async function actionInitDataLogoAdmin(item: settingInfor) {
      const itemFindId: any = { _id: item._id } as settingInfor;
      const response = await settingService.findOne(
        itemFindId,
        authStore.currentUser.Token
      );
      idUpdate.value = response.data.values._id;
      keyword.value = response.data.values.keyword;
      name.value = response.data.values.name;
      logoAdmin.value = response.data.values.logoAdmin;
      logoUser.value = response.data.values.logoUser;
      showLogoAdminEdit.value = true;
    }

      //edit logo admin
      async function actionEditLogoAdmin() {
      const dataUpdate = {
        _id: idUpdate.value,
        name: name.value,
        keyword: keyword.value,
        logoAdmin: logoAdmin.value,
        logoUser: logoUser.value,
      } as settingInfor;
      const response = await settingService.update(
        dataUpdate,
        authStore.currentUser.Token
      );
      if (response.data.success) {
        showLogoAdminEdit.value = false;
        mySettingStore.getAllSetting();
      } else {
        setNotificationToastMessage("Cập nhật dữ liệu thất bại", false);
      }
    }


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
      showKeyWordEdit,
      showNameEdit,
      showLogoUserEdit,
      showLogoAdminEdit,
      idUpdate,
      nameEdit,
      keywordEdit,
      uploadLogoUser,
      uploadFilesUser,
      uploadFilesAdmin,
      uploadLogoAdmin,
      actionSaveSetting,
      actionInitDataName,
      actionEditName,
      actionEditKeyWord,
      actionInitDataKeyWord,
      actionInitDataLogoUser,
      actionInitDataLogoAdmin,
      actionEditLogoUser,
      actionEditLogoAdmin,
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
