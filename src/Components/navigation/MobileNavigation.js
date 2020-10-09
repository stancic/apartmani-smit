import React, { useState } from 'react'
import { GiHamburgerMenu } from 'react-icons/gi'
import { AiOutlineClose } from 'react-icons/ai'
import { HashLink as Link } from 'react-router-hash-link'
import './MobileNavigation.scss'

function MobileNavigation({ title, firstLink, secondLink, thirdLink, contact, mail}) {
	const [scrollState, setScrollState] = useState(false);
	const [clickedState, setClickedState] = useState('hamburger'); //icon state
	const [linkClickState, setLinkClickState] = useState(false)

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
			document.body.style.overflow = "hidden";
		} else {
			setClickedState('hamburger');
			document.body.style.overflow = "scroll";
		}
	}

	/*This handle is connected with handle above.
	 *It functions in the way that when link is clicked
	 *it chages both icon state and link state
	 *and when icon state is changed it changes
	 *menu style e.g. removes it from screen
	 */	
	const handleLinkClick = () => {
		if(!linkClickState) setLinkClickState(true);
		setClickedState('hamburger');
		setLinkClickState(false);
		document.body.style.overflow = "overlay";
	}

	return (
		<div className="mobile-navigation-container">
			<div className="icon-holder">
			{
				clickedState === 'hamburger'
				? <GiHamburgerMenu className="menu-open-icon" 
					style={scrollState ? {color: 'black'} : {}}
					onClick={handleIconClick}	
					/>
				: <AiOutlineClose className="menu-close-icon" 
					style={scrollState ? {color: 'black'} : {}}
					onClick={handleIconClick}	
					/>
			}
				
			</div>
			<div className="mobile-menu-container" 
				style={clickedState === 'hamburger' ? {left: '100%'} : {left: '0'}}
			>
				<div className="mobile-menu-title-container">
						<Link smooth to="/#/apartmani-smit" className="mobile-link" onClick={handleLinkClick}>
							<h1 className="title">{title}</h1>
						</Link>
				</div>

				<div className="mobile-links-container">
					<div className="mobile-apartment-link-container">
						<Link smooth to="/#/apartments" className="mobile-link" onClick={handleLinkClick}>
							<h2 className="apartment-link">{firstLink}</h2>
						</Link>
					</div>
					<div className="mobile-location-link-container" >
						<Link smooth to="/#/location" className="mobile-link" onClick={handleLinkClick}>
							<h2 className="location-link">{secondLink}</h2>
						</Link>
					</div>
					<div className="mobile-aboutUs-link-container">
						<Link smooth to="/#/about-us" className="mobile-link" onClick={handleLinkClick}>
							<h2 className="aboutUs-link">{thirdLink}</h2>
						</Link>
					</div>
					<div className="mobile-contact-info-container">
						<div className="mobile-phone-number-container">
							<p>{contact}</p>
						</div>
						<div className="mobile-email-container">
							<Link smooth to="/#/about-us-message" className="mobile-link" onClick={handleLinkClick}>
								<p>{mail}</p>
							</Link>
						</div>
					</div>
				</div>
				
			</div>	
		</div>
	)
}

export default MobileNavigation
