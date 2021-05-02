import React from 'react';
// Import CSS
import '../css/containerMenuNavLat.css';
// Import components
import ButttonNavLat from './btnMenuNavLat';


function ContainerMenuNavLateral(props) {
  return (
    <div class="navLateral">
      <ul class="containerMenuLat">
        <ButttonNavLat tittle="Reservaciones" opcion="1" />
        <ButttonNavLat tittle="Prospectos" opcion="2" />
        <ButttonNavLat tittle="Clientes" opcion="3" />
        <ButttonNavLat tittle="Usuarios" opcion="4" />
      </ul>
    </div>
  );
}

export default ContainerMenuNavLateral;