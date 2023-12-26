import http from '@/api/requese'

export default function () {
  return {
    /**
     * @description 获取左侧菜单
     */
    getSlideMenu: () => {
      return http.post('/backend/admin/user/get-login-router')
    }
  }
}
