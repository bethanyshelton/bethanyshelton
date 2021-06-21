import React from "react";

import "./Footer.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faGithubSquare,
	faLinkedin,
	faTwitterSquare,
} from "@fortawesome/free-brands-svg-icons";

const currentYear = new Date().getFullYear();

function Footer() {
	return (
		<div className="footer">
			<div className="footer-container">
				<p className="copyright">
					&copy; {currentYear} <span className="name"> Bethany Shelton</span>
				</p>
				<div className="social">
					<FontAwesomeIcon className="icon" icon={faGithubSquare} />
					<FontAwesomeIcon className="icon" icon={faLinkedin} />
					<FontAwesomeIcon className="icon" icon={faTwitterSquare} />
				</div>
			</div>
		</div>
	);
}

export default Footer;
