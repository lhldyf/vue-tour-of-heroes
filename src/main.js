import Vue from 'vue'
import App from './App.vue'
import router from './router'
import { VueAxios } from './utils/request'
import './core/lazy_use'

Vue.config.productionTip = false

Vue.use(VueAxios)

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
