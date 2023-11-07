<template>
  <div class="ds-switch-theme" :data-theme="theme">
    <el-radio-group v-model="theme" @change="switchTheme">
      <el-radio label="light" size="large">浅色</el-radio>
      <el-radio label="dark" size="large">深色</el-radio>
    </el-radio-group>
    <p class="text">我是文字内容</p>
    <div class="bg">我是背景</div>
    <el-button @click="sendMessage">向小程序发布消息</el-button>
  </div>
</template>
<script lang="ts">
  export default {
    name: 'DsSwitchTheme',
  }
</script>
<script setup lang="ts">
  import { ref, onMounted } from 'vue'
  const theme = ref('light')
  onMounted(() => {
    switchTheme('light')
  })
  const switchTheme = (val: string) => {
    document.querySelector('body')!.setAttribute('data-theme', val)
  }
  const sendMessage = () => {
    console.log(26, uni)
    console.log(27, wx)
    uni.postMessage({ data: 'sssss' })
    wx.navigateBack() // 立刻关闭页面

    // window.parent.postMessage('????', '*')
    // wx.miniProgram.navigateBack({ delta: 1 })
    // window.parent.postMessage('Hello from 内部网页! 我是vue3-自定义', '*')
  }

  /* setTimeout(() => {
    uni.getEnv(function (res: any) {
      console.log('当前环境：' + JSON.stringify(res)) // 判断当前是在网页还是app还是小程序
    })
    uni.redirectTo({
      url: '/pages/index/index',
    })

    uni.postMessage({ data: 'ffffkkk' })
    window.parent.postMessage('????', '*')

    document.addEventListener('UniAppJSBridgeReady', function () {
      console.log('xx')
    })
  }, 1000) */
  document.addEventListener('UniAppJSBridgeReady', function () {
    uni.webView.getEnv(function (res) {
      console.log('当前环境：' + JSON.stringify(res))
    })
    // uni.webView.navigateTo(...)
  })
</script>

<style scoped lang="scss">
  .ds-switch-theme {
    .text {
      color: $theme;
      @include themify() {
        color: themed('theme');
        background-color: themed('bg_theme');
      }
    }
  }
</style>
