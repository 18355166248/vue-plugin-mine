<template>
  <div id="toggleMenu">
    <div class="menu" @click="toggleMenu" ref="menu">
      <img :src="menuImg">
    </div>
    <div class="menu-child">
      <div v-for='item in menuList' :id="item.name" :key='item.name'>
        <img :src="item.src">
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'toggle-menu',
    props: {
      menuList: {
        type: Array,
        default: []
      },
      menuSize: {
        type: Number,
        default: 30
      },
      menuBgc: {
        type: String,
        default: '#fff'
      },
      position: {
        type: String,
        default: 'LB' // 左上LT 右上RT 右下RB 左下LB
      },
      radius: {
        type: Number,
        default: 150
      }
    },
    data() {
      return {
        menuImg: require('./menu.png'),
        onoff: true, // 菜单打开关闭状态
        direction: ['+', '+'],
      }
    },
    mounted() {
      this.$refs.menu.style.height = this.menuSize + 'px'
      this.$refs.menu.style.width = this.menuSize + 'px'
      this.$refs.menu.style.lineheight = this.menuSize + 'px'
      this.$refs.menu.style.bacgroundColor = this.menuBgc
      this.menuList.forEach(value => {
        let ele = document.getElementById(value.name)
        ele.style.height = .8 * this.menuSize + 'px'
        ele.style.width = .8 * this.menuSize + 'px'
        ele.style.lineheight = .8 * this.menuSize + 'px'
        ele.style.bacgroundColor = this.menuBgc
      })
      // 根据position  判断位置
      switch(this.position) {
        case 'LT':
          this.$refs.menu.style.top  = 20 + 'px'
          this.$refs.menu.style.left  = 20 + 'px'
          this.menuList.forEach(value => {
            let ele = document.getElementById(value.name)
            ele.style.top = 22 + 'px'
            ele.style.left = 22 + 'px'
          })
          this.direction = ['+', '+']
          break
        case 'RT':
          this.$refs.menu.style.top  = 20 + 'px'
          this.$refs.menu.style.right  = 20 + 'px'
          this.menuList.forEach(value => {
            let ele = document.getElementById(value.name)
            ele.style.top = 22 + 'px'
            ele.style.right = 22 + 'px'
          })
          this.direction = ['-', '+']
          break
        case 'RB':
          this.$refs.menu.style.bottom  = 20 + 'px'
          this.$refs.menu.style.right  = 20 + 'px'
          this.menuList.forEach(value => {
            let ele = document.getElementById(value.name)
            ele.style.bottom = 22 + 'px'
            ele.style.right = 22 + 'px'
          })
          this.direction = ['-', '-']
          break
        case 'LB':
          console.log(432)
          this.$refs.menu.style.bottom  = 20 + 'px'
          this.$refs.menu.style.left  = 20 + 'px'
          this.menuList.forEach(value => {
            let ele = document.getElementById(value.name)
            ele.style.bottom = 22 + 'px'
            ele.style.left = 22 + 'px'
          })
          this.direction = ['+', '-']
          break
      }
    },
    methods: {
      toggleMenu() {
        if (this.onoff) {
          this.$refs.menu.style.transform = 'rotate(0)'
          this.activeMenuChild(true)
        } else {
          this.$refs.menu.style.transform = 'rotate(180deg)'
          this.activeMenuChild(false)
        }
        this.onoff = !this.onoff
      },
      // 动图展开小菜单
      activeMenuChild(bool) {
        this.menuList.forEach((v, i)=> {
          let ele = document.getElementById(v.name)
          ele.style.transitionDuration = '200ms'
          if (bool) {
            setTimeout(() => {
              const deg = (90 / (this.menuList.length - 1)) * i
              const radian = deg * Math.PI / 180
              const x = Math.sin(radian) * this.radius
              const y = Math.cos(radian) * this.radius
              ele.style.transform = `translate(${this.direction[0]}${x}px, ${this.direction[1]}${y}px)`
            }, 100 * i)
          } else {
            ele.style.transform = `translate(0, 0)`
          }
        })
      }
    }
  }
</script>

<style scoped lang='less'>
  .menu {
    cursor: pointer;
    position: absolute;
    z-index: 100;
    background-color: white;
    transition-duration: 400ms;
    img {
      width: 100%;
      vertical-align: middle;
    }
  }
  .menu-child {
    > div {
      position: absolute;
      z-index: 99;
      img {
        width: 100%;
        vertical-align: middle;
      }
    }
  }
  #toggleMenu {
    position: fixed;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
  }
</style>
