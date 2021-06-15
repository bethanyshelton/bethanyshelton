import React from "react";

import Hero from "../components/Hero";
import Projects from "../components/Projects";
import About from "../components/About";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

function Home() {
	return (
		<div>
			<Hero />
			<Projects />
			<About />
			<Contact />
			<Footer />
		</div>
	);
}

export default Home;
