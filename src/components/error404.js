import React from 'react';
// Import CSS
import '../css/error404.css';
// Import img
import error from '../img/error404.svg';
import home from '../img/btnHome.svg';
// Import components
import LogoXacalliPosada from './logoXacalliPosada';

import { NavLink } from 'react-router-dom';


function error404() {
  return (
    <div className="container404">
        <div className="logoError">
          <LogoXacalliPosada/>
        </div>
        <div className="containerError">
          <img src={error} alt="page_not_found"/>
            <NavLink id="btnHome" to='/home'>
              <img src={home} className="btnHome" alt="button_home"/>
            </NavLink>
        </div>
    </div>
  );
}

export default error404;