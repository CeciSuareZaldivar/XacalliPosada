import React from 'react';
// Import CSS
import '../css/iconMenuLines.css';
// Import img
import icMenu from '../img/iconMenuLines.svg';

function iconMenu() {
  return (
    <div className="containerIconMenu">
        <img src={icMenu} className="iconMenu"/>
    </div>
  );
}

export default iconMenu;
