<template>
  <div class="admin-dashboard mt-12 lg:mt-4">
    <div class="grid grid-cols-12 gap-6 mt-5">
      <div class="col-span-12 sm:col-span-6 xl:col-span-3 intro-y">
        <div class="">
          <div class=" p-5 text-center border-2 rounded-lg">
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
    <div>
    <apexchart type="line" :options="chartOptions" :series="chartSeries" class="mt-5 "  height="300"/>
  </div>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, onMounted } from "vue";
import { useTypeProductStore } from "../../../stores/typeProductStore";
import { useAuthStore } from "../../../stores/authStore";
import { useProductStore } from "../../../stores/productStore";
export default defineComponent({
  name: "AdminDashboard",
  data() {
    return {
      chartOptions: {
        chart: {
          id: 'vue-chart',
        },
        xaxis: {
          categories: ['Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su']
        }
      },
      chartSeries: [{
        name: 'Sản phẩm',
        data: [0, 150, 200, 250, 300, 350, 400]
      }]
    }
  },
  setup() {
    const myAuthStore = useAuthStore();
    const myProductStore = useProductStore();
    const myTypeProductStore = useTypeProductStore();
    const myAccount: any = computed(() => myAuthStore.users);
    const myProduct: any = computed(() => myProductStore.products);
    const myTypeProduct: any = computed(() => myTypeProductStore.typeProducts);

    onMounted(() => {
      myProductStore.getAllProduct();
      myTypeProductStore.getAllTypeProduct();
    
    });
    return {
      myAccount,
      myProduct,
      myTypeProduct,
    };
  },
});
</script>

<style lang="scss"></style>
