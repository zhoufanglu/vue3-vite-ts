import axios from '@/service/http'

const user = {
  testA() {
    return axios.get('/testA')
  },
  testB(params: any) {
    return axios.get('/testB', params)
  },
  testC() {
    return axios.get('/testC')
  }
}

export default user
