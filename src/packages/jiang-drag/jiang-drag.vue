<template>
  <div :class="$commonClass + '-drag'">
    <div
      :id="dragItem.id"
      :class="$commonClass + '-drag-item'"
      @mousedown="touchStart($event, dragItem)"
      v-for="dragItem in data"
      :key="dragItem.id"
      :style="getDragItem"
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
    }
  },
  computed: {
    getDragItem() {
      return {
        transform: `translate(0, 0)`
      }
    }
  },
  methods: {
    touchStart(event, dragItem) {
      console.log(event, dragItem)

      console.log(event.target.getBoundingClientRect())

      // 记录鼠标移动的记录
      const movePosition = {
        top: 0,
        left: 0
      }

      // 记录鼠标信息
      const originMousePosition = {
        x: event.clientX,
        y: event.clientY
      }

      this.selectdom = document.getElementById(dragItem.id)

      document.addEventListener('mousemove', this.mouseMoveListener)
      document.addEventListener('mouseup', this.mouseUpListener)
    },

    mouseMoveListener(event) {
      console.log(event.screenX, event.screenY)
      this.selectdom.style.position = 'fixed'
    },

    mouseUpListener(event) {
      document.removeEventListener('mousemove', this.mouseMoveListener)
      document.removeEventListener('mouseup', this.mouseUpListener)
    }
  }
}
</script>

<style lang="less" scoped>
@commonPadding: 10px;

.@{commonclass}-drag {
  padding: @commonPadding;
  .@{commonclass}-drag-item {
    margin-bottom: 20px;
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
