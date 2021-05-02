import React from 'react';
// Import CSS
import '../css/navLateral.css';
// Import img   import icUser from '../img/iconUser.svg';

// Import components
import LogoXacalliPosada from './logoXacalliPosada';
import ContainerMenuNavLateral from './containerMenuNavLat';


function ContainerNavLateral (props) {
   
  // handleClick = e => {
  //    //alert("hola mama");
  //    console.log("hola");
  // };


  return (
    <div class="navLateral" className={props.className}>
        <LogoXacalliPosada/>
        <div class="containerMenu">
          <ContainerMenuNavLateral />
        </div>
    </div>
  );
}

export default ContainerNavLateral;