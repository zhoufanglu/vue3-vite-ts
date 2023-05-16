<template>
  <div class="">
    ???---
    <button @click="setMenu">set</button>
    <ChildCom v-model:menus="menus"></ChildCom>
  </div>
</template>

<script setup lang="ts">
  import ChildCom from './chidlrenCom.vue'
  import { ref } from 'vue'
  const menus = ref<any>([])
  const setMenu = () => {
    menus.value = [1, 2, 3]
  }
</script>

<style scoped lang="scss">
  .test {
  }
</style>
