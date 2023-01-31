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
      <span class="lg:pt-2.5 text-slate-700">Tổng số sản phẩm : {{ products.length }}</span>
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
              <th class="whitespace-nowrap">Hình ảnh</th>
              <th class="whitespace-nowrap">Tên sản phẩm</th>
              <th class="text-center whitespace-nowrap">Số lượng</th>
              <th class="text-center whitespace-nowrap">Giá</th>
              <th class="text-center whitespace-nowrap">Giảm giá</th>
              <th class="text-center whitespace-nowrap">Thể loại</th>
              <th class="text-center whitespace-nowrap">Hành động</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="item in products" :key="item._id" class="intro-x">
              <td class="w-40">
                <div class="w-10 h-10 image-fit zoom-in">
                  <img
                    alt="Midone Tailwind HTML Admin Template"
                    class="rounded-full"
                    :src="item.image"
                  />
                </div>
              </td>
              <td class="pt-4">{{ item.name }}</td>
              <td class="text-center pt-4">{{ item.amount }}</td>
              <td class="text-center pt-4">{{ item.price }}vnđ</td>
              <td class="text-center pt-4">{{ item.discount }}%</td>
              <td class="text-center pt-4">{{ item.category }}</td>
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
              <div class="text-3xl mt-5">Xóa sản phẩm</div>
              <div class="text-slate-500 mt-2">
                Bạn có chắc chắn muốn xóa sản phẩm này?
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
              <button
                type="button"
                class="btn btn-danger w-24"
                @click="actionDeleteProduct"
              >
                Delete
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
        <div class="px-5 pt-3 text-center text-xl">
          <h2>Thêm sản phẩm</h2>
        </div>
        <div>
          <div class="px-5">
            <label class="text-base">Tên sản phẩm</label>
            <input
              type="text"
              v-model="name"
              class="form-control my-2"
              placeholder="Nhập tên sản phẩm"
            />
          </div>
          <div class="px-5">
            <label class="text-base">Số lượng</label>
            <input
              type="number"
              class="form-control my-2"
              min="0"
              v-model="amount"
            />
          </div>
          <div class="px-5">
            <label class="text-base">Giá</label>
            <input
              type="text"
              v-model="price"
              class="form-control my-2"
              min="0"
              placeholder="vnđ"
            />
          </div>
          <div class="px-5">
            <label class="text-base">Giảm giá</label>
            <input
              type="text"
              v-model="discount"
              class="form-control my-2"
              min="0"
              placeholder="%"
            />
          </div>
          <div class="px-5">
            <label class="text-base">Thể loại</label>
            <select v-model="category" class="form-select my-2">
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
            <input
              type="file"
              @change="uploadAvatar"
              class="intro-x login__input form-control py-3 px-4 block mt-1"
            />
            <!-- END: Single File Upload -->
            <div
              class="text-danger mt-3"
              v-if="chosenFile && !chosenFile.type.includes('image/')"
            >
              Đây không phải là file hình ảnh
            </div>
          </div>
        </div>
        <div class="pb-5 pt-2 text-center lg:pl-56 lg:pr-3">
          <button
            type="button"
            @click="AddConfirmationModal = false"
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
import { defineComponent, onMounted, ref } from "vue";
import { useAuthStore } from "../../../stores/authStore";
import { productInfor } from "../../../types/productType";
import productService from "../../../services/productService";
import { setNotificationToastMessage } from "../../../utils/myFunction";
import { useRouter } from "vue-router";
import { ProductModel } from "../../../model/productModel";
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
    const image = ref("");
    const price = ref(0);
    const amount = ref(0);
    const discount = ref(0);
    const category = ref("");
    const chosenFile: any = ref(null);
    const Category = [
      {
        name: "Cây phong thủy",
      },
      {
        name: "Cây treo",
      },
      {
        name: "Cây dàn leo",
      },
      {
        name: "Cây sen đá",
      },
      {
        name: "Cây xương rồng",
      },
      {
        name: "Chậu cảnh",
      },
    ];

    async function uploadAvatar(event: any) {
      chosenFile.value = event.target.files[0];
    }
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
        name: name.value,
        amount: amount.value,
        price: price.value,
        discount: discount.value,
        category: category.value,
        image: chosenFile.value,
      } as productInfor;
      const response = await productService.save(data, authStore.token);
      if (response.data.success) {
        AddConfirmationModal.value = false;
        initGetAllProduct();
      } else {
        setNotificationToastMessage("Tải dữ liệu thất bại", false);
      }
    };

    function actionInitDeleteProduct(item: ProductModel) {
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

    async function actionInitEditProduct(item: productInfor) {
      const itemFindId = { _id: item._id } as productInfor;
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

    async function actionEditProduct() {
      const dataUpdate = {
        _id: idUpdate.value,
        name: name.value,
        amount: amount.value,
        price: price.value,
        discount: discount.value,
        category: category.value,
        image: chosenFile.value,
      } as productInfor;
      const response = await productService.update(dataUpdate, authStore.token);
      if (response.data.success) {
        AddConfirmationModal.value = false;
        initGetAllProduct();
      } else {
        setNotificationToastMessage("Cập nhật dữ liệu thất bại", false);
      }
    }

    return {
      router,
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
      actionSaveProduct,
      actionEditProduct,
      actionInitDeleteProduct,
      actionDeleteProduct,
      actionInitEditProduct,
      AddConfirmationModal,
      deleteConfirmationModal,
    };
  },
});
</script>
