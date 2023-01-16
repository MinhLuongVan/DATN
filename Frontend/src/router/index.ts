import { createRouter, createWebHistory,RouteRecordRaw } from "vue-router";
import TopMenu from "../../src/layouts/top-menu/Main.vue";
import PageHome from "../views/Home/Home.vue";
import PageIntroduce from "../views/Introduce/Introduce.vue";
import PageProduct from "../views/Product/ListProduct.vue";
import PageDetailProduct from "../views/Product/DetailProduct.vue";
import PageCart from "../views/Product/Cart.vue";
import PagePay from "../views/Product/Pay.vue";
import PageContact from "../views/Contact/Contact.vue";
import PageTransport from "../views/Introduce/Transport.vue";
import PageSecurity from "../views/Introduce/Security.vue"
import PageConditions from "../views/Introduce/Conditions.vue"
import Login from "../views/Login/Login.vue";
import Register from "../views/Register/Register.vue";
import ProductsGridView from "../views/Admin/Products/list-view/GridView.vue";
import ProductsListView from "../views/Admin/Products/list-view/TableView.vue";
import AccountGridView from "../views/Admin/Account/list-view/GridViewAccount.vue";
import AccountListView from "../views/Admin/Account/list-view/TableViewAccount.vue";
import LayoutAdmin from "../../src/layouts/Admin/layoutAdmin.vue";
import AdminDashboard from '../views/Admin/Dashbroad/Main.vue';
// import Cookies from "js-cookie";
// import {env} from '../utils/myVariables';
// import { useAuthStore } from "../stores/authStore";

const routes: Array<RouteRecordRaw> = [
  {
    path:"/login",
    component: Login,
  },
  {
    path:"/register",
    component: Register
  },
  {
    path: "/",
    component: TopMenu,
    // meta: {requiresAuth: true},
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
        path: "/product/pay",
        name: "side-menu-page-6",
        component: PagePay,
      },
      {
        path: "/contact",
        name: "side-menu-page-7",
        component: PageContact,
      },
      {
        path: "/introduce/transport",
        name: "side-menu-page-8",
        component:PageTransport ,
      },
      {
        path: "/introduce/security",
        name: "side-menu-page-9",
        component:PageSecurity ,
      },
      {
        path: "/introduce/condition",
        name: "side-menu-page-10",
        component:PageConditions ,
      },
    ],
  },
  {
    path: '/admin',
    component: LayoutAdmin,
    children: [
      {
        path: '',
        component: AdminDashboard
      },
      {
        path: 'products',
        component: ProductsListView
      },
      {
        path: 'grid-view',
        component: ProductsGridView
      },
      {
        path: 'accounts',
        component:AccountListView,
      },
      {
        path: 'configuration',
        component: AdminDashboard
      }
    ]
  }
  

];

const router = createRouter({
  history: createWebHistory(),
  routes,
});
// router.beforeEach((to, _from, next) => {
//   const authStore = useAuthStore();
//    authStore.getToken();
//   if (to.matched.some((record) => record.meta.requiresAuth)) {
//       if (Cookies.get(env.nameCookie) && authStore.isAuthenticated) {
//           next();
//       } else {
//           next("/login");
//       }
//   } else {
//       next();
//   }
// });

export default router;
