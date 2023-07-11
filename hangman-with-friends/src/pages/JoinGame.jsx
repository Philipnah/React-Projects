import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function JoinGame() {
	const [gameCode, setGameCode] = useState("");
	const [invalidLink, setInvalidLink] = useState(false);
	const navigate = useNavigate();

	function handleOnClick(code){
		console.log("Joining game...");
		if (!code.includes("/game/")) {
			setInvalidLink(true);
			return;
		} else {
			setInvalidLink(false);
		}

		let link = code.split("/game/")[1];
		navigate("/game/" + link);
	}


	return (
		<div className="text-white m-4">
			<p>Enter game code:</p>
			<input onChange={(e) => setGameCode(e.target.value)} type="text" className="bg-slate-700 w-full rounded-md px-3 py-2 my-2" />
			<button onClick={() => handleOnClick(gameCode)} className="py-2 mx-auto my-4 w-full transition duration-300 rounded-md outline outline-2 outline-slate-500 hover:outline-none hover:bg-gray-700 hover:shadow-md">Join</button>
			{invalidLink && <p className="text-red-500">Invalid link!</p>}
		</div>
	);

	// todos for game page:

	// todo: ability to: guess letters or word
	// todo: amount of guesses label
	// todo: reveal word button

}