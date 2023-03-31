<template>
  <div class="footer bg-gray-500 h-auto mt-10">
    <div class="intro-y grid grid-cols-12 lg:px-52">
      <div class="col-span-12 lg:col-span-6">
        <div class="lg:flex">
          <div class="pt-10">
            <h1 class="text-white font-medium text-xl">THÔNG TIN</h1>
            <ul class="text-white text-base mt-3">
              <li class="py-1.5">
                <a href="/introduce" class="hover:text-lime-500">Giới thiệu</a>
              </li>
              <li class="py-1.5">
                <a href="/introduce/transport" class="hover:text-lime-500"
                  >Thông tin vận chuyển</a
                >
              </li>
              <li class="py-1.5">
                <a href="/introduce/condition" class="hover:text-lime-500"
                  >Quy định và điều khoản</a
                >
              </li>
              <li class="py-1.5">
                <a href="/introduce/security" class="hover:text-lime-500"
                  >Chính sách bảo mật</a
                >
              </li>
            </ul>
          </div>
          <div class="lg:pt-10 lg:ml-20">
            <h1 class="text-white font-medium text-xl">CÂY XANH</h1>
            <ul class="text-white text-base mt-3">
              <li class="py-1.5">
                <a
                  href=""
                  class="hover:text-lime-500"
                  @click="router.push('/listproduct')"
                  >Cây xương rồng</a
                >
              </li>
              <li class="py-1.5">
                <a
                  href=""
                  class="hover:text-lime-500"
                  @click="router.push('/listproduct')"
                  >Cây văn phòng</a
                >
              </li>
              <li class="py-1.5">
                <a
                  href=""
                  class="hover:text-lime-500"
                  @click="router.push('/listproduct')"
                  >Cây sen đá</a
                >
              </li>
            </ul>
          </div>
        </div>
        <div>
          <h1 class="text-white font-medium text-xl mt-4">LIÊN HỆ</h1>
          <div class="flex mt-3">
            <Map-pinIcon class="w-4 h-4 mt-1 text-white"></Map-pinIcon>
            <p class="text-base pl-4 text-white">
              Ngõ 113 Yên Hòa, Quận Cầu Giấy, Hà Nội
            </p>
          </div>
          <div class="flex mt-3">
            <PhoneIcon class="w-4 h-4 mt-1 text-white"></PhoneIcon>
            <p class="text-base pl-4 text-white cursor-pointer">0363546789</p>
          </div>
          <div class="flex my-3">
            <MailIcon class="w-4 h-4 mt-1 text-white"></MailIcon>
            <a href="" class="text-base pl-4 text-white cursor-pointer"
              >luongvanminh290@gmail.com</a
            >
          </div>
        </div>
      </div>
      <div class="col-span-12 lg:col-span-6">
        <a href="/"
          ><img
            src="../../assets/images/freshgarden.png"
            alt="/"
            class="w-3/5 mt-5 lg:ml-28 cursor-pointer"
        /></a>
        <p class="text-center text-white lg:text-base mt-3">
          Cây cảnh, từ trước đến nay vẫn được xem như vật trang trí, làm đẹp
          không gian sống cho con người. Cây để bàn, bonsai, terrarium, cây thuỷ
          sinh hoặc cây treo chậu… mỗi loại mỗi cây đều có ý nghĩa và vẻ đẹp
          riêng của mình, góp phần đáng kể làm cho cuộc sống chúng ta thêm sinh
          động, trở nên đáng yêu và thanh bình hơn ...
        </p>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { useRouter } from "vue-router";
export default {
  name: "bottom",
  setup() {
    const router = useRouter();
    return {
      router,
    };
  },
};
</script>

<style></style>
