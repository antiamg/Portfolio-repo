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
    <header>
        <NavigatorPrimarius :items="menuItems" home-route="/" />
    </header>
    <div class="titulus">
<h1>contacto</h1>
    </div>
</template>



<style scoped>
.titulus{
  
}
</style>