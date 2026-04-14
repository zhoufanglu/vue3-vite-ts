<script setup lang="ts">
  import { reactive } from 'vue'
  import { useList } from '@/hooks/useList'

  interface ListItem {
    id: number
    name: string
  }

  const allList: ListItem[] = Array.from({ length: 20 }, (_, index) => ({
    id: index + 1,
    name: `test${index + 1}`,
  }))

  const filters = reactive({
    name: '',
  })

  const getTestListApi = (params: { pageNo: number; pageSize: number; name?: string }) => {
    return new Promise<{ list: ListItem[]; total: number }>((resolve) => {
      setTimeout(() => {
        const keyword = (params.name ?? '').trim().toLowerCase()
        const filteredList = keyword
          ? allList.filter((item) => item.name.toLowerCase().includes(keyword))
          : allList

        const start = (params.pageNo - 1) * params.pageSize
        const end = start + params.pageSize

        console.log(30, filteredList.slice(start, end))

        resolve({
          list: filteredList.slice(start, end),
          total: filteredList.length,
        })
      }, 300)
    })
  }

  const { listVariables, getListData, resetListData } = useList<ListItem>(getTestListApi, {
    queryForm: filters,
    formatList: (rows: any) => {
      return rows.map((row) => ({
        ...row,
        autoProp: 'sss',
      }))
    },
  })

  const handleSearch = async () => {
    // 筛选时回到第一页，利用现有 watch 触发请求，避免重复请求
    if (listVariables.pagination.pageNo !== 1) {
      listVariables.pagination.pageNo = 1
      return
    }

    await getListData()

    setTimeout(() => {
      console.log(52, listVariables)
    }, 1000)
  }
</script>

<template>
  <div class="use-list">
    <el-card shadow="never">
      <template #header>
        <div class="card-header">el-table example</div>
      </template>

      <el-form inline>
        <el-form-item label="Name">
          <el-input
            v-model="filters.name"
            clearable
            placeholder="请输入 name"
            @keyup.enter="handleSearch"
          />
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="handleSearch">查询</el-button>
          <el-button @click="resetListData">重置</el-button>
        </el-form-item>
      </el-form>

      <el-table v-loading="listVariables.loading" :data="listVariables.list" border stripe>
        <el-table-column prop="id" label="ID" width="120" />
        <el-table-column prop="name" label="Name" min-width="220" />
      </el-table>

      <div class="pagination-wrap">
        <el-pagination
          v-model:current-page="listVariables.pagination.pageNo"
          v-model:page-size="listVariables.pagination.pageSize"
          :page-sizes="[5, 10, 20]"
          :total="listVariables.pagination.total"
          layout="total, sizes, prev, pager, next"
          background
        />
      </div>
    </el-card>
  </div>
</template>

<style scoped lang="scss">
  .use-list {
    padding: 24px;
  }

  .card-header {
    font-size: 16px;
    font-weight: 600;
  }

  .pagination-wrap {
    margin-top: 16px;
    display: flex;
    justify-content: flex-end;
  }
</style>
