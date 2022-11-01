import axios, { AxiosRequestConfig, AxiosError, AxiosResponse } from 'axios'
// @ts-ignore
import qs from 'qs'
console.log(4, qs)
console.log('env', import.meta.env)

const service = axios.create({
  baseURL: `${import.meta.env.VITE_APP_WEB_URL}/`,
  timeout: 10000,
  // headers: { aaa: 'bbb' } 自定义请求头
  // `paramsSerializer`是可选方法，主要用于序列化`params`
  /*paramsSerializer: (params: any) => {
    return qs.stringify(params, { arrayFormat: 'repeat' }) // 形式： ids=1&ids=2&ids=3
    // 4种不同形式
    //1.qs.stringify({ids: [1, 2, 3]}, { indices: false }) --形式： ids=1&ids=2&ids=3
    //2.qs.stringify({ids: [1, 2, 3]}, {arrayFormat: ‘indices‘}) --形式：      ids[0]=1&ids[1]=2&ids[2]=3
    //3.qs.stringify({ids: [1, 2, 3]}, {arrayFormat: ‘brackets‘})  --形式：ids[]=1&ids[]=2&ids[]=3
    //4.qs.stringify({ids: [1, 2, 3]}, {arrayFormat: ‘repeat‘})  --形式： ids=1&ids=2&ids=3
  }*/
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
  return res.data
}, err)

export default service
