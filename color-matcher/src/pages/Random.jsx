import React from "react";

export default function Random() {

	function funky() {
		console.log("funky");
	}

	return (
		<div className="text-white m-4">
			<h1 className="text-center text-2xl">Get Random Color Palettes</h1>
			<p className="text-center">Click the button below to get a random color palette</p>
			<button className="transition duration-300 rounded-md p-4 bg-gray-700 hover:outline shadow-white" onClick={funky}>Generate!</button>
		</div>
	)
}