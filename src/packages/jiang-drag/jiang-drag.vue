<template>
  <div :class="$commonClass + '-drag'">
    <div
      :id="dragItem.id"
      :class="$commonClass + '-drag-item'"
      @mousedown="touchStart($event, dragItem)"
      v-for="dragItem in data"
      :key="dragItem.id"
      :style="getDragItemStyle(dragItem.id)"
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
import { log } from 'util'
const commonMargin = 20

export default {
  name: 'jiangDrag',
  props: {
    data: {
      type: Array,
      default: []
    }
  },
  data() {
    return {
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
      commonItemStyle: { marginBottom: commonMargin + 'px' }
    }
  },
  methods: {
    touchStart(event, dragItem) {
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
    },

    mouseUpListener(event) {
      document.removeEventListener('mousemove', this.mouseMoveListener)
      document.removeEventListener('mouseup', this.mouseUpListener)
    },

    getDragItemStyle(id) {
      if (this.dragItem.id === id) return {}

      if (Object.keys(this.dragItem).length === 0) {
        return Object.assign({}, {
        transform: `translate(0, ${this.startItem.height}px)`
      }, this.commonItemStyle)
      }

      return Object.assign({}, {
        transform: `translate(0, ${this.startItem.height + commonMargin}px)`
      }, this.commonItemStyle)
    }
  }
}
</script>

<style lang="less" scoped>
@commonPadding: 10px;

.@{commonclass}-drag {
  padding: @commonPadding;
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
