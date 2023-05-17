<template>
  <div class="child-com"> {{ menus }} </div>
</template>

<script setup lang="ts">
  import { PropType } from 'vue'

  const emit = defineEmits(['update:menus'])

  defineProps({
    menus: {
      type: Array as PropType<any[]>,
      default: () => [],
    },
  })
</script>

<style scoped lang="scss">
  .child-com {
  }
</style>
