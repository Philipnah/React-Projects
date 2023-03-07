import React from "react";
import { useState } from "react";

function NoteApp() {
  const [lines, setLines] = useState<string[]>([]);
  const [currentTextInput, setCurrentTextInput] = useState("");

  function List() {
    let listOfItems = lines.map((textObject) => <li>{textObject}</li>);

    return (
      <div className="List">
        <ul>{listOfItems}</ul>
      </div>
    );
  }

  function handleClick(input: string) {
    // add new line to "lines"-array
    setLines([...lines, input]);
    console.log(lines);
  }

  function handleChange(element: any) {
    setCurrentTextInput(element.target.value);
  }

  function handleRemoveButton() {
    setLines(lines.slice(1, lines.length));
  }

  return (
    <main className="container">
      <div className="userInput">
        <input
          type="text"
          name="inputField"
          id="input"
          onChange={(element) => handleChange(element)}
        />
        <input
          type="submit"
          value="Add to list"
          onClick={() => handleClick(currentTextInput)}
        />
        <input
          type="button"
          value="Remove top element"
		  className="contrast"
          onClick={() => handleRemoveButton()}
        />
      </div>
      <div>
        <List />
      </div>
    </main>
  );
}

export default NoteApp;
