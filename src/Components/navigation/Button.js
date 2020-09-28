import React from 'react'
import './Button.scss'
import {HashLink as Link} from 'react-router-hash-link'
function Button({button_text}) {
	return (
			<Link to="/"  >
				<button className="buttonStyle">{button_text}</button>
			</Link>
	)
}

export default Button
