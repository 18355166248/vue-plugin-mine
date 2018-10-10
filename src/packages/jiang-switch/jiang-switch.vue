<template>
 <div>
    <span class="title">
      <slot></slot>
    </span>
    <div :class="['switch', {closed: checked}]" @click="hadleChange">
      <span :class="[{closed: checked}]"></span>
    </div>
    <input type="checkbox" @change="hadleChange" :value="value" :disabled="disabled">
 </div>
</template>

<script>
 export default {
   name: 'jiangSwitch',
   props: {
     value: {
       type: [String, Number, Boolean],
       default: false
     },
     disabled: {
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
     }
  },
  computed: {
    checked() {
      return this.value == this.offState
    }
  },
  methods: {
    hadleChange() {
      this.$emit('input', this.value ? this.offState : this.onState)
    }
  }
 }
</script>

<style lang="less" scoped>
    .title {
      line-height: 20px;
    }
   .switch {
     width: 40px;
     height: 20px;
     border-radius: 10px;
     background-color: rgb(19, 206, 102);
     display: inline-block;
     vertical-align: middle;
     position: relative;
     cursor: pointer;
     span {
       width: 16px;
       height: 16px;
       position: absolute;
       left: 22px;
       border-radius: 8px;
       top: 2px;
       background-color: #fff;
       transition: 200ms;
       &.closed {
         left: 2px;
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