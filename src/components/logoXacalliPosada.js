import React from 'react';
// Import CSS
import '../css/logoXacalliPosada.css';
// Import img
import logo from '../img/logo.svg';

function LogoXacalliPosada() {
    return (
      <div className="containerLogo">
          <img src={logo} className="logoXacalli" alt="XacalliPosada" />
      </div>
    );
  }
  
  export default LogoXacalliPosada;  