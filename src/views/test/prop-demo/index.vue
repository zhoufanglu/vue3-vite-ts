<template>
  <div class="prop-demo">
    <el-button @click="openDialog">open-1</el-button>
    <el-button @click="openDialog">open-2</el-button>
    <Dialog :dialog-visible="dialogVisible" @closeDialog="closeDialog"></Dialog>
    <!--    <Dialog2 v-model:dialogVisible="dialogVisible"></Dialog2>-->
  </div>
</template>

<script setup lang="ts">
  import Dialog from './Dialog.vue'
  // import Dialog2 from './Dialog2.vue'

  import { ref } from 'vue'

  const dialogVisible = ref(false)
  const inputValue = ref('')

  const openDialog = () => {
    dialogVisible.value = true
  }
  const closeDialog = () => {
    dialogVisible.value = false
  }
</script>

<style scoped lang="scss">
  .prop-demo {
    .input-box {
      border: solid 1px red;
      padding: 20px;
    }
  }
</style>
