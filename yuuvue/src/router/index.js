import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../HospitaIndex.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'HospitaIndex',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    }, {
      path: '/404',
      name: '404',
      component: () => import('../FourFour.vue')
    },{
      path: '/HospitaiHeader',
      name: '/HospitaiHeader',
      component: () => import('../components/HospitaiHeader.vue')
    },{
      path: '/PublicLow',
      name: '/PublicLow',
      component: () => import('../components/PublicLow.vue')
    },{
      path: '/AboutUs',
      name: '/AboutUs',
      component: () => import('../AboutUs.vue')
    },{
      path: '/SeRvice',
      name: '/SeRvice',
      component: () => import('../SeRvice.vue')
    },{
      path: '/ServiceList',
      name: '/ServiceList',
      component: () => import('../ServiceList.vue')
    },{
      path: '/BlOg',
      name: '/BlOg',
      component: () => import('../BlOg.vue')
    },{
      path: '/GalLery',
      name: '/GalLery',
      component: () => import('../GalLery.vue')
    },{
      path: '/PatiEnt',
      name: '/PatiEnt',
      component: () => import('../PatiEnt.vue')
    },{
      path: '/StyleGuide',
      name: '/StyleGuide',
      component: () => import('../StyleGuide.vue')
    },{
      path: '/ContactUs',
      name: '/ContactUs',
      component: () => import('../ContactUs.vue')
    },
  ]
})

export default router
