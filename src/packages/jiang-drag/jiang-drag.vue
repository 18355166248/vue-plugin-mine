<template>
  <div :class="[$commonClass + '-drag']">
    <div v-for="(item, index) in list"
         :key="index">
      <div :class="[$commonClass + '-inside-box']">
        <!-- 拖拽区域 -->
        <div :class="[$commonClass + '-top-drag-box']"></div>
        <!-- 内容区域 -->
        <div :class="[$commonClass + '-content-box']"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'jiangDrag',
  props: {
    list: {
      type: Array,
      default: []
    }
  },
  created() {}
}
</script>

<style scoped lang="less">
.@{commonclass}-drag {
  color: #fff;
  .@{commonclass}-inside-box {
    .@{commonclass}-top-drag-box {
    }
    .@{commonclass}-content-box {
    }
  }
}
</style>
