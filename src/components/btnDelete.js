import React from 'react';
// Import CSS
import '../css/groupIconsView.css';
// Import img
import icDelete from '../img/iconDelete.svg';



function ButtonDelete() {
  return (
    <div className="containerBtnDelete">
        <button id="btnDelete">
          <img src={icDelete} className="iconDelete"/>
        </button>
    </div>
  );
}

export default ButtonDelete;