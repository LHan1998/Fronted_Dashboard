import Vue from 'vue'
import App from './App.vue'
import router from './router'
import 'element-ui/lib/index'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import locale from 'element-ui/lib/locale/lang/en' // lang i18n
import echarts from 'echarts'

Vue.prototype.$echarts = echarts

Vue.config.productionTip = false
Vue.use(ElementUI, { locale })

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
