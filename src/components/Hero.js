import React from "react";

import "../App.css";
import "./Hero.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";

function Hero() {
	return (
		<div className="hero-container">
			<div className="title-container">
				<h1 className="title">Hello there, I'm Bethany</h1>
				<h2 className="subtitle">a Web Developer</h2>
				<div className="scroll">
					<p>Scroll down to see what I can do</p>
					<FontAwesomeIcon className="chevron-down" icon={faChevronDown} />
				</div>
			</div>
		</div>
	);
}

export default Hero;
