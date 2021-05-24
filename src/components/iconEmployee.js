import React from 'react';
// Import CSS
import '../css/iconsMenu.css';
// Import img
import icEmployee from '../img/iconEmployee.svg';

function iconEmployee() {
    return (
        <div className="containerIconEmployee">
          <img src={icEmployee} className="iconEmployee" alt="icon_employee"/>
        </div>
    );
  }
  
  export default iconEmployee;