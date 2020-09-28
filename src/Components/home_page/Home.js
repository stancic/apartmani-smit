import React from 'react'
import './Home.scss'
import { HiArrowNarrowDown } from 'react-icons/hi'
import Button from '../navigation/Button'

function Home({ titleWelcome, titleMessage, button_text }) {
	return (
		<div id="/">
			<div className="background-image"></div>
			<div className="title-container">
				<h1 className="home-title">{titleWelcome}<br/>{titleMessage}</h1>
				<div className="button-container">
					<Button button_text={button_text}/>
				</div>
			</div>
			<div className="icon-container">
				<HiArrowNarrowDown className="icon-arrowDown"/>
			</div>
			
		</div>
	)
}

export default Home
