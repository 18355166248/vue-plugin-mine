import jiangSwitch from './packages/jiang-switch'
import toggleMenu from './packages/toggle-menu'
import jiangLoading from './packages/jiang-loading'
import jiangCollpase from './packages/jiang-collapse'
import jiangCollpaseItem from './packages/jiang-collapse-item'

const components = [
  jiangSwitch,
  toggleMenu,
  jiangLoading,
  jiangCollpase,
  jiangCollpaseItem
]

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
