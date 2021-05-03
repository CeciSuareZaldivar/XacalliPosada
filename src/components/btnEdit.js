import React from 'react';
// Import CSS
import '../css/groupIconsView.css';
// Import img
import icPencil from '../img/iconPencil.svg';


function ButtonEdit() {
  return (
    <div className="containerBtnEdit">
        <button id="btnPencil">
          <img src={icPencil} className="iconPencil"/>
        </button>
    </div>
  );
}

export default ButtonEdit;