import React from "react";

import { Link } from "react-router-dom";

function ProjectCard(props) {
	return (
		<li className="project-card">
			<Link className="card-link" to={props.path}>
				<figure className="card-pic-container" category={props.category}>
					<img className="card-pic" alt="ADD LATER" src={props.src} />
				</figure>
				<div className="card-info">
					<h3 className="card-title">{props.title}</h3>
				</div>
			</Link>
		</li>
	);
}

export default ProjectCard;
