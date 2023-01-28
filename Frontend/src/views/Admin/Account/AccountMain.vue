<template>
    <div>
      <div class="mb-3 bg-white rounded-md mt-12 lg:mt-0">
        <button class="border rounded-md py-2 px-3 flex bg-lime-500 text-white">
          <plus-squareIcon class="w-4 h-4 mr-2 mt-0.5"></plus-squareIcon>
          Thêm tài khoản
        </button>
      </div>
      <div class="block lg:flex justify-between">
        <span class="lg:pt-2.5 text-slate-700">Tổng số tài khoản : 5</span>
        <div class="flex">
          <div class="min-w-[215px] max-w-sm relative my-2 lg:my-0">
            <input
              class="form-control shadow-none border border-slate-300 dark:border-slate-300 dark:bg-white dark:text-slate-700 pr-11"
              type="search"
              placeholder="Tìm kiếm..."
            />
            <button class="absolute inset-y-0 right-0 px-3 border-l">
              <SearchIcon class="w-4 h-4" />
            </button>
          </div>
          <div class="dropdown ml-2 my-2 lg:my-0">
            <button
              class=" btn bg-white border"
              aria-expanded="false"
              data-tw-toggle="dropdown"
            >
              <more-verticalIcon class="w-4 h-4 my-0.5"></more-verticalIcon>
            </button>
            <div class="dropdown-menu border mt-1 w-36 lg:w-40">
              <ul class="bg-white">
                <li class="py-1">
                  <a
                    href=""
                    class="flex dropdown-item text-sm bg-white hover:bg-slate-200"
                    @click="actionShowTableView"
                  >
                    <TableIcon class="w-4 h-4 mr-2 mt-0.5"></TableIcon>
                    Table account
                  </a>
                </li>
                <li class="py-1">
                  <a
                    href=""
                    class="flex dropdown-item text-sm bg-white hover:bg-slate-200"
                    @click="actionShowGridView"
                  >
                    <Layout-gridIcon
                      class="w-4 h-4 mr-2 mt-0.5"
                    ></Layout-gridIcon>
                    Grid account
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <table-view-account v-if="!showAccount" />
      <grid-view-account v-else/>
    </div>
  </template>
  <script lang="ts">
  import { computed, defineComponent, ref } from "vue";
  import TableViewAccount from "./list-view/TableViewAccount.vue";
  import GridViewAccount from "./list-view/GridViewAccount.vue";
  export default defineComponent({
    name: "Accounts",
    components: { TableViewAccount, GridViewAccount },
    setup() {
      const showAccount = ref(false);
      const deleteConfirmationModal = ref(false);
      
      function actionShowTableView() {
        showAccount.value = false;
      }
      function actionShowGridView() {
        showAccount.value = true;
      }
      return {
        showAccount,
        actionShowTableView,
        actionShowGridView,
        deleteConfirmationModal,
      };
    },
  });
  </script>