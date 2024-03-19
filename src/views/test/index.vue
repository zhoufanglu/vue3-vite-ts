<template>
  <div class="ds-switch-theme" :data-theme="theme">
    <el-radio-group v-model="theme" @change="switchTheme">
      <el-radio label="light" size="large">浅色</el-radio>
      <el-radio label="dark" size="large">深色</el-radio>
    </el-radio-group>
    <p class="text">我是文字内容</p>
    <div class="bg">我是背景</div>
    {{ searchForm }}
    <childCom v-model:searchForm="searchForm"></childCom>
  </div>
</template>
<script lang="ts">
  export default {
    name: 'DsSwitchTheme',
  }
</script>
<script setup lang="ts">
  import { ref, onMounted } from 'vue'
  import { useRoute } from 'vue-router'
  import childCom from '@/views/test/vModel/chidlrenCom.vue'
  const theme = ref('light')
  const route = useRoute()

  watch(
    () => route.query,
    (val) => {
      console.log(27, val.name)
    },
    { immediate: true },
  )
  onMounted(() => {
    switchTheme('light')
  })
  const searchForm = ref({})
  const switchTheme = (val: string) => {
    document.querySelector('body')!.setAttribute('data-theme', val)
  }
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
