import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { closeGallery } from '../../../reducers/galleryReducer'
import './Gallery.scss'

function Gallery() {
	const dispatch = useDispatch()
	const galleryStatus = useSelector(store => store.galleryStatus);

	const handleGalleryClose = () => {
		dispatch(closeGallery());
		document.body.style.overflow = "scroll";
	}

	return (
		<div className="gallery-container" style={galleryStatus ? {display: 'flex', left:'0%'} : {'display': 'none'}}>
				<div className="image-container" id="imageContainer">
				image
					<div className="arrow-back-container">
						back
					</div>
					<div className="arrow-forward-container">
						forw
					</div>
					<div className="close-gallery-container" onClick={handleGalleryClose}>
						x
					</div>
				</div>
		</div>
	)
}

export default Gallery
