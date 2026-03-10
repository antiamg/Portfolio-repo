<script setup lang="ts">
import NavigatorPrimarius from '@/components/NavigatorPrimarius.vue';
import Button from '@/components/ui/button/Button.vue';
import {Phone, Mail, MapPin, Instagram, Music2Icon} from 'lucide-vue-next'
const menuItems = [
  {
    label: 'Inicio',
    href: '/',
  },
  {
    label: 'Galería',
    href: 'galeria',    
  },
  {
    label: 'Sobre mí',
    href: 'informacion',    
  },
  {
    label: 'Contacto',
    href: '/contacto',   
  },
 ] 
</script>


<template>
<header>
        <NavigatorPrimarius :items="menuItems" home-route="/" />
</header>

<div class="w-screen h-screen">
    <Button class="ml-7 mt-2 md:mt-15 md:ml-5 py-5 md:px-6 md:text-l hover:bg-[#efa5b9] bg-transparent hover:text-[#faf6ec] text-[#efa5b9] transition-all">
         <RouterLink class="w-full text-center" to="/contacto">
              Atrás
         </RouterLink>
    </Button>

</div>

<footer class="w-full bg-[#efa5b9] text-[#faf6ec] text-left py-8">
<div class="flex md:flex-row md:justify-around text-left gap-8 max-w-3xl mx-auto">

    <div class="space-y-4 ml-5 text-left">

      <h3 class="text-l ml-5 md:text-xl font-bold">Contacto</h3>
            
        <div class="space-y-1">
          <p class="flex items-center gap-2 ml-5 md:justify-start">
            <Phone class="w-5 h-5"/>
            +34 604 075 813

          </p>
          <p class="flex items-center gap-2 ml-5 md:justify-start">
            <Mail class="w-5 h-5"/>
            antiamg10@gmail.com

          </p>
          <p class="flex items-center gap-2 ml-5 md:justify-start">
            <MapPin class="w-5 h-5"/>
            Valencia | Galicia, España

          </p>
        </div>
      </div>

      <!-- Redes sociales -->
      <div class="space-y-4 md:text-left">
        <h3 class="text-l md:text-xl font-bold text-[#faf6ec]">Visita mis redes!</h3>
        <div class="flex gap-8 justify-center">
        
          <a href="https://www.instagram.com/msmouri_?igsh=anV2d2NvNGdzNw%3D%3D&utm_source=qr"><Instagram class="md:w-10 md:h-10 hover:text-[#e2ffc7]" /></a>
          <a href="https://www.tiktok.com/@msmouri_?_r=1&_t=ZN-94Yci0YdFCA"><Music2Icon class="md:w-10 md:h-10 hover:text-[#e2ffc7]"/></a>
              
        </div>
    </div>
  </div>
</footer> 
</template>



<style scoped>

</style>