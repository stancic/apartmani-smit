import React, { useEffect } from 'react'
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { closeGallery } from '../../../reducers/galleryReducer'
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
		document.body.style.overflow = "scroll";
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
		<div className="gallery-container" style={galleryStatus ? {display: 'flex', left:'0%'} : {'display': 'none'}}>
				<div className="image-container" id="imageContainer">
					<img src={images[imgID].image} alt="apartment"/>
					<div className="arrow-back-container" onClick={handlePrevImage}>
						back
					</div>
					<div className="arrow-forward-container" onClick={handleNextImage}>
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
