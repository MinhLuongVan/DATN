<!-- <template>
    <div class="ad-lsb-mn bg-slate-600">
      <ul>
        <li v-for="(list,index) in listRouterAdmin" :key="index">
        <router-link class="py-3 px-5 flex items-center text-white" :to="'/admin/' + list.path">
          <i v-if="list.meta && list.meta.lucideIcon" :icon-name="list.meta.lucideIcon" class="w-4 h-4 mr-2 shrink-0"></i>
        {{list.name }}
        </router-link>
        <ul v-if="list.children && list.children.length > 0">
          <li v-for="(listC,index) in list.children" :key="index">
            <router-link class="py-3 px-5 flex items-center text-white" :to="'/admin/' + list.path + '/' + listC.path">
              <i v-if="listC.meta && listC.meta.lucideIcon" :icon-name="listC.meta.lucideIcon" class="w-4 h-4 mr-2 shrink-0"></i>
            {{listC.name}}
            </router-link>
          </li>
        </ul>
      </li>
      </ul>
    </div>
  </template>
  
  <script lang="ts">
    import { defineComponent} from "vue";
    import { useRouter } from 'vue-router';
    import {ref} from "vue";
    import { createIcons, icons } from "lucide";
  
    export default defineComponent({
      name: 'AdminSideMenu',
      mounted() {
        createIcons({ icons, nameAttr: 'icon-name' });
      },
      setup() {
        const router = useRouter();
        const listRouterAdmin = ref<any>([]);
        const findAdmin = router.options.routes.find(item => item.path === '/admin');
        if(findAdmin && findAdmin.children) {
          findAdmin.children.forEach(item => listRouterAdmin.value.push(item));
        }
        return {
          listRouterAdmin, 
        }
      }
    })
  </script>
<style lang="scss">
@import './src/assets/scss/_colors.scss';
html.inet-mail-themes {
  .ad-lsb-mn {
    height: calc(100% - 51px);
    overflow-x: hidden;
    overflow-y: auto;
    ul {
      li {
        > a {
          transition: color .16s linear 0s;
          color: get-color(slate, 400);
          &:hover,
          &.link-router-active {
            color: get-color(slate, 300);
          }
          &.link-router-active {
            background-color: rgba(get-color(primary), .3);
            position: relative;
            &:after {
              content: "";
              border-width: 22px 10px;
              border-style: solid;
              border-color: transparent #f1f5f9 transparent transparent;
              position: absolute;
              top: 0;
              bottom: 0;
              right: 0;
            }
            + ul {
              margin-left: 1.65rem;
              background-color: #2d456a;
              position: static;
              opacity: 1;
              li {
                &:first-child {
                  position: relative;
                  &:before {
                    content: "";
                    border-width: 20px 0 0 25px;
                    border-color: rgba(get-color(primary), .3) transparent transparent;
                    position: absolute;
                    left: -25px;
                    top: 0;
                  }
                }
                > a {
                  padding: .75rem .85rem;
                  &.link-router-active {
                    background-color: transparent;
                    &:after {
                      border-width: 0 0 1px 0;
                      border-color: rgba(white, .35);
                      height: 1px;
                      width: 9px;
                      right: inherit;
                      left: 0;
                      top: 50%;
                      margin-top: -1px;
                    }
                  }
                }
              }
            }
          }
        }
        > ul {
          opacity: 0;
          position: absolute;
          left: -100%;
          top: 0;
          transition: all .2s ease 0s;
        }
      }
    }
  }
}
</style> -->
<template>
   <div class="col-auto px-0">
        <div id="sidebar" class="collapse collapse-horizontal show border-end">
          <div
            id="sidebar-nav"
            class="list-group border-0 rounded-0 bg-[#1e293b] text-sm-start min-vh-100 w-20 lg:w-60"
          >
            <a
              class="flex h-12 mb-2 px-4 lg:ml-1 lg:px-4 items-center cursor-pointer"
              @click="router.push('/admin')"
              :class="`${routeMenu === '/admin' ? 'bg-[#4a4a4a]':''}`"
            >
              <HomeIcon class="w-6 h-6 lg:w-5 lg:h-5"></HomeIcon>
              <span class="pl-2 pt-0.5 hidden lg:block">Trang chủ</span>
            </a>
            <a
              class="flex h-12 mb-2 px-4 lg:ml-1 lg:px-4 items-center cursor-pointer"
              @click="router.push('/admin/products')"
              :class="`${routeMenu ==='/admin/products' ? 'bg-[#4a4a4a]':''}`"
            >
              <TagIcon class="w-6 h-6 lg:w-5 lg:h-5"></TagIcon>
              <span class="pl-2 pt-0.5 hidden lg:block">Quản lý sản phẩm</span>
            </a>
            <a
              class="flex h-12 mb-2 px-4 lg:ml-1 lg:px-4 items-center cursor-pointer"
            >
              <Shopping-bagIcon
                class="w-6 h-6 lg:w-5 lg:h-5"
              ></Shopping-bagIcon>
              <span class="pl-2 pt-0.5 hidden lg:block">Quản lý đơn hàng</span>
            </a>
            <a
              class="flex h-12 mb-2 px-4 lg:ml-1 lg:px-4 items-center cursor-pointer"
              @click="router.push('/admin/accounts')"
              :class="`${routeMenu === '/admin/accounts' ? 'bg-[#4a4a4a]':''}`"
            >
              <UsersIcon class="w-6 h-6 lg:w-5 lg:h-5"></UsersIcon>
              <span class="pl-2 pt-0.5 hidden lg:block">Quản lý tài khoản</span>
            </a>
            <a
              class="flex h-12 mb-2 px-4 lg:ml-1 lg:px-4 items-center cursor-pointer"
            >
              <CalendarIcon class="w-6 h-6 lg:w-5 lg:h-5"></CalendarIcon>
              <span class="pl-2 pt-0.5 hidden lg:block">Báo cáo thống kê</span>
            </a>
            <a
              class="flex h-12 mb-2 px-4 lg:ml-1 lg:px-4 items-center cursor-pointer"
              @click="router.push('/admin/configuration')"
              :class="`${routeMenu.includes('/admin/configuration') ? 'bg-[#4a4a4a]':''}`"
            >
              <SettingsIcon class="w-6 h-6 lg:w-5 lg:h-5"></SettingsIcon>
              <span class="pl-2 pt-0.5 hidden lg:block">Cấu hình hệ thống</span>
            </a>
          </div>
        </div>
      </div>
</template>
<script lang="ts">
import { computed, defineComponent } from "vue";
import { useRoute } from "vue-router";
import { useRouter } from "vue-router";
export default defineComponent({
  name: "SideMenuAdmin",
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
