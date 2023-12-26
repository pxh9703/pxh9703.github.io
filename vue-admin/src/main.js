import { createApp } from 'vue'

import App from './App.vue'
import router from './router'

import elementIcon from '@/plugins/element.js'
import '@/components/index.js'
import pinia from './plugins/pinia'

import '@/styles/main.scss'

function initApp() {
  const app = createApp(App)

  app.use(pinia)
  app.use(elementIcon)
  app.use(router)

  app.mount('#app')
}
initApp()
