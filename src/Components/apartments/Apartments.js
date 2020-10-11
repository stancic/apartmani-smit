import React from 'react'
import './Apartments.scss'
import { apartmentADataHR } from './apartmentData/apartmentA_data'
import { apartmentBDataHR } from './apartmentData/apartmentB_data'
import { apartmentCDataHR } from './apartmentData/apartmentC_data'
import OneApartment from './OneApartment'
import OneApartmentMobile from './OneApartmentMobile'
import { loadImages } from '../../reducers/imagesReducer'
import { useDispatch } from 'react-redux'
import { openExtraDataMenu } from '../../reducers/menuReducer'


function Apartments({title, priceMenu}) {
	const dispatch = useDispatch();
	const allImages = [].concat(apartmentADataHR.images).concat(apartmentBDataHR.images).concat(apartmentCDataHR.images)
	const handlePriceMenuOpen = () => {
		dispatch(openExtraDataMenu());
		document.body.style.overflow = "hidden";
	}
	
	dispatch(loadImages(allImages));
	return (
		<div id="/apartments" className="apartments">
			<div className="apartment-title-container">
				<h1 className="title">{title}</h1>
			</div>
			<div className="price-menu-button-container" onClick={handlePriceMenuOpen}>
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
