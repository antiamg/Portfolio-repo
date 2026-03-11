<script setup lang="ts">
import NavigatorPrimarius from '@/components/NavigatorPrimarius.vue';
import {Phone, Mail, MapPin, Instagram, Music2Icon} from 'lucide-vue-next'
import { ref } from 'vue';
import { useRouter } from 'vue-router'

const router = useRouter()

const isHover = ref(false)
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

 const goTo = (route: string) => {
  router.push(route)
}
</script>


<template>
    <header>
        <!-- <NavigatorPrimarius :items="menuItems" home-route="/" /> -->
    </header>
    
    <main class="flex flex-col h-screen w-screen text-[#efa5b9] justify-center items-center">

  <div 
  class="relative w-[330px] h-[330px] md:w-[500px] md:h-[500px] transition-all "
  @mouseenter="isHover = true"
  @mouseleave="isHover = false"
  >
    
    <img 
      src="/imagines/arriba-sobre-PORTADA.png"
      alt=""
      class="absolute inset-0 w-full pointer-events-none"
    >

    <img 
      src="/imagines/texto-portada.png"
      alt=""
      class="absolute inset-0 w-full transition-transform duration-500 ease-out"
      :class="{'-translate-y-[110px] md:-translate-y-[160px]': isHover }"
    />

    <img 
      src="/imagines/sobre-mi.png"
      alt=""
      @click="goTo('informacion')"
      class="absolute w-[100px] left-[15px] top-[265px] md:left-[45px] md:top-[380px] md:w-[154px] md:h-[137px] transition-all transition-transform duration-500 ease-out"
      :class="{'-translate-y-[335px] -translate-x-[55px] md:-translate-y-[420px] md:-translate-x-[70px]': isHover }"
    />

    <img 
      src="/imagines/boton-galeria.png"
      alt=""
      @click="goTo('galeria')"
      class="absolute w-[100px] left-[100px] top-[265px] md:left-[150px] md:top-[380px] md:w-[154px] md:h-[137px] transition-all transition-transform duration-500 ease-out"
      :class="{'-translate-y-[400px] md:-translate-y-[510px]': isHover }"
    />

    <img 
      src="/imagines/boton-contacto.png"
      alt=""
      @click="goTo('contacto')"
      class="absolute w-[100px] left-[210px] top-[265px] md:left-[320px] md:top-[380px] md:w-[154px] md:h-[137px] transition-all transition-transform duration-500 ease-out"
      :class="{'-translate-y-[340px] -translate-x-[-50px] md:-translate-y-[420px] md:-translate-x-[-50px]': isHover }"
    />



    <img 
      src="/imagines/abajo-sobre.png"
      alt=""
      class="absolute inset-0 w-full pointer-events-none"
    >

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
}

</style>