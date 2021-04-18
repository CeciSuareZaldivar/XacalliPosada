import React from 'react';
import '../css/carrousel_background.css'
import image from './../img/background.jpeg';

function Carrousel_background(){
	return (

		<div className="box_background">
            <img className="img_background" src={image} alt=""/>
		</div>
	)
};

export default Carrousel_background;