import { defineStore } from "pinia";

export const useSideMenuStore = defineStore("sideMenu", {
  state: () => ({
    menu: [
      {
        icon: "HomeIcon",
        pageName: "side-menu-page-1",
        title: "Home",
      },
      {
        icon: "File-textIcon",
        pageName: "side-menu-page-2",
        title: "Add Post",
      },
      {
        icon: "Help-circleIcon",
        pageName: "side-menu-page-3",
        title: "About",
      },
    ],
  }),
});
