<template>
  <div :class="$commonClass + '-drag'" :id="$commonClass + '-drag'">
    <div
      :id="dragItem.id"
      :class="$commonClass + '-drag-item'"
      @mousedown="touchStart($event, dragItem, dragIndex)"
      v-for="(dragItem, dragIndex) in data"
      :key="dragItem.id"
    >
      <div class="header">{{ dragItem.name }}</div>
      <div class="content">
        <component
          v-if="dragItem.componentData"
          :is="dragItem.componentData"
          :itemData="dragItem"
        ></component>
        <div v-else>
          {{ dragItem.content }}
        </div>
      </div>
      <div class="footer"></div>
    </div>
  </div>
</template>

<script>
import _ from 'lodash'
const commonMargin = 20

export default {
  name: 'jiangDrag',
  props: {
    list: {
      type: Array,
      default: []
    }
  },
  data() {
    return {
      data: [],
      commonMargin,
      selectdom: null,
      dragItem: {},
      startMousePosition: {
        x: 0,
        y: 0
      },
      startMovePosition: {
        top: 0,
        left: 0
      },
      startItem: {
        width: 0,
        height: 0
      },
      commonItemStyle: { marginBottom: commonMargin + 'px' },
      boxTop: 0
    }
  },
  created() {
    this.data = _.cloneDeep(this.list)
  },
  mounted() {
    const { top, height, width } = document
      .getElementById(this.$commonClass + '-drag')
      .getBoundingClientRect()

    this.boxTop = top

    this.data.forEach((v, i) => {
      this.getDragItemStyle(v.id, i)
    })
  },
  methods: {
    touchStart(event, dragItem, dragIndex) {
      // 记录鼠标移动的记录
      this.startMovePosition = {
        top: 0,
        left: 0
      }

      // 盒子开始的位置
      this.startItemPosition = {
        x: event.clientX,
        y: event.clientY
      }

      this.selectdom = document.getElementById(dragItem.id)

      this.dragItem = dragItem
      this.dragIndex = dragIndex

      const { width, height, x, y } = this.selectdom.getBoundingClientRect()

      // 移动盒子宽高
      this.startMoveItem = {
        width,
        height,
        x,
        y
      }

      document.addEventListener('mousemove', this.mouseMoveListener)
      document.addEventListener('mouseup', this.mouseUpListener)
    },

    mouseMoveListener(event) {
      // 记录鼠标信息
      const originMousePosition = {
        x: event.clientX - this.startItemPosition.x + this.startMoveItem.x,
        y: event.clientY - this.startItemPosition.y + this.startMoveItem.y
      }

      this.startItem = {
        width: this.startMoveItem.width,
        height: this.startMoveItem.height
      }

      this.selectdom.style.position = 'fixed'
      this.selectdom.style.zIndex = '999'
      this.selectdom.style.top = originMousePosition.y + 'px'
      this.selectdom.style.left = originMousePosition.x + 'px'
      this.selectdom.style.width = this.startMoveItem.width + 'px'
      this.selectdom.style.heihgt = this.startMoveItem.height + 'px'

      this.data.forEach((v, i) => {
        this.getDragItemStyle(v.id, i)
      })

      if (!this.moveTimer) {
        this.moveTimer = setTimeout(() => {
          this.moveIndex = this.getDragItemIndex()

          clearTimeout(this.moveTimer)
          this.moveTimer = null
        }, 300)
      }
    },

    // 松开鼠标
    mouseUpListener(event) {
      document.removeEventListener('mousemove', this.mouseMoveListener)
      document.removeEventListener('mouseup', this.mouseUpListener)

      const data = _.cloneDeep(this.data)

      const moveItem = data.splice(this.dragIndex, 1)

      this.data = data

      this.data.splice(this.moveIndex, 0, moveItem[0])

      this.$nextTick(() => {
        this.data.forEach((v, i) => {
          this.getDragItemStyle(v.id, i, true)
        })

        this.moveIndex = null
        this.selectdom = null
      })
    },

    /**
     * 格式化当前列表中每行样式
     * @params id {string|number} 拖拽的id
     * @params index {number} 每行元素位于data数据中的索引
     */
    getDragItemStyle(id, index, reset) {
      const itemDom = document.getElementById(id)

      if (reset && itemDom.style) {
        itemDom.style.position = 'static'
        itemDom.style.transform = 'none'
        itemDom.style.marginBottom = this.commonMargin + 'px'
        itemDom.style.transition = 'none'

        return
      }

      if (this.dragItem.id === id) return (itemDom.style.marginBottom = 0)

      if (Object.keys(this.dragItem).length === 0) {
        itemDom.style.marginBottom = this.commonMargin + 'px'
        itemDom.style.transform = `translate(0, ${this.startItem.height}px)`

        return
      }

      const curIndex = this.data.findIndex(v => v.id === this.dragItem.id)

      if ((this.moveIndex || this.moveIndex === 0) && this.moveIndex >= index) {
        itemDom.style.marginBottom = this.commonMargin + 'px'
        itemDom.style.transform = 'translate(0, 0)'
        itemDom.style.transition = 'transform 0.2s cubic-bezier(0.2, 0, 0, 1)'

        return
      }

      if ((this.moveIndex || this.moveIndex === 0) && this.moveIndex < index) {
        itemDom.style.marginBottom = this.commonMargin + 'px'
        itemDom.style.transform = `translate(0, ${this.startItem.height +
          commonMargin}px)`
        itemDom.style.transition = 'transform 0.2s cubic-bezier(0.2, 0, 0, 1)'

        return
      }

      if (curIndex > -1 && curIndex < index) {
        itemDom.style.marginBottom = this.commonMargin + 'px'
        itemDom.style.transform = `translate(0, ${this.startItem.height +
          commonMargin}px)`

        return
      }

      itemDom.style.marginBottom = this.commonMargin + 'px'
    },

    // 计算出当前移动盒子应该在的索引
    getDragItemIndex() {
      // 当前移动盒子的top值
      if (!this.selectdom) {
        return 0
      }
      const curTop =
        this.selectdom.style.top.substring(
          0,
          this.selectdom.style.top.length - 2
        ) - this.boxTop
      let maxHeight = 0
      let moveIndex = 0
      for (let i = 0; i < this.data.length; i++) {
        const v = this.data[i]

        const height = document.getElementById(v.id).getBoundingClientRect()
          .height

        const curMaxHeight = maxHeight + height / 2 + commonMargin

        maxHeight += height + commonMargin

        if (curMaxHeight < curTop) {
          moveIndex = i + 1
        }
      }

      return moveIndex
    }
  }
}
</script>

<style lang="less" scoped>
@commonPadding: 10px;

.@{commonclass}-drag {
  .@{commonclass}-drag-item {
    background-color: #fff;
    border-radius: 4px;
    border: 1px solid #ccc;
    box-sizing: border-box;
    .header {
      padding: @commonPadding;
      border-bottom: 1px solid #ccc;
      box-sizing: border-box;
      cursor: pointer;
    }
    .content {
      padding: @commonPadding;
    }
    .content {
      padding: @commonPadding;
    }
  }
}
</style>
