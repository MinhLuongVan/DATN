<template>
    <nav class="admin-navbar-menu flex items-center py-2 px-3">
      <h1 v-if="$route.name" class="text-xl shrink-0 mr-2"></h1>
      <div class="grow">
        <div class="flex items-center justify-end">
  <!--        <div class="min-w-[220px] max-w-sm relative">-->
  <!--          <input class="form-control form-control-sm shadow-none border border-slate-300 dark:border-slate-300 dark:bg-white dark:text-slate-700 pr-11" type="search" :placeholder="'Tìm trong ' + $route.name.toLowerCase() + '...'"/>-->
  <!--          <button class="btn absolute inset-y-0 right-0">-->
  <!--            <SearchIcon class="w-4 h-4"/>-->
  <!--          </button>-->
  <!--        </div>-->
          <DarkModeSwitcher/>
          <div class="flex intro-x items-center relative ml-auto mr-3">
            <Dropdown >
              <DropdownToggle class="btn bg-light dark:bg-black/30">
                <ChevronDownIcon class="w-4 h-4"/>
              </DropdownToggle>
              <DropdownMenu class="w-40">
                <DropdownContent>
                  <DropdownItem >English</DropdownItem>
                  <DropdownItem >Tiếng Việt</DropdownItem>
                </DropdownContent>
              </DropdownMenu>
            </Dropdown>
          </div>
          <div class="nav-main pl-5 flex items-center">
            <Tippy tag="a" content="iNET Help" href="https://helpdesk.inet.vn" target="_blank" class="p-2 mr-2">
              <HelpCircleIcon class="w-4 h-4"/>
            </Tippy>
            <!-- <Tippy tag="a" content="iNET notification" href="/" class="p-2 mr-2">
              <BellIcon class="w-4 h-4"/>
            </Tippy> -->
            <!-- <Tippy tag="a" content="iNET mail home" href="/" class="p-2 mr-2">
              <HomeIcon class="w-4 h-4"/>
            </Tippy> -->
            <Dropdown class="intro-x w-8 h-8">
              <DropdownToggle>
                <inet-avatar avt-class="w-8 h-8" key-str="adminEmail"/>
              </DropdownToggle>
              <DropdownMenu class="w-56">
                <DropdownContent
                    class="bg-primary/80 before:block before:absolute before:bg-black before:inset-0 before:rounded-md before:z-[-1] text-white"
                >
                  <DropdownHeader tag="div" class="!font-normal">
                    <div class="font-medium">
                    </div>
                    <div class="text-xs text-white/60 mt-0.5 dark:text-slate-500">
                    
                    </div>
                  </DropdownHeader>
                  <DropdownDivider class="border-white/[0.08]"/>
                  <DropdownItem class="dropdown-item hover:bg-white/5" >
                    <UnlockIcon class="w-4 h-4 mr-2"/>
                  
                  </DropdownItem>
                  <DropdownDivider class="border-white/[0.08]"/>
                  <DropdownItem class="dropdown-item hover:bg-white/5">
                    <ToggleRightIcon class="w-4 h-4 mr-2"/>
                  
                  </DropdownItem>
                </DropdownContent>
              </DropdownMenu>
            </Dropdown>
          </div>
        </div>
      </div>
    </nav>
  </template>
  
  <script lang="ts">
    import {computed, defineComponent} from "vue";
  
    export default defineComponent({
      name: "AdminNavbarMenu",
      setup() {
       
  
        return {
          
        }
      }
    })
  </script>
  <style lang="scss"></style>