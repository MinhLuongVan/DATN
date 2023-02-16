<template>
  <div class="admin-dashboard mt-12 lg:mt-4">
    <div class="grid grid-cols-12 gap-6 mt-5">
      <div class="col-span-12 sm:col-span-6 xl:col-span-3 intro-y">
        <div class="">
          <div class="p-5 text-center border-2 rounded-lg">
            <div class="flex justify-center">
              <ShoppingCartIcon class="report-box__icon text-primary" />
            </div>
            <div class="text-3xl font-medium leading-8 mt-6">123</div>
            <div class="text-base text-slate-500 mt-1">Đơn hàng</div>
          </div>
        </div>
      </div>
      <div class="col-span-12 sm:col-span-6 xl:col-span-3 intro-y">
        <div class="bg-slate-200">
          <div class="border-2 rounded-lg p-5 text-center">
            <div class="flex justify-center">
              <PackageIcon class="report-box__icon text-primary"></PackageIcon>
            </div>
            <div class="text-3xl font-medium leading-8 mt-6">
              {{ myProduct.length }}
            </div>
            <div class="text-base text-slate-500 mt-1">Sản phẩm</div>
          </div>
        </div>
      </div>
      <div class="col-span-12 sm:col-span-6 xl:col-span-3 intro-y">
        <div class="">
          <div class="border-2 rounded-lg p-5 text-center">
            <div class="flex justify-center">
              <X-squareIcon
                class="report-box__icon text-primary"
              ></X-squareIcon>
            </div>
            <div class="text-3xl font-medium leading-8 mt-6">
              {{ myTypeProduct.length }}
            </div>
            <div class="text-base text-slate-500 mt-1">Loại sản phẩm</div>
          </div>
        </div>
      </div>
      <div class="col-span-12 sm:col-span-6 xl:col-span-3 intro-y">
        <div class="">
          <div class="border-2 rounded-lg p-5 text-center">
            <div class="flex justify-center">
              <UsersIcon class="report-box__icon text-primary" />
            </div>
            <div class="text-3xl font-medium leading-8 mt-6">
              {{ myAccount.length }}
            </div>
            <div class="text-base text-slate-500 mt-1">Tài khoản</div>
          </div>
        </div>
      </div>
    </div>
    <div class="lg:flex mt-5 lg:mt-10">
      <div class="lg:w-1/2 border p-5">
        <apexchart
          class="w-full"
          type="bar"
          :options="chartOptions1"
          :series="chartSeries1"
        />
        <div class="w-full text-center">
          <span class="lg:text-lg font-medium">Biểu đồ quản lý nội dung</span>
        </div>
      </div>
      <!-- <div class="lg:w-1/2 border p-5">
        <apexchart
          class="w-full"
          type="line"
          :options="chartOptions2"
          :series="chartSeries2"
          height="250px"
        />
        <div class="w-full text-center">
          <span class="lg:text-lg font-medium"
            >Biểu đồ quản lý loại sản phẩm</span
          >
        </div>
      </div> -->
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
     const test: any = ref([]);
     const abc = myProduct.value.map((item:any) => {test.value.push(item.name)})
    console.log('data',myProduct);
    
    onMounted(() => {
      myProductStore.getAllProduct();
      myTypeProductStore.getAllTypeProduct();
    });

    const chartOptions1 = {
      chart: {
        id: "vue-chart",
      },
      xaxis: {
        categories: test.value,
      },
      colors: "#00ff00",
      plotOptions: {
        bar: {
          columnWidth: "25%",
          stroke: "#fff",
          strokeWidth: 2,
        },
      },
    };

    const chartSeries1 = [
      {
        name: "Quản lý nội dung",
        data: myProduct.value.map((item:any) => item.amount),
      },
    ];
    return {
      myAccount,
      myProduct,
      myTypeProduct,
      chartOptions1,
      chartSeries1,
      abc
      // chartOptions1: {
      //   chart: {
      //     id: "vue-chart",
      //   },
      //   xaxis: {
      //     categories: ["Tin tức", "Đánh giá", "Liên hệ"],
      //   },
      //   colors: "#00ff00",
      //   plotOptions: {
      //     bar: {
      //       columnWidth: "25%",
      //       stroke: "#fff",
      //       strokeWidth: 2,
      //     },
      //   },
      // },
      // chartSeries1: [
      //   {
      //     name: "Quản lý nội dung",
      //     data: [4, 5, 11],
      //   },
      // ],
      // chartOptions2: {
      //   chart: {
      //     id: "vuechart-example",
      //   },
      //   xaxis: {
      //     categories: ["Xương rồng", "Sen đá", "Cây treo", "Cây văn phòng"],
      //   },
      // },
      // chartSeries2: [
      //   {
      //     data: [20, 40, 35, 50],
      //   },
      // ],
    };
  },
});
</script>

<style></style>
