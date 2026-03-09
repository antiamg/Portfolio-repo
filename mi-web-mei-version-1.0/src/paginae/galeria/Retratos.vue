<script setup lang="ts">
import Button from '@/components/ui/button/Button.vue';
import {Phone, Mail, MapPin, Instagram, Music2Icon} from 'lucide-vue-next'

</script>

<template>
<header class="w-screen h-screen bg-[url('/imagines/fondo.png')] bg-cover bg-center">
 <Button class="ml-7 md:ml-5 py-5 md:px-6 md:text-l bg-transparent hover:bg-[#efa5b9] hover:text-[#faf6ec] text-[#efa5b9] transition-all">
         <RouterLink class="w-full text-center" to="/galeria">
              Atrás
         </RouterLink>
    </Button>   
</header>

<main class="min-h-screen">

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
        
          
          <Instagram class="md:w-10 md:h-10 hover:text-[#e2ffc7]"/>
          <Music2Icon class="md:w-10 md:h-10 hover:text-[#e2ffc7]"/>
          
              
        </div>
    </div>
  </div>
    </footer> 
</template>



<style scoped></style>