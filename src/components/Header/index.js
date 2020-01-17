import React from 'react';
// é responsável por conectar o redux com os reducers
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo.svg';

import './style.css';

export default function Header() {
  // const var_state = useSelector( state => state);
  // console.log(var_state);

  const reserves = useSelector( state => state.reserve );
  const reserveSize = reserves.length;
  // console.log(reserves);
  // console.log(reserveSize);
  return (
    <header className="container">
      <Link to="/">
        <img className="logo" src={logo} alt="Logo Projeto" />
      </Link>
      
      <Link className="reserva" to="/reservas">
        <div>
          <strong>Minhas reservas</strong>
          <span>{reserveSize} reservas</span>
        </div>
      </Link>

    </header>
  );
}