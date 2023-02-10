<template>
  <div>
    <top-bar />
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
                v-model="state.name"
              />
              <small class="text-red-500 text-base" v-if="v$.name.$errors">
                {{ v$.name.$errors[0]?.$message }}
              </small>
              <input
                type="text"
                class="w-full mt-3 rounded-md"
                placeholder="Địa chỉ email"
                v-model="state.email"
              />
              <small class="text-red-500 text-base" v-if="v$.email.$errors">
                {{ v$.email.$errors[0]?.$message }}
              </small>
              <textarea
                name=""
                id=""
                cols="40"
                rows="5"
                class="w-full mt-3 rounded-md"
                placeholder="Nội dung"
                v-model="state.note"
              ></textarea>
              <small class="text-red-500 text-base" v-if="v$.note.$errors">
                {{ v$.note.$errors[0]?.$message }}
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
                <p class="mt-1">A12, Đinh Tiên Hoàng, Q. Hoàn Kiếm, Hà Nội</p>
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
import {
  setNotificationFailedWhenGetData,
  setNotificationToastMessage,
} from "../../utils/myFunction";
import { ref } from "vue";
export default {
  name: "Contact",
  components: { bottom },
  setup() {
    const router = useRouter();
    const email = ref("");
    const name = ref("");
    const note = ref("");
    const authStore = useAuthStore();

    const state = ref({
      email: "",
      name: "",
      note: "",
    });
    const rules = {
      email: { required },
      name: { required },
      note: { required },
    };
    const v$ = useValidate(rules, state);
    const submitContact = async () => {
      const result = await v$.value.$validate();
      if (result) {
        const data = {
          userId: authStore.currentUser._id,
          email: state.value.email,
          name: state.value.name,
          note: state.value.note,
        } as contactInfor;
        const res = await ContactService.save(data, authStore.token);
        console.log('data',res.data)
        if (res.data.success) {
          setNotificationToastMessage("Gửi liên hệ thành công", true);
        } else {
          setNotificationToastMessage(res.data.message, false);
        }
      } else {
        setNotificationFailedWhenGetData();
      }
    };
    return {
      router,
      email,
      name,
      note,
      v$,
      state,
      submitContact,
    };
  },
};
</script>

<style></style>
