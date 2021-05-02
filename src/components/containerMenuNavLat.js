import React from 'react';
// Import CSS
import '../css/containerMenuNavLat.css';
// Import components
import ButttonNavLat from './btnMenuNavLat';


function ContainerMenuNavLateral(props) {
  return (
    <div class="navLateral">
      <ul class="containerMenuLat">
        <ButttonNavLat path="/crm/reservations" tittle="Reservaciones"/>
        <ButttonNavLat path="/crm/prospects" tittle="Prospectos"/>
        <ButttonNavLat path="/crm/clients" tittle="Clientes"/>
        <ButttonNavLat path="/crm/users" tittle="Usuarios"/>
      </ul>
    </div>
  );
}

export default ContainerMenuNavLateral;