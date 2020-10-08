const galleryReducer = (state = {status: false, imageID: 0}, action) => {
	switch(action.type){
		case('OPEN_GALLERY'): return action.data;
		case('CLOSE_GALLERY'): return action.data;
		default: return state;
	}
}

export const openGallery = (id) => {
	return async dispatch => {
		dispatch({
			type: 'OPEN_GALLERY',
			data: {
				status: true,
				imageID: id
			}
		})
	}
}

export const closeGallery = () => {
	return async dispatch => {
		dispatch({
			type: 'CLOSE_GALLERY',
			data: {
				status: false,
				imageID: 0
			}
		})
	}
}


export default galleryReducer