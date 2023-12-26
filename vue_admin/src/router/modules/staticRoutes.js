export const statRouter = [
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/app/login/index.vue'),
    meta: {
      title: '登录'
    }
  },
  {
    path: '/layout',
    name: 'layout',
    component: () => import('@/layout/index.vue')
  }
]

export const notFoundRouter = {
  path: '/:pathMatch(.*)*', // 匹配所有路径
  name: 'NotFound',
  redirect: '/404'
}
export const errorRouter = [
  {
    path: '/404',
    name: '404',
    component: () => import('@/views/app/error/404.vue'),
    meta: {
      title: '404'
    }
  },
  {
    path: '/403',
    name: '403',
    component: () => import('@/views/app/error/403.vue'),
    meta: {
      title: '403'
    }
  },
  {
    path: '/500',
    name: '500',
    component: () => import('@/views/app/error/500.vue'),
    meta: {
      title: '500'
    }
  }
]
