<script setup lang="ts">
import Button from '@/components/ui/button/Button.vue';
import {Phone, Mail, MapPin, Instagram, Music2Icon} from 'lucide-vue-next'
import { detalles } from './data';
import { computed } from 'vue';
import { router } from '@/router';

const comic = computed(() =>
  detalles.filter(d => d.categoria === "comic")
)

const goToDetail = (id:number) => {
  router.push(`/galeria/${id}`)
}

</script>

<template>
<header class="w-screen">
 <Button class="ml-7 md:ml-5 py-5 md:px-6 md:text-l bg-transparent hover:bg-[#efa5b9] hover:text-[#faf6ec] text-[#efa5b9] transition-all">
         <RouterLink class="w-full text-center" to="/galeria">
              Atrás
         </RouterLink>
    </Button>   
</header>

<main class="min-h-screen">
<div class="grid grid-cols-1 md:grid-cols-2 gap-8 p-10">

  <div>
    <img src="/imagines/titulo-comic.png" alt="" class="mt-10">
  </div>
  <div
  v-for="obra in comic"
  :key="obra.id"
  class="cursor-pointer group"
  @click="goToDetail(obra.id)"
  >

  <div class="relative w-full aspect-square overflow-hidden rounded-xl">

    <!-- imagen -->
    <img
      :src="`/imagines/galeria/${obra.imago}`"
      class="w-full h-full object-cover transition duration-500 group-hover:scale-110"
    >

    <!-- overlay -->
    <div class="absolute inset-0 opacity-0 group-hover:opacity-90 transition flex items-center justify-center bg-[url('/imagines/fondo-verde.png')] h-full w-full object-cover bg-cover bg-center">
      <p class="text-3xl font-bold text-transparent bg-clip-text bg-white mix-blend-overlay">
        {{ obra.nomen }}
      </p>
    </div>

  </div>

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



<style scoped></style>