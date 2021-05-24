import React from 'react';
// Import CSS
import '../css/views.css';
// Import img
import icRoom from '../img/iconRoom.svg';

function iconRooms() {
    return (
        <div className="containerIconRecords">
          <img src={icRoom} className="iconRooms" alt="icon_rooms"/>
        </div>
    );
  }
  
  export default iconRooms;