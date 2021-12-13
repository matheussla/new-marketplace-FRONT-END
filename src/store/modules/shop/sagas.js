import { takeLatest, all, call, put } from 'redux-saga/effects';
import types from './types';
import api from '../../../services/axiosApi';
import { setShops, setShop } from './actions';

export function* requestShops() {
  const { data } = yield call(api.get, '/shops');
  yield put(setShops(data));
}

export function* requestShop(payload) {
  const { data } = yield call(api.get, `/shop/${payload.id}`);
  yield put(setShop(data));
}

export default all([
  takeLatest(types.REQUEST_SHOPS, requestShops),
  takeLatest(types.REQUEST_SHOP, requestShop)
]);