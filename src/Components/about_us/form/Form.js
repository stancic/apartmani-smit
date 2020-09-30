import React, { useState } from 'react'
import './Form.scss'

function Form({namePlaceholder, lastNamePlaceholder, eMailPlaceholder, phonePlaceholder, messagePlaceholder, buttonText}) {
	const handleSubmit = (event) => {
		event.preventDefault();
		console.log('submit');
	}

	const [name, setName] = useState('');
	const [lastName, setLastName] = useState('');
	const [email, setEmail] = useState('');
	const [phone, setPhone] = useState('');
	const [message, setMessage] = useState('');

	const handleNameInput = (event) => {
		event.preventDefault();
		setName(event.target.value);
	}
	const handleLastNameInput = (event) => {
		event.preventDefault();
		setLastName(event.target.value);
	}
	const handleEmailInput = (event) => {
		event.preventDefault();
		setEmail(event.target.value);
	}
	const handlePhoneInput = (event) => {
		event.preventDefault();
		setPhone(event.target.value);
	}
	const handleMessageInput = (event) => {
		event.preventDefault();
		setMessage(event.target.value);
	}

	return (
		<div>
			<form onSubmit={handleSubmit} className="form">
				<div className="name-and-lastName-container">
					<input type="text" value={name} placeholder={namePlaceholder} className="form-input name" onChange={handleNameInput}/>
					<input type="text" value={lastName} placeholder={lastNamePlaceholder} className="form-input last-name" onChange={handleLastNameInput}/>
				</div>

				<div className="email-and-phone-container">
					<input type="text" value={email} placeholder={eMailPlaceholder} className="form-input email" onChange={handleEmailInput}/>
					<input type="text" value={phone} placeholder={phonePlaceholder} className="form-input phone" onChange={handlePhoneInput}/>
				</div>

				<div className="textArea-container">
					<textarea placeholder={messagePlaceholder} name="message" id="message" 
						cols="30" rows="10" value={message} className="message" onChange={handleMessageInput}>
						{messagePlaceholder}
					</textarea>
				</div>

				<div className="form-button-container">
					<button type="submit" className="form-input-button">{buttonText}</button>

				</div>
			</form>
		</div>
	)
}

export default Form
