import React from 'react'
import './Navigation.scss'
import { HashLink as Link} from 'react-router-hash-link'


function Navigation({ title, firstLink, secondLink, thirdLink, contact, button_text}) {
	return (
		<div className="nav-container">
			<div className="nav-links-container">
				<ul>
					<li className="nav-link-item">
						<Link to="/" className="title nav-link">{title}</Link>
					</li>
					<li className="nav-link-item">
						<Link to="/" className="nav-link">{firstLink}</Link>
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
						<Link className="nav-contact contact">{contact}</Link>
					</li>
					<li className="nav-contact-item">
						<Link className="nav-contact" to="/">
							<button className="buttonStyle">{button_text}</button>
						</Link>
					</li>
				</ul>
			</div>
		</div>
	)
}

export default Navigation
