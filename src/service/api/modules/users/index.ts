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
