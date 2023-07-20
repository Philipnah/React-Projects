export default function CharacterBox({ character, guessed }) {
	return (
		<li className="bg-slate-700 mx-1 my-4 p-2 rounded-md">
			{guessed && <p>{character}</p>}
			{!guessed && <p>-</p>}
		</li>
	)
}