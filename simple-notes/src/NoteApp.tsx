import React from "react";
import { useState } from "react";

function NoteApp() {
  const [lines, setLines] = useState([""]);
  const [currentTextInput, setCurrentTextInput] = useState("");

  function List() {
	let listOfItems = lines.map((textObject) => (
		<li>{textObject}</li>
	  ));

	return (
	  <div className="List">
		<ul>{listOfItems}</ul>
	  </div>
	);
  }

  function handleClick(input: string) {
	// add new line to "lines"-array
	setLines([...lines, input])
    console.log(lines);
  }

  function handleChange(element: any) {
    setCurrentTextInput(element.target.value);
  }

  return (
    <div>
		<div>
			<List />
		</div>
      <div className="userInput">
        <input
          type="text"
          name="inputField"
          onChange={(element) => handleChange(element)}
        />
        <input
          type="submit"
          value="Add to list"
          onClick={() => handleClick(currentTextInput)}
        />
      </div>
    </div>
  );
}

export default NoteApp;