import React from "react";

function NumberList(pickedNumbers : any) {
  const listItems = pickedNumbers.pickedNumbers.slice(1).map((number : number) => <li className="item" key={number}>{number}</li>);
  return <div className="center">
    <li className="item" key={pickedNumbers.pickedNumbers}>{pickedNumbers.pickedNumbers[0]}</li>

    <h3>Numbers picked so far:</h3>
    <ul>{listItems}</ul>
  </div>
}

export default NumberList;
