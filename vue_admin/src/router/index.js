import { createRouter, createWebHistory } from 'vue-router'
import { gurad } from '@/router/gurad'
import ROUTERS from './modules/index'
import { useAuth } from '@/stores/auth'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [...ROUTERS]
})

function removeRoute(menu) {
  menu.forEach((item) => {
    if (item.children && item.children.length > 0) {
      removeRoute(item.children)
    }
    router.removeRoute(item.name)
  })
}

router.resetRouter = () => {
  const authStore = useAuth()
  removeRoute(authStore.menu)
}

gurad(router)
export default router
