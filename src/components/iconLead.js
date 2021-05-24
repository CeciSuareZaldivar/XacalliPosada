import React from 'react';
// Import CSS
import '../css/iconsMenu.css';
// Import img
import icLead from '../img/iconLead.svg';

function iconLead() {
    return (
        <div className="containerIconLead" path="/crm/leads" >
          <img src={icLead} className="iconLead" alt="icon_lead"/>
        </div>
    );
  }
  
  export default iconLead;