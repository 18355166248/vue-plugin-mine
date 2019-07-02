<template>
  <div :class=" $commonClass + '-collapse' ">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'jiangCollapse',
  componentName: 'jiangCollapse',
  props: {
    accordion: Boolean,
    value: {
      type: [String, Number, Array],
      default: () => []
    }
  },
  data() {
    return {
      activeName: [].concat(this.value)
    }
  },
  provide() {
    return {
      collapse: this
    }
  },
  created() {
    this.$on('item-click', this.handleItemClick)
  },
  methods: {
    setActiveNames(activeName) {
      activeName = [].concat(activeName)
      const value = this.accordion ? activeName[0] : activeName
      this.activeName = activeName
      this.$emit('input', value)
      this.$emit('change', value)
    },
    handleItemClick(item) {
      if (this.accordion) {
        this.setActiveNames(
          (this.activeName[0] || this.activeName[0] === 0) &&
            this.activeName[0] === item.name
            ? ''
            : item.name
        )
      } else {
        let activeName = this.activeName.slice(0)
        const index = this.activeName.indexOf(item.name)
        if (index > -1) {
          activeName.splice(index , 1)
        } else {
          activeName.push(item.name)
        }

        this.setActiveNames(activeName)
      }
    }
  }
}
</script>

<style scoped lang='less'>
.@{commonclass}-collapse {
  border-top: 1px solid @border-common-color;
}
</style>
