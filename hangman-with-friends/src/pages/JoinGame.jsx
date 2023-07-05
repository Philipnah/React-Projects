import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function JoinGame() {
	const [gameCode, setGameCode] = useState("");
	const navigate = useNavigate();

	function handleOnClick(code){
		console.log("Joining game...");
		navigate("/game", {
			state: {
				gameCode: code
			}
		});
	}


	return (
		<div className="text-white">
			<p>Enter game code:</p>
			<input onChange={(e) => setGameCode(e.target.value)} type="text" className="bg-slate-700 w-full rounded-md px-3 py-2 my-2" />
			<button onClick={() => handleOnClick(gameCode)} className="py-2 mx-auto my-4 w-full transition duration-300 rounded-md outline outline-2 outline-slate-500 hover:outline-none hover:bg-gray-700 hover:shadow-md">Join</button>
		</div>
	);

	// todos for game page:

	// todo: ability to: guess letters or word
	// todo: amount of guesses label
	// todo: reveal word button

}