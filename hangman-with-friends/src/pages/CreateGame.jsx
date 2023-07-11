import { useState } from "react";
import CryptoJS from "crypto-js";

export default function CreateGame() {

	const [word, setWord] = useState("");
	const [name, setName] = useState("");
	const currentUrl = window.location.href;

	const [gameUrl, setGameUrl] = useState("");
	const [codeCreated, setCodeCreated] = useState(false);

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

	function copyUrlToClip(){
		navigator.clipboard.writeText(gameUrl);
	}

	function createGameLink() {
		// todo: add checks

		if (word.length === 0 || name.length === 0){
			console.log("Word or name is empty!");
			return
		}

		console.log("Word: " + word);
		console.log("Name: " + name);

		setGameUrl(currentUrl + "game/" + createGameCode());
		navigator.clipboard.writeText(gameUrl).then(() => console.log("copied!"));
		setCodeCreated(true);

		for (let i = 0; i < document.getElementsByTagName("input").length; i++) {
			document.getElementsByTagName("input")[i].value = "";
		}

	}

	function handleOnChange(event, type) {
		removeIllegalChars(event);
		if (type === "name"){
			setName(event.target.value);
		} else if (type === "word"){
			setWord(event.target.value);
		}
		setCodeCreated(false);
	}


	return (
		<div className="text-white grid grid-cols-2 flex-wrap justify-center m-4">
			<div className="mr-4">
				<p>Enter a word:</p>
				<input onChange={(event) => handleOnChange(event, "word") } onKeyDown={(e) => {if (e.key == "Enter") createGameLink()}} type="text" className="bg-slate-700 w-full rounded-md px-3 py-2 my-2" maxLength={45} />
			</div>
			<div className="ml-4">
				<p>Enter your name:</p>
				<input onChange={(event) => handleOnChange(event, "name") } onKeyDown={(e) => {if (e.key == "Enter") createGameLink()}} type="text" className="bg-slate-700 w-full rounded-md px-3 py-2 my-2" maxLength={20} />
			</div>
			<button onClick={() => createGameLink()} className="col-span-2 py-2 mx-auto my-4 w-full transition duration-300 rounded-md outline outline-2 outline-slate-500 hover:outline-none hover:bg-gray-700 hover:shadow-md">Create Link</button>

			{codeCreated && 
			// todo style this!!!
			<>
				<div className="col-span-2 text-center">Link has been copied to clipboard!</div>
				<button onClick={() => copyUrlToClip()} className="col-span-2 text-center">Copy link again</button>
			</>
			}
		</div>
	);
}