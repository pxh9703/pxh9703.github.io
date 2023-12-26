import http from '@/api/requese'

export default function () {
  return {
    // 获取路由列表
    getRouterlist: (data) => {
      return http.post('/backend/admin/router/list', data)
    },
    // 添加路由
    createrouter: (data) => {
      return http.post('/backend/admin/router/create', data)
    },
    // 编辑路由update
    updateRouter: (data) => {
      return http.post('/backend/admin/router/update', data)
    },
    // 删除路由delete
    deleteRouter: (data) => {
      return http.post('/backend/admin/router/delete', data)
    },
    // 启用禁用路由
    enableRouter: (data) => {
      return http.post('/backend/admin/router/enable', data)
    },
    // 获取路由详情/detail/10
    detailRouter: (data) => {
      return http.post('/backend/admin/router/detail/10', data)
    },
    // 添加路由时获取树菜单
    gettree: (data) => {
      return http.post('/backend/admin/router/get-tree', data)
    }
  }
}
