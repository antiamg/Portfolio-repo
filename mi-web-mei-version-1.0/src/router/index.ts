import { createRouter, createWebHashHistory } from "vue-router";
import Portada from "@/paginae/portada/Portada.vue";
import Galeria from "@/paginae/galeríaTrabajos/Galeria.vue";
import Informacion from "@/paginae/información/Informacion.vue";
import Contacto from "@/paginae/contacto/Contacto.vue";
import Layout from "@/paginae/galeríaTrabajos/Layout.vue";
import Artwork from "@/paginae/galeríaTrabajos/Artwork.vue";
import Disponibilidad from "@/paginae/contacto/Disponibilidad.vue";
import Precios from "@/paginae/contacto/Precios.vue";



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
          path: 'galeria',
                component: Layout,
                children:[
                    
                    {
                        path: ':id',
                        name: 'artwork-detail',
                        component: Artwork
                    }
                ]
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