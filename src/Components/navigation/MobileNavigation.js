import React from 'react'
import { GiHamburgerMenu } from 'react-icons/gi'
import './MobileNavigation.scss'

function MobileNavigation() {
	return (
		<div className="mobile-navigation-container">
			<div className="icon-holder">
				<GiHamburgerMenu className="menu-open-icon"/>
			</div>
		</div>
	)
}

export default MobileNavigation
