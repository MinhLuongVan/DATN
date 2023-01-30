<template>
  <div class="lg:w-1/2 p-3 lg:p-5 bg-slate-100 rounded-md mt-12 lg:mt-5 lg:-ml-8">
    <h2 class="py-2 text-xl ">Cấu hình website</h2>
    <fieldset class="border border-slate-300 my-2 p-3 w-full">
      <legend class="text-base px-2">Tên website</legend>
      <div class="flex items-center justify-between">
        <b class="grow truncate">Fresh-Garden</b>
      <div>
        <button class="border border-slate-300 text-slate-500 rounded-full p-2 mr-2 hover:text-slate-700">
          <EditIcon class="w-4 h-4"/>
        </button>
        <button class="border border-red-500 text-red-500 rounded-full p-2 hover:text-red-700">
          <TrashIcon class="w-4 h-4"/>
        </button>
      </div>
      </div>
    </fieldset>
    <fieldset class="border border-slate-300 my-2 p-3 w-full mt-5">
      <legend class="text-base px-2">Logo website</legend>
      <div class="flex items-center justify-between">
      <img src="../../../assets/images/logoAdmin.jfif" alt=""
      class="img-logo w-1/2 h-28 lg:w-2/3 lg:h-44">
      <div>
        <button class="border border-slate-300 text-slate-500 rounded-full p-2 mr-2 hover:text-slate-700">
          <EditIcon class="w-4 h-4"/>
        </button>
        <button class="border border-red-500 text-red-500 rounded-full p-2 hover:text-red-700">
          <TrashIcon class="w-4 h-4"/>
        </button>
      </div>
      </div>
    </fieldset>

  </div>
</template>
<script lang="ts">
import { computed, defineComponent } from "vue";

export default defineComponent({
  name: "AdminSetting",

  setup() {
    return {};
  },
});
</script>
<style>
.img-logo {
  object-fit: contain;
}
</style>
