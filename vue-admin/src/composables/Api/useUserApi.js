import http from '@/api/request.js'

export default function () {
  return {
    getUserInfo: (data) => {
      // 获取用户信息
      return http.post('/backend/admin/user/login', data)
    },

    // 获取用户列表
    getUserList: (data) => {
      return http.post('/backend/admin/user/usermanager/get-list', data)
    },
    // 添加用户
    createUser: (data) => {
      return http.post('/backend/admin/user/usermanager/create', data)
    },
    // 更新用户
    updateUser: (data) => {
      return http.post('/backend/admin/user/usermanager/update', data)
    },

    // 删除用户
    deleteUser: (data) => {
      return http.post('/backend/admin/user/usermanager/delete', data)
    },

    getRoleList: (data) => {
      return http.post('/backend/admin/user/usermanager/get-role-list', data)
    }
  }
}
