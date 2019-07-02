import Vue from 'vue'
import App from './App.vue'
import install from './index'

import './common/scss/common.less'

Vue.use(install)

Vue.prototype.$commonClass = 'jiang'

new Vue({
  el: '#app',
  render: h => h(App)
})
