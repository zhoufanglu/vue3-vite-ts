import axios from '@/service/http'
import qs from 'qs'

const user = {
  testA() {
    return axios.get('/testA')
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
    return axios.get(
      `/testC?${qs.stringify(params, { arrayFormat: 'repeat' })}`
    )
  }
  /*  testC(params: any) {
    return axios.get('/testC', params)
  }*/
}

export default user
