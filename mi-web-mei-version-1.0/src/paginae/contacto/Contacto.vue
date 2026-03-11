<script setup lang="ts">
import NavigatorPrimarius from '@/components/NavigatorPrimarius.vue';
import {Phone, Mail, MapPin, Instagram,  Music2Icon} from 'lucide-vue-next'
import { Label } from '@/components/ui/label'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover'
import { Calendar } from '@/components/ui/calendar';
import type { DateValue } from 'reka-ui';
import { ref } from 'vue';

const dies = ref<DateValue>()
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

  <!-- Sección contacto -->
<section id="contactus" class="w-screen min-h-screen py-16">

  <div class="max-w-6xl mx-auto px-6 md:px-12">
    
    <!-- Contenedor principal -->
    <div class="flex flex-col md:flex-row gap-10">
      
      <!-- Bloque texto -->
      <div class="md:w-1/2 space-y-6">
        <h1 class="text-3xl md:text-4xl lg:text-5xl font-bold md:mt-15 transition-all text-[#413311] ">
          ¡Contacta conmigo!
        </h1>

        <p class="text-[#413311]  lg:text-xl md:text-justify leading-relaxed">
          Escríbeme por correo electrónico, por mis redes sociales o ponte en contacto conmigo a través de este formulario.
          Puedes consultar en la siguiente sección unos precios orientativos de las comisiones.
        </p>

        <div class="flex w-full gap-6 mt-10">
          

          <Button class="flex-1 py-5 md:px-6 md:text-lg bg-[#efa5b9] hover:bg-[#faf6ec] text-[#faf6ec] hover:text-[#efa5b9] transition-all">
            <RouterLink class="w-full text-center" to="/contacto/precios">
              Comisiones
            </RouterLink>
          </Button>
        </div>
        

      </div>

      <!-- Bloque formulario -->
      <div class="md:w-1/2 md:mt-15">
        <form class="space-y-6 text-[#413311]  bg-white p-8 rounded-lg shadow-lg">

          <div class="space-y-2">
            <Label for="nomen">Nombre</Label>
            <Input id="nomen" required />
          </div>

          <div class="space-y-2">
            <Label for="cognomen">Apellidos</Label>
            <Input id="cognomen" required />
          </div>

          <div class="space-y-2">
            <Select required>
              <SelectTrigger class="border-gray-200 bg-white text-gray-900">
                <SelectValue placeholder="Motivo" />
              </SelectTrigger>
              <SelectContent class="bg-white">
                <SelectItem value="peticion">
                  Petición de comisión
                </SelectItem>
                <SelectItem value="oferta">
                  Oferta laboral
                </SelectItem>
                <SelectItem value="otro">
                  Otro
                </SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div class="space-y-3">
            <Label class="text-m leading-4.5">
              En caso de solicitar una comisión, seleccione: 
            </Label>

            <Label class="text-m leading-4.5">
              1. La fecha aproximada en la que le gustaría recibirla:
            </Label>

            <Popover>
              <PopoverTrigger as-child>
                <Button variant="outline">
                  <span v-if="dies">
                    {{dies.day}}/{{dies.month}}/{{dies.year}}
                  </span>
                  <span class="text-gray-500 font-normal" v-else>
                    Seleccione una fecha
                  </span>
                </Button>
              </PopoverTrigger>
              <PopoverContent>
                <Calendar v-model="dies"/>
              </PopoverContent>
            </Popover>
          </div>

          <div>
            <Label class="text-m leading-4.5 mb-3">
              2. El tipo de comisión:
            </Label>
            
            <div class="space-y-2">
              <Select>
              <SelectTrigger class="border-gray-200 bg-white text-gray-900">
                <SelectValue placeholder="Tipo" />
              </SelectTrigger>
              <SelectContent class="bg-white">
                <SelectItem value="retrato">
                  Retrato
                </SelectItem>
                <SelectItem value="oferta">
                  Póster/cartel
                </SelectItem>
                <SelectItem value="diseno">
                  Diseño
                </SelectItem>
                <SelectItem value="otraCosa">
                  Otro
                </SelectItem>
              </SelectContent>
            </Select>
            </div>
          </div>

          <Button
            type="submit"
            class="w-full bg-[#efa5b9] hover:bg-[#faf6ec] text-[#faf6ec] hover:text-[#efa5b9] text-md mt-6"
          >
            Enviar solicitud
          </Button>

        </form>
      </div>

    </div>
  </div>
</section>

    

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



<style scoped>

</style>