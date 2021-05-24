import React from 'react';
// Import CSS
import '../css/iconsMenu.css';
// Import img
import icMarketing from '../img/iconMarketing.svg';

function iconMarketing() {
    return (
        <div className="containerIconMarketing">
          <img src={icMarketing} className="iconMarketing" alt="icon_Marketing"/>
        </div>
    );
  }
  
  export default iconMarketing;

