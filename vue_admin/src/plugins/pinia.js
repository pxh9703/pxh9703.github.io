import { createPinia } from 'pinia'
import piniaPluginPersistedstate from 'pinia-plugin-storage'

export default {
  install: (app) => {
    const pinia = createPinia()
    pinia.use(piniaPluginPersistedstate)
    app.use(pinia)
  }
}
