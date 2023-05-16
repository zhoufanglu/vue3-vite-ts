import axios from '@/service/http'
import qs from 'qs'

const user = {
  testA() {
    return axios.get('/testA')
  },
  testB(params: any) {
    return axios({
      url: 'http://192.168.129.134:9002/data-auth/file/data/authorize/template/export?pkgId=1651838038727036929',
      method: 'get',
      responseType: 'blob',
      headers: {
        'Content-Type': 'application/json',
        'Gw-Authorization-Rt': 'c4bf023f-4e58-454a-9d9b-fecd02f21bc2',
        'Cm-Authorization': 'c4bf023f-4e58-454a-9d9b-fecd02f21bc2'
      }
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
  }
  /*  testC(params: any) {
    return axios.get('/testC', params)
  }*/
}

export default user
