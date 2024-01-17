import { createRouter, createWebHistory } from 'vue-router'
import INdex from '../views/pages/INdex.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'index',
      component: INdex
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/SerVice',
      name: 'SerVice',
      component: () => import('../views/pages/SerVice.vue')
    },
    {
      path: '/GaMe',
      name: 'GaMe',
      component: () => import('../views/pages/GaMe.vue')
    },
    {
      path: '/ContactUs',
      name: 'ContactUs',
      component: () => import('../views/pages/ContactUs.vue')
    }
  ]
})

export default router
