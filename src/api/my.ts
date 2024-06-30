 import axios from 'axios';
 
 import baseReq from './base';
 import req from './req'

export interface LoginData {
  account: string;
  password: string;
}

export interface RefreshToken {
  refresh_token: string;
}

export function login(data: LoginData) {
  return baseReq.post('/api/login', data);
}

export function logout() {
  return req.post('/api/logout');
}

export function myInfo() {
  return req.get('/api/my');
}

//token 刷新
export function refreshtoken(t: RefreshToken) {

  return baseReq.post('/api/token/refresh',{},{
    headers: {
      'Authorization': 'Bearer ' + t.refresh_token
    }
  })
}

//设置
export function setinfo(data) {
  return req.put('/api/my', data);
}

//设置密码
export function setPassword(data) {
  return req.put('/api/my/password', data);
}


//获取我的权限
export function apiMyAuth(){
  return req.get('/api/my-auth')
}