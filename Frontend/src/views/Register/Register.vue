<template>
  <div class="container w-full h-screen flex justify-center">
    <div
      class="lg:w-1/4 lg:h-auto sm:h-4/6 w-5/6 md:h-4/6 border rounded-xl mx-auto my-auto bg-white"
    >
      <h1 class="text-3xl font-bold font-serif text-center mt-6">Đăng ký</h1>
      <div class="mx-10 mt-3">
        <div class="mb-3">
          <label class="lg:text-base font-bold">Họ và tên</label>
          <input
            type="text"
            v-model="state.username"
            placeholder="Họ và tên"
            class="w-full h-10 border rounded-md mt-1 p-3"
          />
          <small class="text-red-500 text-base" v-if="v$.username.$errors">
            {{ v$.username.$errors[0]?.$message }}
          </small>
        </div>
        <div class="mb-3">
          <label class="lg:text-base font-bold">Email</label>
          <input
            type="text"
            v-model="state.email"
            placeholder="Email"
            class="w-full h-10 border rounded-md mt-1 p-3"
          />
          <small class="text-red-500 text-base" v-if="v$.email.$errors">
            {{ v$.email.$errors[0]?.$message }}
          </small>
        </div>
        <div class="mb-3">
          <label class="lg:text-base font-bold">SĐT</label>
          <input
            type="text"
            v-model="state.sdt"
            placeholder="Số điện thoại"
            class="w-full h-10 border rounded-md mt-1 p-3"
          />
          <small class="text-red-500 text-base" v-if="v$.sdt.$errors">
            {{ v$.sdt.$errors[0]?.$message }}
          </small>
        </div>
        <div class="mb-3">
          <label class="lg:text-base font-bold">Mật khẩu</label>
          <input
            type="password"
            v-model="state.password"
            placeholder="Mật khẩu"
            class="w-full h-10 border rounded-md mt-1 p-3"
          />
          <small class="text-red-500 text-base" v-if="v$.password.$errors">
            {{ v$.password.$errors[0]?.$message }}
          </small>
        </div>
        <div>
          <label class="lg:text-base font-bold">Nhập lại mật khẩu</label>
          <input
            type="password"
            v-model="state.passwordagain"
            placeholder="Nhập lại mật khẩu"
            class="w-full h-10 border rounded-md mt-1 p-3"
          />
          <small class="text-red-500 text-base" v-if="v$.passwordagain.$errors">
            {{ v$.passwordagain.$errors[0]?.$message }}
          </small>
        </div>
      </div>
      <div class="text-center mx-10 mt-6">
        <button
          class="w-full py-1.5 rounded-md bg-lime-500 hover:bg-lime-700 text-white font-serif lg:text-base"
          @click="submitRegister"
        >
          Đăng ký
        </button>
        <div class="flex justify-center mt-4 mb-7">
          <p class="lg:text-base">Bạn đã có tài khoản ?</p>
          <a href="/login" class="lg:text-base font-bold text-red-500 pl-1"
            >Đăng nhập</a
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { useRouter } from "vue-router";
import { ref } from "vue";
import useValidate from "@vuelidate/core";
import { required, minLength } from "@vuelidate/validators";
import { useAuthStore } from "../../stores/authStore";
import { userInfor } from "../../types/userType";
import UserService from "../../services/userService";
import {
  setNotificationFailedWhenGetData,
  setNotificationToastMessage,
} from "../../utils/myFunction";

export default {
  name: "Register",
  setup() {
    const router = useRouter();
    const email = ref("");
    const username = ref("");
    const password = ref("");
    const sdt = ref("");
    const passwordagain = ref("");
    const authStore = useAuthStore();

    const state = ref({
      email: "",
      password: "",
      username: "",
      sdt: "",
      passwordagain: "",
    });
    const rules = {
      email: { required },
      username: { required },
      sdt: { required },
      password: { required, minLength: minLength(6) },
      passwordagain: { required },
    };
    const v$ = useValidate(rules, state);
    const submitRegister = async () => {
      const result = await v$.value.$validate();
      if (result) {
        const data = {
          email: state.value.email,
          username: state.value.username,
          password: state.value.password,
          sdt: state.value.sdt,
          passwordagain: state.value.passwordagain,
        } as userInfor;
        if (state.value.password === state.value.passwordagain) {
          const res = await UserService.register(data);
          if (res.data.success) {
            authStore.registerUser(res.data.values);
            await router.push("/login");
          } else {
            setNotificationToastMessage(res.data.message, false);
          }
        } else {
          setNotificationToastMessage("Vui lòng nhập đúng mật khẩu", false);
        }
      } else {
        setNotificationFailedWhenGetData();
      }
    };
    return {
      router,
      email,
      username,
      password,
      passwordagain,
      sdt,
      state,
      v$,
      submitRegister,
    };
  },
};
</script>

<style>
.container {
  background-image: url("https://anhdep123.com/wp-content/uploads/2020/10/hinh-nen-mau-xanh-la-cay-dep.jpg");
}
</style>
