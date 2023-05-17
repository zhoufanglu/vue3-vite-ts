import axios from '@/service/http'
import qs from 'qs'
import { sleep } from '@/tools'

const user = {
  testA() {
    return axios.get('/testA')
  },
  testB(params: any) {
    return new Promise((resolve, reject) => {
      sleep(500).then(() => {
        resolve({
          data: [
            { name: 'a', age: 18 },
            { name: 'b', age: 18 },
            { name: 'c', age: 18 },
          ],
          total: 3,
        })
      })
    })
  },
  /*  testB(params: any) {
    return axios.get('/testB', params)
  },*/
  /*  testC(params: any) {
    console.log(222, params)
    return axios({
      url: '/testC',
      method: 'get',
      params
    })
  }*/
  testC(params: any) {
    return axios.get(`/testC?${qs.stringify(params, { arrayFormat: 'repeat' })}`)
  },
  /*  testC(params: any) {
    return axios.get('/testC', params)
  }*/
}

export default user
