<script setup lang="ts">
import { useRoute } from "vue-router"
import { detalles } from "./data"
import Button from '@/components/ui/button/Button.vue';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel'

const route = useRoute()

const id = Number(route.params.id)

const obra = detalles.find(d => d.id === id)
</script>

<template>
<header class="w-screen">
 <Button class="ml-7 md:ml-5 py-5 md:px-6 md:text-l bg-transparent hover:bg-[#efa5b9] hover:text-[#faf6ec] text-[#efa5b9] transition-all">
         <RouterLink class="w-full text-center" :to="`/galeria/${obra?.categoria}`">
              Atrás
         </RouterLink>
    </Button>   
</header>

<div v-if="obra" class="max-w-4xl mx-auto p-10">
  <Carousel class="w-full mb-6">

  <CarouselContent>

    <CarouselItem
      v-for="(img, index) in obra.imagines"
      :key="index"
    >
      <img
        :src="`/imagines/galeria/${img}`"
        class="w-full rounded-xl object-cover"
      >
    </CarouselItem>

  </CarouselContent>

  <CarouselPrevious />
  <CarouselNext />

</Carousel>

  <h1 class="text-2xl font-bold mb-4">
    {{ obra.nomen }}
  </h1>

  <p>
    {{ obra.descriptione }}
  </p>
</div>
</template>

<style scoped></style>