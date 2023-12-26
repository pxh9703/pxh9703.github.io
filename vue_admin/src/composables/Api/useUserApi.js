import http from '@/api/requese'

export default function () {
  return {
    getUserInfo: (data) => {
      // 获取用户信息
      return http.post('/backend/admin/user/login', data)
    },
    // 获取用户列表
    getuserlist: (data) => {
      return http.post('/backend/admin/user/usermanager/get-list', data)
    },
    // 管理员账号添加
    UserAdd: (data) => {
      return http.post('/backend/admin/user/usermanager/create', data)
    },
    // 修改用户信息
    updataUser: (data) => {
      return http.post('/backend/admin/user/usermanager/update', data)
    },
    // 删除用户信息
    deleteUser: (data) => {
      return http.post('/backend/admin/user/usermanager/delete', data)
    }
  }
}
