<template>
    <div>
      <div class="mb-3 mt-12 lg:mt-0 bg-white rounded-md">
        <button
          class="border rounded-md py-2 px-3 flex bg-lime-500 text-white"
          @click="AddConfirmationModal = true"
        >
          <plus-squareIcon class="w-4 h-4 mr-2 mt-0.5"></plus-squareIcon>
          Thêm loại sản phẩm
        </button>
      </div>
      <div class="block lg:flex justify-between">
        <span class="lg:pt-2.5 text-slate-700"
          >Tổng số loại sản phẩm : {{ products.length }}</span
        >
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
        </div>
      </div>
      <div class="mt-2 lg:mt-4">
        <!-- BEGIN: Data List -->
        <div class="intro-y col-span-12 overflow-auto lg:overflow-visible">
          <table class="table table-report -mt-2">
            <thead>
              <tr>
                <th class=" whitespace-nowrap">Mã loại sản phẩm</th>
                <th class="whitespace-nowrap">Tên loại sản phẩm</th>
                <th class="text-center whitespace-nowrap">Ngày tạo</th>
                <th class="text-center whitespace-nowrap">Hành động</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="item in products" :key="item._id" class="intro-x">
            
                <td class="pt-4">{{ item.uuid }}</td>
                <td class="text-center pt-4">{{ item.name }}</td>
                <td class="text-center pt-4">
                  {{ moment(item.createdAt).format("DD/MM/YYYY HH:mm") }}
                </td>
                <td class="table-report__action w-56">
                  <div class="flex justify-center items-center pt-4">
                    <a
                      class="flex items-center mr-3"
                      href="javascript:;"
                      @click="actionInitEditProduct(item)"
                    >
                      <CheckSquareIcon class="w-4 h-4 mr-1" /> Chỉnh sửa
                    </a>
                    <a
                      class="flex items-center text-danger"
                      href="javascript:;"
                      @click="actionInitDeleteProduct(item)"
                    >
                      <Trash2Icon class="w-4 h-4 mr-1" /> Xóa
                    </a>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
          <!-- BEGIN: Delete Confirmation Modal -->
          <Modal
            :show="deleteConfirmationModal"
            @hidden="deleteConfirmationModal = false"
          >
            <ModalBody class="p-0">
              <div class="p-5 text-center">
                <XCircleIcon class="w-16 h-16 text-danger mx-auto mt-3" />
                <div class="text-3xl mt-5">Xóa loại sản phẩm</div>
                <div class="text-slate-500 mt-2">
                  Bạn có chắc chắn muốn xóa loại sản phẩm này?
                </div>
              </div>
              <div class="px-5 pb-8 text-center">
                <button
                  type="button"
                  @click="deleteConfirmationModal = false"
                  class="btn btn-outline-secondary w-24 mr-1"
                >
                  Trở lại
                </button>
                <button
                  type="button"
                  class="btn btn-danger w-24"
                  @click="actionDeleteProduct"
                >
                  Xóa
                </button>
              </div>
            </ModalBody>
          </Modal>
          <!-- END: Delete Confirmation Modal -->
        </div>
        <!-- END: Data List -->
      </div>
      <!-- BEGIN: Add,Edit Confirmation Modal -->
      <Modal :show="AddConfirmationModal" @hidden="AddConfirmationModal = false">
        <ModalBody class="p-0">
          <div v-if="!showButtonEdit" class="px-5 pt-3 text-center text-2xl">
            <h2 class="text-lime-500">Thêm loại sản phẩm</h2>
          </div>
          <div v-else class="px-5 pt-3 text-center text-2xl">
            <h2 class="text-lime-500">Cập nhật loại sản phẩm</h2>
          </div>
          <div class="pt-5">
            <div class="px-5">
              <label class="text-base">Tên loại sản phẩm</label>
              <input
                type="text"
                v-model="name"
                class="form-control my-2"
                placeholder="Nhập tên sản phẩm"
              />
            </div>
           
          </div>
          <div class="pb-5 pt-2 text-center lg:pl-56 lg:pr-3">
            <button
              type="button"
              @click="actionCloseModal() "
              class="btn btn-outline-secondary w-24 mr-1"
            >
              Trở lại
            </button>
            <button
              v-if="!showButtonEdit"
              type="button"
              class="btn text-white bg-lime-500"
              @click="actionSaveProduct"
            >
              Lưu và đóng
            </button>
            <button
              v-else
              type="button"
              class="btn text-white bg-lime-500"
              @click="actionEditProduct"
            >
              Cập nhật
            </button>
          </div>
        </ModalBody>
      </Modal>
      <!-- END: Delete Confirmation Modal -->
    </div>
  </template>
  <script lang="ts">
  import { defineComponent, onMounted, ref, watch } from "vue";
  import { useAuthStore } from "../../../stores/authStore";
  import { productInfor } from "../../../types/productType";
  import productService from "../../../services/productService";
  import { setNotificationToastMessage } from "../../../utils/myFunction";
  import { useRouter } from "vue-router";
  import { ProductModel } from "../../../model/productModel";
  import { v1 as uuidv1 } from "uuid";
  import ShortUniqueId from "short-unique-id";
  import moment from "moment";
  export default defineComponent({
    name: "Products",
    setup() {
      const router = useRouter();
      const deleteConfirmationModal = ref(false);
      const AddConfirmationModal = ref(false);
      const showButtonEdit = ref(false);
      const authStore = useAuthStore();
      const idUpdate = ref("");
      const products = ref<productInfor[]>([]);
      const selectedProduct = ref<ProductModel>(new ProductModel());
      const name = ref("");
      const uuid = new ShortUniqueId({ length: 8 });
  
      //reload data
      const reloadData = () => {
        name.value = "";
      };
      // Get all product
      async function initGetAllProduct() {
        const data = {} as productInfor;
        const response = await productService.findAll(data, authStore.token);
        // products.value = response.data.values;
        if (response.data.success) {
          products.value = response.data.values;
        } else {
          setNotificationToastMessage("Tải dữ liệu thât bại", false);
        }
      }
      onMounted(() => {
        initGetAllProduct();
      });
      // Save product
      const actionSaveProduct = async () => {
        const data = {
          uuid: uuid(),
          name: name.value,
         
        } as productInfor;
        // if(name.value === " " || amount.value < 0 || price.value <= 0 || discount.value < 0) {
        //   setNotificationToastMessage("Dữ liệu không hợp lệ",false)
        // } else {
        const response = await productService.save(data, authStore.token);
        if (response.data.success) {
          AddConfirmationModal.value = false;
          reloadData();
          initGetAllProduct();
        } else {
          setNotificationToastMessage("Tải dữ liệu thất bại", false);
        }
      };
  
      function actionInitDeleteProduct(item: productInfor) {
        selectedProduct.value._id = item._id;
        deleteConfirmationModal.value = true;
      }
  
      // Delete product
      async function actionDeleteProduct() {
        const itemDelete = new ProductModel();
        itemDelete._id = selectedProduct.value._id;
        const response = await productService.delete(itemDelete, authStore.token);
        if (response.data.error) {
          setNotificationToastMessage("Xóa dữ liệu thất bại", false);
        } else {
          deleteConfirmationModal.value = false;
          initGetAllProduct();
        }
      }
  
      // lấy product by id
      async function actionInitEditProduct(item: productInfor) {
        const itemFindId: any = { _id: item._id } as productInfor;
        const response = await productService.findOne(
          itemFindId,
          authStore.token
        );
        idUpdate.value = response.data.values._id;
        name.value = response.data.values.name;
        amount.value = response.data.values.amount;
        discount.value = response.data.values.discount;
        price.value = response.data.values.price;
        image.value = response.data.values.image;
        category.value = response.data.values.category;
        AddConfirmationModal.value = true;
        showButtonEdit.value = true;
      }
  
      //edit product
      async function actionEditProduct() {
        const dataUpdate = {
          _id: idUpdate.value,
          name: name.value,
          amount: amount.value,
          price: price.value,
          discount: discount.value,
          category: category.value,
          image: image.value,
        } as productInfor;
        const response = await productService.update(dataUpdate, authStore.token);
        if (response.data.success) {
          AddConfirmationModal.value = false;
          showButtonEdit.value = false;
          reloadData();
          initGetAllProduct();
        } else {
          setNotificationToastMessage("Cập nhật dữ liệu thất bại", false);
        }
      }
      const actionCloseModal = () => {
        AddConfirmationModal.value = false;
        showButtonEdit.value = false;
        reloadData();
      }
  
      return {
        router,
        uuid,
        moment,
        Category,
        image,
        idUpdate,
        name,
        discount,
        price,
        amount,
        products,
        category,
        chosenFile,
        showButtonEdit,
        uploadAvatar,
        uploadFiles,
        actionSaveProduct,
        actionEditProduct,
        actionInitDeleteProduct,
        actionDeleteProduct,
        actionInitEditProduct,
        AddConfirmationModal,
        deleteConfirmationModal,
        actionCloseModal
      };
    },
  });
  </script>
  