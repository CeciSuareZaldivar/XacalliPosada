import React from 'react';
// Import CSS
import '../css/iconsMenu.css';
// Import img
import icSupplier from '../img/iconSupplier.svg';

function iconSupplier() {
    return (
        <div className="containerIconSupplier">
          <img src={icSupplier} className="iconSupplier" alt="icon_Supplier"/>
        </div>
    );
  }
  
  export default iconSupplier;