import produce from 'immer';

export default function reserve(state = [], action){
    // console.log('CHEGOU');
    // console.log(action);
    // console.log(state); // state do próprio reserve
    switch (action.type) {
        case 'ADD_RESERVE_SUCCESS':
            // let objTrip = {
            //     ...action.trip,
            //     amount: 1
            // };
            // return [ ...state, objTrip];

            // retorna uma cópia do state 'manipulado', seguindo a idéia de imutabilidade
            return produce(state, draft => {
                draft.push(action.trip);
            });
            // break;
        case 'REMOVE_RESERVE':
            return produce(state, draft => {
                const tripIndex = draft.findIndex( trip => trip.id === action.id );

                if(tripIndex >= 0){
                    draft.splice(tripIndex, 1);
                }
            });

        // case 'UPDATE_RESERVE':
        //     return produce(state, draft => {
        //         const tripIndex = draft.findIndex( trip => trip.id === action.id );

        //         if(tripIndex >= 0){
        //             if(action.amount > 0){
        //                 draft[tripIndex].amount = Number(action.amount);
        //             }else{
        //                 draft.splice(tripIndex, 1);
        //             }
        //         }
        //     });

        case 'UPDATE_RESERVE': {
            if(action.amount <= 0){
                return state;
            }

            return produce(state, draft => {
                const tripIndex = draft.findIndex( trip => trip.id === action.id );

                if(tripIndex >= 0){
                    draft[tripIndex].amount = Number(action.amount);
                }
            });
        }
            
        default:
            return state;
            // break;
    }
    return [];
}