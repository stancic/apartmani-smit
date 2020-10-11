import React from 'react'
import { AiOutlineUnorderedList } from 'react-icons/ai';
import { BsCalendar } from 'react-icons/bs';
import { HashLink as Link } from 'react-router-hash-link'
import { FaEuroSign } from 'react-icons/fa'
import { openGallery } from '../../reducers/galleryReducer'
import { useDispatch } from 'react-redux';
import { openExtraDataMenu } from '../../reducers/menuReducer';

function OneApartmentMobile({ 	name, description, abovePrice, price, belowPrice, 
								equipment, availibility, galleryThumbnail, galleryTitle, images, buttonText,
								priceMenu}) 
{
	const imagesGrid = images.slice(1);
	const dispatch = useDispatch();
	const handleGalleryShow = (id) => {
		dispatch(openGallery(id));
		document.body.style.overflow = "hidden";
	}

	const handlePriceMenuOpen = () => {
		dispatch(openExtraDataMenu());
		document.body.style.overflow = "hidden";
	}
	
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
							<img src={images[0].image} alt="gallery thumbnail" className="mobile-thumbnail"
								onClick={()=>handleGalleryShow(images[0].id)}
							/>
						</div>
						<div className="gallery-title-container-mobile">
							<p className="gallery-title-mobile">{galleryTitle}</p>
						</div>
					</div>
					<div className="gallery-grid-container-mobile">
						{imagesGrid.map(image => {
						return(
							<div className="image" key={image.id}>
								<img src={image.image} alt={image.description} className="image-mobile" onClick={()=>handleGalleryShow(image.id)}/>
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
						<AiOutlineUnorderedList className="equipment-icon"/>
						<p>{equipment}</p>
					</div> 
					<div className="availibility-container-mobile">
						<BsCalendar className="availibility-icon"/>
						<p>{availibility}</p>
					</div> 	
					<div className="price-menu-container-mobile" onClick={handlePriceMenuOpen}>
						<FaEuroSign className="price-icon"/>
						<p>{priceMenu}</p>
					</div>
				</div>
				<Link smooth to="/#/about-us-message" style={{textDecoration:'none'}}>
					<div className="request-button-container-mobile">
						<p>{buttonText}</p>
					</div>
				</Link>	
			</div>
		</div>
	)
}

export default OneApartmentMobile
