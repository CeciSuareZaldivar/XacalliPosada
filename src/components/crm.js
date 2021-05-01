import React from 'react';
// Import CSS
import '../css/crm.css';
// Import img   import icUser from '../img/iconUser.svg';

// Import components
import NavLateral from './navLateral';
import NavHeader from './navHeader';
import Table from './table';


function AppCrm() {
  return (
    <div class="containerCrm">
      <div class="containerLeft">
        <NavLateral className="navLat"/>
      </div>
      <div class="containerRight">
        <div className="containerNavHea">
          <NavHeader className="navHeader"/>
        </div>

        <div class="containerDashboard">
          <div class="MenuDashboard">
            
          </div>
          <div class="dashboard">
            <Table/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AppCrm;