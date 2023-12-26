import { defineStore } from 'pinia'
const permissionApi = usePermission()
export const useAuth = defineStore('auth', {
  state: () => ({
    // 左侧权限菜单
    menu: []
  }),
  actions: {
    // 设置左侧菜单的折叠状态
    setMenus(menus) {
      this.menu = menus
    },

    // 发起请求,获取左侧菜单
    getSlideMenuAction() {
      return permissionApi.getSlideMenu()
    }
  }
})
