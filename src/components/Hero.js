import React from "react";

import "../App.css";
import "./Hero.css";

function Hero() {
	return (
		<div className="hero-container">
			<video src="video.mp4" autoPlay="true" loop="true" muted="true"></video>
			<div className="title-container">
				<h1 className="title">Hi, I'm a Web Developer</h1>
				<h2 className="subtitle">Welcome to my Portfolio!</h2>
			</div>
		</div>
	);
}

export default Hero;
