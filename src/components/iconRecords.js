import React from 'react';
// Import CSS
import '../css/iconsMenu.css';
// Import img
import icRecords from '../img/iconRecords.svg';

function iconRecords() {
    return (
        <div className="containerIconRecords">
          <img src={icRecords} className="iconRecords" alt="icon_records"/>
        </div>
    );
  }
  
  export default iconRecords;