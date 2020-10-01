import React from 'react'
import './Location.scss'
function Location({title, locationDetails}) {
	return (
		<div id="location" style={{backgroundColor: '#FFA7A7'}}>
			<div className="location-title-container">
				<h1 className="title">{title}</h1>
			</div>
			<div className="location-data-container">
				<div className="left-side-container">
					<div className="location-details">
						<p>{locationDetails}</p>
					</div>
				</div>
				<div className="right-side-container">
					<div className="google-location-container">
						<div className="google-location">
							<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2797.755909678783!2d16.812077315767112!3d45.47472074076199!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDXCsDI4JzI5LjAiTiAxNsKwNDgnNTEuNCJF!5e0!3m2!1sen!2shr!4v1601389715121!5m2!1sen!2shr" width="600" height="450" frameBorder="0" style={{border: 0}} allowFullScreen="" aria-hidden="false" tabIndex="0" title="maps"></iframe>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Location
