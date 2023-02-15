import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import TopMenu from "../../src/layouts/top-menu/Main.vue";
import PageHome from "../views/Home/Home.vue";
import PageIntroduce from "../views/Introduce/Introduce.vue";
import PageProduct from "../views/Product/ListProduct.vue";
import PageDetailProduct from "../views/Product/DetailProduct.vue";
import PageCart from "../views/Product/Cart.vue";
import Pay from "../views/Product/Pay.vue";
import PageNews from "../views/News/News.vue";
import PageContact from "../views/Contact/Contact.vue";
import PageTransport from "../views/Introduce/Transport.vue";
import PageSecurity from "../views/Introduce/Security.vue";
import PageConditions from "../views/Introduce/Conditions.vue";
import Login from "../views/Login/Login.vue";
import LoginAdmin from "../views/Admin/Login/Login.vue";
import Register from "../views/Register/Register.vue";
import ProductMain from "../views/Admin/Products/ProductMain.vue";
import TypeProduct from "../views/Admin/Products/TypeProduct.vue";
import AccountMain from "../views/Admin/Account/AccountMain.vue";
import CartMainVue from "../views/Admin/Cart/CartMain.vue";
import NewsAdmin from "../views/Admin/Contact/News.vue";
import ContactAdmin from "../views/Admin/Contact/Contact.vue";
import CommentAdmin from "../views/Admin/Contact/Comment.vue";
import LayoutAdmin from "../../src/layouts/Admin/layoutAdmin.vue";
import AdminDashboard from "../views/Admin/Dashbroad/Main.vue";
import AdminSetting from "../views/Admin/Setting/Configuration.vue";
import { useAuthStore } from "../stores/authStore";
import Cookies from "js-cookie";
import { env } from "../utils/myVariables";

const routes = [
  {
    path: "/login",
    component: Login,
  },
  {
    path: "/register",
    component: Register,
  },
  {
    path: "/",
    component: TopMenu,
    meta: { requiresAuth: true },
    children: [
      {
        path: "/",
        name: "side-menu-page-1",
        component: PageHome,
      },
      {
        path: "/introduce",
        name: "side-menu-page-2",
        component: PageIntroduce,
      },
      {
        path: "/listproduct",
        name: "side-menu-page-3",
        component: PageProduct,
      },
      {
        path: "/product/:id",
        name: "side-menu-page-4",
        component: PageDetailProduct,
      },
      {
        path: "/product/cart",
        name: "side-menu-page-5",
        component: PageCart,
      },
      {
        path: "/checkout/:id",
        component: Pay,
      },
      {
        path: "/news",
        name: "side-menu-page-6",
        component: PageNews,
      },
      {
        path: "/contact",
        name: "side-menu-page-7",
        component: PageContact,
      },
      {
        path: "/introduce/transport",
        name: "side-menu-page-8",
        component: PageTransport,
      },
      {
        path: "/introduce/security",
        name: "side-menu-page-9",
        component: PageSecurity,
      },
      {
        path: "/introduce/condition",
        name: "side-menu-page-10",
        component: PageConditions,
      },
    ],
  },
  {
    path: "/admin/login",
    component: LoginAdmin,
  },
  {
    path: "/admin",
    component: LayoutAdmin,
    meta: { requiresAuth: true },
    children: [
      {
        path: "",
        component: AdminDashboard,
      },
      {
        path: "products",
        component: ProductMain,
      },
      {
        path: "typeproduct",
        component: TypeProduct,
      },
      {
        path: "contact",
        component: ContactAdmin,
      },
      {
        path: "news",
        component: NewsAdmin,
      },
      {
        path: "comment",
        component: CommentAdmin,
      },
      {
        path: "accounts",
        component: AccountMain,
      },
      {
        path: "cart",
        component: CartMainVue,
      },
      {
        path: "configuration",
        component: AdminSetting,
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});
router.beforeEach((to, _from, next) => {
  const authStore = useAuthStore();
  authStore.getToken();
  authStore.getInforUser();
  if (to.matched.some((record) => record.meta.requiresAuth)) {
    if (Cookies.get(env.nameCookie) && authStore.isAuthenticated) {
      next();
    } else {
      next("/login");
    }
  } else {
    next();
  }
  if (to.path && to.path.toString().includes("/admin")) {
    if (
      Cookies.get(env.nameCookie) &&
      authStore.isAuthenticated &&
      authStore.currentUser.userInfor.isAdmin == true
    ) {
      next();
    } else {
      next("/admin/login");
    }
  }
});

export default router;
