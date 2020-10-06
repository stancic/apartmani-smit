import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { closeGallery } from '../../../reducers/galleryReducer'


function Gallery() {
	const dispatch = useDispatch()
	const galleryStatus = useSelector(store => store.galleryStatus);
	const handleGalleryClose = () => {
		dispatch(closeGallery())
	}
	console.log('gs', galleryStatus)
	return (
		<div style={galleryStatus ? {display: 'block'} : {'display': 'none'}}>
				<button onClick={handleGalleryClose}>close</button>
		</div>
	)
}

export default Gallery
