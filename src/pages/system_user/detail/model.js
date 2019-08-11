import { queryUserDetail } from './service';

const Model = {
  namespace: 'userDetail',
  state: {
    user: {},
    userLoginLog: [],
  },
  effects: {
    *fetchUserDetail({ payload }, { call, put }) {
      const response = yield call(queryUserDetail, payload);
      yield put({
        type: 'show',
        payload: response.data,
      });
    },
  },
  reducers: {
    show(state, { payload }) {
      const data = { ...state, user: payload };
      console.log("aaaaa"+JSON.stringify(data));
      return data;
    },
  },
};
export default Model;
