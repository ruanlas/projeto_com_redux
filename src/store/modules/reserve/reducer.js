import produce from 'immer';

export default function reserve(state = [], action){
    // console.log('CHEGOU');
    // console.log(action);
    // console.log(state); // state do próprio reserve
    switch (action.type) {
        case 'ADD_RESERVE':
            // let objTrip = {
            //     ...action.trip,
            //     amount: 1
            // };
            // return [ ...state, objTrip];

            // retorna uma cópia do state 'manipulado', seguindo a idéia de imutabilidade
            return produce(state, draft => {
                const tripIndex = draft.findIndex( trip => trip.id === action.trip.id );
                
                if(tripIndex >= 0){
                    draft[tripIndex].amount += 1;
                }else{
                    let objTrip = {
                        ...action.trip,
                        amount: 1
                    };
                    draft.push(objTrip);
                }
            });
            // break;
        case 'REMOVE_RESERVE':
            return produce(state, draft => {
                const tripIndex = draft.findIndex( trip => trip.id === action.id );

                if(tripIndex >= 0){
                    draft.splice(tripIndex, 1);
                }
            });
    
        default:
            return state;
            // break;
    }
    return [];
}