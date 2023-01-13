<template>
  <div class="">
    table
    <childTest :value="value"></childTest>
  </div>
</template>

<script setup>
  import childTest from './childTest.vue'
  import { ref } from 'vue'
  let value = ref(0)
  setTimeout(() => {
    value.value = 111
  }, 500)
</script>

<style scoped lang="scss">
  .test {
  }
</style>
