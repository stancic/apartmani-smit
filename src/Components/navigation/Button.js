import React from 'react'
import './Button.scss'
function Button({button_text, style}) {
	return (
		<button className="buttonStyle" style={style}>{button_text}</button>
	)
}

export default Button
