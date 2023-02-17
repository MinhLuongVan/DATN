<template>
  <div class="admin-dashboard mt-12 lg:mt-4">
    <div class="grid grid-cols-12 gap-6 mt-5">
      <div class="col-span-12 sm:col-span-6 xl:col-span-3 intro-y">
        <div class="bg-[#ede9fe] rounded-xl">
          <div class="p-5 text-center border-[#ede9fe] text-[#7c3aed] rounded-lg">
            <div class="flex justify-center">
              <ShoppingCartIcon class="report-box__icon text-primary" />
            </div>
            <div class="text-4xl font-medium leading-8 mt-6">123</div>
            <div class="text-base mt-1">Đơn hàng</div>
          </div>
        </div>
      </div>
      <div class="col-span-12 sm:col-span-6 xl:col-span-3 intro-y">
        <div class="bg-[#dbeafe] rounded-xl">
          <div class="border-[#dbeafe] rounded-lg p-5 text-center text-[#2563eb]">
            <div class="flex justify-center">
              <PackageIcon class="report-box__icon text-primary"></PackageIcon>
            </div>
            <div class="text-4xl font-medium leading-8 mt-6 ">
              {{ myProduct.length }}
            </div>
            <div class="text-base mt-1">Sản phẩm</div>
          </div>
        </div>
      </div>
      <div class="col-span-12 sm:col-span-6 xl:col-span-3 intro-y">
        <div class="bg-[#dcfce7] rounded-xl">
          <div class="border-[#dcfce7] rounded-lg p-5 text-center text-[#16a34a]">
            <div class="flex justify-center">
              <X-squareIcon
                class="report-box__icon text-primary"
              ></X-squareIcon>
            </div>
            <div class="text-4xl font-medium leading-8 mt-6">
              {{ myTypeProduct.length }}
            </div>
            <div class="text-base mt-1">Loại sản phẩm</div>
          </div>
        </div>
      </div>
      <div class="col-span-12 sm:col-span-6 xl:col-span-3 intro-y">
        <div class="bg-[#FFEBCD] rounded-xl">
          <div class="border-[#FFEBCD] rounded-lg p-5 text-center text-[#F4A460]">
            <div class="flex justify-center">
              <UsersIcon class="report-box__icon text-primary" />
            </div>
            <div class="text-4xl font-medium leading-8 mt-6">
              {{ myAccount.length }}
            </div>
            <div class="text-base mt-1">Tài khoản</div>
          </div>
        </div>
      </div>
    </div>
    <div class="lg:flex mt-5 lg:mt-10 ">
      <div class="lg:w-1/2 border p-5 lg:mr-2 bg-[#F0FFF0] rounded-lg">
        <apexchart
          class="w-full"
          type="bar"
          :options="chartOptions1"
          :series="chartSeries1"
        
        />
        <div class="w-full text-center">
          <span class="lg:text-lg font-medium">Biểu đồ quản lý sản phẩm</span>
        </div>
      </div>
      <div class="lg:w-1/2 border rounded-lg bg-[#FFFFF0] p-5 mt-5 lg:mt-0 lg:ml-2">
        <apexchart
          class="w-full"
          type="line"
          :options="chartOptions2"
          :series="[{ name: 'Số lượng', data: productData }]"
        />
        <div class="w-full text-center">
          <span class="lg:text-lg font-medium"
            >Biểu đồ quản lý loại sản phẩm</span
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, onMounted, ref } from "vue";
import { useTypeProductStore } from "../../../stores/typeProductStore";
import { useAuthStore } from "../../../stores/authStore";
import { useProductStore } from "../../../stores/productStore";

export default defineComponent({
  name: "AdminDashboard",
  setup() {
    const myAuthStore = useAuthStore();
    const myProductStore = useProductStore();
    const myTypeProductStore = useTypeProductStore();
    const myAccount: any = computed(() => myAuthStore.users);
    const myProduct: any = computed(() => myProductStore.products);
    const myTypeProduct: any = computed(() => myTypeProductStore.typeProducts);
    const totalProducts = computed(() => myProduct.value.length);
    const totalTypeProducts = computed(() => myTypeProduct.value.length);
    const nameProduct: any = ref([]);
    const amountProduct: any = ref([]);
    const productData = computed(() => {
      return [
        { x: "Số lượng sản phẩm", y: myProduct.value.length },
        { x: "Số lượng loại sản phẩm", y: myTypeProduct.value.length },
      ];
    });
    onMounted(async () => {
      await myProductStore.getAllProduct();
      myTypeProductStore.getAllTypeProduct();
      const itemNameProduct = myProduct.value.map((item: any) => {
        nameProduct.value.push(item.name);
      });
      const itemAmountProduct = myProduct.value.map((item: any) => {
        amountProduct.value.push(item.amount);
      });
    });

    const chartOptions1 = {
      chart: {
        id: "vue-chart",
      },
      xaxis: {
        categories: nameProduct.value,
      },
      colors: "#00ff00",
      plotOptions: {
        bar: {
          columnWidth: "50%",
          stroke: "#fff",
          strokeWidth: 2,
        },
      },
    };

    const chartSeries1 = [
      { name: "Quản lý sản phẩm", data: amountProduct.value },
    ];

    const chartData = [
      { x: "Sản phẩm", y: totalProducts.value },
      { x: "Loại sản phẩm", y: totalTypeProducts.value },
    ];

    const chartOptions2 = {
      chart: {
        id: "vue-chart",
      },
      xaxis: {
        categories: ["Sản phẩm", "Loại sản phẩm"],
      },
      colors: ["#00ff00"],
      stroke: {
        curve: "smooth",
      },
    };

    return {
      myAccount,
      myProduct,
      myTypeProduct,
      chartOptions1,
      chartSeries1,
      chartOptions2,
      chartData,
      totalProducts,
      totalTypeProducts,
      productData
      
    };
  },
});
</script>

<style></style>
