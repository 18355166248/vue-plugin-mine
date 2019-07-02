<template>
  <div id="app">
    <!-- <toggle-menu :menu-list="menuList" :position="position"></toggle-menu> -->
    <!-- <jiang-switch v-model="isSwitch"></jiang-switch>  -->
    <!-- <jiang-loading :show="show"></jiang-loading> -->
    <jiang-collapse v-model="active"
                    @change="change"
                    :accordion="true">
      <jiang-collapse-item title="头部"
                           name="1">
        <div>与现实生活一致：与现实生活的流程、逻辑保持一致，遵循用户习惯的语言和概念；</div>
      </jiang-collapse-item>
      <jiang-collapse-item title="头部2"
                           name="2">
        <div>
          你可以在对象中传入更多属性来动态切换多个 class。此外，v-bind:class 指令也可以与普通的 class 属性共存。当有如下模板:</div>
      </jiang-collapse-item>
    </jiang-collapse>
  </div>
</template>

<script>
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
      active: ['1']
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
      console.log(value)
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
}

h1,
h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
