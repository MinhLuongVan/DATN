<template>
    <div class="grid grid-cols-1 lg:grid-cols-12 gap-6">
      <div class="lg:col-span-6">
        <div class="bg-white rounded p-5 shadow">
          <p class="text-base mb-3"></p>
          <ul>
            <li class="py-2">
              <h5></h5>
              <p class="font-medium ml-1 px-2 py-1 border-l-2 dark:border-slate-300 break-words">
              
              </p>
            </li>
            <li class="py-2">
              <h5></h5>
              <p class="font-medium ml-1 px-2 py-1 border-l-2 dark:border-slate-300 break-words">
               
              </p>
            </li>
            <li class="py-2">
              <h5></h5>
              <p class="font-medium ml-1 px-2 py-1 border-l-2 dark:border-slate-300 break-words">
               
              </p>
            </li>
          </ul>
        </div>
      </div>
      <div class="lg:col-span-6">
        <div class="bg-white rounded p-5 shadow h-full">
          <div class="flex flex-col md:flex-row items-center mb-3">
            <p class="text-base grow"></p>
  <!--  TODO: ẩn tạm phần này        <a class="ml-2 btn btn-outline-primary btn-sm shrink-0" href="https://inet.vn/email-theo-ten-mien" target="_blank">
              Nâng cấp gói <ArrowUpRightIcon class="ml-2 w-4 h-4"/>
            </a>-->
          </div>
          <div class="grid grid-cols-1 gap-6">
            <div>
              <div class="mb-1 flex items-center">
                <b class="grow"></b>
                <p class="text-gray-500 pl-3"></p>
              </div>
              <div>
                <iNETComponent name="ProgressBar" />
              </div>
            </div>
            <div>
              <div class="mb-1 flex items-center">
                <b class="grow"></b>
                <p class="text-gray-500 pl-3"></p>
              </div>
              <div>
                <iNETComponent name="ProgressBar" />
              </div>
            </div>
            <div>
              <div class="mb-1 flex items-center">
                <b class="grow"></b>
                <p class="text-gray-500 pl-3"></p>
              </div>
              <div>
                <iNETComponent name="ProgressBar" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script lang="ts">
    import {computed, defineComponent} from "vue";
  
    export default defineComponent({
      name: 'AdminEmailVerify',
      setup() {
        // locale language
      
        return {
         
        }
      }
    })
  </script>