<template>
  <div class="custom-loading"
       v-if="show">
    <div class="custom-loading-Mask"></div>
    <div class="custom-loading-box">
      <div class="custom-loading-content">
        <img :src="icon" />
        <span>{{ text }}</span>
        <em :style="{ borderLeftColor: progressColor }"></em>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'jiangLoading',
  props: {
    show: {
      type: Boolean,
      default: false
    },
    text: {
      type: String,
      default: '加载中'
    },
    icon: {
      type: String,
      default: require('../../assets/fei.png')
    },
    progressColor: {
      type: String,
      default: '#007fff'
    }
  }
}
</script>

<style scoped lang="less">
.custom-loading {
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  z-index: 9999999999;
  display: flex;
  justify-content: center;
  align-items: center;
}
.custom-loading-Mask {
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.4);
}
.custom-loading-box {
  width: 138px;
  height: 138px;
  border-radius: 6px;
  background: #fff;
  position: relative;
  z-index: 100;
  display: flex;
  justify-content: center;
  align-items: center;
}
.custom-loading-content {
  width: 106px;
  height: 106px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-content: center;
  flex-wrap: wrap;
  border: 3px solid #eee;
  position: relative;
}
@keyframes spin {
  0% {
    -webkit-transform: rotate(0deg);
    transform: rotate(0deg);
  }
  25% {
    -webkit-transform: rotate(90deg);
    transform: rotate(90deg);
  }
  50% {
    -webkit-transform: rotate(180deg);
    transform: rotate(180deg);
  }
  75% {
    -webkit-transform: rotate(270deg);
    transform: rotate(270deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}

.custom-loading-content img {
  width: 30px;
  height: 30px;
  margin-bottom: 20px;
}
.custom-loading-content span {
  width: 100%;
  text-align: center;
  font-size: 12px;
}
.custom-loading-content em {
  position: absolute;
  width: 106px;
  height: 106px;
  top: -3px;
  left: -3px;
  border: 3px solid transparent;
  border-left: 3px solid;
  border-radius: 50%;
  box-sizing: content-box;
  -webkit-animation: spin 1s infinite linear;
  animation: spin 1s infinite linear;
}
</style>
