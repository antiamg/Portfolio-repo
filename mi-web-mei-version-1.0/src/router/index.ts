import { createRouter, createWebHashHistory } from "vue-router";
import Portada from "@/paginae/portada/Portada.vue";
import Galeria from "@/paginae/galeria/Galeria.vue";
import Informacion from "@/paginae/información/Informacion.vue";
import Contacto from "@/paginae/contacto/Contacto.vue";
import Artwork from "@/paginae/galeria/Artwork.vue";
import Disponibilidad from "@/paginae/contacto/Disponibilidad.vue";
import Precios from "@/paginae/contacto/Precios.vue";
import Retratos from "@/paginae/galeria/Retratos.vue";
import Carteleria from "@/paginae/galeria/Carteleria.vue";
import Comic from "@/paginae/galeria/Comic.vue";
import Diseno from "@/paginae/galeria/Diseno.vue";



export const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),

  routes: [
    {
      path: '/',
      name: 'portada',
      component: Portada
    },
    {
      path: '/galeria',
      children:[
        {
          path: '',
          name: 'galeria',
          component: Galeria
        },
        {
          path: 'retratos',
          name: 'retratos',
          component: Retratos
        },
        {
          path: 'carteleria',
          name: 'carteleria',
          component: Carteleria
        },
        {
          path: 'comic',
          name: 'comic',
          component: Comic
        },
        {
          path: 'diseno',
          name: 'diseno',
          component: Diseno
        },
        {
          path: ':id',
          name: 'artwork-detail',
          component: Artwork,
        },

      ]
    },
    {
      path: '/informacion',
      name: 'información',
      component: Informacion
    },
    {
      path: '/contacto',
      children:[
        {
          path: '',
          name: 'contacto',
          component: Contacto
        },
        {
          path: 'precios',
          name: 'precios',
          component: Precios
        },
        {
          path: 'disponibilidad',
          name: 'disponibilidad',
          component: Disponibilidad
        },

      ]
    },
    {
      path: '/:patchMatch(.*)',
      redirect: '/'
    }
  ]
})