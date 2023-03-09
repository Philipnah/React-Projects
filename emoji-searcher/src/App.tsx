import React from "react";
import "./App.css";

import { useState } from "react";
import Emojis from "./Emojis";

function App() {
  const [searchText, setSearchText] = useState("");

  function handleSearchBarChange(element: any) {
    setSearchText(element.target.value);
  }

  return (
    <div className="App">
      <input
        name="searchbar"
        type="text"
		placeholder="Search for an emoji"
        autoFocus={true}
        onChange={(element) => handleSearchBarChange(element)}
      />
      <Emojis {...{ searchText }} />
    </div>
  );
}

export default App;
