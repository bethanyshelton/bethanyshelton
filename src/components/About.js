import React from "react";

import "../App.css";
import "./About.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faBootstrap,
	faCss3Alt,
	faHtml5,
	faJsSquare,
	faNodeJs,
} from "@fortawesome/free-brands-svg-icons";

function About() {
	return (
		<div className="about">
			<div className="bio">
				<h1>Welcome to my portfolio!</h1>
				<p>
					My coding journey began a couple years ago when I wandered onto
					freeCodeCamp.org. I was curious about html and how hard it was to
					learn. I quickly started going through the exercises and I was hooked.
					Since then, I have used a combination of online resources adn classes
					at my local library to continue learning more skills. My library
					offered the freeCodeSchool program which helped accellerate my
					learning. I also completed the Complete Boot Camp by Angela Yu. I
					can't recommend her classes enough to anyone who wants to code.
				</p>
			</div>
			<div className="skills">
				<h2>These are some of my favorite skills:</h2>
				<ul className="skills-list">
					<li className="skills-list-item">
						<FontAwesomeIcon className="icon" icon={faHtml5} />
						HTML5
					</li>
					<li className="skills-list-item">
						<FontAwesomeIcon className="icon" icon={faJsSquare} />
						Javascript
					</li>
					<li className="skills-list-item">
						<FontAwesomeIcon className="icon" icon={faCss3Alt} />
						CSS3
					</li>
					<li className="skills-list-item">
						<FontAwesomeIcon className="icon" icon={faNodeJs} />
						NodeJS
					</li>
					<li className="skills-list-item">
						<FontAwesomeIcon className="icon" icon={faBootstrap} />
						Bootstrap
					</li>
				</ul>
			</div>
		</div>
	);
}

export default About;
