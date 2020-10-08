const imagesReducer = (state = [], action) => {
	switch(action.type){
		case('LOAD_IMAGES'): return action.data;
		case('UNLOAD_IMAGES'): return action.data;
		default: return state;
	}
}

export const loadImages = (images) => {
	return async dispatch => {
		dispatch({
			type: 'LOAD_IMAGES',
			data: images
		})
	}
}

export const unLoadImages = () => {
	return async dispatch => {
		dispatch({
			type: 'UNLOAD_IMAGES',
			data: []
		})
	}
}

export default imagesReducer