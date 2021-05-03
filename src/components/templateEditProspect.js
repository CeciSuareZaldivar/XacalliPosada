import React from 'react';
// Import CSS
import '../css/templateEditProspect.css';
// Import img


function templateEditProspect() {
  return (
    <div className="containerTemplateEditProspect">
        <div>
            <div className="number">
                <p>No.</p>
                <input type="text" className="editProspectNumber"/>
            </div>
            <div className="name">
                <p>Nombre</p>
                <input type="text" className="editProspectName"/>
            </div>
            <div className="phone">
                <p>Teléfono</p>
                <input type="text" className="editProspectPhone"/>
            </div>
            <div className="numberPerson">
                <p>No. Personas</p>
                <input type="text" className="editProspectNumberPerson"/>
            </div>
        </div>
        <div>
            <div className="numberPets">
                <p>No. Mascotas</p>
                <input type="text" className="editProspectNumberPets"/>
            </div>
            <div className="dateRegistration">
                <p>Fecha de Registro</p>
                <input type="text" className="editProspectDateRegistration"/>
            </div>
            <div className="dateStart">
                <p>Fecha Inicio Reservación</p>
                <input type="text" className="editProspectDateStart"/>
            </div>
            <div className="dateEnd">
                <p>Fecha Termino Reservación</p>
                <input type="text" className="editProspectDateEnd"/>
            </div>
        </div>
        <div>
            <div className="advance">
                <p>Anticipo</p>
                <input type="text" className="editProspectAdvance"/>
            </div>
            <div className="state">
                <p>Estado</p>
                <input type="text" className="editProspectState"/>
            </div>
            <div className="idEmployee">
                <p>ID Vendedor</p>
                <input type="text" className="editProspectIdEmployee"/>
            </div>
        </div>
            <div className="containerButtons">
                <button>Aceptar</button>
                <button>Cancelar</button>
            </div>
    </div>
  );
}

export default templateEditProspect;