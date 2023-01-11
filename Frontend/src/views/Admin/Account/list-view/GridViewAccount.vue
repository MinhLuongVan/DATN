<template>
    <div>
      <account-list-view-header />
      <div class="grid grid-cols-12 gap-6 ">
        <!-- BEGIN: Users Layout -->
        <div
        v-for="(faker, fakerKey) in $_.take($f(), 12)"
        :key="fakerKey"
        class="intro-y col-span-12 lg:col-span-3"
      >
        <div class="box bg-white">
          <div class="p-4">
            <div
              class="h-40 2xl:h-56 image-fit rounded-md overflow-hidden before:block before:absolute before:w-full before:h-full before:top-0 before:left-0 before:z-10 before:bg-gradient-to-t before:from-black before:to-black/10"
            >
              <img
                alt="Midone - HTML Admin Template"
                class="rounded-md"
                :src="faker.images[0]"
              />
            </div>
            <div class="text-slate-600 dark:text-slate-500 mt-3">
              <div class="flex items-center mt-2">
                <LayersIcon class="w-4 h-4 mr-2" /> Remaining Stock:
                {{ faker.stocks[0] }}
              </div>
              <div class="flex items-center mt-2">
                <LinkIcon class="w-4 h-4 mr-2" /> Price: ${{ faker.totals[0] }}
              </div>
              <div class="flex items-center mt-2">
                <CheckSquareIcon class="w-4 h-4 mr-2" /> Status:
                {{ faker.trueFalse[0] ? "Active" : "Inactive" }}
              </div>
            </div>
          </div>
          <div
            class="flex justify-center lg:justify-end items-center p-4  border-t border-slate-200/60 dark:border-slate-200"
          >
            <a class="flex items-center mr-3" href="javascript:;">
              <CheckSquareIcon class="w-4 h-4 mr-1" /> Edit
            </a>
            <a
              class="flex items-center text-danger"
              href="javascript:;"
              @click="deleteConfirmationModal = true"
            >
              <Trash2Icon class="w-4 h-4 mr-1" /> Delete
            </a>
          </div>
        </div>
      </div>
        <!-- END: Users Layout -->
         <!-- BEGIN: Delete Confirmation Modal -->
    <Modal
      :show="deleteConfirmationModal"
      @hidden="deleteConfirmationModal = false"
    >
      <ModalBody class="p-0">
        <div class="p-5 text-center">
          <XCircleIcon class="w-16 h-16 text-danger mx-auto mt-3" />
          <div class="text-3xl mt-5">Are you sure?</div>
          <div class="text-slate-500 mt-2">
            Do you really want to delete these records? <br />This process cannot
            be undone.
          </div>
        </div>
        <div class="px-5 pb-8 text-center">
          <button
            type="button"
            @click="deleteConfirmationModal = false"
            class="btn btn-outline-secondary w-24 mr-1"
          >
            Cancel
          </button>
          <button type="button" class="btn btn-danger w-24">Delete</button>
        </div>
      </ModalBody>
    </Modal>
    <!-- END: Delete Confirmation Modal -->
      </div>
    </div>
  </template>
  
  <script lang="ts">
  import { computed, defineComponent, ref } from "vue";
  import AccountListViewHeader from "../../Account/list-view/ListViewHeader.vue";
  
  export default defineComponent({
    name: "AccountGridView",
    components: { AccountListViewHeader },
    setup() {
      const deleteConfirmationModal = ref(false);
      return {
        deleteConfirmationModal
      };
    },
  });
  </script>
  