<template>
  <div :class="[$commonClass + '-collapse-item', disabled ? 'is-disabled' : '']">
    <div class="title"
         @click="handleHeaderClick"
         tabindex="0"
         @focus="handleFocus"
         @keyup.enter.space.stop="handleKeyClick"
         @blur="focusing = false"
         :class="{
           'focusing': focusing 
         }">
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
import emitter from 'common/mixins/emitter'

export default {
  name: 'jiangCollapseItem',
  componentName: 'jiangCollapseItem',
  mixins: [emitter],
  inject: ['collapse'],
  props: {
    title: String,
    name: [String, Number],
    disabled: Boolean
  },
  data() {
    return {
      focusing: false,
      isClick: false
    }
  },
  computed: {
    isActive: function() {
      return this.collapse.activeName.indexOf(this.name) > -1
    }
  },
  methods: {
    handleFocus() {
      setTimeout(() => {
        if (!this.isClick) {
          this.focusing = true
        } else {
          this.isClick = false
        }
        console.log(this.focusing)
      }, 50)
    },
    handleHeaderClick() {
      if (this.disabled) return
      this.focusing = false
      this.isClick = true
      this.dispatch('jiangCollapse', 'item-click', this)
    },
    handleKeyClick() {
      this.dispatch('jiangCollapse', 'item-click', this)
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
  &.is-disabled {
    .title {
      color: #bbb;
      cursor: not-allowed;
    }
  }
  .title {
    display: flex;
    justify-content: space-between;
    height: 48px;
    line-height: 48px;
    font-weight: 700;
    cursor: pointer;
    outline: none;
    &.focusing:focus:not(:hover) {
      color: #409eff;
    }
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
