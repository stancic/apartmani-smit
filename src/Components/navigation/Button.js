import React from 'react'
import './Button.scss'
import {HashLink as Link} from 'react-router-hash-link'
function Button({button_text, style}) {
	return (
			<Link to="/"  >
				<button className="buttonStyle" style={style}>{button_text}</button>
			</Link>
	)
}

export default Button