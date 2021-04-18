import React from 'react';
import '../css/reservation.css'
import image from './../img/background2.jpeg';

function Reservation(){
	return (
		<>
			<div className="box_reservation">
				<h1>Reservation <br></br> Form </h1>
				<label>nombre </label>
				<input type="text"></input>
			</div>

			<div className="box-info">
				<img className="carrousel-info" src={image} alt=""/>
				<div className="content-info">
					<h1>Hotel Petfriendly </h1>
					<p>
						Xacalli es un espacio creado para disfrutar de la naturaleza, la tranquilidad y el aire puro, en el bello pueblo mágico de Tepoztlán. 
						Su calidez te brinda un concepto muy diferente a los hospedajes tradicionales, porque, Xacalli es sinónimo de familia, es hogar. 
						Y en lengua Náhuatl es tu casa.
					</p>
				</div>

			</div>
		</>
	)
};

export default Reservation;