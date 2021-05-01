import React from 'react';
// Import CSS
import '../css/navHeader.css';
// Import components
import IconMenuLines from './iconMenuLines';
import IdUser from './idUser';


function navHeader() {
  return (
    <div className="containerNav">
      <div className="containerIconMenuLines">
          <IconMenuLines className="iconMenuLines"/>
      </div>
      <div className="containerIDUser">
        <IdUser/>
      </div>
    </div>
    
  );
}

export default navHeader;