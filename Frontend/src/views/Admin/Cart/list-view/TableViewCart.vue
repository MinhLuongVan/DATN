<template>
    <div>
      <div>
        <!-- BEGIN: Data List -->
        <div class="intro-y col-span-12 overflow-auto lg:overflow-visible">
          <table class="table table-report -mt-2">
            <thead>
              <tr>
                <th class="whitespace-nowrap">Hình ảnh</th>
                <th class="whitespace-nowrap">Tên sản phẩm</th>
                <th class="text-center whitespace-nowrap">Số lượng</th>
                <th class="text-center whitespace-nowrap">Giá</th>
                <th class="text-center whitespace-nowrap">Giảm giá</th>
                <th class="text-center whitespace-nowrap">Tổng tiền</th>
                <th class="text-center whitespace-nowrap">Hành động</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(item, index) in Fake" :key="index" class="intro-x">
                <td class="w-40">
                  <div class="w-10 h-10 image-fit zoom-in">
                    <Tippy
                      tag="img"
                      alt="Midone Tailwind HTML Admin Template"
                      class="rounded-full"
                      :src="item.url"
                    />
                  </div>
                </td>
                <td class="pt-4">{{ item.name }}></td>
                <td class="text-center pt-4">{{ item.number }}</td>
                <td class="text-center pt-4">{{ item.price }}$</td>
                <td class="text-center pt-4">{{ item.sale }}%</td>
                <td class="text-center pt-4">{{ item.total }}</td>
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
  export default defineComponent({
    name: "CartsListView",
    setup() {
      const deleteConfirmationModal = ref(false);
      const Fake = [
        {
          url: "http://list.vn/wp-content/uploads/2021/02/qu-2.jpg",
          name: "sp1",
          number: 20,
          price: 200,
          sale: 20,
          total: 3000,
        },
        {
          url: "https://toplist.vn/images/800px/cay-canh-ha-noi-555822.jpg",
          name: "sp2",
          number: 30,
          price: 200,
          sale: 20,
          total: 5000,
        },
        {
          url: "https://toplist.vn/images/800px/cay-canh-ha-noi-555822.jpg",
          name: "sp3",
          number: 30,
          price: 200,
          sale: 20,
          total: 5000,
        },
        {
          url: "https://toplist.vn/images/800px/cay-canh-ha-noi-555822.jpg",
          name: "sp4",
          number: 50,
          price: 200,
          sale: 20,
          total: 5000,
        },
        {
          url: "http://list.vn/wp-content/uploads/2021/02/qu-2.jpg",
          name: "sp5",
          number: 90,
          price: 200,
          sale: 20,
          total: 5000,
        },
      ];
      return {
        Fake,
        deleteConfirmationModal,
      };
    },
  });
  </script>
  