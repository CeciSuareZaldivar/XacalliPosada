import React from 'react';
// Import CSS
import '../css/iconsMenu.css';
// Import img
import icReservations from '../img/iconReservations.svg';

function iconReservations() {
    return (
        <div className="containerIconReservations">
          <img src={icReservations} className="iconReservations" alt="icon_reservations"/>
        </div>
    );
  }
  
  export default iconReservations;