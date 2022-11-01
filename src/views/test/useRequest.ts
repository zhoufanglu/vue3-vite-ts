import api from '@/service/api'
export function useRequest() {
  const getTest = async () => {
    const params = {
      name: 'lfz',
      list: [1, 2, 3]
    }
    const { data } = await api.user.testB(params)
    console.log(5, data)
  }
  return {
    getTest
  }
}
