import req from './req'

export function apiUsers(params) {
  return req.get('/api/admin', { params });
}
export function apiCreateUser(data) {
  return req.post('/api/admin', data);
}

export function apiUpdateUser(id, data) {
  return req.put('/api/admin/' + id, data);
}

export function apiDelUser(id) {
  return req.delete('/api/admin/' + id);
}
