import React from 'react';
// Import CSS
import '../css/containerMenuCrm.css';
// Import components
import ButttonMenuCrm from './btnMenuCrm';
import icReservaciones from '../img/iconReservaciones.svg';



class ContainerMenuCrm extends React.Component {
  render () {
    return (
      <div class="menuCrm">
      <div class="containerMenuCrm">
        <ButttonMenuCrm tittle="Reservaciones"/>
        <ButttonMenuCrm tittle="Prospectos"/>
        <ButttonMenuCrm tittle="Clientes"/>
        <ButttonMenuCrm tittle="Usuarios"/>
      </div>
    </div>
    )
  }
}

export default ContainerMenuCrm;