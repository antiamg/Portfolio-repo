<script setup lang="ts">
import NavigatorPrimarius from '@/components/NavigatorPrimarius.vue';
import {Phone, Mail, MapPin, Instagram, Music2Icon} from 'lucide-vue-next'
import { useScrollToSection } from "@/composables/scrollToSection"

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
<div class="grid grid-cols-1 sm:grid-cols-2 mb-10 md:mb-1 transition-all">
  <img src="/imagines/sobre-info.png" alt="" class="w-[800px] mt-20 mx-auto">
  <div class="text-center sm:text-left sm:mt-25 md:mt-0">
    <h1 class="block text-[#413311] text-3xl md:mt-30 lg:mb-10 mb-5 md:text-4xl lg:text-6xl font-bold">Sobre mí:</h1>
    <span class="block text-[#413311] font-medium md:text-xl md:mb-3 lg:text-3xl cursor-pointer"
     @click="scrollToSection('presentacion')">
      1. ¿Quién soy?
    </span>

    <span class="block text-[#413311] font-medium md:text-xl md:mb-3 lg:text-3xl cursor-pointer"
    @click="scrollToSection('estudios')">
      2. Estudios
    </span>

    <span class="block text-[#413311] font-medium md:text-xl md:mb-3 lg:text-3xl cursor-pointer"
    @click="scrollToSection('habilidades')">
      3. Habilidades
    </span>

    <span class="block text-[#413311] font-medium md:text-xl md:mb-3 lg:text-3xl cursor-pointer"
    @click="scrollToSection('softwares')">
    4. Softwares
    </span>

    <span 
    class="block text-[#413311] font-medium md:text-xl md:mb-3 lg:text-3xl cursor-pointer"
    @click="scrollToSection('tecnicas')">
      5. Técnicas tradicionales
    </span> 
  </div>  
</div>

<div id="presentacion" class="text-center sm:text-left">
    <h1 class="block text-[#413311] ml-10 text-3xl md:mt-30 lg:mb-5 mb-5 md:text-5xl font-bold">¿Quién soy?</h1>
    <p class="block text-[#413311] ml-10  font-normal md:text-xl md:mb-3">1. Estudios</p> 
</div>

<div id="estudios" class="text-center sm:text-left">
    <h1 class="block text-[#413311] ml-10 text-3xl md:mt-30 lg:mb-5 mb-5 md:text-5xl font-bold">Estudios</h1>
    <p class="block text-[#413311] ml-10  font-normal md:text-xl md:mb-3">1. Estudios</p> 
</div>

<div id="habilidades" class="text-center sm:text-left">
    <h1 class="block text-[#413311] ml-10 text-3xl md:mt-30 lg:mb-5 mb-5 md:text-5xl font-bold">Habilidades</h1>
    <p class="block text-[#413311] ml-10  font-normal md:text-xl md:mb-3">1. Estudios</p> 
</div>

<div id="softwares" class="text-center sm:text-left">
    <h1 class="block text-[#413311] ml-10 text-3xl md:mt-30 lg:mb-5 mb-5 md:text-5xl font-bold">Softwares</h1>
    <p class="block text-[#413311] ml-10  font-normal md:text-xl md:mb-3">1. Estudios</p> 
</div>

<div id="tecnicas" class="text-center sm:text-left mb-45">
    <h1 class="block text-[#413311] ml-10 text-3xl md:mt-30 lg:mb-5 mb-5 md:text-5xl font-bold">Técnicas tracidionales</h1>
    <p class="block text-[#413311] ml-10 font-normal md:text-xl md:mb-3">1. Estudios</p> 
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