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
        <div v-for="(item,index) in myNews" :key="index" class="border rounded-xl py-2 my-5">
          <div class="grid grid-cols-4 gap-4 h-auto p-2">
            <div class="col-span-4 lg:col-span-1 image">
              <img
                :src="item.image"
                alt="/"
                class="w-full h-56 rounded-md"
              />
            </div>
            <div class="col-span-4 lg:col-span-3 px-2 lg:px-10 py-2">
              <div
                class="w-full h-6 cursor-pointer text-base"
              >
                <span class="text-lg font-medium hover:text-lime-500">{{ item.name }}</span>
                <div class="flex py-2 ">
                  <div class="flex">
                    <CalendarIcon class="w-5 h-5 pt-0.5"></CalendarIcon>
                    <span class="pr-3 pl-2"> {{ moment(item.createdAt).format("DD/MM/YYYY HH:mm") }}</span>
                  </div>
                  <!-- <div class="flex">
                    <EyeIcon class="w-5 h-5 pt-1"></EyeIcon>
                    <span class="mr-2">12</span>
                    <span>lượt xem</span>
                  </div> -->
                </div>
                <p>{{ item.content }}</p>
                </div>
            </div>
          </div>
        </div>
      </div>
      <!-- END: Page Introduce -->
    </div>
    <bottom />
  </div>
</template>
<script lang="ts">
import { computed, onMounted, ref } from "vue";
import { useRouter } from "vue-router";
import bottom from "../../views/Footer/Footer.vue";
import { useNewsStore } from "../../stores/newsStore";
import moment from "moment";
export default {
  name: "Introduce",
  components: { bottom },
  setup() {
    const router = useRouter();
    const myNewsStore = useNewsStore();
    const myNews: any = computed(() => myNewsStore.news);
    const screen = ref(400);
    onMounted( async() => {
      myNewsStore.getAllNews();
    })
    return {
      router,
      moment,
      myNews,
      screen
    };
  },
};
</script>

<style>
.image {
  
  object-fit: contain ;
}
</style>
