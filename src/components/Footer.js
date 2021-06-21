import React from "react";

import { Link } from "react-router-dom";

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
					<Link to="https://github.com/bethanyshelton">
						<FontAwesomeIcon className="icon" icon={faGithubSquare} />
					</Link>
					<Link to="/">
						<FontAwesomeIcon className="icon" icon={faLinkedin} />
					</Link>
					<Link to="/">
						<FontAwesomeIcon className="icon" icon={faTwitterSquare} />
					</Link>
				</div>
			</div>
		</div>
	);
}

export default Footer;
