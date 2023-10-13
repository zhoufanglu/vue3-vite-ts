<template>
  <div class="child-com">
    <!--    <el-input v-model="searchForm.name" placeholder="name"></el-input>
    <el-input v-model="searchForm.age" placeholder="age"></el-input>-->
  </div>
</template>

<script setup lang="ts">
  import type { SearchTypes } from '@/views/test/vModel/types'
  /* const emit = defineEmits(['update:searchForm'])
  const props = defineProps({
    searchForm: {
      type: Object as PropType<SearchTypes>,
      default: () => {},
    },
  })
  const data = computed({
    get() {
      return props.searchForm
    },
    set(val) {
      emit('update:searchForm', val)
    },
  }) */

  /*  const searchForm = defineModel<SearchTypes>('searchForm', {
    required: true,
  })
  console.log(27, searchForm.value) */
</script>

<style scoped lang="scss">
  .child-com {
  }
</style>
