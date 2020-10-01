import React from 'react'
import './OneApartment.scss'
import './OneApartmentMobile.scss'
import { AiOutlineUnorderedList } from 'react-icons/ai'
import { BsCalendar } from 'react-icons/bs'
import Button from './Button';
import { HashLink as Link } from 'react-router-hash-link'

function OneApartment({ description, abovePrice, price, belowPrice, 
	equipment, availibility, galleryThumbnail, galleryTitle, images,
	buttonText
}) {
	
	const imagesGrid = images;
	return (
		
		<div className="apartment-detail-container">
			<div className="gallery-thumbnail-container">
				<img src={galleryThumbnail} alt="gallery thumbnail" className="gallery-thumbnail"/>
			</div>
			<div className="gallery-apartmentDesc-container">
				<div className="apartment-description-container">
					<div className="description">
						<p>{description}</p>
					</div>
					<div className="gallery-title">
						<p>{galleryTitle}</p>
					</div>
				</div>
				<div className="image-gallery-container">
					{imagesGrid.map(image => {
						return(
							<div className="image-container" key={image.id}>
								<img src={image.image} alt={image.description} className="image"/>
							</div>
						)
					})}
				</div>
			</div>
			<div className="equipment-availability-container">
				<div className="equipment-container">
					<div className="equipment-icon-container">
						<AiOutlineUnorderedList />
					</div>
					<div className="equipment-title">
						<p>{equipment}</p>
					</div>
				</div>
				<div className="availibility-container">
					<div className="availibility-icon-container">
						<BsCalendar />
					</div>
					<div className="availibility-title">
						<p>{availibility}</p>
					</div>
				</div>
			</div>
			<div className="price-container">
				<div className="price">
					<p className="above-price">
						{abovePrice}
					</p>
					<p className="price-value">
						{price}
					</p>
					<p className="below-price">
						{belowPrice}
					</p>
				</div>
				<div className="price-button">
					<Link smooth to="/#about-us-message">
						<Button button_text={buttonText} />
					</Link>					
				</div>
			</div>
		</div>
	)
}

export default OneApartment
