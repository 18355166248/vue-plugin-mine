<template>
  <div :class="[$commonClass + '_drag', className]">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'jiangDrag',
  props: {
    className: {
      type: String,
      default: ''
    }
  },
  created() {}
}
</script>

<style scoped lang="less">
.@{commonclass}_drag {
  position: relative;
}
</style>
