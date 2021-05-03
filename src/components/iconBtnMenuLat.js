import React from 'react';
// Import CSS
import '../css/iconBtnMenuLat.css';
// Import img   import icUser from '../img/iconUser.svg';
import icReservaciones from '../img/iconReservaciones.svg';
// Import components


function IcnButttonNavLat() {
  return (
    <div className="containericBtnNavLat">
        <img src={icReservaciones} className="iconReservaciones"/>
    </div>
  );
}

export default IcnButttonNavLat;

