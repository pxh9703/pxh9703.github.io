export const IndexRouter = [
 
  {
    path: '/',
    name: 'Home',
    redirect: '/dashboard', // 重定向,当浏览器匹配到 / 路径,则重定向到 /dashboard 路径
    component: () => import('@/layout/index.vue'),
    children: [
      {
        path: '/dashboard',
        name: 'Dashboard',
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
  //     },
  //     {
  //       path: '/table/dynamic',
  //       name: 'DynamicTable',
  //       component: () => import('@/views/table/dynamic.vue')
  //     }
  //   ]
  // },
  {
    path: '/permission',
    name: 'Permission',
    component: () => import('@/layout/index.vue'),
    redirect: '/users',
    children: [
      {
        path: '/users',
        name: 'User',
        component: () => import('@/views/permission/user/index.vue')
      },
      {
        path: '/roles',
        name: 'Role',
        component: () => import('@/views/permission/role/index.vue')
      },
      {
        path: '/menus',
        name: 'Menu',
        component: () => import('@/views/permission/router/index.vue')
      }
    ]
  }
]
