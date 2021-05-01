import React from 'react';
// Import CSS
import '../css/iconMenuTriangle.css';
// Import img
import icMenuTri from '../img/iconMenuTriangle.svg';


function iconMenuTriangle() {
  return (
    <button id="btnMenuTri">
       <img src={icMenuTri} className="iconMenuTri"/>
    </button>
  );
}

export default iconMenuTriangle;