import React from 'react';
// Import CSS
import '../css/btnMenuNavLat.css';
// Import img   import icUser from '../img/iconUser.svg';

// Import components
import IconBtnMenuLat from './iconBtnMenuLat';
import { NavLink } from 'react-router-dom';

class LabelLogIn extends React.Component {

  // handleClick = e => {
  //   alert(this.props.opcion);
  // };

  render () {
    return (
      <li className="containerMenuLat">
        <NavLink className="btnNavLat" to={this.props.path} activeClassName="btnNavLat-active">
          <div class="containerIcon">  
            <IconBtnMenuLat/>
          </div>
            <div className="containerText">
            {this.props.tittle}
            </div>
        </NavLink>
      </li>
    )
  }
}

export default LabelLogIn;