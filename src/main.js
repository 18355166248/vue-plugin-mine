import Vue from 'vue'
import App from './App.vue'
import install from './index'

Vue.use(install)

new Vue({
  el: '#app',
  render: h => h(App)
})
