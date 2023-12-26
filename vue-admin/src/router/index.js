import { createRouter, createWebHistory } from 'vue-router'
import { guard } from '@/router/guard'

import ROUTES from './modules/index'
import { useAuth } from '@/stores/auth'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: ROUTES
})

router.resetRouter = () => {
 useAuth().menu.forEach((item) => {
   if (item.children && item.children.length > 0) {
     item.children.forEach((child) => {
       router.hasRoute(child.name) && router.removeRoute(child.name)
     })
   }
   router.hasRoute(item.name) && router.removeRoute(item.name)
 })
}
guard(router)

export default router
