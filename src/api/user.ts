import type { RouteRecordNormalized } from 'vue-router';
import { UserState } from '@/store/modules/user/types';
import req from './req'

export interface LoginData {
  username: string;
  password: string;
}

export interface LoginRes {
  token: string;
}
export function login(data: LoginData) {
  return req.post<LoginRes>('/api/user/login', data);
}

export function logout() {
  return req.post<LoginRes>('/api/user/logout');
}

export function getUserInfo() {
  return req.post<UserState>('/api/user/info');
}

export function getMenuList() {
  return req.post<RouteRecordNormalized[]>('/api/user/menu');
}
