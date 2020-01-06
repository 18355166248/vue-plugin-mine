<template>
  <div class="contentBox">
    {{itemData.name}}+1
  </div>
</template>

<script>
export default {
  name: 'exampleChild1',
  props: {
    itemData: {
      type: Object
    }
  }
}
</script>
<style scoped>
.contentBox {
  width: 100%;
  height: 100%;
  background-color: white;
}
</style>