<script setup lang="ts">
import NavigatorPrimarius from '@/components/NavigatorPrimarius.vue';
import { Card, CardContent } from '@/components/ui/card'
import {Phone, Mail, MapPin, X, Instagram, Linkedin, MessageCircle} from 'lucide-vue-next'
import { computed, ref } from 'vue';

import { detalles } from './data';
import { router } from '@/router';




const inPagina = 4

const nuncPagina = ref(1)

const totalPaginae = Math.ceil(detalles.length / inPagina)

const listaTrabajos = computed(() => {
    const inicio = (nuncPagina.value - 1)* inPagina
    const fin = inicio + inPagina
    return detalles.slice(inicio, fin)
})

const ireAdPaginam = (pagina: number) => {
    if(pagina>= 1 && pagina<= totalPaginae){
        nuncPagina.value = pagina
    }
}

const paginaNumeri: number[] = [...Array(totalPaginae)].map((_, i)=> i+1)
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

    <main class="w-full h-full mt-25">
      <div class="flex flex-wrap justify-center items-center ml-5 mr-5 md:ml-10 grid-cols-2 md:grid-cols-3 gap-8 mx-auto">
      <Card 
      class="cursor-pointer w-55 h-60 md:w-85 md:h-90 mb-15 hover:bg-[#faf6ec] hover:text-[#efa5b9] transition-color transition-all"
      v-for="detalle in listaTrabajos"
      >
        <CardContent 
        class="flex flex-col items-center gap-1 w-full px-0"
        @click="router.push(`/galeria/${detalle.id}`)"
        >
            <img 
            class="w-58 h-52 md:w-62 md:h-62 object-cover object-center mt-2 bg-[#faf6ec] rounded-md"
            :src= "`/imagines/galeria/${detalle.imago}`" alt="">
            <h2 class="font-medium text-lg">{{detalle.nomen}}</h2>
        </CardContent>
    </Card>
    </div>
    
    <div class="flex items-center justify-center gap-2 mt-10 mb-10">
        <button
            @click="ireAdPaginam(nuncPagina-1)"
            :disabled="nuncPagina===1"
            :class="['px-4 py-2 rounded-md font-medium transition-colors', 
                nuncPagina===1
                ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
                : 'bg-[#faf6ec] hover:bg-[#efa5b9] hover:text-[#faf6ec]'
            ]"
        >
            Anterior
        </button>

        <button
            v-for="pagina in paginaNumeri"
            @click="ireAdPaginam(pagina)"
            :class="['w-10 h-10 rounded-md font-medium transition-colors ', 
                nuncPagina === pagina 
                ? ' bg-[#efa5b9] text-[#faf6ec]'
                : 'bg-[#faf6ec] hover:bg-[#efa5b9] hover:text-[#faf6ec]'
            ]"
        >
            {{ pagina }}
        </button>

        <button
            @click="ireAdPaginam(nuncPagina+1)"
            :disabled="nuncPagina===totalPaginae"
            :class="['px-4 py-2 rounded-md font-medium transition-colors', 
                nuncPagina===totalPaginae
                ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
                : 'bg-[#faf6ec] hover:bg-[#efa5b9] hover:text-[#faf6ec]'
            ]"
        >
            Siguiente
        </button>
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
.titulus{
  font-family: "Bitcount Grid Double", system-ui;
  margin-top: 50px;
  margin-left: 30px;
}
</style>