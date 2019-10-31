<template>
  <div id="app">
    <!-- <toggle-menu :menu-list="menuList" :position="position"></toggle-menu> -->
    <!-- <jiang-switch v-model="isSwitch"></jiang-switch>  -->
    <!-- <jiang-loading :show="show"></jiang-loading> -->
    <!-- <jiang-collapse v-model="active"
                    @change="change"
                    :accordion="true">
      <jiang-collapse-item title="头部"
                           name="1"
                           :disabled="true">
        <div>与现实生活一致：与现实生活的流程、逻辑保持一致，遵循用户习惯的语言和概念；</div>
      </jiang-collapse-item>
      <jiang-collapse-item title="头部2"
                           name="2">
        <div>
          你可以在对象中传入更多属性来动态切换多个 class。此外，v-bind:class 指令也可以与普通的 class 属性共存。</div>
      </jiang-collapse-item>
      <jiang-collapse-item title="头部3"
                           name="3">
        <div>
          对于生产环境，我们推荐链接到一个明确的版本号和构建文件，以避免新版本造成的不可预期的破坏</div>
      </jiang-collapse-item>
    </jiang-collapse> -->

    <!-- 拖拽组件 -->
    <jiang-drag-item :data="componentData"
                     @finishDrag="finishDrag">
      <template v-slot:header="slotProps">
        <div class="topMenuBox">
          <div class="menuTitle"
               v-if="slotProps.item.name">{{slotProps.item.name}}</div>
          <div class="menuTitle"
               v-else> 默认标题 </div>
          <div class="dotBox">
            <div class="circleDot"></div>
            <div class="circleDot"></div>
            <div class="circleDot"></div>
          </div>
        </div>
      </template>
    </jiang-drag-item>
  </div>
</template>

<script>
import exampleChild1 from './components/exampleChild1'

export default {
  name: 'app',
  data() {
    return {
      isSwitch: false,
      menuList: [
        //name和src必填，且name唯一否则会报错
        { name: 'menu1', src: require('./assets/fei.png') },
        { name: 'menu2', src: require('./assets/gong.png') },
        { name: 'menu3', src: require('./assets/pan.png') },
        { name: 'menu4', src: require('./assets/user.png') },
        { name: 'menu5', src: require('./assets/xing.png') }
      ],
      position: 'RT',
      show: true,
      active: ['1'],

      componentData: [
        {
          positionNum: 1,
          name: '演示卡片1',
          id: 'card1',
          componentData: exampleChild1
        },
        {
          positionNum: 2,
          name: '演示卡片2',
          id: 'card2',
          componentData: exampleChild1
        },
        {
          positionNum: 3,
          name: '演示卡片3',
          id: 'card3',
          componentData: exampleChild1
        },
        {
          positionNum: 4,
          name: '演示卡片4',
          id: 'card4',
          componentData: exampleChild1
        },
        {
          positionNum: 5,
          name: '演示卡片4',
          id: 'card5',
          componentData: exampleChild1
        },{
          positionNum: 6,
          name: '演示卡片4',
          id: 'card6',
          componentData: exampleChild1
        },{
          positionNum: 7,
          name: '演示卡片4',
          id: 'card7',
          componentData: exampleChild1
        },{
          positionNum: 8,
          name: '演示卡片4',
          id: 'card8',
          componentData: exampleChild1
        },{
          positionNum: 9,
          name: '演示卡片4',
          id: 'card9',
          componentData: exampleChild1
        },{
          positionNum: 10,
          name: '演示卡片4',
          id: 'card10',
          componentData: exampleChild1
        }
      ],
      dragOptions: {
        colNum: 5, //一行有多少列
        cardOutsideWidth: 140, //单个卡片的外范围宽度
        cardOutsideHeight: 160, //单个卡片的外范围高度
        cardInsideWidth: 100, //单个卡片的内容宽度
        cardInsideHeight: 120, //单个卡片的内容高度
        mousedownTimer: null //用于记录卡片当前是否在过渡状态中的定时器
      }
    }
  },
  created() {
    // this.$jiangLoading.open()
    // setTimeout(() => {
    //   this.$jiangLoading.hide()
    // }, 1000)
  },
  methods: {
    change(value) {
      // console.log(value)
    },
    finishDrag(old, newVal, item) {
      // console.log(old, newVal, item)
    }
  },
  components: {
    exampleChild1
  }
}
</script>

<style scoped lang="less">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
}

.drag_box {
  .drag_main {
    box-sizing: border-box;
    .drag_header {
      height: 40px;
      line-height: 40px;
      padding-left: 5px;
      background-color: #666;
      box-sizing: border-box;
      color: #fff;
    }
    .drag_content {
      padding: 5px;
      box-sizing: border-box;
      font-size: 14px;
    }
  }
}
</style>
