import { documentTitle } from './documentTitle'
import Nprogress from 'nprogress'
import 'nprogress/nprogress.css'
import { getViewsFiles } from '../composables/useUtils'
import { useAuth } from '@/stores/auth'
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
    route.meta = typeof route.meta === 'string' ? JSON.parse(route.meta) : route.meta // 将meta字符串转换成对象
    if (route.children && route.children.length) {
      route.children = filterAsyncRouter(route.children, vueView)
    }
    return true
  })
}
const { getAllViewsVueFiles } = getViewsFiles() //获取views下的vue文件getViewsFiles
const vueView = getAllViewsVueFiles() // 获取所有views文件夹下的vue文件
export const gurad = (router) => {
  const whiteList = ['']
  router.beforeEach(async (to, from, next) => {
    documentTitle(to.meta.title)
    Nprogress.start({
      parant: '#app',
      speed: 500
    })
    documentTitle(to.meta.title)

    const authStore = useAuth()

    // 白名单处理
    if (whiteList.includes(to.path)) return next()
    // 如果访问的是登录页,并且已经登录,则跳转到首页或来源页
    if (to.path == '/login') {
      if (localStorage.getItem('token')) return next(from.fullPath)
      router.resetRouter() // 登录页,重置路由
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
        // console.log(routes)
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

    //
    // const { getAllViewsFiles } = getViewsFiles() //获取views下的vue文件getViewsFiles
    // //从接口获取动态菜单
    // const apiMenu = await authStore.getSlideMenuAction() //发起请求获取左侧菜单
    // authStore.setMenus(apiMenu)

    // // 动态路由添加
    // let globalRoutes = []
    // const vueFILES = getAllViewsFiles()

    // // 递归函数
    // const globalRoutes = function (routes) {
    //   // 递归函数
    //   let result = []
    //   routes.forEach((item) => {
    //     if (item.children && item.children.length > 0) {
    //       item.children = globalRoutes(item.children) || []
    //     }
    //     result.push({
    //       path: item.path,
    //       name: item.name,
    //       component: vueFILES[`/src/views${item.component}.vue`]
    //         ? vueFILES[`/src/views${item.component}.vue`]
    //         : () => import('@/views/app/error/404.vue'),
    //       children: item.children || []
    //     })
    //   })
    //   return result
    // }
    // const globalRoutesResult = globalRoutes(apiMenu)
    // globalRoutesResult.forEach((item) => {
    //   router.addRoute(item)
    // })
    // // 正常访问的路由,直接放行
    next()
    // 导航后置守卫
    // eslint-disable-next-line
    router.afterEach((to, from) => {
      // console.log('导航后置守卫', from, to)
      Nprogress.done()
    })
  })
}
