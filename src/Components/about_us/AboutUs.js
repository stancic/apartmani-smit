import React from 'react'
import './AboutUs.scss'

function AboutUs({title, text, formTitle, familyPhoto, namePlaceholder, lastNamePlaceholder, 
	eMailPlaceholder, phonePlaceholder, messagePlaceholder, buttonText}) {
	
	const handleSubmit = () => {
		console.log('poslano')
	}
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
						<form onSubmit={handleSubmit}>
							<input type="text" value="name" placeholder={namePlaceholder}/>
							<input type="text" value="lastname" placeholder={lastNamePlaceholder}/>
							<input type="text" value="email" placeholder={eMailPlaceholder}/>
							<input type="text" value="phone" placeholder={phonePlaceholder}/>
							<textarea name="message" id="message" cols="30" rows="10" value="text">{messagePlaceholder}</textarea>
							<button type="submit">{buttonText}</button>
						</form>
					</div>
				</div>
			</div>
		</div>
	)
}

export default AboutUs
