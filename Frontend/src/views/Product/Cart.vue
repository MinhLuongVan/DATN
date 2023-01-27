<template>
  <div>
    <div class="intro-y py-3 lg:px-52 mt-3 lg:mt-5">
      <div class="intro-y flex lg:mt-0 items-center">
        <div class="flex cursor-pointer" @click="router.push('/')">
          <HomeIcon class="w-5 h-5 mt-0.5"></HomeIcon>
          <h2 class="text-lg mx-2 hover:text-lime-500">Trang chủ</h2>
        </div>
        <span>--></span>
        <h2 class="text-lg ml-2 text-lime-500">Giỏ hàng</h2>
      </div>

      <!-- BEGIN : GIỎ HÀNG -->
      <div class="intro-y grid grid-cols-12">
        <div class="col-span-12">
          <h2 class="text-xl mt-4 lg:text-2xl">Giỏ hàng</h2>
          <table class="mt-3 table">
            <thead>
              <tr>
                <th class="border">Ảnh</th>
                <th class="border">Sản phẩm</th>
                <th class="border">Đơn giá</th>
                <th class="border">Số lượng</th>
                <th class="border">Tổng</th>
                <th class="border text-center">Hành động</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td class="w-28 border">
                  <img src="../../assets/images/tree1.jpg" alt="" />
                </td>
                <td class="border">Cây phong thủy</td>
                <td class="border">50.000đ</td>
                <td class="border">1</td>
                <td class="border">50.000đ</td>
                <td class="border">
                  <div class="flex justify-center text-red-500">
                    <TrashIcon class="w-5"></TrashIcon> 
                    <p class="pl-1 pt-1">Xóa</p>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
          <table class="mt-5">
            <tr>
            <th class="border px-8 py-2">Thành tiền</th>
            <th class="border px-8 py-2">Tổng tiền</th>
            </tr>
            <tr>
              <td class="border py-2 px-8">70.000đ </td>
              <td class="border py-2 px-8">70.000đ</td>
            </tr>
          </table>
         <div class="flex justify-between">
          <div>
            <button class="mt-4 px-4 py-2 rounded-md text-white bg-lime-500 hover:bg-lime-600 ">Tiến hành thanh toán</button>
          </div>
          <div>
            <button class="mt-4 px-4 py-2 rounded-md  bg-gray-200 hover:bg-gray-300 "
            @click="router.push('/')">Tiếp tục mua hàng</button>
          </div>
         </div>
        </div>
      </div>
      <!-- END : GIỎ HÀNG -->
    </div>
    <bottom />
  </div>
</template>

<script lang="ts">
import { useRouter } from "vue-router";
import bottom from "../../views/Footer/Footer.vue";
export default {
  name: "Cart",
  components: {
    bottom,
  },
  setup() {
    const router = useRouter();
    return {
      router,
    };
  },
};
</script>

<style></style>
