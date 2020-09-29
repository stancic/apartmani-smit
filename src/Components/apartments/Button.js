import React from 'react'
import { Link } from 'react-router-dom'
import './Button.scss'

function Button({button_text}) {
	return (
		<Link to="/"  >
			<button className="request-button">{button_text}</button>
		</Link>
	)
}

export default Button
