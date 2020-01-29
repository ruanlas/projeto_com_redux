import { call, put, all, takeLatest, select } from 'redux-saga/effects';
import { addReserveSuccess, updateAmountReserveSuccess } from './actions';
import api from '../../../services/api';
import history from '../../../services/history';

function* addToReserve({ id }){

    const tripExists = yield select(
        state => state.reserve.find(
                trip => trip.id === id
            )
        );

    const myStock = yield call(api.get, `stock/${id}`);
    const stockAmount = myStock.data.amount;
    const currentStock = tripExists ? tripExists.amount : 0;
    const amount = currentStock + 1;

    if(amount > stockAmount){
        alert('Quantidade máxima atingida.');
        return;
    }

    if(tripExists){
        let action = updateAmountReserveSuccess(id, amount);
        yield put(action);

    }else{
        const response = yield call(api.get, `trips/${id}`);
        let tripData = {
            ...response.data,
            amount
        };
        let action = addReserveSuccess(tripData);
        yield put(action);
        
        history.push('/reservas');
    }
}

function* updateAmount({ id, amount }){
    if(amount <= 0) return;

    const myStock = yield call(api.get, `stock/${id}`);
    const stockAmount = myStock.data.amount;

    if(amount > stockAmount){
        alert('Quantidade máxima atingida.');
        return;
    }

    let action = updateAmountReserveSuccess(id, amount);
    yield put(action);
}

export default all([
    takeLatest('ADD_RESERVE_REQUEST', addToReserve),
    takeLatest('UPDATE_RESERVE_REQUEST', updateAmount),
])