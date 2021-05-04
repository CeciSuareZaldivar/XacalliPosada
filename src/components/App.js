import React from 'react';
// Import CSS
import '../css/containerMenuNavLat.css';
// Import components
import Error404 from './error404';
// import LogIn from './logIn';
import Crm from './crm';
import Login from './logIn';

import viewReservations from './viewReservations';
import viewProspects from './viewProspects';
import viewClients from './viewClients';
import viewUsers from './viewUsers';
import viewWelcome from './viewWelcome';

import editProspect from './editProspect';

import PropTypes from 'prop-types';
import {BrowserRouter, Switch, Route, Redirect} from 'react-router-dom';


function App(Props) {

  return (
    <div class="container">
      <BrowserRouter>
        <Switch>
          <Redirect exact from="/" to="/login" />
          <Route path="/login" component={Login}/>
          <Route exact path="/crm" component={viewWelcome}/>
          <Route path="/crm/reservations" component={viewReservations}/>
          <Route exact path="/crm/prospects" component={viewProspects}/>
          <Route path="/crm/clients" component={viewClients}/>
          <Route path="/crm/users" component={viewUsers}/>
          <Route path="/crm/prospects/edit" component={editProspect}/>
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