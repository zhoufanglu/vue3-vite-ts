import axios, { AxiosRequestConfig, AxiosError, AxiosResponse } from 'axios'
import qs from 'qs'

const service = axios.create({
  delayed: true,
  baseURL: `${import.meta.env.VITE_APP_WEB_URL}/`,
  timeout: 10000
  /*  paramsSerializer: {
    /!*    encode: (params) => {
      console.log(params)
      return qs.stringify(params, { arrayFormat: 'repeat' })
    }*!/
    // serialize: (params, options)
    indexes: null
  }*/
} as AxiosRequestConfig)

const err = (err: AxiosError): Promise<AxiosError> => {
  if (err.response?.status === 401 || err.response?.status === 504) {
    // 注销
  }

  return Promise.reject(err)
}
/**********************请求拦截器***********************/
service.interceptors.request.use(async (config: AxiosRequestConfig<any>) => {
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
