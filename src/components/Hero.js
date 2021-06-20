import React from "react";

import "../App.css";
import "./Hero.css";

function Hero() {
	return (
		<div className="hero-container">
			<video src="video.mp4" autoPlay="true" loop="true" muted="true"></video>
			<div className="title-container">
				<h1 className="title">Hi, I'm Bethany</h1>
				<h2 className="subtitle">a Web Developer</h2>
				<p className="scroll">Scroll down to see what I can do</p>
			</div>
		</div>
	);
}

export default Hero;
