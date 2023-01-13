<template>
  <div class="container-fluid">
    <AdminNavbarMenu />
    <div class="row flex-nowrap">
      <SideMenuAdmin/>
      <div class="content p-4 ">
        <router-view />
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { computed, defineComponent } from "vue";
import { useRoute } from "vue-router";
import { useRouter } from "vue-router";
import AdminNavbarMenu from "../Admin/Partial/AdminNavbaMenu.vue";
import SideMenuAdmin from "../Admin/Partial/AdminSideMenu.vue"
export default defineComponent({
  name: "AdminLayout",
  components: { AdminNavbarMenu,SideMenuAdmin},
  setup() {
    const route = useRoute();
    const router = useRouter();
    const routeMenu = computed(() => route.path);
    return {
      route,
      router,
      routeMenu,
    };
  },
});
</script>
<style></style>
