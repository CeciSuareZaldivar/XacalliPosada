import React from 'react';
// Import CSS
import '../css/containerMenuNavLat.css';
// Import components
import ButttonNavLat from './btnMenuNavLat';


function ContainerMenuNavLateral() {
  return (
    <div class="navLateral">
        <div class="containerMenuLat">
        <ButttonNavLat tittle="Reservaciones"/>
        <ButttonNavLat tittle="Prospectos"/>
        <ButttonNavLat tittle="Clientes"/>
        <ButttonNavLat tittle="Usuarios"/>
        </div>

    </div>
  );
}

export default ContainerMenuNavLateral;