import React from 'react';
// Import CSS
import '../css/groupIconsView.css';
// Import img
import icMenuDown from '../img/iconMenuDown.svg';



function ButtonMenuDowm() {
  return (
    <div className="containerBtnMenuDowm">
        <button id="btnMenuDowm">
          <img src={icMenuDown} className="iconMenuDowm"/>
        </button>
    </div>
  );
}

export default ButtonMenuDowm;