import React, { useState } from "react";
import NumberList from "./NumberList";
import "@picocss/pico";

// BUG: picking the 98th number causes the app to crash
function App() {
  const [pickedNumbers, setPickedNumbers] = useState<number[]>([]);

  function handlePickNumber() {
    if (pickedNumbers.length === 99) {
      alert("You've picked all the numbers! Ctrl + R to start over.")
      return;
    }

    let newRandomNumber = Math.floor(Math.random() * 99);
    while (pickedNumbers.includes(newRandomNumber) || newRandomNumber === 0) {
      newRandomNumber = Math.floor(Math.random() * 99);
    }

    setPickedNumbers([newRandomNumber, ...pickedNumbers]);
  }

  return (
    <div className="App">
      <main className="container">
        <h1 className="center">Bingo Bango!</h1>
        <button className="button" onClick={() => handlePickNumber()}>
          Pick a number
        </button>
        <NumberList pickedNumbers={pickedNumbers} />
      </main>
    </div>
  );
}

export default App;
