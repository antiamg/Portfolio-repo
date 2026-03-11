<script setup lang="ts">
import NavigatorPrimarius from '@/components/NavigatorPrimarius.vue';
import { Card, CardContent } from '@/components/ui/card'
import {Phone, Mail, MapPin, Instagram, Music2Icon} from 'lucide-vue-next'
import { computed, ref } from 'vue';

import { detalles } from './data';
import { router } from '@/router';

const isHover = ref(false)

const goTo = (route: string) => {
  router.push(route)
}

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
    href: 'contacto',   
  },
 ] 

 interface Sobre  {
  src: string;
  size: string;
  route: string;
  solapa: string;
}
const sobres: Sobre[] = [
  {
    src: "/imagines/galeria/mama-boli-cerca.png",
    size: "w-[100px] lg:w-[160px] transition-all",
    route:"/galeria/retratos",
    solapa:"/imagines/sobre-retratos.png"
  },
  {
    src: "/imagines/galeria/cartel-trans.jpg",
    size: "w-[100px] lg:w-[150px] transition-all",
    route:"/galeria/carteleria",
    solapa:"/imagines/sobre-carteleria.png"
  },
  {
    src: "/imagines/galeria/comic.png",
    size: "w-[140px] lg:w-[170px] transition-all",
    route:"/galeria/comic",
    solapa:"/imagines/sobre-comic.png"
  },
  {
    src: "/imagines/galeria/juego-completo.JPG",
    size: "w-[120px] lg:w-[160px] transition-all",
    route:"/galeria/diseno",
    solapa:"/imagines/sobre-diseno.png"
  }
]

</script>


<template>
    <header>
   <NavigatorPrimarius :items="menuItems" home-route="/" />     
    </header>

    <main class="w-screen min-h-screen ">
      <div class="flex flex-row justify-center ">
        <img src="/imagines/titulo-proyectos.png" alt="" class="mt-30 mb-5 sm:mt-35 sm:mb-10 w-[80%] md:w-[70%]">
      </div>

      <div class="flex justify-center gap-10 px-10 mt-16 mb-16 items-start flex-wrap">
  
  <div
    v-for="(sobre, index) in sobres"
    :key="index"
    class="relative w-[180px] h-[180px] lg:w-[300px] lg:h-[300px] transition-all"
    @click="goTo(sobre.route)"
  >
    
    <!-- parte arriba -->
    <img 
      src="/imagines/arriba-sobre.png"
      class="absolute inset-0 w-full pointer-events-none"
    >

    <!-- imagen -->
    <img 
      :src="sobre.src"
      class="absolute top-[60%] left-1/2 
         -translate-x-1/2 -translate-y-1/2
         transition-transform duration-500"
      :class="[sobre.size, 'hover:-translate-y-[130px]']"
    />

    <!-- parte d abajo -->
    <img 
      :src="sobre.solapa"
      class="absolute inset-0 w-full pointer-events-none"
    />

  </div>

</div>

    </main>
    
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
.titulus{
  font-family: "Bitcount Grid Double", system-ui;
  margin-top: 50px;
  margin-left: 30px;
}
</style>