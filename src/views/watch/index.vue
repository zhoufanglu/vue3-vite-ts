<script setup lang="ts">
  const num1 = ref()
  const num2 = ref()
  watch(
    () => num1,
    (newVal, oldValue) => {
      console.log(newVal)
    },
  )
  // watch two nums
  // 冒泡排序
</script>
<template>
  <div class="p-watch">
    <el-input v-model="num1"></el-input>
    <el-input v-model="num2"></el-input>
  </div>
</template>

<style scoped lang="scss">
  .p-watch {
  }
</style>
