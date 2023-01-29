<template>
  <div>
    <div class="mb-3 mt-12 lg:mt-0 bg-white rounded-md">
      <button
        class="border rounded-md py-2 px-3 flex bg-lime-500 text-white"
        @click="AddConfirmationModal = true"
      >
        <plus-squareIcon class="w-4 h-4 mr-2 mt-0.5"></plus-squareIcon>
        Thêm sản phẩm
      </button>
    </div>
    <div class="block lg:flex justify-between">
      <span class="lg:pt-2.5 text-slate-700">Tổng số sản phẩm : 5</span>
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
            class="btn bg-white border"
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
                  Table product
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
                  Grid product
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <table-view v-if="!showProduct" />
    <grid-view v-if="showProduct" />
    <!-- BEGIN: Add,Edit Confirmation Modal -->
    <Modal :show="AddConfirmationModal" @hidden="AddConfirmationModal = false">
      <ModalBody class="p-0">
        <div class="px-5 pt-3 text-center text-xl">
          <h2>Thêm sản phẩm</h2>
        </div>
        <div>
          <div class="px-5">
            <label class="text-base">Tên sản phẩm</label>
            <input
              type="text"
              class="form-control my-2"
              placeholder="Nhập tên sản phẩm"
            />
          </div>
          <div class="px-5">
            <label class="text-base">Số lượng</label>
            <input type="number" class="form-control my-2" min="0" />
          </div>
          <div class="px-5">
            <label class="text-base">Giá</label>
            <input
              type="text"
              class="form-control my-2"
              min="0"
              placeholder="vnđ"
            />
          </div>
          <div class="px-5">
            <label class="text-base">Giảm giá</label>
            <input
              type="text"
              class="form-control my-2"
              min="0"
              placeholder="%"
            />
          </div>
          <div class="px-5">
            <label class="text-base">Thể loại</label>
            <select id="category" class="form-select my-2">
              <option
                v-for="(category, index) in Category"
                :key="index"
                :value="category.name"
              >
                {{ category.name }}
              </option>
            </select>
          </div>
          <div class="px-5">
            <label class="text-base">Hình ảnh</label>
            <!-- BEGIN: Single File Upload -->
            <PreviewComponent class="intro-y box">
              <div class="p-3">
                <Dropzone
                  ref-key="dropzoneSingleRef"
                  :options="{
                    url: 'https://httpbin.org/post',
                    thumbnailWidth: 150,
                    maxFilesize: 1,
                    maxFiles: 1,
                  }"
                  class="dropzone"
                >
                  <div class="text-base font-medium">
                    Click vào đây để chọn ảnh
                  </div>
                </Dropzone>
              </div>
            </PreviewComponent>
            <!-- END: Single File Upload -->
          </div>
        </div>
        <div class="pb-5 pt-2 text-center lg:pl-60 lg:pr-3.5">
          <button
            type="button"
            @click="AddConfirmationModal = false"
            class="btn btn-outline-secondary w-24 mr-1"
          >
            Trở lại
          </button>
          <button type="button" class="btn text-white bg-lime-500 w-24">
            Thêm
          </button>
        </div>
      </ModalBody>
    </Modal>
    <!-- END: Delete Confirmation Modal -->
  </div>
</template>
<script lang="ts">
import { computed, defineComponent, ref } from "vue";
import TableView from "./list-view/TableView.vue";
import GridView from "./list-view/GridView.vue";
export default defineComponent({
  name: "Products",
  components: { TableView, GridView },
  setup() {
    const showProduct = ref(false);
    const AddConfirmationModal = ref(false);
    const Category = [
      {
        name: "Cây văn phòng",
      },
      {
        name: "Cây phong thủy",
      },
      {
        name: "Cây dàn leo",
      },
      {
        name: "Cây treo ",
      },
      {
        name: "Cây xương rồng",
      },
      {
        name: "Cây sen đá",
      },
      {
        name: "Chậu cảnh",
      },
    ];
    function actionShowTableView() {
      showProduct.value = false;
    }
    function actionShowGridView() {
      showProduct.value = true;
    }
    return {
      showProduct,
      actionShowTableView,
      actionShowGridView,
      AddConfirmationModal,
      Category,
    };
  },
});
</script>
