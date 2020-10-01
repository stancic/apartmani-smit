import React, { useState } from 'react'
import { GiHamburgerMenu } from 'react-icons/gi'
import './MobileNavigation.scss'

function MobileNavigation() {
	const [scrollState, setScrollState] = useState(false);
	const [clickedState, setClickedState] = useState('hamburger');

	document.addEventListener("scroll", event => {
		let scrolled = document.scrollingElement.scrollTop;
		if(scrolled>680){
			setScrollState(true);
		} else {
			setScrollState(false);
		}
	})

	const handleIconClick = () => {
		if(clickedState === 'hamburger'){
			setClickedState('close');
			console.log(clickedState)
		} else {
			setClickedState('hamburger');
			console.log(clickedState)
		}
	

	}
	return (
		<div className="mobile-navigation-container">
			<div className="icon-holder">
				<GiHamburgerMenu className="menu-open-icon" 
					style={scrollState ? {color: 'black'} : {}}
					onClick={handleIconClick}	
					/>
			</div>
		</div>
	)
}

export default MobileNavigation
