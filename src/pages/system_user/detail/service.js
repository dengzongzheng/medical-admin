import request from '@/utils/request';

export async function queryUserDetail(param) {
  return request(`/api/system/detailUser?userNo=${param.userNo}`);
}
