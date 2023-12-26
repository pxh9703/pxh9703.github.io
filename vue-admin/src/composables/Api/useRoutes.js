import http from '@/api/request.js'

export default function () {
  return {
    // 获取路由列表
    getRoutes(data) {
      return http.post('backend/admin/router/list', data)
    },
    // 添加路由
    addRoute(data) {
      return http.post('backend/admin/router/create', data)
    },
    // 编辑路由
    editRoute(data) {
      return http.post('backend/admin/router/update', data)
    },
    // 删除
    deleteRoute(data) {
      return http.post('backend/admin/router/delete', data)
    },
    // 禁用/启用
    changeStatus(data) {
      return http.post('backend/admin/router/enable', data)
    },
    // 获取路由详情
    // data: id  -> 1,2,3,4,5
    getRouteDetail(data) {
      return http.post('backend/admin/router/detail/' + data)
    },
    //  获取 树状菜单
    getTreeMenu(data) {
      return http.post('backend/admin/router/get-tree', data)
    }
  }
}
