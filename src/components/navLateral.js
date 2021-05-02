import React from 'react';
// Import CSS
import '../css/navLateral.css';
// Import img   import icUser from '../img/iconUser.svg';

// Import components
import LogoXacalliPosada from './logoXacalliPosada';
import ContainerMenuNavLateral from './containerMenuNavLat';


function ContainerNavLateral() {
  return (
    <div class="navLateral">
        <LogoXacalliPosada/>
        <div class="containerMenu">
          <ContainerMenuNavLateral/>
        </div>
    </div>
  );
}

export default ContainerNavLateral;