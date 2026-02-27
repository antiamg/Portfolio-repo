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
            class="fixed top-2 right-4 hover:bg-[#efaca5] "
            @click="videreMenu =!videreMenu"
            >
            <Menu/>
        </Toggle>

        <nav v-if="videreMenu" class="extra-nav flex flex-col sm:flex-row justify-between px-3 ">
            <RouterLink :to="homeRoute">
            <HouseHeart class ="icon-home"/>
            </RouterLink>

            <NavigationMenu>
                <NavigationMenuList class="flex flex-col sm:flex-row">

                <NavigationMenuItem v-for="item in items" :key="item.label" >
                    <a 
                    :href="item.href" 
                    @click.prevent="item.onClick ? item.onClick() : null"
                    >
                        <NavigationMenuLink :class="[navigationMenuTriggerStyle(), 'text-md bg-[#bbe991] text-[#4c964e] hover:text-[#faf6ec] hover:bg-[##bbe991] transition-all']">
                            {{ item.label }}
                        </NavigationMenuLink>
                    
                    </a>
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
    color: #4c964e;
    width: 35px;
    height: 35px;
}

.icon-home:hover {

    color: #faf6ec;
    
}

.extra-nav {
  background-color:#bbe991;
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