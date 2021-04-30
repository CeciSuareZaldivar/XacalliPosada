import React from 'react';
// Import CSS
import '../css/error404.css';
// Import img
import error from '../img/error404.svg';
import home from '../img/btnHome.svg';
// Import components
import LogoXacalliPosada from './logoXacalliPosada';


function error404() {
  return (
    <div className="container404">
        <LogoXacalliPosada/>
        <div className="containerError">
          <img src={error} className="error404"/>
          <button id="btnHome">
            <img src={home} className="btnHome"/>
          </button>
        </div>
    </div>
  );
}

export default error404;