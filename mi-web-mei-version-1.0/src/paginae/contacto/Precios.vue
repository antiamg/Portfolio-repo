<script setup lang="ts">
import NavigatorPrimarius from '@/components/NavigatorPrimarius.vue';
import Button from '@/components/ui/button/Button.vue';


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
    label: 'Información',
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
    <Button class="ml-7 mt-2 md:mt-15 md:ml-5 py-5 md:px-6 md:text-l hover:bg-[#efa5b9] bg-white hover:text-[#faf6ec] text-[#efa5b9] transition-all">
         <RouterLink class="w-full text-center" to="/contacto">
              Atrás
         </RouterLink>
    </Button>
  </div>
  
<main class="flex flex-row gap-10 justify-start w-screen h-screen">
  <!-- imagenes -->
  <div class="flex flex-col w-1/2">
  <img class="rounded mt-10 mb-10 ml-10 w-70 md:w-65 lg:w-[320px] transition-all" src="/imagines/retrato-daniela.jpg" alt="">
  </div>
 
  <!-- texto -->
  <div class="w-full">
    <h3 class="font-bold mt-10 ml-10 lg:ml-0 md:text-xl lg:text-2xl text-left">Bolígrafo</h3>
    <p class="mt-3 ml-10 mr-5 text-sm md:text-lg lg:ml-0 lg:text-xl text-left md:leading-relaxed">
     <strong>Monocromo</strong> <br>
     -A5: 20€<br>
     -A4: 25€ <br> 
     <strong>Monocromo</strong> <br>
     -A5: 20€<br>
     -A4: 25€ 
    </p>
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