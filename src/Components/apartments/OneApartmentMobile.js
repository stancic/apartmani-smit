import React from 'react'
import { AiOutlineUnorderedList } from 'react-icons/ai';
import { BsCalendar } from 'react-icons/bs';
import { FaEuroSign } from 'react-icons/fa'
function OneApartmentMobile({ name, description, abovePrice, price, belowPrice, 
	equipment, availibility, galleryThumbnail, galleryTitle, images, buttonText,
	priceMenu
}) {
	const imagesGrid = images;

	return (
		<div className="mobile-apartment-container">	
			<div className="apartment-detail-container-mobile">
				<div className="apartment-name-container-mobile">
					<h1 className="apartment-name-mobile">{name}</h1>
				</div>
				<div className="apartment-description-container-mobile">
					<p className="apartment-description-mobile">{description}</p>
				</div>

				<div className="gallery-thumbnail-and-grid-container">
					<div className="gallery-thumbnail-and-title-container-mobile">
						<div className="gallery-thumbnail-container-mobile">
							<img src={galleryThumbnail} alt="gallery thumbnail" className="mobile-thumbnail"/>
						</div>
						<div className="gallery-title-container-mobile">
							<p className="gallery-title-mobile">{galleryTitle}</p>
						</div>
					</div>
					<div className="gallery-grid-container-mobile">
						{imagesGrid.map(image => {
						return(
							<div className="image" key={image.id}>
								<img src={image.image} alt={image.description} className="image-mobile"/>
							</div>
						)
					})}
					</div>
				</div>
				
				<div className="price-container-mobile">
					<p className="around-price">{abovePrice} <span className="price-mobile">{price}</span> {belowPrice}</p>
				</div>
				<div className="buttons-container-mobile">
					<div className="equipment-container-mobile">
						<AiOutlineUnorderedList />
						<p>{equipment}</p>
					</div> 
					<div className="availibility-container-mobile">
						<BsCalendar />
						<p>{availibility}</p>
					</div> 	
					<div className="price-menu-container-mobile">
						<FaEuroSign />
						<p>{priceMenu}</p>
					</div>
				</div>
				<div className="request-button-container-mobile">
					<p>{buttonText}</p>
				</div>
			</div>
		</div>
	)
}

export default OneApartmentMobile
