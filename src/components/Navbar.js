import React from "react";
import { Link } from "react-router-dom";

import "./Navbar.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTerminal } from "@fortawesome/free-solid-svg-icons";

function Navbar() {
	return (
		<nav className="navbar">
			<div className="navbar-container">
				<Link to="/" className="navbar-logo">
					Bethany Shelton
					<FontAwesomeIcon className="terminal" icon={faTerminal} />
				</Link>
				<div className="menu-icon"></div>
				<ul className="nav-menu">
					<li className="nav-item">
						<Link to="/projects" className="nav-links">
							PROJECTS
						</Link>
					</li>
					<li className="nav-item">
						<Link to="/about" className="nav-links">
							ABOUT
						</Link>
					</li>
					<li className="nav-item">
						<Link to="/contact" className="nav-links">
							CONTACT
						</Link>
					</li>
				</ul>
			</div>
		</nav>
	);
}

export default Navbar;
