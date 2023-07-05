import { useState } from "react";
import CryptoJS from "crypto-js";

export default function CreateGame() {

	const [word, setWord] = useState("");
	const [name, setName] = useState("");

	function removeIllegalChars(event) {
		event.target.value = event.target.value.replaceAll(" ", "");
		event.target.value = event.target.value.replaceAll("-", "");
		event.target.value = event.target.value.replaceAll(".", "");
		event.target.value = event.target.value.replaceAll(",", "");
	}

	function createGameCode(){
		let combined = name + "-" + word;
		return CryptoJS.enc.Base64.stringify(CryptoJS.enc.Utf8.parse(combined));
	}

	function createGame() {
		console.log("Creating game...");

		console.log("Word: " + word);
		console.log("Name: " + name);

		let gameCode = createGameCode();
		console.log("Game code: " + gameCode);




		// todo: copy (game code)/(game link) to clipboard
		// todo: /game/:gamecode ??? (maybe spørg olivier)

		console.log("Game created!");
	}


	return (
		<div className="text-white grid grid-cols-2 flex-wrap justify-center m-4">
			<div className="mr-4">
				<p>Enter a word:</p>
				<input onChange={(event) => { removeIllegalChars(event); setWord(event.target.value) }} type="text" className="bg-slate-700 w-full rounded-md px-3 py-2 my-2" maxLength={45} />
			</div>
			<div className="ml-4">
				<p>Enter your name:</p>
				<input onChange={(event) => { removeIllegalChars(event); setName(event.target.value) }} type="text" className="bg-slate-700 w-full rounded-md px-3 py-2 my-2" maxLength={20} />
			</div>
			<button onClick={createGame} className="col-span-2 py-2 mx-auto my-4 w-full transition duration-300 rounded-md outline outline-2 outline-slate-500 hover:outline-none hover:bg-gray-700 hover:shadow-md">Create</button>
		</div>
	);
}