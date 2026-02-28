<script setup lang="ts">
import NavigatorPrimarius from '@/components/NavigatorPrimarius.vue';
import { Card, CardContent } from '@/components/ui/card'
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
    <div>
<h1>galería</h1>
    </div>
</template>



<style scoped>

</style>