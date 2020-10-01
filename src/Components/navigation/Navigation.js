import React, { useState } from 'react'
import './Navigation.scss'
import { HashLink as Link} from 'react-router-hash-link'
import Button from './Button'

function Navigation({ title, firstLink, secondLink, thirdLink, contact, button_text}) {

	const [scrollState, setScrollState] = useState(false);

	document.addEventListener("scroll", event => {
		let scrolled = document.scrollingElement.scrollTop;
		
		if(scrolled>50){
			setScrollState(true);
		} else {
			setScrollState(false);
		}
	})

	const navScrolledStyle = {
		backgroundColor: 'white',
		color: 'black',
	}
	
	return (
		<div className="nav-container" style={scrollState ? navScrolledStyle : {}}>
			<div className="nav-links-container">
				<ul>
					<li className="nav-link-item">
						<Link smooth to="/#home" className="nav-title nav-link" style={scrollState ? {color: 'black'} : {}}>{title}</Link>
					</li>
					<li className="nav-link-item">
						<Link smooth to="/#apartments" className="nav-link" style={scrollState ? {color: 'black'} : {}}>{firstLink}</Link>
					</li>
					<li className="nav-link-item">
						<Link smooth to="/#location" className="nav-link" style={scrollState ? {color: 'black'} : {}}>{secondLink}</Link>
					</li>
					<li className="nav-link-item">
						<Link smooth to="/#about-us" className="nav-link" style={scrollState ? {color: 'black'} : {}}>{thirdLink}</Link>
					</li>
				</ul>
			</div>
			<div className="nav-contact-container">
				<ul>
					<li className="nav-contact-item">
						<Link to="/" className="nav-contact contact"  style={scrollState ? {color: 'black'} : {}}>{contact}</Link>
					</li>
					<li className="nav-contact-item">
						<Button button_text={button_text} style={scrollState ? {color: 'black', border: '1px solid black'} : {}}/>
					</li>
				</ul>
			</div>
		</div>	
	)
}

export default Navigation
