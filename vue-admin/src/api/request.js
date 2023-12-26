import axios from 'axios'
import { getStrogae, removeStorage } from './helper'
import router from '@/router'

// 初始化 请求实例
const service = axios.create({
  baseURL: 'http://nodeseq.srliforever.ltd',
  timeout: 50000
  // withCredentials: false // 是否在跨域时携带 cookies 凭证
})

// 请求拦截器
service.interceptors.request.use(
  (config) => {
    // 请求前的操作
    if (getStrogae('token')) {
      config.headers['Authorization'] = getStrogae('token')
    }
    return config
  },
  (error) => {
    // 请求错误的操作
    return Promise.reject(error)
  }
)

// 响应拦截器
// service.interceptors.response.use(
//   (response) => {
//     // 判断状态码是否为200
//     if (response.data.status !== 200) {
//       // 失效验证
//       console.log(response.data.status)
//       if (response.data.status == 401) {
//         // ElNotification.error({
//         //   title: response.data.message || '请求失败',
//         //   message: response.data.message || '请求失败',
//         // })
//         ElMessage({
//           grouping: true,
//           type: 'error',
//           message: response.data.message || '请求失败'
//         })
//         removeStorage('token')

//         router.push('/login')
//         return Promise.reject(new Error('请求失败'))
//       }
//       return Promise.reject(new Error('请求失败'))
//     }

//     // 判断是否有响应数据
//     if (response.data.data) {
//       return response.data.data
//     }
//     // 响应数据的操作
//     return []
//   },
//   (error) => {
//     // 响应错误的操作
//     if (error.status !== 200) {
//       ElNotification.error({
//         title: error.response.data.message || '请求失败',
//         message: error.response.data.message || '请求失败'
//       })
//       return Promise.reject(new Error('请求失败'))
//     }
//   }
// )

// 封装请求方法
// get,post,put,delete
export default {
  get(url, params) {
    return service.get(url, { params })
  },
  post(url, data, config) {
    return service.post(url, data, config)
  },
  put(url, data) {
    return service.put(url, data)
  },
  delete(url, data) {
    return service.delete(url, data)
  },
  http: service
}
