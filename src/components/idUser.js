import React from 'react';
// Import CSS
import '../css/idUser.css';
// Import components
import IconPhotoUser from './iconPhotoUser';
import IconMenuTriangle from './iconMenuTriangle';


function IdUser() {
  return (
      <div className="containerUser">
        <IconPhotoUser className="iconPhoto"/>
        <p className="txtIdUser">David Velazquez</p>
        <IconMenuTriangle/>
      </div>
  );
}

export default IdUser;