import React from 'react';
// Import CSS
import '../css/crm.css';
// Import components
import NavLateral from './navLateral';
import NavHeader from './navHeader';

import { Container, Col, Row } from 'react-bootstrap';



class AppCrm extends React.Component {

  render (){
    return(
      <div className="containerCrm">
        <Container>
          <Row>
            <Col>
            <div className="containerLeft">
              <div className="containerNavHea">
                <NavHeader className="navHeader"/>
              </div>
              <NavLateral className="navLat"/>
            </div>

            </Col>
            <Col>
              <div className="containerRight">
                <div className="dashboard">
                  <div className="tittleDasboard">
                    <p>{this.props.titulo}</p> 
                  </div>
                  <div class="menuCrm">
                  </div>
                  <div className="containerDashboard">
                    {this.props.children} 
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
    </div>
    )
  }
}

export default AppCrm;