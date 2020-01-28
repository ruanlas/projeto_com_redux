export function addReserve(trip){
    return {
        type: 'ADD_RESERVE',
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