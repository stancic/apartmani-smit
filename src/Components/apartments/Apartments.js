import React from 'react'
import './Apartments.scss'
import { apartmentDataHR } from './Data'
import OneApartment from './OneApartment'

function Apartments({title}) {
	return (
		<div id="apartments" style={{backgroundColor: "#A7C4FF"}}>
			<div className="apartment-title-container">
				<h1 className="title">Apartmani.</h1>
			</div>
			<div className="apartment-detail-container">
				<OneApartment {...apartmentDataHR}/>
			</div>
		</div>
	)
}

export default Apartments
