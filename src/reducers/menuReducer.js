const menuReducer = (state = {status: false}, action) =>{
	switch(action.type){
		case('OPEN_EXTRA_DATA_MENU'): return action.data;
		case('CLOSE_EXTRA_DATA_MENU'): return action.data;
		default: return state;
	}
}

export const openExtraDataMenu = () => {
	return async dispatch => {
		dispatch({
			type: 'OPEN_EXTRA_DATA_MENU',
			data: {
				status: true
			}
		})
	}
}


export const closeExtraDataMenu = () => {
	return async dispatch => {
		dispatch({
			type: 'CLOSE_EXTRA_DATA_MENU',
			data: {
				status: false
			}
		})
	}
}


export default menuReducer