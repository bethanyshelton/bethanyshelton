import "./App.css";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
	return (
		<Router>
			<main className="App">
				<Navbar />
				<Hero />
				<Projects />
				<About />
				<Contact />
				<Footer />
				<Switch>
					<Route path="/" exact />
				</Switch>
			</main>
		</Router>
	);
}

export default App;
