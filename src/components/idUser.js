import React from 'react';
// Import CSS
import '../css/idUser.css';
// Import img
import icMnTriangle from '../img/iconMenuTriangle.svg';
// Import components
import IconPhotoUser from './iconPhotoUser';


function IdUser() {
  return (
      <div className="containerUser">
        <IconPhotoUser className="iconPhoto"/>
        <p className="txtIdUser">David Velazquez</p>
        <button id="btnMenTri">
          <img src={icMnTriangle} className="icMnTri"/>
        </button>
      </div>
  );
}

export default IdUser;