import http from '@/api/requese'

export default function () {
  return {
    getRoleList: (data) => {
      return http.post('/backend/admin/role/list', data)
    },
    // 添加角色
    createRole: (data) => {
      return http.post('/backend/admin/role/create', data)
    },
    // 更新角色
    updateRole: (data) => {
      return http.post('/backend/admin/role/update', data)
    },
    // 删除角色
    deleteRole: (data) => {
      return http.post('/backend/admin/role/delete', data)
    },
    // 更新角色权限
    setRolePermission: (data) => {
      return http.post('backend/admin/role/updateRoleRouter', data)
    },
    // 禁用/启用角色
    updateRoleStatus: (data) => {
      return http.post('backend/admin/role/updateRoleStatus', data)
    }
  }
}

// import http from '@/api/requese'

// export default function () {
//   return {
//     // 获取角色列表
//     getRoleList: (data) => {
//       return http.post('/backend/admin/role/list', data)
//     },
//     // 添加角色
//     addcreate: (data) => {
//       return http.post('/backend/admin/role/create', data)
//     },
//     // 修改/添加角色
//     updateRole: (data) => {
//       return http.post('/backend/admin/role/update', data)
//     },
//     // 删除角色/backend/admin/role/delete
//     deleteRole: (data) => {
//       return http.post('/backend/admin/role/delete', data)
//     }
//   }
// }
