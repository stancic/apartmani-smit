import React, { useEffect } from 'react'
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { closeGallery } from '../../../reducers/galleryReducer'
import { AiOutlineArrowLeft, AiOutlineArrowRight, AiOutlineClose} from 'react-icons/ai'
import './Gallery.scss'

function Gallery() {
	const dispatch = useDispatch()
	const galleryStatus = useSelector(store => store.galleryStatus.status);
	const images = useSelector(store => store.imagesStatus);
	let imageId = useSelector(store => store.galleryStatus.imageID);
	console.log('IMG ID', imageId)
	let [imgID, setImgID] = useState(0)
	useEffect(()=>{
		setImgID(imageId)
	}, [imageId])

	const handleGalleryClose = () => {
		dispatch(closeGallery());
		document.body.style.overflow = "overlay";
	}

	const handlePrevImage = () => {
		if(imgID === 0 || imgID === 7 || imgID === 14) setImgID(imgID);
		else setImgID(imgID - 1);
	}

	const handleNextImage = () => {
		if(imgID === 6 || imgID === 13 || imgID === 20) setImgID(imgID);
		else setImgID(imgID + 1);
	}
	console.log(imgID)
	return (
		<div className="gallery-container" style={galleryStatus ? {display: 'flex'} : {'display': 'none'}}>
				<div className="image-container" id="image-container">
					<img src={images[imgID].image} alt="apartment" className="opened-image"/>
					<div className="arrow-back-container" onClick={handlePrevImage}>
						<AiOutlineArrowLeft className="gallery-icon"/>
					</div>
					<div className="arrow-forward-container" onClick={handleNextImage}>
						<AiOutlineArrowRight className="gallery-icon"/>
					</div>
					<div className="close-gallery-container" onClick={handleGalleryClose}>
						<AiOutlineClose className="gallery-icon"/>
					</div>
				</div>
		</div>
	)
}

export default Gallery
