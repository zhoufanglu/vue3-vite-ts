import { reactive, ref, watch, Ref } from 'vue'
import { sleep } from '@/tools'
import { pick } from 'lodash'

const useTable = <ItemType extends Object>(
  listRequestFn: Function,
  filters?: object
) => {
  const variables = reactive({
    loading: false,
    color: 'red',
    list: ref<ItemType[]>([]),
    pagination: {
      curPage: 1,
      total: 20,
      pageSize: 10
    }
  })

  // 获取列表数据
  const getTableData = async () => {
    variables.loading = true
    const params = {
      // 分页数据
      ...pick(variables.pagination, ['curPage', 'pageSize']),
      // 过滤数据
      ...filters
    }
    const { data } = await listRequestFn(params)
    // 做一些赋值
    variables.list = data
    await sleep(500)
    variables.loading = false
    console.log('过滤条件', params)
  }

  const resetFilter = async () => {
    variables.pagination.curPage = 1
    variables.pagination.pageSize = 10
    if (!filters) {
      return false
    }
    const keys = Reflect.ownKeys(filters)
    keys.forEach((key) => {
      Reflect.set(filters!, key, undefined)
    })
    await getTableData()
  }

  // watch分页 进行重新请求
  watch(variables.pagination, async (val) => {
    await getTableData()
  })

  return {
    variables,
    getTableData,
    resetFilter
  }
}

export { useTable }
