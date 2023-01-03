<template>
  <div>
    <div class="p-2 mb-3 bg-white rounded-md">
      <button class="border rounded-md py-2 px-3 flex bg-lime-500 text-white">
        <plus-squareIcon class="w-4 h-4 mr-2 mt-0.5"></plus-squareIcon>
        Thêm sản phẩm
      </button>
    </div>
    <div class="block lg:flex justify-between">
      <span class="lg:pt-2.5">Tổng số sản phẩm : 5</span>
      <div class="flex">
        <div class="min-w-[230px] max-w-sm relative my-2 lg:my-0">
          <input
            class="form-control shadow-none border border-slate-300 dark:border-slate-300 dark:bg-white dark:text-slate-700 pr-11"
            type="search"
            placeholder="Tìm kiếm..."
          />
          <button class="btn absolute inset-y-0 right-0">
            <SearchIcon class="w-4 h-4" />
          </button>
        </div>
        <div class="dropdown ml-2 my-2 lg:my-0">
        <button
          class="dropdown-toggle btn bg-white"
          aria-expanded="false"
          data-tw-toggle="dropdown"
        >
          <more-verticalIcon class="w-4 h-4 -mr-3 my-0.5"></more-verticalIcon>
        </button>
        <div class="dropdown-menu w-36 lg:w-40 ">
          <ul class=" bg-white">
            <li class="py-1">
              <a
                href=""
                class="flex dropdown-item text-sm bg-white hover:bg-slate-200"
              >
                <TableIcon class="w-4 h-4 mr-2 mt-0.5"></TableIcon>
                List product
              </a>
            </li>
            <li class="py-1">
              <a href="" class="flex dropdown-item text-sm bg-white hover:bg-slate-200">
                <Layout-gridIcon class="w-4 h-4 mr-2 mt-0.5"></Layout-gridIcon>
                Grid product
              </a>
            </li>
          </ul>
        </div>
      </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, PropType, ref } from "vue";
import { createIcons, icons } from "lucide";

export default defineComponent({
  name: "AccManagerListViewHeader",
  data() {
    return {
      ListView: "",
    };
  },

  setup() {
    return {};
  },
});
</script>
