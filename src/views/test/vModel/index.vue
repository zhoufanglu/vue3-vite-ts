<template>
  <div class="v-model-test">
    <child-com v-model:searchForm="searchForm"></child-com>
    <el-button @click="handleLog">log</el-button>
  </div>
</template>

<script setup lang="ts">
  import ChildCom from './chidlrenCom.vue'
  import type { SearchTypes } from '@/views/test/vModel/types'
  const searchForm = reactive<SearchTypes>({
    name: '',
    age: 0,
  })
  const handleLog = () => {
    console.log(17, searchForm)
  }
</script>

<style scoped lang="scss">
  .v-model-test {
    padding: 30px;
  }
</style>
