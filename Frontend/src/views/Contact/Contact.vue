<template>
  <div>
    <div class="lg:px-52 mt-3 lg:mt-8">
      <div class="intro-y flex sm:mt-4 lg:mt-0 items-center">
        <div class="flex" @click="router.push('/')">
          <HomeIcon class="w-5 h-5 mt-0.5"></HomeIcon>
          <h2 class="text-lg mx-2 hover:text-lime-500">Trang chủ</h2>
        </div>
        <span>--></span>
        <h2 class="text-lg ml-2 text-lime-500">Liên hệ với chúng tôi</h2>
      </div>
      <!-- BEGIN: Page contact -->
      <div class="intro-y py-3">
        <h1 class="lg:text-2xl text-xl mt-2 font-medium">Thông tin liên hệ</h1>
        <div class="intro-y grid grid-cols-12 gap-8">
          <div class="col-span-12 lg:col-span-7">
            <form action="">
              <input
                type="text"
                class="w-full mt-3 rounded-md"
                placeholder="Tên của bạn"
                v-model="formData.name"
              />
              <small class="text-red-500 text-base" v-if="errMsg">
                {{ nameErr }}
              </small>
              <input
                type="text"
                class="w-full mt-3 rounded-md"
                placeholder="Địa chỉ email"
                v-model="formData.email"
              />
              <small class="text-red-500 text-base" v-if="errMsg">
                {{ emailErr }}
              </small>
              <textarea
                name=""
                id=""
                cols="40"
                rows="5"
                class="w-full mt-3 rounded-md"
                placeholder="Nội dung"
                v-model="formData.note"
              ></textarea>
              <small class="text-red-500 text-base" v-if="errMsg">
                {{ noteErr }}
              </small>
            </form>
            <button
              class="mt-4 px-5 py-2 text-base text-white border rounded-md bg-lime-500 hover:bg-lime-600"
              @click="submitContact()"
            >
              Gửi đi
            </button>
          </div>
          <div class="col-span-12 lg:col-span-5">
            <div class="flex mt-4 pl-1">
              <img
                src="../../assets/images/map.png"
                alt="/"
                class="w-14 h-15"
              />
              <div class="m-2">
                <p class="text-base font-medium">Địa chỉ</p>
                <p class="mt-1">Ngõ 113 Yên Hòa, Quận Cầu Giấy, Hà Nội</p>
              </div>
            </div>
            <div class="flex mt-4">
              <img
                src="../../assets/images/call.png"
                alt="/"
                class="w-18 h-16"
              />
              <div class="mt-2 ml-1">
                <p class="text-base font-medium">Điện thoại</p>
                <a href="" class="my-1 text-orange-400 hover:text-orange-500"
                  >0363546789</a
                >
                <p>Thứ 2-CN: 8h - 17h</p>
              </div>
            </div>
            <div class="flex mt-3">
              <img
                src="../../assets/images/email.png"
                alt="/"
                class="w-16 h-15"
              />
              <div class="m-2">
                <p class="text-base font-medium">Email</p>
                <a href="" class="text-orange-400 hover:text-orange-500 mt-1.5"
                  >luongvanminh@gmail.com</a
                >
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- END: Page contact -->
      <div id="map" class="border h-80 mt-5 z-10"></div>
    </div>
    <bottom />
  </div>
</template>
<script lang="ts">
import { useRouter } from "vue-router";
import bottom from "../../views/Footer/Footer.vue";
import useValidate from "@vuelidate/core";
import { required, minLength } from "@vuelidate/validators";
import { useAuthStore } from "../../stores/authStore";
import { contactInfor } from "../../types/contactType";
import ContactService from "../../services/contactService";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import {
  REGEXEMAIL,
  REQUIRED,
  setNotificationFailedWhenGetData,
  setNotificationToastMessage,
} from "../../utils/myFunction";
import { computed, onMounted, reactive, ref } from "vue";
export default {
  name: "Contact",
  components: { bottom },
  setup() {
    const router = useRouter();
    const email = ref("");
    const name = ref("");
    const note = ref("");
    const authStore = useAuthStore();
    const map = ref("");
    const marker = ref("");
    const latlng = [21.028924, 105.798357];
    const formData = reactive({
      name: "",
      email: "",
      note: "",
    });
    // validate
    const errMsg = ref(false);
    const nameErr = computed(() => {
      if (!formData.name) return REQUIRED;
    });
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const emailErr = computed(() => {
      if (!formData.email) {
        return REQUIRED;
      } else if (!emailRegex.test(formData.email)) {
        return REGEXEMAIL;
      }
    });
    const noteErr = computed(() => {
      if (!formData.note) return REQUIRED;
    });

    //reload data
    const reloadData = () => {
      formData.name = "";
      formData.email = "";
      formData.note = "";
      errMsg.value = false;
    };

    const submitContact = async () => {
      if (nameErr.value || emailErr.value || noteErr.value) {
        errMsg.value = true;
      } else {
        const data = {
          userId: authStore.currentUser._id,
          email: formData.email,
          name: formData.name,
          note: formData.note,
        } as contactInfor;
        const res = await ContactService.save(
          data,
          authStore.currentUser.Token
        );
        if (res.data.success) {
          reloadData();
          setNotificationToastMessage("Gửi liên hệ thành công", true);
        } else {
          setNotificationToastMessage(res.data.message, false);
        }
      }
    };
    onMounted(() => {
      map.value = L.map("map").setView(latlng, 17);
      L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        attribution:
          'Map data © <a href="https://openstreetmap.org">OpenStreetMap</a> contributors',
        maxZoom: 18,
      }).addTo(map.value);
      marker.value = L.marker(latlng).addTo(map.value);
    });

    return {
      router,
      formData,
      errMsg,
      nameErr,
      emailErr,
      noteErr,
      submitContact,
      map,
      marker,
    };
  },
};
</script>

<style></style>
