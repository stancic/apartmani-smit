import React, { useState } from 'react'
import { GiHamburgerMenu } from 'react-icons/gi'
import './MobileNavigation.scss'

function MobileNavigation() {
	const [scrollState, setScrollState] = useState(false);

	document.addEventListener("scroll", event => {
		let scrolled = document.scrollingElement.scrollTop;
		console.log(scrolled)
		if(scrolled>680){
			setScrollState(true);
		} else {
			setScrollState(false);
		}
	})

	return (
		<div className="mobile-navigation-container">
			<div className="icon-holder">
				<GiHamburgerMenu className="menu-open-icon"  style={scrollState ? {color: 'black'} : {}}/>
			</div>
		</div>
	)
}

export default MobileNavigation
