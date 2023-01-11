<template>
    <div>
      <account-list-view-header />
      <div>
        <!-- BEGIN: Data List -->
        <div class="intro-y col-span-12 overflow-auto lg:overflow-visible">
          <table class="table table-report -mt-2">
            <thead>
              <tr>
                <th class="whitespace-nowrap">Avatar</th>
                <th class="whitespace-nowrap">Tên người dùng</th>
                <th class="text-center whitespace-nowrap">Trạng thái</th>
                <th class="text-center whitespace-nowrap">Hành động</th>
              </tr>
            </thead>
            <tbody>
              <tr
                v-for="(faker, fakerKey) in $_.take($f(), 9)"
                :key="fakerKey"
                class="intro-x"
              >
                <td class="w-40">
                  <div class="flex">
                    <div class="w-10 h-10 image-fit zoom-in">
                      <Tippy
                        tag="img"
                        alt="Midone Tailwind HTML Admin Template"
                        class="rounded-full"
                        :src="faker.images[0]"
                        :content="`Uploaded at ${faker.dates[0]}`"
                      />
                    </div>
                    <div class="w-10 h-10 image-fit zoom-in -ml-5">
                      <Tippy
                        tag="img"
                        alt="Midone Tailwind HTML Admin Template"
                        class="rounded-full"
                        :src="faker.images[1]"
                        :content="`Uploaded at ${faker.dates[1]}`"
                      />
                    </div>
                    <div class="w-10 h-10 image-fit zoom-in -ml-5">
                      <Tippy
                        tag="img"
                        alt="Midone Tailwind HTML Admin Template"
                        class="rounded-full"
                        :src="faker.images[2]"
                        :content="`Uploaded at ${faker.dates[2]}`"
                      />
                    </div>
                  </div>
                </td>
                <td>
                  <a href="" class="font-medium whitespace-nowrap">{{
                    faker.products[0].name
                  }}</a>
                  <div class="text-slate-500 text-xs whitespace-nowrap mt-0.5">
                    {{ faker.products[0].category }}
                  </div>
                </td>
                <td class="w-40">
                  <div
                    class="flex items-center justify-center pt-2"
                    :class="{
                      'text-success': faker.trueFalse[0],
                      'text-danger': !faker.trueFalse[0],
                    }"
                  >
                    <CheckSquareIcon class="w-4 h-4 mr-2" />
                    {{ faker.trueFalse[0] ? "Active" : "Inactive" }}
                  </div>
                </td>
                <td class="table-report__action w-56">
                  <div class="flex justify-center items-center pt-4">
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
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <!-- END: Data List -->
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
                Do you really want to delete these records? <br />This process
                cannot be undone.
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
  import { defineComponent, ref } from "vue";
  import AccountListViewHeader from "../../Account/list-view/ListViewHeader.vue";
  export default defineComponent({
    name: "AccountListView",
    components: { AccountListViewHeader },
    setup() {
      const deleteConfirmationModal = ref(false);
      return {
        deleteConfirmationModal,
      };
    },
  });
  </script>