import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { MdDelete } from 'react-icons/md';

import { removeReserve } from '../../store/modules/reserve/actions';

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

    return (
        <div>
            <h1 className="title">Você solicitou {reserves.length} reservas</h1>
            {
                reserves.map(reserve => 
                    (
                    <div className="reservas" key={reserve.id}>
                        <img src={reserve.image} alt={reserve.title} />
                        <strong>{reserve.title}</strong>
                        <span>Quantidade: {reserve.amount}</span>
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