import React from 'react';
// Import CSS
import '../css/btnMenuNavLat.css';
// Import img   import icUser from '../img/iconUser.svg';

// Import components
import IconBtnMenuLat from './iconBtnMenuLat';


class LabelLogIn extends React.Component {

  // handleClick = e => {
  //   alert(this.props.opcion);
  // };

  render () {
    return (
      <li className="containerMenuLat">
        <button id="btnNavLat" >
          <div class="containerIcon">  
            <IconBtnMenuLat/>
          </div>
            <div className="containerText">
            {this.props.tittle}
            </div>
        </button>
      </li>
    )
  }
}

export default LabelLogIn;