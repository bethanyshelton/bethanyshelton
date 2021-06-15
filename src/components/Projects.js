import React from "react";

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
							title="Recipe App"
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
							title="Google look-a-like"
							category="HTML"
							path="/services"
						/>
						<ProjectCard
							src="images/img-2.jpg"
							title="Something"
							category="Next.js"
							path="/products"
						/>
						<ProjectCard
							src="images/img-2.jpg"
							title="Somewhere"
							category="Next.js"
							path="/sign-up"
						/>
					</ul>
				</div>
			</div>
		</div>
	);
}

export default Projects;
