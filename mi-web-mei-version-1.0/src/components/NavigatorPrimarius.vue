<script setup lang="ts">
import {HouseHeart, Menu} from 'lucide-vue-next'
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu'

import { Toggle } from '@/components/ui/toggle'
import { onMounted, onUnmounted, ref } from 'vue'

interface MenuItems {
    label: string,
    href: string,
}

interface Props {
    items: MenuItems[],
    homeRoute?: string
}

withDefaults(defineProps<Props>(), {
    homeRoute: '/'
})

const videreMenu =ref<boolean>(true)

const handleResize =() => {
  if(window.innerWidth <= 640){
    videreMenu.value = false;
  } else {
    videreMenu.value=true;
  }
}

onMounted(()=>{
  handleResize()
  window.addEventListener('resize', handleResize)
})

onUnmounted(()=> {
  window.removeEventListener('resize', handleResize)
})

</script>


<template>
    <div>

        <Toggle
            class="fixed top-2 right-4 hover:bg-[#efa5b9] "
            @click="videreMenu =!videreMenu"
            >
            <Menu/>
        </Toggle>

        <nav v-if="videreMenu" class="extra-nav flex flex-col sm:flex-row md:justify-between px-3 ">
            <RouterLink :to="homeRoute">
            <HouseHeart class ="icon-home"/>
            </RouterLink>

            <NavigationMenu>
                <NavigationMenuList class="flex flex-col sm:flex-row">

                <NavigationMenuItem v-for="item in items" :key="item.label" >
                    <RouterLink :to="item.href" active-class="font-bold">
                        <NavigationMenuLink 
                            :class="[navigationMenuTriggerStyle(), 'text-md  bg-[#cef8a7] text-[#55ad58] hover:text-[#efa5b9] hover:bg-[#cef8a7] transition-all']"
  >
                            {{ item.label }}
                        </NavigationMenuLink>
                    </RouterLink>
                </NavigationMenuItem>



                </NavigationMenuList>
            </NavigationMenu>
        </nav>
    </div>
</template>


<style scoped>
.icon-home {
    margin-top: 5px;
    margin-bottom: 5px;
    margin-left: 3px;
    color: #55ad58;
    width: 35px;
    height: 35px;
}

.icon-home:hover {

    color: #efa5b9;
    
}

.extra-nav {
  background-color:#cef8a7;
  opacity: 0.7;
  text-align: left;
  position: fixed;
  margin-left: 3px;
  top: 0;
  width: 11rem;
  border-radius: 0 0 1rem 0;
  z-index: 1;
}

@media (min-width: 640px){
  .extra-nav {
    width: 100%;
    border-radius: 0;
    opacity: 0;
    left: 0;
  }
}
</style>