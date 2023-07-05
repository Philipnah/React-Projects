import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";

import CreateGame from "./pages/CreateGame.jsx";
import JoinGame from "./pages/JoinGame.jsx";
import Game from "./pages/Game.jsx";

function App() {
	return (
		<Router>
			<h1 className="text-white text-center text-4xl font-black mt-16 mb-6">Hangman with Friends!</h1>
			<Navbar />
			<Routes>
				<Route exact path="/" Component={CreateGame} />
				<Route path="/joingame" Component={JoinGame} />
				<Route path="/game" Component={Game} />
			</Routes>
			<Footer />
		</Router>
	);
}

export default App;
