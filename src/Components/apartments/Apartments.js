import React from 'react'
import './Apartments.scss'
import { apartmentADataHR } from './apartmentData/apartmentA_data'
import { apartmentBDataHR } from './apartmentData/apartmentB_data'
import { apartmentCDataHR } from './apartmentData/apartmentC_data'
import OneApartment from './OneApartment'

function Apartments({title, priceMenu}) {
	const handlePriceMenuClick = () => {
		console.log("hehe");
	}
	return (
		<div id="apartments" style={{backgroundColor: "#A7C4FF"}}>
			<div className="apartment-title-container">
				<h1 className="title">{title}</h1>
			</div>
			<div className="price-menu-container" onClick={handlePriceMenuClick}>
				<p className="price-title">{priceMenu}</p>
			</div>
			<div className="apartment-detail">
				<OneApartment {...apartmentADataHR}/>
				<OneApartment {...apartmentBDataHR}/>
				<OneApartment {...apartmentCDataHR}/>
			</div>
		</div>
	)
}

export default Apartments
