<template>
  <div>
    <div class="intro-y flex items-center mt-8">
      <h2 class="text-xl font-serif mr-auto">Home</h2>
    </div>
    <!-- BEGIN: Page Layout -->
    <div class="intro-y box p-5 mt-5">
      <div class="intro-y flex flex-col sm:flex-row items-center">
        <h2 class="text-lg font-serif mr-auto">abc</h2>
        <div class="w-full sm:w-auto flex mt-4 sm:mt-0">
          <button class="btn btn-primary font-serif shadow-md"></button>
        
        </div>
      </div>
      <div class="intro-y grid grid-cols-12 gap-6 mt-5">
        <!-- BEGIN: Blog Layout -->
       
         
       
        <!-- END: Blog Layout -->
        <!-- BEGIN: Pagiantion -->
        <div
            class="intro-y col-span-12 flex flex-wrap sm:flex-row sm:flex-nowrap items-center"
        >
          <nav class="w-full sm:w-auto sm:mr-auto">
            <ul class="pagination">
              <li class="page-item">
                <a class="page-link" href="#">
                  <ChevronsLeftIcon class="w-4 h-4"/>
                </a>
              </li>
              <li class="page-item">
                <a class="page-link" href="#">
                  <ChevronLeftIcon class="w-4 h-4"/>
                </a>
              </li>
              <li class="page-item">
                <a class="page-link" href="#">...</a>
              </li>
              <li class="page-item">
                <a class="page-link" href="#">1</a>
              </li>
              <li class="page-item active">
                <a class="page-link" href="#">2</a>
              </li>
              <li class="page-item">
                <a class="page-link" href="#">3</a>
              </li>
              <li class="page-item">
                <a class="page-link" href="#">...</a>
              </li>
              <li class="page-item">
                <a class="page-link" href="#">
                  <ChevronRightIcon class="w-4 h-4"/>
                </a>
              </li>
              <li class="page-item">
                <a class="page-link" href="#">
                  <ChevronsRightIcon class="w-4 h-4"/>
                </a>
              </li>
            </ul>
          </nav>
          <select class="w-20 form-select box mt-3 sm:mt-0">
            <option>10</option>
            <option>25</option>
            <option>35</option>
            <option>50</option>
          </select>
        </div>
        <!-- END: Pagiantion -->
      </div>
    </div>
    <!-- END: Page Layout -->
  </div>
</template>

<script lang="ts">


export default {
  name: "Home",
 

};
</script>
