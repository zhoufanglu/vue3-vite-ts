import axios, { AxiosRequestConfig, AxiosError, AxiosResponse } from 'axios'
// @ts-ignore
import qs from 'qs'
import { configs } from '@typescript-eslint/eslint-plugin'
console.log('env', import.meta.env)

const service = axios.create({
  baseURL: `${import.meta.env.VITE_APP_WEB_URL}/`,
  timeout: 10000,
  // `paramsSerializer`是可选方法，主要用于序列化`params`
  paramsSerializer: (params: any) => {
    return qs.stringify(params, { arrayFormat: 'repeat' })
  }
} as AxiosRequestConfig)

const err = (err: AxiosError): Promise<AxiosError> => {
  if (err.response?.status === 401 || err.response?.status === 504) {
    // 注销
  }

  return Promise.reject(err)
}
/**********************请求拦截器***********************/
service.interceptors.request.use((config: AxiosRequestConfig<any>) => {
  // token
  const token = 'mytoken'
  // eslint-disable-next-line no-unused-expressions,no-param-reassign
  token && (config.headers!.token = token)
  return config
}, err)

/**********************响应拦截器***********************/
service.interceptors.response.use((res: AxiosResponse) => {
  if (res.data.code === undefined) {
    return res.data
  }
}, err)

export default service
