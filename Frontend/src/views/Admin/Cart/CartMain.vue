<template>
    <div>
      <div class="block lg:flex justify-between py-3 lg:py-1 mt-8 lg:mt-0">
        <span class="lg:pt-2.5 text-slate-700">Tổng số đơn hàng : 5</span>
        <div class="flex">
          <div class="min-w-[230px] max-w-sm relative my-2 lg:my-0">
            <input
              class="form-control shadow-none border border-slate-300 dark:border-slate-300 dark:bg-white dark:text-slate-700 pr-11"
              type="search"
              placeholder="Tìm kiếm..."
            />
            <button class="absolute inset-y-0 right-0 px-3 border-l">
              <SearchIcon class="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
      <table-view-cart/>
    </div>
  </template>
  <script lang="ts">
  import { computed, defineComponent, ref } from "vue";
  import TableViewCart from "./list-view/TableViewCart.vue";
  export default defineComponent({
    name: "Accounts",
    components: { TableViewCart},
    setup() {
      return {
       
      };
    },
  });
  </script>