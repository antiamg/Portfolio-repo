<script setup lang="ts">
import NavigatorPrimarius from '@/components/NavigatorPrimarius.vue';



 const menuItems = [
  {
    label: 'Inicio',
    href: '',
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
    href: 'contacto',   
  },
 ] 
</script>


<template>
    <div>
        <NavigatorPrimarius :items="menuItems" home-route="/" />
    </div>
    
    <div class="flex flex-col transition-all h-screen w-screen bg-[#faf6ec] text-[#efaca5] text-5xl md:text-6xl lg:text-8xl justify-center items-center">   
<h1>Portfolio</h1>
    </div>
</template>



<style scoped>

</style>