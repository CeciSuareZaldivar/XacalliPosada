import React from 'react';
import '../css/prices.css'
import cab1 from './../img/cabana1.jpg';
import cab2 from './../img/cabana2.jpg';

function Service(){
	return (

		<div className="price">
			<h1>Precios cabañas</h1>
			<div className="price-info">
				<div className="price-des">
				    <img className="price-img" src={cab1} alt=""/>
					<p>Cuenta con 6 cabañas/habitaciones:
						5 Tienen cama matrimonial, son para 2 personas y tiene un precio por noche de $1,300 cada una.
						<br/>Se agregará una 7ma cabaña/habitación con la que se interpretará que ya no cuenta con disponibilidad el hotel.
						La capacidad total del hotel es de 13 personas.
						Todas las cabañas/habitaciones tienen: Baño. Pequeño clóset. Escritorio y silla. Televisión y DVD. 
					</p>
					<strong>Precio</strong>
				</div>
				<div className="price-des">
				    <img className="price-img" src={cab2} alt=""/>
					<p>
						1 Tiene cama matrimonial e individual, es para 3 personas y tiene un precio por noche de $1,600.
						<br/>Se agregará una 7ma cabaña/habitación con la que se interpretará que ya no cuenta con disponibilidad el hotel.
						La capacidad total del hotel es de 13 personas.
						Todas las cabañas/habitaciones tienen: Baño. Pequeño clóset. Escritorio y silla. Televisión y DVD. 
					</p>
					<strong>Precio</strong>
				</div>
			</div>
		</div>
	)
};

export default Service;