import React from 'react';
// Import CSS
import '../css/iconsMenu.css';
// Import img
import icClient from '../img/iconClient.svg';

function iconClient() {
    return (
        <div className="containerIconClient">
          <img src={icClient} className="iconClient" alt="icon_client"/>
        </div>
    );
  }
  
  export default iconClient;