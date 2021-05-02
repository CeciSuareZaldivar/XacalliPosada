import React from 'react';
// Import CSS
import '../css/crm.css';
// Import img   import icUser from '../img/iconUser.svg';

// Import components
import NavLateral from './navLateral';
import NavHeader from './navHeader';
import Table from './table';
import NavMenuCrm from './navMenuCrm';


class AppCrm extends React.Component {
  state={opcion: {} };

  handleClick = e => {
    alert(e);
  };

  render (){
    return(
      <div class="containerCrm">
      <div class="containerLeft">
        <NavLateral className="navLat" bandera={this.handleClick}/>
      </div>
      <div class="containerRight">
        <div className="containerNavHea">
          <NavHeader className="navHeader"/>
        </div>
        <div class="dashboard">
          <div class="MenuDashboard">
            <NavMenuCrm/>
          </div>
          <div class="tittleDasboard">
            <p>Título Prueba</p> 
          </div>
          <div class="containerDashboard">
              <Table/>
          </div>
        </div>
      </div>
    </div>
    )
  }
}

export default AppCrm;