import { reactive } from 'vue'
const useTable = () => {
  const variates = reactive({
    pagination: {
      curPage: 1,
      total: 0,
      pageSize: 10
    }
  })
}

export { useTable }
