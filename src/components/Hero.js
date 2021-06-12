import React from "react";
import "./Hero.css";

function Hero() {
	return (
		<div className="hero">
			<video src="background-video.mp4" autoplay muted loop></video>
			<div className="title-container">
				<h1 className="title">Full Stack Web Developer</h1>
				<h2 className="subtitle">Welcome to my Portfolio!</h2>
			</div>
		</div>
	);
}

export default Hero;
