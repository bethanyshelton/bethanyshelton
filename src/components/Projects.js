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
							src="images/img-9.jpg"
							title="Recipe App"
							category="Flutter"
							path="/services"
						/>
						<ProjectCard
							src="images/img-2.jpg"
							text="Pill Reminder"
							label="React"
							path="/services"
						/>
					</ul>
					<ul className="card-row">
						<ProjectCard
							src="images/img-3.jpg"
							text="Google look-a-like"
							label="HTML"
							path="/services"
						/>
						<ProjectCard
							src="images/img-4.jpg"
							text="Something"
							label="Next.js"
							path="/products"
						/>
						<ProjectCard
							src="images/img-8.jpg"
							text="Somewhere"
							label="Next.js"
							path="/sign-up"
						/>
					</ul>
				</div>
			</div>
		</div>
	);
}

export default Projects;
