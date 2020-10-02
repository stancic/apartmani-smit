import React from 'react'
import './Button.scss'
import {HashLink as Link} from 'react-router-hash-link'
function Button({button_text, style}) {
	return (
		<button className="buttonStyle" style={style}>{button_text}</button>
	)
}

export default Button
