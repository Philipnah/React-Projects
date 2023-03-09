import React from "react";
import "./App.css";

import { emojiList } from "./emojiList";

function Emojis({ searchText }: any) {
	searchText = searchText.toLowerCase().trim()

  return (
    <div className="grid">
      {emojiList.map((data, key) => {
        let emojiKeywords = data.keywords.split(" ");
		
		let containsMatch : boolean = false;
		for (let i = 0; i < emojiKeywords.length; i++){
			if (emojiKeywords[i].match(searchText) !== null){
				containsMatch = true;
				break;
			}
		}

        if (
          data.title.includes(searchText) ||
          emojiKeywords.includes(searchText) ||
		  containsMatch ||
          searchText === ""
        ) {
          return (
            <div className="emoji-card" key={key}>
              {data.symbol}
            </div>
          );
        }
      })}
    </div>
  );
}

export default Emojis;
