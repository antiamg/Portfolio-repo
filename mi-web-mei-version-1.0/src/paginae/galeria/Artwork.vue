<script setup lang="ts">
import { ref } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import {detalles, type Detalle} from './data';


const route = useRoute()
const router = useRouter()

const detalle = ref<Detalle | undefined >(
    detalles.find(deta => deta.id === Number(route.params.id))
)
</script>

<template>
    <div  v-if="detalle" class="flex flex-col lg:flex-row lg:justify-between md:items-center w-full max-w-[1400px] md:mx-auto my-8 gap-8 px-5 md:px-20">
<div>
	<h1 class="titulus-quote"> 
		{{detalle.nomen}}
	</h1>

        <div class="info-quote">
            <p class="descriptione">
                {{ detalle.descriptione }}
            </p>

        </div>
</div>

<figure class="figure-quote">
  <img :src="`/imagines/galeria/${detalle.imago}`" alt="" />
</figure>

    </div>
</template>



<style scoped>
.titulus-quote {
  font-weight: 700;
  font-size: 1.875rem;
  line-height: 2.25rem;
  margin-bottom: 1.25rem;
}

@media (min-width: 1024px) {
  .titulus-quote {
    font-size: 3rem;
    line-height: 1;
  }
}

 
.descriptione {
  font-size: 1.25rem;
  line-height: 1.75rem;
  font-weight: 300;
  margin-bottom: 2.5rem;
  max-width: 48rem;
}
 
@media (min-width: 1024px) {
  .descriptione {
    font-size: 1.5rem;
    line-height: 2rem;
  }
}
 
@media (min-width: 1024px) {
  .info-quote {
    max-width: 48rem;
  }
}

.figure-quote {
  display: flex;
  justify-content: center;
  min-width: min-content;
}

.figure-quote > img {
  object-fit: contain;
}
</style>