<template>
  <el-dialog v-model="dialogVisible" title="Tips" width="30%">
    <span>This is a message</span>
    <template #footer>
      <span class="dialog-footer">
        <el-button @click="closeDialog">Cancel</el-button>
      </span>
    </template>
  </el-dialog>
</template>

<script setup>
  import { toRefs } from 'vue'

  const props = defineProps({
    dialogVisible: {
      type: Boolean,
      default: false
    }
  })

  const emit = defineEmits(['closeDialog'])

  const { dialogVisible } = toRefs(props)
  const closeDialog = () => {
    emit('closeDialog')
  }
</script>

<style scoped lang="scss">
  .test {
  }
</style>
