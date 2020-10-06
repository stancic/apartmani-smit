const galleryReducer = (state = false, action) => {
	switch(action.type){
		case('OPEN_GALLERY'): return action.data;
		case('CLOSE_GALLERY'): return action.data;
		default: return state;
	}
}

export const openGallery = () => {
	return async dispatch => {
		dispatch({
			type: 'OPEN_GALLERY',
			data: true
		})
	}
}

export const closeGallery = () => {
	return async dispatch => {
		dispatch({
			type: 'CLOSE_GALLERY',
			data: false
		})
	}
}


export default galleryReducer