import { call, put, all, takeLatest } from 'redux-saga/effects';
import { addReserveSuccess } from './actions';
import api from '../../../services/api';

function* addToReserve({ id }){
    const response = yield call(api.get, `trips/${id}`);

    let action = addReserveSuccess(response.data);
    yield put(action);
}

export default all([
    takeLatest('ADD_RESERVE_REQUEST', addToReserve)
])