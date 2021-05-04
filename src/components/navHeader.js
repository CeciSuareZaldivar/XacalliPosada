import React from 'react';
// Import CSS
import '../css/navHeader.css';
// Import components
import IconMenuLines from './iconMenuLines';
import IdUser from './idUser';
import { Navbar, Container } from 'react-bootstrap';


function navHeader() {
  return (
    <Container className="container">
      <Navbar expand="lg">
        <div class="containerNav">
          <div className="containerIconMenuLines">
            <IconMenuLines className="iconMenuLines"/>
          </div>
          <div className="containerIDUser">
            <IdUser/>
          </div>
        </div>
      </Navbar>
    </Container>
  );
}

export default navHeader;