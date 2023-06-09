import Vue from 'vue'
import App from './App.vue'

import './assets/style/index.scss'
import '../icon/index'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#root')
