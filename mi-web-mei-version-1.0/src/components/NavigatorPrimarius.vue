<script setup lang="ts">
import {Menu} from 'lucide-vue-next'
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
    onClick?: () => void
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
            class="fixed top-2 right-4 bg-transparent hover:bg-[#efa5b9] sm:hidden data-[state=on]:bg-transparent"
            @click="videreMenu =!videreMenu"
            >
            <Menu/>
        </Toggle>


        <nav v-if="videreMenu" class="extra-nav flex flex-row pt-3 justify-start items-start sm:flex-row px-3">
            

            <NavigationMenu>
                <NavigationMenuList class="flex flex-row" >

                <NavigationMenuItem v-for="item in items" :key="item.label" class="w-full">
                    <RouterLink :to="item.href" v-slot="{ isActive }">
                        <NavigationMenuLink 
                            :class="[navigationMenuTriggerStyle(), 'text-md justify-start text-left pl-1  bg-transparent text-white hover:text-[#e7a6b7] hover:bg-transparent transition-all', {'font-bold text-[#e7a6b7]': isActive }]"
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




.extra-nav {
  background-color: #d6e1a3;
  opacity: 0.7;
  box-shadow: rgba(0, 0, 0, 0.7);
  position: fixed;
  top: 0;
  width: 11rem;
  border-radius: 0 0 1rem 0;
  z-index: 1; 
}

@media (min-width: 640px){
  .extra-nav {
    width: 100%;
    border-radius: 0;
    opacity: 1;
    left: 0;
  }
}
</style>