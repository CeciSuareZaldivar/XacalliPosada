import React from 'react';
// Import CSS
import '../css/App.css';
// Import components
  // Import pages
import Error404 from './error404';
import Login from './logIn';
  // Import Views
import viewWelcome from './viewWelcome';
import viewLeads from './viewLeads';
import viewReservations from './viewReservations';
import viewClients from './viewClients';
import viewUsers from './viewUsers';
import viewSuppliers from './viewSuppliers';
import viewMarketing from './viewMarketing';
import viewRecords from './viewRecords';
import viewRecordsRooms from './viewRecordsRooms';
import viewRecordsServices from './viewRecordsServices';

import PropTypes from 'prop-types';
import {BrowserRouter, Switch, Route, Redirect} from 'react-router-dom';

function App(Props) {

  return (
    <div class="containerApp">
      <BrowserRouter>
        <Switch>
          <Redirect exact from="/" to="/login" />
          <Route path="/login" component={Login}/>
          <Route exact path="/home" component={viewWelcome}/>
          <Route exact path="/home/leads" component={viewLeads}/>
          <Route path="/home/reservations" component={viewReservations}/>
          <Route path="/home/clients" component={viewClients}/>
          <Route path="/home/users" component={viewUsers}/>
          <Route path="/home/suppliers" component={viewSuppliers}/>
          <Route path="/home/marketing" component={viewMarketing}/>
          <Route path="/home/records" component={viewRecords}/>
          <Route path="/home/records/rooms" component={viewRecordsRooms}/>
          <Route path="/home/records/services" component={viewRecordsServices}/>
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