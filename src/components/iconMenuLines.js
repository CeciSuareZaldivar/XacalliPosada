import React from 'react';
// Import CSS
import '../css/iconMenuLines.css';
// Import img
import icMenuLine from '../img/iconMenuLines.svg';


function iconMenuLines() {
  return (
    <button id="btnMenuLines">
       <img src={icMenuLine} className="iconMenuLine"/>
    </button>
  );
}

export default iconMenuLines;