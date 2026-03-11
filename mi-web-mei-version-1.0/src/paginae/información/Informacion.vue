<script setup lang="ts">
import NavigatorPrimarius from '@/components/NavigatorPrimarius.vue';
import {Phone, Mail, MapPin, Instagram, Music2Icon, Star} from 'lucide-vue-next'
import { useScrollToSection } from "@/composables/scrollToSection"
import StarBullet from "@/components/StarBullet.vue"

const { scrollToSection } = useScrollToSection()
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
</script>


<template>
    <header>
        <NavigatorPrimarius :items="menuItems" home-route="/" />
    </header>
    <main class="min-h-screen">
<div class="grid grid-cols-1 items-center sm:grid-cols-2 mb-10 md:mb-1 transition-all">
  <img src="/imagines/sobre-info.png" alt="" class="w-[800px] mt-20 mx-auto">
  <div class="text-center sm:text-left sm:mt-25 md:mt-0">
    <img class="w-[90%] ml-10 md:ml-0 md:mt-20" src="/imagines/titulo-info.png" alt="">
    <span class="block text-[#413311] font-medium md:text-xl md:mb-3 lg:text-3xl cursor-pointer"
     @click="scrollToSection('presentacion')">
      1. ¿Quién soy?
    </span>

    <span class="block text-[#413311] font-medium md:text-xl md:mb-3 lg:text-3xl cursor-pointer"
    @click="scrollToSection('estudios')">
      2. Estudios
    </span>

    <span class="block text-[#413311] font-medium md:text-xl md:mb-3 lg:text-3xl cursor-pointer"
    @click="scrollToSection('softwares')">
    3. Softwares
    </span>

    <span 
    class="block text-[#413311] font-medium md:text-xl md:mb-3 lg:text-3xl cursor-pointer"
    @click="scrollToSection('tecnicas')">
      4. Técnicas tradicionales
    </span> 
  </div>  
</div>

<div class="grid grid-cols-1">
  <div id="presentacion" class="grid grid-cols-2 items-center py-10  sm:text-left bg-[url('/imagines/fondo-verde.png')]">
    <div>
      <h1 class="block text-[#413311] ml-10 text-3xl md:mt-30 lg:mb-5 mb-5 md:text-5xl font-bold">¿Quién soy?</h1>
      <p class="block text-[#413311] text-left ml-10 mr-10 font-normal md:text-xl md:mb-3">Soy Antía Mouriño, una artista gallega de 19 años, aunque actualmente resido en Valencia. Me gustan la ilustración, el diseño y la fotografía.</p> 
    </div>

    <img class="md:w-[40%]" src="/imagines/nota-quien.png" alt="">
    
  </div>

  <div id="estudios" class="text-center py-20 md:py-10 sm:text-left bg-[url('/imagines/fondo-azul.png')]">
      <h1 class="block text-[#413311] ml-10 text-3xl md:mt-30 lg:mb-5 mb-5 md:text-5xl font-bold">Estudios</h1>
      <div class=" text-[#413311] ml-10 text-left mr-5 font-normal md:text-xl md:mb-3">
        <StarBullet>
          2º de Diseño y Tecnologías Creativas, Universitat Politècnica de València
        </StarBullet>

        <StarBullet>
          B2 en inglés
        </StarBullet>
      </div>
    
  </div>


  <div id="softwares" class="py-20 md:py-10 text-center sm:text-left bg-[url('/imagines/fondo.png')]">
      <h1 class="block text-[#413311] ml-10 mb-10 text-3xl md:mt-30 lg:mb-15  md:text-5xl font-bold">Softwares</h1>
      <div class="flex flex-row items-center text-[#413311] font-normal md:text-xl md:mb-3">
        <img class="ml-5 mr-5 md:ml-10 w-[30px] h-[30px] md:w-[45px] md:h-[45px]" src="/imagines/photoshop.png" alt="">
        <img class="ml-5 mr-5 w-[30px] h-[30px] md:w-[45px] md:h-[45px]" src="/imagines/illustrator.png" alt="">
        <img class="ml-5 mr-5 w-[30px] h-[30px] md:w-[45px] md:h-[45px]" src="/imagines/indesign.png" alt="">
        <img class="ml-5 mr-5 w-[30px] h-[30px] md:w-[45px] md:h-[45px]" src="/imagines/lightroom.png" alt="">
        <img class="ml-5 mr-5 w-[30px] h-[30px] md:w-[45px] md:h-[45px]" src="/imagines/premiere.png" alt="">
        <img class="ml-5 mr-5 w-[30px] h-[30px] md:w-[45px] md:h-[45px]" src="/imagines/blender.png" alt="">
      </div> 
  </div>

  <div id="tecnicas" class=" grid grid-cols-2 items-center py-10 sm:text-left  bg-[url('/imagines/fondo-rosa.png')]">
    <div>
      <h1 class="block text-[#413311] ml-10 text-3xl md:mt-30 lg:mb-5 mb-5 md:text-5xl font-bold">Técnicas tradicionales</h1>
      <div class="block text-left text-[#413311] ml-10 font-normal md:text-xl md:mb-3">
        <StarBullet>
          Acuarelas
        </StarBullet>
        <StarBullet>
          Gouache
        </StarBullet>
        <StarBullet>
          Acrílicos
        </StarBullet>
        <StarBullet>
          Rotuladores base alcohol
        </StarBullet>
        <StarBullet>
          Lápices de colores
        </StarBullet>
        <StarBullet>
          Pasteles
        </StarBullet>
      </div> 
    </div>

    <img src="/imagines/nota-tecnicas.png" alt="">
      
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

</style>