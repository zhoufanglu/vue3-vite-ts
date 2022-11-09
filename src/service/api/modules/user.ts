import axios from '@/service/http'

const user = {
  testA() {
    return axios.get('/testA')
  },
  testB(params: any) {
    /*
    *
    * params = {
      name: 'abc',
      age: 18,
      list: [1, 2, 3]
    }
    * */
    return axios.get('/testB', params)
  },
  testC() {
    return axios.get('/testC')
  }
}

export default user
