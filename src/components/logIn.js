import React from 'react';
// Import CSS
import '../css/logIn.css';
// Import img
import icUser from '../img/iconUser.svg';
import icPass from '../img/iconPassword.svg';
import icPhoto from '../img/iconPhoto.svg';
// Import components
import LogoXacalliPosada from './logoXacalliPosada';


function LogIn() {
  return (
    <div className="LogInApp">
      <LogoXacalliPosada/>
      <div class="containerLogIn">
        <br></br>
        <img src={icPhoto} className="iconPhoto"/>
        <br></br><br></br>
        <div class="containerUser">
          <img src={icUser} className="iconUser"/>
          <input type="text" class="inputLogIn" placeholder="User"/>
        </div>
        <br></br>
        <div class="containerPass">
          <img src={icPass} className="iconPass"/>
          <input type="text" class="inputLogIn" placeholder="Password"/>
        </div>
        <br></br>
        <button id="btnSign">Sign In</button>
        <br></br><br></br>
        <p className="txtForgot">Forgot your password?</p>
      </div>
    </div>
  );
}

export default LogIn;