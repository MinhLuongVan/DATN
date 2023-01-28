<template>
    <div class="admin-dashboard mt-12 lg:mt-4">
      <div class="mb-6 bg-white shadow rounded p-3">
        <div class="flex items-center h-5">
          <h3 class="text-xl text-slate-600 pr-3"></h3>
          <!-- <router-link class="btn btn-outline-secondary text-slate-600 dark:text-slate-600 rounded-full px-2 shrink-0" to="/admin/organization">
            <EditIcon class="w-4 h-4"/>
          </router-link> -->
        </div>
        <!-- <admin-organization></admin-organization> -->
      </div>
      <div class="mb-6">
        <!-- <admin-email-verify /> -->
      </div>
      <div class="mb-6 bg-white p-5 rounded shadow">
        <div class="flex items-center mb-3">
          <h3 class="mb-3 text-xl text-slate-600 grow"></h3>
          <div class="flex items-center -mx-2">
            <!-- <router-link class="btn btn-sm btn-outline-primary my-1.5 mx-2" to="/admin/account-manager">
              <ChevronsRightIcon class="w-4 h-4 ml-2"/>
            </router-link> -->
  <!--          <Dropdown class="inline-block my-1.5">
              <DropdownToggle class="btn btn-outline-secondary dark:text-slate-600 btn-sm">
                <MoreVerticalIcon class="w-4 h-4"/>
              </DropdownToggle>
              <DropdownMenu class="w-40">
                <DropdownContent>
                  <DropdownItem>New Dropdown</DropdownItem>
                  <DropdownItem>Delete Dropdown</DropdownItem>
                </DropdownContent>
              </DropdownMenu>
            </Dropdown>-->
          </div>
        </div>
        <!-- <acc-mng-table-view></acc-mng-table-view> -->
      </div>
      <div>
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-6 mb-6">
          <div class="lg:col-span-6">
            <div>
              <h3 class="mb-3 text-xl text-slate-600"></h3>
              <admin-spam-filter></admin-spam-filter>
            </div>
          </div>
          <div class="lg:col-span-6">
            <div class="h-full flex flex-col">
              <div class="flex items-center mb-3">
                <h3 class="text-xl text-slate-600 grow"></h3>
                <div class="flex items-center">
                  <!-- <router-link class="flex items-center text-blue-600 hover:underline" to="/admin/email-tracker">
                   <ChevronsRightIcon class="w-4 h-4 ml-2"/>
                  </router-link> -->
                  <!--            <Dropdown class="inline-block my-1.5">
                                <DropdownToggle class="btn btn-outline-secondary dark:text-slate-600 btn-sm">
                                  <MoreVerticalIcon class="w-4 h-4"/>
                                </DropdownToggle>
                                <DropdownMenu class="w-40">
                                  <DropdownContent>
                                    <DropdownItem>New Dropdown</DropdownItem>
                                    <DropdownItem>Delete Dropdown</DropdownItem>
                                  </DropdownContent>
                                </DropdownMenu>
                              </Dropdown>-->
                </div>
              </div>
              <div class="bg-white p-5 shadow rounded grow">
                <admin-email-tracker></admin-email-tracker>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script lang="ts">
    import {computed, defineComponent} from "vue";
    import AdminEmailVerify from '../Dashbroad/product-verify/Main.vue'
    export default defineComponent({
      name: 'AdminDashboard',
      components: { AdminEmailVerify},
      setup() {
        //init value
       
  
        return {
         
        }
      }
    })
  
  </script>
  
  <style lang="scss"></style>