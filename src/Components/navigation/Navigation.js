import React from 'react'
import './Navigation.scss'
import { HashLink as Link} from 'react-router-hash-link'
import Button from './Button'

function Navigation({ title, firstLink, secondLink, thirdLink, contact, button_text}) {
	return (
		<div className="nav-container">
			<div className="nav-links-container">
				<ul>
					<li className="nav-link-item">
						<Link to="/" className="nav-title nav-link">{title}</Link>
					</li>
					<li className="nav-link-item">
						<Link to="/apartments" className="nav-link">{firstLink}</Link>
					</li>
					<li className="nav-link-item">
						<Link to="/" className="nav-link">{secondLink}</Link>
					</li>
					<li className="nav-link-item">
						<Link to="/" className="nav-link">{thirdLink}</Link>
					</li>
				</ul>
			</div>
			<div className="nav-contact-container">
				<ul>
					<li className="nav-contact-item">
						<Link to="/" className="nav-contact contact">{contact}</Link>
					</li>
					<li className="nav-contact-item">
						<Button button_text={button_text}/>
					</li>
				</ul>
			</div>
		</div>	
	)
}

export default Navigation
