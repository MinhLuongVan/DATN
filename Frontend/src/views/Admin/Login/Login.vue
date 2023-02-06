<template>
  <div
    class=" container w-full h-screen  flex justify-center "
  >
    <div
      class="lg:w-1/4 lg:h-4/6 min-h-96 w-5/6 md:h-auto border rounded-xl float-right my-auto bg-white"
    >
      <h1 class=" text-3xl font-bold font-serif text-center mt-12">
       Đăng nhập
      </h1>
      <div class="mx-10 mt-5" @keyup.enter="submitLogin">
        <div class="mb-5">
          <label class="lg:text-base font-bold">Email</label>
          <input
          type="text"
          v-model="state.email"
          placeholder="Email"
          class="w-full h-10 border rounded-md mt-2 p-3 "
        />
        <small class="text-red-500 text-base" v-if="v$.email.$errors">
          {{v$.email.$errors[0]?.$message}}
        </small>
        </div>
        <div>
          <label class="lg:text-base font-bold">Mật khẩu</label>
          <input
          type="password"
          v-model="state.password"
          placeholder="Mật khẩu"
          class="w-full h-10 border rounded-md mt-2  p-3 "
        />
        <small class="text-red-500 text-base" v-if="v$.password.$errors">
          {{v$.password.$errors[0]?.$message}}
        </small>
      </div>
        </div>
      <div class="text-center mx-10 mt-8 ">
        <button
          class="w-full py-1.5 mb-6 rounded-md bg-lime-500 hover:bg-lime-6600 text-white font-serif lg:text-base"
          @click="submitLogin"
        >
          Đăng nhập
        </button>
        <a href="" class="lg:text-base ">Quên mật khẩu?</a>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { useRouter } from "vue-router";
import { ref } from "vue";
import useValidate from '@vuelidate/core';
import {required, minLength} from '@vuelidate/validators';
import {useAuthStore} from '../../../stores/authStore'
import UserService from "../../../services/userService";
import { userInfor } from '../../../types/userType';
import Cookies from 'js-cookie';
import { env } from '../../../utils/myVariables';
import {
  setNotificationFailedWhenGetData,
  setNotificationToastMessage,
} from "../../../utils/myFunction";

export default {
  name: "AdminLogin",
  setup() {
    const router = useRouter();
    const email = ref('');
    const password = ref('');
    const authStore = useAuthStore();

    const state = ref({
      email: '',
      password: ''
    });
    const rules = {
      email: {required},
      password: {required, minLength:minLength(6)}
    };
    const v$ = useValidate(rules,state);
    const submitLogin = async () => {
      const result = await v$.value.$validate();
      if(result) {
        const data = {
          email: state.value.email,
          password: state.value.password
        } as userInfor;
        if(Cookies.get(env.nameCookie)) {
          authStore.logoutUser();
        }
        const res = await UserService.login(data);
        if(res.data.success) {
          await authStore.loginUser(res.data.values);
          router.push('/admin')
        } else {
          setNotificationToastMessage(res.data.message, false);
        }
      } else {
        setNotificationFailedWhenGetData();
      }
    }

    return {
      router,
      email,
      password,
      v$,
      state,
      submitLogin
    };
  },
};
</script>

<style>
.container {
  background-image: url("https://anhdep123.com/wp-content/uploads/2020/10/hinh-nen-mau-xanh-la-cay-dep.jpg");
}
</style>

