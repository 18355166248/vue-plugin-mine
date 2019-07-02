<template>
  <div :class=" $commonClass + '-collapse' ">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'jiangCollapse',
  data() {
    return {}
  },
  props: {
    accordion: Boolean,
    value: {
      type: [String, Number, Array],
      default: () => []
    }
  }
}
</script>

<style scoped lang='less'>
.@{commonclass}-collapse {
  border-top: 1px solid @border-common-color;
}
</style>
