import React from 'react';
// Import CSS
import '../css/btnMenuNavLat.css';
// Import img   import icUser from '../img/iconUser.svg';

// Import components
import IconBtnMenuLat from './iconBtnMenuLat';


class ButttonNavLat extends React.Component {
  render () {
    return (
      <div className="containerMenuLat">
        <button id="btnNavLat">
          <div class="containerIcon">  
            <IconBtnMenuLat/>
          </div>
            <div className="containerText">
            {this.props.tittle}
            </div>
        </button>
    </div>
    )
  }
}

export default ButttonNavLat;