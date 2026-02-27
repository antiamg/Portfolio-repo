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
    <div>
<h1>informacion</h1>
    </div>
</template>



<style scoped>

</style>