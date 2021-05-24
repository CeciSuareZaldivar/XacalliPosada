import React from 'react';
// Import CSS
import '../css/groupIconsView.css';
// Import img
import icPencil from '../img/iconPencil.svg';


function ButtonEdit() {
  return (
        <button id="btnEdit">
          <img src={icPencil} className="iconPencil"/>
        </button>
  );
}

export default ButtonEdit;