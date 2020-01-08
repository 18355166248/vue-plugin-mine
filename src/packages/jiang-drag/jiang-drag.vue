<template>
  <div :class="$commonClass + '-drag'" :id="$commonClass + '-drag'">
    <div
      :id="dragItem.id"
      :class="$commonClass + '-drag-item'"
      @mousedown="touchStart($event, dragItem)"
      v-for="(dragItem, dragIndex) in data"
      :key="dragItem.id"
      :style="getDragItemStyle(dragItem.id, dragIndex)"
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
import { log } from 'util';
const commonMargin = 20;

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
      commonItemStyle: { marginBottom: commonMargin + 'px' },
      boxTop: 0
    };
  },
  mounted() {
    this.boxTop = document
      .getElementById(this.$commonClass + '-drag')
      .getBoundingClientRect().top;
  },
  methods: {
    touchStart(event, dragItem) {
      // 记录鼠标移动的记录
      this.startMovePosition = {
        top: 0,
        left: 0
      };

      // 盒子开始的位置
      this.startItemPosition = {
        x: event.clientX,
        y: event.clientY
      };

      this.selectdom = document.getElementById(dragItem.id);

      this.dragItem = dragItem;

      const { width, height, x, y } = this.selectdom.getBoundingClientRect();

      // 移动盒子宽高
      this.startMoveItem = {
        width,
        height,
        x,
        y
      };

      document.addEventListener('mousemove', this.mouseMoveListener);
      document.addEventListener('mouseup', this.mouseUpListener);
    },

    mouseMoveListener(event) {
      // 记录鼠标信息
      const originMousePosition = {
        x: event.clientX - this.startItemPosition.x + this.startMoveItem.x,
        y: event.clientY - this.startItemPosition.y + this.startMoveItem.y
      };

      this.startItem = {
        width: this.startMoveItem.width,
        height: this.startMoveItem.height
      };

      this.selectdom.style.position = 'fixed';
      this.selectdom.style.zIndex = '999';
      this.selectdom.style.top = originMousePosition.y + 'px';
      this.selectdom.style.left = originMousePosition.x + 'px';
      this.selectdom.style.width = this.startMoveItem.width + 'px';
      this.selectdom.style.heihgt = this.startMoveItem.height + 'px';

      if (!this.moveTimer) {
        this.moveTimer = setTimeout(() => {
          this.moveIndex = this.getDragItemIndex();

          clearTimeout(this.moveTimer);
          this.moveTimer = null;
        }, 600);
      }
    },

    mouseUpListener(event) {
      document.removeEventListener('mousemove', this.mouseMoveListener);
      document.removeEventListener('mouseup', this.mouseUpListener);
    },

    /**
     * 格式化当前列表中每行样式
     * @params id {string|number} 拖拽的id
     * @params index {number} 每行元素位于data数据中的索引
     */
    getDragItemStyle(id, index) {
      console.log(index, this.dragItem.id === id);

      if (this.dragItem.id === id) return {};

      if (Object.keys(this.dragItem).length === 0) {
        return Object.assign(
          {},
          {
            transform: `translate(0, ${this.startItem.height}px)`
          },
          this.commonItemStyle
        );
      }

      const curIndex = this.data.findIndex(v => v.id === this.dragItem.id);

      if ((this.moveIndex || this.moveIndex === 0) && this.moveIndex >= index) {
        return Object.assign(
          {},
          { transition: 'transform 0.2s cubic-bezier(0.2, 0, 0, 1)' },
          this.commonItemStyle
        );
      }

      console.log(this.moveIndex, index);
      if ((this.moveIndex || this.moveIndex === 0) && this.moveIndex < index) {
        return Object.assign(
          {},
          {
            transform: `translate(0, ${this.startItem.height +
              commonMargin}px)`,
            transition: 'transform 0.2s cubic-bezier(0.2, 0, 0, 1)'
          },
          this.commonItemStyle
        );
      }

      if (curIndex < index) {
        return Object.assign(
          {},
          {
            transform: `translate(0, ${this.startItem.height + commonMargin}px)`
          },
          this.commonItemStyle
        );
      }

      return this.commonItemStyle;
    },

    // 计算出当前移动盒子应该在的索引
    getDragItemIndex() {
      // 当前移动盒子的top值
      const curTop =
        this.selectdom.style.top.substring(
          0,
          this.selectdom.style.top.length - 2
        ) - this.boxTop;
      let maxHeight = 0;
      let moveIndex = 0;
      for (let i = 0; i < this.data.length; i++) {
        const v = this.data[i];

        const height = document.getElementById(v.id).getBoundingClientRect()
          .height;

        const curMaxHeight = maxHeight + height / 2 + commonMargin;

        maxHeight += height + commonMargin;

        if (curMaxHeight < curTop) {
          moveIndex = i + 1;
        }
      }

      console.log(moveIndex);

      return moveIndex;
    }
  }
};
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
