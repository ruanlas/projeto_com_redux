import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { MdDelete, MdAddCircle, MdRemoveCircle } from 'react-icons/md';

import { removeReserve, updateAmountReserve } from '../../store/modules/reserve/actions';

import './style.css';

export default function Reservas() {
    const reserves = useSelector( state => state.reserve );
    const dispatch = useDispatch();
    // console.log('MINHAS RESERVAS: ', reserves);

    function handleRemove(reserveId){
        // alert(reserveId);
        // let action = {
        //     type: 'REMOVE_RESERVE',
        //     id: reserveId
        // };
        let action = removeReserve(reserveId);
        dispatch(action);
    }

    function incrementAmont(reserve){
        // console.log(reserve);
        let action = updateAmountReserve(reserve.id, reserve.amount + 1);
        dispatch(action);
    }

    function decrementAmont(reserve){
        // console.log(reserve);
        let action = updateAmountReserve(reserve.id, reserve.amount - 1);
        dispatch(action);
    }

    return (
        <div>
            <h1 className="title">Você solicitou {reserves.length} reservas</h1>
            {
                reserves.map(reserve => 
                    (
                    <div className="reservas" key={reserve.id}>
                        <img src={reserve.image} alt={reserve.title} />
                        <strong>{reserve.title}</strong>
                        
                        <div id="amount">
                            <button type="button" onClick={() => decrementAmont(reserve) }>
                                <MdRemoveCircle size={25} color="#191919"/>
                            </button>
                            <input type="text" readOnly value={reserve.amount} />
                            {/* <span>Quantidade: {reserve.amount}</span> */}
                            <button type="button" onClick={() => incrementAmont(reserve) }>
                                <MdAddCircle size={25} color="#191919"/>
                            </button>
                        </div>

                        <button type="button" onClick={() => { handleRemove(reserve.id) }}>
                            <MdDelete size={20} color="#191919" />
                        </button>
                    </div>
                    )
                )
            }
            
            <footer>
                <button type="button">Solicitar Reservas</button>
            </footer>
        </div>
    );
}