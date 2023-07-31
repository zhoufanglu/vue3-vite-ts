import axios from '@/service/http'
import qs from 'qs'
import { sleep } from '@/tools'

/* return axios({
  url: `/alert-plugin-instances/${id}`,
  method: 'put',
  data
}) */
import type { UserFormType } from '@/views/login/types'
export function login(params: UserFormType): any {
  return axios({
    url: '/alert-plugin-instances',
    method: 'get',
    params,
  })
}

export function logout(params: any): any {
  return axios({
    url: '/logout',
    method: 'get',
    params,
  })
}

export function testZYDApi(params: any): any {
  return axios({
    url: 'http://192.168.130.121:9002/dquality/v1.0/qualitySummaryCount/getAllCount?date=2023%2F7%2F17',
    method: 'get',
  })
}
