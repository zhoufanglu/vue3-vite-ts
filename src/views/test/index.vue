<template>
  <div class="ds-switch-theme" :data-theme="theme">
    <!--?环境变量-->
    <div>环境变量-{{ envUrl }}</div>
    <el-radio-group v-model="theme" @change="switchTheme">
      <el-radio label="light" size="large">浅色</el-radio>
      <el-radio label="dark" size="large">深色</el-radio>
    </el-radio-group>
    <p class="text">我是文字内容</p>
    <div class="bg">我是背景</div>
    <!--    <iframe src="@/assets/test.pdf" frameborder="0"></iframe>-->
    <iframe :src="PdfUrl" frameborder="0"></iframe>
    <iframe src="/public/test.pdf" frameborder="0"></iframe>
  </div>
</template>
<script lang="ts">
  export default {
    name: 'DsSwitchTheme',
  }
</script>
<script setup lang="ts">
  import { ref, onMounted, onBeforeMount } from 'vue'
  import pdf from '@/assets/test.pdf'
  const theme = ref('light')
  onMounted(() => {
    switchTheme('light')
  })
  const switchTheme = (val: string) => {
    document.querySelector('body')!.setAttribute('data-theme', val)
  }
  // 环境变量
  const envUrl = import.meta.env.VITE_APP_WEB_URL
  const PdfUrl = pdf
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
  iframe {
    width: 500px;
    height: 500px;
    border: solid 1px red;
  }
</style>
