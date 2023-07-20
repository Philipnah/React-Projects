import { useParams, Link } from "react-router-dom"
import { useState } from "react";
import CryptoJS from "crypto-js";

import CharacterBox from "../components/CharacterBox";

export default function Game() {
	const params = useParams();
	const gameCode = params.code;

	const decryptedGameCode = CryptoJS.enc.Base64.parse(gameCode).toString(CryptoJS.enc.Utf8);
	const [name, word] = decryptedGameCode.split("-");
	const chars = word.split("");

	const [currentGuess, setCurrentGuess] = useState("");
	const [guesses, setGuesses] = useState([]);
	const [amountOfGuesses, setAmountOfGuesses] = useState(0);
	const [gameOver, setGameOver] = useState(false);

	const [guessError, setGuessError] = useState(false);
	const [alreadyGuessedError, setAlreadyGuessedError] = useState(false);
	const [hasIncorrectGuess, setHasIncorrectGuess] = useState(false);


	function checkWinCondition() {
		for (let i = 0; i < chars.length; i++) {
			if (!guesses.includes(chars[i]) && currentGuess !== chars[i]) {
				return
			}
		}
		setGameOver(true);
	}

	function handleOnClick() {
		setGuessError(false);

		switch (currentGuess.length) {
			case 0:
				break;

			case 1:
				console.log("user guessed a letter")

				if (!guesses.includes(currentGuess)) {
					setAlreadyGuessedError(false);
					setGuesses([...guesses, currentGuess]);
					setAmountOfGuesses(amountOfGuesses + 1);
					if (!chars.includes(currentGuess)) {
						setHasIncorrectGuess(true);
					}

				} else {
					console.log("letter already guessed!");
					setAlreadyGuessedError(true);
				}

				document.getElementById("input").value = "";
				break;

			case word.length:
				console.log("user guessed a word");
				setAmountOfGuesses(amountOfGuesses + 1);

				if (currentGuess === word) {
					console.log("user guessed the word correctly!");
					revealWord();
					setGameOver(true);
				}

				document.getElementById("input").value = "";
				break;

			default:
				setGuessError(true);
				setAlreadyGuessedError(false);
				document.getElementById("input").value = "";
				break;
		}

		checkWinCondition();
	}

	function handleOnChange(event) {
		setCurrentGuess(event.target.value.toLowerCase().replaceAll(" ", ""));
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
		<div className="text-white m-4">
			<p className="text-center m-4">Can you guess {name}'s {word.length}-letter word?</p>
			<ol className="flex flex-wrap justify-center">
				{gameOver ? revealWord() : createCharBoxes()}
			</ol>
			{!gameOver &&
				<>
					{guessError && <p className="text-red-500 text-center">Invalid guess!</p>}
					{alreadyGuessedError && <p className="text-red-500 text-center">You have already guessed that letter!</p>}
					<p className="text-center">Total guesses: {amountOfGuesses}</p>
					{hasIncorrectGuess &&
						<div className="bg-slate-800 opacity-75 rounded-md p-2 my-4">
							<p className="mx-2 text-center">Incorrect guesses</p>
							<ol className="flex flex-wrap justify-center">
								{guesses.map((guess, index) => { if (!chars.includes(guess)) return <li key={index} className="text-red-500 mx-2">{guess}</li> })}
							</ol>
						</div>
					}
					{/*// todo: only allow letters to be guessed*/ }
					<input onChange={(event) => handleOnChange(event)} onKeyDown={(e) => { if (e.key == 'Enter') handleOnClick() }} id="input" type="text" className="bg-slate-700 w-full rounded-md px-3 py-2 my-2" />
					<button onClick={() => handleOnClick()} className="py-2 my-4 w-full transition duration-300 rounded-md outline outline-2 outline-slate-500 hover:outline-none hover:bg-gray-700 hover:shadow-md">Guess</button>
				</>
			}
			{gameOver &&
				<div className="grid place-items-center">
					<div className="text-center bg-slate-700 shadow-2xl rounded-md p-8 w-1/2">
						<p><b>You won!</b> <br />You used <b>{amountOfGuesses}</b> guesses.</p>
						<Link to="/" className="underline">Create new game?</Link>
					</div>
				</div>
			}
		</div>
	)
}