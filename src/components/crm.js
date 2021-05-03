import React from 'react';
// Import CSS
import '../css/crm.css';
// Import components
import NavLateral from './navLateral';
import NavHeader from './navHeader';

class AppCrm extends React.Component {

  render (){
    return(
      <div className="containerCrm">
      <div className="containerLeft">
        <NavLateral className="navLat"/>
      </div>
      <div className="containerRight">
        <div className="containerNavHea">
          <NavHeader className="navHeader"/>
        </div>
        <div className="dashboard">
          <div className="tittleDasboard">
            <p>{this.props.titulo}</p> 
          </div>
          <div className="containerDashboard">
            {this.props.children} 
          </div>
        </div>
      </div>
    </div>
    )
  }
}

export default AppCrm;