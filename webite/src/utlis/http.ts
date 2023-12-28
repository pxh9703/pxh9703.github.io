// 导入需要的模块
import { _AsyncData } from "nuxt/dist/app/composables/asyncData";
import { ElMessage } from "element-plus";
const baseUrl = " http://sx.gaowa.love/api/";

// 设置后端返回的基本数据类型
export interface ResponseConfig {
  code: number;
  status: number;
  data: any;
  msg: string;
}

// 设置值的数据类型
export interface ValueConfig {
  value: any;
}

// 定义fetch函数，用于发送异步请求
const fetch = async (url: string, options?: any): Promise<any> => {
  await nextTick(); //解决刷新页面useFetch无返回
  const reqUrl = baseUrl + url;
  return new Promise((resolve, reject) => {
    // 调用useFetch发送请求
    useFetch(reqUrl, { ...options })
      .then(({ data, error }: _AsyncData) => {
        if (error.value) {
          reject(error.value);
          return;
        }
        const value = data.value;
        if (!value) {
          console.log("执行错误了");
          // 这里处理错误回调
          // reject(value)
          // $router.replace('/reject/' + value.status)
        } else if (value.code === 102) {
          // 在页面显示错误信息
          ElMessage({
            message: value.msg,
            type: "error",
          });
        } else {
          resolve(ref(value));
        }
      })
      .catch((err: any) => {
        reject(err);
      });
  });
};

// 导出一个Http类的实例作为默认的导出对象
export default new (class Http {
  // 发送GET请求
  get(url: string, params?: any): Promise<any> {
    return fetch(url, { method: "get", params });
  }

  // 发送POST请求
  post(url: string, params?: any): Promise<any> {
    return fetch(url, { method: "post", params });
  }

  // 发送PUT请求
  put(url: string, body?: any): Promise<any> {
    return fetch(url, { method: "put", body });
  }

  // 发送DELETE请求
  delete(url: string, body?: any): Promise<any> {
    return fetch(url, { method: "delete", body });
  }
})();
