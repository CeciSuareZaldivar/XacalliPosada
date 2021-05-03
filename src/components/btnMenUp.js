import React from 'react';
// Import CSS
import '../css/groupIconsView.css';
// Import img
import icMenuUp from '../img/iconMenuUp.svg';



function ButtonMenuUp() {
  return (
    <div className="containerBtnMenuUp">
        <button id="btnMenuUp">
          <img src={icMenuUp} className="iconMenuUp"/>
        </button>
    </div>
  );
}

export default ButtonMenuUp;