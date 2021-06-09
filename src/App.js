import "./App.css";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
	return (
		<div className="App">
			<Navbar />
			<Hero />
			<Projects />
			<About />
			<Contact />
			<Footer />
		</div>
	);
}

export default App;
