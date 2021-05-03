import React from 'react';
// Import CSS
import '../css/navMenuCrm.css';
// Import components
import ContainerMenuCrm from './containerMenuCrm';


function NavMenuCrm() {
  return (
    <div className="menuCrm">
        <div className="containerNavMenuCrm">
          <ContainerMenuCrm/>
        </div>
    </div>
  );
}

export default NavMenuCrm;