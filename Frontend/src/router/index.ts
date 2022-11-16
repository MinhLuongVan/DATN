import { createRouter, createWebHistory,RouteRecordRaw } from "vue-router";
import TopMenu from "../layouts/top-menu/Main.vue";
import Page1 from "../views/Home/Home.vue";
import Page3 from "../views/About/About.vue";
import Login from "../views/Login/Login.vue";
import Register from "../views/Register/Register.vue";
import Cookies from "js-cookie";
import {env} from '../utils/myVariables';
import { useAuthStore } from "../stores/authStore";

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
    meta: {requiresAuth: true},
    children: [
      {
        path: "/",
        name: "side-menu-page-1",
        component: Page1,
      },
      {
        path: "page-3",
        name: "side-menu-page-3",
        component: Page3,
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
  if (to.matched.some((record) => record.meta.requiresAuth)) {
      if (Cookies.get(env.nameCookie) && authStore.isAuthenticated) {
          next();
      } else {
          next("/login");
      }
  } else {
      next();
  }
});

export default router;
