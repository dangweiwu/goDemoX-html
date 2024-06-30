import axios from 'axios';
import req from './req'
//query 分页数据
export function apiAuths(params) {
    return req.get('/api/auth', { params });
}

//创建
export function apiCreateAuths(data) {
    return req.post('/api/auth', data);
}

//更新
export function apiUpdateAuths(id, data) {
    return req.put('/api/auth/' + id, data);
}

//删除
export function apiDelAuths(id) {
    return req.delete('/api/auth/' + id);
}

//apilist
export function apiApiList(){
    return req.get("/api/allurl")
}
