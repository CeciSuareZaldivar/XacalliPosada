import React from 'react';
// Import CSS
import '../css/app.css';
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
import viewTest from './viewTest';

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
          <Route exact path="/home/reservations" component={viewReservations}/>
          <Route exact path="/home/clients" component={viewClients}/>
          <Route exact path="/home/users" component={viewUsers}/>
          <Route exact path="/home/suppliers" component={viewSuppliers}/>
          <Route exact path="/home/marketing" component={viewMarketing}/>
          <Route exact path="/home/records" component={viewRecords}/>
          <Route exact path="/home/records/rooms" component={viewRecordsRooms}/>
          <Route exact path="/home/records/services" component={viewRecordsServices}/>
          <Route exact path="/test" component={viewTest}/>
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