import React from 'react'
import './Apartments.scss'
import { apartmentADataHR } from './apartmentData/apartmentA_data'
import { apartmentBDataHR } from './apartmentData/apartmentB_data'
import { apartmentCDataHR } from './apartmentData/apartmentC_data'
import OneApartment from './OneApartment'
import OneApartmentMobile from './OneApartmentMobile'
import { loadImages } from '../../reducers/imagesReducer'
import { useDispatch } from 'react-redux'


function Apartments({title, priceMenu}) {
	const handlePriceMenuClick = () => {
		console.log("hehe");
	}
	const dispatch = useDispatch();
	const allImages = [].concat(apartmentADataHR.images).concat(apartmentBDataHR.images).concat(apartmentCDataHR.images)
	dispatch(loadImages(allImages))
	return (
		<div id="/apartments" className="apartments">
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
				<OneApartmentMobile {...apartmentADataHR} priceMenu={priceMenu}/>
				<OneApartmentMobile {...apartmentBDataHR} priceMenu={priceMenu}/>
				<OneApartmentMobile {...apartmentCDataHR} priceMenu={priceMenu}/>
			</div>
		</div>
	)
}

export default Apartments
