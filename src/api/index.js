import service from '@/utils/request';
 
// 获取用户列表
export function getServerTime(params) {
  return service.get('/jeecgboot/sys/randomImage/1629428467008', { params: params });
}
// 获取用户列表
export function getUserList(params) {
  return service.get('/user/list', { params: params });
}
 
// 创建用户
export function createUser(data) {
  return service.post('/user/create', data);
}
 
// 更新用户信息
export function updateUser(id, data) {
  return service.put(`/user/update/${id}`, data);
}
