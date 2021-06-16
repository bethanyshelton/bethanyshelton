import React from "react";

import "../App.css";
import "./Projects.css";

import ProjectCard from "./ProjectCard";

function Projects() {
	return (
		<div className="projects">
			<h1>Check out my latest projects</h1>
			<div className="project-container">
				<div className="card-container">
					<ul className="card-row">
						<ProjectCard
							src="images/img-2.jpg"
							title="App"
							category="Flutter"
							path="/services"
						/>
						<ProjectCard
							src="images/img-2.jpg"
							title="Pill Reminder"
							category="React"
							path="/services"
						/>
					</ul>
					<ul className="card-row">
						<ProjectCard
							src="images/img-2.jpg"
							title="Testing 123 123"
							category="HTML"
							path="/services"
						/>
						<ProjectCard
							src="images/img-2.jpg"
							title="Something"
							category="HTML"
							path="/products"
						/>
						<ProjectCard
							src="images/img-2.jpg"
							title="Somewhere"
							category="HTML"
							path="/sign-up"
						/>
					</ul>
				</div>
			</div>
		</div>
	);
}

export default Projects;
