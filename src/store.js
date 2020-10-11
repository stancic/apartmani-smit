import { createStore, applyMiddleware, combineReducers } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import galleryReducer from './reducers/galleryReducer'
import imagesReducer from './reducers/imagesReducer'
import menuReducer from './reducers/menuReducer'


const reducer = combineReducers({
	galleryStatus: galleryReducer,
	imagesStatus: imagesReducer,
	menuStatus: menuReducer
})

const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk)))
store.subscribe(() => console.log('STORE', store.getState()))
export default store