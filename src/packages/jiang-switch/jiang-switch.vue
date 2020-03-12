<template>
  <div>
    <span class="title">
      <slot></slot>
    </span>
    <div
      :class="['switch']"
      :style="getStyle"
      @click="hadleChange"
    >
      <span :style="{color: checked ? '' : '#fff', fontSize: checked ? '' : '18px'}">{{activeText}}</span>
      <span :style="{color: checked ? '#fff' : '', fontSize: checked ? '18px' : ''}">{{inactiveText}}</span>
      <span
        class="activeCard"
        :style="getHighLightStyle"
      ></span>
    </div>
  </div>
</template>

<script>
export default {
  name: "jiangSwitch",
  props: {
    value: {
      type: [String, Number, Boolean],
      default: false
    },
    onState: {
      type: [String, Number, Boolean],
      default: true
    },
    offState: {
      type: [String, Number, Boolean],
      default: false
    },
    width: {
      type: [Number, String],
      default: 40
    },
    height: {
      type: [Number, String],
      default: 20
    },
    backgroundColor: {
      type: String,
      default: "rgba(0, 0, 0, .1)"
    },
    highLightColor: {
      type: String,
      default: "#000"
    },
    activeText: {
      type: String
    },
    inactiveText: {
      type: String
    }
  },
  computed: {
    padding() {
      return Math.ceil(this.height / 10);
    },
    checked() {
      return this.value === this.onState;
    },
    getStyle() {
      return {
        height: this.height + "px",
        width: this.width + "px",
        borderRadius: this.height / 2 + "px",
        backgroundColor: this.backgroundColor
      };
    },
    getHighLightStyle() {
      const left = this.checked ? this.width / 2 + this.padding : this.padding;

      return {
        height: this.height - this.padding * 2 + "px",
        width: this.width / 2 - this.padding * 2 + "px",
        borderRadius: (this.height - 4) / 2 + "px",
        backgroundColor: this.highLightColor,
        top: this.padding + "px",
        left: left + "px"
      };
    }
  },
  methods: {
    hadleChange() {
      this.$emit(
        "input",
        this.value === this.onState ? this.offState : this.onState
      );
    }
  }
};
</script>

<style lang="less" scoped>
.title {
  line-height: 20px;
}
.switch {
  display: flex;
  align-items: center;
  vertical-align: middle;
  position: relative;
  cursor: pointer;
  span.activeCard {
    position: absolute;
    transition: 200ms;
    z-index: 0;
  }
  span {
    &:nth-child(1),
    &:nth-child(2) {
      position: relative;
      z-index: 1;
      display: inline-block;
      width: 50%;
      text-align: center;
      color: #999;
      font-size: 16px;
    }
  }
  &.closed {
    background-color: rgb(255, 73, 73);
  }
}
input {
  display: none;
}
</style>