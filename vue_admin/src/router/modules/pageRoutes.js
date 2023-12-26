export const IndexRouter = [
  {
    path: '/',
    name: 'Home',
    redirect: '/dashboard',
    component: () => import('@/layout/index.vue'),
    children: [
      {
        path: '/dashboard',
        name: 'dashboard',
        component: () => import('@/views/dashboard/index.vue')
      }
    ]
  },
  // {
  //   path: '/table',
  //   name: 'Table',
  //   component: () => import('@/layout/index.vue'),
  //   children: [
  //     {
  //       path: '/table/basic',
  //       name: 'BasicTable',
  //       component: () => import('@/views/table/basic.vue')
  //     }
  // {
  //   path: '/table/dynamic',
  //   name: 'DynamicTable',
  //   component: () => import('@/views/table/dynamic.vue')
  // }
  //   ]
  // },
  {
    path: '/permission',
    name: 'permission',
    component: () => import('@/layout/index.vue'),
    redirect: '/users',
    children: [
      {
        path: '/users',
        name: 'users',
        component: () => import('@/views/permission/user/index.vue')
      },
      {
        path: '/role',
        name: 'role',
        component: () => import('@/views/permission/role/index.vue')
      },
      {
        path: '/route',
        name: 'route',
        component: () => import('@/views/permission/router/index.vue')
      }
    ]
  },
  {
    path: '/article/index',
    name: 'article',
    component: () => import('@/layout/index.vue'),
    children: [
      {
        path: '/article/index',
        name: 'article',
        component: () => import('@/views/article/index.vue')
      },
      {
        path: '/article/cate',
        name: 'cate',
        component: () => import('@/views/article/cate.vue')
      }
    ]
  }
]
