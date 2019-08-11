import request from '@/utils/request';

export async function fakeAccountLogin(params) {
  return request('/api/system/login', {
    method: 'POST',
    data: params,
  });
}
