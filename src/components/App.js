import React from 'react';
// Import CSS
import '../css/containerMenuNavLat.css';
// Import components
import Error404 from './error404';
// import LogIn from './logIn';
import Crm from './crm';
import Login from './logIn';
import PropTypes from 'prop-types';
import {BrowserRouter, Switch, Route, Redirect} from 'react-router-dom';


function App(Props) {

  return (
    <div class="container">
      <BrowserRouter>
        <Switch>
          <Redirect exact from="/" to="/login" />
          <Route path="/login" component={Login}/>
          <Route path="/Crm" component={Crm}/>
          <Route component={Error404}/>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

App.propTypes = {
  isLoggedIn: PropTypes.bool.isRequired
}

export default App;