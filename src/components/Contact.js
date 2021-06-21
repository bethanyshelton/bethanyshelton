import React from "react";

import "../App.css";
import "./Contact.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane } from "@fortawesome/free-regular-svg-icons";

function Contact() {
	return (
		<div className="contact">
			<h1>Send me a message</h1>
			<form action="post" className="contact-form">
				<input
					className="input-box"
					type="text"
					placeholder="Your Name"
					required
				/>
				<input
					className="input-box"
					type="email"
					placeholder="Your Email"
					required
				/>
				<textarea
					className="input-box text-area"
					placeholder="Message"
					rows={8}
					required
				/>
				<button className="input-box" type="submit">
					Send
					<FontAwesomeIcon className="icon" icon={faPaperPlane} />
				</button>
			</form>
		</div>
	);
}

export default Contact;
