<script setup lang="ts">
import NavigatorPrimarius from '@/components/NavigatorPrimarius.vue';
import {Phone, Mail, MapPin, X, Instagram, Linkedin, MessageCircle} from 'lucide-vue-next'
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
    <div>
<h1>informacion</h1>
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
        
          <X class="md:w-10 md:h-10 hover:text-[#e2ffc7]"/>
          <Instagram class="md:w-10 md:h-10 hover:text-[#e2ffc7]"/>
          <Linkedin class="md:w-10 md:h-10 hover:text-[#e2ffc7]"/>
          <MessageCircle class="md:w-10 md:h-10 hover:text-[#e2ffc7]"/>
              
        </div>
    </div>
  </div>
    </footer> 
</template>



<style scoped>

</style>