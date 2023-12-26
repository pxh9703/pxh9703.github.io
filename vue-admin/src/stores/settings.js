import { defineStore } from 'pinia'

export const useSettings = defineStore('settings', {
  state: () => ({
    // 左侧菜单是否折叠
    isCollapse: false,
    // 左侧当前的激活菜单
    activeMenu: '/dashboard'
  }),
  actions: {
    // 设置左侧菜单的折叠状态
    setIsCollapse(isCollapse) {
      this.isCollapse = isCollapse
    },
    // 设置左侧当前的激活菜单
    setActiveMenu(activeMenu) {
      this.activeMenu = activeMenu
    }
  },
  getters: {},
  persist: {
    enabled: true,
    strategies: [
      {
        key: 'settings',
        storage: window.localStorage
      }
    ]
  }
})
