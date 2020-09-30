import React from 'react'
import './AboutUs.scss'
import Form from './form/Form'

// handleSubmit, namePlaceholder, lastNamePlaceholder, eMailPlaceholder, phonePlaceholder, messagePlaceholder, buttonText

function AboutUs({title, text, formTitle, familyPhoto, namePlaceholder, lastNamePlaceholder, 
	eMailPlaceholder, phonePlaceholder, messagePlaceholder, buttonText}) {
	
	return (
		<div id="about-us" style={{backgroundColor: '#E2C26B'}}>
			<div className="about-us-title-container">
				<h1 className="title">{title}</h1>
			</div>
			<div className="about-us-data-container">
				<div className="left-side-container"> 
					<div className="family-photo-container">
						<img src={familyPhoto} alt="family" className="family-photo"/>
					</div>
					<div className="about-us-text-container">
						<p>{text}</p>
					</div>
				</div>
				<div className="right-side-container">
					<div className="form-container">
						<h2 className="form-title">{formTitle.above}<br/>{formTitle.below}</h2>
						<Form namePlaceholder={namePlaceholder} lastNamePlaceholder={lastNamePlaceholder} 
							eMailPlaceholder={eMailPlaceholder} phonePlaceholder={phonePlaceholder}
							messagePlaceholder={messagePlaceholder} buttonText={buttonText}
						/>
					</div>
				</div>
			</div>
		</div>
	)
}

export default AboutUs
