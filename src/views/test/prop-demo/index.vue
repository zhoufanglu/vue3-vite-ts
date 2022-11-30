<template>
  <div class="prop-demo">
    <el-button @click="openDialog">open</el-button>
    <Dialog :dialog-visible="dialogVisible" @closeDialog="closeDialog"></Dialog>
  </div>
</template>

<script setup lang="ts">
  import Dialog from './Dialog.vue'
  import { ref } from 'vue'

  const dialogVisible = ref(false)

  const openDialog = () => {
    dialogVisible.value = true
  }
  const closeDialog = () => {
    dialogVisible.value = false
  }
</script>

<style scoped lang="scss">
  .prop-demo {
    border: solid 1px red;
  }
</style>
