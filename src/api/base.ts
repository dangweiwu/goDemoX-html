import axios from 'axios';
import type { AxiosRequestConfig, AxiosResponse } from 'axios';
import { Message, Modal,Notification } from '@arco-design/web-vue';
import { useMyStore } from '@/store';
import {ApiConfig} from './config'
//token处理


const baseReq = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json;charset=UTF-8',
  },
});



baseReq.interceptors.response.use(
  (response: AxiosResponse<HttpResponse>) => {
    if(ApiConfig.END_TAG){
      return Promise.reject(new Error("END"))
    }
    const res = response.data;
    return res;
  },
  (error) => {
    // if status 404 must error
    // if network error must error no response
    // if status 400 must error
    if(ApiConfig.END_TAG){
      return;
    }
    let errMsg = '';
    let context = '';
    if (error.response === undefined) {
      // 网络不通
      errMsg = error.message || 'Request Error';
    } else if (error.response.status === 400) {
      // 错误处理
      errMsg = error.response.data.msg;
    } else if (error.response.status === 404) {
      // not found
      errMsg = 'ERR 404';
    } else if (error.response.status === 500) {
      // 系统错误
      errMsg = error.response.data;
    } else if (error.response.status === 401) {
      ApiConfig.END_TAG = true
      // 重新登陆
      Modal.error({
        title: '您已退出登录',
        okText: '确定',
        async onOk() {
          const userStore = useMyStore();
          await userStore.logoutCallBack();
          window.location.reload();
        },
        content: '',
      });
      return Promise.reject(error);
    } else if (error.response.status === 403) {
      // 无权限
      errMsg = '缺少权限';
      context = error.response.data.data;
    }

    Notification.warning({
      title: errMsg,
      content: context,
    })
    return Promise.reject(error);
  }
);


export default baseReq 