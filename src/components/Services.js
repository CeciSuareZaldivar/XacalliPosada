import React from 'react';
import '../css/services.css'
import image from './../img/log.jpg';

function Service(){
	return (

		<div className="service">
			<h1>Menu de Servicios</h1>
			<div>
				<button className="ser-button">Hiking</button>
				<button className="ser-button">Fogata</button>
				<button className="ser-button">Wifi</button>
				<button className="ser-button">Masaje</button>
				<button className="ser-button">Asador</button>
				<button className="ser-button">Telescopio</button>
				<button className="ser-button">Camping</button>
			</div>
			<div className="ser-info">
				<img className="ser-img" src={image} alt=""/>
				<div className="ser-des">
					<h3>Fogata</h3>
					<p>Fogata con duración de 2 hrs. </p>
					<strong>$ 400.00</strong>
				</div>
			</div>
		</div>
	)
};

export default Service;