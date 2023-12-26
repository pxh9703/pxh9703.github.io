import { documentTitle } from '@/router/documentTitle'
import Nprogress from 'nprogress'
import 'nprogress/nprogress.css'
import { useAuth } from '@/stores/auth'
const whiteList = []
import { notFoundRouter } from './modules/staticRoutes'
/**
 * 匹配组件
 * @param {*} asyncRouterMap
 * @param {*} vueView
 */
function filterAsyncRouter(asyncRouterMap, vueView) {
  return asyncRouterMap.filter((route) => {
    if (route.component) {
      route.component = vueView[`/src/views${route.component}.vue`] || (() => import('@/views/app/error/404.vue'))
    }
    if (route.children && route.children.length) {
      route.children = filterAsyncRouter(route.children, vueView)
    }
    return true
  })
}
const { getAllViewsVueFiles } = getViewsFiles() // 获取所有views文件夹下的vue文件
// // 动态添加路由
const vueView = getAllViewsVueFiles() // 获取所有views文件夹下的vue文件

export const guard = (router) => {
  // 导航前置守卫
  router.beforeEach(async (to, from, next) => {
    Nprogress.start({
      parent: '#app',
      speed: 500
    })
    documentTitle(to.meta.title)

    const authStore = useAuth()

    // 白名单处理
    if (whiteList.includes(to.path)) return next()
    // 如果访问的是登录页,并且已经登录,则跳转到首页或来源页
    if (to.path == '/login') {
      if (localStorage.getItem('token')) return next(from.fullPath)
      router.resetRouter()
      return next()
    }
    // 判断是否在每次的路由跳转时,是否有token,如果没有则跳转到登录页
    if (!localStorage.getItem('token')) return next('/login')

    // 从接口来的动态菜单
    try {
      if (!authStore.menu.length) {
        const apiMenu = await authStore.getSlideMenuAction() // 发起请求,获取接口中的树状左侧菜单
        authStore.setMenus(apiMenu)

        // 无限递归,将接口中的树状菜单,转换成路由
        const routes = filterAsyncRouter(apiMenu, vueView)
        console.log(routes)
        // 添加动态路由
        routes.forEach((route) => {
          router.addRoute('layout', route)
        })

        // 添加404路由
        router.addRoute(notFoundRouter)

        return next({ ...to, replace: true }) // return 中断下方 展开要去的路由对象,并且替换当前路由,replace: true 代表替换当前路由,会再次触发路由守卫,确保addRoute添加的路由生效
      }
    } catch (error) {
      console.error(error)
    }

    // 正常访问的路由,直接放行
    next()
  })

  // 导航后置守卫
  // eslint-disable-next-line
  router.afterEach((to, from) => {
    // console.log('导航后置守卫', from, to)
    Nprogress.done()
  })
}
