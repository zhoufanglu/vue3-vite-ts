<template>
  <div class="p-table-B">
    table
    <div class="filter-row">
      <el-input v-model="filters.name_b" placeholder="名字"></el-input>
      <el-input v-model="filters.age_b" placeholder="年龄"></el-input>
      <el-button @click="getTableData(filters)">请求</el-button>
      <el-button @click="resetFilter()">重置</el-button>
    </div>
    <el-table
      v-loading="variables.loading"
      :data="variables.list"
      style="width: 100%"
    >
      <el-table-column prop="name" label="Name" width="180" />
      <el-table-column prop="age" label="Age" />
    </el-table>
    <el-pagination
      v-model:current-page="variables.pagination.curPage"
      v-model:page-size="variables.pagination.pageSize"
      background
      layout="prev, pager, next, sizes"
      :page-sizes="[10, 20, 30]"
      :total="variables.pagination.total"
    />
  </div>
</template>

<script setup>
  import { onMounted, toRefs, ref, reactive } from 'vue'
  import { useTable } from '@/hooks/table/useTable.ts'
  import api from '@/service/api'
  const filters = reactive({
    name_b: 'a',
    age_b: null
  })
  const { variables, getTableData, resetFilter } = useTable(
    api.user.testC,
    filters
  )
  onMounted(() => {
    getTableData(filters)
  })

  /*  const handleCurrentChange = (val) => {
  // console.log(33, val)
}*/
</script>

<style scoped lang="scss">
  .filter-row {
    @include vertical-center;
    border: solid 1px green;
    padding: 10px;
  }
</style>
