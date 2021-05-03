import React from 'react';
// Import CSS
import '../css/navLateral.css';
// Import img   import icUser from '../img/iconUser.svg';

// Import components
import LogoXacalliPosada from './logoXacalliPosada';
import ContainerMenuNavLateral from './containerMenuNavLat';


function ContainerNavLateral (props) {
  
  return (
    <div className="navLateral" className={props.className}>
        <LogoXacalliPosada/>
        <div className="containerMenu">
          <ContainerMenuNavLateral />
        </div>
    </div>
  );
}

export default ContainerNavLateral;