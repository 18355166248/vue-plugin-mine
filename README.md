# jiang-switch

> jiang-switch
> toggle-menu

## 使用方法

```bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm start

# build for production with minification
npm run build
```

## 这是模仿 element-ui 写的一个 switch 组件

## 新添加了一个 菜单展开收缩组件

1. 可以 import 引入到 main.js
   Vue.use(install) 即可
2. script 标签引入

## 使用 API

### switch

```html
<jiang-switch v-model="isSwitch"></jiang-switch> 
data () { 
  return { 
    isSwitch: false 
  }
}
```

### 菜单

```html
<toggle-menu :menu-list="menuList"></toggle-menu>

data () { return { isSwitch: false, menuList:
[//name和src必填，且name唯一否则会报错 {name: 'menu1', src:
require('./assets/fei.png')}, {name: 'menu2', src:
require('./assets/gong.png')}, {name: 'menu3', src:
require('./assets/pan.png')}, {name: 'menu4', src:
require('./assets/user.png')}, {name: 'menu5', src:
require('./assets/xing.png')}, ], position: 'RT' } }
```

### 加载动画( loading )
![loaidng](/public/img/loading.gif)
``` html
<jiang-loading :show="show"></jiang-loading>
参数:
1. show 控制显示隐藏
2. text 加载文本
3. icon 加载图标
4. progressColor 颜色样式
```
也可以使用js进行调用
``` js
vue.$jiangLoading.open()
vue.$jiangLoading.hide()
```

==持续更新==