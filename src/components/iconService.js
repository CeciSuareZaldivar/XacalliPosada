import React from 'react';
// Import CSS
import '../css/views.css';
// Import img
import icService from '../img/iconService.svg';

function iconService() {
    return (
        <div className="containerIconRecords">
          <img src={icService} className="iconService" alt="icon_service"/>
        </div>
    );
  }
  
  export default iconService;