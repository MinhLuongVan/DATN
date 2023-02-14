<template>
  <div>
    <div><AdminNavbarMenu /></div>
    <div class="grid grid-cols-5 lg:grid-cols-6 gap-5">
      <!-- BEGIN: Side Menu -->
      <div class="col-span-1">
        <admin-side-menu />
      </div>
      <!-- END: Side Menu -->
      <!-- BEGIN: Content -->
      <div class="content lg:pr-4 col-span-4 lg:col-span-5">
        <router-view />
      </div>
      <!-- END: Content -->
    </div>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent } from "vue";
import { useRoute } from "vue-router";
import { useRouter } from "vue-router";
import AdminNavbarMenu from "../Admin/Partial/AdminNavbaMenu.vue";
import AdminSideMenu from "../Admin/Partial/AdminSideMenu.vue";
export default defineComponent({
  name: "AdminLayout",
  components: { AdminNavbarMenu, AdminSideMenu },
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

