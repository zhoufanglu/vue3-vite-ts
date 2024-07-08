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
    <h3>树的家长</h3>
    <el-tree style="max-width: 600px" :data="data" :props="defaultProps" />
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
  /** ********************tree***********************/
  const data: any[] = [
    {
      label: 'Level one 1',
      isLeaf: false,
      children: [],
    },
    {
      label: 'Level one 2',
      children: [
        {
          label: 'Level two 2-1',
          children: [
            {
              label: 'Level three 2-1-1',
            },
          ],
        },
        {
          label: 'Level two 2-2',
          children: [
            {
              label: 'Level three 2-2-1',
            },
          ],
        },
      ],
    },
  ]
  const defaultProps = {
    children: 'children',
    label: 'label',
    isLeaf: 'isLeaf',
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
