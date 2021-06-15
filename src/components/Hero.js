import React from "react";
import "./Hero.css";

function Hero() {
	return (
		<div className="hero-container">
			<video src="video2.mp4" autoplay="true" loop="true" muted="true"></video>
			<div className="title-container">
				<h1 className="title">Full Stack Web Developer</h1>
				<h2 className="subtitle">Welcome to my Portfolio!</h2>
			</div>
		</div>
	);
}

export default Hero;
