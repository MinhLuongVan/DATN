<template>
  <div>
    <div class="lg:px-52 lg:border-t-0 border-t-2 mt-3">
      <div class="intro-y flex mt-3 lg:mt-0 items-center">
        <div class="flex cursor-pointer" @click="router.push('/')">
          <HomeIcon class="w-5 h-5 mt-0.5"></HomeIcon>
          <h2 class="text-lg mx-2 hover:text-lime-500">Trang chủ</h2>
        </div>
        <span>--></span>
        <h2 class="text-lg ml-2 text-lime-500">Thông tin vận chuyển</h2>
      </div>
      <!-- BEGIN: Page Transport -->
      <div class="intro-y py-3">
        <h1 class="lg:text-3xl text-2xl lg:mt-4 mt-2 font-medium">
          Thông tin vận chuyển
        </h1>
        <p class="mt-3 text-lg lg:text-base">
        – Fresh-Garden cung cấp dịch vụ giao hàng cho khách hàng trong nội đô các
          tỉnh thành (Hà Nội, Đà Nẵng, Hải Phòng, Tp.Hồ Chí Minh) trung bình từ
          1-4 ngày làm việc.
        </p>
        <h2 class="lg:text:xl text-lg lg:mt-5 mt-2 font-medium">
          THỜI GIAN GỬI HÀNG
        </h2>
        <p class="mt-2 text-lg lg:text-base">
          – Nhằm đảm bảo sự chính xác và an toàn cho tất cả hàng hóa khi gửi,
          Fresh-Garden sẽ làm thủ tục gửi hàng cho tất cả đơn hàng vào buổi chiều
          của ngày làm việc.
        </p>
        <p class="mt-3 text-lg lg:text-base">
          – Những khách hàng thanh toán trước 16:00 PM sẽ được gửi hàng trong
          vòng 1-3 ngày làm việc.
        </p>
        <p class="mt-3 text-lg lg:text-base">
          – Những khách hàng thanh toán sau 16:00 PM sẽ được gửi hàng trong vòng
          2-4 ngày.
        </p>
        <p class="mt-3 text-lg lg:text-base">
          – Trong trường hợp khẩn cấp, khách hàng có thể liên hệ với phòng Chăm
          Sóc Khách Hàng để thay đổi thời gian gửi hàng.
        </p>
      </div>
      <!-- END: Page Transport -->
    </div>
    <bottom />
  </div>
</template>
<script lang="ts">
import { useRouter } from "vue-router";
import bottom from "../../views/Footer/Footer.vue";
export default {
  name: "Introduce",
  components: { bottom },
  setup() {
    const router = useRouter();

    return {
      router,
    };
  },
};
</script>

<style></style>
