import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTerminal } from "@fortawesome/free-solid-svg-icons";

import { Link } from "react-router-dom";

function Navbar() {
	return (
		<nav className="navbar">
			<div className="navbar-container">
				<Link to="/" className="navbar-logo">
					Bethany Shelton
					<FontAwesomeIcon icon={faTerminal} />
				</Link>
				<ul>
					<Link to="/projects" className="links">
						PROJECTS
					</Link>
					<Link to="/about" className="links">
						ABOUT
					</Link>
					<Link to="/contact" className="links">
						CONTACT
					</Link>
				</ul>
			</div>
		</nav>
	);
}

export default Navbar;
