import React from 'react';
// Import CSS
import '../css/templateEditProspect.css';
// Import img
import { Button } from 'react-bootstrap';
import { Form, FormControl,FormGroup, FormLabel } from 'react-bootstrap';

function templateEditProspect() {
  return (
    <div className="containerTemplateEditProspect">
        <Form>
            <Form.Row className="containerRow">
                <FormGroup controlId="numberId" className="containerInputs">
                    <FormLabel>No.</FormLabel>
                    <FormControl type="text" className="inputSmall" />
                </FormGroup>

                <FormGroup controlId="name" className="containerInputs">
                    <FormLabel>Nombre</FormLabel>
                    <FormControl type="text" />
                </FormGroup>

                <FormGroup controlId="phone" className="containerInputs">
                    <FormLabel>Teléfono</FormLabel>
                    <FormControl />
                </FormGroup>

                <FormGroup controlId="numberPerson" className="containerInputs">
                    <FormLabel className="txtInputs">No. Personas</FormLabel>
                    <FormControl as="select" defaultValue="Choose..." className="inputSmall">
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                        <option>6</option>
                        <option>7</option>
                        <option>8</option>
                        <option>9</option>
                        <option>10</option>
                        <option>11</option>
                        <option>12</option>
                        <option>13</option>
                        <option>14</option>
                    </FormControl>
                </FormGroup>

                <FormGroup controlId="numberPets" className="containerInputs">
                    <FormLabel>No. Mascotas</FormLabel>
                    <FormControl as="select" defaultValue="Choose..." className="inputSmall">
                        <option>0</option>
                        <option>1</option>
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                    </FormControl>
                </FormGroup>

            </Form.Row>

            <Form.Row className="containerRow">

                <FormGroup controlId="dateRegistration" className="containerInputs">
                    <FormLabel>Fecha de Registro Reservación</FormLabel>
                    <FormControl type="date" />
                </FormGroup>

                <FormGroup controlId="dateStart" className="containerInputs">
                    <FormLabel>Fecha Inicio Reservación</FormLabel>
                    <FormControl type="date"/>
                </FormGroup>

                <FormGroup controlId="dateEnd" className="containerInputs">
                    <FormLabel>Fecha Termino Reservación</FormLabel>
                    <FormControl type="date"/>
                </FormGroup>
            </Form.Row>

            <Form.Row className="containerRow">
                <FormGroup controlId="advance" className="containerInputs">
                <FormLabel>Anticipo</FormLabel>
                <FormControl />
                </FormGroup>

                <FormGroup controlId="state" className="containerInputs">
                <FormLabel>Estado</FormLabel>
                    <FormControl as="select" defaultValue="Choose...">
                        <option>Se le dio información</option>
                        <option>No se ha podido contactar</option>
                        <option>Checando Disponibilidad</option>
                        <option>Sin Disponibilidad</option>
                        <option>No le interesa</option>
                        <option>Lo pensará</option>
                    </FormControl>
                </FormGroup>

                <FormGroup controlId="idEmployee" className="containerInputs">
                <FormLabel>ID Vendedor</FormLabel>
                    <FormControl as="select" defaultValue="Choose...">
                        <option>e01</option>
                        <option>e02</option>
                        <option>e03</option>
                        <option>e04</option>
                    </FormControl>
                </FormGroup>
            </Form.Row>

            <div className="containerButtons">
                <Button id="btnDone" type="submit">
                    Aceptar
                </Button>

                <Button id="btnCancel" type="submit">
                    Cancelar
                </Button>
            </div>
        </Form>
    </div>
  );
}

export default templateEditProspect;