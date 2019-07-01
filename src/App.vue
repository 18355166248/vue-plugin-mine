<template>
  <div id="app">
    <toggle-menu :menu-list="menuList" :position="position"></toggle-menu>
    <jiang-switch v-model="isSwitch"></jiang-switch> 
    <!-- <jiang-loading :show="show"></jiang-loading> -->
    <div>12</div>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      isSwitch: false,
      menuList: [//name和src必填，且name唯一否则会报错
        {name: 'menu1', src: require('./assets/fei.png')},
        {name: 'menu2', src: require('./assets/gong.png')},
        {name: 'menu3', src: require('./assets/pan.png')},
        {name: 'menu4', src: require('./assets/user.png')},
        {name: 'menu5', src: require('./assets/xing.png')},
      ],
      position: 'RT',
      show: true
    }
  },
  created () {
    this.$jiangLoading.open()
    setTimeout(() => {
      // this.$jiangLoading.hide()
    }, 1000)
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

h1, h2 {
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
