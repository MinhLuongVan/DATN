import { defineStore } from "pinia";

export const useSideMenuStore = defineStore("sideMenu", {
  state: () => ({
    menu: [
      {
        icon: "HomeIcon",
        pageName: "side-menu-dashboard",
        title: "Trang chủ",
      },
      {
        icon: "TagIcon",
        pageName: "side-menu-menu-layout",
        title: "Quản lý sản phẩm",
      },
      {
        icon: "ShoppingBagIcon",
        pageName: "side-menu-ecommerce",
        title: "Quản lý đơn hàng",
      },

    ],
  }),
});
