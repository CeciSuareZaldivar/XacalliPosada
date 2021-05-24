import React from 'react';
//import React, {useHistory} from 'react';
import { useHistory } from "react-router-dom";
// Import CSS
import '../css/logIn.css';
// Import img
import icUser from '../img/iconUser.svg';
import icPass from '../img/iconPassword.svg';
// Import components
import LogoXacalliPosada from './logoXacalliPosada';
import IconPhotoUser from './iconPhotoUser';



function LogIn() {

  const [password, setPassword]= React.useState('');
  const [username, setUserName] = React.useState('');


  let history = useHistory();
  
  const handleChange = (e) => {
    setUserName(e.target.value)
  }
  const handleChange1 = (e) => {
    setPassword(e.target.value)
  }

  const handleSubmit =(e) => {
    e.preventDefault()
    setUserName(e.target.value);
    setPassword(e.target.value);
    if (!("Admin" === username && "Admin" === password )) {
        alert("El Usuario " + '"'+username + '"' + " o la Contraseña son invalidos");

    }else{
      history.push('/Home')
    }
  }

  return (
    <form onSubmit={handleSubmit} >
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
              <img src={icUser} className="iconUser" alt="User Icon"/>
              <input type="text" className="inputLogIn" placeholder="User" value={username} onChange={handleChange}/>
            </div>
            <br></br>
            <div className="containerPass">
              <img src={icPass} className="iconPass" alt="Password Icon"/>
              <input type="password" className="inputLogIn" placeholder="Password" value={password} onChange={handleChange1}/>
            </div>
            <br></br>
            <button id="btnSign">Sign In</button>
            <br></br><br></br>
            <p className="txtForgot">Forgot your password?</p>
          </div>
        </div>
      </div>
    </form>
  );
}

export default LogIn;