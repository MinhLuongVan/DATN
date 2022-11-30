import { createRouter, createWebHistory,RouteRecordRaw } from "vue-router";
import TopMenu from "../layouts/top-menu/Main.vue";
import PageHome from "../views/Home/Home.vue";
import PageIntroduce from "../views/Introduce/Introduce.vue";
import PageProduct from "../views/Product/ListProduct.vue";
import PageContact from "../views/Contact/Contact.vue";
import PageTransport from "../views/Introduce/Transport.vue";
import PageSecurity from "../views/Introduce/Security.vue"
import PageConditions from "../views/Introduce/Conditions.vue"
import Login from "../views/Login/Login.vue";
import Register from "../views/Register/Register.vue";
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
        path: "/contact",
        name: "side-menu-page-4",
        component: PageContact,
      },
      {
        path: "/introduce/transport",
        name: "side-menu-page-5",
        component:PageTransport ,
      },
      {
        path: "/introduce/security",
        name: "side-menu-page-6",
        component:PageSecurity ,
      },
      {
        path: "/introduce/condition",
        name: "side-menu-page-7",
        component:PageConditions ,
      },
    ],
  },
  // {
  //   path: "/page-3",
  //       name: "side-menu-page-3",
  //       component: Page3,
  // }
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
