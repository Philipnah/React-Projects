export default function CharacterBox({ character, guessed }) {
	return (
		<li className="bg-slate-700 m-2 p-2 rounded-md">
			{guessed && <p>{character}</p>}
			{!guessed && <p>-</p>}
		</li>
	)
}