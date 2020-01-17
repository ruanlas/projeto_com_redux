
export default function reserve(state = [], action){
    // console.log('CHEGOU');
    console.log(action);
    console.log(state);
    switch (action.type) {
        case 'ADD_RESERVE':
            return [ ...state, action.trip];
            break;
    
        default:
            return state;
            break;
    }
    return [];
}