import { call, put, all, takeLatest, select } from 'redux-saga/effects';
import { addReserveSuccess, updateAmountReserve } from './actions';
import api from '../../../services/api';

function* addToReserve({ id }){

    const tripExists = yield select(
        state => state.reserve.find(
                trip => trip.id === id
            )
        );
    if(tripExists){
        const amount = tripExists.amount + 1;
        let action = updateAmountReserve(id, amount);
        yield put(action);

    }else{
        const response = yield call(api.get, `trips/${id}`);
        let tripData = {
            ...response.data,
            amount: 1
        };
        let action = addReserveSuccess(tripData);
        yield put(action);
    }
}

export default all([
    takeLatest('ADD_RESERVE_REQUEST', addToReserve)
])