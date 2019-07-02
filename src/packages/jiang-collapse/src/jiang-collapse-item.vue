<template>
  <div :class="$commonClass + '-collapse-item'">
    <div class="title"
         @click="handleHeaderClick">
      <div>{{ title }}</div>
      <div class="right-content">
        <span class="iconfont icon-arrow-right-copy-copy-copy"
              :class="{'isActive': isActive}"></span>
      </div>
    </div>
    <jiang-collapse-transition>
      <div v-show="isActive">
        <div class="main-part">
          <slot></slot>
        </div>
      </div>
    </jiang-collapse-transition>
  </div>
</template>

<script>
import jiangCollapseTransition from 'transitions/collapse-transitions'

export default {
  name: 'jiangCollapseItem',
  props: {
    title: String,
    name: [String, Number]
  },
  data() {
    return {
      isActive: false
    }
  },
  methods: {
    handleHeaderClick() {
      this.isActive = !this.isActive
    }
  },
  components: {
    jiangCollapseTransition
  }
}
</script>

<style scoped lang='less'>
.@{commonclass}-collapse-item {
  border-bottom: 1px solid @border-common-color;
  font-size: 13px;
  padding-right: 10px;
  .title {
    display: flex;
    justify-content: space-between;
    height: 48px;
    line-height: 48px;
    font-weight: 700;
    cursor: pointer;
    .right-content {
      line-height: 48px;
      .icon-arrow-right-copy-copy-copy {
        display: inline-block;
        line-height: 1;
        font-size: 13px;
        transition: transform 0.3s;
        &.isActive {
          transform: rotate(90deg);
        }
      }
    }
  }
  .main-part {
    padding-bottom: 25px;
  }
}
</style>
