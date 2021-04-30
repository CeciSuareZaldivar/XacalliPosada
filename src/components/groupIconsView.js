import React from 'react';
// Import CSS
import '../css/groupIconsView.css';
// Import img
import icDelete from '../img/iconDelete.svg';
import icEye from '../img/iconEye.svg';
import icPencil from '../img/iconPencil.svg';


function GroupIconsView() {
  return (
    <div className="containerGroupIcons">
        <button id="btnEye">
          <img src={icEye} className="iconEye"/>
        </button>
        <button id="btnPencil">
          <img src={icPencil} className="iconPencil"/>
        </button>
        <button id="btnDelete">
          <img src={icDelete} className="iconDelete"/>
        </button>
    </div>
  );
}

export default GroupIconsView;