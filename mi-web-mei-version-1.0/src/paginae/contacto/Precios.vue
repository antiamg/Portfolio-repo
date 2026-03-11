<script setup lang="ts">
import NavigatorPrimarius from '@/components/NavigatorPrimarius.vue';
import StarBullet from '@/components/StarBullet.vue';
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
<div>
    <Button class="ml-7 mt-2 md:mt-15 md:ml-5 py-5 md:px-6 md:text-l hover:bg-[#efa5b9] bg-transparent hover:text-[#faf6ec] text-[#efa5b9] transition-all">
         <RouterLink class="w-full text-center" to="/contacto">
              Atrás
         </RouterLink>
    </Button>
  </div>
  
<main class="w-screen min-h-screen">

  <div class="max-w-4xl mx-auto px-6">
<div class="md:ml-50 mt-10 mb-10 grid grid-cols-[auto_1fr] gap-6 items-start">
    <div class="w-[180px] md:w-[220px] aspect-[4/5] overflow-hidden rounded-xl">
      <img 
        src="/imagines/galeria/mama-boli-cerca.png"
        class="w-full h-full object-cover"
        alt=""
      >
    </div>
    <div>
      <h1 class="font-bold md:text-xl text-[#413311]">Bolígrafo</h1>
      <h3 class="font-medium mt-3 text-[#413311]"> Un color</h3>
      <StarBullet>A5: 20€</StarBullet>
      <StarBullet>A4: 25€</StarBullet>
      <h3 class="font-medium mt-3 text-[#413311]">Varios</h3>
      <StarBullet>A5: 30€</StarBullet>
      <StarBullet>A4: 35€</StarBullet>


    </div>
  </div>

  <div class="md:ml-50  mb-10 grid grid-cols-[auto_1fr] gap-6 items-start">
    <div class="w-[180px] md:w-[220px] aspect-[4/5] overflow-hidden rounded-xl">
      <img 
        src="/imagines/galeria/telefono.png"
        class="w-full h-full object-cover"
        alt=""
      >
    </div>
    <div>
      <h1 class="font-bold md:text-xl text-[#413311]">Lápices</h1>
      <h3 class="font-medium mt-3 text-[#413311]"> Un color</h3>
      <StarBullet>A5: 20€</StarBullet>
      <StarBullet>A4: 25€</StarBullet>
      <h3 class="font-medium mt-3 text-[#413311]">Varios</h3>
      <StarBullet>A5: 30€</StarBullet>
      <StarBullet>A4: 35€</StarBullet>
    </div>
  </div>

  <div class="md:ml-50  mb-10 grid grid-cols-[auto_1fr] gap-6 items-start">
    <div class="w-[180px] md:w-[220px] aspect-[4/5] overflow-hidden rounded-xl">
      <img 
        src="/imagines/galeria/retrato-daniela-corregido.png"
        class="w-full h-full object-cover"
        alt=""
      >
    </div>
    <div>
      <h1 class="font-bold md:mr-45 md:text-xl text-[#413311]">Técnica mixta: lápices y acuarelas</h1>
      <StarBullet class="mt-3">A5: 35€</StarBullet>
      <StarBullet>A4: 40€</StarBullet>
    </div>
  </div>

  <div class="md:ml-50  mb-10 grid grid-cols-[auto_1fr] gap-6 items-start">
    <div class="w-[180px] md:w-[220px] aspect-[4/5] overflow-hidden rounded-xl">
      <img 
        src="/imagines/galeria/avo-gouache-cerca.png"
        class="w-full h-full object-cover"
        alt=""
      >
    </div>
    <div>
      <h1 class="font-bold md:text-xl text-[#413311]">Gouache</h1>
      <StarBullet class="mt-3">A5: 40€</StarBullet>
      <StarBullet>A4: 45€</StarBullet>
    </div>
  </div>

  <div class="md:ml-50  mb-10 grid grid-cols-[auto_1fr] gap-6 items-start">
    <div class="w-[180px] md:w-[220px] aspect-[4/5] overflow-hidden rounded-xl">
      <img 
        src="/imagines/galeria/mama-digital.PNG"
        class="w-full h-full object-cover"
        alt=""
      >
    </div>
    <div>
      <h1 class="font-bold md:text-xl text-[#413311]">Digital</h1>
      <StarBullet class="mt-3 mr-25 md:mr-65">El precio dependerá de qué quieras exactamente. ¡Ponte en contacto conmigo para ver los detalles!</StarBullet>

    </div>
  </div>

  </div>
  
</main>


<footer class="w-full h-full bg-[#efa5b9] text-[#faf6ec] text-left py-8">
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