import React from 'react';
import { NavLink } from 'react-router-dom';
// Import CSS
import '../css/groupIconsView.css';
// Import img
import icPencil from '../img/iconPencil.svg';


function ButtonEdit(props) {
  return (
    <NavLink to={props.editRoute} className="containerBtnEdit">
        <button id="btnPencil">
          <img src={icPencil} className="iconPencil"/>
        </button>
    </NavLink>
  );
}

export default ButtonEdit;