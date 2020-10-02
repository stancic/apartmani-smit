import React from 'react'
import './Home.scss'
import { HiArrowNarrowDown } from 'react-icons/hi'
import Button from '../navigation/Button'
import { HashLink as Link } from 'react-router-hash-link'

function Home({ titleWelcome, titleMessage, button_text }) {
	return (
		<div id="/apartmani-smit">
			<div className="background-image"></div>
			<div className="title-container">
				<h1 className="home-title">{titleWelcome}<br/>{titleMessage}</h1>
				<div className="button-container">
					<Link smooth to="/#/about-us-message" style={{textDecoration:'none'}}>
						<Button button_text={button_text}/>
					</Link>
				</div>
			</div>
			<div className="icon-container">
				<HiArrowNarrowDown className="icon-arrowDown"/>
			</div>
			
		</div>
	)
}

export default Home
