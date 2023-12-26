import * as ElementPlusIconsVue from '@element-plus/icons-vue'

const installElementPlus = (app) => {
  for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component)
  }
}

export default {
  install: (app) => {
    installElementPlus(app)
  }
}
