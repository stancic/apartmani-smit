import React from 'react'
import './Button.scss'

function Button({button_text}) {
	return (
		<button className="request-button">{button_text}</button>
	)
}

export default Button
