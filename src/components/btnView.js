import React from 'react';
// Import CSS
import '../css/groupIconsView.css';
// Import img
import icEye from '../img/iconEye.svg';


function ButtonView() {
  return (
        <button id="btnView">
          <img src={icEye} className="iconEye" alt="button_see"/>
        </button>
  );
}

export default ButtonView;