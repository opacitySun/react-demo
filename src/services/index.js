import Request from '@/common/request';

//测试
const getDataTest = (params) => {
  return Request('/api/test', {
    method: 'POST',
    body: params,
  })
}

export default {
  getDataTest
};
