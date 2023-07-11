import { useParams, useLocation } from "react-router-dom"
import { useState } from "react";
import CryptoJS from "crypto-js";

import CharacterBox from "../components/CharacterBox";

export default function Game() {
	const params = useParams();
	const gameCode = params.code;

	//const gameCode = location.state.gameCode;
	const decryptedGameCode = CryptoJS.enc.Base64.parse(gameCode).toString(CryptoJS.enc.Utf8);
	const [name, word] = decryptedGameCode.split("-");
	const chars = word.split("");

	const [currentGuess, setCurrentGuess] = useState("");
	const [guesses, setGuesses] = useState([]);
	const [amountOfGuesses, setAmountOfGuesses] = useState(0);

	const [gameOver, setGameOver] = useState(false);


	function checkWinCondition() {
		for (let i = 0; i < chars.length; i++) {
			if (!guesses.includes(chars[i])) {
				return
			}
		}

		setGameOver(true);
	}

	function handleOnClick() {
		console.log("user guessed")
		if (currentGuess.length === 1) {
			console.log("user guessed a letter")

			if (!guesses.includes(currentGuess)) {
				setGuesses([...guesses, currentGuess]);
				setAmountOfGuesses(amountOfGuesses + 1);

				checkWinCondition();
			} else {
				console.log("letter already guessed!");
				// todo: show user this info (by setting some boolean?)
			}
		}

		if (currentGuess.length === 0) {
			return
		}

		if (currentGuess.length === word.length) {
			console.log("user guessed a word");
			if (currentGuess === word) {
				console.log("user guessed the word correctly!");
				revealWord();
				setGameOver(true);
			} else {
				setAmountOfGuesses(amountOfGuesses + 1);
			}
		} else {
			// todo: show user error
		}

		document.getElementById("input").value = "";
	}

	function handleOnChange(event) {
		setCurrentGuess(event.target.value);
	}

	function checkGuessed(character, index) {
		if (guesses.includes(character)) {
			return <CharacterBox character={character} key={index} guessed={true} />
		} else {
			return <CharacterBox character={character} key={index} guessed={false} />
		}
	}

	function createCharBoxes() {
		return chars.map((character, index) => { return checkGuessed(character, index) })
	}

	function revealWord() {
		return chars.map((character, index) => { return <CharacterBox character={character} key={index} guessed={true} /> })
	}


	return (
		<div className="text-white">
			<p>Can you guess {name}'s {word.length}-letter word?</p>
			<ol className="flex flex-wrap justify-center">
				{gameOver ? revealWord() : createCharBoxes()}
			</ol>
			{!gameOver &&
				<>
					<input onChange={(event) => handleOnChange(event)} onKeyDown={(e) => { if (e.key == 'Enter') handleOnClick() }} id="input" type="text" className="bg-slate-700 w-full rounded-md px-3 py-2 my-2" />
					<button onClick={() => handleOnClick()} className="py-2 mx-auto my-4 w-full transition duration-300 rounded-md outline outline-2 outline-slate-500 hover:outline-none hover:bg-gray-700 hover:shadow-md">Guess</button>
				</>
			}
			{gameOver &&
				<>
					<p>You won!</p>
					<button>Create new game?</button>
				</>
			}
		</div>
	)
}