import { addSystemUser, querySystemUser, removeRule, updateRule } from './service';

const Model = {
  namespace: 'systemUser',
  state: {
    data: {
      list: [],
      pagination: {},
    },
  },
  effects: {
    *fetch({ payload }, { call, put }) {
      const response = yield call(querySystemUser, payload);
      const result = {
        list: response.data.data,
        pagination: {
          total: response.data.totalCount,
          pageSize: response.data.pageSize,
          current: response.data.pageNo,
        },
      };
      yield put({
        type: 'save',
        payload: result,
      });
    },

    *add({ payload, callback }, { call, put }) {
      const response = yield call(addSystemUser, payload);
      yield put({
        type: 'save',
        payload: response,
      });
      if (callback) callback();
    },

    *remove({ payload, callback }, { call, put }) {
      const response = yield call(removeRule, payload);
      yield put({
        type: 'save',
        payload: response,
      });
      if (callback) callback();
    },

    *update({ payload, callback }, { call, put }) {
      const response = yield call(updateRule, payload);
      yield put({
        type: 'save',
        payload: response,
      });
      if (callback) callback();
    },
  },
  reducers: {
    save(state, action) {
      return { ...state, data: action.payload };
    },
  },
};
export default Model;
