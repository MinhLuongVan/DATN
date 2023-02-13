<template>
  <div class="admin-dashboard mt-12 lg:mt-4">
    <!-- <div class="mb-6 bg-white shadow rounded p-3">
      <div class=" h-auto">
        <fieldset class="border border-slate-300 my-2 p-3 w-full">
          <legend class="text-base px-2">Logo website</legend>
      <div class="flex items-center justify-between">
      <img src="../../../assets/images/logosvg.png" alt=""
      class="img-logo w-1/2 h-28 lg:w-2/3 ">
      <div>
        <button class="border border-slate-300 text-slate-500 rounded-full p-2 mr-2 hover:text-slate-700">
          <EditIcon class="w-4 h-4"/>
        </button>
        <button class="border border-red-500 text-red-500 rounded-full p-2 hover:text-red-700">
          <TrashIcon class="w-4 h-4"/>
        </button>
      </div>
      </div>
        </fieldset>
     
      </div>
    </div>
    <div class="mb-6"></div>
    <div class="mb-6 bg-white p-5 rounded shadow">
      <div class="flex items-center mb-3">
        <h3 class="mb-3 text-xl text-slate-600 grow"></h3>
        <div class="flex items-center -mx-2"> -->
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
        <!-- </div>
      </div> -->
      <!-- <acc-mng-table-view></acc-mng-table-view> -->
    <!-- </div>
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
              <div class="flex items-center"> -->
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
              <!-- </div>
            </div>
            <div class="bg-white p-5 shadow rounded grow">
              <admin-email-tracker></admin-email-tracker>
            </div>
          </div>
        </div>
      </div>
    </div> -->
    <div class="grid grid-cols-12 gap-6 mt-5">
            <div class="col-span-12 sm:col-span-6 xl:col-span-3 intro-y">
              <div class="report-box zoom-in">
                <div class="box p-5">
                  <div class="flex">
                    <ShoppingCartIcon class="report-box__icon text-primary" />
                    <div class="ml-auto">
                      <Tippy
                        tag="div"
                        class="report-box__indicator bg-success cursor-pointer"
                        content="33% Higher than last month"
                      >
                        33%
                        <ChevronUpIcon class="w-4 h-4 ml-0.5" />
                      </Tippy>
                    </div>
                  </div>
                  <div class="text-3xl font-medium leading-8 mt-6">4.710</div>
                  <div class="text-base text-slate-500 mt-1">Item Sales</div>
                </div>
              </div>
            </div>
            <div class="col-span-12 sm:col-span-6 xl:col-span-3 intro-y">
              <div class="report-box zoom-in">
                <div class="box p-5">
                  <div class="flex">
                    <CreditCardIcon class="report-box__icon text-pending" />
                    <div class="ml-auto">
                      <Tippy
                        tag="div"
                        class="report-box__indicator bg-danger cursor-pointer"
                        content="2% Lower than last month"
                      >
                        2%
                        <ChevronDownIcon class="w-4 h-4 ml-0.5" />
                      </Tippy>
                    </div>
                  </div>
                  <div class="text-3xl font-medium leading-8 mt-6">3.721</div>
                  <div class="text-base text-slate-500 mt-1">New Orders</div>
                </div>
              </div>
            </div>
            <div class="col-span-12 sm:col-span-6 xl:col-span-3 intro-y">
              <div class="report-box zoom-in">
                <div class="box p-5">
                  <div class="flex">
                    <MonitorIcon class="report-box__icon text-warning" />
                    <div class="ml-auto">
                      <Tippy
                        tag="div"
                        class="report-box__indicator bg-success cursor-pointer"
                        content="12% Higher than last month"
                      >
                        12% <ChevronUpIcon class="w-4 h-4 ml-0.5" />
                      </Tippy>
                    </div>
                  </div>
                  <div class="text-3xl font-medium leading-8 mt-6">2.149</div>
                  <div class="text-base text-slate-500 mt-1">
                    Total Products
                  </div>
                </div>
              </div>
            </div>
            <div class="col-span-12 sm:col-span-6 xl:col-span-3 intro-y">
              <div class="report-box zoom-in">
                <div class="box p-5">
                  <div class="flex">
                    <UserIcon class="report-box__icon text-success" />
                    <div class="ml-auto">
                      <Tippy
                        tag="div"
                        class="report-box__indicator bg-success cursor-pointer"
                        content="22% Higher than last month"
                      >
                        22% <ChevronUpIcon class="w-4 h-4 ml-0.5" />
                      </Tippy>
                    </div>
                  </div>
                  <div class="text-3xl font-medium leading-8 mt-6">152.040</div>
                  <div class="text-base text-slate-500 mt-1">
                    Unique Visitor
                  </div>
                </div>
              </div>
            </div>
          </div>
              <!-- BEGIN: Sales Report -->
        <div class="col-span-12 lg:col-span-6 mt-8">
          <div class="intro-y block sm:flex items-center h-10">
            <h2 class="text-lg font-medium truncate mr-5">Sales Report</h2>
            <div class="sm:ml-auto mt-3 sm:mt-0 relative text-slate-500">
              <CalendarIcon
                class="w-4 h-4 z-10 absolute my-auto inset-y-0 ml-3 left-0"
              />
              <Litepicker
                v-model="salesReportFilter"
                :options="{
                  autoApply: false,
                  singleMode: false,
                  numberOfColumns: 2,
                  numberOfMonths: 2,
                  showWeekNumbers: true,
                  dropdowns: {
                    minYear: 1990,
                    maxYear: null,
                    months: true,
                    years: true,
                  },
                }"
                class="form-control sm:w-56 box pl-10"
              />
            </div>
          </div>
          <div class="intro-y box p-5 mt-12 sm:mt-5">
            <div class="flex flex-col md:flex-row md:items-center">
              <div class="flex">
                <div>
                  <div
                    class="text-primary dark:text-slate-300 text-lg xl:text-xl font-medium"
                  >
                    $15,000
                  </div>
                  <div class="mt-0.5 text-slate-500">This Month</div>
                </div>
                <div
                  class="w-px h-12 border border-r border-dashed border-slate-200 dark:border-darkmode-300 mx-4 xl:mx-5"
                ></div>
                <div>
                  <div class="text-slate-500 text-lg xl:text-xl font-medium">
                    $10,000
                  </div>
                  <div class="mt-0.5 text-slate-500">Last Month</div>
                </div>
              </div>
              <Dropdown class="md:ml-auto mt-5 md:mt-0">
                <DropdownToggle class="btn btn-outline-secondary font-normal">
                  Filter by Category
                  <ChevronDownIcon class="w-4 h-4 ml-2" />
                </DropdownToggle>
                <DropdownMenu class="w-40">
                  <DropdownContent class="overflow-y-auto h-32">
                    <DropdownItem>PC & Laptop</DropdownItem>
                    <DropdownItem>Smartphone</DropdownItem>
                    <DropdownItem>Electronic</DropdownItem>
                    <DropdownItem>Photography</DropdownItem>
                    <DropdownItem>Sport</DropdownItem>
                  </DropdownContent>
                </DropdownMenu>
              </Dropdown>
            </div>
            <div class="report-chart">
              <ReportLineChart :height="275" class="mt-6 -mb-6" />
            </div>
          </div>
        </div>
        <!-- END: Sales Report -->
        <!-- BEGIN: Weekly Top Seller -->
        <div class="col-span-12 sm:col-span-6 lg:col-span-3 mt-8">
          <div class="intro-y flex items-center h-10">
            <h2 class="text-lg font-medium truncate mr-5">Weekly Top Seller</h2>
            <a href="" class="ml-auto text-primary truncate">Show More</a>
          </div>
          <div class="intro-y box p-5 mt-5">
            <div class="mt-3">
              <ReportPieChart :height="213" />
            </div>
            <div class="w-52 sm:w-auto mx-auto mt-8">
              <div class="flex items-center">
                <div class="w-2 h-2 bg-primary rounded-full mr-3"></div>
                <span class="truncate">17 - 30 Years old</span>
                <span class="font-medium ml-auto">62%</span>
              </div>
              <div class="flex items-center mt-4">
                <div class="w-2 h-2 bg-pending rounded-full mr-3"></div>
                <span class="truncate">31 - 50 Years old</span>
                <span class="font-medium ml-auto">33%</span>
              </div>
              <div class="flex items-center mt-4">
                <div class="w-2 h-2 bg-warning rounded-full mr-3"></div>
                <span class="truncate">>= 50 Years old</span>
                <span class="font-medium ml-auto">10%</span>
              </div>
            </div>
          </div>
        </div>
        <!-- END: Weekly Top Seller -->
        <!-- BEGIN: Sales Report -->
        <div class="col-span-12 sm:col-span-6 lg:col-span-3 mt-8">
          <div class="intro-y flex items-center h-10">
            <h2 class="text-lg font-medium truncate mr-5">Sales Report</h2>
            <a href="" class="ml-auto text-primary truncate">Show More</a>
          </div>
          <div class="intro-y box p-5 mt-5">
            <div class="mt-3">
              <ReportDonutChart :height="213" />
            </div>
            <div class="w-52 sm:w-auto mx-auto mt-8">
              <div class="flex items-center">
                <div class="w-2 h-2 bg-primary rounded-full mr-3"></div>
                <span class="truncate">17 - 30 Years old</span>
                <span class="font-medium ml-auto">62%</span>
              </div>
              <div class="flex items-center mt-4">
                <div class="w-2 h-2 bg-pending rounded-full mr-3"></div>
                <span class="truncate">31 - 50 Years old</span>
                <span class="font-medium ml-auto">33%</span>
              </div>
              <div class="flex items-center mt-4">
                <div class="w-2 h-2 bg-warning rounded-full mr-3"></div>
                <span class="truncate">>= 50 Years old</span>
                <span class="font-medium ml-auto">10%</span>
              </div>
            </div>
          </div>
        </div>
        <!-- END: Sales Report -->
  </div>
</template>

<script lang="ts">
import { computed, defineComponent } from "vue";
export default defineComponent({
  name: "AdminDashboard",
  setup() {
    //init value

    return {};
  },
});
</script>

<style lang="scss"></style>
