import jiangSwitch from './packages/jiang-switch'
import toggleMenu from './packages/toggle-menu'
import jiangLoading from './packages/jiang-loading'

const components = [jiangSwitch, toggleMenu, jiangLoading]

const install = function(Vue) {
  components.map(component => {
    Vue.component(component.name, component)
  })
}

// 支持使用标签的方式引入
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

export default { install }
