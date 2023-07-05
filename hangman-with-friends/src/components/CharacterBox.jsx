export default function CharacterBox({ character, guessed }) {
	return (
		<li className="bg-slate-700 m-4">
			{guessed && <p>{character}</p>}
			{!guessed && <p>-</p>}
		</li>
	)
}