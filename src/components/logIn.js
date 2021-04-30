import React from 'react';
// Import CSS
import '../css/logIn.css';
// Import img
import icUser from '../img/iconUser.svg';
import icPass from '../img/iconPassword.svg';
// Import components
import LogoXacalliPosada from './logoXacalliPosada';
import IconPhotoUser from './iconPhotoUser';


function LogIn() {
  return (
    <div className="LogInApp">
      <div className="containerLogoLogIn">
        <LogoXacalliPosada className="logoLogIn"/>
      </div>
      <div className="containerLogIn">
        <div className="cardLogIn">
          <br></br>
          <IconPhotoUser className="iconPhoto"/>
          <br></br><br></br>
          <div className="containerUser">
            <img src={icUser} className="iconUser"/>
            <input type="text" className="inputLogIn" placeholder="User"/>
          </div>
          <br></br>
          <div className="containerPass">
            <img src={icPass} className="iconPass"/>
            <input type="text" className="inputLogIn" placeholder="Password"/>
          </div>
          <br></br>
          <button id="btnSign">Sign In</button>
          <br></br><br></br>
          <p className="txtForgot">Forgot your password?</p>
        </div>
      </div>
    </div>
  );
}

export default LogIn;