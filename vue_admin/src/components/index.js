import SvgIcon from './SvgIcon/index.vue'
import 'virtual:svg-icons-register'

export default {
  install(app) {
    app.component('SvgIcon', SvgIcon)
    //
    console.log('Global components registered')
  }
}
