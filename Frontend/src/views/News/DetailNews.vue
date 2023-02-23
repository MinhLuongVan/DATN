<template>
  <div>
    <div class="lg:px-52 lg:border-t-0 border-t-2 mt-3 lg:mt-8">
      <div class="intro-y flex mt-3 items-center">
        <div class="flex cursor-pointer" @click="router.push('/')">
          <HomeIcon class="w-5 h-5 mt-0.5"></HomeIcon>
          <h2 class="text-lg mx-2 hover:text-lime-500">Trang chủ</h2>
        </div>
        <span>--></span>
        <h2 class="text-lg ml-2 text-lime-500">Tin tức</h2>
      </div>
      <!-- BEGIN: Page Introduce -->
      <div class="intro-y py-5">
        <div class="">
          <h2 class="text-xl font-medium">{{ myNews.name }}</h2>
          <img :src="myNews.image" alt="" class=" w-full h-auto lg:w-1/4 lg:h-56 my-3" />
          <p class="text-base pt-3">{{ myNews.content }}</p>
        </div>
      </div>
      <!-- END: Page Introduce -->
    </div>
    <bottom />
  </div>
</template>

<script lang="ts">
import { computed, onMounted, ref } from "vue";
import { useRoute } from "vue-router";
import { useRouter } from "vue-router";
import bottom from "../../views/Footer/Footer.vue";
import { useNewsStore } from "../../stores/newsStore";
import { useAuthStore } from "../../stores/authStore";
import { setNotificationToastMessage } from "../../utils/myFunction";
import { newsInfor } from '../../types/newsType';
import newsService from '../../services/newsService';
export default {
  name: "DetailNew",
  components: { bottom },
  setup() {
    const route = useRoute();
    const router = useRouter();
    const authStore = useAuthStore(); 
    const myNewsStore = useNewsStore();
    const myNews: any = ref<newsInfor[]>([]);
    const screen = ref(400);

    // get news by id
    async function actionGetNewsById() {
      const itemFind: any = { _id: route.params.id } as newsInfor;
      const response = await newsService.findOne(
        itemFind,
        authStore.currentUser.Token
      );
      if (response.data.success) {
        myNews.value = response.data.values;
      } else {
        setNotificationToastMessage("Tải dữ liệu thất bại", false);
      }
    }
    onMounted(() => {
       myNewsStore.getAllNews();
       actionGetNewsById();
    });
    return {
      route,
      router,
      myNews,
      screen,
    };
  },
};
</script>

<style></style>
