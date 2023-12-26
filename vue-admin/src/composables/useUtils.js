export const useUtils = () => {
  return {
    /**
     * @description 获取当前页面的title
     */
    getDocumentTitle: () => {
      console.log(document.title)
    }
  }
}

export const getViewsFiles = () => {
  return {
    /**
     * @description 获取所有views文件夹下的文件,包括js和vue文件
     */
    getAllViewsFiles() {
      return import.meta.glob('@/views/**/*.{vue,js}')
    },
    /**
     * @description 获取所有views文件夹下的vue文件
     */
    getAllViewsVueFiles() {
      return import.meta.glob('@/views/**/*.vue')
    },
    /**
     * @description 获取所有views文件夹下的js文件
     */
    getAllViewsJsFiles() {
      return import.meta.glob('@/views/**/*.js')
    },

    /**
     * @description 获取所有 /components/SvgIcon/icons 文件夹下的 svg 文件
     */
    getAllSvgIconsFiles() {
      const result = Object.keys(import.meta.glob('@/components/SvgIcon/icons/**/*.svg')).map((path) => {
        // 只匹配文件名，不匹配路径
        return 'icon-' + path.replace('/src/components/SvgIcon/icons/', '').replace('.svg', '')
      })
      return result
    }
  }
}
