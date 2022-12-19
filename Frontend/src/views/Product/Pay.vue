<template>
  <div>
    <div class="intro-y py-3 lg:px-52">
      <div class="intro-y flex lg:mt-0 items-center">
        <div class="flex cursor-pointer" @click="router.push('/')">
          <HomeIcon class="w-5 h-5 mt-0.5"></HomeIcon>
          <h2 class="text-lg mx-2 hover:text-lime-500">Trang chủ</h2>
        </div>
        <span>--></span>
        <h2 class="text-lg ml-2 text-lime-500">Thanh toán</h2>
      </div>

      <!-- BEGIN : thanh toán -->
      <div class="intro-y grid grid-cols-12 gap-6 mt-4">
        <div class="col-span-12 lg:col-span-8">
          <!-- Begin: Địa chỉ nhận hàng -->
          <div class="border rounded-md">
            <div
              class="w-full h-12 py-2.5 -mt-0.5 border-b rounded-t-md border-gray-200 flex bg-gray-200"
            >
              <Map-pinIcon class="w-4 mr-1 ml-3"></Map-pinIcon>
              <span class="text-base">Địa chỉ nhận hàng</span>
            </div>
            <div class="mt-3 px-3">
              <span class="text-base font-medium">Tên đầy đủ</span>
              <input
                type="text"
                class="w-full rounded-md mt-2"
                placeholder="Họ và tên"
              />
            </div>
            <div class="mt-3 px-3">
              <span class="text-base font-medium">Email</span>
              <input
                type="text"
                class="w-full rounded-md mt-2"
                placeholder="Email"
              />
            </div>
            <div class="mt-3 px-3">
              <span class="text-base font-medium">Điện thoại</span>
              <input
                type="text"
                class="w-full rounded-md mt-2"
                placeholder="SĐT"
              />
            </div>
            <div class="mt-3 px-3">
              <span class="text-base font-medium">Địa chỉ chi tiết</span>
              <input
                type="text"
                class="w-full rounded-md mt-2"
                placeholder="Địa chỉ"
              />
            </div>
            <div class="mt-3 px-3">
              <span class="text-base font-medium">Ghi chú</span>
              <textarea
                name=""
                id=""
                class="w-full rounded-md mt-2 mb-4"
                rows="3"
              ></textarea>
            </div>
          </div>
          <!-- End : Địa chỉ nhận hàng -->

          <!-- Begin: hình thức thanh toán -->
          <div class="border rounded-md mt-4">
            <div
              class="w-full h-12 py-2.5 -mt-0.5 border-b rounded-t-md border-gray-200 flex bg-gray-200"
            >
              <Credit-cardIcon class="w-4 mr-1 ml-3"></Credit-cardIcon>
              <span class="text-base">Phương thức thanh toán</span>
            </div>
            <div class="my-3 px-3 flex items-center cursor-pointer">
              <input
                type="checkbox"
                name="checkedATM"
                id="checkedATM"
                class="rounded-full"
              />
              <div class="border w-full flex ml-2 rounded-md p-2">
                <img
                  src="../../assets/images/log-atm.jpg"
                  alt="/"
                  class="w-14 lg:w-20 ml-2"
                />
                <div class="ml-3 py-3">
                  <h2 class="text-base font-medium">Thanh toán qua IPay</h2>
                  <p>
                    Sử dụng thẻ ATM hoặc Internet Banking để tiến hành chuyển
                    khoản cho chúng tôi
                  </p>
                </div>
              </div>
            </div>

            <div class="my-3 px-3 flex items-center cursor-pointer">
              <input
                type="checkbox"
                name="checked"
                id="checked"
                class="rounded-full"
                checked
              />
              <div class="border w-full flex ml-2 rounded-md p-2">
                <img
                  src="../../assets/images/logo-xe.png"
                  alt="/"
                  class="w-14 lg:w-20 ml-2"
                />
                <div class="ml-3 py-2">
                  <h2 class="text-base font-medium">
                    Thanh toán khi nhận hàng
                  </h2>
                  <p>
                    Khách hàng thanh toán tiền mặt cho nhân viên giao hàng khi
                    hàng được chuyển đến địa chỉ nhận hàng
                  </p>
                </div>
              </div>
            </div>
          </div>
          <!-- End: hình thức thanh toán -->
        </div>
        <div class="col-span-12 lg:col-span-4">
          <!-- Begin: Đơn hàng -->
          <div class="border rounded-md">
            <div
              class="w-full h-12 py-2.5 border-b rounded-t-md border-gray-200 flex bg-gray-200"
            >
              <Shopping-cartIcon class="w-4 mr-1 ml-3"></Shopping-cartIcon>
              <span class="text-base">Đơn hàng</span>
              <span class="text-base pl-0.5">(1 sản phẩm)</span>
            </div>
            <div class="flex p-3">
                <img src="../../assets/images/tree5.jpg" alt="/" class="w-24 h-24">
                <div class="p-2.5">
                <p>Tên cây</p>
                <p>70.000đ</p>
                <span>x1</span>
                <p>70.000đ</p>
                </div>
            </div>
          </div>
          <!-- End: Đơn hàng -->

          <!-- Begin: Vận chuyển -->
          <div class="border rounded-md mt-4">
            <div
              class="w-full h-12 py-2.5 border-b rounded-t-md border-gray-200 flex bg-gray-200"
            >
              <TruckIcon class="w-5 mr-1 ml-3"></TruckIcon>
              <span class="text-base">Vận chuyển</span>
            </div>
            <div class="p-3">
                <h2 class="font-medium">Phí giao hàng tận nơi</h2>
                <div class="flex py-3">
                    <input type="checkbox" name="checked" id="checkbox" class="rounded-full" checked>
                    <p class="px-2">Miễn phí giao hàng toàn quốc</p>
                </div>
            </div>
          </div>
          <!-- End: Vận chuyển-->

           <!-- Begin: Thành tiền -->
           <table class="mt-4">
            <tr>
            <th class="border px-8 py-2">Thành tiền</th>
            <th class="border px-8 py-2">Phí vận chuyển</th>
            <th class="border px-8 py-2">Tổng tiền</th>
            </tr>
            <tr>
              <td class="border py-2 px-8">70.000đ</td>
              <td class="border text-center py-2 px-8">0đ</td>
              <td class="border text-red-500 py-2 px-8">70.000đ</td>
            </tr>
           </table>
          <!-- End: Thành tiền-->
          <div class="mt-4 flex justify-between">
            <button class="px-4 py-2 rounded-md bg-gray-200 hover:bg-gray-300">Quay lại giỏ hàng</button>
            <button class="px-4 py-2 text-white rounded-md bg-lime-500 hover:bg-lime-600">Đặt hàng</button>
          </div>
        </div>
      </div>
      <!-- END : thanh toán -->
    </div>
    <bottom />
  </div>
</template>

<script lang="ts">
import { useRouter } from "vue-router";
import bottom from "../../views/Footer/Footer.vue";
export default {
  name: "Pay",
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
