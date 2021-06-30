import React from 'react';
// Import CSS
import '../css/groupIconsView.css';
// Import img
import icPencil from '../img/iconPencil.svg';


function ButtonEdit() {
  return (
        <button id="btnEdit">
          <img src={icPencil} className="iconPencil" alt="button_edit"/>
        </button>
  );
}

export default ButtonEdit;