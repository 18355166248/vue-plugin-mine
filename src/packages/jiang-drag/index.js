import jiangDrag from './jiang-Drag'

// 为组件提供 install 安装方法，供按需引入
jiangDrag.install = function(Vue) {
  console.log(12, 'jiangDrag')
  Vue.component(jiangDrag.name, jiangDrag)
}

export default jiangDrag
