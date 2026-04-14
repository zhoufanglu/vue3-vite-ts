import { reactive, watch } from 'vue'
import { pick } from 'lodash'
import { ElMessage } from 'element-plus'
import type { ListVariablesType, UseListOptions } from '@/hooks/useList/types'
/**
 * @param requestList  请求接口函数
 * @param options 配置项
 */
// prettier-ignore
const useList = <RawItem, Item = RawItem>(
  requestList: (params: any) => Promise<any>,
  options: UseListOptions<Item> = {}
) => {
  const {
    preRequest,
    queryForm = reactive({}),
    formatList = undefined,
    immediate = true,
  } = options
  // 定义抛出的变量
  const listVariables: ListVariablesType<Item> = reactive({
    loading: false,
    list: [],
    pagination: {
      pageNo: 1,
      total: 0,
      pageSize: 10,
    },
  })
  const getListData = async () => {
    listVariables.loading = true

    const params = {
      // 分页数据
      ...pick(listVariables.pagination, ['pageNo', 'pageSize']),
      // 过滤数据
      ...queryForm,
    }
    console.log(39, params)
    console.log('-----')
    // !目前后端的格式是 list, total 这种，后续如果有变动，这里需要调整
    const { list, total }: { list: Item[]; total: number } = await requestList(params)

    try {
      // 请求之前的一些请求
      preRequest?.()
      // 格式化一下数据
      // TODO: 返回类型怎么玩
      listVariables.list = formatList ? formatList(list) : list
      listVariables.loading = false
      listVariables.pagination.total = total
    } catch (e: any) {
      ElMessage.error(e)
      console.log('请求列表出错：', e)
    } finally {
      listVariables.loading = false
    }
  }

  const resetListData = async () => {
    listVariables.pagination.pageNo = 1
    listVariables.pagination.pageSize = 10
    if (!queryForm) return false

    const keys = Reflect.ownKeys(queryForm)
    keys.forEach((key) => {
      Reflect.set(queryForm!, key, undefined)
    })
    await getListData()
  }

  // 判断是否立即请求
  if (immediate) {
    getListData()
  }
  // 响应分页
  watch(
    [() => listVariables.pagination.pageNo, () => listVariables.pagination.pageSize],
    async () => {
      await getListData()
    },
  )

  return {
    getListData,
    resetListData,
    listVariables,
  }
}

export { useList }
