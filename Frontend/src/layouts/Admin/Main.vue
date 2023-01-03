<template>
    <div class="admin-layout">
      <div class="flex flex-wrap max-h-screen">
        <div class="bg-light" :class="{'w-[18rem] basis-72': !showHide, 'w-[4rem] basis-16': showHide}">
          <a href="/admin" class="admin-logo flex items-center py-1 px-5">
            <img src="../../assets/images/logoAdmin.jfif" alt="" class="h-[45px]" height="35">
            <span class="ml-1" v-if="!showHide">Admin</span>
          </a>
          <AdminSideMenu class="h-full"/>
        </div>
        <div class="admin-content bg-light" :style="{flexBasis: !showHide ? 'calc(100% - 18rem)' : 'calc(100% - 4rem)', width: !showHide ? 'calc(100% - 18rem)' : 'calc(100% - 4rem)'}">
          <div class="flex items-center bg-white border-b scroll-gray-400 overflow-y-hidden">
            <button type="button" class="btn btn-outline-secondary dark:text-slate-600 mx-2" @click="showHide = !showHide">
              <AlignRightIcon v-if="!showHide" class="w-4 h-4"/>
              <XIcon v-else class="w-4 h-4"/>
            </button>
            <div class="grow">
              <admin-navbar-menu/>
            </div>
          </div>
          <div class="p-3 scroll-gray-400 overflow-y-auto" style="height: calc(100vh - 49px)">
            <iNETComponent name="Loading" :load-options="{name: 'perfor'}"/>
            <router-view />
          </div>
        </div>
      </div>
    </div>
  <!-- BEGIN: Notification Toastify -->

  <!-- END: Notification Toastify -->
</template>

<script lang="ts">
  import { defineComponent,ref } from "vue";
  import AdminSideMenu from "../../layouts/Admin/Partial/AdminSideMenu.vue";
  import AdminNavbarMenu from "../../layouts/Admin/Partial/AdminNavbaMenu.vue";
  export default defineComponent({
    components: {AdminSideMenu, AdminNavbarMenu},
    setup(){
        const showHide = ref(false);
      return {
        showHide,
      }
    }
  });
</script>

<style lang="scss">
  @import "../../assets/scss/colors";
  html.inet-mail-themes {
    .admin-content {
      color: $black;
    }
    &.dark {
      .admin-content {
        .table {
          th, td {
            border-color: get-color(gray, 300);
          }
        }
        .box {
          background-color: get-color(gray, 200);
        }
        .form-control,
        .form-select {
          &:not([class*=dark\:bg]) {
            background-color: white;
          }
        }
        .form-check {
          &:not(.form-switch) {
            .form-check-input {
              &[type=checkbox] {
                background-color: get-color(primary, dark);
                &:focus,
                &:checked,
                &:indeterminate {
                  border-color: get-color(primary, dark);
                  box-shadow: 0 0 0 3px rgba(black, .12);
                }
                &:indeterminate {
                  background-color: blueviolet;
                }
              }
              &.check-all[type=checkbox] {
                &:checked {
                  background-color: blueviolet;
                }
              }
            }
          }
        }
        .pagination {
          .page-item {
            &:hover,
            &.active {
              .page-link {
                background-color: white;
              }
            }
            .page-link {
              color: get-color(gray, 500);
            }
          }
        }
      }
    }
    .w-\[4rem\] {
      .ad-lsb-mn {
        overflow: inherit;
        ul {
          li {
            position: relative;
            &:hover {
              z-index: 199;
              > ul {
                opacity: 1;
              }
            }
            > a {
              text-indent: -9999em;
              > svg {
                width: 1.35rem;
                height: 1.35rem;
              }
              &.link-router-active {
                + ul {
                  margin-left: 10px;
                  min-width: auto;
                  box-shadow: none;
                  li {
                    &:first-child {
                      &:before {
                        visibility: hidden;
                      }
                    }
                    > a {
                      text-indent: -9999em;
                      &.link-router-active {
                        &:hover {
                          text-indent: inherit;
                          white-space: nowrap;
                        }
                      }
                    }
                  }
                }
              }
            }
            &:hover {
              .link-router-active {
                + ul {
                  min-width: 120px;
                  li {
                    > a {
                      text-indent: inherit;
                      white-space: nowrap;
                    }
                  }
                }
              }
            }
            > ul {
              position: absolute;
              top: 0;
              left: 100%;
              min-width: 200px;
              opacity: 0;
              transition: opacity .16s linear 0s;
              z-index: -1;
              background-color: get-color(slate, 800);
              border-radius: 0 5px 5px 0;
              box-shadow: 3px 3px 0 0 rgba(black, .25);
              li {
                > a {
                  text-indent: inherit;
                }
              }
            }
          }
        }
      }
    }
  }
</style>