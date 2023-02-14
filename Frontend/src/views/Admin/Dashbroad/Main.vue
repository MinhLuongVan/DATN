<template>
  <div class="admin-dashboard mt-12 lg:mt-4">
    <div class="grid grid-cols-12 gap-6 mt-5">
      <div class="col-span-12 sm:col-span-6 xl:col-span-3 intro-y">
        <div class="report-box zoom-in">
          <div class="box p-5 text-center">
            <div class="flex justify-center">
              <ShoppingCartIcon class="report-box__icon text-primary" />
            </div>
            <div class="text-3xl font-medium leading-8 mt-6">123</div>
            <div class="text-base text-slate-500 mt-1">Đơn hàng</div>
          </div>
        </div>
      </div>
      <div class="col-span-12 sm:col-span-6 xl:col-span-3 intro-y">
        <div class="report-box zoom-in">
          <div class="box p-5 text-center">
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
        <div class="report-box zoom-in">
          <div class="box p-5 text-center">
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
        <div class="report-box zoom-in">
          <div class="box p-5 text-center">
            <div class="flex justify-center">
              <UserIcon class="report-box__icon text-primary" />
            </div>
            <div class="text-3xl font-medium leading-8 mt-6">
              {{ myAccount.length }}
            </div>
            <div class="text-base text-slate-500 mt-1">Tài khoản</div>
          </div>
        </div>
      </div>
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
      myAuthStore.initGetAllUser();
    
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
