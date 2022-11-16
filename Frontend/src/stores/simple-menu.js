import { defineStore } from "pinia";

export const useSimpleMenuStore = defineStore("simpleMenu", {
  state: () => ({
    menu: [
      {
        icon: "HomeIcon",
        pageName: "simple-menu-page-1",
        title: "Home",
      },
      {
        icon: "HomeIcon",
        pageName: "simple-menu-page-2",
        title: "About",
      },
    ],
  }),
});
