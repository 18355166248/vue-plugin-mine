# jiang-element

> jiang-switch
> toggle-menu
> jiang-loading
> jiang-collapse jiang-collapse-item

喜欢的可以关注下我的 gitHub 和博客
[gitHub](https://github.com/18355166248/vue-plugin-mine)
[博客](https://18355166248.github.io/)

---

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

![loaidng](https://github.com/18355166248/vue-plugin-mine/raw/master/public/img/switch.gif)

```html
<jiang-switch v-model="isSwitch"></jiang-switch> data () { return { isSwitch:
false } }
```

### 菜单

![loaidng](https://github.com/18355166248/vue-plugin-mine/raw/master/public/img/menu.gif)

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

![loaidng](https://github.com/18355166248/vue-plugin-mine/raw/master/public/img/loading.gif)

```html
<jiang-loading :show="show"></jiang-loading> 参数: 1. show 控制显示隐藏 2. text
加载文本 3. icon 加载图标 4. progressColor 颜色样式
```

也可以使用 js 进行调用

```js
vue.$jiangLoading.open()
vue.$jiangLoading.hide()
```

### 折叠面板( collapse )

```html
<jiang-collapse>
  <jiang-collapse-item></jiang-collapse-item>
</jiang-collapse>
```

![collapse](https://github.com/18355166248/vue-plugin-mine/raw/master/public/img/collapse.gif)

```
参数:

jiang-collapse Attribute
1. value/v-model 当前激活的面板   string/array
2. accordion     手风琴模式      boolean

jiang-collapse Events
1. change        激活面板时调用

jiang-collapse-item Attribute
name             唯一标识符       string/number
title            标题            string
disabled         是否禁用         boolean

```

### 拖拽排序

```html
<jiang-drag :data="componentData" @finishDrag="finishDrag">
  <template v-slot:header="slotProps">
    <div class="topMenuBox">
      <div class="menuTitle" v-if="slotProps.item.name">
        {{slotProps.item.name}}
      </div>
      <div class="menuTitle" v-else>默认标题</div>
    </div>
  </template>
</jiang-drag>
```

![collapse](https://github.com/18355166248/vue-plugin-mine/raw/master/public/img/drag.gif)

```
参数:
jiang-collapse Attribute
1. data 渲染列表 Array
2. colNum 一行几列  Number
3. cardOutsideWidth 每块卡片的外部宽度包括空白处
4. cardOutsideHeight  每块卡片的外部高度包括空白处
5. cardInsideWidth  每块卡片的宽度
6. cardInsideHeight 每块卡片的高度


jiang-collapse Events
1. startDrag   移动触发
2. swicthPosition  重新计算盒子位置触发
3. finishDrag  移动完毕触发
```

==持续更新==
