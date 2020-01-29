export function addReserveRequest(reserveId){
    return {
        type: 'ADD_RESERVE_REQUEST',
        id: reserveId
    };
}

export function addReserveSuccess(trip){
    return {
        type: 'ADD_RESERVE_SUCCESS',
        trip
    };
}

export function removeReserve(reserveId){
    return {
        type: 'REMOVE_RESERVE',
        id: reserveId
    };
}

export function updateAmountReserve(id, amount){
    return {
        type: 'UPDATE_RESERVE',
        id,
        amount
    }
}