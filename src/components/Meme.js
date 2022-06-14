import React from "react";

export default function Meme() {
  return (
    <div className="meme--container">
      <form>
        <input
          className="meme--first_text"
          type="text"
          placeholder="Top text"
        ></input>
        <input
          className="meme--second_text"
          type="text"
          placeholder="Bottom text"
        ></input>
        <button className="meme--button">Get a new meme image 🖼</button>
      </form>
    </div>
  );
}
