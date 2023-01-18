<template>
  <div>
    <div class="grid grid-cols-12 gap-6">
      <!-- BEGIN: Users Layout -->
      <div
        v-for="(item, index) in Fake"
        :key="index"
        class="intro-y col-span-12 lg:col-span-3"
      >
        <div class="box border bg-white">
          <div class="p-4">
            <div
              class="h-40 2xl:h-56 image-fit rounded-md overflow-hidden before:block before:absolute before:w-full before:h-full before:top-0 before:left-0 before:z-10 before:bg-gradient-to-t before:from-black before:to-black/10"
            >
              <img
                alt="Midone - HTML Admin Template"
                class="rounded-md"
                :src="item.url"
              />
              <span
                class="absolute top-0 bg-pending/80 text-white text-xs my-4 mx-3 px-3 py-1 rounded z-10"
                >{{ item.sale }}%</span
              >
            </div>
            <div class="text-slate-600 dark:text-slate-700 mt-3">
              <div class="flex items-center mt-2">
                Tên sản phẩm :
                {{ item.name }}
              </div>
              <div class="flex items-center mt-2">Giá : {{ item.price }}$</div>
              <div class="flex items-center mt-2">
                Số lượng : {{ item.number }}
              </div>
              <div class="flex items-center mt-2">
                Trạng thái : {{ item.status }}
              </div>
            </div>
          </div>
          <div
            class="flex justify-center lg:justify-end items-center p-4 border-t border-slate-200/60 dark:border-slate-300"
          >
            <a
              class="flex items-center mr-3 text-slate-700"
              href="javascript:;"
            >
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
import { computed, defineComponent, ref } from "vue";

export default defineComponent({
  name: "ProductsGridView",
  setup() {
    const deleteConfirmationModal = ref(false);
    const Fake = [
      {
        url: "http://list.vn/wp-content/uploads/2021/02/qu-2.jpg",
        name: "sp1",
        number: 20,
        price: 200,
        sale: 20,
        status: true,
      },
      {
        url: "https://toplist.vn/images/800px/cay-canh-ha-noi-555822.jpg",
        name: "sp2",
        number: 30,
        price: 200,
        sale: 20,
        status: true,
      },
      {
        url: "https://toplist.vn/images/800px/cay-canh-ha-noi-555822.jpg",
        name: "sp3",
        number: 30,
        price: 200,
        sale: 20,
        status: true,
      },
      {
        url: "https://toplist.vn/images/800px/cay-canh-ha-noi-555822.jpg",
        name: "sp4",
        number: 50,
        price: 200,
        sale: 20,
        status: true,
      },
      {
        url: "https://toplist.vn/images/800px/cay-canh-ha-noi-555822.jpg",
        name: "sp4",
        number: 50,
        price: 200,
        sale: 20,
        status: true,
      },
    ];
    return {
      Fake,
      deleteConfirmationModal,
    };
  },
});
</script>
