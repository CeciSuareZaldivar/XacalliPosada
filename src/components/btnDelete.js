import React from 'react';
// Import CSS
import '../css/groupIconsView.css';
// Import img
import icDelete from '../img/iconDelete.svg';


function ButtonDelete() {
  return (
        <button id="btnDelete">
          <img src={icDelete} className="iconDelete"/>
        </button>
  );
}

export default ButtonDelete;