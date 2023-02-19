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
      <span class="lg:pt-2.5 text-slate-700"
        >Tổng số sản phẩm : {{ products.length }}</span
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
        <table v-if="products.length > 0" class="table table-report -mt-2">
          <thead>
            <tr>
              <th class="whitespace-nowrap">Hình ảnh</th>
              <th class="whitespace-nowrap">Tên sản phẩm</th>
              <th class="text-center whitespace-nowrap">Mã sản phẩm</th>
              <th class="text-center whitespace-nowrap">Số lượng</th>
              <th class="text-center whitespace-nowrap">Giá</th>
              <th class="text-center whitespace-nowrap">Giảm giá</th>
              <th class="text-center whitespace-nowrap">Thể loại</th>
              <th class="text-center whitespace-nowrap">Ngày tạo</th>
              <th class="text-center whitespace-nowrap">Hành động</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="item in products" :key="item._id" class="intro-x">
              <td class="w-24">
                <div class="w-10 h-10 image-fit zoom-in">
                  <img
                    alt="Midone Tailwind HTML Admin Template"
                    class="rounded-full"
                    :src="item.image"
                  />
                </div>
              </td>
              <td class="pt-4">{{ item.name }}</td>
              <td class="text-center pt-4">{{ item.uuid }}</td>
              <td class="text-center pt-4">{{ item.amount }}</td>
              <td class="text-center pt-4">{{ item.price }}vnđ</td>
              <td class="text-center pt-4">{{ item.discount }}%</td>
              <td class="text-center pt-4">{{ item.category }}</td>
              <td class="text-center pt-4">
                {{ moment(item.createdAt).format("DD/MM/YYYY HH:mm") }}
              </td>
              <td class="table-report__action w-56">
                <div class="flex justify-center items-center ">
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
        <div v-else class="text-center">
          <span class="text-">Thật tiếc! Chưa có sản phẩm nào!</span>
        </div> 
        <!-- BEGIN: Delete Confirmation Modal -->
        <Modal
          :show="deleteConfirmationModal"
          @hidden="deleteConfirmationModal = false"
        >
          <ModalBody class="p-0">
            <div class="p-5 text-center">
              <XCircleIcon class="w-16 h-16 text-danger mx-auto mt-3" />
              <div class="text-3xl mt-5">Xóa sản phẩm ?</div>
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
          <h2 class="text-lime-500">Thêm sản phẩm</h2>
        </div>
        <div v-else class="px-5 pt-3 text-center text-2xl">
          <h2 class="text-lime-500">Cập nhật sản phẩm</h2>
        </div>
        <div class="pt-5">
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
import { defineComponent, onMounted, ref } from "vue";
import { useAuthStore } from "../../../stores/authStore";
import { productInfor } from "../../../types/productType";
import productService from "../../../services/productService";
import { setNotificationToastMessage } from "../../../utils/myFunction";
import { useRouter } from "vue-router";
import { ProductModel } from "../../../model/productModel";
import { getDownloadURL, uploadBytesResumable } from "firebase/storage";
import { storage } from "../../../firebase.js";
import { ref as fireBaseRef } from "firebase/storage";
import { v1 as uuidv1 } from "uuid";
import ShortUniqueId from "short-unique-id";
import moment from "moment";
import { useTypeProductStore } from "../../../stores/typeProductStore";
export default defineComponent({
  name: "Products",
  setup() {
    const router = useRouter();
    const deleteConfirmationModal = ref(false);
    const AddConfirmationModal = ref(false);
    const showButtonEdit = ref(false);
    const authStore = useAuthStore();
    const myTypeStore = useTypeProductStore();
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
    const uuid = new ShortUniqueId({ length: 8 });
    const Category: any = myTypeStore.typeProducts;

    const uploadFiles = (file: any) => {
      //
      if (!file) return;
      const sotrageRef = fireBaseRef(storage, `files/${file.name}`);
      const uploadTask = uploadBytesResumable(sotrageRef, file);
      uploadTask.on(
        "state_changed",
        (snapshot) => {
          const prog = Math.round(
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100
          );
        },
        (error) => {
          setNotificationToastMessage("Can't upload an avatar", false);
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
            image.value = downloadURL;
          });
        }
      );
    };

    async function uploadAvatar(event: any) {
      chosenFile.value = event.target.files[0];
      if (
        chosenFile.value.name.includes(".jpg") ||
        chosenFile.value.name.includes(".jpeg") ||
        chosenFile.value.name.includes(".pdf") ||
        chosenFile.value.name.includes(".eps") ||
        chosenFile.value.name.includes(".ai") ||
        chosenFile.value.name.includes(".webp") ||
        chosenFile.value.name.includes(".indd") ||
        chosenFile.value.name.includes(".raw") ||
        chosenFile.value.name.includes(".jpeg") ||
        chosenFile.value.name.includes(".psd") ||
        chosenFile.value.name.includes(".png") ||
        chosenFile.value.name.includes(".gif") ||
        chosenFile.value.name.includes(".tiff") ||
        chosenFile.value.name.includes(".bmp") ||
        chosenFile.value.name.includes(".jfif")
      ) {
        uploadFiles(chosenFile.value);
      } else {
        image.value = "";
      }
    }

    //reload data
    const reloadData = () => {
      name.value = "";
      amount.value = 0;
      discount.value = 0;
      price.value = 0;
      category.value = "";
      image.value = "";
    };
    // Get all product
    async function initGetAllProduct() {
      const data = {} as productInfor;
      const response = await productService.findAll(data,  authStore.currentUser.Token);
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
        amount: amount.value,
        price: price.value,
        discount: discount.value,
        category: category.value,
        image: image.value,
      } as productInfor;
      // if(name.value === " " || amount.value < 0 || price.value <= 0 || discount.value < 0) {
      //   setNotificationToastMessage("Dữ liệu không hợp lệ",false)
      // } else {
      const response = await productService.save(data,  authStore.currentUser.Token);
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
      const response = await productService.delete(itemDelete,  authStore.currentUser.Token);
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
        authStore.currentUser.Token
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
      const response = await productService.update(dataUpdate,  authStore.currentUser.Token);
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
