import req from './req'

//query 分页数据
export function apiRole(params) {
    return req.get('/api/role', { params });
}

//创建
export function apiCreateRole(data) {
    return req.post('/api/role', data);
}

//更新
export function apiUpdateRole(id, data) {
    return req.put('/api/role/' + id, data);
}

//删除
export function apiDelRole(id) {
    return req.delete('/api/role/' + id);
}

export function apiRoleAuth(id,data) {
    return req.put('/api/role/auth/' + id,data);
}

