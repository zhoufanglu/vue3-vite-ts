<template>
  <div class="p-table-B"> table </div>
</template>

<script setup>
  import { onMounted, toRefs, ref, reactive } from 'vue'
  import api from '@/service/api'
  const filters = reactive({
    name_b: 'a',
    age_b: null,
  })

  /*  const handleCurrentChange = (val) => {
  // console.log(33, val)
} */
</script>

<style scoped lang="scss">
  .filter-row {
    @include vertical-center;
    border: solid 1px green;
    padding: 10px;
  }
</style>
