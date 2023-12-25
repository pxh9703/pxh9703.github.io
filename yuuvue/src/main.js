import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import Element from 'element-plus'
import 'element-plus/dist/index.css'
import App from './App.vue'
import router from './router'
import "swiper/swiper.min.css"
const app = createApp(App)
app.use(Element)
app.use(createPinia())
app.use(router)

app.mount('#app')
