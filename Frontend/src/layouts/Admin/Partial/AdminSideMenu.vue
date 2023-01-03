<template>
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
</style>